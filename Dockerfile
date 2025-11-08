# --- build stage ---
FROM node:20.19.0-alpine AS build
WORKDIR /app
# Install deps only (using yarn)
COPY package.json yarn.lock .nvmrc ./
RUN yarn install --frozen-lockfile
# Copy rest of source
COPY . ./
# Build static assets (Vite outputs to build/ per config)
RUN yarn build

# --- runtime stage ---
FROM nginx:1.27-alpine AS runtime
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy build output
COPY --from=build /app/build .
# Copy custom nginx config for SPA fallback
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

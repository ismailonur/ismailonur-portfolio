# İsmail Onur Portfolio

A modern, responsive portfolio website built with React and Vite.

## 🚀 Tech Stack

- **React** 18.3.1
- **Vite** 7.1.12 - Lightning fast build tool ⚡
- **React Router DOM** 6.30.1
- **React Icons** 4.12.0
- **React Helmet** for SEO

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

```bash
npm start
# or
npm run dev
```

Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

## 🏗️ Build

```bash
npm run build
```

Builds the app for production to the `build` folder.

## 👀 Preview

```bash
npm run preview
```

Preview the production build locally.

## 🚀 Deployment

### Docker Deployment (Dokploy)

```bash
# Build the Docker image
docker build -t ismailonur-portfolio .

# Run the container
docker run -p 80:80 ismailonur-portfolio
```

The app will be available at `http://localhost`

### Manual Deployment

```bash
npm run build
```

Then upload the `build` folder to your server.

## 📝 Features

- 🪪 Single-page contact card (name, title, profile links, ETH Gas Tracker)
- 🌍 Multi-language support (TR/EN)
- 🔒 Privacy policy pages for the published apps (linked from App Store / Google Play — keep these routes stable)
- 📱 Responsive design

## 🔄 Migration to Vite

This project has been successfully migrated from Create React App to Vite for:
- ⚡ Faster development experience
- 🔒 Zero security vulnerabilities
- 📦 Smaller bundle sizes
- 🚀 Modern build tooling

## 📄 License

All rights reserved © 2025 İsmail Onur

---

Last updated: October 24, 2025

# Copilot Instructions for AI Agents

## Project Overview
This is a modern, responsive portfolio website built with React and Vite. It features multi-language support, a blog, contact form (EmailJS), Google Analytics, and SEO optimization. The codebase is organized for clarity and modularity, with each major section in its own directory under `src/screens/`.

## Architecture & Structure
- **Entry Point:** `src/index.jsx` bootstraps the React app.
- **Main App:** `src/App.jsx` is the root component, orchestrating routing and layout.
- **Routing:** Uses React Router (`react-router-dom`) for navigation between screens in `src/screens/`.
- **Screens:** Each page (About, Blog, Contact, etc.) is a separate component in `src/screens/<section>/`.
- **Components:** Shared and specialized components are in `src/components/`.
- **Assets:** Static files (images, icons) are in `src/assets/`.
- **Languages:** Multi-language logic is in `src/languages/` and `src/components/languageComp/`.
- **Data:** Static content (e.g., policies) is in `src/data/`.

## Developer Workflows
- **Install dependencies:** `npm install`
- **Start development server:** `npm run dev` or `npm start` (http://localhost:3000)
- **Build for production:** `npm run build` (outputs to `build/`)
- **Preview production build:** `npm run preview`
- **Deploy to GitHub Pages:** `npm run deploy`

## Patterns & Conventions
- **Component Naming:** Use PascalCase for React components. Place each screen/component in its own folder if it has related assets/styles.
- **CSS:** Each screen/component has a dedicated CSS file in its folder (e.g., `about/about.css`).
- **Language Support:** Use the language components and data in `src/languages/` and `src/components/languageComp/` for i18n.
- **Analytics:** Use `src/components/useAnalyticsEventTracker/useAnalyticsEventTracker.js` for Google Analytics event tracking.
- **Contact Form:** Integrate with EmailJS in `src/screens/contact/Contact.jsx`.
- **SEO:** Use React Helmet in page components for meta tags.

## Integration Points
- **EmailJS:** Used in contact form for email delivery.
- **Google Analytics:** Event tracking via custom hook.
- **React Helmet:** SEO meta management.
- **Swiper:** Used for testimonials and portfolio carousels.

## Examples
- To add a new screen, create a folder in `src/screens/`, add a component (e.g., `NewScreen.jsx`), CSS, and update routing in `App.jsx`.
- For new languages, update `src/languages/` and language components.
- For analytics, use the custom hook in `useAnalyticsEventTracker.js`.

## References
- `src/App.jsx`, `src/screens/`, `src/components/`, `src/languages/`, `src/data/`
- See `README.md` for build and deploy commands

---
_Last updated: October 24, 2025_

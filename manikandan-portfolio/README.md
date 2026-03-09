# Manikandan — Portfolio Website

A modern, production-grade personal portfolio built with **React + Vite + Tailwind CSS**.

## ✨ Features

- ⚡ React 18 + Vite (blazing fast dev server & build)
- 🎨 Tailwind CSS with custom design tokens
- 🌙 Dark / Light mode with system preference detection
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎭 Smooth scroll animations (Intersection Observer)
- ✍️ Typewriter effect in Hero
- 🔍 Project filtering by category
- 📊 Animated skill progress bars
- 💌 Contact form with loading/success states
- 📥 Resume download button
- 🔗 GitHub & LinkedIn links
- 🎯 SEO-friendly HTML structure

## 🗂 Project Structure

```
manikandan-portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf          ← Replace with your actual resume
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       ← Fixed nav with scroll detection & mobile menu
│   │   ├── Hero.jsx         ← Full-screen hero with typewriter & stats
│   │   ├── About.jsx        ← Bio, contact info, highlight cards
│   │   ├── Skills.jsx       ← Animated skill bars in 3 categories
│   │   ├── Projects.jsx     ← Filterable project cards
│   │   ├── Experience.jsx   ← Timeline + education sidebar
│   │   ├── Contact.jsx      ← Contact form + social links
│   │   ├── Footer.jsx       ← Footer with nav & socials
│   │   └── ScrollToTop.jsx  ← Floating back-to-top button
│   ├── context/
│   │   └── ThemeContext.jsx  ← Dark/light mode context
│   ├── hooks/
│   │   └── useScrollAnimation.js  ← Intersection Observer reveal hook
│   ├── data/
│   │   └── portfolioData.js  ← All content (edit this file!)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css            ← Global styles + CSS variables
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open http://localhost:5173
```

## 🛠 Customisation

All content lives in **`src/data/portfolioData.js`** — edit that single file to update:
- Personal info (name, email, phone, social links)
- About paragraph
- Skills with proficiency levels
- Projects
- Work experience & education

### Connecting the Contact Form

The form is currently simulated. To make it live, wire it to:
- [EmailJS](https://www.emailjs.com/) — free, browser-side
- [Formspree](https://formspree.io/) — simple endpoint
- Your own Node.js backend

### Resume Download

Replace `public/resume.pdf` with your actual resume file.

## 📦 Build for Production

```bash
npm run build
# Output in /dist — ready to deploy to Vercel, Netlify, or any static host
```

## 🎨 Design System

| Token | Value |
|---|---|
| Display Font | Syne (Google Fonts) |
| Body Font | DM Sans (Google Fonts) |
| Primary Accent | Violet `#7c3aed` |
| Secondary Accent | Cyan `#06b6d4` |
| Tertiary Accent | Blue `#3b82f6` |
| Dark bg | `#050510` |
| Light bg | `#f8f8ff` |

---

Built with ❤️ by Manikandan

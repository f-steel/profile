# Personal Profile Website

A modern, interactive personal profile and portfolio website showcasing professional information, skills, and achievements.

## About

This is a single-page portfolio website that displays:
- **Hero Section**: Name, title, bio, and social links with interactive mouse-tracking effects
- **About Section**: Professional background, education, current role, and major achievements
- **Skills Section**: Technical skills organized by category (Frontend, Backend, Tools)

The site features smooth scroll animations, interactive hover effects, and a responsive design that works across all devices.

## Tech Stack

### Core Framework
- **Next.js 15** - React framework with App Router for server-side rendering and optimal performance
- **React 19** - UI library for building interactive components
- **TypeScript** - Type-safe JavaScript for better code quality and developer experience

### Styling
- **Tailwind CSS 4** - Utility-first CSS framework for rapid UI development
- **PostCSS** - CSS processing with Tailwind integration

### Icons & Assets
- **React Icons** - Icon library for social media and UI icons

### Development Tools
- **ESLint** - Code linting and quality assurance
- **Turbopack** - Fast bundler for development (used with `--turbopack` flag)

## Key Features

- 🎨 **Modern UI**: Gradient backgrounds, glass-morphism effects, and smooth animations
- 🖱️ **Interactive Elements**: Mouse-tracking effects on profile avatar
- 📱 **Fully Responsive**: Mobile-first design that adapts to all screen sizes
- ⚡ **Performance Optimized**: Built with Next.js for fast page loads and SEO
- ♿ **Accessible**: Includes skip links, ARIA labels, and keyboard navigation support
- 🎭 **Scroll Animations**: Intersection Observer API for fade-in animations as you scroll

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main page component with all sections
│   ├── layout.tsx        # Root layout with metadata
│   └── globals.css       # Global styles
└── data/
    └── profile.ts        # Profile data and content (easily customizable)
```

## Customization

All profile content is stored in `src/data/profile.ts`. Simply update the `profileData` object to customize:
- Personal information (name, title, bio)
- Education and work experience
- Skills and technologies
- Social media links
- Achievements and stats

## Deployment

The app is optimized for deployment on Vercel, but can be deployed to any platform that supports Next.js:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Railway

---

Built with ❤️ using Next.js and Tailwind CSS

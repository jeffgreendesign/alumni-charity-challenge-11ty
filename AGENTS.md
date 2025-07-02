# AGENTS.md - Alumni Charity Challenge Website

This file provides guidance for AI agents working on this codebase.

## Development Environment

- **Framework**: Eleventy (11ty) v2.0.1 - Static site generator
- **Current Branch**: `feat/modern-animations-gsap` (ahead of origin by 3 commits)
- **Node.js**: Required for build process
- **Package Manager**: npm with package-lock.json for consistent dependencies

### Available Scripts

- `npm run dev` or `npm start` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run build:prod` - Build with path prefix for production
- `npm run clean` - Remove build directory
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Auto-fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check formatting

### Code Quality Tools

- **ESLint**: Configured with modern flat config (`eslint.config.mjs`)
- **Prettier**: Code formatting with consistent style (`.prettierrc`)
- **HTML Minification**: Automatic minification in production builds
- **CSS Minification**: Clean-CSS integration via Eleventy

## Animation System (GSAP)

A modern JavaScript animation system using GSAP (GreenSock Animation Platform) has been implemented for enhanced user experience.

- **Core Library**: GSAP v3.12.5 and ScrollTrigger plugin loaded via CDN in `_includes/_footer.html`
- **Custom Animations**: All animation logic is in `js/animations.js` (402 lines of well-documented code)
- **Build Integration**: `js/animations.js` is copied to `_site/js/` via Eleventy passthrough copy in `.eleventy.js`
- **Performance**: Optimized animations using CSS transforms and opacity with GPU acceleration
- **ScrollTrigger**: Lazy-loading animations that trigger on scroll for better performance
- **Accessibility**: Comprehensive `prefers-reduced-motion` media query support - animations are disabled/reduced for users with motion sensitivity
- **jQuery Independence**: Animation system operates independently of existing jQuery code in `main.js`

### Animation Features Implemented

- Page load fade-in animations
- Section entrance animations with stagger effects
- Animated counters for statistics (478 tons, 40+ colleges)
- Hover effects on participant logos with scale and shadow
- Smooth scroll-triggered animations for past events

### ESLint Configuration

- GSAP globals (`gsap`, `ScrollTrigger`) are properly configured
- Console logging allowed in `animations.js` for debugging
- Strict linting rules with appropriate exceptions

**When working with animations:**

- All animation documentation and guidelines are in `js/animations.js` (lines 350-402)
- New animations must respect `prefers-reduced-motion` setting
- Test on both desktop and mobile for performance
- Keep animations purposeful and performance-conscious
- Use GSAP's recommended practices for optimal performance

## File Structure & Build Process

### Key Configuration Files

- `.eleventy.js` - Eleventy configuration with passthrough copies and minification
- `package.json` - Dependencies and scripts
- `eslint.config.mjs` - Modern ESLint flat configuration
- `.prettierrc` - Code formatting rules

### Assets & Dependencies

- **Bootstrap**: v3.3.7 via CDN for styling and layout
- **jQuery**: v1.12.4 via CDN for existing functionality
- **Font Awesome**: Kit integration for icons
- **Custom CSS**: `bundle.css` (697 lines)
- **Custom JS**:
  - `js/main.js` - Legacy jQuery functionality and plugins (533 lines)
  - `js/animations.js` - Modern GSAP animations (402 lines)

### Build Output

- Generated site in `_site/` directory
- Automatic HTML minification for production
- CSS minification support
- Asset copying for JS, CSS, and static files
- Test page at `/test-animations.html` for animation development

## Development Workflow

1. Run `npm run dev` for local development with live reload
2. Use `npm run lint` and `npm run format` for code quality
3. Test animations in `/test-animations.html`
4. Build with `npm run build` before deployment
5. Current branch includes 3 commits ahead of origin with modern tooling setup

## General Notes

- Site uses semantic HTML5 structure
- Responsive design with Bootstrap grid system
- Includes comprehensive school logo assets in `img/logos/`
- Social media integration (Facebook, Twitter, Instagram)
- Contact forms and email integration
- Document assets for historical proclamations and letters

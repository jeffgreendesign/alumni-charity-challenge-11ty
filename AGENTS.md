# AGENTS.md - Alumni Charity Challenge Website

This file provides guidance for AI agents working on this codebase.

## Animation System (GSAP)

A JavaScript-based animation system using GSAP (GreenSock Animation Platform) has been implemented to enhance the user experience with modern, lightweight animations.

- **Core Library**: GSAP (Core and ScrollTrigger plugin) is loaded via CDN in `_includes/_footer.html`.
- **Custom Animations**: All custom animation logic resides in `js/animations.js`. This file is included in `_includes/_footer.html` and copied to the `_site/js/` directory during the Eleventy build process (see `.eleventy.js`).
- **Documentation**: Detailed instructions for adding or modifying animations are included as comments at the end of `js/animations.js`.
- **Performance**: Animations prioritize CSS transforms and opacity. ScrollTrigger is used for lazy-loading animations that trigger on scroll.
- **Accessibility**: A `prefers-reduced-motion` media query check is implemented in `js/animations.js`. If a user has this preference set, most animations will be disabled or significantly reduced, and elements will be set to their final states.
- **jQuery Interaction**: The animation code is designed to be independent of the existing jQuery code in `main.js`.

**When working with animations:**
- Refer to the documentation in `js/animations.js` for guidelines on creating new animations.
- Ensure new animations also respect the `prefers-reduced-motion` setting.
- Test thoroughly on desktop and mobile, paying attention to performance and potential conflicts.
- Keep animations purposeful and avoid overly complex or distracting effects.

## General
- The site is built using Eleventy (11ty).
- Bootstrap 3.3.7 is used for styling and layout.
- Custom CSS is in `bundle.css`.
- Main page template is `index.html`.
- Partials are in `_includes/`.
- Existing JavaScript (primarily jQuery plugins and site interactions) is in `main.js` (sourced from `_site/js/main.js` via an include in `_includes/_footer.html`).

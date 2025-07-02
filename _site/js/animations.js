// GSAP Animations for Alumni Charity Challenge

document.addEventListener("DOMContentLoaded", () => {
  // Register GSAP plugins
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  console.log(
    "animations.js loaded and GSAP is available:",
    typeof gsap !== "undefined"
  );
  console.log(
    "ScrollTrigger is available:",
    typeof ScrollTrigger !== "undefined"
  );
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // Page Load Animations
  if (typeof gsap !== "undefined" && !prefersReducedMotion) {
    // Fade in the body
    gsap.from("body", {
      opacity: 0,
      duration: 0.7,
      ease: "power1.inOut",
    });

    // Entrance animations for main sections
    const sections = ["#home", "#home-sub", "#benefiting", "#about", "#footer"];
    sections.forEach((section, index) => {
      const el = document.querySelector(section);
      if (el) {
        gsap.from(el, {
          opacity: 0,
          y: 50,
          duration: 0.6,
          ease: "power2.out",
          delay: 0.3 + index * 0.1, // Stagger the start a bit after body fade-in
          scrollTrigger: {
            trigger: el,
            start: "top 90%", // Start animation when 90% of the element is visible
            toggleActions: "play none none none",
            once: true, // Animation will only play once
          },
        });
      }
    });

    // Specific animation for hero headline content if needed
    const heroHeadline = document.querySelector(".home-headline");
    if (heroHeadline) {
      gsap.from(heroHeadline, {
        opacity: 0,
        scale: 0.95,
        duration: 0.7,
        ease: "power2.out",
        delay: 0.5, // After body fade-in
      });
    }
  } else if (prefersReducedMotion) {
    gsap.set(
      [
        "body",
        "#home",
        "#home-sub",
        "#benefiting",
        "#about",
        "#footer",
        ".home-headline",
      ],
      { opacity: 1 }
    );
  }

  // Animated Counters
  if (typeof gsap !== "undefined" && !prefersReducedMotion) {
    const statsTons = document.getElementById("stats-tons");
    const statsColleges = document.getElementById("stats-colleges");

    if (statsTons) {
      // Set initial value to 0 and animate to final value
      statsTons.textContent = "0";
      gsap.to(statsTons, {
        textContent: 478,
        duration: 2,
        ease: "power1.inOut",
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: statsTons,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
        onUpdate: function () {
          statsTons.textContent = Math.ceil(this.targets()[0].textContent);
        },
      });
    }

    if (statsColleges) {
      // Set initial value to 0 and animate to final value
      statsColleges.textContent = "0";
      gsap.to(statsColleges, {
        textContent: 40,
        duration: 2,
        ease: "power1.inOut",
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: statsColleges,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
        onUpdate: function () {
          statsColleges.textContent = Math.ceil(this.targets()[0].textContent);
        },
      });
    }
  } else if (prefersReducedMotion) {
    const statsTons = document.getElementById("stats-tons");
    const statsColleges = document.getElementById("stats-colleges");
    if (statsTons) statsTons.textContent = "478";
    if (statsColleges) statsColleges.textContent = "40";
  }

  // Animated Progress Bars/Charts
  // Placeholder: Add logic here when visual elements for charts/bars are in HTML.
  // For now, adding subtle stagger animations to existing past event list items.
  if (typeof gsap !== "undefined" && !prefersReducedMotion) {
    const pastEvents = document.querySelectorAll(
      ".events-past .calendar-event"
    );
    if (pastEvents.length > 0) {
      gsap.from(pastEvents, {
        opacity: 0,
        y: 30,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".events-past", // Trigger when the container of past events comes into view
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      });
    }
  } else if (prefersReducedMotion) {
    const pastEvents = document.querySelectorAll(
      ".events-past .calendar-event"
    );
    if (pastEvents.length > 0) {
      gsap.set(pastEvents, { opacity: 1, y: 0 });
    }
  }

  // Hover Effects on Participant Logos
  if (typeof gsap !== "undefined" && !prefersReducedMotion) {
    const participantLogos = document.querySelectorAll(".participant img");
    if (participantLogos.length > 0) {
      participantLogos.forEach((logo) => {
        // Initial state (optional, if you want to animate from a specific state)
        // gsap.set(logo, { scale: 1 });

        logo.addEventListener("mouseenter", () => {
          gsap.to(logo, {
            duration: 0.3,
            scale: 1.08,
            boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
            ease: "power1.out",
          });
        });

        logo.addEventListener("mouseleave", () => {
          gsap.to(logo, {
            duration: 0.3,
            scale: 1,
            boxShadow: "0px 0px 0px rgba(0,0,0,0)",
            ease: "power1.inOut",
          });
        });
      });
    }
    // Also animate the .participant container slightly to give a bit more room and visual cue
    const participantItems = document.querySelectorAll(".participant");
    if (participantItems.length > 0) {
      participantItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
          gsap.to(item, {
            duration: 0.3,
            y: -5, // Move item up slightly
            ease: "power1.out",
          });
        });
        item.addEventListener("mouseleave", () => {
          gsap.to(item, {
            duration: 0.3,
            y: 0,
            ease: "power1.inOut",
          });
        });
      });
    }
  }
  // No specific "else" for hover effects with prefersReducedMotion, as they are user-initiated.
  // If they were entrance animations, we'd set their final state.

  // Animate Donate/CTA Buttons
  if (typeof gsap !== "undefined" && !prefersReducedMotion) {
    const ctaButtons = document.querySelectorAll(
      ".btn-donate, .btn-default.navbar-btn"
    ); // Target specific CTA classes

    if (ctaButtons.length > 0) {
      ctaButtons.forEach((button) => {
        // Store original background color if needed for complex animations, not strictly necessary for filter.
        // const originalBgColor = gsap.getProperty(button, "backgroundColor");

        button.addEventListener("mouseenter", () => {
          gsap.to(button, {
            duration: 0.25,
            scale: 1.05,
            // filter: "brightness(110%)", // Slightly brighten
            y: -2, // Move up slightly
            boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
            ease: "power1.out",
          });
        });

        button.addEventListener("mouseleave", () => {
          gsap.to(button, {
            duration: 0.25,
            scale: 1,
            // filter: "brightness(100%)",
            y: 0,
            boxShadow: "0px 0px 0px rgba(0,0,0,0)",
            ease: "power1.inOut",
          });
        });
      });
    }
  }
  // No specific "else" for hover effects with prefersReducedMotion.

  // Navigation Menu Interactions (Optional)
  if (typeof gsap !== "undefined" && !prefersReducedMotion) {
    const dropdownMenuItems = document.querySelectorAll(
      ".navbar-default .navbar-nav .dropdown-menu > li"
    );
    const dropdownToggle = document.querySelector(
      ".navbar-default .navbar-nav .dropdown-toggle"
    );

    if (dropdownToggle && dropdownMenuItems.length > 0) {
      // Using a simple approach: animate when Bootstrap's 'open' class is added/removed
      // GSAP's Flip plugin could be used for more complex state changes, but is overkill here.

      const tl = gsap.timeline({ paused: true, reversed: true });
      tl.from(dropdownMenuItems, {
        duration: 0.2,
        opacity: 0,
        y: -10,
        stagger: 0.05,
        ease: "power1.out",
      });

      // We need to observe when Bootstrap adds the 'open' class to the parent li
      const dropdownLi = dropdownToggle.closest("li.dropdown");

      if (dropdownLi) {
        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.attributeName === "class") {
              const isOpen = dropdownLi.classList.contains("open");
              if (isOpen) {
                tl.play();
              } else {
                // Optional: reverse animation when closing.
                // Bootstrap handles the display none/block, so reversing opacity/y might be abrupt.
                // tl.reverse();
                // For simplicity, just ensure they are reset for next open
                gsap.set(dropdownMenuItems, { clearProps: "opacity,y" });
              }
            }
          });
        });
        observer.observe(dropdownLi, { attributes: true });
      }
    }

    // Hover effect for main nav links (excluding dropdown toggle and donate button)
    const mainNavLinks = document.querySelectorAll(
      "#navbar .navbar-nav > li:not(.dropdown):not(.social):not(.navbar-donate) > a"
    );
    mainNavLinks.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        gsap.to(link, {
          duration: 0.2,
          color: "#242424",
          ease: "power1.inOut",
        }); // Using color from existing hover state
      });
      link.addEventListener("mouseleave", () => {
        // Revert to original color, assuming it's #fff from the CSS
        gsap.to(link, { duration: 0.2, color: "#fff", ease: "power1.inOut" });
      });
    });

    // Hover effect for social icons
    const socialIcons = document.querySelectorAll("#navbar .social a");
    socialIcons.forEach((icon) => {
      icon.addEventListener("mouseenter", () => {
        gsap.to(icon, {
          duration: 0.2,
          y: -3,
          color: "#242424",
          ease: "power1.out",
        });
      });
      icon.addEventListener("mouseleave", () => {
        gsap.to(icon, {
          duration: 0.2,
          y: 0,
          color: "#fff",
          ease: "power1.inOut",
        });
      });
    });
  }
});

/**
 * Documentation for Adding Future Animations:
 *
 * 1. Identify the Target Element(s):
 *    - Use unique IDs or specific classes for elements you want to animate.
 *    - Example HTML: `<div id="myElement" class="animate-me">...</div>`
 *
 * 2. Choose a Trigger (if not on page load):
 *    - For animations that happen on scroll: Use GSAP's ScrollTrigger.
 *    - For hover animations: Use standard JavaScript event listeners (`mouseenter`, `mouseleave`).
 *    - For click animations: Use JavaScript event listeners (`click`).
 *
 * 3. Write the GSAP Animation Code:
 *    - Place your animation logic within the `DOMContentLoaded` event listener,
 *      or in a function called from there.
 *    - Refer to GSAP documentation: https://greensock.com/docs/
 *    - Example: Basic fade-in
 *      ```javascript
 *      gsap.from("#myElement", {
 *        duration: 1,
 *        opacity: 0,
 *        y: 50, // Move up 50px
 *        ease: "power2.out"
 *      });
 *      ```
 *    - Example: Scroll-triggered animation
 *      ```javascript
 *      gsap.from(".animate-on-scroll", {
 *        scrollTrigger: {
 *          trigger: ".animate-on-scroll",
 *          start: "top 80%", // Trigger when top of element is 80% from top of viewport
 *          toggleActions: "play none none none", // Play animation once when it enters
 *          once: true // Ensures the animation only happens once
 *        },
 *        duration: 1,
 *        opacity: 0,
 *        y: 30,
 *        stagger: 0.2 // If multiple elements have this class
 *      });
 *      ```
 *    - Example: Hover animation
 *      ```javascript
 *      const hoverElement = document.querySelector("#hover-effect-element");
 *      if (hoverElement) {
 *        hoverElement.addEventListener("mouseenter", () => {
 *          gsap.to(hoverElement, { duration: 0.3, scale: 1.1, ease: "power1.inOut" });
 *        });
 *        hoverElement.addEventListener("mouseleave", () => {
 *          gsap.to(hoverElement, { duration: 0.3, scale: 1, ease: "power1.inOut" });
 *        });
 *      }
 *      ```
 *
 * 4. Performance Best Practices:
 *    - Animate `opacity` and `transform` properties (e.g., `x`, `y`, `scale`, `rotation`)
 *      as these are GPU-accelerated and more performant.
 *    - Avoid animating layout properties like `width`, `height`, `margin`, `padding`
 *      if possible, as they can cause page reflows.
 *    - Use `ScrollTrigger`'s `once: true` or manage animation states to prevent
 *      re-running animations unnecessarily.
 *    - Test on various devices, especially mobile, to ensure smoothness.
 *    - Keep animations purposeful and not overly complex or long-running.
 *
 * 5. Testing:
 *    - Test thoroughly in different browsers.
 *    - Check for conflicts with existing JavaScript or CSS.
 *    - Ensure animations enhance rather than detract from the user experience.
 */

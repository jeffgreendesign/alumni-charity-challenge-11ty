// Alumni Charity Challenge - Main JavaScript

(function() {
  'use strict';

  // Countdown Timer
  function initCountdown() {
    var countdownEl = document.getElementById('event-countdown');
    if (!countdownEl) return;

    var eventDate = new Date('2025-11-19T00:00:00').getTime();

    function updateCountdown() {
      var now = new Date().getTime();
      var distance = eventDate - now;

      if (distance < 0) {
        countdownEl.innerHTML = '<span class="countdown-label">Event is here!</span>';
        return;
      }

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));

      countdownEl.innerHTML =
        '<span class="countdown-number">' + days + '</span> ' +
        '<span class="countdown-label">day' + (days !== 1 ? 's' : '') + ' till the event</span>';
    }

    updateCountdown();
    setInterval(updateCountdown, 1000 * 60 * 60); // Update every hour
  }

  // Back to top button
  function initBackToTop() {
    var backToTop = document.querySelector('.back-to-top');
    if (!backToTop) return;

    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTop.style.display = 'block';
      } else {
        backToTop.style.display = 'none';
      }
    });

    backToTop.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Progressive image loading
  function initImageLoading() {
    // Handle lazy-loaded images
    var lazyImages = document.querySelectorAll('img[loading="lazy"]');

    // Modern browsers with native lazy loading support
    if ('loading' in HTMLImageElement.prototype) {
      lazyImages.forEach(function(img) {
        // Add loaded class when image loads
        if (img.complete) {
          img.classList.add('loaded');
        } else {
          img.addEventListener('load', function() {
            img.classList.add('loaded');
          });
          img.addEventListener('error', function() {
            // Still show the image on error to prevent invisible broken images
            img.classList.add('loaded');
          });
        }
      });
    } else {
      // Fallback for older browsers - use Intersection Observer
      if ('IntersectionObserver' in window) {
        var imageObserver = new IntersectionObserver(function(entries, observer) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              var img = entry.target;
              img.addEventListener('load', function() {
                img.classList.add('loaded');
              });
              img.addEventListener('error', function() {
                img.classList.add('loaded');
              });
              if (img.complete) {
                img.classList.add('loaded');
              }
              imageObserver.unobserve(img);
            }
          });
        }, {
          rootMargin: '50px' // Start loading 50px before entering viewport
        });

        lazyImages.forEach(function(img) {
          imageObserver.observe(img);
        });
      } else {
        // No support - just show all images immediately
        lazyImages.forEach(function(img) {
          img.classList.add('loaded');
        });
      }
    }

    // Handle eager-loaded images (above the fold)
    var eagerImages = document.querySelectorAll('img[loading="eager"]');
    eagerImages.forEach(function(img) {
      if (img.complete) {
        img.classList.add('loaded');
      } else {
        img.addEventListener('load', function() {
          img.classList.add('loaded');
        });
      }
    });
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initCountdown();
      initBackToTop();
      initImageLoading();
    });
  } else {
    initCountdown();
    initBackToTop();
    initImageLoading();
  }

})();

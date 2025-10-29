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

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initCountdown();
      initBackToTop();
    });
  } else {
    initCountdown();
    initBackToTop();
  }

})();

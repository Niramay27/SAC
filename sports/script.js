// Custom JavaScript for smooth scrolling navigation
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        if (this.hash !== '') {
          e.preventDefault();
          const target = document.querySelector(this.hash);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  });

  // Get slider elements
  const slider = document.querySelector('.slider');
  const radioButtons = document.querySelectorAll('input[name="radio-btn"]');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');
  let currentSlide = 0;
  const totalSlides = radioButtons.length;

  // Function to update the active slide
  function updateSlide(index) {
    if (index < 0) {
      index = totalSlides - 1;
    }
    if (index >= totalSlides) {
      index = 0;
    }
    currentSlide = index;
    radioButtons[currentSlide].checked = true;
  }

  // Arrow button event listeners
  rightArrow.addEventListener('click', () => {
    updateSlide(currentSlide + 1);
  });
  leftArrow.addEventListener('click', () => {
    updateSlide(currentSlide - 1);
  });

  // Swipe gesture support
  let touchstartX = 0;
  let touchendX = 0;
  const swipeThreshold = 50; // Minimum swipe distance in pixels

  slider.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
  });

  slider.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    handleGesture();
  });

  function handleGesture() {
    if (touchendX < touchstartX - swipeThreshold) {
      // Swipe left → next slide
      updateSlide(currentSlide + 1);
    }
    if (touchendX > touchstartX + swipeThreshold) {
      // Swipe right → previous slide
      updateSlide(currentSlide - 1);
    }
  }

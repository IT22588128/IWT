window.addEventListener('DOMContentLoaded', function () {
    var slides = document.querySelectorAll('.slide');
    var currentSlide = 0;
    var totalSlides = slides.length;
    var slideInterval = setInterval(nextSlide, 5000);
  
    function nextSlide() {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % totalSlides;
      slides[currentSlide].classList.add('active');
    }
  });









  




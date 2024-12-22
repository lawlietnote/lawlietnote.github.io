
// Selecciona todos los carruseles en la página
const carousels = document.querySelectorAll('.carousel');

carousels.forEach((carousel) => {
  const track = carousel.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextButton = carousel.querySelector('.carousel-button-right');
  const prevButton = carousel.querySelector('.carousel-button-left');
  const slideWidth = slides[0].getBoundingClientRect().width;

  // Coloca las diapositivas una al lado de la otra
  const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
  };
  slides.forEach(setSlidePosition);

  const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
  };

  // Botón siguiente
  nextButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    if (nextSlide) {
      moveToSlide(track, currentSlide, nextSlide);
    }
  });

  // Botón anterior
  prevButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    if (prevSlide) {
      moveToSlide(track, currentSlide, prevSlide);
    }
  });
});
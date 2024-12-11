function autoplayCarousel() {
  const carouselEl = document.getElementById("carousel");
  const slideContainerEl = carouselEl.querySelector("#slide-container");
  const slides = carouselEl.querySelectorAll(".slide");
  const totalSlides = slides.length;
  let slideWidth = slides[0].getBoundingClientRect().width; // Ancho de la diapositiva
  let autoplay; // Variable para el intervalo
  let slidesToAdvance = window.innerWidth <= 430 ? 1 : 4; // Variable dinámica para el número de diapositivas

  // Calcular la nueva posición del scroll
  const getNewScrollPosition = (arg) => {
    if (arg === "forward") {
      const newScrollLeft = slideContainerEl.scrollLeft + slideWidth * slidesToAdvance; // Usar la variable dinámica
      return newScrollLeft >= slideWidth * totalSlides ? 0 : newScrollLeft;
    } else if (arg === "backward") {
      const newScrollLeft = slideContainerEl.scrollLeft - slideWidth * 4; // Usar la variable dinámica
      return newScrollLeft < 0 ? slideWidth * (totalSlides - 1) : newScrollLeft;
    }
  };

  // Navegar entre diapositivas
  const navigate = (arg) => {
    const newPosition = getNewScrollPosition(arg);
    slideContainerEl.scrollLeft = newPosition;
  };

  // Iniciar el autoplay
  const startAutoplay = () => {
    autoplay = setInterval(() => navigate("forward"), 2000); // Cada 2 segundos
  };

  // Detener el autoplay
  const stopAutoplay = () => {
    clearInterval(autoplay);
  };

  // Actualizar `slidesToAdvance` si cambia el tamaño de la pantalla
  window.addEventListener("resize", () => {
    slideWidth = slides[0].getBoundingClientRect().width;
    slidesToAdvance = window.innerWidth <= 430 ? 1 : 4; // Actualiza el número dinámicamente
  });

  // Eventos de los botones
  document.querySelector("#back-button").addEventListener("click", () => {
    stopAutoplay();
    navigate("backward");
    startAutoplay();
  });

  document.querySelector("#forward-button").addEventListener("click", () => {
    stopAutoplay();
    navigate("forward");
    startAutoplay();
  });

  // Pausar el autoplay cuando el mouse está encima del carrusel
  slideContainerEl.addEventListener("mouseenter", stopAutoplay);

  // Reanudar el autoplay cuando el mouse sale del carrusel
  slideContainerEl.addEventListener("mouseleave", startAutoplay);

  // Iniciar el autoplay al cargar
  startAutoplay();
}

autoplayCarousel();

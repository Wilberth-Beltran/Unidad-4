function autoplayCarousel() {
  const carouselEl = document.getElementById("carousel2");
  const slideContainerEl = carouselEl.querySelector("#slide-container2");
  const slides = carouselEl.querySelectorAll(".slide2");
  const totalSlides = slides.length;
  let slideWidth = slides[0].getBoundingClientRect().width; // Ancho de la diapositiva
  let autoplay; // Variable para el intervalo

  // Calcular la nueva posición del scroll
  const getNewScrollPosition = (arg) => {
    if (arg === "forward2") {
      const newScrollLeft = slideContainerEl.scrollLeft + slideWidth; // Avanza 1 diapositiva
      // Si se pasa del final, vuelve al inicio
      return newScrollLeft >= slideWidth * totalSlides ? 0 : newScrollLeft;
    } else if (arg === "backward2") {
      const newScrollLeft = slideContainerEl.scrollLeft - slideWidth * 5; // Retrocede 4 diapositivas
      // Si se pasa del inicio, va al final
      return newScrollLeft < 0 ? slideWidth * (totalSlides - 5) : newScrollLeft;
    }
  };

  const navigate = (arg) => {
    const newPosition = getNewScrollPosition(arg);
    slideContainerEl.scrollLeft = newPosition;
  };

  // Iniciar el autoplay
  const startAutoplay = () => {
    autoplay = setInterval(() => navigate("forward2"), 2000); // Avanza cada 1 segundo
  };

  // Detener el autoplay
  const stopAutoplay = () => {
    clearInterval(autoplay);
  };

  // Eventos de los botones
  document.querySelector("#back-button2").addEventListener("click", () => {
    stopAutoplay();
    navigate("backward2");
    startAutoplay(); // Reinicia el autoplay después de interacción
  });

  document.querySelector("#forward-button2").addEventListener("click", () => {
    stopAutoplay();
    navigate("forward2");
    startAutoplay(); // Reinicia el autoplay después de interacción
  });

  // Evento para actualizar el tamaño de las diapositivas si el tamaño de la ventana cambia
  window.addEventListener("resize", () => {
    slideWidth = slides[0].getBoundingClientRect().width;
  });

  // Pausar el autoplay cuando el mouse está encima del carrusel
  slideContainerEl.addEventListener("mouseenter", () => {
    stopAutoplay();
  });

  // Reanudar el autoplay cuando el mouse sale del carrusel
  slideContainerEl.addEventListener("mouseleave", () => {
    startAutoplay();
  });

  // Iniciar el autoplay al cargar
  startAutoplay();
}

autoplayCarousel();
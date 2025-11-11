const slides = document.querySelectorAll(".carrosel .slide");
let current = 0;

function updateSlides() {
  slides.forEach((slide, index) => {
    slide.classList.remove("active", "prev", "next");

    if (index === current) {
      slide.classList.add("active");
    } else if (index === (current - 1 + slides.length) % slides.length) {
      slide.classList.add("prev");
    } else if (index === (current + 1) % slides.length) {
      slide.classList.add("next");
    }
  });
}

// Inicializa
updateSlides();

// Troca automática a cada 3 segundos
setInterval(() => {
  current = (current + 1) % slides.length;
  updateSlides();
}, 3000);

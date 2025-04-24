document.addEventListener("DOMContentLoaded", function () {
  const botonMenuMovil = document.querySelector(".boton-menu-movil");
  const enlacesNavegacion = document.querySelector(".enlaces-navegacion");

  // Toggle menú móvil
  botonMenuMovil.addEventListener("click", function () {
    enlacesNavegacion.classList.toggle("activo");
  });

  // Submenú desplegable para móvil y escritorio
  const tieneSubmenu = document.querySelectorAll(".tiene-submenu > a");

  tieneSubmenu.forEach(function (element) {
    element.addEventListener("click", function (e) {
      // Evita que se redirija al ancla
      e.preventDefault();

      const submenu = this.nextElementSibling;

      // Alterna la clase 'activo' para mostrar u ocultar el submenú
      this.parentElement.classList.toggle("activo");
    });
  });
});


// Galería desplazable
const leftBtn = document.querySelector('.boton-galeria.izquierda');
const rightBtn = document.querySelector('.boton-galeria.derecha');
const galleryGrid = document.querySelector('.rejilla-galeria');

leftBtn.addEventListener('click', () => {
  galleryGrid.scrollBy({ left: -300, behavior: 'smooth' });
});

rightBtn.addEventListener('click', () => {
  galleryGrid.scrollBy({ left: 300, behavior: 'smooth' });
});

// Modal de imagen
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeModal = document.querySelector('.cerrar-modal');

document.querySelectorAll('.elemento-galeria img').forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = img.src;
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = 'none';
});
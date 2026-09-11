document.addEventListener("DOMContentLoaded", function () {
  // === MENÚ MÓVIL Y SUBMENÚ ===
  const botonMenuMovil = document.querySelector(".boton-menu-movil");
  const enlacesNavegacion = document.querySelector(".enlaces-navegacion");

  if (botonMenuMovil && enlacesNavegacion) {
    botonMenuMovil.addEventListener("click", function () {
      enlacesNavegacion.classList.toggle("activo");
    });
  }

  const tieneSubmenu = document.querySelectorAll(".tiene-submenu > a");
  tieneSubmenu.forEach(function (element) {
    element.addEventListener("click", function (e) {
      e.preventDefault();
      this.parentElement.classList.toggle("activo");
    });
  });

  // === CARRUSEL DE GALERÍA DE FOTOS ===
  // Especificamos '#galeria' para no seleccionar los botones de reseñas por error
  const galeriaLeftBtn = document.querySelector('#galeria .boton-galeria.izquierda');
  const galeriaRightBtn = document.querySelector('#galeria .boton-galeria.derecha');
  const galleryGrid = document.querySelector('#galeria .rejilla-galeria');
  let scrollTimeout;

  if (galeriaLeftBtn && galeriaRightBtn && galleryGrid) {
    galeriaLeftBtn.addEventListener('click', () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      galleryGrid.scrollBy({ left: -300, behavior: 'smooth' });
      scrollTimeout = setTimeout(() => {}, 300);
    });

    galeriaRightBtn.addEventListener('click', () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      galleryGrid.scrollBy({ left: 300, behavior: 'smooth' });
      scrollTimeout = setTimeout(() => {}, 300);
    });
  }

  // === CARRUSEL DE RESEÑAS ===
  const resenasLeftBtn = document.getElementById('btn-resenas-izq');
  const resenasRightBtn = document.getElementById('btn-resenas-der');
  const resenasGrid = document.getElementById('carrusel-resenas');

  if (resenasLeftBtn && resenasRightBtn && resenasGrid) {
    resenasLeftBtn.addEventListener('click', () => {
      resenasGrid.scrollBy({ left: -320, behavior: 'smooth' });
    });

    resenasRightBtn.addEventListener('click', () => {
      resenasGrid.scrollBy({ left: 320, behavior: 'smooth' });
    });
  }

  // === MODAL DE IMAGEN EN GALERÍA ===
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const closeModal = document.querySelector('.cerrar-modal');

  if (modal && modalImg) {
    document.querySelectorAll('.elemento-galeria img').forEach(img => {
      img.addEventListener('click', () => {
        modal.classList.add('show');
        modal.style.display = 'block';
        modalImg.src = img.src;
      });
    });

    if (closeModal) {
      closeModal.addEventListener('click', () => {
        modal.classList.remove('show');
        modal.classList.add('hide');
        setTimeout(() => modal.style.display = 'none', 500);
      });
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('show');
        modal.classList.add('hide');
        setTimeout(() => modal.style.display = 'none', 500);
      }
    });
  }
});
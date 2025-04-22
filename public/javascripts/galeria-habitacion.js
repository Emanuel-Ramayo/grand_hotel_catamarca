document.addEventListener("DOMContentLoaded", () => {
    const galeria = document.querySelector(".galeria-habitacion");
    if (!galeria) return; // Evita errores si no hay galería
  
    const imagenPrincipal = galeria.querySelector(".imagen-principal");
    const miniaturas = galeria.querySelectorAll(".miniaturas img");
    const btnIzq = galeria.querySelector(".btn-navegacion.izquierda");
    const btnDer = galeria.querySelector(".btn-navegacion.derecha");
  
    let indiceActual = 0;
    const imagenes = Array.from(miniaturas).map(img => img.src);
  
    function mostrarImagen(index) {
      indiceActual = index;
      imagenPrincipal.src = imagenes[indiceActual];
      actualizarMiniaturas();
    }
  
    function actualizarMiniaturas() {
      miniaturas.forEach((img, i) => {
        img.classList.toggle("activa", i === indiceActual);
      });
    }
  
    btnIzq?.addEventListener("click", () => {
      indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
      mostrarImagen(indiceActual);
    });
  
    btnDer?.addEventListener("click", () => {
      indiceActual = (indiceActual + 1) % imagenes.length;
      mostrarImagen(indiceActual);
    });
  
    miniaturas.forEach((img, i) => {
      img.addEventListener("click", () => {
        mostrarImagen(i);
      });
    });
  
    // Inicializa
    mostrarImagen(0);
  });
  
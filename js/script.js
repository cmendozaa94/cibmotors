// Espera a que el documento cargue
document.addEventListener("DOMContentLoaded", function() {
  // Busca todos los botones dentro de la clase "producto"
  const botones = document.querySelectorAll(".producto button");

  // Recorre cada botón y agrega el evento de mensaje de alerta
  botones.forEach(function(boton) {
    boton.addEventListener("click", function() {
      alert("✅ Agregado al carrito con éxito");
    });
  });
});

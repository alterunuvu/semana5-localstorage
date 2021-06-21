// Eventos con HTML
// function buscarTexto() {
//   console.log("Hola Semana 5 Eventos JS");
// }

// Manejar Eventos con Javascript
// document.getElementById("buscador").onclick = function () {
//   console.log("Eventos JS # 1 Hola Semana 5 Eventos JS");
// };

// Manejar Eventos con Javascript - Arrow Function

// document.getElementById("buscador").onclick = () => {
//   console.log("Eventos JS # 1 Hola Semana 5 Eventos JS");
// };

// Manejar Eventos con Javascript - Listener
document.getElementById("buscador").addEventListener("click", () => {
  let dato = document.getElementById("buscadorInput");

  console.log(`Dato ingresado por el usuario:  ${dato.value}`);
  localStorage.setItem("datoUsuario", dato.value);

  //   console.log("Eventos JS # 2 Listener Hola Semana 5 Eventos JS");
});

// document.getElementById("buscador").addEventListener("mouseover", () => {
//   console.log("Pasando el mouse por encima del botón");
// });

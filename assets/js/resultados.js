let resultado = localStorage.getItem("datoUsuario");

console.log(`Resultado del usuario: ${resultado}`);

let spanResultado = document.getElementById("resultado");

spanResultado.innerHTML = resultado;

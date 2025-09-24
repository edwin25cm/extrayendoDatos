console.log("llegue a modificar datos");

const parametros = new URLSearchParams(window.location.search);

const id = parametros.get("parametro")

console.log(id);

document.getElementById("apellido").value = hola;

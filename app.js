let casosData = [];

document.addEventListener("DOMContentLoaded", function () {

fetch("data/ejemplos.json")
.then(response => response.json())
.then(data => {
casosData = data.casos;

  // 🔥 AQUÍ FORZAMOS LA CARGA DEL PRIMER CASO
  setTimeout(cargarCaso, 100);
})
.catch(error => {
  console.error("Error cargando JSON:", error);
});

document.getElementById("caso").addEventListener("change", cargarCaso);

});

function cargarCaso() {
if (!casosData.length) return; // evita ejecutar antes de tiempo

const casoSeleccionado = document.getElementById("caso").value;

const caso = casosData.find(c => c.id === casoSeleccionado);

if (caso) {
document.getElementById("contexto").value = caso.contexto;
document.getElementById("decision").value = caso.decision;
document.getElementById("datos").value = caso.datos;
document.getElementById("restricciones").value = caso.restricciones;
}
}

// ------------------------

window.generarPrompt = function () {
const caso = document.getElementById("caso").value;
const contexto = document.getElementById("contexto").value;
const decision = document.getElementById("decision").value;
const datos = document.getElementById("datos").value;
const restricciones = document.getElementById("restricciones").value;

const prompt = construirPrompt(caso, contexto, decision, datos, restricciones);

document.getElementById("resultado").textContent = prompt;
};

window.copiarPrompt = function () {
const texto = document.getElementById("resultado").textContent;
navigator.clipboard.writeText(texto);
alert("Prompt copiado");
};


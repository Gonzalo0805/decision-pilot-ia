window.generarPrompt = function () {
try {
const caso = document.getElementById("caso").value;
const contexto = document.getElementById("contexto").value;
const decision = document.getElementById("decision").value;
const datos = document.getElementById("datos").value;
const restricciones = document.getElementById("restricciones").value;

```
if (!contexto || !decision) {
  alert("Rellena al menos contexto y decisión");
  return;
}

if (typeof construirPrompt !== "function") {
  alert("Error: prompts.js no está cargado");
  return;
}

const prompt = construirPrompt(caso, contexto, decision, datos, restricciones);

document.getElementById("resultado").textContent = prompt;
```

} catch (error) {
alert("Error en JS: " + error.message);
console.error(error);
}
};

window.copiarPrompt = function () {
const texto = document.getElementById("resultado").textContent;

if (!texto) {
alert("No hay nada que copiar");
return;
}

navigator.clipboard.writeText(texto)
.then(() => alert("Prompt copiado"))
.catch(() => alert("Error al copiar"));
};

let casosData = [];

document.addEventListener("DOMContentLoaded", function () {

fetch("data/ejemplos.json")
.then(response => response.json())
.then(data => {
casosData = data.casos;
cargarCaso(); // cargar automáticamente el primero
})
.catch(error => {
console.error("Error cargando JSON:", error);
});

document.getElementById("caso").addEventListener("change", cargarCaso);

});

function cargarCaso() {
const casoSeleccionado = document.getElementById("caso").value;

const caso = casosData.find(c => c.id === casoSeleccionado);

if (caso) {
document.getElementById("contexto").value = caso.contexto;
document.getElementById("decision").value = caso.decision;
document.getElementById("datos").value = caso.datos;
document.getElementById("restricciones").value = caso.restricciones;
}
}


let casosData = [
{
id: "admision",
contexto: "Hay 5000 solicitudes al año, muchas incompletas.",
decision: "Evaluar automatización",
datos: "20% incompletas",
restricciones: "Evitar sesgos"
},
{
id: "soporte",
contexto: "Muchos tickets repetidos",
decision: "Automatizar clasificación",
datos: "1000 tickets/mes",
restricciones: "No fallar en críticos"
}
];


fetch("./data/ejemplos.json")
.then(response => response.json())
.then(data => {
casosData = data.casos;
cargarCaso(); // carga inicial
})
.catch(error => {
console.error("Error cargando JSON:", error);
});

document.getElementById("caso").addEventListener("change", cargarCaso);

function cargarCaso() {
const casoSeleccionado = document.getElementById("caso").value;

```
const caso = casosData.find(c => c.id === casoSeleccionado);

if (caso) {
  document.getElementById("contexto").value = caso.contexto;
  document.getElementById("decision").value = caso.decision;
  document.getElementById("datos").value = caso.datos;
  document.getElementById("restricciones").value = caso.restricciones;
}
```

}

};

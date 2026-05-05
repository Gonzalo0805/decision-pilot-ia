alert("JS cargado");

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



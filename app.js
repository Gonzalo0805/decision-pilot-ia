function generarPrompt() {
const caso = document.getElementById("caso").value;
const contexto = document.getElementById("contexto").value;
const decision = document.getElementById("decision").value;
const datos = document.getElementById("datos").value;
const restricciones = document.getElementById("restricciones").value;

if (!contexto || !decision) {
alert("Rellena al menos contexto y decisión");
return;
}

const prompt = construirPrompt(caso, contexto, decision, datos, restricciones);

document.getElementById("resultado").textContent = prompt;
}

function copiarPrompt() {
const texto = document.getElementById("resultado").textContent;
navigator.clipboard.writeText(texto);
alert("Prompt copiado");
}


function construirPrompt(caso, contexto, decision, datos, restricciones) {
return `Actúa como consultor experto en toma de decisiones estratégicas con IA.

Tu objetivo NO es decidir automáticamente, sino estructurar una recomendación razonada.

CASO:
${caso || "No especificado"}

CONTEXTO:
${contexto || "No proporcionado"}

DECISIÓN A TOMAR:
${decision || "No especificada"}

DATOS DISPONIBLES:
${datos || "No proporcionados"}

RESTRICCIONES:
${restricciones || "No especificadas"}

Responde obligatoriamente con esta estructura:

1. Resumen del problema
2. Decisión real a tomar
3. Datos faltantes críticos
4. Tres alternativas viables
5. Comparación de alternativas (pros y contras)
6. Recomendación razonada
7. Qué automatizar vs qué mantener bajo control humano
8. KPIs para medir éxito
9. Decisión final: GO / NO-GO / GO con condiciones

Reglas:

* No des una respuesta superficial
* Justifica siempre tus decisiones
* Si faltan datos, indícalo antes de recomendar`;
  }


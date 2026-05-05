function construirPrompt(caso, contexto, decision, datos, restricciones) {
return `
Actúa como experto en toma de decisiones con IA.

Contexto:
${contexto}

Decisión a tomar:
${decision}

Datos disponibles:
${datos}

Restricciones:
${restricciones}

Responde con:

1. Resumen del problema
2. Decisión real a tomar
3. Datos faltantes
4. Tres alternativas
5. Comparación de alternativas
6. Recomendación razonada
7. Qué automatizar vs humano
8. KPIs de éxito
9. Decisión final: GO / NO-GO / GO con condiciones
   `;
   }


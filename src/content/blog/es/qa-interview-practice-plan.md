---
title: "Práctica para entrevistas de QA: un plan realista de 30 minutos"
date: 2026-10-27
summary: "Practica el diseño de pruebas, la investigación de API, el reporte de defectos y el criterio de automatización con un escenario concreto y una revisión basada en evidencias."
locale: es
---

Un ensayo útil para una entrevista de QA te da un sistema que investigar, una restricción que respetar y un motivo para explicar tus decisiones. Enumerar términos de pruebas es un comienzo. El siguiente paso es mostrar qué probarías primero, qué evidencia necesitas y qué le comunicarías al equipo.

Puedes hacer esta práctica de 30 minutos con un compañero o grabar tus propias respuestas. Usa un único escenario: una tienda ha incorporado códigos de descuento y, a veces, los clientes ven que el pago se realizó correctamente mientras el pedido sigue pendiente. Estas condiciones son ficticias; explicita los detalles que faltan en lugar de suponerlos sin decirlo.

## Minutos 0–4: aclara el producto y los riesgos

Empieza con preguntas que cambien tu plan de pruebas. ¿Se pueden combinar los códigos? ¿Cuándo se reserva el inventario? ¿El proveedor de pagos reintenta las notificaciones? ¿Qué significa «pendiente» para el cliente, el equipo de soporte y el servicio de preparación de pedidos?

Después de hacer las preguntas, declara dos o tres supuestos. Por ejemplo, supón que un descuento nunca debe reducir el total por debajo de cero y que no se debe volver a cobrar un pedido pagado después de un reintento. Explica qué fallos podrían causar pérdidas económicas o impedir que el cliente reciba el pedido. Así quedará claro en qué se basa tu priorización posterior.

## Minutos 4–11: diseña un conjunto pequeño de pruebas

Elige unos pocos casos que permitan distinguir distintos tipos de fallos:

- Se aplica un código válido a una cesta que cumple los requisitos y el recibo muestra el mismo total.
- Un código vencido falla sin modificar la cesta ni el importe cobrado.
- Dos solicitudes intentan canjear simultáneamente el último uso de un código limitado.
- El pago se realiza, pero la confirmación llega tarde o duplicada.

Para cada caso, indica el estado inicial, la acción y un resultado observable. «Probar la API» todavía no es un caso. «Repetir la notificación de pago y verificar que se produzca una sola transición del pedido» describe un comportamiento comprobable.

Luego decide: si tuvieras diez minutos antes del lanzamiento, ¿qué caso probarías primero y por qué? Incluye un caso de éxito, pero justifica tus prioridades según el riesgo en vez de intentar enumerar todas las entradas posibles.

## Minutos 11–18: investiga el pedido pendiente

Trata «pago realizado, pedido pendiente» como un síntoma. Separa las hipótesis: el proveedor aceptó el pago; la notificación no llegó; se rechazó la comprobación de la firma; falló la actualización del pedido; o la vista del cliente contiene datos desactualizados.

Describe qué revisarías y en qué orden. Compara el estado del proveedor, la respuesta a la notificación, el estado del pedido y la respuesta que ve el cliente. Usa un valor de correlación ficticio durante el ensayo. Nunca incluyas datos reales de clientes, tokens de acceso ni información de pagos en una sesión de práctica.

Explica qué descartaría cada hipótesis. Una buena respuesta de investigación indica cuál es la siguiente observación y cómo influye en tu próxima acción. También distingue lo que sabes de lo que todavía debes verificar.

## Minutos 18–23: comunica el defecto

Expón brevemente un informe de defecto: comportamiento afectado, entorno, precondiciones, pasos mínimos, resultado esperado, resultado real y evidencia. Describe la gravedad según el impacto en el cliente y la prioridad según el contexto del lanzamiento. Pueden ser distintas.

Termina con una transferencia clara. Di si el problema se puede reproducir, si encontraste una solución temporal y qué pregunta sigue abierta. No atribuyas una causa raíz antes de que las pruebas la respalden. El mismo hábito facilita seguir cómo [pensar en voz alta en entrevistas técnicas](/blog/thinking-out-loud-in-coding-interviews): haz visible el razonamiento que otra persona necesita evaluar.

## Minutos 23–27: decide qué automatizar

Elige una comprobación de regresión estable para este escenario y asígnala a una capa adecuada. Podrías comprobar las notificaciones de pago duplicadas con una prueba de API o de integración y mantener una prueba pequeña de interfaz para el resultado visible para el cliente. Indica los datos de prueba, el criterio de verificación y cómo se limpian al terminar.

Si una prueba de interfaz es inestable, investiga sus dependencias antes de aumentar los reintentos. Habla de los tiempos, el estado compartido y la fiabilidad de los selectores. Explica qué corresponde comprobar en una capa inferior y qué requiere exploración humana.

## Minutos 27–30: revisa la evidencia y vuelve a intentarlo

Evalúa el ensayo con cinco preguntas: ¿Aclaré las incertidumbres? ¿Priorizé los riesgos? ¿Mis resultados esperados eran observables? ¿Investigué basándome en pruebas? ¿Otra persona podría actuar a partir de mi informe de defecto?

En una práctica para nivel júnior, céntrate en casos claros e informes reproducibles. En nivel intermedio, relaciona los límites entre servicios, las capas de prueba y los pasos de investigación. En nivel sénior, justifica las compensaciones del lanzamiento, el riesgo residual y la forma en que el equipo supervisará el resultado. Son objetivos de práctica, no una rúbrica universal de contratación.

Elige una respuesta débil y repítela introduciendo una mejora. Una [entrevista simulada](/blog/inside-an-ai-interview-simulator) es más útil cuando la revisión cambia tu siguiente intento.

El modo de entrevistas de QA de Mentarika es un piloto controlado; la disponibilidad se indica en la aplicación. El piloto se centra en entrevistas e informes. Puedes usar este plan por tu cuenta o [consultar las modalidades de práctica disponibles](/#waitlist).

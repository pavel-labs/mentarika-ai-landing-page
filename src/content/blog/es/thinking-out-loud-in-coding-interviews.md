---
title: 'Cómo pensar en voz alta en entrevistas de programación sin enredarte'
date: 2026-09-02
summary: 'Los entrevistadores evalúan el razonamiento que pueden oír. Aquí tienes una forma de explicar una solución que te ayude en vez de abrumarte.'
locale: es
---

Todas las guías de entrevistas dicen que hay que pensar en voz alta. Casi ninguna te explica qué decir.

Así que la gente suele caer en uno de dos errores. Se queda en silencio durante ocho minutos y reaparece con una solución a medio escribir que nadie puede seguir, o narra cada pulsación hasta que el entrevistador ya no sabe cuál es la idea importante.

Ambos tienen el mismo costo: el entrevistador no puede saber si realmente entendías lo que hacías.

## Qué sigue realmente el entrevistador

Tras la rúbrica, la mayoría de los entrevistadores técnicos intenta responder tres preguntas:

- ¿Entendió esta persona el problema antes de escribir código?
- Al elegir un enfoque, ¿sabía por qué lo eligió?
- Cuando algo falló, ¿lo depuró o se limitó a adivinar?

Nada de eso se ve en el código final. Solo se manifiesta en lo que dices mientras trabajas. Por eso se evalúa la narración.

## Una estructura que resiste la presión

No necesitas un guion. Necesitas cuatro puntos de control, que debes verbalizar en orden.

1. **Reformula y acota.** Explica en una o dos frases cuál es la entrada, cuál es la salida y qué estás suponiendo. «La entrada está ordenada, puede haber enteros repetidos y hay que devolver índices, no valores». Así se detectan sin esfuerzo muchas soluciones equivocadas.
2. **Menciona las opciones y luego decide.** Di qué dos enfoques consideras y por qué eliges uno. «La fuerza bruta es cuadrática; una tabla hash intercambia memoria por una sola pasada. Elijo la tabla». En diez segundos demuestras el razonamiento sobre compensaciones que busca la rúbrica.
3. **Explica la intención, no la sintaxis.** «Ahora recorro el array y compruebo si el complemento está en la tabla» aporta información. «Ahora escribo un bucle for, i es igual a cero» es ruido.
4. **Verifica con un ejemplo real.** Recorre a mano una entrada pequeña y explícalo en voz alta, incluido un caso límite que hayas mencionado en el primer paso.

La idea es sencilla: habla de decisiones, no de cada pulsación.

## Si te atascas, dilo con precisión

Quedarse en silencio bajo presión parece pánico. Pero divagar sin concretar también. Lo útil es especificar en qué punto te atascaste.

Compara «Mmm, no estoy seguro de que esto funcione» con «El error de uno en el límite está en el paso de reducción: la ventana pierde el último elemento válido y quiero comprobar si la condición debe ser inclusiva».

La segunda opción también expresa que estás atascado. Además, muestra al entrevistador que sabes acotar un error y le facilita ofrecerte una pista. Estar atascado y ser específico es mucho mejor que estar atascado y callado.

## La trampa: convencerte de abandonar una respuesta correcta

También existe un problema en el extremo opuesto. Algunos candidatos narran con tanta ansiedad que abandonan un enfoque funcional en cuanto el entrevistador no reacciona.

Ayudan dos pautas:

- Una vez que te comprometas en el segundo paso, termina el enfoque antes de cambiarlo. Si quieres modificarlo, explica primero el motivo: «Esto se está complicando por el caso de duplicados, así que quiero reconsiderarlo». Un cambio anunciado se evalúa de forma muy distinta a un cambio silencioso.
- Interpreta el silencio del entrevistador como neutral. Normalmente está tomando notas.

## Cómo practicar

No puedes ensayar esta narración leyendo soluciones. Tienes que expresarla mientras alguien te escucha e interrumpe, porque la parte difícil es mantener la estructura mientras te hacen preguntas.

Ese es el ciclo en torno al cual estamos construyendo Mentarika: un entrevistador que sigue planteando la siguiente pregunta, nota si te saltaste el primer paso y después te indica en qué momento tu explicación dejó de convencer.

Consulta los [detalles del lanzamiento](/#waitlist) para conocer la disponibilidad.

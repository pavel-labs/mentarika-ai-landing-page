---
title: 'Práctica de entrevistas con IA para equipos de ingeniería: qué puede y qué no puede hacer'
date: 2026-09-28
summary: 'Cómo pueden las organizaciones de ingeniería usar la práctica de entrevistas con IA y las evaluaciones de programación para mantener a sus ingenieros preparados y evaluar a candidatos de forma coherente, y en qué casos sigue siendo necesaria la decisión de una persona.'
locale: es
---

La mayoría de las empresas da por sentado que los ingenieros ya saben entrevistar y que los candidatos deben prepararse por su cuenta. En la práctica, es una habilidad como cualquier otra: se pierde si no se usa y está distribuida de forma desigual en un equipo. Este artículo examina dónde falla la preparación para entrevistas técnicas dentro de las organizaciones, para qué sirve realmente la práctica de entrevistas con IA, qué no puede hacer y cómo llevar a cabo un pequeño piloto que permita comprobar si es útil.

Lo escribe el equipo detrás de [Mentarika](/), así que en algunos puntos describimos nuestro propio producto. Hemos procurado mantener la información objetiva y dejar claros sus límites.

## El problema: la habilidad para entrevistar se deteriora y las buenas simulaciones son costosas

Un ingeniero que no ha pasado por una entrevista en cuatro años no ha olvidado cómo crear software. Ha olvidado cómo explicarlo contra reloj, ante una persona desconocida que lo interrumpe con un «¿por qué no usarías el otro enfoque?». Esa brecha importa en dos ámbitos:

- **Movilidad interna y ascensos.** Muchas empresas organizan conversaciones técnicas estructuradas para ascensos, cambios de equipo o puestos de liderazgo técnico. Quienes no han practicado cómo explicar su trabajo bajo presión suelen rendir por debajo de lo que realmente saben.
- **Contratación.** Los entrevistadores también son ingenieros. La consistencia de un proceso de selección depende de personas que rara vez practican entrevistar, por lo que la experiencia varía de un entrevistador a otro.

La solución tradicional es una entrevista simulada con un ingeniero sénior. Funciona, pero no escala. Una hora del tiempo de un ingeniero staff por simulación, persona y tema se acumula rápidamente, y la calidad depende de quién tenga disponibilidad esa semana.

## Por qué no escalan los enfoques habituales

**Bancos de preguntas.** Leer una lista de preguntas habituales produce reconocimiento, no capacidad de recordar. La gente se siente preparada porque las preguntas le resultan familiares, pero luego le cuesta dar una respuesta estructurada en voz alta. Nadie pregunta después de una respuesta imprecisa, así que nunca queda en evidencia.

**Entrevistas entre pares.** Son valiosas y la mejor forma de obtener criterio humano sobre la impresión que causa alguien. Pero cuesta programarlas, es fácil que se conviertan en conversaciones amistosas y casi nadie hará cinco simulaciones sobre el mismo tema acotado para ayudar a un colega a corregir un error recurrente. Comparamos ambos formatos con más detalle en [entrevistas simuladas entre pares frente a entrevistas simuladas con IA](/blog/peer-mock-interviews-vs-ai/).

**Ejercicios para hacer en casa.** Son útiles para la contratación, pero menos para practicar. Llevan horas, cada vez molestan más a los candidatos y, si llega algún comentario, suele hacerlo días después.

**Un chatbot de propósito general.** Un ingeniero puede pedirle a un chatbot preguntas de entrevista. Las obtendrá. Pero no tendrá una estructura fija, un límite de tiempo, una pregunta de seguimiento basada en su propia respuesta, código que realmente se ejecute ni un registro de lo que salió mal la vez anterior. El ingeniero acaba haciendo la entrevista y evaluándose al mismo tiempo.

## Para qué sirve la práctica de entrevistas con IA y para qué no

Una herramienta específica de práctica de entrevistas con IA se justifica cuando se ocupa de tareas tediosas o costosas para las personas:

- **Disponibilidad y repetición.** Practica a las 7 de la mañana o entre reuniones, y repite un tema hasta dominarlo, sin tener que pedir tiempo a otra persona.
- **Estructura.** La entrevista avanza por etapas con tiempos definidos. En Mentarika, consta de calentamiento, preguntas técnicas, análisis en profundidad y cierre, para el puesto elegido (frontend, backend o algoritmos), el nivel (júnior, intermedio o sénior) y hasta seis tecnologías.
- **Preguntas de seguimiento basadas en la respuesta real.** La presión útil de una entrevista está en la segunda pregunta, no en la primera. Una buena herramienta la plantea, acota la pregunta si el candidato se atasca e insiste más si la respuesta es sólida.
- **Comentarios respaldados por evidencia.** El informe debería vincular cada puntuación con algo que la persona dijo, indicar las habilidades que no pudo evaluar en lugar de adivinarlas y convertir las brechas en un plan.

No sirve para todo, y conviene decirlo claramente:

- **No es una persona.** No evalúa la compatibilidad con la cultura de la empresa, la motivación ni la forma de trabajar en equipo. El criterio conductual sigue correspondiendo a las personas.
- **No toma decisiones de contratación.** Como mucho, aporta a una persona una primera señal coherente y comparable. La decisión y la responsabilidad siguen siendo de tu equipo.
- **Solo es tan buena como la rúbrica que utiliza.** Una puntuación de IA sin evidencia que la respalde es ruido. Pregunta a cualquier proveedor cómo obtiene las puntuaciones y si puedes ver por qué una puntuación es la que es.

## La conversación y el código son habilidades distintas: evalúalas por separado

Explicar un diseño y escribir código funcional contra reloj están relacionados, pero no son lo mismo. Si ambos ocurren en el mismo chat, es difícil saber qué hay que mejorar; además, un modelo que «lee» el código solo puede adivinar si se ejecuta.

Por eso Mentarika los mantiene separados. La **entrevista** es una conversación técnica, oral o escrita. La **evaluación de programación** es un ejercicio cronometrado e independiente: de uno a cinco problemas, un editor, ejemplos ejecutables, una opción entre JavaScript, TypeScript, Python, Java, Go o C++, y una calificación basada en pruebas ocultas que nunca salen del servidor. Una vez calificada, una IA revisa la calidad, la eficiencia y la legibilidad del código de cada problema. El resultado general combina la puntuación de las pruebas con esa revisión, así que «parece correcto» nunca cuenta como correcto.

Para un equipo, esta separación hace que los resultados sean comparables: dos candidatos que realizaron la misma evaluación fueron calificados con las mismas pruebas.

## Consistencia: entrevistas de empresa y puntuación basada en evidencia

La principal razón por la que las organizaciones adoptan herramientas de entrevistas estructuradas es la consistencia. En Mentarika, esto se concreta en las **entrevistas de empresa**: una plantilla que fija el puesto, el nivel, el conjunto tecnológico, la duración y el idioma, además de hasta 30 preguntas iniciales, cada una con los conceptos que el equipo espera que cubra una buena respuesta.

Todas las personas que hacen esa entrevista reciben la misma estructura y las mismas preguntas iniciales. Las preguntas de seguimiento siguen adaptándose a lo que responde cada persona, como corresponde en una entrevista y no en un cuestionario.

La puntuación se basa en evidencia. Durante la entrevista, las respuestas se etiquetan según la rúbrica y las puntuaciones del informe se calculan a partir de esa evidencia, no de un número generado por el modelo. Las habilidades que no se llegaron a evaluar se indican como «no evaluadas» en vez de asignarles una puntuación inventada.

## Desarrollo del equipo sin vigilancia

La forma más rápida de acabar con un programa de práctica es hacer que la gente sienta que la vigilan. Los ingenieros practican con honestidad cuando sus errores son privados; dejan de practicar o empiezan a buscar cómo manipular el sistema cuando un gerente puede leer cada tropiezo.

Por eso, los límites deben estar en el producto y no solo en un documento de políticas. En una organización de Mentarika:

- De cada miembro, la organización solo ve la fecha de incorporación, el número de entrevistas de los últimos 30 días y la actividad más reciente.
- Los promedios de habilidades del equipo solo aparecen cuando han contribuido al menos cinco personas, para que ningún promedio pueda atribuirse a una persona.
- Ningún rol de la organización —propietario, administrador, reclutador o miembro— puede leer la transcripción ni el informe individual de un empleado.

Es una compensación deliberada. Se obtiene suficiente información para saber si se usa el programa y en qué aspectos el equipo, en conjunto, tiene más dificultades, pero no la suficiente para evaluar a las personas. Si tu objetivo es evaluar el desempeño individual, una herramienta de práctica no es el instrumento adecuado.

## Evaluar a candidatos de forma justa

En un proceso de contratación, la misma estructura se convierte en una primera ronda coherente. Lo importante es contar con consentimiento y dejar claro qué verá la empresa:

- Una **asignación para candidatos** es un enlace de un solo uso, que solo se abre con la dirección de correo electrónico invitada y caduca.
- Antes de empezar, el candidato ve una explicación de qué se compartirá y da su consentimiento.
- El reclutador ve el informe de una entrevista o los resultados y las puntuaciones de una evaluación de programación, pero no la transcripción ni el código enviado.
- La asignación no consume el cupo de práctica personal del candidato.

Considera el resultado como un dato estructurado más para una conversación con una persona, no como un filtro automático de aprobado o suspenso.

## Lista de comprobación de seguridad y privacidad para cualquier proveedor

Independientemente de la herramienta que evalúes, estas preguntas distinguen un producto cuidadoso de una demostración:

1. **¿Quién puede ver qué?** Pide una lista exacta para cada rol y pregunta si los permisos se aplican en el servidor o solo se ocultan en la interfaz.
2. **¿Cómo se aíslan los clientes?** ¿Puede una persona usuaria de una organización acceder a los datos de otra con solo cambiar un ID?
3. **¿Dónde se guardan las claves de API de los modelos?** Deben permanecer en el servidor, nunca en un navegador o una aplicación.
4. **¿Para qué se usan los datos?** ¿Para los informes y el progreso, o también se venden o se usan para publicidad?
5. **¿Cómo se generan las puntuaciones?** ¿A partir de evidencia que puedes inspeccionar o de un único número del modelo?
6. **¿Qué ocurre si falla la IA?** ¿Se marca el análisis fallido o se sustituye en silencio por una puntuación que parece plausible?

Las respuestas de Mentarika: los permisos por rol y los umbrales de privacidad se aplican desde el servidor en cada solicitud; la organización se determina a partir de la pertenencia del usuario autenticado, nunca de un ID en la URL; las claves de los modelos permanecen en el servidor; los datos de sesión se utilizan para los informes y el progreso y no se venden; y si falla el análisis de IA, el informe lo indica y conserva las puntuaciones basadas en evidencia.

Lo que **todavía no está disponible**, para que puedas planificarlo: SSO y aprovisionamiento SCIM, integraciones con ATS, marca personalizada, problemas de programación creados por la empresa y pago de autoservicio.

## Cómo empezar: un piloto de dos semanas

Un piloto debería responder una pregunta: ¿la práctica estructurada cambia algo para el equipo? Un plan sencillo:

1. **Elige un caso de uso.** Desarrollo de habilidades o contratación, no ambos a la vez.
2. **Empieza en pequeño.** Una organización de prueba de Mentarika dura 14 días e incluye 5 plazas y 10 asignaciones para candidatos: suficiente para un equipo o un puesto vacante.
3. **Crea una entrevista de empresa** para el puesto y el conjunto tecnológico más importantes, con algunas preguntas iniciales que realmente hacen tus ingenieros sénior.
4. **Mide lo que puedes observar.** Para el desarrollo de habilidades: cuántas entrevistas decidieron hacer las personas y cómo cambiaron los promedios del equipo. Para la contratación: si los candidatos completaron la asignación y si los entrevistadores encontraron útiles los informes en la conversación posterior.
5. **Pregunta a los participantes.** Que les haya resultado útil es el principal indicador de que seguirán usándola.

Si quieres probarlo con tu equipo, [cuéntanos](/enterprise/#contact). Para ingenieros individuales, la [página de inicio](/) explica cómo funciona una entrevista individual, y [dentro de un simulador de entrevistas con IA](/blog/inside-an-ai-interview-simulator/) profundiza un poco más en la arquitectura.

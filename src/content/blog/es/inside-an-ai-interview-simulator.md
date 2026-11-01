---
title: 'Dentro de un simulador de entrevistas con IA: arquitectura en términos generales'
date: 2026-05-19
summary: 'Qué hace falta para que un entrevistador de IA resulte exigente y coherente sin convertir el producto en un conjunto de llamadas a modelos sin conexión entre sí.'
locale: es
---

Desde fuera, un producto de entrevistas con IA parece sencillo: el usuario habla, el modelo responde, aparece una puntuación y después llega un informe.

En la práctica, la calidad del producto depende de que esos pasos se comporten como un sistema coherente o como un montón de llamadas a API sin relación.

Somos cuidadosos con la cantidad de detalles de implementación que compartimos públicamente, pero la arquitectura general importa porque explica la filosofía del producto.

## El sistema tiene que hacer más que «chatear»

Para parecer un entrevistador en vez de un asistente genérico, el sistema debe mantener ciertas condiciones durante toda la sesión:

- la personalidad del entrevistador debe mantenerse estable;
- la dificultad de las preguntas debe adaptarse al candidato;
- las pistas no deben eliminar el desafío de inmediato;
- la puntuación no debe bloquear la conversación principal; y
- el informe final debe reflejar la sesión que realmente tuviste, no otra distinta.

Por eso el diseño se orienta hacia componentes especializados en vez de una única instrucción enorme.

## La estructura de producto que nos interesa

A grandes rasgos, pensamos en capas:

- un ciclo de entrevista en directo que gestiona la conversación en tiempo real;
- fases de evaluación independientes que no interrumpen al candidato; y
- un paso de cierre de la sesión que convierte toda la transcripción en información útil.

Puede parecer obvio, pero cambia muchas decisiones de ingeniería. La latencia importa en una capa. La consistencia importa en otra. El control de costos importa en todas.

## Por qué no queremos una «caja negra mágica»

Existe la tentación de construir productos de IA como máquinas misteriosas: sin estructura visible, expectativas claras ni explicación de por qué cambió una puntuación o apareció una pregunta de seguimiento.

Creemos que es una mala dirección para un producto que la gente utiliza para prepararse para entrevistas de alto impacto.

La experiencia debería parecer:

- exigente;
- lo bastante predecible como para inspirar confianza; y
- lo bastante específica como para permitir mejorar.

Eso significa que la arquitectura debe permitir rastrear el comportamiento, no solo producir respuestas ingeniosas.

## Qué significa para el usuario

No deberías tener que preocuparte por qué componente interno gestionó cada parte de la sesión. Lo que sí deberías notar es que:

- el entrevistador mantiene el hilo;
- la presión parece deliberada;
- el informe coincide con lo ocurrido; y
- cada sesión de práctica sugiere un siguiente paso.

Ahí es donde la arquitectura se convierte en producto.

Seguiremos compartiendo más sobre el desarrollo, pero nos interesa más que el sistema se sienta preciso que publicar un diagrama para presumir. Si te interesa este enfoque, consulta los [detalles del lanzamiento de Mentarika](/#waitlist).

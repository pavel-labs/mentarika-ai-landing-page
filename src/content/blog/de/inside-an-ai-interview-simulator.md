---
title: 'Ein Blick in die Architektur eines KI-Interview-Simulators'
date: 2026-05-19
locale: de
summary: 'Was nötig ist, damit sich ein KI-Interviewer fordernd und schlüssig anfühlt, ohne das Produkt in eine Sammlung unverbundener Modellaufrufe zu verwandeln.'
---

Von außen klingt ein KI-Interviewprodukt einfach: Die nutzende Person spricht, das Modell
antwortet, eine Bewertung erscheint und später wird ein Bericht angezeigt.

In der Praxis hängt die Produktqualität davon ab, ob sich diese Schritte wie ein
zusammenhängendes System oder wie ein Haufen unabhängiger API-Aufrufe verhalten.

Wir achten darauf, wie viele Details zur Implementierung wir öffentlich teilen. Die grobe
Architektur ist aber wichtig, weil sie die Produktphilosophie erklärt.

## Das System muss mehr als „Chat“ leisten

Damit sich das System wie eine interviewende Person und nicht wie ein allgemeiner Assistent
anfühlt, muss es während der gesamten Sitzung einige Grundsätze einhalten:

- Die Rolle der interviewenden Person bleibt konsistent.
- Der Schwierigkeitsgrad der Fragen reagiert auf die Kandidatin oder den Kandidaten.
- Hinweise dürfen die Herausforderung nicht sofort zunichtemachen.
- Die Bewertung darf das laufende Gespräch nicht blockieren.
- Und der Abschlussbericht muss die tatsächlich geführte Sitzung widerspiegeln, nicht eine
  andere.

Das spricht für spezialisierte Komponenten statt eines einzigen riesigen Prompts.

## Die Produktstruktur, die uns wichtig ist

Auf hoher Ebene denken wir in Schichten:

- eine Live-Interview-Schleife für das Gespräch in Echtzeit,
- separate Bewertungsdurchläufe, die die Kandidatin oder den Kandidaten nicht unterbrechen,
- und ein Schritt zum Sitzungsabschluss, der das gesamte Gesprächsprotokoll in konkrete
  Handlungsmöglichkeiten übersetzt.

Das klingt offensichtlich, verändert aber viele technische Entscheidungen. In einer Schicht
ist Latenz wichtig, in einer anderen Konsistenz. Kostenkontrolle spielt überall eine Rolle.

## Warum wir keine „magische Blackbox“ wollen

KI-Produkte als undurchsichtige Maschinen zu bauen, ist verlockend: ohne sichtbare Struktur,
klare Erwartungen oder Erklärung dafür, warum sich eine Bewertung geändert hat oder eine
Rückfrage gestellt wurde.

Wir halten das für die falsche Richtung bei einem Produkt, das Menschen für die Vorbereitung
auf wichtige Interviews verwenden.

Kandidatinnen und Kandidaten sollten das Gefühl haben, dass das Erlebnis:

- anspruchsvoll ist,
- berechenbar genug ist, um Vertrauen zu schaffen,
- und konkret genug ist, um daraus zu lernen.

Die Architektur muss deshalb nachvollziehbares Verhalten unterstützen und darf nicht nur
clevere Antworten erzeugen.

## Was das für die nutzende Person bedeutet

Du solltest dich nicht darum kümmern müssen, welche interne Komponente welchen Teil der
Sitzung bearbeitet hat. Was du bemerken solltest:

- Die interviewende Person behält den Gesprächsfaden.
- Der Druck wirkt bewusst gesetzt.
- Der Bericht passt zum tatsächlichen Gespräch.
- Und jede Übungssitzung schlägt einen nächsten Schritt vor.

Auf dieser Ebene wird Architektur zum Produkt.

Wir werden weiter über die Entwicklung berichten. Wichtiger ist uns jedoch, dass sich das
System präzise anfühlt, statt ein Diagramm zum Selbstzweck zu veröffentlichen. Wenn dich
dieser Ansatz anspricht, findest du hier die [Details zum Start von Mentarika](/#waitlist).

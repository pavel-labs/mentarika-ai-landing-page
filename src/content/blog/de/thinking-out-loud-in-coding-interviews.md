---
title: 'Beim Coding-Interview laut denken, ohne sich in die Ecke zu reden'
date: 2026-09-02
locale: de
summary: 'Interviewende bewerten die Überlegungen, die sie hören können. So erklärst du deinen Lösungsweg, ohne dich in Details zu verlieren.'
---

In jedem Interviewratgeber steht, man solle laut denken. Fast keiner erklärt, was man sagen
soll.

Deshalb greifen viele auf einen von zwei Fehlermodi zurück: Entweder schweigen sie acht
Minuten lang und tauchen mit einer halbfertigen Lösung wieder auf, der niemand folgen kann,
oder sie kommentieren jeden Tastendruck, bis die interviewende Person nicht mehr weiß,
welche Idee eigentlich zählt.

Beides kostet dasselbe: Die interviewende Person kann nicht erkennen, ob du tatsächlich
wusstest, was du tust.

## Worauf die interviewende Person wirklich achtet

Hinter dem Bewertungsraster beantworten die meisten technischen Interviewenden drei Fragen:

- Hat diese Person das Problem verstanden, bevor sie Code geschrieben hat?
- Wusste sie, warum sie sich für diesen Ansatz entschieden hat?
- Hat sie bei einem Fehler gezielt debuggt oder nur geraten?

Nichts davon ist am fertigen Code zu erkennen. Sichtbar wird es nur durch das, was du während
der Arbeit sagst. Genau deshalb wird das Erklären überhaupt bewertet.

## Eine Struktur, die auch unter Druck funktioniert

Du brauchst kein Skript. Du brauchst vier Stationen, die du der Reihe nach laut ansprichst.

1. **Wiederholen und eingrenzen.** Sage in ein oder zwei Sätzen, was Eingabe und Ausgabe sind und welche Annahmen du triffst. „Die Eingabe ist sortiert, Ganzzahlen können mehrfach vorkommen, gib Indizes statt Werte zurück.“ So lassen sich viele falsche Lösungen früh erkennen.
2. **Mögliche Ansätze nennen und dich dann festlegen.** Nenne zwei Ansätze und den Grund für deine Wahl. „Brute Force ist quadratisch; eine Hash-Map kostet Speicher, braucht aber nur einen Durchlauf. Ich nehme die Map.“ Das dauert zehn Sekunden und zeigt die im Bewertungsraster geforderte Abwägung.
3. **Absicht statt Syntax erklären.** „Jetzt durchlaufe ich das Array und prüfe, ob das Komplement in der Map steht“ ist hilfreich. „Jetzt schreibe ich eine for-Schleife, i ist gleich null“ ist nur Rauschen.
4. **An einem echten Beispiel prüfen.** Gehe ein kleines Beispiel Schritt für Schritt von Hand durch und sprich dabei laut, einschließlich eines Randfalls aus Schritt eins.

Das Muster ist einfach: Sprich über Entscheidungen, nicht über Tastendrücke.

## Wenn du feststeckst, benenne genau, woran

Schweigen unter Druck wirkt panisch. Vages Herumprobieren aber auch. Hilfreich ist, präzise
zu sagen, wo du nicht weiterkommst.

Vergleiche „Hm, ich bin mir nicht sicher, ob das funktioniert“ mit „Mein Off-by-one-Fehler
liegt beim Verkleinern des Fensters – dabei geht das letzte gültige Element verloren. Ich
möchte prüfen, ob die Bedingung inklusiv sein sollte.“

Auch die zweite Antwort beschreibt, dass du feststeckst. Zugleich zeigt sie, dass du einen
Fehler eingrenzen kannst, und erleichtert der interviewenden Person einen gezielten Hinweis.
Genau zu wissen, woran du hängst, ist viel besser, als still festzustecken.

## Die Falle: Dich aus einer richtigen Antwort herausreden

Es gibt auch den gegenteiligen Fehlermodus. Manche Kandidaten kommentieren ihre Überlegungen
so nervös, dass sie einen funktionierenden Ansatz aufgeben, sobald die interviewende Person
nicht reagiert.

Zwei Regeln helfen:

- Wenn du dich in Schritt zwei festgelegt hast, bring den Ansatz zu Ende, bevor du wechselst. Wenn du umdenken willst, erkläre zuerst warum: „Wegen des Falls mit Duplikaten wird es kompliziert, deshalb möchte ich den Ansatz noch einmal überdenken.“ Ein angekündigter Wechsel wird ganz anders bewertet als ein stiller.
- Betrachte Schweigen der interviewenden Person als neutral. Meistens macht sie sich Notizen.

## So kannst du es üben

Das Erklären lässt sich nicht durch das Lesen von Lösungen einüben. Du musst sprechen,
während dir jemand zuhört und dich unterbricht, denn schwierig ist, die Struktur
beizubehalten, während dir Fragen gestellt werden.

Genau dafür entwickeln wir Mentarika: als Interviewer, der immer die nächste Frage stellt,
bemerkt, wenn du Schritt eins übersprungen hast, und dir anschließend zeigt, wo deine
Erklärung nicht mehr überzeugend war.

Unter [Details zum Start](/#waitlist) erfährst du mehr zur Verfügbarkeit.

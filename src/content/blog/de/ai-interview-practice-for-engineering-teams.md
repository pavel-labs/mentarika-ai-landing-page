---
title: 'KI-Interviewtraining für Engineering-Teams: Was es kann und was nicht'
date: 2026-09-28
locale: de
summary: 'Wie Engineering-Organisationen KI-Interviewtraining und Coding-Bewertungen einsetzen können, um Entwickler fit zu halten und Kandidaten einheitlich zu prüfen – und wo weiterhin ein Mensch entscheiden muss.'
---

Die meisten Unternehmen betrachten Interviewkompetenz als etwas, das Entwickler mitbringen,
während Kandidaten selbst herausfinden müssen, wie sie sich vorbereiten. In der Praxis ist
sie wie jede andere Fähigkeit: Ohne Übung lässt sie nach und ist innerhalb eines Teams
ungleich verteilt. Dieser Artikel zeigt, woran technische Interviewvorbereitung in
Organisationen scheitert, wofür KI-Interviewtraining tatsächlich geeignet ist, wo seine
Grenzen liegen und wie sich mit einem kleinen Pilotprojekt herausfinden lässt, ob es hilft.

Der Artikel stammt vom Team hinter [Mentarika](/), deshalb beschreiben wir an einigen Stellen
unser eigenes Produkt. Wir haben versucht, diese Passagen sachlich zu halten und die Grenzen
klar zu benennen.

## Das Problem: Interviewkompetenz lässt nach, gute Probeinterviews sind teuer

Ein Entwickler, der vor vier Jahren zuletzt an einem Interview teilgenommen hat, hat nicht
vergessen, wie man Software entwickelt. Er hat aber möglicherweise vergessen, sie unter
Zeitdruck einer fremden Person zu erklären, während sie mit „Warum nicht der andere Ansatz?“
unterbricht. Diese Lücke ist in zwei Bereichen wichtig:

- **Interne Mobilität und Beförderungen.** Viele Unternehmen führen strukturierte technische Gespräche für Beförderungen, Teamwechsel oder Tech-Lead-Rollen. Wer nicht geübt hat, die eigene Arbeit zu erklären, schneidet schlechter ab, als es dem tatsächlichen Wissen entspricht.
- **Einstellung.** Auch Interviewende sind Entwickler. Wie konsistent ein Einstellungsprozess ist, hängt von Personen ab, die selten selbst Interviews üben; deshalb unterscheidet sich der Prozess von einer interviewenden Person zur nächsten.

Die herkömmliche Lösung ist ein Probeinterview mit einer erfahrenen Entwicklerin oder einem
erfahrenen Entwickler. Das funktioniert, lässt sich aber nicht gut skalieren. Eine Stunde
Arbeitszeit einer Staff Engineer pro Probeinterview, Person und Thema summiert sich schnell.
Außerdem hängt die Qualität davon ab, wer in der jeweiligen Woche verfügbar ist.

## Warum die üblichen Ansätze nicht skalieren

**Fragensammlungen.** Wer häufige Fragen liest, trainiert Wiedererkennen statt Abruf. Die
Fragen kommen einem bekannt vor, weshalb man sich vorbereitet fühlt; laut eine strukturierte
Antwort zu geben, fällt dann aber schwer. Niemand fragt bei einer vagen Antwort nach, sodass
die Unklarheit verborgen bleibt.

**Probeinterviews mit Kolleginnen und Kollegen.** Sie sind wertvoll und eignen sich am besten
dazu, menschliches Feedback zum eigenen Auftreten zu erhalten. Allerdings sind sie schwer zu
terminieren, werden leicht zu freundlichen Gesprächen, und kaum jemand führt fünf
Probeinterviews zum selben eng gefassten Thema durch, damit eine Kollegin einen
wiederkehrenden Fehler angehen kann. Die beiden Formate vergleichen wir ausführlicher in
[Probeinterviews mit anderen oder mit KI](/blog/peer-mock-interviews-vs-ai/).

**Take-Home-Aufgaben.** Sie sind für Einstellungen nützlich, weniger aber zum Üben. Sie
dauern Stunden, stoßen bei Kandidaten zunehmend auf Ablehnung, und Feedback kommt – falls es
überhaupt kommt – erst Tage später.

**Ein allgemeiner Chatbot.** Entwickler können einen Chatbot nach Interviewfragen fragen und
bekommen Fragen. Was sie nicht erhalten, ist ein fester Ablauf, ein Zeitlimit, eine
Rückfrage, die auf ihrer eigenen Antwort aufbaut, tatsächlich ausgeführter Code oder eine
Aufzeichnung dessen, was beim letzten Versuch schiefging. Die Entwickler müssen das Interview
dann selbst führen und gleichzeitig bewerten.

## Wofür KI-Interviewtraining geeignet ist – und wofür nicht

Ein eigens für Interviewtraining entwickeltes KI-Tool lohnt sich, wenn es Aufgaben übernimmt,
die für Menschen mühsam oder teuer sind:

- **Verfügbarkeit und Wiederholung.** Übe um 7 Uhr morgens oder zwischen Besprechungen und wiederhole dasselbe Thema, bis du es sicher beherrschst, ohne jemanden um Zeit bitten zu müssen.
- **Struktur.** Das Interview durchläuft zeitlich begrenzte Phasen. Bei Mentarika sind das Aufwärmen, technische Fragen, eine vertiefende Runde und ein Abschluss. Wählbar sind eine Rolle (Frontend, Backend oder Algorithmen), eine Stufe (Junior, Middle oder Senior) und bis zu sechs Technologien.
- **Rückfragen zu deiner tatsächlichen Antwort.** Der nützliche Druck im Interview entsteht durch die zweite Frage, nicht die erste. Ein gutes Tool stellt sie, grenzt die Frage ein, wenn die Kandidatin oder der Kandidat nicht weiterkommt, und fragt genauer nach, wenn die Antwort stark ist.
- **Feedback mit Belegen.** Ein Bericht sollte jede Bewertung an etwas knüpfen, das die Person gesagt hat, nicht bewertbare Fähigkeiten als solche kennzeichnen, statt zu raten, und die Lücken in einen Plan überführen.

Nicht für alles ist das Tool geeignet; diese Grenzen sollten klar sein:

- **Es ist kein Mensch.** Es beurteilt weder kulturelle Passung noch Motivation oder die Zusammenarbeit im Team. Verhaltensbezogene Einschätzungen gehören weiterhin Menschen.
- **Es trifft keine Einstellungsentscheidungen.** Allenfalls liefert es einer Person ein konsistentes, vergleichbares erstes Signal. Die Entscheidung und die Verantwortung dafür bleiben bei deinem Team.
- **Es hängt von der Bewertungsrubrik ab.** Eine KI-Bewertung ohne zugrunde liegende Belege ist wertlos. Frage Anbieter, wie Bewertungen entstehen und ob sich nachvollziehen lässt, warum eine Bewertung so ausfällt.

## Gespräch und Code sind unterschiedliche Fähigkeiten – getrennt bewerten

Ein Design zu erklären und unter Zeitdruck funktionierenden Code zu schreiben, hängt
zusammen, sind aber unterschiedliche Fähigkeiten. Wenn beides in einem Chat stattfindet, ist
schwer zu erkennen, woran gearbeitet werden muss. Ein Modell, das Code nur „liest“, kann
außerdem nur raten, ob er tatsächlich ausgeführt wird.

Deshalb hält Mentarika die beiden Bereiche getrennt. Das **Interview** ist ein gesprochenes
oder getipptes technisches Gespräch. Die **Coding-Bewertung** ist eine separate, zeitlich
begrenzte Übung: ein bis fünf Aufgaben, ein Editor, ausführbare Beispiele, eine Auswahl aus
JavaScript, TypeScript, Python, Java, Go oder C++ und eine Bewertung anhand versteckter
Tests, die den Server nie verlassen. Erst nach der Bewertung gibt eine KI für jede Aufgabe
Feedback zu Codequalität, Effizienz und Lesbarkeit. Das Gesamtergebnis kombiniert Testergebnis
und diese Bewertung, damit „sieht richtig aus“ nie als richtig zählt.

Für ein Team macht diese Trennung Ergebnisse vergleichbar: Zwei Kandidaten, die dieselbe
Bewertung absolviert haben, wurden anhand derselben Tests bewertet.

## Einheitlichkeit: Unternehmensinterviews und evidenzbasierte Bewertung

Der wichtigste Grund für den Einsatz strukturierter Interviewtools in Organisationen ist
Einheitlichkeit. Bei Mentarika gibt es dafür **Unternehmensinterviews**: eine Vorlage, die
Rolle, Erfahrungsstufe, Tech-Stack, Dauer und Sprache festlegt, sowie bis zu 30
Ausgangsfragen mit den Konzepten, die dein Team in einer guten Antwort erwartet.

Alle Personen, die dieses Interview absolvieren, erhalten denselben Ablauf und dieselben
Ausgangsfragen. Rückfragen passen sich weiterhin an die jeweilige Antwort an – genau darum
geht es bei einem Interview und nicht bei einem Quiz.

Die Bewertung stützt sich auf Belege. Während des Interviews werden Antworten anhand der
Rubrik gekennzeichnet. Die Bewertungen im Bericht werden aus diesen Belegen berechnet und
nicht einfach von einer Zahl übernommen, die das Modell erzeugt. Fähigkeiten, die im
Interview nicht behandelt wurden, erscheinen als „nicht bewertet“ und erhalten keine
erfundene Punktzahl.

## Teamentwicklung ohne Überwachung

Am schnellsten scheitert ein Übungsprogramm, wenn sich die Beteiligten beobachtet fühlen.
Entwickler üben ehrlich, wenn ihre Fehler privat bleiben. Hören sie dagegen, dass
Vorgesetzte jeden Fehltritt nachlesen können, hören sie entweder auf zu üben oder versuchen,
das System auszutricksen.

Die Grenzen müssen deshalb im Produkt selbst liegen und nicht nur in einer Richtlinie. In
einer Mentarika-Organisation gilt:

- Für jedes Mitglied sieht die Organisation nur das Beitrittsdatum, die Anzahl der Interviews in den letzten 30 Tagen und die letzte Aktivität.
- Teamdurchschnitte bei Fähigkeiten werden erst ab mindestens fünf beitragenden Personen angezeigt, sodass sich kein Durchschnitt auf eine einzelne Person zurückführen lässt.
- Keine Rolle innerhalb der Organisation – Eigentümer, Admin, Recruiter oder Mitglied – kann das Gesprächsprotokoll oder den individuellen Bericht eines Mitarbeiters lesen.

Das ist ein bewusster Kompromiss. Du erhältst genug Hinweise, um zu erkennen, ob das
Programm genutzt wird und worin das Team insgesamt schwächer ist, aber nicht genug, um
Einzelne damit zu bewerten. Wenn du individuelle Leistung beurteilen möchtest, ist ein
Übungstool das falsche Instrument.

## Kandidaten fair beurteilen

Bei der Einstellung wird derselbe Ablauf zu einem einheitlichen Erstgespräch. Dabei sind
Einwilligung und eine klare Abgrenzung dessen wichtig, was das Unternehmen sehen kann:

- Eine **Kandidatenaufgabe** ist ein einmal verwendbarer Link, der nur für die eingeladene E-Mail-Adresse geöffnet wird und abläuft.
- Vor dem Start sieht die kandidierende Person eine Offenlegung darüber, was weitergegeben wird, und stimmt dem zu.
- Der Recruiter sieht den Bericht zu einem Interview oder die Testergebnisse und Bewertungen einer Coding-Aufgabe – nicht das Gesprächsprotokoll und nicht den eingereichten Code.
- Die Aufgabe wird nicht auf das eigene Übungskontingent der kandidierenden Person angerechnet.

Betrachte das Ergebnis als einen strukturierten Beitrag zu einem Gespräch mit einem
Menschen, nicht als automatisches Bestehens- oder Ausschlusskriterium.

## Checkliste zu Sicherheit und Datenschutz für jeden Anbieter

Welche Tools du auch bewertest – diese Fragen unterscheiden ein sorgfältig entwickeltes
Produkt von einer Demo:

1. **Wer kann was sehen?** Frage nach der genauen Liste für jede Rolle und danach, ob die Beschränkung serverseitig durchgesetzt oder nur in der Oberfläche verborgen wird.
2. **Wie wird die Mandantentrennung umgesetzt?** Kann ein Nutzer einer Organisation durch Änderung einer ID auf Daten einer anderen Organisation zugreifen?
3. **Wo liegen die API-Schlüssel für Modelle?** Sie müssen auf dem Server bleiben und dürfen niemals im Browser oder in einer App liegen.
4. **Wofür werden die Daten genutzt?** Für Berichte und Fortschritt – oder werden sie auch verkauft oder für Werbung verwendet?
5. **Wie entstehen Bewertungen?** Auf Grundlage überprüfbarer Belege oder durch eine einzelne Modellzahl?
6. **Was passiert, wenn die KI ausfällt?** Wird eine fehlgeschlagene Analyse gekennzeichnet oder stillschweigend durch eine plausibel wirkende Bewertung ersetzt?

Die Antworten von Mentarika: Rollenberechtigungen und Datenschutzschwellen werden bei jeder
Anfrage serverseitig durchgesetzt; die Organisation wird aus der Mitgliedschaft der
angemeldeten Person abgeleitet und niemals aus einer ID in der URL. Modellschlüssel bleiben
serverseitig. Sitzungsdaten dienen Berichten und dem Fortschritt und werden nicht verkauft.
Ist eine KI-Analyse eines Berichts fehlgeschlagen, wird das gekennzeichnet; die
evidenzbasierten Bewertungen bleiben erhalten.

Was **noch nicht verfügbar** ist und bei der Planung berücksichtigt werden sollte:
SSO- und SCIM-Bereitstellung, ATS-Integrationen, individuelles Branding, von Unternehmen
verfasste Coding-Aufgaben und ein Self-Service-Checkout.

## Einstieg: ein zweiwöchiges Pilotprojekt

Ein Pilotprojekt sollte eine Frage beantworten: Verändert strukturiertes Üben etwas für
dein Team? Ein einfacher Plan:

1. **Einen Anwendungsfall auswählen.** Kompetenzaufbau oder Einstellung, nicht beides gleichzeitig.
2. **Klein anfangen.** Eine Testorganisation bei Mentarika umfasst 14 Tage, fünf Plätze und zehn Kandidatenaufgaben – genug für ein Team oder eine offene Stelle.
3. **Ein Unternehmensinterview** für die wichtigste Rolle und den wichtigsten Tech-Stack erstellen, mit einigen Ausgangsfragen, die erfahrene Entwickler tatsächlich stellen.
4. **Messbares erfassen.** Beim Kompetenzaufbau: Wie viele Interviews die Beteiligten freiwillig absolviert haben und wie sich Teamdurchschnitte verändert haben. Bei Einstellungen: ob Kandidaten die Aufgabe abgeschlossen haben und ob die Interviewenden die Berichte für das nächste Gespräch nützlich fanden.
5. **Die Teilnehmenden fragen.** Ob die Übung als nützlich empfunden wurde, ist ein wichtiger Frühindikator dafür, ob sie weiter genutzt wird.

Wenn du das mit deinem Team ausprobieren möchtest, [erzähl uns davon](/enterprise/#contact).
Für einzelne Entwickler erklärt die [Startseite](/), wie ein einzelnes Interview abläuft, und
[Ein Blick in die Architektur eines KI-Interview-Simulators](/blog/inside-an-ai-interview-simulator/)
geht eine Ebene tiefer.

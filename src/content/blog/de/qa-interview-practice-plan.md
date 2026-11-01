---
title: 'QA-Interview üben: ein realistischer Plan für 30 Minuten'
date: 2026-10-27
locale: de
summary: 'Übe Testdesign, API-Analyse, Fehlerberichte und Automatisierungsentscheidungen anhand eines konkreten Szenarios und einer evidenzbasierten Auswertung.'
---

Eine nützliche Probe für ein QA-Interview gibt dir ein System, das du untersuchen kannst,
eine Rahmenbedingung, die du beachten musst, und einen Grund, deine Entscheidungen zu
erklären. Testbegriffe aufzuzählen ist ein Anfang. Als Nächstes musst du zeigen, was du
zuerst testen würdest, welche Belege du benötigst und was du dem Team mitteilen würdest.

Du kannst die folgende 30-minütige Übung mit einer anderen Person durchführen oder deine
Antworten selbst aufnehmen. Verwende durchgehend ein Szenario: Ein Shop hat Rabattcodes
eingeführt, und Kundinnen und Kunden sehen manchmal eine erfolgreiche Zahlung, während ihre
Bestellung weiterhin aussteht. Diese Bedingungen sind fiktiv; sprich fehlende Details
ausdrücklich an, statt stillschweigend Annahmen zu treffen.

## Minuten 0–4: Produkt und Risiko klären

Beginne mit Fragen, die deinen Testplan verändern. Können Codes kombiniert werden? Wann wird
der Warenbestand reserviert? Wiederholt der Zahlungsanbieter Benachrichtigungen? Was bedeutet
„ausstehend“ für Kundschaft, Support-Team und Fulfillment-Service?

Nenne nach deinen Fragen zwei oder drei Annahmen. Nimm zum Beispiel an, dass ein Rabatt den
Gesamtbetrag niemals unter null senken darf und eine bezahlte Bestellung nach einer
Wiederholung nicht erneut belastet werden darf. Erkläre, welche Fehler finanzielle Verluste
verursachen oder die Zustellung einer Bestellung verhindern könnten. So wird sichtbar,
woran sich deine späteren Prioritäten orientieren.

## Minuten 4–11: Einen kleinen Testplan erstellen

Wähle einige Fälle aus, die unterschiedliche Fehlerarten abdecken:

- Ein gültiger Code wird auf einen berechtigten Warenkorb angewendet, und auf dem Beleg steht derselbe Gesamtbetrag.
- Ein abgelaufener Code wird abgelehnt, ohne den Warenkorb oder den belasteten Betrag zu ändern.
- Zwei Anfragen versuchen gleichzeitig, die letzte verfügbare Einlösung eines begrenzten Codes zu verwenden.
- Die Zahlung ist erfolgreich, aber die Bestätigung trifft verspätet oder doppelt ein.

Gib für jeden Fall den Ausgangszustand, die Aktion und ein beobachtbares Ergebnis an. „Die
API testen“ ist noch kein konkreter Testfall. „Die Zahlungsbenachrichtigung wiederholen und
prüfen, dass nur ein Zustandsübergang der Bestellung stattfindet“ beschreibt ein Verhalten,
das jemand überprüfen kann.

Treffe dann eine Entscheidung: Welchen Fall würdest du testen, wenn du zehn Minuten vor der
Veröffentlichung hättest, und warum? Berücksichtige einen Erfolgsfall, aber begründe deine
Risikoprioritäten, statt jeden denkbaren Input aufzuzählen.

## Minuten 11–18: Die ausstehende Bestellung untersuchen

Betrachte „Zahlung erfolgreich, Bestellung ausstehend“ als Symptom. Trenne deine Hypothesen:
Der Anbieter hat die Zahlung angenommen; die Benachrichtigung ist nicht eingegangen; eine
Signaturprüfung weist sie zurück; die Aktualisierung der Bestellung schlägt fehl; oder die
Kundenansicht zeigt veraltete Daten.

Beschreibe der Reihe nach, was du prüfen würdest. Vergleiche den Status beim Anbieter, die
Antwort auf die Benachrichtigung, den Bestellstatus und die für Kundinnen und Kunden sichtbare
Antwort. Nutze in der Übung einen fiktiven Korrelationswert. Füge niemals echte
Kundendaten, Zugriffstoken oder Zahlungsdaten in eine Übungssitzung ein.

Erkläre, welche Beobachtung jede Hypothese widerlegen würde. Eine gute Antwort zur
Fehlersuche nennt die nächste Beobachtung und wie sie den nächsten Schritt beeinflusst. Sie
unterscheidet auch zwischen dem, was du weißt, und dem, was noch überprüft werden muss.

## Minuten 18–23: Den Fehler kommunizieren

Formuliere laut einen kurzen Fehlerbericht: betroffenes Verhalten, Umgebung,
Vorbedingungen, minimale Schritte, erwartetes Ergebnis, tatsächliches Ergebnis und Belege.
Beschreibe den Schweregrad anhand der Auswirkungen auf Kundinnen und Kunden und die
Priorität anhand des Veröffentlichungskontexts. Beides kann unterschiedlich ausfallen.

Schließe mit einer klaren Übergabe ab. Sage, ob sich das Problem reproduzieren lässt, ob du
eine Umgehungslösung gefunden hast und welche Frage noch offen ist. Lege die Ursache nicht
fest, bevor sie durch Belege gestützt wird. Dieselbe Gewohnheit macht auch das
[laute Denken in technischen Interviews](/blog/thinking-out-loud-in-coding-interviews)
verständlicher: Lege die Überlegungen offen, die andere beurteilen müssen.

## Minuten 23–27: Entscheiden, was automatisiert werden soll

Wähle aus dem Szenario eine stabile Regressionprüfung aus und ordne sie einer passenden
Testebene zu. Du könntest doppelte Zahlungsbenachrichtigungen mit einem API- oder
Integrationstest prüfen und zusätzlich einen kleinen UI-Test für das kundenseitig sichtbare
Ergebnis beibehalten. Nenne Testdaten, Prüforakel und wie der Test seine Daten wieder
aufräumt.

Wenn ein UI-Test instabil ist, untersuche seine Abhängigkeiten, bevor du die Zahl der
Wiederholungen erhöhst. Besprich Timing, gemeinsam genutzten Zustand und die Zuverlässigkeit
der Selektoren. Erkläre, was in einen Test auf niedrigerer Ebene gehört und was weiterhin
manuell untersucht werden sollte.

## Minuten 27–30: Belege auswerten und wiederholen

Bewerte die Übung anhand von fünf Fragen: Habe ich Unklarheiten geklärt? Habe ich Risiken
priorisiert? Waren meine erwarteten Ergebnisse beobachtbar? Habe ich mit Belegen untersucht?
Kann eine andere Person anhand meines Fehlerberichts handeln?

Bei Übungen auf Junior-Niveau konzentriere dich auf klare Fälle und reproduzierbare Berichte.
Auf mittlerem Niveau verknüpfst du Servicegrenzen, Testebenen und Untersuchungsschritte. Auf
Senior-Niveau begründest du Veröffentlichungsabwägungen und verbleibende Risiken sowie, wie
das Team das Ergebnis überwachen wird. Das sind Übungsziele, keine allgemeingültige
Einstellungsrubrik.

Wähle eine schwache Antwort aus und wiederhole sie mit einer konkreten Verbesserung. Ein
[Probeinterview](/blog/inside-an-ai-interview-simulator) ist am nützlichsten, wenn die
Auswertung deinen nächsten Versuch verändert.

Mentarikas QA-Interviewmodus befindet sich in einem kontrollierten Pilotprojekt; die
Verfügbarkeit wird in der App angezeigt. Der Pilot konzentriert sich auf Interviews und
Berichte. Du kannst diesen Plan unabhängig davon verwenden oder
[die verfügbaren Übungsmodi ansehen](/#waitlist).

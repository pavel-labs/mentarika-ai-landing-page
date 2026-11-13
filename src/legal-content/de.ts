import { LEGAL_CONTACT, type LegalContent } from './shared';

// Translation of en.ts, section for section. The English text prevails where they differ.
export const de: LegalContent = {
  privacy: [
    {
      heading: '1. Geltungsbereich',
      body: [
        'Diese Erklärung beschreibt, welche Daten Mentarika („wir“) erhebt, wenn du die Mentarika-Web-App und diese Website nutzt, und wie sie verwendet werden. Mentarika ist ein Produkt zum Üben von Vorstellungsgesprächen mit KI für Softwareentwickler:innen.',
        `Mentarika ist ein privates, nicht kommerzielles Projekt: Es ist kostenlos und nimmt keine Zahlungen entgegen. Betreiber und Verantwortlicher für die in dieser Erklärung beschriebenen personenbezogenen Daten ist Pavel Piatrovich, eine in Polen ansässige Privatperson. Kontakt: ${LEGAL_CONTACT}.`,
      ],
    },
    {
      heading: '2. Welche Daten wir erheben',
      body: [
        'Konto: deine E-Mail-Adresse und Anmeldekennungen, über unseren Authentifizierungsanbieter.',
        'Interviewinhalte: die Transkripte, der Code und die Antworten, die du in einer Sitzung erzeugst, sowie die daraus erstellten Bewertungen und Berichte.',
        'Code: Code, den du in einer Programmieraufgabe ausführst oder einreichst, wird an einen Anbieter für Codeausführung gesendet, der ihn in einer isolierten Sandbox ausführt. Er wird ohne deinen Namen, deine E-Mail-Adresse oder deine Konto-ID gesendet.',
        'Sprache: Wenn du laut antwortest, wird die Aufnahme deiner Antwort an unseren KI-Anbieter gesendet, um sie für deine Sitzung zu transkribieren; die Aufnahme speichern wir nicht. Wenn der Interviewer seine Antworten vorliest, wird deren Text an einen Anbieter für Sprachsynthese gesendet.',
        'Browser: ein Push-Abonnement (wenn du Benachrichtigungen aktivierst), damit wir dir mitteilen können, dass ein Bericht fertig ist.',
        'Website-Einstellungen und Analyse: Die Website merkt sich deine Sprache und deine Analyse-Entscheidung im lokalen Speicher dieses Browsers, nicht in Cookies. Die Analyse ist ausgeschaltet, bis du zustimmst. Nach der Zustimmung erfasst die Website Seitenaufrufe, ausgewählte Linkklicks, Produktaktivität und geöffnete Artikel ohne Konto-ID, und ein Analyseanbieter kann technische Anfragedaten wie deine IP-Adresse und Seiteninformationen erhalten. Du kannst die Zustimmung in den Datenschutzeinstellungen ablehnen oder widerrufen.',
        'Diagnose: Fehlerberichte und begrenzte Diagnosedaten der Sitzung, um Fehler zu finden und zu beheben – über einen Anbieter für Fehlerüberwachung, aus der Web-App und von unseren Servern. Diese Berichte können deine Nutzer-ID enthalten.',
        'E-Mail: Wenn dich eine Organisation per E-Mail einlädt, werden deine Adresse und die Einladung über unseren E-Mail-Versandanbieter gesendet.',
      ],
    },
    {
      heading: '3. Wie wir die Daten verwenden',
      body: [
        'Um Interviews und Programmieraufgaben durchzuführen, deine Bewertungen und Berichte zu erstellen, deinen Fortschritt zu verfolgen, die von dir gewünschten Benachrichtigungen zu senden und den Dienst sicher und funktionsfähig zu halten.',
        'Nach der DSGVO stützen wir uns auf folgende Rechtsgrundlagen: die Erfüllung unseres Vertrags mit dir (Konto, Interviews, Sprache, Code, Berichte und Fortschritt), unser berechtigtes Interesse an einem sicheren und funktionsfähigen Dienst (Diagnose und Missbrauchsprävention) und deine Einwilligung (Push-Benachrichtigungen und optionale Website-Analyse). Du kannst eine Einwilligung jederzeit widerrufen.',
      ],
    },
    {
      heading: '4. Verarbeitung durch KI',
      body: [
        'Um die Antworten des Interviewers und deine Bewertung zu erzeugen, werden deine Sitzungsinhalte an einen externen Anbieter von KI-Modellen gesendet, der als unser Auftragsverarbeiter handelt. Sie dienen dazu, deine Ergebnisse zu erzeugen, nicht dazu, seine Modelle zu trainieren. Bewertungen und Berichte werden automatisch für deine eigene Übung erstellt und haben keine rechtliche Wirkung für dich.',
        'Der Text deiner Antworten wird ohne deinen Namen, deine E-Mail-Adresse oder deine Konto-ID an den Anbieter der KI-Modelle gesendet. Nach dessen Bedingungen werden über die API gesendete Daten nicht zum Training von Modellen verwendet und können bis zu 30 Tage gespeichert werden, um Missbrauch zu erkennen. Zur Transkription gesendete Audioaufnahmen unterliegen denselben Bedingungen und werden vom Anbieter nach der Transkription nicht gespeichert.',
        'Bevor deine Antworten an ein KI-Modell gesendet werden, entfernen wir E-Mail-Adressen, Telefonnummern und Links. Wir können nicht alles erkennen; nenne daher bitte keine Namen von Personen, Arbeitgebern oder Kunden und nichts anderes, das dich identifiziert. Code, den du in einer Programmieraufgabe einreichst, wird unverändert gesendet.',
      ],
    },
    {
      heading: '5. Weitergabe und Ort der Verarbeitung',
      body: [
        'Wir geben Daten nur an Auftragsverarbeiter weiter, die den Dienst betreiben: Anbieter für Hosting, Authentifizierung, KI-Modelle, Spracherkennung und Sprachsynthese, Codeausführung, optionale Website-Analyse (nur nach Einwilligung), Fehlerüberwachung, E-Mail-Versand sowie Sicherheit und Inhaltsauslieferung. Der Code-Editor in den Aufgaben lädt seine Dateien aus einem öffentlichen Content Delivery Network, das dabei deine IP-Adresse erhält. Wir verkaufen deine Daten nicht.',
        'Unsere Server, unsere Datenbank und unsere Fehlerberichte werden in der Europäischen Union gehostet, und der Anbieter für Codeausführung führt deinen Code auf Servern in der Europäischen Union aus. Mehrere unserer Anbieter sind Unternehmen mit Sitz in den Vereinigten Staaten: Hosting, Authentifizierung, KI-Modelle, Fehlerüberwachung, Codeausführung, E-Mail-Versand sowie Sicherheit und Inhaltsauslieferung. Soweit deine Daten sie außerhalb des Europäischen Wirtschaftsraums erreichen, stützt sich die Übermittlung auf die EU-Standardvertragsklauseln oder das EU-US-Datenschutzrahmenabkommen (Data Privacy Framework), wie in den Auftragsverarbeitungsbedingungen des jeweiligen Anbieters festgelegt.',
        'Organisationen: Wenn du einer Organisation in Mentarika beitrittst (zum Beispiel über deinen Arbeitgeber), sieht sie nur dein Beitrittsdatum, die Zahl deiner Interviews in den letzten 30 Tagen und deine letzte Aktivität. Team-Durchschnittswerte werden nur angezeigt, wenn mindestens fünf Personen dazu beigetragen haben. Niemand in der Organisation kann deine Transkripte oder einzelnen Berichte lesen.',
        'Aufgaben für Kandidat:innen: Wenn du ein Interview oder eine Aufgabe annimmst, die ein Unternehmen gesendet hat, siehst du vor dem Start, was geteilt wird. Das Unternehmen sieht den resultierenden Bericht oder die Testergebnisse und Bewertungen – nicht dein Transkript und nicht den eingereichten Code.',
      ],
    },
    {
      heading: '6. Speicherung und Löschung',
      body: [
        'Wir speichern deine Konto- und Interviewdaten, solange dein Konto besteht. Du kannst dein Konto jederzeit in der App löschen (Profil → Konto löschen); dadurch werden deine Daten und deine Identität dauerhaft aus unseren Systemen entfernt. Detaillierte Protokolle von KI-Anfragen werden nach 90 Tagen gelöscht, der Zustellverlauf von Benachrichtigungen nach 90 Tagen.',
        'Zähler für Ereignisse auf der Website werden pro Tag ohne jede Kennung gespeichert und nach 31 Tagen gelöscht.',
        'Unsere Anbieter speichern einige Daten für eigene feste Zeiträume. Der Anbieter der KI-Modelle kann Anfragen bis zu 30 Tage speichern, um Missbrauch zu erkennen. Der Anbieter für Codeausführung speichert Code, Eingabe und Ausgabe jeder Ausführung bis zu 365 Tage, ohne Verknüpfung mit deinem Konto. Die Anbieter für Hosting und Fehlerüberwachung speichern Serverprotokolle und Fehlerberichte nicht länger als 90 Tage. Wenn du der Website-Analyse zustimmst, speichert der Analyseanbieter seine eigenen Daten nach seinen Bedingungen.',
      ],
    },
    {
      heading: '7. Deine Rechte',
      body: [
        'Du hast das Recht auf Auskunft, Berichtigung, Datenübertragbarkeit und Löschung deiner Daten sowie das Recht, bestimmten Verarbeitungen zu widersprechen oder sie einzuschränken. Kontaktiere uns, um diese Rechte auszuüben; wir antworten innerhalb eines Monats. Du kannst dich auch beim Präsidenten des polnischen Amts für den Schutz personenbezogener Daten (uodo.gov.pl) oder bei der Datenschutzbehörde des EU-Landes beschweren, in dem du lebst.',
      ],
    },
    {
      heading: '8. Kinder',
      body: [
        'Mentarika richtet sich nicht an Kinder und ist für Nutzer:innen ab 16 Jahren gedacht.',
      ],
    },
    {
      heading: '9. Änderungen und Kontakt',
      body: [
        `Wir aktualisieren diese Erklärung, wenn sich das Produkt weiterentwickelt, und geben das Datum unten an. Fragen oder Datenschutzanfragen: ${LEGAL_CONTACT}.`,
      ],
    },
  ],
  terms: [
    {
      heading: '1. Zustimmung',
      body: [
        'Mentarika ist ein privates, nicht kommerzielles Projekt, betrieben von Pavel Piatrovich, einer Privatperson („wir“). Mit der Nutzung von Mentarika stimmst du diesen Bedingungen zu. Wenn du nicht zustimmst, nutze den Dienst nicht.',
      ],
    },
    {
      heading: '2. Der Dienst',
      body: [
        'Mentarika bietet das Üben technischer Vorstellungsgespräche mit KI, Programmieraufgaben, Feedback-Berichte und Fortschrittsverfolgung. Es ist ein Übungswerkzeug. Der Dienst wird aktiv weiterentwickelt; Funktionen können sich ändern oder nicht verfügbar sein.',
      ],
    },
    {
      heading: '3. Konten',
      body: [
        'Du bist für dein Konto und für die Richtigkeit deiner Angaben verantwortlich. Halte deine Zugangsdaten sicher.',
      ],
    },
    {
      heading: '4. Preis',
      body: [
        'Mentarika ist derzeit kostenlos, im Rahmen der in der App angezeigten Nutzungslimits. Wir erheben keine Zahlungsdaten. Falls wir kostenpflichtige Tarife einführen, aktualisieren wir zuerst diese Bedingungen.',
      ],
    },
    {
      heading: '5. Zulässige Nutzung',
      body: [
        'Missbrauche den Dienst nicht, betreibe kein Reverse Engineering, lies keine Daten massenhaft aus, überlaste ihn nicht und nutze ihn nicht rechtswidrig; reiche außerdem keine Inhalte ein, zu deren Einreichung du nicht berechtigt bist.',
      ],
    },
    {
      heading: '6. KI-Ergebnisse',
      body: [
        'Interviewfragen, Feedback und Bewertungen werden von KI heuristisch zu Übungszwecken erzeugt. Sie sind keine professionelle Beratung und garantieren kein bestimmtes Ergebnis eines Vorstellungsgesprächs.',
      ],
    },
    {
      heading: '7. Deine Inhalte',
      body: [
        'Die Rechte an den von dir eingereichten Inhalten bleiben bei dir. Du räumst uns die Lizenz ein, die nötig ist, um den Dienst für dich zu betreiben (z. B. um deine Berichte zu erstellen und zu speichern).',
      ],
    },
    {
      heading: '8. Gewährleistung und Haftung',
      body: [
        'Der Dienst wird „wie besehen“ ohne Gewährleistung bereitgestellt. Soweit gesetzlich zulässig, ist unsere Haftung beschränkt; für mittelbare Schäden und Folgeschäden haften wir nicht.',
      ],
    },
    {
      heading: '9. Beendigung',
      body: [
        'Du kannst die Nutzung jederzeit beenden und dein Konto löschen. Wir können Konten sperren, die gegen diese Bedingungen verstoßen.',
      ],
    },
    {
      heading: '10. Anwendbares Recht, Änderungen und Kontakt',
      body: [
        `Diese Bedingungen unterliegen polnischem Recht. Diese Wahl entzieht dir keinen zwingenden Schutz, den dir das Verbraucherrecht des Landes gewährt, in dem du lebst. Für Streitigkeiten sind die Gerichte in Polen zuständig, sofern zwingendes Recht dir nicht erlaubt, in deinem Heimatland zu klagen. Wir können diese Bedingungen aktualisieren und geben das Datum unten an. Fragen: ${LEGAL_CONTACT}.`,
      ],
    },
  ],
};

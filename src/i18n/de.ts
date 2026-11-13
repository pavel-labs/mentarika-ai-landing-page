import type { Dict } from './types';

export const de: Dict = {
  langName: 'Deutsch',
  ogLocale: 'de_DE',
  a11ySkip: 'Zum Inhalt springen',
  a11yMenu: 'Menü',
  analyticsConsent: {
    heading: 'Deine Datenschutzeinstellungen',
    description:
      'Diese Auswahl betrifft nur optionale Analysen. Sie bleiben deaktiviert, bis du zustimmst. Deine Auswahl wird im lokalen Speicher dieses Browsers (nicht als Cookie) gespeichert und kann später in den Datenschutzeinstellungen geändert werden.',
    accept: 'Analysen erlauben',
    reject: 'Analysen ablehnen',
    settings: 'Datenschutzeinstellungen',
    privacy: 'Datenschutzerklärung',
  },

  meta: {
    title: "Mentarika – KI-Praxis für Entwicklung, QA und Unternehmensberatung",
    description: "Üben Sie technische Interviews, QA-Szenarien und Finanz- und Unternehmensberatung mit KI-Feedback. Spezialisierte Modi sind je nach Pilottest verfügbar.",
    tagline: 'Übe das Interview, nicht nur die Fragen.',
    launchLabel: 'Im Web verfügbar · Kostenlos',
  },

  nav: [
    { label: 'Interviews', href: '#interview' },
    { label: 'Assessments', href: '#assessments' },
    { label: 'Preise', href: '#pricing' },
    { label: 'Blog', href: '/blog' },
  ],

  hero: {
    eyebrow: 'Interview-Training für Entwickler und Teams',
    titleLead: 'Übe das technische Interview,',
    titleAccent: 'nicht nur die Fragen.',
    lede: 'Mentarika führt ein strukturiertes Interview für deine Rolle und deinen Stack, hakt bei dem nach, was du wirklich gesagt hast, prüft deinen Code mit versteckten Tests und gibt dir einen Bericht, der auf deine Schwächen zeigt – damit die nächste Session genau dort ansetzt.',
    availability: 'Im Web verfügbar · Kostenlos · iOS und Android folgen',
    teamsLink: 'Für Engineering-Teams',
  },

  proof: [
    'Frontend · Backend · Algorithmen',
    '19 Technologien',
    'Junior bis Senior',
    '15, 30 oder 60 Minuten',
    'Tippen oder sprechen',
    '5 Interview-Sprachen',
  ],

  why: {
    eyebrow: 'Warum hier üben',
    heading: 'Antworten lesen ist nicht dasselbe wie Antworten geben.',
    lede: 'Die meiste Vorbereitung endet mit einer Liste gelesener Fragen. Ein Interview verlangt, dass du erklärst, bohrt beim schwachen Punkt nach und geht weiter, ob du bereit bist oder nicht. Genau das kannst du mit Mentarika üben.',
    them: {
      label: 'Fragenlisten und ein allgemeiner Chatbot',
      points: [
        'Du wählst die Fragen aus – also die leichten',
        'Niemand fragt „warum?“ nach einer vagen Antwort',
        'Code wird nie ausgeführt, „sieht richtig aus“ zählt als richtig',
        'Du bewertest dich selbst, und jede Session beginnt bei null',
      ],
    },
    us: {
      label: 'Eine Mentarika-Session',
      points: [
        'Ein getimtes Interview für Rolle, Level und Stack, mit fester Struktur',
        'Nachfragen, die auf deiner eigenen Antwort aufbauen',
        'Coding-Assessments, bewertet mit Tests, die du nicht siehst',
        'Ein Bericht mit Belegen – deine Schwächen prägen die nächste Session',
      ],
    },
  },

  interview: {
    eyebrow: 'KI-Interviews',
    heading: 'Ein strukturiertes Interview, das auf deine Antworten reagiert.',
    lede: 'Jedes Interview läuft durch Warm-up, technische Fragen, einen Deep Dive und einen Abschluss. Der Interviewer hakt bei deinen Aussagen nach, macht die Frage enger, wenn du hängst, und geht tiefer, wenn eine Antwort stark ist.',
    steps: [
      {
        title: 'Wähle deine Rolle',
        body: 'Frontend, Backend oder Algorithmen, auf Junior-, Middle- oder Senior-Level.',
      },
      {
        title: 'Wähle deinen Stack',
        body: 'Bis zu sechs Technologien – React, TypeScript, Node.js, System Design und mehr.',
      },
      {
        title: 'Stell das Interview ein',
        body: '15, 30 oder 60 Minuten, einer von drei Interviewern, strenges oder unterstützendes Feedback, in einer von fünf Sprachen.',
      },
      {
        title: 'Antworte laut oder schriftlich',
        body: 'Tippe, oder sprich und lass deine Antwort transkribieren. Bis zu drei Hinweise, wenn du feststeckst.',
      },
      {
        title: 'Hol dir deinen Bericht',
        body: 'Bewertungen, Belege und ein Lernpfad, sobald das Interview endet.',
      },
    ],
    honesty:
      'Es ist ein KI-Interviewer, kein Mensch. Er ist dafür gebaut, ein konsistentes, strukturiertes technisches Interview zu führen – und deine letzten Sessions bestimmen, was er als Nächstes fragt.',
    mock: {
      label: 'Interview · Frontend · Senior · 30 Min.',
      phases: ['Warm-up', 'Technisch', 'Deep Dive', 'Abschluss'],
      interviewer: 'Interviewer',
      you: 'Du',
      q: 'Deine Liste rendert bei jedem Tastendruck im Suchfeld neu. Wie findest du heraus, warum?',
      a: 'Ich öffne den React Profiler, zeichne einen Tastendruck auf und schaue, welche Komponenten warum gerendert haben…',
      followUp:
        'Angenommen, der Profiler zeigt, dass die ganze Liste neu rendert. Was sind die zwei wahrscheinlichsten Ursachen?',
      hints: 'Noch 2 von 3 Hinweisen',
      voice: 'Tippen zum Antworten',
    },
  },

  assessment: {
    eyebrow: 'Coding-Assessments',
    heading: 'Schreib den Code. Versteckte Tests bewerten ihn.',
    lede: 'Coding hat bei Mentarika seinen eigenen Platz: ein separates, getimtes Assessment mit Editor, ausführbaren Beispielen und echter Abgabe. Das Interview bleibt ein Gespräch; das Assessment prüft den Code.',
    steps: [
      {
        title: 'Lies die Aufgabe',
        body: 'Eine bis fünf Aufgaben mit Beispielen. Ein Timer, falls das Assessment einen hat, wird vom Server durchgesetzt.',
      },
      {
        title: 'Schreib deine Lösung',
        body: 'JavaScript, TypeScript, Python, Java, Go oder C++. Die Sprache kannst du mittendrin wechseln.',
      },
      {
        title: 'Führ die Beispiele aus',
        body: 'Starte die sichtbaren Beispiele oder eigene Eingaben so oft du willst, bevor du abgibst.',
      },
      {
        title: 'Gib ab',
        body: 'Dein Code wird gegen versteckte Tests geprüft, die den Server nie verlassen.',
      },
      {
        title: 'Lies das Review',
        body: 'Ein KI-Review zu Codequalität, Effizienz und Lesbarkeit, pro Aufgabe, mit Stärken und Schwächen.',
      },
    ],
    separate:
      'Warum getrennt? Ein Design erklären und funktionierenden Code schreiben sind verschiedene Fähigkeiten. Mischt man beides in einem Chat, sieht man nicht, welche davon Arbeit braucht.',
    mock: {
      label: 'Coding-Assessment · 2 Aufgaben',
      timer: 'noch 38:12',
      problem: 'Überlappende Intervalle zusammenführen',
      run: 'Beispiele ausführen',
      submit: 'Abgeben',
      examples: 'Beispiele',
      passed: '3 / 3 bestanden',
      review: 'Review',
      reviewLines: [
        'Korrekt bei Randfällen: leere Eingabe, sich berührende Intervalle',
        'O(n log n) – das Sortieren dominiert',
        'Den Akkumulator sprechender benennen',
      ],
    },
  },

  report: {
    eyebrow: 'Feedback',
    heading: 'Wisse genau, was du als Nächstes verbessern musst.',
    lede: 'Am Ende des Interviews steht ein Bericht, kein Schulterklopfen. Jede Bewertung hängt an etwas, das du tatsächlich gesagt hast, und die Lücken werden zu deinem nächsten Übungsplan.',
    points: [
      {
        title: 'Nachvollziehbare Bewertungen',
        body: 'Gesamt, dazu technische Tiefe, Kommunikation, Randfälle und Problemlösung. Die Werte kommen aus Belegen in deinen Antworten, nicht aus einer Zahl, die sich das Modell ausdenkt.',
      },
      {
        title: 'Ergebnisse pro Kompetenz',
        body: 'Jede abgefragte Fähigkeit wird als stark, solide, in Entwicklung oder ausbaufähig eingestuft – oder als „nicht bewertet“, wenn die Belege nicht reichen.',
      },
      {
        title: 'Stärken und Schwächen',
        body: 'Was gut lief, was besser werden muss, und Zitate aus deinen eigenen Antworten, die zeigen, warum.',
      },
      {
        title: 'Ein Lernpfad',
        body: 'Priorisierte Themen mit Zeitschätzung. Dein nächstes Interview greift deine Schwächen auf.',
      },
    ],
    mock: {
      label: 'Dein Bericht',
      overall: 'Gesamt',
      categories: ['Technisch', 'Kommunikation', 'Randfälle', 'Problemlösung'],
      competencyTitle: 'Nach Kompetenz',
      competencies: [
        { name: 'React-Rendering', band: 'Stark' },
        { name: 'State-Management', band: 'Solide' },
        { name: 'Web-Performance', band: 'In Entwicklung' },
      ],
      evidenceTitle: 'Belege aus deinen Antworten',
      evidence:
        '„Ich würde die Zeilen-Komponente memoizen“ – richtiger Fix, aber die Ursache (ein neuer Callback bei jedem Render) wurde nie genannt.',
      nextTitle: 'Nächster Fokus',
      next: 'Web-Performance · ~3 Std.',
    },
  },

  progress: {
    eyebrow: 'Dranbleiben',
    heading: 'Ein Grund, morgen wiederzukommen.',
    lede: 'Interview-Können verblasst ohne Übung. Tägliche Challenges geben dir jeden Tag eine kleine, konkrete Aufgabe auf Basis deiner eigenen Historie.',
    points: [
      {
        title: 'Tägliche Challenges',
        body: 'Bis zu drei pro Tag: ohne Hinweise fertig werden, deinen letzten Score schlagen, eine Schwäche wiederholen, eine Technologie üben.',
      },
      {
        title: 'Streaks und Level',
        body: 'XP bringen dich vom Intern bis zum CTO. Ein Streak-Freeze fängt den einen oder anderen verpassten Tag ab.',
      },
      {
        title: 'Achievements',
        body: 'Pfade für Beständigkeit, Verbesserung, Rollen und Technologien – verdient durch Üben, nicht durch das Öffnen der App.',
      },
      {
        title: 'Fortschritt über Zeit',
        body: 'Dein Score-Verlauf, wiederkehrende Schwächen und alle bisherigen Berichte an einem Ort.',
      },
    ],
    mock: {
      label: 'Challenge des Tages',
      challenges: [
        { title: 'Ein Interview abschließen', xp: '+30 XP', done: true },
        { title: 'Ohne Hinweise fertig werden', xp: '+50 XP', done: false },
        { title: 'Web-Performance wiederholen', xp: '+80 XP', done: false },
      ],
      streak: '12 Tage in Folge',
      level: 'Level · Mid',
    },
  },

  pricing: {
    eyebrow: 'Preise',
    heading: 'Kostenlos. Ohne Karte, ohne Testphase.',
    flag: 'Für die aktive Jobsuche',
    foot: 'Die Limits erneuern sich alle 30 Tage.',
    tiers: [
      {
        tier: 'Free',
        price: '0 $',
        cadence: 'für immer',
        blurb: 'Alles, was du zum regelmäßigen Üben brauchst.',
        features: [
          '5 Text-Interviews alle 30 Tage',
          '3 Voice-Interviews alle 30 Tage',
          'Vollständiger Bericht nach jedem Interview',
          'Alle Rollen, Level und Technologien',
          '3 Coding-Assessments alle 30 Tage',
          'Tägliche Challenges und Achievements',
        ],
        featured: false,
        cta: 'Kostenlos starten',
        href: '#waitlist',
      },
      {
        tier: 'Pro',
        price: 'Noch nicht festgelegt',
        cadence: '',
        blurb: 'Für die Wochen, in denen du wirklich interviewst.',
        features: [
          'Alles aus Free',
          'Unbegrenzte Text-Interviews',
          'Unbegrenzte Voice-Interviews',
          'Realistischer Modus: zeigt, wo du hängen geblieben bist und was die Session ohne fremde Hilfe wert gewesen wäre',
        ],
        featured: true,
        cta: 'Zum Start',
        href: '#waitlist',
      },
      {
        tier: 'Enterprise',
        price: 'Individuell',
        cadence: 'pro Platz',
        blurb: 'Für Engineering-Teams und Recruiting.',
        features: [
          'Pro für jeden Platz',
          'Firmen-Interviews auf eurem Stack',
          'Kandidaten-Einladungen mit Einwilligung',
          'Datenschutzfreundlicher Team-Bericht',
          '14 Tage Testphase mit 5 Plätzen',
        ],
        featured: false,
        cta: 'Kontakt aufnehmen',
        href: '/enterprise#contact',
      },
    ],
  },

  teamsBand: {
    eyebrow: 'Mentarika für Teams',
    heading: 'Einheitliches Interview-Training und Screening für Engineering-Teams.',
    lede: 'Gib Entwicklern strukturierte Übung auf eurem Stack und Kandidaten jedes Mal dasselbe Interview – ohne Übung in Überwachung zu verwandeln.',
    points: [
      {
        title: 'Firmen-Interviews',
        body: 'Rolle, Level, Stack, Dauer und Startfragen einmal festlegen. Alle bekommen dasselbe Interview.',
      },
      {
        title: 'Kandidaten-Einladungen',
        body: 'Schick einen Einmal-Link. Der Kandidat willigt zuerst ein; du siehst den Bericht, nicht das Transkript.',
      },
      {
        title: 'Team-Bericht',
        body: 'Aktivität pro Person, Skill-Durchschnitte nur für Gruppen ab fünf Personen. Niemand liest das Transkript eines Mitarbeiters.',
      },
    ],
    cta: 'Mentarika für Teams ansehen',
  },

  faq: {
    eyebrow: 'FAQ',
    heading: 'Klare Antworten.',
    items: [
      {
        q: 'Was ist anders, als ChatGPT nach Interviewfragen zu fragen?',
        a: 'Ein Chatbot beantwortet, was du fragst. Mentarika führt das Interview: mit fester Struktur und Zeitlimit, Nachfragen bei schwachen Antworten, Bewertung aus Belegen nach einem Raster, Code-Prüfung mit versteckten Tests – und es erinnert sich an deine letzten Sessions.',
      },
      {
        q: 'Ist der KI-Interviewer wie ein echter Mensch?',
        a: 'Nein, und wir tun auch nicht so. Er ist dafür gebaut, ein konsistentes technisches Interview zu führen – mit Nachfragen, Uhr und Struktur. Es ist Training für das echte Interview, kein Ersatz dafür.',
      },
      {
        q: 'Kann ich Code schreiben?',
        a: 'Ja, in einem Coding-Assessment: Editor, ausführbare Beispiele, ein Timer, falls vorgesehen, und versteckte Tests bei der Abgabe. Das Interview selbst ist ein gesprochenes oder getipptes Gespräch.',
      },
      {
        q: 'Kann ich laut antworten?',
        a: 'Ja. Tippe aufs Mikrofon, sprich, und deine Antwort wird transkribiert. Du hast alle 30 Tage 3 Voice-Interviews.',
      },
      {
        q: 'Wann kann ich es nutzen?',
        a: 'Jetzt. Mentarika ist im Web verfügbar und kostenlos. Apps für iOS und Android folgen später.',
      },
    ],
  },

  cta: {
    eyebrow: 'Im Web verfügbar',
    titleLead: 'Dein nächstes Interview kommt.',
    titleAccent: 'Übe, bevor es so weit ist.',
    lede: 'Mentarika ist im Web kostenlos. Registriere dich und mach noch heute dein erstes Interview.',
  },

  enterprise: {
    metaTitle: 'Mentarika für Teams – technisches Interview-Training und Kandidaten-Screening',
    metaDescription:
      'Strukturiertes KI-Interview-Training und Coding-Assessments für Engineering-Teams: Firmen-Interviews auf eurem Stack, Kandidaten-Einladungen mit Einwilligung und ein Team-Bericht, der nie einzelne Transkripte offenlegt.',
    hero: {
      eyebrow: 'Mentarika für Teams',
      title: 'Strukturierte technische Interviews für dein ganzes Team.',
      lede: 'Halte Entwickler in Form und prüfe Kandidaten jedes Mal auf dieselbe Weise. Mentarika gibt deiner Organisation firmenspezifische Interviews, Coding-Assessments und Reporting – mit klaren Grenzen dafür, was Manager sehen können.',
      primary: 'Kontakt aufnehmen',
      secondary: 'Lesen: wie Teams KI-Interview-Training nutzen',
    },
    useCases: {
      eyebrow: 'Zwei Einsatzzwecke',
      heading: 'Entwickler weiterbringen. Kandidaten einheitlich prüfen.',
      items: [
        {
          tag: 'Weiterbildung',
          title: 'Strukturierte Übung für deine Entwickler',
          body: 'Interview-Können verblasst zwischen Jobwechseln und Beförderungen. Plätze geben jedem Entwickler Übung auf Pro-Niveau auf dem Stack, den euer Team wirklich nutzt.',
          points: [
            'Übung auf Pro-Niveau für jeden Platz',
            'Firmen-Interviews zu euren Technologien und eurem Level',
            'Ein Team-Bericht aus Aggregaten, nicht aus Transkripten',
          ],
        },
        {
          tag: 'Recruiting',
          title: 'Dasselbe erste Interview für jeden Kandidaten',
          body: 'Ein Firmen-Interview legt Rolle, Level, Stack, Dauer, Sprache und eure Startfragen fest – so werden Kandidaten auf gleicher Grundlage verglichen.',
          points: [
            'Einmal-Links, die sich nur für die eingeladene E-Mail öffnen',
            'Der Kandidat sieht einen klaren Hinweis und willigt zuerst ein',
            'Du bekommst Bericht und Testergebnisse – nicht Transkript oder Code',
          ],
        },
      ],
    },
    steps: {
      eyebrow: 'So funktioniert es',
      heading: 'Vom ersten Gespräch zum ersten Interview.',
      items: [
        {
          title: 'Sprich mit uns',
          body: 'Erzähl uns von deinem Team und ob ihr rekrutiert, weiterbildet oder beides.',
        },
        {
          title: 'Testphase starten',
          body: 'Wir aktivieren eure Organisation: 14 Tage, 5 Plätze, 10 Kandidaten-Einladungen.',
        },
        {
          title: 'Team einladen',
          body: 'Teile einen Einladungslink. Owner und Admins verwalten Plätze und Rollen.',
        },
        {
          title: 'Firmen-Interviews bauen',
          body: 'Rolle, Level und Stack wählen, bis zu 30 Startfragen mit den erwarteten Konzepten hinzufügen.',
        },
        {
          title: 'Üben und einladen',
          body: 'Entwickler üben; Recruiter verschicken Kandidaten-Einladungen und lesen die Ergebnisse.',
        },
      ],
    },
    privacy: {
      eyebrow: 'Datenschutz by Design',
      heading: 'Üben funktioniert nur, wenn niemand zuschaut.',
      lede: 'Entwickler üben ehrlich, wenn Fehler privat bleiben. Deshalb sind die Grenzen ins Produkt eingebaut, nicht einer Richtlinie überlassen.',
      sees: {
        label: 'Was die Organisation sieht',
        points: [
          'Beitrittsdatum, Interviews der letzten 30 Tage und letzte Aktivität jedes Mitglieds',
          'Team-Skill-Durchschnitte – nur wenn mindestens fünf Personen beigetragen haben',
          'Bei Kandidaten mit Einwilligung: Bericht und Assessment-Ergebnisse',
        ],
      },
      never: {
        label: 'Was keine Rolle sehen kann',
        points: [
          'Das Interview-Transkript eines Mitarbeiters',
          'Den persönlichen Bericht oder die Scores eines Mitarbeiters',
          'Das Transkript oder den eingereichten Code eines Kandidaten',
        ],
      },
    },
    roles: {
      eyebrow: 'Rollen',
      heading: 'Vier Rollen, jede mit klarer Aufgabe.',
      items: [
        { role: 'Owner', body: 'Alles, einschließlich der Verwaltung anderer Owner.' },
        {
          role: 'Admin',
          body: 'Mitglieder und Einladungen, Firmen-Interviews, Kandidaten-Einladungen und Team-Bericht.',
        },
        {
          role: 'Recruiter',
          body: 'Nutzt Firmen-Interviews, um Kandidaten-Einladungen zu verschicken und zu verwalten.',
        },
        { role: 'Member', body: 'Übt, auch mit euren Firmen-Interviews.' },
      ],
    },
    notYet: {
      heading: 'Noch nicht verfügbar',
      lede: 'Lieber sagen wir es jetzt als im Einkaufsgespräch.',
      items: [
        'SSO und SCIM-Provisioning',
        'ATS-Integrationen',
        'Eigenes Branding',
        'Eigene Coding-Aufgaben des Unternehmens',
        'Self-Service-Checkout – Verträge schließt ihr mit uns',
      ],
    },
    article: {
      eyebrow: 'Weiterlesen',
      title: 'KI-Interview-Training für Engineering-Teams: was es kann und was nicht (Englisch)',
      cta: 'Artikel lesen',
    },
    form: {
      eyebrow: 'Kontakt',
      heading: 'Erzähl uns von deinem Team.',
      sub: 'Wir antworten per E-Mail, meist innerhalb von zwei Werktagen.',
      name: 'Dein Name',
      email: 'Geschäftliche E-Mail',
      company: 'Unternehmen',
      teamSize: 'Teamgröße',
      useCase: 'Was braucht ihr?',
      useCases: {
        upskilling: 'Übung für unsere Entwickler',
        hiring: 'Kandidaten-Screening',
        both: 'Beides',
      },
      message: 'Noch etwas?',
      messageHint: 'Stack, Zeitplan, Anzahl Kandidaten – optional.',
      submit: 'Senden',
      sending: 'Wird gesendet…',
      success: 'Danke – wir haben deine Nachricht und antworten per E-Mail.',
      invalid: 'Bitte prüf die Felder oben und versuch es erneut.',
      rateLimited: 'Zu viele Anfragen aus diesem Netzwerk. Versuch es in einer Stunde erneut.',
      error: 'Bei uns ist etwas schiefgelaufen. Versuch es gleich noch einmal.',
      offNote: 'Das Kontaktformular öffnet in Kürze.',
      privacyNote: 'Wir nutzen diese Angaben nur, um dir zu antworten.',
    },
  },

  contentHub: {
    compare: {
      eyebrow: 'Vergleichen',
      title: 'Wähle die Vorbereitung, die du wirklich brauchst.',
      lede: 'Vergleichsseiten für Menschen, die zwischen Solo-Drills, Peer-Mocks, Sprachpraxis, KI-Tools und Coaching abwägen.',
      primary: 'Vergleichsseiten ansehen',
      secondary: 'Alle Ressourcen öffnen',
    },
    resources: {
      eyebrow: 'Ressourcen',
      title: 'Strukturierte Lesepfade für technische Interview-Vorbereitung.',
      lede: 'Gebündelte Einstiegspunkte für Menschen, die Tools vergleichen, System Design üben, Behavioral-Antworten schärfen, sich auf Senior- und Staff-Runden vorbereiten – und für Teams.',
    },
    blog: {
      eyebrow: 'Blog',
      title: 'Interview-Vorbereitung: Leitfäden, Vergleiche und Produktneuigkeiten.',
      lede: 'Praktische Leitfäden zur Vorbereitung auf technische Interviews und dazu, wie Teams gemeinsam üben können.',
      primary: 'Zum Blog',
      pathsEyebrow: 'Lesepfade',
      pathsTitle: 'Gruppiert danach, worauf du dich vorbereitest.',
      relatedReading: 'Weiterführende Artikel',
      clusters: {
        compare: {
          title: 'Vergleichsseiten',
          lede: 'Für alle, die Methoden, Formate und Tools zur Interview-Vorbereitung vergleichen.',
          cta: {
            eyebrow: 'So passt Mentarika dazu',
            title: 'Vom Vergleich der Vorbereitungstools zum Üben unter Druck.',
            body: 'Wenn dir realistische Interviewpraxis statt weiterer Inhalte fehlt, wird Mentarika genau für diesen Schritt entwickelt.',
            primaryLabel: 'Infos zum Start',
            secondaryLabel: 'Vergleiche ansehen',
          },
        },
        'system-design': {
          title: 'System Design und technische Runden',
          lede: 'Für Kandidat:innen, die gezieltes technisches Üben statt einer zufälligen Menge an Fragen brauchen.',
          cta: {
            eyebrow: 'Das Gespräch üben',
            title: 'Mach aus der Vorbereitung allein ein technisches Gespräch, das du sicher führen kannst.',
            body: 'Mentarika richtet sich an Kandidat:innen, die realistische Rückfragen brauchen – nicht nur weitere Aufgaben oder Musterlösungen.',
            primaryLabel: 'Zugang zum Start',
            secondaryLabel: 'Alle Ressourcen ansehen',
          },
        },
        behavioral: {
          title: 'Verhaltensinterviews und Positionierung',
          lede: 'Für Kandidat:innen, die klarer kommunizieren und nicht nur bessere Lösungen präsentieren möchten.',
          cta: {
            eyebrow: 'Klarer kommunizieren',
            title: 'Übe Antworten, bis sie klar und nicht auswendig gelernt klingen.',
            body: 'Eine gute Übung prüft Aufbau, Eigenverantwortung und Antworten auf Rückfragen, bevor das echte Interview beginnt.',
            primaryLabel: 'Infos zum Start',
            secondaryLabel: 'Ressourcen ansehen',
          },
        },
        senior: {
          title: 'Vorbereitung auf Senior- und Staff-Rollen',
          lede: 'Für Engineers, die sich auf Interviews vorbereiten, in denen Urteilsvermögen und Wirkung zählen.',
          cta: {
            eyebrow: 'Für Interviews mit hohen Anforderungen',
            title: 'Bereite dich auf Interviews mit schwierigen Abwägungen vor, nicht nur auf härtere Coding-Aufgaben.',
            body: 'Mit Mentarika lassen sich Abwägungen, Kommunikation und Ruhe schon beim Üben sichtbar machen – besonders wichtig für Senior- und Staff-Rollen.',
            primaryLabel: 'Zugang zum Start',
            secondaryLabel: 'Weitere Strategien lesen',
          },
        },
        teams: {
          title: 'Für Engineering-Teams',
          lede: 'Für Engineering-Leitungen und Recruiting-Teams, die Interviewtraining oder erste Auswahlrunden im Team organisieren.',
          cta: {
            eyebrow: 'Mentarika für Teams',
            title: 'Einheitliches Interviewtraining und Vorauswahl – ohne Überwachung.',
            body: 'Interviews mit eurem Tech-Stack, Aufgaben für Kandidat:innen mit deren Zustimmung und Teamberichte auf Basis aggregierter Daten – niemals einzelne Transkripte.',
            primaryLabel: 'Kontakt aufnehmen',
            secondaryLabel: 'Mentarika für Teams ansehen',
          },
        },
      },
    },
  },

  badges: {
    ariaGroup: 'Apps – bald verfügbar',
    comingSoon: 'Bald verfügbar:',
    ios: 'App Store',
    android: 'Google Play',
    web: 'Web',
    earlyAccessNote:
      'Early Access: Die App befindet sich im eingeschränkten Test und ist derzeit nur für freigegebene IP-Adressen zugänglich.',
  },

  footer: {
    blurb: 'Technisches Interview-Training und Coding-Assessments für Entwickler und Teams.',
    explore: 'Entdecken',
    legal: 'Rechtliches',
    privacy: 'Datenschutz',
    terms: 'AGB',
  },

  legal: {
    privacyTitle: 'Datenschutzerklärung',
    termsTitle: 'Nutzungsbedingungen',
    notice: 'Maßgeblich ist die englische Fassung dieser Seite.',
    updated: 'Zuletzt aktualisiert',
    back: 'Zurück zur Startseite',
  },

  notFound: {
    eyebrow: 'Fehler',
    message: 'Diese Seite gibt es nicht – oder sie ist noch nicht veröffentlicht.',
    back: 'Zurück zur Startseite',
  },
};

// Deutsche Fassung der Case Study: Patient Management System.
// Struktur, Bild-Pfade und Links sind identisch zur englischen Fassung.

import { after, before, pmsLinks, type Persona, type Finding, type Phase, type Pair, type Decision, type Flow, type Shot, type Fact, type Lesson, type pmsBody } from "./case-pms";

export const pmsBodyDe: typeof pmsBody = {
  tldr: [
    {
      label: "Das Problem",
      text: "In unserer Version von 2020 konnte das Personal einer ausgelasteten Diagnostikklinik nicht erkennen, was jetzt zu tun ist. Die Priorität war unsichtbar, der Status wurde nur über Farbe vermittelt, und zwei zentrale Abläufe gab es gar nicht.",
    },
    {
      label: "Was ich gemacht habe",
      text: "Ich habe unsere eigene erste Version auditiert, den Behandlungspfad, die Aufgabenstatus und die Rollen definiert, die wichtigsten Abläufe neu gestaltet und einen funktionierenden Prototyp auf einem dokumentierten Designsystem gebaut.",
    },
    {
      label: "Das Ergebnis",
      text: "Ein klickbares Produkt, das den Weg von der Überweisung bis zur Abrechnung für drei Rollen abdeckt, in Hell und Dunkel, mit jeder Komponente dokumentiert in Storybook.",
    },
  ],

  overview: {
    kicker: "Projektübersicht",
    headline: "Wir haben es 2020 ausgeliefert. Sechs Jahre später sah ich, wo es scheiterte.",
    paragraphs: [
      "Das New Malden Diagnostic Centre ist eine private ambulante Klinik für Diagnostik im Süden Londons: Bildgebung, Facharztsprechstunden und eine Kinderabteilung, sechs Tage die Woche.",
      "Das Personalsystem der Klinik erfasst Patienten, plant Sprechstunden, verfolgt Befunde und meldet Aktivitäten für die Abrechnung. Angebunden sind Myorb für die Radiologie, ein Labor vor Ort und Healthcode für die Versicherer.",
      "2026 habe ich unsere eigene erste Version auditiert und die wichtigsten Teile neu gestaltet.",
    ],
  },

  goals: {
    kicker: "Ziele",
    product: {
      title: "Produktziele aus dem Briefing",
      items: [
        "Patienten erfassen und bestehende Akten finden, mit einer neuen Behandlungsepisode statt eines Duplikats",
        "Termine in Sprechstunden einplanen",
        "Patienten bei Ankunft einchecken, damit Ärzte sehen, wer da ist",
        "Aufgaben in Arbeitslisten verwalten, jeweils mit Priorität und vollständigem Protokoll, wer wann was getan hat",
        "Aktivitäten nach Zeitraum und Kostenträger für die Abrechnung auswerten",
      ],
    },
    design: {
      title: "Designziele",
      items: [
        "Das Personal sieht in Sekunden, was jetzt zu tun ist, ohne eine Tabelle durchsuchen zu müssen",
        "Priorität und Status lassen sich nie falsch lesen, auch nicht mit einer Farbsehschwäche",
        "Jede Rolle sieht genau das, worauf sie reagieren darf",
        "Fehler werden verhindert, statt sie nachträglich zu beheben",
      ],
    },
  },

  users: {
    kicker: "Für wen es ist",
    headline: "Hier hat niemand seine Ruhe am System.",
    intro:
      "Telefone klingeln, Patienten kommen herein, ein Consultant wartet. Die Personas stammen ausschließlich aus den Rollen im Briefing, es gibt keine erfundenen Figuren.",
    personas: [
      {
        name: "Admin / Empfang",
        tagline: "Hält den Tag am Laufen",
        goals: "Patienten erfassen, Sprechstunden ausgebucht halten, Patienten einchecken, Arbeitslisten sauber halten.",
        context: "Empfang und Backoffice, ständige Unterbrechungen. Manche haben zusätzlich die Finance-Berechtigung.",
      },
      {
        name: "Consultant",
        tagline: "Sieht nur die eigenen Patienten",
        goals: "Die Sprechstunde effizient führen, mitten in der Konsultation eine Untersuchung in einem Schritt anfordern, Befunde mit wenig Verwaltungsaufwand zurückbekommen.",
        context: "Sprechzimmer oder Untersuchungsraum, Patient anwesend, knappes Zeitfenster.",
      },
      {
        name: "Consultant Secretary",
        tagline: "Arbeitet für einen Consultant",
        goals: "Die Patienten ihres Consultants schnell buchen und verwalten, die Liste sauber halten.",
        context: "Büro, Arbeit für einen namentlich bekannten Consultant. Sieht keine fremden Aufgaben.",
      },
    ] as Persona[],
  },

  role: {
    kicker: "Meine Rolle",
    bullets: [
      "Das Briefing in ein Domänenmodell und den Lebenszyklus einer Buchungsaufgabe übersetzt",
      "Die bestehenden Screens anhand von Usability-Heuristiken und WCAG auditiert",
      "Informationsarchitektur und Abläufe für jede Rolle definiert",
      "Die visuelle Sprache und jeden Screen gestaltet, in Hell und Dunkel",
      "Das Designsystem aufgebaut: Tokens, Komponenten, Dokumentation in Storybook",
      "Den klickbaren Prototyp in Code gebaut, damit sich die Abläufe ausprobieren und nicht nur ansehen lassen",
    ],
  },

  research: {
    kicker: "Research",
    headline: "Bevor ich irgendetwas neu zeichnete, habe ich geprüft, was wir ausgeliefert hatten.",
    intro:
      "Quellen: das Angebot des Kunden, das Pfaddiagramm, Überweisungsformulare auf Papier und unsere Screens von 2020, elf für Admins und sechs für Ärzte.",
    method:
      "Fünf Screens wurden anhand von Nielsens Heuristiken und WCAG 2.1 AA geprüft, jeder Befund nach Schweregrad bewertet.",
    critical: [
      { title: "Priorität war unsichtbar", desc: "Das Briefing macht Routine, Dringend und Red Flag zum Kern, doch die Buchungsliste hatte keine Prioritätsspalte. Das Personal konnte nicht triagieren." },
      { title: "Kein Patientenname in den Befunden", desc: "Die Befundliste für Admins hatte zwölf Spalten, aber keine verriet, wessen Befund man gerade verfolgt." },
      { title: "Check-in war versteckt", desc: "Einen Patienten als angekommen zu markieren ist eine zentrale tägliche Aufgabe am Empfang, steckte aber nur in einem Zeilenmenü in der Ansicht der Ärzte." },
      { title: "Kein Online-Überweisungsformular", desc: "Die tägliche Aufnahme hing weiterhin am Papier." },
    ] as Finding[],
    other: [
      "Status nur über Farbe dargestellt; zwei Zustände wirkten wie fast identisches Grün",
      "Keine Ansicht „Was braucht mich jetzt“: flache Listen, keine Standardsortierung oder Gruppierung",
      "Rollenblind: dieselbe Oberfläche für jede Rolle",
      "Überall Platzhalterinhalte, die echte Randfälle verdeckten",
    ],
  },

  define: {
    kicker: "Define",
    pathway: {
      headline: "Ich habe den Behandlungspfad der Klinik in einen Ablauf übersetzt, dem das Produkt folgen kann.",
      body: "Nach dem Check-in verzweigt er sich: Eine Untersuchung wird vom Arzt bestätigt und für die Abrechnung erfasst, eine Konsultation führt direkt zu einer einzigen Frage, nämlich ob eine weitere Untersuchung nötig ist. Bei Ja geht es mit einer neuen Aufgabe in derselben Episode zurück. Die blauen Schritte hat das Audit ergänzt: eine Duplikatprüfung und der Check-in.",
      diagram: "patient-pathway",
      // The five flows I added where the brief had only text.
      boardProposed: {
        src: "/case-pms/process/miro-board-proposed.webp",
        label: "Miro · von mir vorgeschlagene Abläufe",
        caption:
          "Wo das Briefing nur Text enthielt, habe ich den Ablauf selbst gezeichnet: Anbindung des Pathologielabors (nach dem Muster von Myorb), Abrechnung und Aktivitätsbericht, Lebenszyklus der Buchungsaufgabe, Berechtigungen nach Rolle und die Erfassung eines Überweisungsformulars.",
        alt: "Flussdiagramm des Patientenpfads. Überweisung eingegangen; hat der Patient keine Akte, wird er mit Duplikatprüfung erfasst, sonst wird die Akte geöffnet; Behandlungsepisode und Buchungsaufgabe anlegen; Termin einplanen; Patient kommt an und wird eingecheckt. Bei einem Diagnostiktermin wird die Untersuchung durchgeführt, vom Arzt bestätigt und für die Abrechnung im Aktivitätsbericht erfasst; andernfalls sieht der Patient einen Consultant. Beide Wege führen zu einer Entscheidung: Ist eine weitere Untersuchung oder ein weiterer Termin nötig, wird in derselben Episode eine neue Buchungsaufgabe angelegt; wenn nicht, endet der Pfad.",
      },
      // The real Miro working board, exported as an image. Shown only once the file exists.
      board: {
        src: "/case-pms/process/miro-board.webp",
        label: "Miro · Arbeitsboard",
        caption:
          "Aus den Diagrammen des Kunden: der Patientenpfad mit der Verzweigung zwischen Diagnostik und Konsultation und der Schleife zurück für eine weitere Untersuchung sowie die Radiologie zwischen unserem System und Myorb.",
        alt: "Zwei Frames vom Miro-Board, nachgezeichnet nach den Diagrammen des Kunden. Patient Pathway: Überweisung eingegangen, Prüfung auf bestehende Akte, Patientenakte anlegen, Behandlungsepisode, Aufgabe anlegen, Termin einplanen, Patient kommt an, dann die Entscheidung Diagnostiktermin: Eine Untersuchung wird durchgeführt und vom Arzt bestätigt, was für die Abrechnung erfasst wird, oder der Patient sieht einen Consultant; eine Entscheidung über eine weitere Untersuchung führt zurück zu Aufgabe anlegen. Radiology Flow: Swimlanes für Patient Management und Myorb, von der Buchungsaufgabe bis zum Eingang des Befundlinks.",
      },
      alt: "Flussdiagramm des Patientenpfads: Überweisung eingegangen, Prüfung der Patientenakte, Erfassung mit Duplikatprüfung, Behandlungsepisode, Buchungsaufgabe, Termin einplanen, Check-in, Konsultation oder Untersuchung, Arzt bestätigt, Untersuchung für die Abrechnung erfasst und Aufgabe zur Befundverfolgung, Befund an den Überweiser gesendet.",
    },
    status: {
      headline: "Ein Statusmodell hat die meisten Diskussionen beendet, bevor sie begannen.",
      body: "Jeder Zustand und jeder erlaubte Übergang ist festgehalten, sodass eine Schaltfläche nie etwas anbietet, was der Prozess nicht zulässt.",
      bullets: [
        "Die Priorität (Routine, Dringend, Red Flag) ist vom Status getrennt und erscheint in jeder Liste als Spalte, Sortierung und Filter",
        "Eine Aufgabe zu deaktivieren erfordert immer eine Begründung; bei „nicht mehr erforderlich“ muss sie schriftlich erfolgen",
        "Jeder Status und jede Priorität besteht aus Icon, Label und Farbe, nie nur aus Farbe",
        "Status werden nach Bedeutung gruppiert: Handlungsbedarf, wartend, erledigt, geschlossen. Das löste die beiden ähnlichen Grüntöne aus dem Audit",
      ],
      diagram: "task-lifecycle",
      alt: "Zustandsdiagramm einer Buchungsaufgabe. Pending wechselt zu Scheduled, sobald ein Termin gebucht ist; Pending oder Scheduled können als Complete, No longer required oder Created in error markiert werden. Complete und No longer required lassen sich zu Reactivate pending reaktivieren, was zurück zu Pending führt.",
    },
    ia: {
      headline: "Jede Rolle sieht nur das, worauf sie reagieren kann.",
      body: "Eine Navigation, nach Rolle gefiltert: Eine Secretary sieht die Liste ihres Consultants, ein Consultant sieht seine eigenen Patienten.",
      columns: ["Bereich", "Admin / Empfang", "Consultant", "Secretary"],
      rows: [
        ["Dashboard", "Triage über alle Listen", "Meine Patienten, Ankünfte, erwartete Befunde", "Liste und Sprechstunden meines Consultants"],
        ["Buchungsaufgaben", "Alle", "Anforderung aus der Sprechstunde", "Auf den eigenen Consultant beschränkt"],
        ["Befunde", "Alle", "Nur meine Patienten", "Beschränkt"],
        ["Abrechnung und Berichte", "Nur mit Finance-Berechtigung", "Nein", "Nein"],
      ],
    },
  },

  design: {
    kicker: "Design",
    phases: [
      {
        label: "Richtung",
        title: "Ruhig, präzise, unaufgeregt",
        intro:
          "Das Briefing war ein gut geführter Empfang, kein kaltes Krankenhausportal und keine Consumer-Gesundheits-App. Farbe ist der Bedeutung vorbehalten, sodass der Status das Einzige ist, was laut wird. Eine Regel, an die ich mich hielt: Rot ist Systemfehlern vorbehalten, damit ein klinischer Red Flag nie mit einem Validierungsfehler verwechselt wird.",
        bullets: [
          "Eine erste Richtung mit tiefblauer Seitenleiste wurde im Review als zu schwer verworfen",
          "Der endgültige Look: eine helle Fläche, ein weißes Arbeitspanel, Tabellen mit Rahmen, Avatare mit Initialen und weiche, getönte Status-Pills mit Icons",
          "DM Sans, eine Schriftskala von 12 bis 28 px, ein Blau für Aktionen",
        ],
      },
      {
        label: "Prototyp",
        title: "Ein Produkt, das man benutzen kann",
        intro:
          "Ich habe das Redesign als klickbaren Prototyp mit Beispieldaten und einem Rollenwechsler statt eines Logins gebaut. Das war ein bewusster Schnitt: Ein Reviewer beurteilt Screens und Abläufe, also floss der Aufwand in die Oberfläche und nicht in eine Datenbank. Zustandsänderungen sind innerhalb einer Sitzung echt: Eine Episode anzulegen erzeugt eine Aufgabe, das Einplanen setzt sie auf Scheduled, die Abrechnung markiert die Episode als bezahlt oder in Rechnung gestellt.",
        bullets: [],
      },
      {
        label: "Designsystem",
        title: "Von Screens zu einem System",
        intro:
          "Sobald die Screens standen, habe ich sie zu einem System gemacht, damit der nächste Screen schneller und einheitlich entsteht. Drei Token-Ebenen, helle und dunkle Themes aus denselben Tokens und jede Komponente dokumentiert mit Varianten, Zuständen, Do und Don't sowie Hinweisen zur Barrierefreiheit.",
        bullets: [],
      },
    ] as Phase[],
  },

  compare: {
    kicker: "Audit-Befunde und das Redesign",
    headline: "Was unsere erste Version falsch machte und was an ihre Stelle trat.",
    pairs: [
      {
        finding: "Priorität unsichtbar, Status nur über Farbe, kein „Was braucht mich jetzt“",
        fix: "Ein Prioritäts-Tag und ein Status mit Icon und Label an jeder Aufgabe, Filter nach Priorität und ein Dashboard, das zuerst auflistet, was Aufmerksamkeit braucht.",
        before: before("v1-task-worklist", 1440, 1024, "Unsere Aufgabenliste von 2020, mit markierter Statusspalte und Kopfzeile", "Aufgabenliste in Version 1. 1: Status nur über Farbe. 2: keine Prioritätsspalte."),
        after: [
          after("tasks-light", "Die neu gestaltete Aufgabenliste mit Prioritäts- und Status-Pills, Suche und Filtern", "Aufgabenliste: Priorität, Status mit Icon und Label, Filter"),
          after("tasks-red-flag-light", "Die neu gestaltete Aufgabenliste, gefiltert auf Red-Flag-Aufgaben", "Auf Red Flag gefiltert: ein Klick zum Dringendsten"),
        ],
      },
      {
        finding: "Erfassung ohne Duplikatprüfung und ein deaktivierter Absenden-Button, der nichts erklärt",
        fix: "Ein Formular, das vor einem möglichen Duplikat warnt und der Klinik trotzdem die Erfassung erlaubt, mit einer Meldung unter jedem fehlerhaften Feld und einem Absenden-Button, der immer funktioniert.",
        before: before("v1-registration", 1440, 1024, "Unsere Patientenerfassung von 2020, mit den eingeklappten Schritten zwei bis fünf und dem ausgegrauten Absenden-Button markiert", "Erfassung in Version 1. 1: vier weitere Schritte weiter unten, ohne Gefühl für den Fortschritt. 2: Absenden ausgegraut, ohne Grund."),
        after: [
          after("register-errors-light", "Der Dialog „Patient erfassen“ mit Fehlern unter drei leeren Pflichtfeldern", "Fehler unter den Feldern, die korrigiert werden müssen"),
          after("register-duplicate-light", "Der Dialog „Patient erfassen“ mit einer Warnung vor einem möglichen Duplikat", "Ein mögliches Duplikat wird markiert, nicht blockiert"),
        ],
      },
      {
        finding: "Zwei sich überschneidende Kalender und kein klarer Weg zum Buchen",
        fix: "Die Terminplanung findet in der Aufgabe statt, mit Datum, Uhrzeit und Ort, und die Aufgabe wechselt von selbst auf Scheduled. Eine Terminseite listet alles Gebuchte auf.",
        before: before("v1-clinic-scheduling", 2928, 1024, "Zwei unserer Screens von 2020 nebeneinander: der Kalender der Clinic Page und die Tagesansicht der Appointments, beides ein Raster aus Räumen und Stunden", "Version 1. 1: der Kalender der Clinic Page. 2: der Kalender der Appointments. Dasselbe Raster aus Räumen und Stunden, an zwei Orten."),
        after: [
          after("task-scheduled-light", "Der Aufgabendialog mit einem gebuchten Termin und den erlaubten nächsten Aktionen", "Terminplanung innerhalb der Aufgabe"),
          after("appointments-light", "Die Tabelle der Termine", "Alle Termine an einem Ort"),
        ],
      },
      {
        finding: "Befundliste für Admins mit zwölf Spalten und ohne Patientennamen",
        fix: "Befunde stehen in der Aufgabe neben dem Termin und dem Überweisungsformular, immer unter dem Namen des Patienten, mit einem klaren nächsten Schritt.",
        before: before("v1-results-tracking", 1920, 1080, "Unsere Befundliste von 2020, mit markierter Kopfzeile und Statusspalte", "Befundliste in Version 1. 1: zwölf Spalten, keine davon der Patientenname. 2: Status nur über Farbe."),
        after: [after("task-result-light", "Der Aufgabendialog mit einem eingegangenen Befund und der Aktion „An Überweiser senden“", "Befund, Überweisung und Termin zusammen")],
      },
      {
        finding: "Überweisungsformular nie gestaltet; Aufnahme weiterhin auf Papier",
        fix: "Ein Überweisungsformular je Kategorie, aus der Aufgabe heraus hinzugefügt und mit ihr verknüpft, mit strukturierten Feldern statt gescanntem Freitext.",
        before: null,
        after: [after("task-referral-form-light", "Der Aufgabendialog mit einem Überweisungsformular, das gerade ausgefüllt wird", "Strukturiertes Überweisungsformular, mit der Aufgabe verknüpft")],
      },
    ] as Pair[],
  },

  decisions: {
    kicker: "Designentscheidungen",
    items: [
      { title: "Status ist Farbe, Icon und Label", why: "Lesbar für Menschen mit Farbsehschwäche und in Graustufen." },
      { title: "Eine primäre Aktion pro Screen oder Dialog", why: "Das Personal triagiert, es stöbert nicht." },
      { title: "Hover nur bei klickbaren Elementen", why: "Hover bedeutet immer „Das kannst du anklicken“." },
      { title: "Absenden wird nie deaktiviert, um einen Grund zu verbergen", why: "Ein ausgegrauter Button erklärt nichts; zeige, was zu korrigieren ist." },
      { title: "Bedienelemente, die eine Rolle nicht nutzen kann, fehlen", why: "Niemand stößt nach einem Klick auf einen Fehler." },
    ] as Decision[],
  },

  flows: {
    kicker: "Zentrale Abläufe",
    headline: "In Code gebaut, damit man sich durchklicken kann, statt nur zuzusehen.",
    items: [
      {
        title: "Dashboard: was Aufmerksamkeit braucht",
        desc: "Die primäre Kachel zählt aktive Aufgaben. Eine Liste darunter stellt Red-Flag- und dringende Aufgaben nach oben.",
        shots: [
          after("dashboard-light", "Das Dashboard im hellen Theme", "Dashboard, hell"),
          after("dashboard-dark", "Das Dashboard im dunklen Theme", "Dashboard, dunkel"),
        ],
      },
      {
        title: "Patienten und Episoden",
        desc: "Patienten suchen, eine Akte öffnen und jede Überweisung als Episode mit ihren Aufgaben und der Abrechnung sehen.",
        shots: [
          after("patients-light", "Die Patientenliste", "Patienten"),
          after("patient-detail-light", "Eine Patientenakte mit Episoden und Aufgaben", "Ein Patient, nach Episoden gruppiert"),
        ],
      },
      {
        title: "Lebenszyklus einer Aufgabe",
        desc: "Das Personal bewegt eine Aufgabe nur entlang erlaubter Übergänge. Jeder Schritt wird mit Person und Zeitpunkt protokolliert.",
        shots: [
          after("task-detail-pending-light", "Eine ausstehende Aufgabe im Aufgabendialog", "Eine Red-Flag-Aufgabe, ausstehend"),
          after("task-schedule-error-light", "Das Terminformular mit einer Fehlermeldung für ein fehlendes Datum", "Das Terminformular erklärt, was fehlt"),
        ],
      },
      {
        title: "Diagnostik oder Konsultation",
        desc: "Jede Aufgabe trägt ihre Terminart. Nach einer Untersuchung bestätigt der Arzt, dass sie durchgeführt wurde, und auf diese Bestätigung wartet die Abrechnung. Nach einer Konsultation beantwortet der Consultant eine Frage: Ist eine weitere Untersuchung nötig? Bei Ja entsteht in einem Schritt eine neue Aufgabe in derselben Episode.",
        shots: [
          after("task-diagnostic-confirmed-light", "Eine Diagnostikaufgabe nach dem Termin, mit der Bestätigung der Untersuchung durch den Arzt, für die Abrechnung erfasst", "Diagnostik: Untersuchung bestätigt, für die Abrechnung erfasst"),
          after("task-consultation-question-light", "Eine Konsultationsaufgabe nach dem Termin, mit der Frage, ob eine weitere Untersuchung oder ein weiterer Termin nötig ist", "Konsultation: eine Frage nach dem Besuch"),
          after("task-further-test-light", "Die abgeschlossene Konsultationsaufgabe, mit dem Hinweis, dass eine Radiologieuntersuchung nun eine ausstehende Aufgabe in derselben Episode ist", "Eine weitere Untersuchung wird zu einer neuen Aufgabe in derselben Episode"),
        ],
      },
      {
        title: "Drei Rollen, drei Ansichten",
        desc: "Ein Rollenwechsler schlüpft in jede Rolle. Ein Consultant sieht nur seine eigenen Aufgaben und keine Abrechnung.",
        shots: [
          after("role-switcher-menu-light", "Das Menü des Rollenwechslers mit dem Demo-Personal", "Rollenwechsler"),
          after("tasks-consultant-light", "Die Aufgabenliste als Consultant, mit nur den zwei Aufgaben dieses Consultants", "Ansicht des Consultants"),
        ],
      },
      {
        title: "Abrechnung, nur für Admins",
        desc: "Selbstzahler werden als bezahlt markiert, Versicherer als in Rechnung gestellt, und der Bericht summiert beides.",
        shots: [after("billing-light", "Der Abrechnungsbericht für Admins", "Abrechnungsbericht")],
      },
      {
        title: "Dunkles Theme",
        desc: "Gemeinsam mit dem hellen Theme aus denselben Tokens gestaltet und auf Kontrast geprüft.",
        shots: [
          after("tasks-dark", "Die Aufgabenliste im dunklen Theme", "Aufgabenliste, dunkel"),
          after("task-detail-dark", "Der Aufgabendialog im dunklen Theme", "Aufgabendialog, dunkel"),
        ],
      },
    ] as Flow[],
  },

  system: {
    kicker: "Designsystem",
    headline: "Ich habe den nächsten Screen günstiger gemacht.",
    body: "Drei Token-Ebenen: rohe Palette, nach Zweck benannte semantische Tokens, Komponenten-Tokens. Jedes semantische Token hat einen hellen und einen dunklen Wert, und eine Prüfung schlägt bei jeder rohen Farbe fehl.",
    bullets: [
      "Jede Komponente dokumentiert, mit Live-Beispielen, allen Varianten und Zuständen",
      "Wann man sie einsetzt, mit Do und Don't und echten Beispielen",
      "Verwendete Tokens und Hinweise zur Barrierefreiheit",
      "Eine Matrix, die jede interaktive Komponente in jedem Zustand zeigt",
    ],
    shots: [
      after("storybook-introduction", "Die Einführungsseite des Designsystems in Storybook", "Einführung: Ebenen, Prinzipien, wie man beiträgt"),
      after("storybook-button-docs", "Die Dokumentationsseite des Buttons in Storybook", "Eine Komponentenseite: Beispiele, Props, Hinweise"),
      after("storybook-colors-semantic", "Die Seite der semantischen Farb-Tokens in Storybook", "Semantische Tokens, je Theme aufgelöst"),
      after("storybook-states", "Die Matrix der Interaktionszustände in Storybook", "Jede Komponente in jedem Zustand"),
    ] as Shot[],
  },

  // Short versions of the outcome facts, shown as a strip right under the cover image.
  highlights: [
    { number: "3", label: "Rollen, jede mit eigener Ansicht" },
    { number: "6", label: "Aufgabenstatus mit erlaubten Übergängen" },
    { number: "60+", label: "dokumentierte Storybook-Stories" },
    { number: "AA", label: "Textkontrast in beiden Themes" },
  ] as Fact[],

  outcome: {
    kicker: "Ergebnis",
    headline: "Was heute existiert.",
    facts: [
      { number: "6", label: "Screens und 4 Dialoge, die den Pfad von der Überweisung bis zur Abrechnung abdecken" },
      { number: "3", label: "Rollen mit unterschiedlichen Ansichten und Berechtigungen" },
      { number: "6", label: "Aufgabenstatus mit einem expliziten Satz erlaubter Übergänge" },
      { number: "60+", label: "Storybook-Stories, mit Dokumentation für jede Komponente" },
      { number: "3", label: "Token-Ebenen, rund 100 Farb-Tokens, helle und dunkle Themes" },
      { number: "AA", label: "Textkontrast auf jedem Screen und Dialog in beiden Themes; Feldrahmen liegen noch unter 3:1" },
    ] as Fact[],
  },

  lessons: {
    kicker: "Zentrale Erkenntnisse",
    headline: "Drei Dinge, die mir dieses Projekt beigebracht hat.",
    blocks: [
      { title: "Behandlung ist ein Kreislauf, keine Linie", body: "Eine Konsultation endet oft in einer weiteren Untersuchung. Das System muss in einem Schritt die nächste Aufgabe in derselben Episode anlegen, statt wieder von vorn zu beginnen." },
      { title: "Abrechnung folgt dem Nachweis", body: "Die Klinik rechnet durchgeführte Untersuchungen ab, nicht gebuchte. Eine einzige Bestätigung durch den Arzt wurde zum Bindeglied zwischen Klinikalltag und Finanzen." },
      { title: "Prüfe zuerst die eigene Arbeit", body: "Sechs Jahre später waren die Probleme unserer ersten Version offensichtlich. Meine eigenen Screens zu auditieren war schwerer, als die eines anderen zu kritisieren, und es entschied, was ich zuerst neu gestalte." },
    ] as Lesson[],
  },

  cta: {
    title: "Probieren Sie es selbst aus",
    sub: "Wechseln Sie in der Demo zwischen den Rollen oder lesen Sie das Designsystem.",
    links: [
      { label: "Live-Demo", href: pmsLinks.demo },
      { label: "Designsystem", href: pmsLinks.storybook },
    ],
  },
};

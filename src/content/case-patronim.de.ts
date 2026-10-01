// Deutsche Fassung der Patronim-Case-Study. Struktur, Bildpfade und Links identisch zur englischen Datei.

import type { Fact, Lesson } from "@/content/case-pms";
import { after, dark, v1, patronimLinks, type patronimBody, type PhonePair, type RoleFlow } from "./case-patronim";

export const patronimBodyDe: typeof patronimBody = {
  cover: [
    after("01-manager-today", "Heute-Screen des Property Managers: anstehende Wechsel nach Gast-Check-in sortiert, jeweils mit Balken für das Zeitfenster", "Property Manager: Wechsel von heute"),
    after("07-patron-jobs", "Aufgaben-Screen der Reinigungskraft: Jede Aufgabe zeigt zuerst die Zeit bis zur Ankunft des Gastes", "Reinigungskraft: Aufgaben nach Deadline"),
    after("11-inspector-queue", "Warteschlange des Inspectors: zur Kontrolle bereite Wohnungen, nach Gast-Check-in sortiert", "Inspector: Warteschlange nach Check-in"),
  ],

  highlights: [
    { number: "6", label: "Rollen in der App von 2019, die Excel-Tabellen ersetzte" },
    { number: "69 %", label: "der Kunden sagten, die App habe die Zusammenarbeit erleichtert" },
    { number: "3", label: "Rollen in einem klickbaren Prototyp von 2026" },
    { number: "1", label: "Deadline bestimmt jeden Screen: der Check-in des Gastes" },
  ] as Fact[],

  overview: {
    kicker: "Überblick",
    headline: "2019 haben wir Excel abgelöst. 2026 habe ich dafür gesorgt, dass die App ihr Versprechen hält.",
    paragraphs: [
      "Patronim reinigt Kurzzeitvermietungen in Tel Aviv für Airbnb-Gastgeber und Property Manager. Zwischen dem Check-out des einen und dem Check-in des nächsten Gastes liegen nur wenige Stunden. Ist die Wohnung dann nicht fertig, verliert der Gastgeber eine Bewertung und Patronim einen Kunden.",
      "2019 war ich der einzige UI/UX-Designer in einem Team von acht Personen, das die Excel-Tabellen des Unternehmens durch eine Mobile- und Web-App für sechs Rollen ersetzte, mit Zahlungen, dynamischer Preisgestaltung und Rückerstattungen. Die App wurde täglich genutzt.",
      "2026 habe ich unsere eigenen Screens auditiert, die App um dieses Wechselfenster herum neu gestaltet und als funktionierenden Prototyp mit KI gebaut, für die drei Rollen, die die Arbeit tatsächlich erledigen.",
    ],
  },

  users: {
    kicker: "Für wen",
    headline: "Drei Menschen, drei sehr unterschiedliche Situationen.",
    personas: [
      { name: "Property Manager", context: "Unterwegs mit dem Handy, zwischen zwei Gästen. Bestellt, bezahlt, verfolgt.", need: "Wissen, dass die Wohnung bereit ist, bevor der Gast ankommt, und was das kostet." },
      { name: "Reinigungskraft", context: "Mitten in der Arbeit in einer hellen Wohnung, nasse Hände, ein Daumen.", need: "Sehen, wie viel Zeit bleibt und was als erledigt gilt." },
      { name: "Quality Inspector", context: "Unterwegs zwischen Gebäuden, mehrere Wohnungen pro Tag.", need: "Die Arbeit anhand von Belegen beurteilen und nur einen Punkt zurückgeben, nicht die ganze Wohnung." },
    ],
  },

  audit: {
    kicker: "Research",
    headline: "Unsere App von 2019 verfolgte Aufträge. Sie versprach nie, dass die Wohnung fertig ist.",
    intro:
      "Ich habe unsere Screens von 2019 und die ursprüngliche Case Study noch einmal durchgesehen und sie an der echten Aufgabe gemessen: einer Reinigung, die zwischen zwei Gäste passen muss.",
    findings: [
      { title: "Die Deadline war optional", desc: "„Check-in-Zeit festlegen: Unbekannt“. Der eine Zeitpunkt, von dem der ganze Service abhängt, ließ sich überspringen." },
      { title: "Der Preis kam zuletzt", desc: "Eine Zeile „Gesamt“ ganz unten, dynamische Preise (Feiertage, Nachfrage, kurzfristige Buchung) blieben unerklärt." },
      { title: "Services sprachen unser Jargon", desc: "„Mid Holiday NoSheets“, „Pre-Checkin 2h Refresh“: keine Beschreibung, keine Dauer, kein Umfang." },
      { title: "Die Reinigungskraft sah die Uhr nicht", desc: "Die Aufgabenkarte begann mit der Postleitzahl. Check-out und Check-in waren zwei schlichte Zeilen." },
      { title: "Die Kontrolle hatte keine Belege", desc: "Eine Liste von Adressen und eine flache Checkliste. Keine Fotos, keine Möglichkeit, einen einzelnen Punkt zurückzugeben." },
      { title: "Ein Blau für alles", desc: "Keine Hierarchie, keine Zustände, graue Schrift auf Blau, fünf unbeschriftete Tab-Icons, keine Leer- oder Fehlerzustände." },
    ],
  },

  define: {
    kicker: "Define",
    idea: {
      headline: "Ein Element trägt das ganze Produkt: das Wechselfenster.",
      body: "Ein Balken vom Check-out bis zum nächsten Check-in, mit dem Reinigungsblock darin und einer „Jetzt“-Markierung. Derselbe Balken erscheint für Manager, Reinigungskraft und Inspector, und seine Farbe und Beschriftung zeigen, ob der Auftrag im Plan, gefährdet oder verspätet ist.",
      shots: [
        after("06-manager-tracking", "Auftragsverfolgung mit Wechselfenster-Balken, Jetzt-Markierung und voraussichtlichem Ende vor dem Check-in", "Tracking: pünktlich, mit Zeitpuffer"),
      ],
    },
    e2e: {
      headline: "Ich habe die Übergaben kartiert, bevor ich einen Screen gezeichnet habe.",
      body: "Ein Auftrag geht durch drei Hände. Der Flow zeigt, wo die Arbeit von einer Rolle zur nächsten wechselt und wo jede Rolle sieht, was die anderen getan haben.",
      board: {
        src: "/case-patronim/flows/e2e.webp",
        label: "Miro · End-to-End-Flow",
        caption: "Das End-to-End-Szenario, das sich im Prototyp durchklicken lässt: gebucht, mit Fotos gereinigt, ein Punkt zurückgegeben, behoben, bereit, bewertet. Seitlich scrollen oder in voller Größe öffnen.",
        alt: "Swimlane-Flow über Property Manager, Reinigungskraft und Quality Inspector: Der Manager bucht eine Wechselreinigung und verfolgt sie; die Reinigungskraft reinigt, fügt Fotos hinzu, meldet ein fehlendes Handtuch und reicht ein; der Inspector markiert Spiegelstreifen als nachzubessern; die Reinigungskraft behebt und reicht erneut ein; der Inspector markiert als bereit; der Manager sieht „Bereit“ und bewertet den Auftrag.",
      },
    },
    blueprint: {
      headline: "Der Service Blueprint hält alle sechs Rollen im Blick.",
      body: "Der Prototyp deckt drei Rollen ab. Disponent, Administrator und Kunde prägen aber weiterhin jeden Schritt, deshalb zeigt der Blueprint sie, und die letzten beiden Zeilen übersetzen die Schwachstellen von 2019 in die Antworten des Redesigns.",
      columns: ["", "Buchen", "Zuweisen und vorbereiten", "Reinigen", "Kontrollieren", "Übergabe"],
      rows: [
        ["Wechselfenster", "Gast checkt um 11:00 aus", "Fenster öffnet sich", "Reinigung läuft im Fenster", "Kontrolle vor dem Check-in", "Nächster Gast checkt um 15:00 ein"],
        ["Property Manager", "Bucht, legt Gast-Check-in fest, bezahlt", "Bekommt die nächsten Schritte", "Verfolgt Räume und Fotos", "Sieht Nacharbeit, falls nötig", "Sieht „Bereit“, bewertet den Auftrag"],
        ["Reinigungskraft", "", "Bekommt den Auftrag, nach Deadline sortiert", "Raum-Checkliste mit Fotos", "Behebt zurückgegebene Punkte", "Verdienst aktualisiert"],
        ["Disponent", "", "Liefert Wäsche und Verbrauchsmaterial", "Liefert gemeldete fehlende Dinge", "", ""],
        ["Quality Inspector", "", "", "Sieht den Reinigungsfortschritt", "Bestanden oder nachbessern, pro Punkt", "Markiert als bereit"],
        ["Administrator", "Legt Preisregeln fest", "Plant Arbeit, verwaltet Nutzer", "Überwacht die Leistung", "Bearbeitet Streitfälle", "Prüft Feedback"],
        ["Schwachstelle 2019", "Check-in optional, Preis versteckt, Jargon", "Keine klaren nächsten Schritte", "Postleitzahl statt Deadline", "Keine Fotos, keine Nacharbeit pro Punkt", "Status „Bereit“ nicht eindeutig"],
        ["Antwort des Redesigns", "Pflicht-Check-in, Live-Preis mit Begründung, verständliche Namen", "Vier Schritte: Was passiert als Nächstes", "Fensterbalken und verbleibende Zeit bei jedem Auftrag", "Foto-Nachweis und Nacharbeit pro Punkt", "Eindeutiges „Bereit für Gast“, danach Bewertung"],
      ],
    },
  },

  compare: {
    kicker: "Vorher und nachher",
    headline: "Jede Erkenntnis, neben dem, was sie ersetzt hat.",
    pairs: [
      {
        finding: "Der Check-in des Gastes war optional",
        fix: "Der Check-in ist Pflicht, und das Fenster wird beim Buchen live angezeigt. Passt der Service nicht hinein, sagt die App das und bietet die früheste sichere Option an.",
        before: v1("checkin", "Unser Buchungsformular von 2019 mit der Check-in-Zeit „Unbekannt“, markiert", "① Check-in-Zeit „Unbekannt“"),
        after: [
          after("02-manager-book", "Das Buchungsformular von 2026 mit Pflicht-Check-in und Live-Wechselfenster", "Pflicht-Check-in, Live-Fenster"),
          after("03-manager-book-at-risk", "Das Buchungsformular von 2026 mit der Warnung, dass das Fenster zu kurz ist", "Zu wenig Zeit: die Lösung ist ein Tipp"),
        ],
      },
      {
        finding: "Der Preis erschien erst am Ende",
        fix: "Eine Live-Summe steht ab der ersten Auswahl in der Fußzeile. Ein Tipp darauf erklärt jede Anpassung in einfachen Worten und verweist auf eine günstigere Zeit, wenn es eine gibt.",
        before: v1("price", "Unser Buchungsformular von 2019 mit der Zeile „Gesamt“ ganz unten, markiert", "① die Summe, zuletzt und unerklärt"),
        after: [after("04-manager-price-breakdown", "Die Preisaufschlüsselung von 2026 mit erklärten Feiertags- und Kurzfristzuschlägen und einer günstigeren Option", "Warum der Preis heute höher ist und wie man sparen kann")],
      },
      {
        finding: "Servicenamen waren interner Jargon",
        fix: "Verständliche Namen, was enthalten ist, wie lange es dauert und was es kostet, damit ein neuer Gastgeber wählen kann, ohne nachzufragen.",
        before: v1("services", "Unsere Service-Auswahl von 2019 mit internen Namen wie Mid Holiday No Sheets, markiert", "① Namen, die nur das Team verstand"),
        after: [after("16-manager-services", "Die Service-Karten von 2026 mit verständlichen Namen, Umfang, Dauer und Preis", "Verständliche Namen, Umfang, Dauer, Preis")],
      },
      {
        finding: "Die Reinigungskraft sah die Deadline nicht",
        fix: "Aufgaben sind nach Deadline sortiert und zeigen zuerst die Zeit bis zur Ankunft des Gastes. Die Postleitzahl ist in die zweite Zeile gerückt.",
        before: v1("patron-jobs", "Unsere Aufgabenliste für Reinigungskräfte von 2019, die mit der Postleitzahl beginnt, markiert", "① Postleitzahl zuerst ② die Deadline als einfacher Text"),
        after: [after("07-patron-jobs", "Die Aufgabenliste von 2026, die mit der Zeit bis zur Ankunft des Gastes beginnt", "„Gast kommt in 2 Std. 35 Min.“")],
      },
      {
        finding: "Die Kontrolle hatte keine Belege",
        fix: "Der Inspector sieht die Fotos der Reinigungskraft Raum für Raum, gibt einzelne Punkte frei oder mit Notiz und Foto zurück.",
        before: v1("quality", "Unser Kontroll-Screen von 2019, eine schlichte Liste aus Daten und Adressen, markiert", "① Adressen, nichts, woran man beurteilen kann"),
        after: [
          after("11-inspector-queue", "Die Kontroll-Warteschlange von 2026 mit Wechselfenster-Balken", "Warteschlange nach Gast-Check-in"),
          after("12-inspector-needs-redo", "Das Nachbessern-Sheet von 2026 mit Notiz und Foto zu einem Punkt", "Einen Punkt zurückgeben, mit Notiz"),
        ],
      },
    ] as PhonePair[],
  },

  flows: {
    kicker: "Zentrale Flows",
    headline: "Drei Rollen, ein Auftrag, Ende zu Ende durchgeklickt.",
    roles: [
      {
        role: "Property Manager",
        title: "Buchen, bezahlen, verfolgen, bewerten",
        desc: "Von einem leeren Heute-Screen bis zum bewerteten Auftrag. Zahlungsfehler sagen, was passiert ist und wie man es behebt; Nacharbeit erscheint als Status, nicht als Überraschung.",
        flow: "/case-patronim/flows/manager.webp",
        flowAlt: "Flow des Property Managers: App öffnen, leerer Zustand oder Heute, Reinigung buchen, Unterkunft und Service wählen, Pflicht-Check-in festlegen, Fensterprüfung mit Zweig für gefährdetes Fenster, Extras, Live-Summe und Preisaufschlüsselung, prüfen und bezahlen mit Zweig für abgelehnte Karte, Bestätigung, Verfolgung, Nacharbeit oder bereit, bewerten.",
        shots: [
          after("05-manager-confirmed", "Gebuchte Reinigung bestätigt, mit einer Zeitleiste in vier Schritten, was als Nächstes passiert", "Was als Nächstes passiert, in vier Schritten"),
          after("06-manager-tracking", "Auftragsverfolgung mit Fensterbalken, Reinigungskraft und Raumfortschritt", "Verfolgung, Raum für Raum"),
          after("13-manager-ready-rate", "Bereit für Gast mit Bewertungsformular", "Bereit, dann bewerten"),
        ],
      },
      {
        role: "Reinigungskraft",
        title: "Reinigen mit Nachweis",
        desc: "Räume sind Abschnitte mit kurzer Checkliste und einem verpflichtenden Nachher-Foto. Fehlende Dinge werden direkt aus dem Auftrag gemeldet, und alles, was zurückgegeben wird, steht wieder ganz oben in der Liste.",
        flow: "/case-patronim/flows/patron.webp",
        flowAlt: "Flow der Reinigungskraft: Aufgaben öffnen, leerer Zustand oder nach Deadline sortierte Aufgaben, Auftragsdetail, Reinigung starten, Raum-Checkliste mit Nachher-Fotos, fehlenden Gegenstand melden, zur Kontrolle einreichen, wenn alle Räume Fotos haben, Nacharbeitskarte mit Notiz und Foto, beheben und erneut einreichen, Auftrag erledigt.",
        shots: [
          after("08-patron-checklist", "Raum-Checkliste, bei der ein Nachher-Foto nötig ist, um den Raum abzuschließen", "3 von 4 Räumen erledigt"),
          after("09-patron-missing-item", "Sheet zum Melden eines fehlenden Gegenstands", "Ein fehlendes Handtuch melden"),
          after("10-patron-rework", "Aufgabenliste mit einer Nacharbeitskarte oben, die die Notiz des Inspectors zeigt", "Ein Punkt zum Nachbessern, ganz oben"),
        ],
      },
      {
        role: "Quality Inspector",
        title: "Kontrollieren und entscheiden",
        desc: "Raum für Raum, Punkt für Punkt. Ein durchgefallener Punkt schickt den Auftrag mit einer Notiz zurück; sind alle bestanden, wird er als bereit markiert und der Manager informiert.",
        flow: "/case-patronim/flows/inspector.webp",
        flowAlt: "Flow des Inspectors: Warteschlange nach Gast-Check-in sortiert öffnen, Kontrolle öffnen, pro Raum Fotos und Checkliste prüfen, bestanden oder nachbessern mit Notiz und Foto, an die Reinigungskraft zurückgeben oder als bereit markieren, Manager sieht bereit.",
        shots: [
          after("11-inspector-queue", "Kontroll-Warteschlange mit Fensterbalken", "Warteschlange nach Check-in"),
          after("12-inspector-needs-redo", "Nachbessern-Sheet mit Notiz und Foto", "Nachbessern, mit Beleg"),
        ],
      },
    ] as RoleFlow[],
  },

  states: {
    kicker: "Schwierige Zustände",
    headline: "Die Screens, nach denen niemand fragt, schaffen Vertrauen.",
    shots: [
      after("14-manager-empty", "Leerer Heute-Screen, der den Manager zum Buchen einer Reinigung führt", "Leer: ein nächster Schritt, keine leere Fläche"),
      after("15-payment-error", "Zahlung abgelehnt, mit klarer Lösung: andere Karte oder Rechnung", "Abgelehnt: was passiert ist, wie man es behebt"),
    ],
  },

  system: {
    kicker: "Designsystem",
    headline: "Auf einem System gebaut, in Hell und Dunkel.",
    body: "Tokens für Farbe, Schrift, Radius und Abstand liegen in einer Datei und steuern sowohl die App als auch Storybook, wo jede Komponente dokumentiert ist. Das dunkle Theme nutzt neutrales Graphit, Blau nur für Aktionen: Meine erste dunkle Palette driftete ins Violette, und ich habe sie neu aufgebaut.",
    bullets: [
      "Status ist immer Farbe, Icon und Beschriftung, nie nur Farbe",
      "Eigene Textfarben für Erfolg und Risiko, damit Beschriftungen den AA-Kontrast erreichen",
      "Touch-Flächen von mindestens 44 Punkten für nasse Hände und einen Daumen",
      "Tabellarische Ziffern für jede Zeit und jeden Preis",
    ],
    shots: [
      dark("01-manager-today", "Heute-Screen im dunklen Theme", "Heute, dunkel"),
      dark("06-manager-tracking", "Tracking im dunklen Theme", "Tracking, dunkel"),
      dark("07-patron-jobs", "Aufgaben der Reinigungskraft im dunklen Theme", "Aufgaben, dunkel"),
      dark("12-inspector-needs-redo", "Nachbessern-Sheet im dunklen Theme", "Nachbessern, dunkel"),
    ],
  },

  outcome: {
    kicker: "Ergebnis",
    headline: "Was 2019 geliefert hat und was 2026 hinzukommt.",
    facts: [
      { number: "8", label: "Personen im Team von 2019, ich als einziger UI/UX-Designer" },
      { number: "1.460", label: "Stunden Entwicklung für die App von 2019" },
      { number: "69 %", label: "der Kunden sagten, die App habe die Zusammenarbeit erleichtert" },
      { number: "3", label: "Rollen in einem klickbaren Szenario von 2026 verbunden" },
      { number: "15", label: "zentrale Screens, in Hell und Dunkel" },
      { number: "6", label: "schwierige Zustände: leer, Laden, Fehler, gefährdet, offline, Nacharbeit" },
    ] as Fact[],
    // Bewertung des Kunden zum Projekt von 2019; der Agenturname ist in Klammern ersetzt.
    review: {
      quote:
        "Wir sind mit der App, die wir bekommen haben, zufrieden. [Das Team] ist sehr proaktiv und macht Vorschläge, noch bevor wir fragen. Andere Firmen, mit denen wir gearbeitet haben, haben auf unsere Anweisungen gewartet, statt selbst Vorschläge zu machen. [Sie] haben weit mehr getan als erwartet, um alle unsere Bedürfnisse zu erfüllen.",
      name: "Ilan Cohen",
      role: "CEO, Patronim",
      note: "Zur App von 2019",
    },
  },

  lessons: {
    kicker: "Zentrale Erkenntnisse",
    headline: "Drei Dinge, die mir dieses Projekt beigebracht hat.",
    blocks: [
      { title: "Um die Deadline herum gestalten", body: "Der Gast-Check-in war ein optionales Feld. Ihn zur Pflicht und für jede Rolle sichtbar zu machen, hat aus einem Auftragsverfolger ein Versprechen gemacht." },
      { title: "Den Preis erklären, bevor er zur Frage wird", body: "Dynamische Preise wirken unfair, wenn sie versteckt sind. Jede Anpassung zu erklären und die günstigere Zeit anzubieten, macht aus einer Überraschung eine Entscheidung." },
      { title: "Nachweis schlägt Häkchen", body: "Fotos pro Raum und Nacharbeit pro Punkt erlauben dem Inspector, einen Spiegel zurückzugeben statt einer ganzen Wohnung." },
    ] as Lesson[],
  },

  cta: {
    title: "Probieren Sie es selbst aus",
    sub: "Wechseln Sie im Live-Prototyp zwischen Manager, Reinigungskraft und Inspector, oder lesen Sie das Designsystem.",
    links: [
      { label: "Live-Demo", href: patronimLinks.demo },
      { label: "Designsystem", href: patronimLinks.storybook },
    ],
  },
};

// Deutsche Fassung der Parlo-Case-Study. Gleiche Struktur wie case-parlo.ts.

import type { Fact, Lesson } from "@/content/case-pms";
import type { Target } from "@/content/case-chilicon";
import { dark, doctor, patient, web, type Decision, type Pain, type ParloFlow, type parloBody } from "@/content/case-parlo";

export const parloBodyDe: typeof parloBody = {
  cover: [
    patient("01-search", "Parlo-Startseite: Guten Morgen, Anna, Arzt finden, Suche, beliebte Fachrichtungen", "Suche, in Ihrer Sprache"),
    patient("02-results", "Hausärzte in Kreuzberg: jede Karte zeigt den Arzt, Annas Sprachen und die frühesten buchbaren Zeiten", "Der früheste echte Termin zuerst"),
    patient("12-waitlist-offer", "Push und Karte mit einem früheren Termin: morgen 09:00, noch 29:59 Minuten zum Annehmen", "Ein freier Termin, angeboten"),
  ],

  highlights: [
    { number: "3", label: "Rollen in einem Kalender: Patient, Ärztin, Praxis" },
    { number: "10", label: "gesprochene Sprachen als Suchkriterium, nie als Flaggen" },
    { number: "1 Tipp", label: "um einen abgesagten Termin von der Warteliste zu übernehmen" },
    { number: "0", label: "Anrufe, um einen abgesagten Termin neu zu vergeben" },
  ] as Fact[],

  overview: {
    kicker: "Überblick",
    headline: "Einen freien Termin finden ist gelöst. Eine Ärztin, die einen versteht, nicht.",
    paragraphs: [
      "Arzttermine online buchen ist in Deutschland normal: Filter nach Versicherung, Erinnerungen und Wartelisten sind Standard. Für die vielen Menschen, die nach Berlin gezogen sind, liegt die Schwierigkeit woanders. Ein Besuch hilft nur, wenn die Ärztin Dinge in einer Sprache erklären kann, die man versteht, und genau das behandelt der übliche Buchungsablauf als Fußnote.",
      "2019 war ich Lead Designer eines Marktplatzes für Arzttermine, der Patienten, Ärzte und Kliniken auf einer Plattform zusammenbrachte. Wir haben Patienten und Praxispersonal interviewt und den Buchungsablauf mit ihnen getestet. Was sich bewährt hat, wurde zum Kern dieses Projekts: buchbare Zeiten direkt in den Suchergebnissen, getrennte Bewertungen für Ärztin und Praxis, ein Kalender für die ganze Praxis.",
      "2026 habe ich diese Ideen nach Deutschland gebracht und alles neu gebaut: Marke, Flows, Interface und Designsystem. Mit KI als Partner beim Bauen entstand ein funktionierender Prototyp, in dem drei Rollen einen Kalender teilen und jede Änderung für alle zugleich gilt.",
    ],
  },

  users: {
    headline: "Für wen",
    personas: [
      { name: "Anna, 32", context: "Vor zwei Jahren nach Berlin gezogen. Gesetzlich versichert. Englisch und Russisch, etwas Deutsch. Bucht für sich und ihre Tochter Mia.", need: "Eine Hausärztin, die Englisch spricht, nahe Kreuzberg, diese Woche." },
      { name: "Omar, 41", context: "Ingenieur, gesetzlich versichert, Englisch und Arabisch. Hat einen Facharzttermin in drei Wochen.", need: "Jeden früheren Termin, ohne jeden Morgen in der Praxis anzurufen." },
      { name: "Sabine, Praxismanagerin", context: "Leitet den Empfang für drei Ärzte. Lebt im Kalender und am Telefon.", need: "Weniger Anrufe, keine leeren Stühle nach Absagen, ein Tag, der sagt, was zu tun ist." },
      { name: "Dr. Emre Aydın, Hausarzt", context: "Spricht Deutsch, Türkisch und Englisch. Sieht 15 bis 20 Patienten am Tag.", need: "Wer als Nächstes kommt, warum und in welcher Sprache, bevor die Tür aufgeht." },
    ],
  },

  research: {
    kicker: "Research",
    headline: "Das Buchen war gelöst. Sprache und verlorene Termine nicht.",
    intro:
      "Ich bin von den Ergebnissen unserer Research von 2019 ausgegangen und habe sie am deutschen Kontext geprüft: zwei Versicherungssysteme, Überweisungen, strenge Regeln für Gesundheitsdaten und viele internationale Einwohner. Die Lücken lagen nicht im Buchungsformular, sondern davor und danach.",
    findings: [
      { title: "Die Sprache entscheidet, ob ein Besuch hilft", desc: "Patienten wählen eine Ärztin, mit der sie reden können, doch Sprachen stehen tief im Profil, wenn überhaupt." },
      { title: "Versicherung und Überweisung verwirren Neue", desc: "Gesetzlich oder privat, welcher Facharzt braucht eine Überweisung: Fragen im falschen Moment." },
      { title: "Der früheste Termin versteckt sich im Profil", desc: "Listen sortieren nach Bewertung oder Entfernung; die Zeit, zu der man wirklich kann, kostet drei Tipps und einen Anruf." },
      { title: "Abgesagte Termine bleiben leer", desc: "Jemand sagt um 20 Uhr ab, jemand anderes wartet drei Wochen auf dieselbe Ärztin. Niemand verbindet beides." },
      { title: "Der Empfang lebt am Telefon", desc: "Buchungen, Verschiebungen und Absagen kommen per Telefon, und der Kalender zeigt Status statt Aufgaben." },
      { title: "Ärzte treffen Patienten unvorbereitet", desc: "Den Anlass des Besuchs oder dass jemand lieber Englisch spricht, erfährt die Ärztin erst im Raum." },
    ],
    pains: [
      { role: "Patienten", items: ["Schwer, eine Ärztin zu finden, die meine Sprache spricht und meine Versicherung nimmt", "Der früheste Termin ist versteckt", "Ein frei gewordener Termin bleibt für mich unsichtbar"] },
      { role: "Praxen", items: ["Das Telefon klingelt den ganzen Tag", "Absagen hinterlassen leere Stühle", "No-Shows und Verspätungen sprengen den Tag"] },
      { role: "Ärzte", items: ["Wenig Kontext zum nächsten Patienten", "Planänderungen ziehen sich durch den ganzen Tag"] },
    ] as Pain[],
  },

  define: {
    kicker: "Define",
    goalsTitle: "Ziele",
    goals: [
      { role: "Patienten", items: ["In unter einer Minute eine Ärztin finden, die meine Sprache spricht und meine Versicherung nimmt", "Den frühesten echten Termin bekommen, und einen früheren, wenn einer frei wird"] },
      { role: "Praxen", items: ["Weniger Anrufe für Buchen und Verschieben", "Abgesagte Termine neu vergeben", "Weniger No-Shows"] },
      { role: "Ärzte", items: ["Auf einen Blick wissen, wer als Nächstes kommt und warum"] },
    ] as Pain[],
    principlesTitle: "Prinzipien",
    principles: [
      { title: "Der früheste echte Termin zuerst", body: "In der Ergebnisliste schlägt Zeit die Bewertung. Die Karte bucht mit einem Tipp." },
      { title: "Sprache ist überall sichtbar", body: "Als Wörter und Kürzel, nie als Flaggen: Flaggen sind Länder, keine Sprachen." },
      { title: "Dem Personal sagen, was jetzt zu tun ist", body: "Der Praxistag beginnt mit „Erfordert Aufmerksamkeit“, nicht mit einem Raster aus Links." },
      { title: "Ein Kalender, drei Ansichten", body: "Eine Änderung gilt sofort für Patient, Ärztin und Empfang." },
      { title: "Einwilligung ist ausdrücklich und widerrufbar", body: "Patienten sehen, welche Praxen ihre Daten haben, und können sie zurückziehen." },
    ],
    e2e: {
      headline: "Zuerst habe ich eine Absage durch alle drei Rollen kartiert.",
      body: "Das Szenario, das das Produkt beweist: Anna sagt ab, Omar auf der Warteliste bekommt den Termin, der Empfang greift nie zum Telefon, der Arzt sieht Omars Kurzinfo, und die Praxis zählt einen geretteten Termin mehr. Jeder Screen des Prototyps dient einem Schritt darin.",
      board: {
        src: "/case-parlo/flows/e2e.webp",
        label: "Miro · Hero-Szenario über alle Rollen",
        caption: "Eine Absage wandert von einem Patienten zum nächsten, zum Empfang, zum Arzt und zurück in die Zahlen der Praxis. Seitlich scrollen oder in voller Größe öffnen.",
        alt: "Flow: Patient A sagt Donnerstag 9:00 ab; die Plattform gibt den Termin frei und aktualisiert den Kalender für alle; steht jemand auf der Warteliste, geht das Angebot an den ersten Treffer nach Arzt, Versicherung und Sprache; Patient B bekommt einen Push mit 30 Minuten Zeit; ohne Annahme geht es an die nächste Person, sonst ist Patient B mit einem Tipp gebucht und der alte Termin frei. Der Empfang sieht „Von der Warteliste besetzt“ ohne Anruf; der Arzt sieht den neuen Patienten in „Mein Tag“ mit Kurzinfo; nach dem Besuch bewertet Patient B mit „Spricht meine Sprache“; die Auswertung zählt einen besetzten Termin mehr. Wartet niemand, geht der Termin zurück in die öffentliche Suche.",
      },
    },
  },

  decisions: {
    kicker: "Zentrale Entscheidungen",
    headline: "Sechs Entscheidungen, die das Produkt tragen.",
    items: [
      { title: "Die Karte beginnt mit dem frühesten Termin", why: "Drei buchbare Zeiten auf jedem Ergebnis. Die erste ist koralle: die eine Farbe, die „am frühesten“ bedeutet.", shot: patient("02-results", "Ergebnisse mit drei buchbaren Zeiten pro Arzt, die früheste in Koralle", "Zeiten direkt auf der Karte") },
      { title: "Sprache ist ein gespeicherter Filter, als Wörter", why: "Anna stellt Englisch und Russisch einmal ein. Jede Karte sagt, welche davon die Ärztin spricht.", shot: patient("03-filters", "Filter: Versicherung, Arzt spricht, frühester Termin, Entfernung, Besuchsart", "Filter, als Standard gespeichert") },
      { title: "Für jedes Familienmitglied buchen", why: "Ein Menü statt Tabs: funktioniert für ein Kind oder fünf Angehörige, jeweils mit eigener Versicherung.", shot: patient("07-booking-for-family", "Buchungsschritt mit Menü: Anna Petrova (Sie), Mia Petrova (Kind, 6 Jahre)", "Für Sie oder für Mia") },
      { title: "Einwilligung vor dem ersten Besuch, widerrufbar", why: "Eine neue Praxis sieht nichts, bis der Patient zustimmt, und die Liste der geteilten Daten steht direkt daneben.", shot: patient("08b-booking-consent", "Daten mit der Praxis teilen: was geteilt wird, eine Checkbox, DSGVO-Hinweis", "Was die Praxis sieht") },
      { title: "Ein freier Termin wird angeboten, nicht ausgehängt", why: "Abgeglichen nach Arzt, Versicherung und Sprache, mit 30 Minuten zum Annehmen. Kein Aktualisieren, kein Anrufen.", shot: patient("12-waitlist-offer", "Angebot eines früheren Termins mit Countdown und „Morgen 09:00 übernehmen“", "30 Minuten zum Annehmen") },
      { title: "Die Rückfrage am Vortag lebt in der Karte", why: "„Kommen Sie morgen?“ steht im Termin selbst, mit einem klaren Ja und einem leisen Ausweg.", shot: patient("10-appointments", "Termine: morgen 09:00 mit „Kommen Sie morgen?“, Ich komme, Absagen", "Ein Ja, ein leises Nein") },
    ] as Decision[],
  },

  flows: {
    kicker: "Zentrale Flows",
    headline: "Vier Abläufe, von Anfang bis Ende klickbar.",
    roles: [
      {
        role: "Patient",
        title: "Finden und buchen",
        desc: "Suche nach Fachrichtung, Beschwerde oder Name; Ergebnisse beginnen mit dem frühesten echten Termin; die Buchung hat drei oder vier kurze Schritte, das Konto entsteht im Ablauf, die Einwilligung nur bei einer neuen Praxis.",
        flow: "/case-parlo/flows/patient-book.webp",
        shots: [
          patient("05-doctor-profile", "Arztprofil mit Foto, Bewertung, Tagesauswahl, Zeiten und Sprachen", "Jeder Tag, jede Zeit"),
          patient("06-booking-who", "Buchungsschritt 1: für wen und welche Besuchsart", "Wer und welche Art"),
          patient("09-booked", "Gebucht: morgen 10:00, in den Kalender, Route", "Gebucht, mit nächsten Schritten"),
        ],
      },
      {
        role: "Patient",
        title: "Verwalten, warten, bewerten",
        desc: "Verschieben oder absagen ohne Anruf; auf die Warteliste für einen früheren Termin; am Vortag bestätigen, Verspätung melden, einchecken; danach Ärztin und Praxis getrennt bewerten, mit Gründen als Chips.",
        flow: "/case-parlo/flows/patient-manage.webp",
        shots: [
          patient("11-appointment", "Termindetail: Zeit ändern, früheren Termin bekommen, Ort, Anlass, absagen", "Alles zu einem Besuch"),
          patient("13-review", "Besuch bewerten: Sterne für Arzt und Praxis, Gründe wie „Spricht meine Sprache“", "Zwei Bewertungen, echte Gründe"),
          patient("14-family", "Familie: Anna und Mia mit Versicherung und Sprachen, Für Mia buchen", "Ein Haushalt, ein Konto"),
        ],
      },
      {
        role: "Arzt",
        title: "Mein Tag",
        desc: "Der nächste Patient oben mit Zeit, Sprachen und Anlass; eine Kurzinfo vor dem Besuch; starten, abschließen, Folgetermin anstoßen. Verschiebt sich der Tag, informiert ein Tipp den Empfang und die Wartenden.",
        flow: "/case-parlo/flows/doctor.webp",
        shots: [
          doctor("01-my-day", "Mein Tag: nächste Patientin Ines Vogel mit Sprachen und Anlass, darunter der Tagesplan", "Wer kommt, und warum"),
          doctor("02-patient-brief", "Kurzinfo: Omar Khalil, Erstbesuch, von der Warteliste, Sie sprechen beide Englisch", "Die Kurzinfo vor der Tür"),
          doctor("04-schedule-conflict", "Planung: geblockte Zeit mit 5 betroffenen Patienten, der Empfang verschiebt sie", "Zeit blocken, sicher"),
        ],
      },
      {
        role: "Praxis",
        title: "Den Tag führen",
        desc: "„Heute“ beginnt mit dem, was Aufmerksamkeit braucht: Anfragen, geblockte Zeiten, Verspätungen. Der Kalender zeigt alle Ärzte nebeneinander; Telefonbuchungen brauchen drei Felder; Verschieben benachrichtigt die Patienten im selben Schritt.",
        flow: "/case-parlo/flows/staff.webp",
        web: true,
        shots: [
          web("staff", "01-today", "Praxis „Heute“: Erfordert Aufmerksamkeit mit vier Karten, Zähler und der Tag für drei Ärzte", "Heute: was jetzt zu tun ist"),
          web("staff", "02-calendar-filled", "Kalender mit Omar Khalils 09:00, markiert als von der Warteliste besetzt", "Von der Warteliste, ohne Anruf"),
          web("staff", "03-phone-booking", "Telefonbuchung: bestehender oder neuer Patient, Arzt, Datum, Besuchsart", "Eine Telefonbuchung in drei Feldern"),
          web("staff", "04-conflict", "Konflikt lösen: drei Patienten mit neuen Zeiten, „3 verschieben und benachrichtigen“", "Verschieben und informieren, auf einmal"),
        ],
      },
    ] as ParloFlow[],
    more: {
      title: "Ebenfalls kartiert und gebaut",
      items: [
        { title: "Onboarding der Praxis", body: "Registrierung, Verifizierung, Leistungen, Ärzte einladen, eine Checkliste bis die Praxis in der Suche live ist.", flow: "/case-parlo/flows/onboarding.webp" },
        { title: "Patientenkonto", body: "Versicherung, Familie, Sprachen als Standardfilter, Benachrichtigungen, Datenschutz mit Download und Löschen.", flow: "/case-parlo/flows/account.webp" },
      ],
    },
  },

  practice: {
    kicker: "Die Praxis",
    headline: "Derselbe Kalender, vom Empfang aus gesehen.",
    shots: [
      web("staff", "08-insights", "Auswertung: 7 Termine diese Woche von der Warteliste besetzt, No-Show-Quote, Auslastung, neue Patienten nach Sprache, Bewertungen", "Auswertung: Nachbesetzung, No-Shows, Sprachen"),
      web("staff", "06-doctors-services", "Ärzte und Leistungen: Sprachen, Besuchsarten, Versicherungsregeln, nimmt neue Patienten", "Ärzte, Leistungen, Sprachen"),
      web("staff", "07-team", "Team und Rollen: was Praxismanagement, Empfang und Ärzte dürfen", "Rollen und Rechte"),
      web("staff", "09-reviews", "Bewertungen mit Grund-Chips und öffentlichen Antworten", "Bewertungen mit Gründen"),
    ],
  },

  states: {
    kicker: "Schwierige Zustände",
    headline: "Die Screens, die niemand plant, geplant.",
    shots: [
      patient("17-no-match", "Kein Arzt passt zu allen Filtern, mit der nächsten Lösung: Ärzte mit Englisch im Umkreis von 3 km zeigen", "Kein Treffer: die nächste Lösung"),
      patient("19-offline", "Offline: gespeicherte Termine bleiben sichtbar, Buchen geht wieder, sobald man online ist", "Offline, trotzdem nützlich"),
      patient("20-search-de", "Die Startseite auf Deutsch: Guten Morgen, Anna, Arzt finden", "Deutsch, gleichwertig"),
      patient("21-results-de", "Ergebnisse auf Deutsch: Hausärzte, Frühester Termin, Spricht Englisch", "Lange Wörter, kein Überlauf"),
    ],
  },

  system: {
    kicker: "Designsystem",
    headline: "Eine Token-Datei steuert App, Web und Storybook.",
    body: "Markengrün für das Eigene, Ausgewählte und die Navigation; Koralle, aus dem Punkt im Logo, nur für „am frühesten“; alles andere bleibt Tinte und Grau, damit Farbe ihre Bedeutung behält. iOS-Schriftskala mit Inter, Instrument Sans für die Wortmarke. 35 Komponenten und Patterns leben in Storybook, zusammen mit den echten Screens, aus denen sie stammen.",
    bullets: [
      "Sprachen als Kürzel und Namen, nie als Flaggen",
      "Status immer mit Icon und Text, nie nur mit Farbe",
      "Text-Tokens für jede Statusfarbe, damit Text in Hell und Dunkel WCAG AA erfüllt",
      "Eine Icongröße pro Rolle in einer Zeile, 44-Punkt-Touch-Ziele, tabellarische Ziffern für Zeiten",
    ],
    brand: {
      mark: "/case-parlo/brand/logo-mark.svg",
      appIcon: "/case-parlo/brand/app-icon.webp",
      iconCaption: "App-Icon: das Zeichen auf Weiß, ruhig zwischen bunten Gesundheits-Apps und auch klein gut lesbar.",
      caption: "Das Parlo-Zeichen: ein „p“, dessen Innenraum eine Sprechblase ist, mit einem Korallpunkt. Reden ist das Produkt.",
      palette: [
        { name: "Parlo-Grün", hex: "#0F6B5C", role: "Marke, Auswahl, Navigation, der Kopf der Startseite", fromLogo: true },
        { name: "Koralle", hex: "#E4704F", role: "Der früheste Termin. Sonst ist nichts koralle", fromLogo: true },
        { name: "Bestätigt", hex: "#1E7F4B", role: "Status: bestätigt, erledigt, alles gut", fromLogo: false },
        { name: "Wartend", hex: "#B8740A", role: "Status: angefragt, verspätet", fromLogo: false },
        { name: "Angebot", hex: "#2D62B8", role: "Wartelisten-Angebote und Hinweise", fromLogo: false },
      ],
    },
    storybook: [
      web("storybook", "01-colors", "Storybook: Farb-Tokens mit Live-Kontrastprüfung nach WCAG", "Tokens mit Live-Kontrastprüfung"),
      web("storybook", "04-doctor-result-card", "Storybook: das Pattern DoctorResultCard mit Controls", "Patterns mit echten Daten"),
      web("storybook", "06-calendar-grid", "Storybook: das Pattern CalendarGrid mit allen Terminstatus", "Der Praxiskalender als Pattern"),
      web("storybook", "07-appointment-card", "Storybook: AppointmentCard mit der Rückfrage am Vortag", "Jeder Zustand einer Komponente"),
    ],
    darkShots: [
      dark("01-search", "Startseite im dunklen Theme", "Start, dunkel"),
      dark("02-results", "Ergebnisse im dunklen Theme", "Ergebnisse, dunkel"),
      dark("05-doctor-profile", "Arztprofil im dunklen Theme", "Profil, dunkel"),
      dark("10-appointments", "Termine im dunklen Theme", "Termine, dunkel"),
    ],
  },

  validation: {
    kicker: "Validierung",
    headline: "Wie ich es geprüft habe.",
    intro: "Der Prototyp ist die Spezifikation, also habe ich den Prototyp getestet, nicht die Mockups.",
    items: [
      { title: "Das Hero-Szenario, durchgehend", body: "Über alle drei Rollen ab frischem Laden durchgeklickt: Absage, Angebot, Annahme, von der Warteliste besetzt, Kurzinfo, Besuch, Bewertung, Auswertung. Der Zustand ist geteilt, zwischen den Screens wird nichts vorgetäuscht." },
      { title: "Jeder Sonderfall per Link", body: "13 Szenarien öffnen direkt über eine URL: Angebot, besetzt, Verspätung, Konflikt, kein Treffer, offline, Onboarding, leer. Reviews und Demos starten jedes Mal im selben Zustand." },
      { title: "Kontrast in Hell und Dunkel", body: "Farb-Tokens sind in beiden Themes gegen WCAG 2.1 AA geprüft; Statusfarben haben eigene Text-Tokens, wo die Fläche für Text zu hell war." },
      { title: "Deutsch auf jedem Screen", body: "Jeder Screen auf Deutsch auf Überlauf und Abschneiden geprüft. Lange Komposita und längere Labels haben mehrere Layouts geformt." },
    ],
  },

  outcome: {
    kicker: "Ergebnis",
    headline: "Was heute existiert.",
    facts: [
      { number: "3", label: "Rollen in einem klickbaren Szenario, mit einem gemeinsamen Kalender" },
      { number: "30+", label: "Screens auf Smartphone und Web, in Hell und Dunkel" },
      { number: "35", label: "Komponenten und Patterns, dokumentiert in Storybook" },
      { number: "13", label: "Szenarien, per Link erreichbar" },
      { number: "2", label: "Oberflächensprachen: Englisch und Deutsch" },
      { number: "42", label: "Screens, für diese Case Study automatisch aus dem Prototyp aufgenommen" },
    ] as Fact[],
    measure: {
      title: "Woran wir merken, dass es funktioniert",
      intro: "Ziele, die mit Pilotpraxen für den Start festgelegt werden, keine Ergebnisse.",
      targets: [
        { metric: "Zeit von der Suche bis zum gebuchten Termin", target: "< 2 Min.", why: "Der früheste Termin auf der Karte und Buchen ohne separate Registrierung sollten das schnell machen" },
        { metric: "Abgesagte Termine, von der Warteliste neu besetzt", target: "50 %", why: "Passende Angebote mit 30 Minuten Zeit statt eines leeren Stuhls" },
        { metric: "Buchungen und Verschiebungen ohne Anruf", target: "70 %", why: "Telefonzeit ist der größte Aufwand am Empfang" },
        { metric: "No-Show-Quote", target: "−30 %", why: "Rückfrage am Vortag, Verspätung melden und Check-in in derselben App" },
        { metric: "Bewertungen mit „Spricht meine Sprache“", target: "Erfasst", why: "Das Versprechen des Produkts, gemessen in den Worten der Patienten" },
      ] as Target[],
    },
  },

  lessons: {
    kicker: "Erkenntnisse",
    headline: "Drei Dinge, die mich dieses Projekt gelehrt hat.",
    blocks: [
      { title: "Sprache ist ein Feature, kein Filter", body: "Sobald die Sprache auf jeder Karte stand, abgeglichen mit dem Patienten, konnte der Rest des Ablaufs gewöhnlich bleiben. Ein Merkmal, überall gezeigt, hat das Produkt verändert." },
      { title: "Die Übergaben gestalten, nicht die Screens", body: "Am schwierigsten war der Raum zwischen den Rollen: eine Absage, die zum Termin von jemand anderem wird, ohne dass irgendwer irgendwen anruft." },
      { title: "KI hat die Arbeit vom Bild zum Verhalten verschoben", body: "Mit KI zu bauen hieß, Timing, geteilten Zustand und Sonderfälle zu testen, statt sie zu beschreiben. Die Frage wurde von „sieht es richtig aus“ zu „verhält es sich richtig“." },
    ] as Lesson[],
  },

  cta: {
    title: "Selbst ausprobieren",
    sub: "Im Live-Prototyp zwischen Patient, Arzt und Praxis wechseln, das Wartelisten-Szenario durchspielen oder das Designsystem lesen.",
  },
};

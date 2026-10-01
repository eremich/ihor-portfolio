// Deutsche Fassung der Chilicon-Power-Case-Study. Gleiche Struktur wie case-chilicon.ts.

import type { Fact, Lesson } from "@/content/case-pms";
import type { PhonePair, RoleFlow } from "@/content/case-patronim";
import { after, dark, v1, chiliconLinks, type chiliconBody, type Target } from "@/content/case-chilicon";

export const chiliconBodyDe: typeof chiliconBody = {
  cover: [
    after("05-home-ok", "Startseite: alle 24 Module liefern Strom, ein live gezeichneter Energiefluss als Haus und die Zahlen von heute", "Hausbesitzer: zuerst die Antwort"),
    after("13-panel-detail-cause", "Moduldetail: Modul 7 liefert 40 % weniger, mit der wahrscheinlichen Ursache und dem nächsten Schritt", "Ein Problem, mit Ursache"),
    after("16-installer-sites", "Anlagenliste des Installateurs: eine offline, zwei mit Problemen, siebzehn in Ordnung", "Installateur: Probleme zuerst"),
  ],

  highlights: [
    { number: "1 s", label: "bis klar ist, dass die Anlage in Ordnung ist: die Statuskarte steht ganz oben" },
    { number: "2", label: "Rollen in einer App, ein Datenmodell" },
    { number: "0", label: "Codes, die beim Einrichten getippt werden müssen: einfach das Gateway scannen" },
    { number: "AA", label: "Kontrast in Hell und Dunkel, 0 axe-Verstöße" },
  ] as Fact[],

  overview: {
    kicker: "Überblick",
    headline: "Die Daten sagten Ingenieuren alles. Hausbesitzern sagten sie nichts.",
    paragraphs: [
      "Chilicon Power, 2009 in Südkalifornien gegründet und seit 2021 Teil von Generac, baut Mikrowechselrichter: kleine Geräte hinter den Solarmodulen. Der CP-720 versorgt zwei Module gleichzeitig, sodass ein Dach den Ertrag für jedes Paar meldet und nicht nur eine Gesamtsumme. So lässt sich ein einzelnes defektes Modul auf einem Dach mit vierundzwanzig erkennen.",
      "All das steckte in einem Desktop-Dashboard für Ingenieure: Messuhren, Heatmaps, Liniendiagramme pro Gerät. Die Garantie hängt davon ab, dass die Anlage verbunden bleibt, doch Besitzer hatten keinen Grund, ein Werkzeug zu öffnen, das ihre Frage nie beantwortete.",
      "2021 war ich der einzige UX/UI-Designer in einem sechsköpfigen Team, das das Monitoring erstmals aufs Handy brachte. 2026 habe ich diese App auditiert, um eine einzige Frage herum neu gestaltet – ist meine Anlage in Ordnung? – und mit KI als funktionierenden Prototyp für Hausbesitzer und Installateure gebaut.",
    ],
  },

  users: {
    kicker: "Für wen",
    headline: "Zwei Menschen schauen aus unterschiedlichen Gründen auf dasselbe Dach.",
    personas: [
      { name: "Hausbesitzer", context: "Schaut höchstens einmal täglich nach, öfter direkt nach der Installation oder wenn die Rechnung kommt. Weiß nicht, was ein Mikrowechselrichter ist.", need: "Die Beruhigung, dass alles läuft, den Beleg, was die Anlage spart, und einen Hinweis nur dann, wenn etwas zu tun ist." },
      { name: "Installateur", context: "Betreut Dutzende Anlagen, oft unterwegs. Nimmt neue Anlagen in Betrieb und steht dabei mit dem Handy in der Einfahrt.", need: "Probleme zuerst, nach Dringlichkeit sortiert, mit genug Details, um sie aus der Ferne zu beheben, bevor ein Wagen ausrückt." },
    ],
  },

  audit: {
    kicker: "Research",
    headline: "Unsere App von 2021 hat das Dashboard aufs Handy gebracht. Die Frage hat sie nie beantwortet.",
    intro:
      "Ich bin zu unseren Screens von 2021 und dem Desktop-Dashboard, aus dem sie stammen, zurückgekehrt und habe sie daran gemessen, was ein Besitzer und ein Installateur tatsächlich wissen müssen.",
    findings: [
      { title: "Keine Antwort auf „Läuft sie?“", desc: "Die Startseite zeigte die aktuelle Leistung in kleinen Beschriftungen, aber nicht, ob die Anlage in Ordnung ist, was sie heute erzeugt oder gespart hat." },
      { title: "Live und veraltet sahen gleich aus", desc: "Das „Letzte Aktualisierung“ des Desktops ging verloren, sodass niemand erkennen konnte, ob die Zahlen aktuell waren." },
      { title: "Der Fluss hatte keine Richtung", desc: "Netz-, Haus- und Solarknoten, aber kein Netzwert und kein Pfeil: Ob eingespeist oder bezogen wurde, blieb Raten." },
      { title: "Daten pro Modul blieben auf dem Desktop", desc: "Der Grund, warum es Mikrowechselrichter gibt – jedes Modul einzeln zu sehen –, wurde nie für mobil gestaltet." },
      { title: "Einrichten hieß Codes abtippen", desc: "Gateway-IDs und Authentifizierungscodes von Hand eingegeben, dazu vier getrennte Standortauswahlen." },
      { title: "Diagramme, die in die Irre führten", desc: "Energiesummen als Linien gezeichnet, eine „Monat“-Ansicht, die eine Woche zeigte, Einheiten als „Kw“ geschrieben, graue Hauptbuttons, die deaktiviert wirkten." },
    ],
  },

  define: {
    kicker: "Define",
    idea: {
      headline: "Erst die Antwort, Details auf Wunsch.",
      body: "Jeder Screen beginnt mit einem Satz, dann kommen Zahlen, dann Diagramme. Die Startseite sagt „Alle 24 Module liefern Strom · Aktualisiert vor 2 Min.“, bevor irgendetwas anderes kommt. Die Dachkarte zeigt, welches Paar schwächelt, ohne dass man ein Diagramm lesen muss, und das Detail eines Moduls nennt die wahrscheinliche Ursache und den nächsten Schritt.",
      shots: [
        after("05-home-ok", "Startseite mit der Statuskarte zuerst und dem Energiefluss darunter", "Erst ein Satz, dann Zahlen"),
        after("12-panels-roof", "Dachkarte: Module nach Ertrag eingefärbt, Modul 7 heller mit Warnzeichen", "Das Dach als Gesundheitsansicht"),
        after("13-panel-detail-cause", "Detail von Modul 7 mit Ursachenkarte: Mikrowechselrichter meldet sich nicht", "Ursache und nächster Schritt"),
      ],
    },
    e2e: {
      headline: "Ich habe den Störfall gezeichnet, bevor ich die Screens gestaltet habe.",
      body: "Ein schwaches Modul betrifft beide Rollen. Der Flow zeigt die drei wahrscheinlichen Ursachen, wann ein Besitzer informiert wird und wo der Installateur übernimmt – auch bei Besitzern ohne verknüpften Installateur.",
      board: {
        src: "/case-chilicon/flows/e2e.webp",
        label: "Miro · Modulproblem, vom Alarm bis zur Lösung",
        caption: "Das Szenario, das sich im Prototyp von Anfang bis Ende durchklicken lässt: Modul 7 bricht ein, der Besitzer meldet es, der Installateur startet den Mikrowechselrichter aus der Ferne neu und schließt den Fall ab, der Besitzer sieht wieder alle Module in Ordnung. Seitlich scrollen oder in voller Größe öffnen.",
        alt: "Flow: Eine Push-Nachricht meldet, dass Modul 7 40 % weniger als seine Nachbarn liefert; der Besitzer öffnet das Moduldetail; wahrscheinliche Ursache ist Schatten oder Schmutz (Tipps und eine Erinnerung in 3 Tagen), Wetter (ganze Anlage niedrig, keine Aktion, erledigt) oder das Gerät (Mikrowechselrichter meldet sich nicht). Beim Gerät kontaktiert der Besitzer den verknüpften Installateur mit einem Bericht, andernfalls sucht er einen zertifizierten Installateur in der Nähe. Der Installateur sieht den Alarm und die technische Ansicht und startet das Gerät neu oder kommt vorbei. Ist der Ertrag wieder normal, wird der Fall mit einer Notiz abgeschlossen und der Besitzer sieht alle Module in Ordnung; andernfalls geht es zurück zum Installateur.",
      },
    },
    alerts: {
      headline: "Nur warnen, wenn es etwas zu tun gibt.",
      body: "Ein bewölkter Tag ist kein Alarm. Ein verstummter Mikrowechselrichter schon. Ich habe festgehalten, wie jede Situation in den Daten aussieht und was jede Rolle sehen soll, damit die App nie falschen Alarm schlägt.",
      highlight: "Was der Besitzer sieht",
      columns: ["", "Nacht", "Bewölkter Tag", "Schatten oder Schmutz", "Verstummter Mikrowechselrichter", "Gateway offline"],
      rows: [
        ["In den Daten", "Kein Ertrag, die Sonne ist weg", "Alle Module gleich niedrig", "Ein Modul niedrig, meist nachmittags", "Ein Gerät fällt aus", "Gar keine Daten"],
        ["App von 2021", "Zahlen fallen auf null, ohne Grund", "Sieht nach einer Störung aus", "Wochenlang unbemerkt", "Nur auf dem Desktop sichtbar", "Veraltete Zahlen, kein Zeitstempel"],
        ["Was der Besitzer sieht", "„Nacht. Die Module starten gegen 6:12 Uhr“", "„Bewölkter Tag. Nichts zu beheben“", "Wahrscheinlich Schatten oder Schmutz, 3 Schritte, Erinnerung", "Meldet sich nicht, Installateur kontaktieren", "Was zu prüfen ist: Strom, WLAN, erneut versuchen"],
        ["Installateur", "Nichts", "Nichts", "Alarm mit der wahrscheinlichen Ursache", "Alarm, markiert, wenn der Besitzer ihn gemeldet hat; Neustart aus der Ferne", "Offline-Anlage ganz oben; Vor-Ort-Termin"],
        ["Push-Benachrichtigung", "Nein", "Nein", "Ja, einmalig", "Ja", "Ja, nach einer Stunde"],
      ],
    },
  },

  compare: {
    kicker: "Vorher und nachher",
    headline: "Jede Erkenntnis, neben dem, was sie ersetzt hat.",
    pairs: [
      {
        finding: "Die Startseite zeigte Zahlen, nie eine Antwort",
        fix: "Eine Statuskarte steht zuerst, mit der Aktualität der Daten. Der Energiefluss wurde zu einem Haus mit Wert und Richtung an jeder Linie: „Einspeisung 1,6 kW“, Batterie „Lädt“.",
        before: v1("home", "Unsere Startseite von 2021 mit markierter Hausbeschriftung, Netzknoten und Diagramm", "① „0,5 Kw“: winzig, falsche Einheit, kein Status ② Netz ohne Wert oder Richtung ③ keine Angabe zur Aktualisierung"),
        after: [
          after("05-home-ok", "Die Startseite 2026: Statuskarte, Energiefluss als Haus, Zahlen von heute", "Erst die Antwort, dann der Fluss"),
          after("07-home-issue", "Die Startseite 2026, wenn Modul 7 40 % weniger liefert", "Dieselbe Karte bei einem schwachen Modul"),
        ],
      },
      {
        finding: "Diagramme sahen richtig aus und waren es nicht",
        fix: "Energiesummen sind Balken in kWh, Leistung ist eine Kurve in kW, nie vermischt. Der laufende Zeitraum ist schraffiert, und ein Tipp auf einen Balken öffnet die genauen Werte samt Wetter des Tages.",
        before: v1("month", "Unsere Monatsansicht von 2021 mit markiertem Monats-Tab, Achse und Liniendiagramm", "① „Monat“ ausgewählt ② die Achse zeigt eine Woche ③ Energiesummen als Linie gezeichnet"),
        after: [
          after("10-energy-month", "Die Monatsansicht 2026 mit Tagesbalken, erzeugt und verbraucht", "Ein echter Monat, in Balken"),
          after("11-energy-bar-sheet", "Das Balkendetail 2026 mit erzeugt, verbraucht, eingespeist und gespart", "Tipp auf einen Balken für exakte Werte"),
        ],
      },
      {
        finding: "Einrichten hieß Codes abtippen",
        fix: "Den QR-Code am Gateway scannen; die manuelle Eingabe ist der Ausweg, mit gezeichnetem Aufkleber und hervorgehobener Zeile, die gerade getippt wird. Eine Adresssuche ersetzt vier Auswahlfelder.",
        before: v1("setup", "Unser Formular für eine neue Installation von 2021 mit markierten Standortauswahlen, Gateway-Codes und grauem Button", "① vier Standortauswahlen ② Gateway-ID und Code von Hand getippt ③ ein grauer Hauptbutton, der deaktiviert wirkt", 1887),
        after: [
          after("02-scan-qr", "Der Gateway-Scan 2026 mit Kamerasucher", "Das Gateway scannen"),
          after("03-manual-code", "Die manuelle Eingabe 2026 mit Aufkleber und hervorgehobener Codezeile", "Ausweg: vom Aufkleber abtippen"),
        ],
      },
      {
        finding: "Die Registrierung versteckte, was zählte",
        fix: "Echte Beschriftungen, Passwortregeln, die beim Tippen abgehakt werden, und die Rolle als erste echte Entscheidung, weil sie die ganze App bestimmt.",
        before: v1("signup", "Unser Registrierungsformular von 2021 mit markierten Feldern, Rollen-Checkboxen und Registrieren-Button", "① „Platzhalter“ statt eines Hinweises ② die Rolle als kleine Checkboxen ganz unten ③ ein grauer Registrieren-Button", 2338),
        after: [
          after("21-signup", "Die Registrierung 2026 mit Beschriftungen und Passwortregeln", "Regeln, die beim Tippen abgehakt werden"),
          after("22-who-are-you", "Die Rollenwahl 2026: Hausbesitzer oder Installateur", "Die Rolle, zuerst und klar"),
        ],
      },
    ] as PhonePair[],
  },

  flows: {
    kicker: "Zentrale Flows",
    headline: "Zwei Rollen und eine Einrichtung, von Anfang bis Ende durchgeklickt.",
    roles: [
      {
        role: "Hausbesitzer",
        title: "Nachsehen, verstehen, handeln",
        desc: "Die Startseite antwortet in einer Sekunde; Energie erklärt jeden Tag, jede Woche, jeden Monat und jedes Jahr; Module zeigt das Dach. Die Ersparnis nutzt den eigenen Tarif und die eigene Einspeisevergütung des Besitzers und fragt danach nur dort, wo die Zahl sie braucht.",
        flow: "/case-chilicon/flows/owner.webp",
        flowAlt: "Flow des Hausbesitzers: Startseite öffnen; Anlage wechseln, falls es mehrere gibt; Statuskarte; wenn nicht in Ordnung, weiter zum Flow „Modulproblem“, sonst die Zahlen von heute und der Live-Energiefluss; von dort Energie mit Balken für Tag, Woche, Monat und Jahr, Tipp auf einen Balken für exakte Werte, einen Monatsbericht teilen; oder Module mit der Dachkarte und dem Detail eines Moduls im Vergleich zu seinen Nachbarn.",
        shots: [
          after("09-energy-day", "Energie pro Stunde mit Balken für erzeugt und verbraucht", "Energie, stundenweise"),
          after("14-contact-installer", "Bericht an den Installateur mit angehängtem Modul, Geräte-ID und Diagramm", "Melden mit einem Tipp"),
          after("20-home-resolved", "Startseite nach der Lösung: alle 24 Module liefern Strom", "Behoben, und das wird gesagt"),
        ],
      },
      {
        role: "Installateur",
        title: "Erst die Flotte, Fehler aus der Ferne beheben",
        desc: "Anlagen nach Status sortiert, Alarme über die ganze Flotte und eine technische Ansicht pro Anlage. Ein Gerät neu starten oder die Firmware aktualisieren, direkt vom Handy; einen Vor-Ort-Termin planen, wenn das Gateway offline ist; mit einer Notiz abschließen, die der Besitzer liest.",
        flow: "/case-chilicon/flows/installer.webp",
        flowAlt: "Flow des Installateurs: Anlagen öffnen, nach Status sortiert; suchen und filtern; eine Anlage mit Besitzer- und technischer Ansicht öffnen; Liste der Mikrowechselrichter; Gerätediagramm im Vergleich zum Dachdurchschnitt; wenn eine Behebung aus der Ferne möglich ist, neu starten oder Firmware aktualisieren, sonst einen Termin planen; mit einer Notiz abschließen. Getrennt davon: eine Anlage hinzufügen, das Gateway scannen, das Dach abbilden und den Besitzer einladen.",
        shots: [
          after("17-installer-alerts", "Alarme über die Flotte mit einer Besitzermeldung ganz oben", "Besitzermeldungen kommen markiert an"),
          after("18-installer-technical", "Technische Ansicht: Firmware-Update und Mikrowechselrichter, der schwache zuerst", "Jeder Mikrowechselrichter"),
          after("19-installer-restart", "Ein Mikrowechselrichter wird aus der Ferne neu gestartet, mit Fortschritt", "Neustart, ohne Anfahrt"),
        ],
      },
      {
        role: "Einrichtung",
        title: "Vom Karton bis zu den ersten Zahlen",
        desc: "Registrieren, Rolle wählen, Gateway scannen, Adresse und Größe bestätigen, verbinden. Ist das Gateway nicht erreichbar, listet die App auf, was zu prüfen ist, statt zu scheitern. Eingeladene Besitzer überspringen alles davon.",
        flow: "/case-chilicon/flows/onboarding.webp",
        flowAlt: "Flow der Einrichtung: App öffnen; anmelden oder registrieren; Hausbesitzer oder Installateur wählen; E-Mail bestätigen; neue oder eingeladene Anlage; den QR-Code des Gateways scannen oder den Code manuell eingeben, wenn die Kamera verweigert wird; Adresse; Größe und Batterie vom Gateway vorbelegt; ist das Gateway online, auf die ersten Daten warten, sonst prüfen und erneut versuchen; Startseite. Eingeladene Besitzer nehmen die Einladung an und gehen direkt zur Startseite.",
        shots: [
          after("01-welcome", "Willkommen: jedes Modul sehen, jeden Tag", "Willkommen"),
          after("04-connecting-offline", "Verbindung fehlgeschlagen, mit drei Dingen zum Prüfen und „Erneut versuchen“", "Offline: was zu prüfen ist"),
          after("30-invite", "Einladung vom Installateur mit den Anlagendetails", "Oder einfach die Einladung annehmen"),
        ],
      },
    ] as RoleFlow[],
  },

  states: {
    kicker: "Schwierige Zustände",
    headline: "Meistens lautet die richtige Antwort: „Nichts zu tun“.",
    shots: [
      after("08-home-night", "Startseite bei Nacht: Die Module starten gegen 6:12 Uhr, Betrieb mit Batterie", "Nacht, mit Batterie"),
      after("23-home-cloudy", "Startseite an einem bewölkten Tag: niedriger Ertrag, nichts zu beheben", "Bewölkt: kein Alarm"),
      after("24-home-offline", "Startseite mit Gateway offline seit 9:14 Uhr", "Offline: seit wann, was zu prüfen ist"),
      after("25-home-first-data", "Startseite direkt nach der Einrichtung, wartet auf die ersten Daten", "Die ersten Daten sind unterwegs"),
    ],
  },

  system: {
    kicker: "Designsystem",
    headline: "Ein System aus dem Logo entwickelt, in Hell und Dunkel.",
    body: "Das Sonnenorange des Logos steht für die Marke und die Solarenergie; sein Blattgrün bedeutet „alles gut“. Batterie ist blau und das Netz violett, und diese vier Energiefarben tauschen nie ihre Bedeutung. SF Pro, iOS-Large-Titles, die einklappen, eine schwebende Tab-Leiste. Die Tokens liegen in einer Datei und steuern die App und Storybook, wo jede Komponente und jeder echte Screen dokumentiert ist.",
    bullets: [
      "Einheiten sind heilig: kW für Leistung, kWh für Energie, nie vermischt",
      "Status ist immer Icon und Worte, nie nur Farbe",
      "Das dunkle Theme ist fast schwarz und neutral; Farbe kommt nur von Energie und Status",
      "Jede Zahl ist tabellarisch gesetzt; Touch-Ziele sind 44 Punkte groß",
    ],
    brand: {
      mark: "/case-chilicon/brand/logo-mark.svg",
      wordmark: "/case-chilicon/brand/logo-wordmark.svg",
      caption: "Das Chilicon-Power-Logo: eine Sonne über einem Blatt. Seine zwei Farben wurden zu den beiden Ankern der Palette.",
      palette: [
        { name: "Sonne", hex: "#FBAB16", role: "Marke und Solarenergie: Hauptbuttons, Ertragsbalken, der Fluss vom Dach", fromLogo: true },
        { name: "Blatt", hex: "#00AA79", role: "Status in Ordnung: „Alle 24 Module liefern Strom“", fromLogo: true },
        { name: "Batterie", hex: "#1E7FC2", role: "Laden und Entladen der Batterie. Blau, damit es nie wie das grüne „In Ordnung“ wirkt", fromLogo: false },
        { name: "Netz", hex: "#6B6FD6", role: "Netzbezug und Einspeisung", fromLogo: false },
      ],
    },
    shots: [
      dark("05-home-ok", "Startseite im dunklen Theme", "Startseite, dunkel"),
      dark("12-panels-roof", "Dachkarte im dunklen Theme", "Module, dunkel"),
      dark("16-installer-sites", "Anlagen des Installateurs im dunklen Theme", "Anlagen, dunkel"),
      dark("19-installer-restart", "Gerätneustart im dunklen Theme", "Neustart, dunkel"),
    ],
  },

  outcome: {
    kicker: "Ergebnis",
    headline: "Was es heute gibt.",
    facts: [
      { number: "2", label: "Rollen, verbunden in einem durchklickbaren Szenario vom Fehler bis zur Lösung" },
      { number: "29", label: "Screens, von der Registrierung bis zum Neustart aus der Ferne, in Hell und Dunkel" },
      { number: "45", label: "Komponenten in Storybook dokumentiert, dazu jeder echte Screen" },
      { number: "10", label: "per Link erreichbare Szenarien: Nacht, offline, keine Batterie, kein Tarif und mehr" },
      { number: "102", label: "automatisierte Prüfungen jedes Szenarios auf jedem Screen, 0 Probleme" },
      { number: "0", label: "WCAG-2.1-AA-Verstöße (axe) in 28 Screen-Prüfungen" },
    ] as Fact[],
    measure: {
      title: "Woran wir erkennen, dass es funktioniert",
      intro: "Ziele, die wir zum Launch mit dem Team festlegen würden, keine Ergebnisse.",
      targets: [
        { metric: "Besitzer, die die Einrichtung ohne Support abschließen", target: "80 %", why: "QR-Scan und ein klarer Offline-Weg sollten die meisten Support-Anrufe bei der Einrichtung überflüssig machen" },
        { metric: "Zeit von einem Modulfehler bis zur Aktion von Besitzer oder Installateur", target: "Unter 24 Stunden", why: "Heute kann ein schwaches Modul wochenlang unbemerkt bleiben" },
        { metric: "Support-Anfragen pro 100 Anlagen", target: "−30 %", why: "Einrichtung und „Ist das normal?“ sind die üblichen Fragen" },
        { metric: "Vom Installateur aus der Ferne gelöste Probleme", target: "1 von 2", why: "Neustart und Firmware vom Handy ersparen eine Anfahrt" },
        { metric: "Besitzer, die mindestens wöchentlich nachsehen", target: "60 %", why: "Eine gesunde App wird geprüft, nicht angestarrt, und das Monitoring erhält die Garantie" },
      ] as Target[],
    },
  },

  lessons: {
    kicker: "Wichtigste Erkenntnisse",
    headline: "Drei Dinge, die mir dieses Projekt beigebracht hat.",
    blocks: [
      { title: "Eine Antwort schlägt eine Messuhr", body: "Die Daten waren immer da. Ein Satz darüber, „Alle 24 Module liefern Strom, aktualisiert vor 2 Min.“, hat mehr bewirkt als jedes Diagramm." },
      { title: "Stille ist ein Feature", body: "Aufzuschreiben, wann nicht gewarnt wird, bei Nacht und Wolken, war ebenso wichtig wie die Alarme selbst. Vertrauen entsteht, wenn man nicht falschen Alarm schlägt." },
      { title: "Ein Modell, zwei Blickwinkel", body: "Besitzer und Installateure sehen dasselbe Dach. Besitzer bekommen Bedeutung, Installateure die Mechanik, und eine Meldung des einen landet markiert im Feed des anderen." },
    ] as Lesson[],
  },

  cta: {
    title: "Probieren Sie es selbst aus",
    sub: "Wechseln Sie im Live-Prototyp zwischen Hausbesitzer und Installateur, probieren Sie jedes Szenario aus oder lesen Sie das Designsystem.",
    links: [
      { label: "Live-Demo", href: chiliconLinks.demo },
      { label: "Designsystem", href: chiliconLinks.storybook },
    ],
  },
};

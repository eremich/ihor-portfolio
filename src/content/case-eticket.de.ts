// Deutsche Fassung der Eticket-Case-Study. Struktur, Bilder und Links identisch zur englischen Fassung.

import type { Fact, Lesson } from "@/content/case-pms";
import type { PhonePair } from "@/content/case-patronim";
import { after, dark, eticketLinks, slide, v1, type FlowImage, type Quote, type Slide, type eticketBody } from "@/content/case-eticket";

export const eticketBodyDe: typeof eticketBody = {
  cover: [
    after("05-home", "Startseite: die nächste Metro-Station und Haltestellen in der Nähe, jeweils mit Live-Abfahrten", "Home: Abfahrten statt nur Haltestellen"),
    after("11-tap-success", "Ergebnis nach dem Tippen: Bezahlt, Fahrpreis, neues Guthaben und ein kostenloses Umsteigefenster", "Ein Tipp: bezahlt, mit Umsteigefenster"),
    after("17-route-live", "Live-Fahrt auf dem Metro-Plan mit nächster Station und Umsteigehinweis", "Live-Fahrt auf dem Metro-Plan"),
  ],

  highlights: [
    { number: "5 → 1", label: "Schritte zum Bezahlen am Drehkreuz, jetzt ein einziger Tipp mit dem Handy" },
    { number: "68,8 %", label: "der 2020 befragten Fahrgäste fuhren mit einer Plastikkarte" },
    { number: "3 Linien, 30 Stationen", label: "der Charkiwer Metro, mit den aktuellen Namen nach der Umbenennung 2022–2024" },
    { number: "14", label: "Szenarien, durchgängig klickbar, von der abgelehnten Zahlung bis zur verlorenen Karte" },
  ] as Fact[],

  overview: {
    kicker: "Überblick",
    headline: "2020 haben wir die Fahrkarte von Charkiw ins Handy gebracht. 2026 habe ich das Bezahlen auf einen Tipp reduziert.",
    paragraphs: [
      "Eticket ist die elektronische Fahrkarte von Charkiw für Metro, Straßenbahn, O-Bus und Bus. Man lädt sie auf, und jede Fahrt wird am Drehkreuz oder am Entwerter abgebucht.",
      "2020 war ich Product Designer in einem Team aus drei Personen, mit zwei Entwicklern. Wir haben die erste Eticket-App veröffentlicht: die Karte im Handy, Aufladen, Haltestellen in der Nähe, Routensuche und Fahrtenverlauf.",
      "2026 habe ich unsere eigene App geprüft und rund um die zwei Momente neu gestaltet, die Fahrgäste wirklich beschäftigen: durchs Drehkreuz kommen und wissen, wann die nächste Straßenbahn fährt. Die Neugestaltung habe ich mit KI als funktionierenden Prototyp gebaut, das Designsystem liegt in Storybook.",
    ],
  },

  problem: {
    kicker: "Das Problem",
    headline: "Fahrgäste hatten vier Probleme. Unsere App hat sie auf dem Papier gelöst, nicht am Drehkreuz.",
    riderTitle: "Was uns Fahrgäste in Interviews sagten, 2020",
    riders: [
      { title: "Bargeld und Schlangen", desc: "Eine Plastikkarte aufzuladen hieß, am Terminal anzustehen." },
      { title: "Papier und Plastik", desc: "Papiertickets und Karten, einmal benutzt und weggeworfen." },
      { title: "Besucher", desc: "Wer nicht von hier ist, hat Mühe, ein Ticket zu kaufen." },
      { title: "Warten", desc: "Lange, unberechenbare Wartezeiten an den Haltestellen." },
    ],
    auditTitle: "Was ich in unserer eigenen App gefunden habe (Audit, 2026)",
    findings: [
      { title: "Bezahlen dauerte fünf Schritte", desc: "Unter „Fahrt bezahlen“: Verkehrsmittel wählen, Fahrgäste, Gepäck, Summe prüfen, bestätigen und erst dann das Handy ans Terminal halten. Und das am Drehkreuz, im Moment mit der geringsten Geduld." },
      { title: "Haltestellen ohne Abfahrten", desc: "Die Startseite listete Haltestellen in der Nähe, aber nicht, wann das nächste Fahrzeug kommt, obwohl Warten eines der vier Probleme war." },
      { title: "Besucher kamen nicht rein", desc: "Das Onboarding verlangte die Nummer einer Plastikkarte, die sie gar nicht haben." },
      { title: "Kein Apple Pay oder Google Pay", desc: "Beim Aufladen gab es eine verknüpfte Bankkarte und eine eigene Zahlentastatur, obwohl unsere Research zeigte, dass Fahrgäste längst mit dem Handy zahlen." },
      { title: "Zwei Orte für die Routensuche", desc: "Startseite und „A nach B“; Tabs namens „Karten“ und „Zahlungen“ für dieselbe Sache." },
    ],
  },

  research: {
    kicker: "Research",
    headline: "Wir haben bei den Fahrgästen angefangen, nicht bei den Screens.",
    intro:
      "2020, vor dem Design der ersten App, haben wir Fahrgäste in Charkiw interviewt und einen Morgen auf dem Weg von zu Hause zur Arbeit nachgezeichnet. Die vier Probleme oben stammen aus diesen Gesprächen.",
    quotesTitle: "Zentrale Zitate aus den Interviews",
    quotes: [
      { text: "Ich kann mein Kartenguthaben nicht einsehen, meistens muss ich raten." },
      { text: "Ich hasse die riesige Schlange am Ticketterminal am Morgen!" },
      { text: "Ich komme ständig zu spät zur Arbeit, weil ich mit Karte und Bargeld herumfummle und dann viel Zeit am Ticketterminal verliere!" },
      { text: "Ich vergesse immer, meine Eticket-Karte aufzuladen." },
    ] as Quote[],
    journey: {
      title: "Customer Journey: der Weg zur Arbeit",
      columns: ["", "Ziel", "Route", "Verkehrsmittel", "Bezahlung", "Service"],
      rows: [
        ["Tut", "Oft spät dran, hetzt zum Verkehrsmittel", "Entscheidet, wie er zur Arbeit kommt, schaut in Google Maps", "Wartet an der O-Bus-Haltestelle, steigt in die Metro um", "Bezahlt im O-Bus und in der Metro", "Kauft einen Einzelfahrschein oder lädt am Terminal auf"],
        ["Schmerz", "Straßenbahnen und O-Busse fallen aus; Fußweg zur Metro", "Kein Fahrplan und keine Routen auf der Eticket-Website", "Kann das Kartenguthaben an der Haltestelle nicht prüfen; Gedränge an der Tür", "Aufladen nur am Terminal", "Langsame, umständliche Abläufe"],
        ["Fühlt", "Den ganzen Tag spät dran und gereizt", "Kennt die Route nicht", "Kommt kaum hinein", "Kann nicht oder nur mühsam bezahlen", "Verliert Zeit beim Kaufen und Aufladen"],
      ],
    },
    slidesTitle: "Die originalen Research-Folien von 2020",
    slides: [
      slide("quotes", "Interview-Zitate", "Originale Folie von 2020 mit den zentralen Interview-Zitaten von Fahrgästen aus Charkiw", "Zentrale Interview-Zitate, 2020", 979),
      slide("problems", "Probleme definieren", "Originale Folie von 2020, die die vier Probleme der Fahrgäste definiert: Bargeld und Schlangen, Papier und Plastik, Besucher, Warten", "Die Probleme definieren, 2020", 1143),
      slide("journey", "Customer Journey Map", "Originale Customer Journey Map von 2020 für den Weg zur Arbeit am Morgen", "Customer Journey Map, 2020", 1108),
    ] as Slide[],
    whoTitle: "Für wen wir gestaltet haben",
    who: [
      "Fahrgäste, die täglich öffentliche Verkehrsmittel und ein Smartphone nutzen, überwiegend Studierende und Büroangestellte.",
      "68,8 % von ihnen fuhren mit einer Plastikkarte: der grünen Eticket-Karte oder dem Studierendenticket.",
      "Karten- und Handyzahlung waren neben Bargeld verbreitet; am häufigsten genutzt wurden Metro und Busse.",
    ],
    stat: { number: "68,8 %", label: "der befragten Fahrgäste fuhren mit einer Plastikkarte" } as Fact,
    priority:
      "Die Priorität, die wir 2020 gesetzt haben: einfaches Bezahlen und Aufladen, ohne Bargeld und Papiertickets; das Fahrguthaben sehen; mit dem Smartphone bezahlen; eine Bankkarte verknüpfen; Geld auf eine andere Eticket-Karte übertragen; Verkehrsmittel verfolgen, Fahrpläne sehen, die nächsten Haltestellen finden und eine Route von A nach B planen.",
    closing: "2026 bin ich zu diesen Erkenntnissen zurückgekehrt und habe unsere veröffentlichte App Screen für Screen daran gemessen.",
  },

  users: {
    kicker: "Für wen",
    headline: "Drei Fahrgäste, drei sehr unterschiedliche Morgen.",
    personas: [
      { name: "Täglicher Pendler", context: "Jeden Tag dieselben zwei oder drei Strecken.", need: "Schnell durchs Drehkreuz und die Straßenbahn nicht verpassen." },
      { name: "Student mit ermäßigtem Tarif", context: "Preisbewusst, fährt täglich.", need: "Dass der ermäßigte Tarif einfach funktioniert und er weiß, wann er abläuft." },
      { name: "Besucher", context: "Keine Karte, liest vielleicht kein Ukrainisch.", need: "Ein Ticket in zwei Minuten und eine einfache Wegbeschreibung." },
    ],
  },

  goals: {
    kicker: "Ziele",
    headline: "Was die Neugestaltung leisten muss, für Fahrgäste und für die Stadt.",
    riderTitle: "Für Fahrgäste",
    riders: [
      "Mit einem Tipp bezahlen, auch offline, ohne das Handy zu entsperren.",
      "Auf der Startseite sehen, wann die nächste Metro, Straßenbahn oder der nächste Bus kommt.",
      "Nie ohne Guthaben am Drehkreuz stehen bleiben.",
      "Als Besucher fahren, ohne Konto und ohne Plastikkarte.",
    ],
    cityTitle: "Für die Stadt und den Betreiber",
    city: [
      "Weniger Papiertickets und kürzere Schlangen an den Aufladeterminals.",
      "Mehr Fahrten, die digital bezahlt werden.",
      "Höhere Zufriedenheit durch verlässliche Abfahrtszeiten.",
    ],
    targetsTitle: "Ziele zum Start, mit dem Betreiber festzulegen",
    targets: [
      { metric: "Anteil der per Handy bezahlten Fahrten", target: "Ziel: 60 % im ersten Jahr" },
      { metric: "Abgelehnte Zahlungen pro 1.000 Fahrten", target: "Ziel: halbieren" },
      { metric: "Aufladungen in der App vs. am Terminal", target: "Ziel: 70 % in der App" },
      { metric: "Zeit eines Besuchers von der Installation bis zur ersten Fahrt", target: "Ziel: unter 2 Minuten" },
    ],
  },

  principles: {
    kicker: "Prinzipien",
    headline: "Vier Regeln, die jeden Screen bestimmt haben.",
    items: [
      { title: "Der Moment am Drehkreuz ist heilig", desc: "Nichts zwischen Mensch und Schranke." },
      { title: "Abfahrten statt Haltestellen", desc: "Eine Haltestelle hilft nur mit der Zeit des nächsten Fahrzeugs." },
      { title: "Geld ist sichtbar", desc: "Guthaben, Fahrpreis und verbleibende Fahrten auf einen Blick." },
      { title: "Funktioniert für Neuankömmlinge", desc: "Auf Englisch, ohne Konto, ohne Karte." },
    ],
  },

  flows: {
    kicker: "Flows",
    headline: "Acht Flows, gezeichnet, bevor ein Screen entstand.",
    body: "Onboarding, Fahrt bezahlen, Karten und Aufladen, Haltestellen in der Nähe und Live-Abfahrten, Route von A nach B, der Besucher, Fahrten und Konto sowie Probleme und Sonderfälle. Gelb ist ein Schritt, Blau eine Entscheidung, Grün ein Start oder ein Ende.",
    items: [
      { title: "1. Onboarding", alt: "Onboarding-Flow: Sprache, Anmeldung, Karte oder virtuelle Karte, Prüfung des ermäßigten Tarifs, Wallet, Standortfreigabe und Heimathaltestelle, dann die Startseite", src: "/case-eticket/flows/onboarding.webp", width: 1682, height: 2714 },
      { title: "2. Fahrt bezahlen", alt: "Bezahl-Flow: Handy an den Entwerter halten, Guthabenprüfung mit abgelehnter Zahlung und Aufladen mit einem Tipp, Umsteigefenster, Erfolg, weitere Fahrgäste", src: "/case-eticket/flows/pay.webp", width: 1768, height: 2040 },
      { title: "3. Karten, Aufladen, Auto-Aufladung und Übertragung", alt: "Karten-Flow: zwischen Karten wischen, mit Betragsauswahl und Apple oder Google Pay aufladen, Auto-Aufladung, Übertragung auf eine andere Karte mit Face ID", src: "/case-eticket/flows/cards.webp", width: 2188, height: 2198 },
      { title: "4. In der Nähe, Live-Abfahrten, Karte und Fahrplan", alt: "Flow „In der Nähe“: Startseite mit Live-Abfahrten, Liste oder Karte, Haltestellendetails, Live-Daten oder planmäßige Zeiten, Liniendetails, Fahrplan, Erinnerung, Favoriten", src: "/case-eticket/flows/nearby.webp", width: 1510, height: 2872 },
      { title: "5. Route von A nach B", alt: "Routen-Flow: Wohin, Start und Ziel, Filter, Optionen mit Gesamtpreis, Routendetails, Guthabenprüfung und Aufladen, Live-Fahrt, Hinweis auf Fahrplanänderung, Route speichern", src: "/case-eticket/flows/route.webp", width: 1344, height: 3120 },
      { title: "6. Besucher: ohne Karte fahren", alt: "Besucher-Flow: Anmeldung überspringen, Ticket wählen, mit Apple oder Google Pay bezahlen, Ticket im Wallet, an den Entwerter halten, Zweig „abgelaufen“", src: "/case-eticket/flows/visitor.webp", width: 1606, height: 2042 },
      { title: "7. Fahrten, Belege und Konto", alt: "Konto-Flow ab dem Profil: Fahrten und monatliche Ausgaben, Belege, meine Karten mit Wiederherstellung bei Kartenverlust, Status des ermäßigten Tarifs, Zahlungsmethoden, Benachrichtigungen, Sprache, Konto löschen", src: "/case-eticket/flows/account.webp", width: 4416, height: 1006, wide: true },
      { title: "8. Probleme und Sonderfälle", alt: "Sonderfall-Flow: falsche Abbuchung mit automatischer Erstattung, neues Handy, Verlängerung des ermäßigten Tarifs, Plastikkarte aufs Handy, Fahrplanänderung", src: "/case-eticket/flows/special.webp", width: 4256, height: 1746, wide: true },
    ] as FlowImage[],
  },

  compare: {
    kicker: "Vorher und nachher",
    headline: "Jede Erkenntnis, neben dem, was sie ersetzt hat.",
    pairs: [
      {
        finding: "Fünf Schritte zum Bezahlen",
        fix: "Das Handy ans Lesegerät halten, fertig. Der Ergebnis-Screen zeigt Bezahlt oder Abgelehnt, und bei einer Ablehnung steht das Aufladen gleich daneben.",
        before: v1("pay", "Unser Screen „Fahrt bezahlen“ von 2020: Verkehrsmittel, Fahrgäste, Gepäck und eine Schaltfläche „Bestätigen“, markiert", "① Verkehrsmittel wählen ② Fahrgäste und Gepäck ③ bestätigen, dann tippen"),
        after: [
          after("11-tap-success", "Das Ergebnis nach dem Tippen 2026: Bezahlt, Fahrpreis, neues Guthaben und ein kostenloses Umsteigefenster", "Bezahlt, mit Umsteigefenster"),
          after("12-tap-declined", "Die abgelehnte Zahlung 2026: Guthaben zu niedrig, mit Aufladen per Apple Pay in einem Tipp", "Abgelehnt: das Aufladen steht gleich daneben"),
        ],
      },
      {
        finding: "Haltestellen ohne Abfahrten",
        fix: "Die Startseite beginnt mit der nächsten Station und einem Live-Chip für jede Haltestelle in der Nähe: das nächste Fahrzeug, nicht nur der Name.",
        before: v1("stops", "Unsere Startseite von 2020: eine Karte und eine Liste von Haltestellen in der Nähe ohne Abfahrtszeiten, markiert", "① Haltestellen, aber keine Zeit des nächsten Fahrzeugs"),
        after: [
          after("05-home", "Die Startseite 2026: nächste Station und Haltestellen mit Live-Abfahrts-Chips", "Nächste Station und Live-Chips"),
          after("08-stop-detail", "Die Haltestellendetails 2026 mit allen Linien und ihren nächsten Abfahrten", "Haltestellendetails: jede Linie, nächste Abfahrten"),
        ],
      },
      {
        finding: "Onboarding braucht eine Plastikkarte",
        fix: "Der Willkommens-Screen bietet „Nur zu Besuch? Ticket kaufen“, und das Besucherticket landet direkt im Wallet, ohne Konto und ohne Karte.",
        before: v1("onboarding", "Unser erster Screen von 2020, der eine Karten-ID und eine Stadt abfragt, markiert", "① eine Kartennummer, die ein Besucher nicht hat"),
        after: [
          after("01-welcome", "Der Willkommens-Screen 2026 mit der Option „Nur zu Besuch“ zum Ticketkauf", "„Nur zu Besuch? Ticket kaufen“"),
          after("19-visitor-tickets", "Die Besuchertickets 2026: Einzelfahrt, 1 Tag und 3 Tage", "Einzelfahrt, 1 Tag, 3 Tage"),
        ],
      },
      {
        finding: "Aufladen mit eigener Zahlentastatur",
        fix: "Betragsauswahl und Apple Pay ersetzen das Tippen auf einer eigenen Zahlentastatur, sodass Aufladen eine Auswahl und ein Tipp ist.",
        before: v1("topup", "Unser Aufladen-Screen von 2020 mit Betragsfeld und eigener Zahlentastatur, markiert", "① einen Betrag auf einer Tastatur eintippen"),
        after: [after("14-top-up", "Das Aufladen 2026 mit Betragsauswahl und Apple Pay", "Betragsauswahl und Apple Pay")],
      },
      {
        finding: "Zwei Orte für die Routensuche",
        fix: "Ein „Wohin?“ auf der Startseite öffnet die Routen, und die Optionen zeigen den Gesamtpreis, sodass die Suche an einem Ort stattfindet.",
        before: v1("route", "Unser Screen „Route planen“ von 2020, eine zweite Suche neben der Startseite, mit einem Tab namens Zahlungen, markiert", "① eine zweite Suche ② „Zahlungen“ für das, was die Startseite „Karten“ nennt"),
        after: [after("16-routes-options", "Die Routenoptionen 2026 mit Zeit, Umstiegen, Fußweg und Gesamtpreis", "Eine Suche, Optionen mit Preis")],
      },
    ] as PhonePair[],
  },

  commute: {
    kicker: "Der Weg am Morgen",
    headline: "Der Weg am Morgen, durchgängig geklickt.",
    body: "6 ₴ auf der Karte. Route zur Arbeit: Metro-Linie 2, ein Umstieg, Linie 1, 24 Minuten, 8 ₴ und ein Hinweis, dass das Guthaben für die Fahrt nicht reicht. Tippen an der Saltiwska: abgelehnt. 100 ₴ per Apple Pay aufladen und erneut tippen: bezahlt, 98 ₴, kostenloses Umsteigen bis 09:14. Die Live-Fahrt folgt auf dem Metro-Plan: „Umsteigen an der Istorytschnyj Musej zur Linie 1“ ohne erneutes Tippen, dann „Als Nächstes: Wokzalna“. Beim Ausstieg schlägt die Startseite „Straßenbahn 7 · 4 Min.“ vor.",
    shots: [
      after("05-home", "Startseite mit niedrigem Guthaben und der nächsten Station", "Startseite, 6 ₴ auf der Karte"),
      after("16-routes-options", "Routenoptionen zur Arbeit mit Fahrpreis und Guthabenwarnung", "Routen: 24 Min., 8 ₴, Guthaben zu niedrig"),
      after("12-tap-declined", "Abgelehnte Zahlung mit Aufladen in einem Tipp", "Tippen: abgelehnt, 100 ₴ aufladen"),
      after("11-tap-success", "Bezahlt, 98 ₴ übrig, kostenloses Umsteigen bis 09:14", "Erneut tippen: bezahlt, 98 ₴"),
      after("17-route-live", "Live-Fahrt auf dem Metro-Plan mit Umsteigehinweis", "Live-Fahrt, kein erneutes Tippen"),
    ],
  },

  decisions: {
    kicker: "Zentrale Entscheidungen",
    headline: "Acht Entscheidungen, die die App geprägt haben.",
    items: [
      { title: "Tippen und Bezahlen über den Express-Modus des Wallets", desc: "Keine App öffnen, nicht entsperren, funktioniert offline. Voraussetzung: Die Entwerter in allen Verkehrsmitteln akzeptieren NFC." },
      { title: "Eine abgelehnte Zahlung ist zugleich die Lösung", desc: "„6 ₴ übrig, Fahrpreis 8 ₴“ mit „100 ₴ per Apple Pay aufladen“ direkt daneben, dann erneut tippen." },
      { title: "Live-Abfahrten auf der Startseite", desc: "Zuerst die nächste Metro-Station, dann „Straßenbahn 27 · 3 Min.“ für jede Haltestelle in der Nähe, mit „5 Min. vorher erinnern“." },
      { title: "Das Umsteigefenster nach dem Bezahlen", desc: "„Kostenlos umsteigen bis 09:14“ nimmt eine häufige Sorge ab." },
      { title: "Routen zeigen den Gesamtpreis", desc: "Das Guthaben wird geprüft, bevor man losfährt: „Ihr Guthaben reicht für diese Fahrt nicht“." },
      { title: "Besuchertickets ohne Konto", desc: "Direkt ins Wallet: Einzelfahrt, 1 Tag, 3 Tage." },
      { title: "Auto-Aufladung und Wiederherstellung bei Kartenverlust", desc: "Damit das Guthaben nie zum Problem wird." },
      { title: "Vier klare Tabs", desc: "Start, Routen, Karte, Profil. Ein Ort für die Routensuche." },
    ],
  },

  states: {
    kicker: "Schwierige Zustände",
    headline: "Die Screens, nach denen niemand fragt, schaffen Vertrauen.",
    shots: [
      after("12-tap-declined", "Abgelehnte Zahlung mit Fahrpreis, Guthaben und Aufladen in einem Tipp", "Abgelehnte Zahlung"),
      after("18-route-service-change", "Hinweis auf Fahrplanänderung der Route mit einer alternativen Route", "Fahrplanänderung, mit Alternative"),
      after("23-refund-done", "Doppelt abgebucht: die doppelte Abbuchung wird sofort erstattet", "Doppelt abgebucht, sofort erstattet"),
      after("26-lost-card", "Karte verloren: das Guthaben wird auf eine virtuelle Karte übertragen", "Karte verloren, Guthaben auf virtuelle Karte übertragen"),
      after("25-fare-renewal", "Ermäßigter Tarif läuft ab, mit Aufforderung zur Verlängerung", "Ermäßigter Tarif läuft ab"),
      after("20-visitor-ticket-wallet", "Besucherticket im Wallet mit Gültigkeit und Fahrten", "Besucherticket im Wallet"),
    ],
  },

  system: {
    kicker: "Designsystem",
    headline: "Leise Oberfläche, laute Verkehrsmittel.",
    body: "Fast Schwarz und Weiß mit einem blauen Akzent. Der Verkehrscode ist die einzige weitere Farbe, und er kommt immer mit Icon und Nummer.",
    bullets: [
      "Metro-Linien: 1 rot, 2 blau, 3 grün; Straßenbahnen, O-Busse und Busse nach Farbe",
      "Ein echtes Schwarz im Dark Mode mit den leuchtenden iOS-Systemfarben",
      "iOS-Muster: große Titel, eine schwebende Tab-Leiste aus Glas, Sheets mit Rastpunkten, eingerückte gruppierte Listen",
      "Onest für Latein und Kyrillisch; jede Komponente in Storybook, in beiden Themes und beiden Sprachen",
    ],
    shots: [
      dark("home", "Startseite im Dark Mode mit der nächsten Station und Live-Abfahrten", "Start, dunkel"),
      dark("card", "Karten-Tab im Dark Mode mit niedrigem Guthaben und Schnellaktionen", "Karte, dunkel"),
      dark("routes-options", "Routenoptionen im Dark Mode mit dem Fahrpreis", "Routen, dunkel"),
      dark("tap-success", "Ergebnis nach dem Tippen im Dark Mode: Bezahlt, neues Guthaben, Umsteigefenster", "Zahlungsergebnis, dunkel"),
      dark("metro-map", "Metro-Plan im Dark Mode mit den drei farbigen Linien", "Metro-Plan, dunkel"),
    ],
  },

  outcome: {
    kicker: "Ergebnis",
    headline: "Was die Neugestaltung liefert.",
    facts: [
      { number: "5 → 1", label: "Schritte zum Bezahlen am Drehkreuz, jetzt ein einziger Tipp mit dem Handy" },
      { number: "68,8 %", label: "der 2020 befragten Fahrgäste fuhren mit einer Plastikkarte" },
      { number: "3 Linien, 30 Stationen", label: "der Charkiwer Metro, mit den aktuellen Namen" },
      { number: "14", label: "Szenarien, durchgängig klickbar" },
      { number: "2 × 2", label: "zwei Themes, hell und dunkel, und zwei Sprachen, Ukrainisch und Englisch" },
      { number: "29", label: "zentrale Screens" },
    ] as Fact[],
  },

  lessons: {
    kicker: "Wichtigste Erkenntnisse",
    headline: "Drei Dinge, die mir dieses Projekt beigebracht hat.",
    blocks: [
      { title: "Für den Moment am Drehkreuz gestalten", body: "Nichts zwischen Mensch und Schranke. Das Bezahlen wurde von fünf Schritten auf einen Tipp verkürzt, weil das der Moment mit der geringsten Geduld ist." },
      { title: "Abfahrten statt Haltestellen", body: "Eine Liste von Haltestellen beantwortet das Wo. Fahrgäste fragten nach dem Wann. Die Startseite beginnt jetzt mit der Zeit des nächsten Fahrzeugs." },
      { title: "Eine Ablehnung sollte die Lösung sein", body: "Eine abgelehnte Zahlung, die nur Nein sagt, lässt jemanden an der Schranke stehen. Zeigt derselbe Screen Fahrpreis, Guthaben und Aufladen, wird daraus ein weiterer Tipp." },
    ] as Lesson[],
  },

  cta: {
    title: "Probieren Sie es selbst aus",
    sub: "Tippen Sie am Drehkreuz, planen Sie eine Route und fahren Sie als Besucher im Live-Prototyp, oder lesen Sie das Designsystem.",
    links: [
      { label: "Live-Demo", href: eticketLinks.demo },
      { label: "Designsystem", href: eticketLinks.storybook },
    ],
  },
};

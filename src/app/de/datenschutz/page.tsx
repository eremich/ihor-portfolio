import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { SiteChrome } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Datenschutzerklärung — Ihor Yeromich",
  robots: { index: false },
};

// TODO before publishing: fill in the address (same as the Impressum) and check the provider
// details (Vercel, Umami) against their current privacy terms.
export default function Page() {
  return (
    <SiteChrome lang="de">
      <LegalPage title="Datenschutzerklärung" updated="Stand: Oktober 2026">
        <section>
          <h2>1. Verantwortlicher</h2>
          <p>
            Ihor Yeromich
            <br />
            [Straße Hausnummer], [PLZ] Berlin, Deutschland
            <br />
            E-Mail: <a href="mailto:igor.eryomich@gmail.com">igor.eryomich@gmail.com</a>
          </p>
        </section>

        <section>
          <h2>2. Überblick</h2>
          <p>
            Diese Website ist mein persönliches Portfolio. Sie setzt keine Cookies, enthält keine Werbung und kein
            Tracking über andere Websites hinweg. Personenbezogene Daten werden nur in dem Umfang verarbeitet, der für
            den Betrieb der Website, eine datensparsame Reichweitenmessung und die Beantwortung Ihrer Anfragen nötig
            ist.
          </p>
        </section>

        <section>
          <h2>3. Hosting</h2>
          <p>
            Die Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA, gehostet. Beim Aufruf
            der Website verarbeitet Vercel technisch notwendige Daten in sogenannten Server-Logfiles, insbesondere:
          </p>
          <ul>
            <li>IP-Adresse,</li>
            <li>Datum und Uhrzeit des Zugriffs,</li>
            <li>aufgerufene Seite und Referrer-URL,</li>
            <li>Browsertyp und Betriebssystem.</li>
          </ul>
          <p>
            Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Mein berechtigtes Interesse liegt in
            der sicheren und zuverlässigen Bereitstellung der Website. Vercel ist unter dem EU-U.S. Data Privacy
            Framework zertifiziert; die Datenübermittlung in die USA stützt sich auf den entsprechenden
            Angemessenheitsbeschluss der EU-Kommission (Art. 45 DSGVO).
          </p>
        </section>

        <section>
          <h2>4. Reichweitenmessung mit Umami</h2>
          <p>
            Um zu verstehen, welche Inhalte gelesen werden, nutze ich Umami Cloud (Umami Software, Inc.). Umami
            arbeitet ohne Cookies und ohne Tracking über andere Websites hinweg. Erfasst werden:
          </p>
          <ul>
            <li>aufgerufene Seiten und die Referrer-URL,</li>
            <li>Browser, Betriebssystem, Gerätetyp und Land,</li>
            <li>
              Interaktionen auf dieser Website: welche Case Study geöffnet wurde, wie weit sie gelesen wurde, die
              aktive Lesezeit sowie Klicks auf Kontakt- und externe Links.
            </li>
          </ul>
          <p>
            Ihre IP-Adresse wird nicht gespeichert. Sie dient nur dazu, eine anonymisierte Besuchskennung zu bilden,
            die keinen Rückschluss auf Ihre Person zulässt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; mein
            berechtigtes Interesse ist es, mein Portfolio anhand anonymer Nutzungsstatistiken zu verbessern. Sie können
            der Verarbeitung jederzeit widersprechen (Art. 21 DSGVO), etwa per E-Mail an mich.
          </p>
        </section>

        <section>
          <h2>5. Lokale Speicherung im Browser</h2>
          <p>
            Wenn Sie zwischen hellem und dunklem Design wechseln, speichert die Website Ihre Auswahl im lokalen
            Speicher Ihres Browsers (localStorage). Dabei werden keine personenbezogenen Daten verarbeitet und nichts
            an mich übermittelt. Die Speicherung ist für die von Ihnen gewünschte Funktion erforderlich (§ 25 Abs. 2
            Nr. 2 TDDDG). Sie können sie jederzeit über die Einstellungen Ihres Browsers löschen.
          </p>
        </section>

        <section>
          <h2>6. Schriftarten</h2>
          <p>
            Die verwendeten Schriftarten werden direkt von dieser Website ausgeliefert. Beim Seitenaufruf wird keine
            Verbindung zu Servern von Google oder anderen Drittanbietern hergestellt.
          </p>
        </section>

        <section>
          <h2>7. Kontakt per E-Mail</h2>
          <p>
            Wenn Sie mir eine E-Mail schreiben, verarbeite ich Ihre Angaben (Name, E-Mail-Adresse, Inhalt der
            Nachricht), um Ihre Anfrage zu beantworten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre
            Anfrage auf eine Zusammenarbeit oder ein Arbeitsverhältnis abzielt, im Übrigen Art. 6 Abs. 1 lit. f DSGVO.
            Für mein E-Mail-Postfach nutze ich Gmail (Google Ireland Limited). Ihre Nachricht wird gelöscht, sobald sie
            für die Bearbeitung nicht mehr erforderlich ist und keine gesetzlichen Aufbewahrungspflichten
            entgegenstehen.
          </p>
        </section>

        <section>
          <h2>8. Externe Links</h2>
          <p>
            Diese Website verlinkt auf externe Angebote, etwa mein LinkedIn-Profil und die Live-Demos meiner Projekte.
            Daten werden an diese Anbieter erst übertragen, wenn Sie einen Link anklicken. Für die Verarbeitung dort
            gilt die Datenschutzerklärung des jeweiligen Anbieters.
          </p>
        </section>

        <section>
          <h2>9. Ihre Rechte</h2>
          <p>Sie haben jederzeit das Recht auf:</p>
          <ul>
            <li>Auskunft über die zu Ihrer Person gespeicherten Daten (Art. 15 DSGVO),</li>
            <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO),</li>
            <li>Löschung (Art. 17 DSGVO) und Einschränkung der Verarbeitung (Art. 18 DSGVO),</li>
            <li>Datenübertragbarkeit (Art. 20 DSGVO),</li>
            <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO).</li>
          </ul>
          <p>
            Wenden Sie sich dafür formlos per E-Mail an mich. Außerdem können Sie sich bei einer
            Datenschutz-Aufsichtsbehörde beschweren, zum Beispiel bei der Berliner Beauftragten für Datenschutz und
            Informationsfreiheit, Alt-Moabit 59–61, 10555 Berlin.
          </p>
        </section>
      </LegalPage>
    </SiteChrome>
  );
}

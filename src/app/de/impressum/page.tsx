import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { SiteChrome } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Impressum — Ihor Yeromich",
  robots: { index: false },
};

// TODO before publishing: replace the address placeholder with a postal address where letters
// can be served (no P.O. box). A c/o business address service is an option if the home address
// should stay private.
export default function Page() {
  return (
    <SiteChrome lang="de">
      <LegalPage title="Impressum">
        <section>
          <h2>Angaben gemäß § 5 DDG</h2>
          <p>
            Ihor Yeromich
            <br />
            [Straße Hausnummer]
            <br />
            [PLZ] Berlin
            <br />
            Deutschland
          </p>
        </section>

        <section>
          <h2>Kontakt</h2>
          <p>
            E-Mail: <a href="mailto:igor.eryomich@gmail.com">igor.eryomich@gmail.com</a>
            <br />
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/erema/" target="_blank" rel="noreferrer">
              linkedin.com/in/erema
            </a>
          </p>
        </section>

        <section>
          <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <p>Ihor Yeromich, Anschrift wie oben</p>
        </section>

        <section>
          <h2>Haftung für Inhalte</h2>
          <p>
            Die Inhalte dieser Website wurden mit Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und
            Aktualität der Inhalte kann ich jedoch keine Gewähr übernehmen. Als Diensteanbieter bin ich für eigene
            Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
          </p>
        </section>

        <section>
          <h2>Haftung für Links</h2>
          <p>
            Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe.
            Für diese fremden Inhalte ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Zum
            Zeitpunkt der Verlinkung waren keine Rechtsverstöße erkennbar. Werden mir Rechtsverletzungen bekannt,
            entferne ich derartige Links umgehend.
          </p>
        </section>

        <section>
          <h2>Urheberrecht</h2>
          <p>
            Die Inhalte dieser Website – Texte, Grafiken, Screenshots und Designs – unterliegen dem deutschen
            Urheberrecht. Produktnamen und Marken gehören ihren jeweiligen Inhabern und werden nur zur Beschreibung
            meiner Projektarbeit genannt. Eine Vervielfältigung oder Verwendung außerhalb der Grenzen des
            Urheberrechts bedarf meiner vorherigen schriftlichen Zustimmung.
          </p>
        </section>
      </LegalPage>
    </SiteChrome>
  );
}

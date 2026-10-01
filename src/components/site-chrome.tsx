import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import type { Lang } from "@/i18n";

/** Header, page content and footer in one language. `lang` on the wrapper marks the whole page for screen readers. */
export function SiteChrome({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <div lang={lang}>
      <SiteHeader lang={lang} />
      <main>{children}</main>
      <SiteFooter lang={lang} />
    </div>
  );
}

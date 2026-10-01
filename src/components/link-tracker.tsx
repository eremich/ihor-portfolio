"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

// One listener for the whole site: email, LinkedIn, live demos, design systems and any other
// outbound link are tracked without tagging each link by hand.
export function LinkTracker() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute("href") || "";
      const page = window.location.pathname;
      const label = (a.textContent || "").trim().slice(0, 60);

      if (href.startsWith("mailto:")) {
        track("contact-email", { page });
      } else if (href.includes("linkedin.com")) {
        track("contact-linkedin", { page });
      } else if (a.host && a.host !== window.location.host) {
        track("outbound", { url: a.href, label, page });
      }
    }
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}

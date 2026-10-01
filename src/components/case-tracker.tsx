"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";
import type { Lang } from "@/i18n";

const DEPTHS = [25, 50, 75, 100];
// Time counts only while the tab is visible and the reader did something in the last 30 s.
const IDLE_MS = 30_000;
const TICK_MS = 1_000;

function timeBucket(seconds: number) {
  if (seconds < 15) return "0-15s";
  if (seconds < 60) return "15-60s";
  if (seconds < 180) return "1-3min";
  if (seconds < 600) return "3-10min";
  return "10min+";
}

/** Reports how far a case study was read and how long it was actively read. Renders nothing. */
export function CaseTracker({ slug, lang }: { slug: string; lang: Lang }) {
  useEffect(() => {
    const reached = new Set<number>();
    let lastActive = Date.now();
    let activeMs = 0;
    let sent = false;

    function onScroll() {
      lastActive = Date.now();
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      const percent = scrollable <= 0 ? 100 : (window.scrollY / scrollable) * 100;
      for (const depth of DEPTHS) {
        if (percent >= depth - 1 && !reached.has(depth)) {
          reached.add(depth);
          track("case-scroll", { case: slug, depth, lang });
        }
      }
    }

    function onActivity() {
      lastActive = Date.now();
    }

    const timer = window.setInterval(() => {
      if (document.visibilityState === "visible" && Date.now() - lastActive < IDLE_MS) {
        activeMs += TICK_MS;
      }
    }, TICK_MS);

    function sendTime() {
      if (sent) return;
      sent = true;
      const seconds = Math.round(activeMs / 1000);
      track("case-time", { case: slug, seconds, range: timeBucket(seconds), lang });
    }

    function onHide() {
      if (document.visibilityState === "hidden") sendTime();
    }

    const activityEvents = ["mousemove", "keydown", "pointerdown", "touchstart"] as const;
    window.addEventListener("scroll", onScroll, { passive: true });
    activityEvents.forEach((ev) => window.addEventListener(ev, onActivity, { passive: true }));
    document.addEventListener("visibilitychange", onHide);
    window.addEventListener("pagehide", sendTime);

    return () => {
      // Leaving through a link inside the site (client-side navigation) also ends the read.
      sendTime();
      window.clearInterval(timer);
      window.removeEventListener("scroll", onScroll);
      activityEvents.forEach((ev) => window.removeEventListener(ev, onActivity));
      document.removeEventListener("visibilitychange", onHide);
      window.removeEventListener("pagehide", sendTime);
    };
  }, [slug, lang]);

  return null;
}

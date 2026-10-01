// Umami (cookieless, no consent banner needed). The tracker script is only loaded in production,
// so in development events go to the console instead.

export const UMAMI_WEBSITE_ID = "e2e8e77b-f8dd-4498-9a08-de7df86dad58";

type EventData = Record<string, string | number | boolean>;

declare global {
  interface Window {
    umami?: { track: (event: string, data?: EventData) => void };
  }
}

export function track(event: string, data?: EventData) {
  if (typeof window === "undefined") return;
  if (window.umami) {
    window.umami.track(event, data);
  } else if (process.env.NODE_ENV === "development") {
    console.debug("[analytics]", event, data ?? "");
  }
}

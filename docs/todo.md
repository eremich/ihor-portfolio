# Портфолио — Ihor (UX/Product Designer)

**Style:** clean typographic (референсы: dobzha.com, oleksiitatarko.com, artjomzakoyan.com)
**Stack:** Next.js 15 (App Router) + Tailwind CSS 4 + TypeScript
**Deploy:** Vercel через GitHub

---

## План

### 1. Инициализация проекта
- [x] Next 15 + React 19 + Tailwind v4 + TS вручную (без create-next-app — быстрее и точнее)
- [x] Geist + Geist Mono через `next/font/google`
- [x] Светлая тема, токены в `@theme`: ink/ink-muted/ink-faint/paper/line

## Review (2026-09-18)

**Что сделано:**
- 13 файлов, `npm run build` — 11 статических страниц, 0 ошибок
- Главная: hero, био, список из 7 кейсов (текстовая таблица, hover-подсветка)
- Страница кейса `/work/[slug]`: заголовок, теги, мета (Role/Company/Year), 4 секции + 3 плейсхолдера, "← Back"
- Проверено визуально: десктоп + мобайл (375px)

**Не сделано (жду решения):**
- Push в GitHub (`ihor-portfolio`) — жду явного "го"
- Vercel — после пуша
- Заполнение реальных кейсов, картинки, реальный контент
- Возможный редизайн (тёмная тема, шрифт побогаче) — по запросу

### 2. Контент-структура
Данные о кейсах — в одном файле `src/content/cases.ts` (простой массив), чтобы легко редактировать. У каждого кейса поля:
- `slug`, `title`, `role`, `company`, `year`, `tags[]`, `summary`, `cover?` (пока без картинок)

### 3. Страницы

#### `/` — Главная
Одна колонка, широкие поля, тихая типографика. Секции:
- **Header** (без логотипа, просто имя как ссылка сверху)
- **Hero**: имя большим шрифтом, роль ниже, короткое био (3–4 строки: про 8 лет, API Nation / A-Development, Берлин)
- **Selected work** — список кейсов вертикальной таблицей: `Название · Роль · Год`, каждая строка — ссылка на кейс. Никаких карточек с картинками, только текст, hover-подсветка.
- **Footer**: контакты (email, LinkedIn, X/Twitter — плейсхолдеры)

#### `/work/[slug]` — Страница кейса (заглушка структуры)
Тот же принцип — узкая колонка чтения, крупные заголовки. Секции-заглушки:
- Заголовок кейса + мета (роль, компания, год, теги)
- Overview / Context
- Problem
- Approach
- Outcome
- Плейсхолдеры под изображения (`<figure>` с dashed border и подписью)
- Ссылка "← Back to work"

Все 8 кейсов: `eticket`, `apination`, `pms-3fivetwo`, `hadron-solar`, `pokecollect`, `konto`, `wandr` (+ ещё один — уточню, если что-то забыл).

#### `/about` — опционально, позже
Пока не делаем.

### 4. Компоненты
- `SiteHeader` — имя-ссылка сверху
- `SiteFooter` — контакты
- `WorkList` — список кейсов
- `CaseHeader` — заголовок + мета кейса
- `Placeholder` — плейсхолдер под картинку

### 5. Адаптив
Mobile-first. Проверю на 375px и 1440px. Ключевое: типографическая шкала уменьшается на мобайле, поля сокращаются с ~120px до ~24px.

### 6. Деплой
- [ ] Создать GitHub-репо локально (не пушить без подтверждения)
- [ ] Подключить Vercel к репо после явного разрешения
- [ ] `vercel.json` не нужен — Next.js подхватится сам

### 7. Что явно НЕ делаем
- Storybook
- CMS (Contentful/Sanity)
- Анимационные библиотеки (Framer Motion) на первом проходе — только CSS transitions
- Блог, темизация, i18n

---

## Структура файлов (превью)

```
D:\Portfolio\
├── src/
│   ├── app/
│   │   ├── layout.tsx           # шрифты, глобальный header/footer
│   │   ├── page.tsx             # главная
│   │   ├── globals.css
│   │   └── work/
│   │       └── [slug]/
│   │           └── page.tsx     # страница кейса
│   ├── components/
│   │   ├── site-header.tsx
│   │   ├── site-footer.tsx
│   │   ├── work-list.tsx
│   │   └── placeholder.tsx
│   └── content/
│       └── cases.ts             # данные всех кейсов
├── public/
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

---

## Вопросы к тебе перед стартом
1. **Кейсов 7 или 8?** Ты назвал 7 (Eticket, Apination, PMS/3fivetwo, Hadron Solar, PokeCollect, Konto, Wandr). Всё верно?
2. **Email/LinkedIn для футера** — какие ссылки? Или пока плейсхолдеры?
3. **Домен/название репо** — как назвать GitHub-репо? (`portfolio`, `ihor-portfolio`, свой вариант?)
4. **Шрифт** — оставить дефолтный Geist от Next.js или сразу подключить что-то более "editorial" (например, Inter Tight / Söhne подобное через Fontshare)?

Как подтвердишь план и ответишь на 4 вопроса — стартую с инициализации.

---

## Case study: Patient Management System (2026-09-24)

Content source: `D:\PMS3fivetwo\docs\case-study-draft.md`; assets in `D:\PMS3fivetwo\docs\case-assets` (copied to `public/case-pms/`).
Live demo https://nmdc-patient-management.vercel.app, design system /storybook. Do not mention 3fivetwo or Anuitex.

- [x] Step 1 — data: `cases.ts` entry (`/work/patient-management`, client, year 2020), `src/content/case-pms.ts`, assets copied
- [x] Step 2 — page: `PmsBody` sections wired into `/work/[slug]` (tl;dr, overview, goals, users, research + before shots, define + diagrams, design, before/after pairs, decisions, flows gallery, design system, outcome, lessons, CTA)
- [~] Step 3 — verified: 1440 and 375 (no overflow), 32 images load with alt text, diagrams inline, no console errors; still to do: keyboard pass, design-review pass, trim length if wanted
- [ ] Step 4 — first Vercel deploy of the portfolio (needs the user's login); make repos private if wanted

---

## German localization (2026-10-01)

English stays at the root URLs, German lives under `/de`. First visit is always English; the EN · DE switch in the header keeps the current page and section.

- [x] `src/i18n.ts`: `Lang` type, `localePath`, shared interface strings (en/de)
- [x] Routes: `/`, `/work/[slug]`, `/de`, `/de/work/[slug]`; pages render shared `HomePage` / `CasePage` with `lang`
- [x] Header, footer, mobile menu, theme toggle, case list, case header translated; job titles stay English
- [x] Case list data: German fields per case in `cases.ts` (`de`), applied with `localizeCase`
- [x] Four case studies: `case-*.de.ts` content + bodies take `lang` (translated by sub-agents, checked for leftover English)
- [x] SEO: `lang="de"` on German pages, canonical + hreflang alternates
- [x] Verified: all EN/DE routes 200, unknown slug 404, switch keeps the case, mobile 375px, tsc clean
- [ ] Ihor proofreads the German copy (formal "Sie"; case studies in first person)
- Known limit: SVG diagrams and screenshots stay in English

## Analytics — Umami Cloud (2026-10-01)

Cookieless, so no consent banner. Script loads in production builds only (`src/app/layout.tsx`); in development events print to the console.

- [x] Page views (automatic): every case page view, with referrer
- [x] `case-click` from the homepage list (`case`, `lang`)
- [x] `case-scroll` 25/50/75/100 % per case (`case`, `depth`, `lang`)
- [x] `case-time` active reading time, counted only while visible and in use (`case`, `seconds`, `range`, `lang`)
- [x] `outbound` (live demos, design systems), `contact-email`, `contact-linkedin`, `hero-cta`, `lang-switch`
- [ ] Stats start after the first Vercel deploy
- [x] Umami described in the Datenschutzerklärung

## Impressum & Datenschutz (2026-10-01)

German only, at `/de/impressum` and `/de/datenschutz`; the EN · DE switch stays on them. `noindex`. **Not linked from the site yet** (no postal address) — re-add the footer links once the Impressum has an address.

- [x] Impressum: § 5 DDG, contact, § 18 MStV, liability, copyright
- [x] Datenschutzerklärung: hosting (Vercel), Umami, localStorage (theme), local fonts, email, external links, rights, Berlin authority
- [ ] Ihor: postal address in both pages (placeholders `[Straße Hausnummer]`, `[PLZ]`)
- [ ] Check against a generator (e.g. e-recht24.de) or a lawyer before publishing

## SEO & social previews (2026-10-01)

Live at https://ihor-yeromich.vercel.app (`SITE_URL` in `src/lib/site.ts`).

- [x] `robots.txt` (allow all) and `sitemap.xml`: home + 4 cases × EN/DE with hreflang alternates
- [x] `metadataBase` → full canonical and hreflang URLs
- [x] Open Graph / Twitter cards: home EN/DE and every case EN/DE, generated images (`src/lib/og.tsx`)
- [ ] Ihor: verify the site in Google Search Console and submit the sitemap

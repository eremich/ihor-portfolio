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

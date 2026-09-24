// Original abstract SVG mockups — not copies of any real product screen.
// Meant to give case pages visual weight in the dark + typographic aesthetic
// without needing real screenshots yet.

const STROKE = "rgba(255,255,255,0.14)";
const STROKE_STRONG = "rgba(255,255,255,0.28)";
const FILL_TILE = "rgba(255,255,255,0.02)";
const TEXT_INK = "rgba(250,250,250,0.9)";
const TEXT_MUTED = "rgba(255,255,255,0.42)";
const TEXT_FAINT = "rgba(255,255,255,0.24)";
const ACCENT = "rgba(52,209,88,0.7)"; // matches --color-accent

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <figure className="my-14">
      <div className="overflow-hidden rounded-md border border-line bg-paper-raised/40">
        {children}
      </div>
    </figure>
  );
}

// 1. Hero — abstract product overview with a chart curve
export function HeroMock() {
  return (
    <Frame>
      <svg viewBox="0 0 1000 560" className="block w-full" fill="none">
        {/* Ambient grid dots */}
        {Array.from({ length: 20 }, (_, i) => (
          <circle key={i} cx={80 + i * 45} cy={470} r={1} fill={TEXT_FAINT} />
        ))}

        {/* Large metric */}
        <text x={80} y={120} fontFamily="sans-serif" fontSize={22} fill={TEXT_MUTED} letterSpacing={2}>
          CURRENT
        </text>
        <text x={80} y={220} fontFamily="sans-serif" fontSize={92} fontWeight={400} fill={TEXT_INK} letterSpacing={-2}>
          142
        </text>
        <text x={80} y={260} fontFamily="sans-serif" fontSize={18} fill={TEXT_MUTED}>
          mg/dL — in range
        </text>

        {/* Chart curve */}
        <path
          d="M 80 400 C 180 320, 260 380, 340 340 S 500 260, 600 300 S 780 380, 920 320"
          stroke={STROKE_STRONG}
          strokeWidth={2}
          fill="none"
        />
        {/* Filled area under curve */}
        <path
          d="M 80 400 C 180 320, 260 380, 340 340 S 500 260, 600 300 S 780 380, 920 320 L 920 440 L 80 440 Z"
          fill="rgba(255,255,255,0.03)"
        />

        {/* Data points */}
        {[
          [340, 340],
          [600, 300],
          [920, 320],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r={6} fill="rgba(0,0,0,0.9)" stroke={TEXT_INK} strokeWidth={1.5} />
          </g>
        ))}

        {/* Card in top right */}
        <g transform="translate(680, 90)">
          <rect x={0} y={0} width={240} height={130} rx={6} stroke={STROKE} fill={FILL_TILE} />
          <text x={20} y={36} fontFamily="sans-serif" fontSize={11} letterSpacing={2} fill={TEXT_FAINT}>
            LAST INSIGHT
          </text>
          <text x={20} y={70} fontFamily="sans-serif" fontSize={18} fill={TEXT_INK}>
            Steady through breakfast.
          </text>
          <text x={20} y={100} fontFamily="sans-serif" fontSize={14} fill={TEXT_MUTED}>
            Two-hour window · 12% below avg
          </text>
        </g>

        {/* Time markers */}
        {["06", "09", "12", "15", "18"].map((t, i) => (
          <text
            key={t}
            x={80 + i * 210}
            y={498}
            fontFamily="sans-serif"
            fontSize={12}
            fill={TEXT_FAINT}
            letterSpacing={1}
          >
            {t}:00
          </text>
        ))}
      </svg>
    </Frame>
  );
}

// 2. Dashboard — grid of tiles with abstract data
export function DashboardMock() {
  return (
    <Frame>
      <svg viewBox="0 0 1000 560" className="block w-full" fill="none">
        {/* Tile: Range */}
        <g transform="translate(40, 40)">
          <rect x={0} y={0} width={280} height={220} rx={6} stroke={STROKE} fill={FILL_TILE} />
          <text x={20} y={34} fontFamily="sans-serif" fontSize={11} letterSpacing={2} fill={TEXT_FAINT}>
            TIME IN RANGE
          </text>
          <text x={20} y={110} fontFamily="sans-serif" fontSize={54} fill={TEXT_INK} letterSpacing={-1}>
            78%
          </text>
          {/* Progress bar */}
          <rect x={20} y={140} width={240} height={4} rx={2} fill="rgba(255,255,255,0.06)" />
          <rect x={20} y={140} width={187} height={4} rx={2} fill={ACCENT} />
          <text x={20} y={175} fontFamily="sans-serif" fontSize={13} fill={TEXT_MUTED}>
            +5% vs last week
          </text>
        </g>

        {/* Tile: Curve */}
        <g transform="translate(340, 40)">
          <rect x={0} y={0} width={620} height={220} rx={6} stroke={STROKE} fill={FILL_TILE} />
          <text x={20} y={34} fontFamily="sans-serif" fontSize={11} letterSpacing={2} fill={TEXT_FAINT}>
            AVERAGE GLUCOSE
          </text>
          <text x={20} y={78} fontFamily="sans-serif" fontSize={22} fill={TEXT_INK}>
            118 mg/dL
          </text>
          <path
            d="M 20 180 C 100 140, 180 160, 260 140 S 420 100, 500 140 S 580 170, 600 150"
            stroke={STROKE_STRONG}
            strokeWidth={1.5}
            fill="none"
          />
          {[100, 240, 380, 520].map((x, i) => (
            <line key={i} x1={x} y1={100} x2={x} y2={200} stroke={STROKE} strokeDasharray="2 3" />
          ))}
        </g>

        {/* Bottom row of 3 tiles */}
        {["Spikes", "Variability", "Events"].map((label, i) => (
          <g key={label} transform={`translate(${40 + i * 315}, 300)`}>
            <rect x={0} y={0} width={280} height={220} rx={6} stroke={STROKE} fill={FILL_TILE} />
            <text x={20} y={34} fontFamily="sans-serif" fontSize={11} letterSpacing={2} fill={TEXT_FAINT}>
              {label.toUpperCase()}
            </text>
            {/* Sparkline */}
            <path
              d={`M 20 ${150 + i * 8} C 60 ${120 + i * 5}, 100 ${170 - i * 6}, 140 ${140}, 180 ${160}, 220 ${120 + i * 4}, 260 ${145}`}
              stroke={STROKE_STRONG}
              strokeWidth={1.5}
              fill="none"
            />
            <text x={20} y={110} fontFamily="sans-serif" fontSize={38} fill={TEXT_INK} letterSpacing={-1}>
              {["3", "12%", "24"][i]}
            </text>
          </g>
        ))}
      </svg>
    </Frame>
  );
}

// 3. Dual theme — same panel rendered on two backgrounds
export function DualThemeMock() {
  const Panel = ({ dark }: { dark: boolean }) => {
    const bg = dark ? "#0a0a0a" : "#f4efe7"; // dark vs paper light
    const ink = dark ? "#f4efe7" : "#181818";
    const muted = dark ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.55)";
    const line = dark ? "rgba(255,255,255,0.09)" : "rgba(0,0,0,0.08)";
    return (
      <>
        <rect x={0} y={0} width={460} height={520} rx={8} fill={bg} />
        <text x={30} y={54} fontFamily="sans-serif" fontSize={11} letterSpacing={2} fill={muted}>
          {dark ? "DARK" : "LIGHT"}
        </text>
        {/* KPI */}
        <text x={30} y={130} fontFamily="sans-serif" fontSize={64} fill={ink} letterSpacing={-1}>
          142
        </text>
        <text x={30} y={160} fontFamily="sans-serif" fontSize={14} fill={muted}>
          mg/dL — in range
        </text>
        {/* Chart */}
        <path
          d="M 30 300 C 120 240, 200 280, 280 260 S 380 200, 430 240"
          stroke={ink}
          strokeOpacity={dark ? 0.5 : 0.6}
          strokeWidth={1.5}
          fill="none"
        />
        <line x1={30} y1={350} x2={430} y2={350} stroke={line} />
        {/* 3 pills */}
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${30 + i * 135}, 400)`}>
            <rect x={0} y={0} width={120} height={38} rx={19} stroke={line} fill="transparent" />
            <text x={16} y={24} fontFamily="sans-serif" fontSize={13} fill={muted}>
              {["Meal", "Insulin", "Walk"][i]}
            </text>
          </g>
        ))}
      </>
    );
  };
  return (
    <Frame>
      <svg viewBox="0 0 1000 560" className="block w-full" fill="none">
        <g transform="translate(30, 20)">
          <Panel dark />
        </g>
        <g transform="translate(510, 20)">
          <Panel dark={false} />
        </g>
      </svg>
    </Frame>
  );
}

// 4. Flow — before (multi-step) vs after (single modal)
export function FlowMock() {
  return (
    <Frame>
      <svg viewBox="0 0 1000 500" className="block w-full" fill="none">
        {/* Before */}
        <text x={40} y={40} fontFamily="sans-serif" fontSize={11} letterSpacing={2} fill={TEXT_FAINT}>
          BEFORE — 8 CLICKS
        </text>
        {["Type", "Time", "Detail", "Confirm"].map((step, i) => (
          <g key={step} transform={`translate(${40 + i * 105}, 80)`}>
            <rect x={0} y={0} width={90} height={110} rx={4} stroke={STROKE} fill={FILL_TILE} />
            <text x={12} y={26} fontFamily="sans-serif" fontSize={10} letterSpacing={1.5} fill={TEXT_FAINT}>
              STEP {i + 1}
            </text>
            <text x={12} y={64} fontFamily="sans-serif" fontSize={14} fill={TEXT_INK}>
              {step}
            </text>
            <line x1={12} y1={82} x2={78} y2={82} stroke={STROKE} />
            <line x1={12} y1={92} x2={60} y2={92} stroke={STROKE} />
            {i < 3 && (
              <path d="M 92 55 L 105 55" stroke={STROKE_STRONG} markerEnd="url(#arrow)" />
            )}
          </g>
        ))}

        {/* Divider */}
        <line x1={40} y1={230} x2={960} y2={230} stroke={STROKE} strokeDasharray="4 6" />

        {/* After */}
        <text x={40} y={272} fontFamily="sans-serif" fontSize={11} letterSpacing={2} fill={TEXT_FAINT}>
          AFTER — 3 CLICKS
        </text>
        <g transform="translate(320, 300)">
          <rect x={0} y={0} width={360} height={160} rx={8} stroke={STROKE_STRONG} fill="rgba(255,255,255,0.03)" />
          <text x={24} y={38} fontFamily="sans-serif" fontSize={12} letterSpacing={1.5} fill={TEXT_FAINT}>
            LOG EVENT
          </text>
          <text x={24} y={74} fontFamily="sans-serif" fontSize={22} fill={TEXT_INK}>
            Add meal
          </text>
          <text x={24} y={100} fontFamily="sans-serif" fontSize={14} fill={TEXT_MUTED}>
            Auto-time — 12:47
          </text>
          {/* Recent chips */}
          {["Oats", "Salad", "Rice"].map((chip, i) => (
            <g key={chip} transform={`translate(${24 + i * 104}, 118)`}>
              <rect x={0} y={0} width={92} height={28} rx={14} stroke={STROKE} fill="transparent" />
              <text x={16} y={19} fontFamily="sans-serif" fontSize={12} fill={TEXT_MUTED}>
                {chip}
              </text>
            </g>
          ))}
        </g>

        {/* Arrow marker */}
        <defs>
          <marker
            id="arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill={STROKE_STRONG} />
          </marker>
        </defs>
      </svg>
    </Frame>
  );
}

// 5. Library — grid of article cards
export function LibraryMock() {
  const cards = [
    { title: "The Glucose Curve", meta: "6 min · Fundamentals" },
    { title: "Windows That Matter", meta: "4 min · Method" },
    { title: "Reading Variability", meta: "8 min · Data" },
    { title: "Post-Meal Signals", meta: "3 min · Method" },
    { title: "Sleep & Baseline", meta: "5 min · Fundamentals" },
    { title: "Stress in the Data", meta: "7 min · Body" },
  ];
  return (
    <Frame>
      <svg viewBox="0 0 1000 560" className="block w-full" fill="none">
        <text x={40} y={40} fontFamily="sans-serif" fontSize={11} letterSpacing={2} fill={TEXT_FAINT}>
          LIBRARY · 6 ARTICLES
        </text>
        {cards.map((card, i) => {
          const col = i % 3;
          const row = Math.floor(i / 3);
          const x = 40 + col * 310;
          const y = 80 + row * 220;
          return (
            <g key={card.title} transform={`translate(${x}, ${y})`}>
              <rect x={0} y={0} width={290} height={200} rx={6} stroke={STROKE} fill={FILL_TILE} />
              {/* Tag line at top */}
              <text x={20} y={32} fontFamily="sans-serif" fontSize={10} letterSpacing={1.5} fill={TEXT_FAINT}>
                {card.meta.toUpperCase()}
              </text>
              {/* Title */}
              <text x={20} y={90} fontFamily="sans-serif" fontSize={20} fill={TEXT_INK}>
                {card.title}
              </text>
              {/* Body lines */}
              <line x1={20} y1={120} x2={230} y2={120} stroke={STROKE} />
              <line x1={20} y1={138} x2={260} y2={138} stroke={STROKE} />
              <line x1={20} y1={156} x2={180} y2={156} stroke={STROKE} />
              {/* Read more */}
              <text x={20} y={186} fontFamily="sans-serif" fontSize={11} letterSpacing={1} fill={TEXT_MUTED}>
                READ →
              </text>
            </g>
          );
        })}
      </svg>
    </Frame>
  );
}

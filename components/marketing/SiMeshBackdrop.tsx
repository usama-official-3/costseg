/**
 * Board-inspired fiber waves: dense lime/gold streams BL→TR + luminous dots.
 * Atmosphere only — original paths, not a copy of board artwork.
 */
export function SiMeshBackdrop() {
  const waves: Array<{
    d: string;
    stroke: string;
    opacity: number;
    width: number;
  }> = [
    // Bottom-left cluster — denser, brighter (board weight sits here)
    {
      d: "M-80 580C40 540 140 620 280 560C420 500 520 540 680 480C840 420 980 380 1140 400C1280 418 1380 380 1520 340",
      stroke: "#D6FF43",
      opacity: 0.28,
      width: 1.15,
    },
    {
      d: "M-80 620C60 575 180 660 320 590C460 520 580 560 740 495C900 430 1040 390 1200 415C1320 435 1400 410 1520 375",
      stroke: "#C8B56A",
      opacity: 0.22,
      width: 1,
    },
    {
      d: "M-60 540C80 505 200 585 360 525C520 465 660 505 820 445C980 385 1100 355 1260 375C1360 388 1440 365 1520 345",
      stroke: "#D6FF43",
      opacity: 0.2,
      width: 0.95,
    },
    {
      d: "M-40 500C100 470 220 545 380 490C540 435 700 470 860 415C1020 360 1160 340 1320 355C1400 363 1460 350 1520 335",
      stroke: "#E8D98A",
      opacity: 0.16,
      width: 0.85,
    },
    {
      d: "M-20 460C120 435 240 500 400 450C560 400 720 430 880 380C1040 330 1180 315 1340 330C1420 338 1470 325 1520 315",
      stroke: "#D6FF43",
      opacity: 0.14,
      width: 0.8,
    },
    {
      d: "M40 640C200 560 340 600 480 530C620 460 760 500 920 440C1080 380 1220 400 1380 370C1450 358 1490 350 1540 340",
      stroke: "#D6FF43",
      opacity: 0.18,
      width: 0.9,
    },
    {
      d: "M120 660C280 580 420 620 560 550C700 480 840 520 1000 460C1160 400 1300 420 1460 390",
      stroke: "#C8B56A",
      opacity: 0.15,
      width: 0.85,
    },
    // Mid sweep
    {
      d: "M-40 380C140 350 280 420 460 370C640 320 800 350 980 310C1140 275 1280 290 1460 270C1500 266 1520 262 1540 258",
      stroke: "#D6FF43",
      opacity: 0.12,
      width: 0.75,
    },
    {
      d: "M200 420C360 380 500 440 660 390C820 340 960 360 1120 330C1260 305 1380 315 1520 295",
      stroke: "#C8B56A",
      opacity: 0.11,
      width: 0.7,
    },
    // Top-right cluster (board weight)
    {
      d: "M640 20C820 70 960 10 1140 65C1280 110 1380 80 1540 120",
      stroke: "#D6FF43",
      opacity: 0.24,
      width: 1.05,
    },
    {
      d: "M700 55C880 105 1020 40 1200 95C1320 135 1400 115 1540 150",
      stroke: "#C8B56A",
      opacity: 0.2,
      width: 0.95,
    },
    {
      d: "M760 95C940 145 1080 75 1260 130C1360 165 1440 150 1540 175",
      stroke: "#D6FF43",
      opacity: 0.16,
      width: 0.85,
    },
    {
      d: "M820 130C980 175 1120 110 1280 160C1380 190 1450 180 1540 200",
      stroke: "#E8D98A",
      opacity: 0.13,
      width: 0.75,
    },
    {
      d: "M580 -10C760 40 900 -20 1080 35C1220 80 1340 50 1540 90",
      stroke: "#D6FF43",
      opacity: 0.14,
      width: 0.8,
    },
  ];

  const dots: Array<[number, number, number, number]> = [
    // [cx, cy, r, opacity]
    [40, 565, 1.9, 0.7],
    [110, 540, 1.3, 0.45],
    [180, 575, 1.6, 0.55],
    [250, 530, 1.2, 0.4],
    [320, 555, 1.8, 0.65],
    [390, 505, 1.3, 0.4],
    [460, 530, 1.5, 0.5],
    [540, 475, 1.2, 0.35],
    [620, 500, 1.7, 0.55],
    [700, 440, 1.3, 0.4],
    [780, 465, 1.5, 0.5],
    [860, 410, 1.2, 0.35],
    [940, 430, 1.6, 0.55],
    [1020, 395, 1.3, 0.4],
    [1100, 415, 1.4, 0.45],
    [1180, 385, 1.2, 0.35],
    [1260, 400, 1.7, 0.55],
    [1340, 370, 1.3, 0.4],
    [1420, 355, 1.5, 0.5],
    [200, 610, 1.4, 0.4],
    [360, 580, 1.2, 0.35],
    [520, 540, 1.5, 0.45],
    [680, 490, 1.2, 0.3],
    [840, 450, 1.4, 0.4],
    [1000, 420, 1.2, 0.35],
    [720, 55, 1.8, 0.6],
    [800, 80, 1.3, 0.4],
    [880, 45, 1.5, 0.5],
    [960, 85, 1.2, 0.35],
    [1040, 55, 1.7, 0.55],
    [1120, 95, 1.3, 0.4],
    [1200, 70, 1.5, 0.5],
    [1280, 110, 1.2, 0.35],
    [1360, 90, 1.6, 0.55],
    [1440, 125, 1.3, 0.4],
    [1500, 145, 1.4, 0.45],
    [780, 120, 1.2, 0.3],
    [980, 130, 1.3, 0.35],
    [1180, 145, 1.2, 0.3],
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Soft corner washes — match board atmosphere without heavy ink overlays */}
      <div className="absolute -left-[12%] bottom-[-30%] h-[70%] w-[55%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(214,255,67,0.07)_0%,transparent_70%)] blur-3xl" />
      <div className="absolute -right-[8%] top-[-25%] h-[55%] w-[45%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(214,255,67,0.06)_0%,transparent_70%)] blur-3xl" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 640"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="si-dot-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="1.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {waves.map((w, i) => (
          <path
            key={i}
            d={w.d}
            stroke={w.stroke}
            strokeOpacity={w.opacity}
            strokeWidth={w.width}
            strokeLinecap="round"
          />
        ))}

        {dots.map(([cx, cy, r, op], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={r}
            fill="#D6FF43"
            fillOpacity={op}
            filter={i % 3 === 0 ? "url(#si-dot-glow)" : undefined}
          />
        ))}
      </svg>
    </div>
  );
}

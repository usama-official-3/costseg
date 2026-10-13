/** Original lime mesh / wave graphic for SI technology band — not copied from design board. */
export function SiMeshBackdrop() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.35]"
      viewBox="0 0 1200 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="cs-mesh-fade" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D6FF43" stopOpacity="0.22" />
          <stop offset="55%" stopColor="#D6FF43" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#D6FF43" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 420C180 360 280 500 460 440C640 380 720 260 900 300C1040 330 1120 280 1200 240"
        stroke="url(#cs-mesh-fade)"
        strokeWidth="1.5"
      />
      <path
        d="M0 480C200 420 320 540 500 470C680 400 780 300 960 340C1080 365 1140 320 1200 300"
        stroke="#D6FF43"
        strokeOpacity="0.12"
        strokeWidth="1"
      />
      <circle cx="180" cy="160" r="48" stroke="#D6FF43" strokeOpacity="0.14" />
      <circle cx="180" cy="160" r="88" stroke="#D6FF43" strokeOpacity="0.07" />
      <circle cx="980" cy="120" r="36" stroke="#D6FF43" strokeOpacity="0.12" />
      <circle cx="980" cy="120" r="72" stroke="#D6FF43" strokeOpacity="0.06" />
      <g stroke="#D6FF43" strokeOpacity="0.08" strokeWidth="1">
        <path d="M720 40v120M660 100h120" />
        <path d="M320 520v80M280 560h80" />
      </g>
    </svg>
  );
}

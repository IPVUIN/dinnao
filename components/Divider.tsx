type DividerProps = {
  variant: 1 | 2 | 3 | 4;
};

const PATHS: Record<number, { d: string; fill: string; className: string }> = {
  1: {
    d: "M0,44 L60,14 L120,58 L180,18 L240,60 L300,22 L360,52 L420,8 L480,46 L540,26 L600,60 L660,12 L720,50 L780,16 L840,56 L900,20 L960,46 L1020,10 L1080,50 L1140,20 L1200,42 L1200,64 L0,64 Z",
    fill: "#FBF8F2",
    className: "div-1",
  },
  2: {
    d: "M0,40 L100,28 L200,48 L300,25 L400,45 L500,30 L600,48 L700,28 L800,45 L900,30 L1000,45 L1100,28 L1200,40 L1200,64 L0,64 Z",
    fill: "#F3ECDD",
    className: "div-2",
  },
  3: {
    d: "M0,38 L200,34 L400,42 L600,34 L800,42 L1000,34 L1200,38 L1200,64 L0,64 Z",
    fill: "#FBF8F2",
    className: "div-3",
  },
  4: {
    d: "M0,36 C150,20 300,20 450,36 C600,52 750,52 900,36 C1050,20 1150,20 1200,32 L1200,60 L0,60 Z",
    fill: "#2E2013",
    className: "div-4",
  },
};

/**
 * เส้นแบ่ง section รูปแบบ "ดินแตกระแหง" ที่ค่อยๆ เรียบขึ้นเมื่อเลื่อนหน้าลงมา
 * variant 1 = แตกระแหงมากสุด (หลัง Hero) ... variant 4 = เรียบสุด (หลัง Why)
 */
export default function Divider({ variant }: DividerProps) {
  const { d, fill, className } = PATHS[variant];
  const viewBoxHeight = variant === 4 ? 60 : 64;
  return (
    <svg
      className={`divider ${className}`}
      viewBox={`0 0 1200 ${viewBoxHeight}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d={d} fill={fill} />
    </svg>
  );
}

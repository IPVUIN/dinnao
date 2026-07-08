import Divider from "./Divider";

export default function Why() {
  return (
    <section className="why">
      <div className="wrap">
        <div className="why-inner">
          <div data-reveal>
            <span className="eyebrow">ทำไมต้องดินเน่า</span>
            <h2>ดูแลจากรากถึงผลผลิต</h2>
            <p>
              ดินดีคือจุดเริ่มต้นของพืชที่แข็งแรง ดินเน่าช่วยให้ทุกการลงทุนเรื่องปุ๋ยและการดูแลแปลงของคุณ
              ได้ผลลัพธ์เต็มเม็ดเต็มหน่วยมากขึ้น
            </p>
            <div className="stat-row">
              <div className="stat"><b>7</b><span>จุดเด่นหลัก</span></div>
              <div className="stat"><b>12+</b><span>ชนิดพืชที่ใช้ได้</span></div>
              <div className="stat"><b>100%</b><span>เข้มข้นจากธรรมชาติ</span></div>
            </div>
          </div>
          <div className="why-visual" data-reveal>
            <svg viewBox="0 0 300 280" width="100%" height="100%">
              <rect x="10" y="120" width="280" height="150" rx="8" fill="#6B4423" />
              <g stroke="#8AA671" strokeWidth={3.5} fill="none" strokeLinecap="round">
                <path d="M60 130 C55 165, 40 175, 30 205" />
                <path d="M150 130 C150 170, 150 200, 150 240" />
                <path d="M240 130 C245 165, 260 175, 270 205" />
              </g>
              <g fill="#5B7B4F">
                <rect x="56" y="60" width="8" height="70" rx="4" />
                <rect x="146" y="40" width="8" height="90" rx="4" />
                <rect x="236" y="60" width="8" height="70" rx="4" />
                <ellipse cx="60" cy="55" rx="20" ry="14" />
                <ellipse cx="150" cy="35" rx="24" ry="16" />
                <ellipse cx="240" cy="55" rx="20" ry="14" />
              </g>
              <g fill="#D98A3D" opacity={0.8}>
                <circle cx="90" cy="200" r="4" />
                <circle cx="200" cy="220" r="4" />
                <circle cx="120" cy="240" r="3.5" />
                <circle cx="260" cy="240" r="3.5" />
                <circle cx="40" cy="240" r="3.5" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <Divider variant={4} />
    </section>
  );
}

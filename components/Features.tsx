import { features } from "@/lib/data";
import Divider from "./Divider";

const ICONS = [
  <path key="1" d="M3 20c4-2 6-6 9-6s5 4 9 6M3 14c4-2 6-6 9-6s5 4 9 6" />,
  <g key="2"><circle cx="7" cy="8" r="2" /><circle cx="17" cy="7" r="1.6" /><circle cx="12" cy="16" r="2.2" /><circle cx="18" cy="17" r="1.4" /></g>,
  <path key="3" d="M12 3v10M12 13c-3 0-5 2-5 5M12 13c3 0 5 2 5 5" />,
  <path key="4" d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />,
  <path key="5" d="M12 21c-4-3-7-6-7-10a7 7 0 0114 0c0 4-3 7-7 10z" />,
  <path key="6" d="M4 15c4 3 12 3 16 0M4 9c4 3 12 3 16 0" />,
  <g key="7"><path d="M12 2v20M2 12h20" /><circle cx="12" cy="12" r="9" /></g>,
];

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="wrap">
        <span className="eyebrow">จุดเด่น</span>
        <h2 data-reveal>7 เหตุผลที่ดินของคุณต้องการดินเน่า</h2>
        <div className="feat-grid">
          {features.map((f, i) => (
            <div className="feat-card" data-reveal key={f.title}>
              <span className="feat-num">{String(i + 1).padStart(2, "0")}</span>
              <div className="feat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
                  {ICONS[i]}
                </svg>
              </div>
              <div className="feat-body">
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Divider variant={3} />
    </section>
  );
}

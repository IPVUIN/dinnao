import Image from "next/image";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/data";
import Divider from "./Divider";

const HIGHLIGHTS = [
  "จุลินทรีย์คุณภาพสูง ช่วยปรับโครงสร้างดิน",
  "เพิ่มความร่วนซุย อุ้มน้ำ ระบายน้ำดี",
  "เหมาะสำหรับพืชทุกชนิด",
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy" data-reveal>
          <span className="eyebrow">สารปรับปรุงบำรุงดิน สูตรจุลินทรีย์เข้มข้น</span>
          <h1 className="hero-title">
            ดินเน่า
            <span className="hero-tagline">ฟื้นฟูดิน เพิ่มผลผลิต</span>
          </h1>
          <p className="hero-lead">
            คืนชีวิตให้ผืนดินที่เสื่อมโทรม ดินแน่น ดินแข็ง ให้กลับมาร่วนซุย
            รากพืชแข็งแรง ดูดซึมธาตุอาหารได้เต็มที่ เห็นผลจริงทั้งนาข้าว พืชไร่ และไม้ผล
          </p>
          <ul className="hero-points">
            {HIGHLIGHTS.map((h) => (
              <li key={h}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12.5l5 5L20 6.5" />
                </svg>
                {h}
              </li>
            ))}
          </ul>
          <div className="hero-cta">
            <a href="#channels" className="btn btn-primary">สั่งซื้อดินเน่า</a>
            <a href="#products" className="btn btn-ghost">ดูสินค้าทั้งหมด</a>
          </div>
          <a href={`tel:${PHONE_TEL}`} className="phone-chip">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.6 10.8c1.4 2.7 3.5 4.8 6.2 6.2l2.1-2.1c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5.6c0-.6.4-1 1-1h3.7c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1l-2.1 2.1z" />
            </svg>
            โทรสั่งซื้อ {PHONE_DISPLAY}
          </a>
        </div>

        <div className="hero-visual" data-reveal>
          <Image
            src="/hero-banner.jpg"
            alt="แบนเนอร์ผลิตภัณฑ์ดินเน่า ฟื้นฟูดิน เพิ่มผลผลิต จุลินทรีย์คุณภาพสูงช่วยปรับโครงสร้างดิน เหมาะสำหรับพืชทุกชนิด โทร 063-275-4444"
            width={1586}
            height={992}
            priority
            className="hero-banner-img"
          />
        </div>
      </div>
      <Divider variant={1} />
    </section>
  );
}

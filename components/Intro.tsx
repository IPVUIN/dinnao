import Image from "next/image";

const HIGHLIGHTS = [
  "ฟื้นฟูดินเสื่อม ดินแน่น ดินแข็ง",
  "เพิ่มจุลินทรีย์ที่เป็นประโยชน์ในดิน",
  "กระตุ้นการแตกราก รากแข็งแรง",
  "ช่วยให้พืชดูดซึมธาตุอาหารได้ดี",
  "ลดปัญหารากเน่า โคนเน่า จากสภาพดิน",
  "ช่วยให้ดินอุ้มน้ำและระบายน้ำดีขึ้น",
  "ใช้ได้กับพืชทุกชนิด",
];

export default function Intro() {
  return (
    <section className="about" id="about">
      <div className="wrap about-grid">
        <div data-reveal>
          <span className="eyebrow">ทำความรู้จัก</span>
          <h2>ดินเน่า คืออะไร</h2>
          <p>
            ดินเน่า เป็นผลิตภัณฑ์ปรับปรุงบำรุงดิน ช่วยฟื้นฟูสภาพดินให้ร่วนซุย
            เพิ่มจุลินทรีย์ที่เป็นประโยชน์ ลดปัญหาดินเสื่อม ดินแน่นแข็ง
            ดินเป็นกรด-ด่างไม่สมดุล และช่วยให้รากพืชแข็งแรง
            ดูดซึมธาตุอาหารได้ดีขึ้น
          </p>
          <b className="about-sub">จุดเด่น</b>
          <ul className="about-points">
            {HIGHLIGHTS.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
        <div className="about-bottles" data-reveal>
          <Image
            src="/products/img.png"
            alt="ขวดผลิตภัณฑ์ดินเน่า"
            width={260}
            height={520}
            className="about-bottle main"
          />
        </div>
      </div>
    </section>
  );
}

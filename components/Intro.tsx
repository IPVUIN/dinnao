import Image from "next/image";
import Divider from "./Divider";

export default function Intro() {
  return (
    <section className="intro" id="intro">
      <div className="wrap intro-grid">
        <div data-reveal>
          <span className="eyebrow">ทำความรู้จัก</span>
          <h2>ดินเน่า คืออะไร</h2>
          <p>
            ดินเน่า เป็นผลิตภัณฑ์ปรับปรุงบำรุงดิน ช่วยฟื้นฟูสภาพดินให้ร่วนซุย เพิ่มจุลินทรีย์ที่เป็นประโยชน์
            ลดปัญหาดินเสื่อม ดินแน่นแข็ง ดินเป็นกรด-ด่างไม่สมดุล และช่วยให้รากพืชแข็งแรง
            ดูดซึมธาตุอาหารได้ดีขึ้น
          </p>
          <p>
            เมื่อดินขาดจุลินทรีย์และโครงสร้างเสื่อมโทรม รากพืชจะชอนไชได้ยาก การดูดซึมธาตุอาหารลดลง
            แม้จะใส่ปุ๋ยเท่าไหร่ก็ไม่เต็มประสิทธิภาพ ดินเน่าเข้าไปแก้ปัญหาตั้งแต่ต้นทาง
            คือฟื้นฟูโครงสร้างและระบบนิเวศในดินให้กลับมาสมบูรณ์อีกครั้ง
          </p>
          <div className="intro-fact">
            <b>เหมาะกับดินแบบไหน</b>
            ดินที่ผ่านการใช้งานต่อเนื่อง ดินแน่น ดินขาดอินทรียวัตถุ หรือแปลงที่พืชแสดงอาการรากอ่อนแอ โตช้า
          </div>
          <div className="intro-fact">
            <b>ผลลัพธ์ที่คาดหวัง</b>
            ดินร่วนซุยขึ้น อุ้มน้ำและระบายน้ำดีขึ้น รากพืชแข็งแรง ลดความเสี่ยงโรครากเน่าโคนเน่าจากสภาพดิน
          </div>
        </div>
        <div className="intro-bottle" data-reveal>
          <div className="intro-blob" aria-hidden="true" />
          <Image
            src="/products/dinnao.png"
            alt="ขวดผลิตภัณฑ์ดินเน่า"
            width={420}
            height={840}
            className="intro-bottle-img"
          />
          <div className="intro-chip intro-chip-1">ฟื้นฟูดินเสื่อม</div>
          <div className="intro-chip intro-chip-2">รากแข็งแรง โตไว</div>
        </div>
      </div>
      <Divider variant={2} />
    </section>
  );
}

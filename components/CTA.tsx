export default function CTA() {
  return (
    <section className="cta" id="contact">
      <div className="wrap">
        <span className="eyebrow" style={{ color: "var(--leaf-light)" }}>
          พร้อมฟื้นฟูดินของคุณแล้วหรือยัง
        </span>
        <h2 data-reveal>คืนความร่วนซุยให้ผืนดิน เริ่มต้นวันนี้</h2>
        <p>ทักหาเราเพื่อสอบถามข้อมูลสินค้า วิธีใช้ และช่องทางการสั่งซื้อดินเน่าสำหรับแปลงของคุณ</p>
        <div className="cta-buttons">
          {/* TODO: เปลี่ยน href เป็นลิงก์ LINE OA จริง */}
<a href="tel:0632754444" className="btn btn-primary">โทรสอบถามข้อมูล</a>
        </div>
      </div>
    </section>
  );
}

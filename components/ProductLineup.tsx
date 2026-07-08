import Image from "next/image";
import { products } from "@/lib/data";

export default function ProductLineup() {
  return (
    <section className="lineup" id="products">
      <div className="wrap">
        <span className="eyebrow">สินค้าในเครือดินเน่า</span>
        <h2 data-reveal>รายละเอียดสินค้าหลักแต่ละตัว</h2>
        <p className="lead">
          ผลิตภัณฑ์ในเครือดินเน่าแต่ละตัว ออกแบบมาเพื่อดูแลดินและพืชในแต่ละด้าน ใช้ร่วมกันได้เพื่อผลลัพธ์ที่ครบวงจร
        </p>
        <div className="lineup-grid">
          {products.map((p) => (
            <div className="product-card" data-reveal key={p.id}>
              <div className="product-photo">
                <Image src={p.image} alt={p.name} width={200} height={320} />
              </div>
              <h3>{p.name}</h3>
              <p className="product-tagline">{p.tagline}</p>
              <ul className="product-feats">
                {p.features.map((f) => (
                  <li key={f}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 12.5l5 5L20 6.5" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="product-suit">
                <b>เหมาะสำหรับ</b>
                {p.suitableFor}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { products, Product } from "@/lib/data";

export default function ProductLineup() {
  const [lightbox, setLightbox] = useState<Product | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <section className="lineup" id="products">
      <div className="wrap">
        <h2 data-reveal>รายละเอียดสินค้า</h2>
        <div className="lineup-grid">
          {products.map((p) => (
            <div className="product-card" data-reveal key={p.id}>
              <button
                type="button"
                className="product-photo"
                onClick={() => setLightbox(p)}
                aria-label={`ดูรูป${p.name}ขนาดใหญ่`}
                title="กดเพื่อดูรูปขนาดใหญ่"
              >
                <Image src={p.image} alt={p.name} width={160} height={260} />
                <span className="product-zoom" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                    <circle cx="11" cy="11" r="7" />
                    <path d="M21 21l-4.5-4.5M11 8v6M8 11h6" />
                  </svg>
                </span>
              </button>
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

      {lightbox && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`รูป${lightbox.name}ขนาดใหญ่`}
          onClick={() => setLightbox(null)}
        >
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setLightbox(null)}
              aria-label="ปิด"
            >
              ✕
            </button>
            <Image src={lightbox.image} alt={lightbox.name} width={520} height={840} className="lightbox-img" />
            <div className="lightbox-caption">
              <b>{lightbox.name}</b>
              {lightbox.tagline}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

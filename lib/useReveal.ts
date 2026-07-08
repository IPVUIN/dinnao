"use client";

import { useEffect } from "react";

/**
 * เปิดใช้อนิเมชัน fade-in สำหรับทุก element ที่มี attribute [data-reveal]
 * เรียกครั้งเดียวใน layout หรือ page หลัก
 */
export function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

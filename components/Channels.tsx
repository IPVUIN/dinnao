import type { ReactNode } from "react";
import { channels } from "@/lib/data";

const ICONS: Record<string, ReactNode> = {
  live: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <circle cx="12" cy="12" r="3" />
      <path d="M5 8a9 9 0 000 8M19 8a9 9 0 010 8M8 5a13 13 0 000 14M16 5a13 13 0 010 14" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.25-1.5 1.55-1.5H16.7V3.7C16.4 3.66 15.4 3.6 14.2 3.6c-2.5 0-4.2 1.5-4.2 4.3v2h-2.7v3.1h2.7v8h3.5z" />
    </svg>
  ),
  tiktok: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.6 5.8c-.9-.8-1.4-1.9-1.4-3.1h-3v13.4c0 1.5-1.2 2.7-2.7 2.7A2.7 2.7 0 019.9 13.5c1.1 0 2 .4 2.7 1.1v-3.1c-.6-.1-1.2-.1-1.8-.1a5.7 5.7 0 00-5.7 5.7 5.7 5.7 0 0011.3 1V9.3a8 8 0 004.6 1.5V7.7c-1.4 0-2.7-.5-3.4-1.9z" />
    </svg>
  ),
  shopee: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path d="M6 8h12l1 12a2 2 0 01-2 2H7a2 2 0 01-2-2L6 8z" />
      <path d="M9 8a3 3 0 016 0" />
    </svg>
  ),
};

export default function Channels() {
  return (
    <section className="channels" id="channels" style={{ paddingTop: 64 }}>
      <div className="wrap">
        <span className="eyebrow">ช่องทางการสั่งซื้อ</span>
        <h2 data-reveal>เลือกช่องทางที่คุณสะดวก</h2>
        <p className="lead">
          ติดตามและสั่งซื้อดินเน่าได้จากช่องทางต่อไปนี้
        </p>
        <div className="channel-grid">
          {channels.map((c) => (
            <a
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="channel-card"
              data-reveal
              key={c.id}
            >
              <div className={`channel-icon ${c.colorClass}`}>{ICONS[c.id]}</div>
              <h3>{c.label}</h3>
              <p>{c.placeholder}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

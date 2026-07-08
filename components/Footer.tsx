import { PHONE_DISPLAY, LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot-inner">
        <div className="foot-logo">
          <span className="dot" />
          ดินเน่า
        </div>
        <div className="foot-meta">
          ผลิตภัณฑ์ปรับปรุงบำรุงดิน &middot; โทร {PHONE_DISPLAY} &middot; 
        </div>
        <div className="foot-social">
          <a href={LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook Page">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.25-1.5 1.55-1.5H16.7V3.7C16.4 3.66 15.4 3.6 14.2 3.6c-2.5 0-4.2 1.5-4.2 4.3v2h-2.7v3.1h2.7v8h3.5z" />
            </svg>
          </a>
          <a href={LINKS.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.6 5.8c-.9-.8-1.4-1.9-1.4-3.1h-3v13.4c0 1.5-1.2 2.7-2.7 2.7A2.7 2.7 0 019.9 13.5c1.1 0 2 .4 2.7 1.1v-3.1c-.6-.1-1.2-.1-1.8-.1a5.7 5.7 0 00-5.7 5.7 5.7 5.7 0 0011.3 1V9.3a8 8 0 004.6 1.5V7.7c-1.4 0-2.7-.5-3.4-1.9z" />
            </svg>
          </a>
          <a href={LINKS.shopee} target="_blank" rel="noopener noreferrer" aria-label="Shopee">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
              <path d="M6 8h12l1 12a2 2 0 01-2 2H7a2 2 0 01-2-2L6 8z" />
              <path d="M9 8a3 3 0 016 0" />
            </svg>
          </a>
        </div>
      </div>
     
    </footer>
  );
}

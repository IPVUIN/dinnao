import { PHONE_DISPLAY, PHONE_TEL, LINKS } from "@/lib/data";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-inner">
        <a className="topbar-phone" href={`tel:${PHONE_TEL}`}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.6 10.8c1.4 2.7 3.5 4.8 6.2 6.2l2.1-2.1c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5.6c0-.6.4-1 1-1h3.7c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1l-2.1 2.1z" />
          </svg>
          โทร {PHONE_DISPLAY}
        </a>
        <div className="topbar-social">
          <a href={LINKS.facebook} target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.25-1.5 1.55-1.5H16.7V3.7C16.4 3.66 15.4 3.6 14.2 3.6c-2.5 0-4.2 1.5-4.2 4.3v2h-2.7v3.1h2.7v8h3.5z" />
            </svg>
            Facebook Page
          </a>
          <a href={LINKS.tiktok} target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.6 5.8c-.9-.8-1.4-1.9-1.4-3.1h-3v13.4c0 1.5-1.2 2.7-2.7 2.7A2.7 2.7 0 019.9 13.5c1.1 0 2 .4 2.7 1.1v-3.1c-.6-.1-1.2-.1-1.8-.1a5.7 5.7 0 00-5.7 5.7 5.7 5.7 0 0011.3 1V9.3a8 8 0 004.6 1.5V7.7c-1.4 0-2.7-.5-3.4-1.9z" />
            </svg>
            TikTok
          </a>
          <a href={LINKS.shopee} target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 8h12l1 12a2 2 0 01-2 2H7a2 2 0 01-2-2L6 8zM9 8a3 3 0 016 0" />
            </svg>
            Shopee
          </a>
        </div>
      </div>
    </div>
  );
}

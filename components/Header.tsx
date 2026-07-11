import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="logo" aria-label="Dinnao Shop กลับขึ้นด้านบน">
          <Image src="/logo.jpg" alt="โลโก้ Dinnao Shop" width={52} height={52} className="logo-img" />
        </a>
        <nav className="links">
          <a href="#top">หน้าแรก</a>
          <a href="#channels">ช่องทาง</a>
          <a href="#about">เกี่ยวกับ</a>
          <a href="#crops">พืชที่ใช้ได้</a>
          <a href="#results">ผลลัพธ์</a>
          <a href="#products">สินค้า</a>
        </nav>
        <div className="nav-actions">
          <ThemeToggle />
          <a href="#channels" className="btn btn-primary navcta">
            สั่งซื้อ
          </a>
        </div>
      </div>
    </header>
  );
}

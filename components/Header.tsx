import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="logo">
          <span className="dot" />
          ดินเน่า
        </a>
        <nav className="links">
          <a href="#channels">ช่องทางสั่งซื้อ</a>
          <a href="#intro">ดินเน่าคืออะไร</a>{" "}
          <a href="#products">สินค้าในเครือ</a>
          <a href="#features">จุดเด่น</a>
          <a href="#crops">ใช้ได้กับพืชอะไรบ้าง</a>
        </nav>
        <div className="nav-actions">
          <ThemeToggle />
          <a href="#channels" className="btn btn-primary navcta">
            สั่งซื้อดินเน่า
          </a>
        </div>
      </div>
    </header>
  );
}

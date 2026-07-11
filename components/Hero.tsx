import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <Image
        src="/hero-banner.jpg"
        alt="แบนเนอร์ผลิตภัณฑ์ดินเน่า ฟื้นฟูดิน เพิ่มผลผลิต จุลินทรีย์คุณภาพสูงช่วยปรับโครงสร้างดิน เหมาะสำหรับพืชทุกชนิด โทร 063-275-4444"
        width={1586}
        height={992}
        priority
        className="hero-banner-img"
      />
    </section>
  );
}

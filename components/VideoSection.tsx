export default function VideoSection() {
  return (
    <section className="video-section" id="results">
      <div className="wrap">
        <span className="eyebrow center">ผลลัพธ์</span>
        <h2 className="center" data-reveal>ผลลัพธ์จากการใช้จริง</h2>
        <div className="video-frame" data-reveal>
          <video controls preload="metadata" playsInline>
            <source src="/dinnao-clip.mp4" type="video/mp4" />
            เบราว์เซอร์ของคุณไม่รองรับการเล่นวิดีโอ
          </video>
        </div>
      </div>
    </section>
  );
}

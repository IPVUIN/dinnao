type CropDef = { name: string; icon: string };

// icon = SVG inner markup (paths/circles) เฉพาะของพืชแต่ละชนิด
const CROPS: CropDef[] = [
  { name: "นาข้าว", icon: '<path d="M12 3c3 3 3 7 0 10-3-3-3-7 0-10z"/><path d="M12 13v8"/>' },
  { name: "อ้อย", icon: '<path d="M12 2v20M8 6l4-2 4 2M8 12l4-2 4 2M8 18l4-2 4 2"/>' },
  { name: "มันสำปะหลัง", icon: '<circle cx="12" cy="9" r="4"/><path d="M12 13v8"/>' },
  { name: "ข้าวโพด", icon: '<path d="M12 2v20"/><path d="M6 8c0-3 2.5-5 6-6 3.5 1 6 3 6 6-3 2-9 2-12 0z"/>' },
  { name: "ยางพารา", icon: '<path d="M12 2v20"/><path d="M12 6c-3 0-5 2-5 5M12 10c3 0 5 2 5 5"/>' },
  { name: "ปาล์มน้ำมัน", icon: '<path d="M12 2v20"/><path d="M4 10c3 2 5 2 8 0 3 2 5 2 8 0"/>' },
  { name: "ทุเรียน", icon: '<circle cx="12" cy="13" r="6"/><path d="M12 7V3M9 4l3-1 3 1"/>' },
  { name: "มังคุด", icon: '<circle cx="12" cy="13" r="6"/><path d="M12 7V4"/>' },
  { name: "ลำไย", icon: '<circle cx="9" cy="12" r="3.4"/><circle cx="15" cy="14" r="3"/><path d="M12 4v4"/>' },
  { name: "มะม่วง", icon: '<path d="M6 16c0-5 4-9 12-11-1 8-6 12-12 11z"/>' },
  { name: "ผักทุกชนิด", icon: '<path d="M12 21c-4-3-7-6-7-10a7 7 0 0114 0c0 4-3 7-7 10z"/>' },
  { name: "ไม้ผลทุกประเภท", icon: '<path d="M12 2v20M8 6l4-2 4 2M8 18l4 2 4-2"/>' },
];

export default function Crops() {
  return (
    <section className="crops" id="crops">
      <div className="wrap">
        <span className="eyebrow">ใช้ได้กับ</span>
        <h2 data-reveal>พืชทุกชนิด ตั้งแต่นาข้าวถึงไม้ผล</h2>
        <p className="lead">ดินเน่าออกแบบมาให้ใช้ได้กว้างครอบคลุมทั้งพืชไร่ ไม้ผลเศรษฐกิจ และแปลงผัก</p>
        <div className="crop-grid">
          {CROPS.map((crop) => (
            <div className="crop-chip" data-reveal key={crop.name}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
                dangerouslySetInnerHTML={{ __html: crop.icon }}
              />
              <span>{crop.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

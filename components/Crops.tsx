import Image from "next/image";
type CropDef = { name: string; icon: string };

// icon = SVG inner markup (paths/circles) เฉพาะของพืชแต่ละชนิด
// หากมีรูปถ่ายจริง ให้วางไฟล์ไว้ที่ public/crops/ แล้วเปลี่ยน tile เป็น <Image>
const CROPS = [
  { name: "นาข้าว", icon: "/plants/na.png" },
  {
    name: "อ้อย",
    icon: "/plants/ooi.png",
  },
  {
    name: "มันสำปะหลัง",
    icon: "/plants/mun.png",
  },
   {
     name: "ข้าวโพด",
    icon: "/plants/kaopod.png",
   },
  {
    name: "ยางพารา",
    icon: "/plants/para.png",
  },
  {
    name: "ปาล์มน้ำมัน",
    icon: "/plants/palm.png",
  },
  {
    name: "ทุเรียน",
    icon: "/plants/turien.png",
  },
  {
    name: "มังคุด",
    icon: "/plants/mangkut.png",
  },
  {
    name: "ลำไย",
    icon: "/plants/lumyai.png",
  },
  { name: "มะม่วง", icon: "/plants/mamoung.png" },
  {
    name: "ผักทุกชนิด",
    icon: "/plants/puk.png",
  },
  {
    name: "ไม้ผลทุกประเภท",
    icon: "/plants/maipon.png",
  },
];

export default function Crops() {
  return (
    <section className="crops" id="crops">
      <div className="wrap">
        <h2 className="center" data-reveal>
          พืชที่ใช้ได้
        </h2>
        <div className="crop-grid">
          {CROPS.map((crop) => (
            <div className="crop-tile" data-reveal key={crop.name}>
              <div className="crop-img">
                <Image
                  src={crop.icon}
                  alt={crop.name}
                  fill
                  className="crop-image"
                />
              </div>
              <div className="crop-label">{crop.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

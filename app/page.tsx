import Banner from "./components/common/Banner";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col font-sans w-full">
      <Banner
        title="Solutions for Business"
        description="สร้าง performance ให้ธุรกิจของคุณได้ดียิ่งขึ้น"
        imageSrc="/images/img_7557.webp"
        href="/"
        buttonText="ดูเพิ่มเติม"
      />
      <div className="flex flex-col items-center justify-center max-w-7xl mx-auto w-full h-screen">
        <p>Hellp</p>
      </div>
      <div className="flex flex-col items-center justify-center max-w-7xl mx-auto w-full h-screen">
        <p>Hellp</p>
      </div>
    </div>
  );
}

import Link from "next/link";
import Slider from "./components/Swiper";

export default function Home() {
  return (
    <div className="flex flex-col font-sans w-full">
      <div className="relative flex h-[500px]">
        <div className="flex items-center max-w-7xl w-full mx-auto">
          <section className="z-10 flex flex-col gap-4 mt-16 p-6">
            <span>
              <p className="text-5xl text-white mb-2">Solutions for Business</p>
              <p className="text-lg text-white">
                สร้าง performance ให้ธุรกิจของคุณได้ดียิ่งขึ้น
              </p>
            </span>
            <Link
              href="/"
              className="flex items-center font-medium px-4 py-2 bg-white w-fit rounded-full"
            >
              ดูเพิ่มเติม
            </Link>
          </section>
        </div>
        <img
          src="/images/img_7557.webp"          
          alt="Rinkai Industries Logo"
          className="absolute w-full h-full object-cover brightness-70"
          fetchPriority="high"
        />
      </div>
      <div className="flex flex-col items-center justify-center max-w-7xl mx-auto w-full h-screen">
        <p>Hellp</p>
      </div>
      <div className="flex flex-col items-center justify-center max-w-7xl mx-auto w-full h-screen">
        <p>Hellp</p>
      </div>
    </div>
  );
}

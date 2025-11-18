import Slider from "./components/Swiper";

export default function Home() {
  return (
    <div className="flex flex-col font-sans w-full h-screen">
      <div className="relative flex h-[500px]">
        <div className="flex items-end max-w-7xl w-full mx-auto">
          <section className="z-10 p-6 flex flex-col">
            <p className="text-3xl font-semibold text-white">
              Solution for Business
            </p>
            <p className="text-lg text-white">Solution for Business</p>
          </section>
        </div>
        <img
          src="/images/blog-1.svg"
          // src="https://images.ctfassets.net/kftzwdyauwt9/HAlOkmDYqX8hGGAv0la91/1456514a3203d77abb289a659e4bd0f7/Frame_45__2_.png?w=1920&q=90&fm=webp"
          alt="Rinkai Industries Logo"
          className="absolute w-full h-full object-cover brightness-70"
        />
      </div>
      <div className="flex flex-col items-center justify-center max-w-7xl mx-auto w-full h-screen">
        <p>Hellp</p>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

interface BannerProps {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
  buttonText: string;
}

export default function Banner({ title, description, imageSrc, href, buttonText }: BannerProps) {
  return (
    <>
      <div className="relative flex h-[500px]">
        <div className="flex items-center max-w-7xl w-full mx-auto">
          <section className="z-10 flex flex-col gap-4 mt-16 p-6">
            <span>
              <p className="text-5xl text-white mb-2">{title}</p>
              <p className="text-lg text-white">
                {description}
              </p>
            </span>
            <Link
              href={href}
              className="flex items-center font-medium px-4 py-2 bg-white w-fit rounded-full"
            >
              {buttonText}
            </Link>
          </section>
        </div>
        <Image
          width={1920}
          height={1080}
          src={imageSrc}
          alt={title}
          className="absolute w-full h-full object-cover brightness-70"
          fetchPriority="high"
        />
      </div>
    </>
  );
}

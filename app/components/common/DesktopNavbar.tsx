"use client";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Instagram, Mail } from "lucide-react";

interface DesktopNavbarProps {
  largeLogoSrc: string;
  textColorClass: string;
  isAtTop: boolean;
  isIndexPage: boolean;
  onMenuHover: (isHovered: boolean) => void;
}

export const DesktopNavbar = ({
  largeLogoSrc,
  textColorClass,
  isAtTop,
  isIndexPage,
  onMenuHover,
}: DesktopNavbarProps) => {
  return (
    <div className="hidden lg:flex flex-col w-full">
      <div className="flex items-center justify-between max-w-7xl mx-auto py-4 px-6 gap-8 w-full">
        <Link href="/" className="flex items-center gap-4">
          <Image
            src={largeLogoSrc}
            alt="Rinkai Logo"
            width={200}
            height={38}
            className="h-8"
          />
        </Link>
        <div className={`flex items-center gap-4 ${textColorClass}`}>
          <Link href="/status" className="link-underline">
            <Instagram />
          </Link>
          <Link href="/about" className="link-underline">
            <Mail />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-between max-w-7xl mx-auto py-4 px-6 gap-8 w-full font-medium">
        <div
          className={`flex items-center gap-2 ${textColorClass}`}
          onMouseEnter={() => onMenuHover(true)}
          onMouseLeave={() => onMenuHover(false)}
        >
          <Link
            href="/services"
            className="flex gap-1 items-center justify-center px-2.5 py-1.5 rounded-md hover:bg-neutral-100 hover:text-neutral-800"
          >
            Services
            <ChevronDown className="h-4 w-4" />
          </Link>
          <Link
            href="/services"
            className="flex gap-1 items-center justify-center px-2.5 py-1.5 rounded-md hover:bg-neutral-100 hover:text-neutral-800"
          >
            Services
            <ChevronDown className="h-4 w-4" />
          </Link>
          <Link
            href="/services"
            className="flex gap-1 items-center justify-center px-2.5 py-1.5 rounded-md hover:bg-neutral-100 hover:text-neutral-800"
          >
            Services
          </Link>
          <Link
            href="/services"
            className="flex gap-1 items-center justify-center px-2.5 py-1.5 rounded-md hover:bg-neutral-100 hover:text-neutral-800"
          >
            Services
          </Link>
        </div>
        <div
          className={`flex items-center gap-2 ${textColorClass}`}
          onMouseEnter={() => onMenuHover(true)}
          onMouseLeave={() => onMenuHover(false)}
        >
          <Link
            href="/services"
            className="flex gap-1 items-center justify-center px-2.5 py-1.5 rounded-md hover:bg-neutral-100 hover:text-neutral-800"
          >
            Services
          </Link>
          <Link
            href="/services"
            className="flex gap-1 items-center justify-center px-2.5 py-1.5 rounded-md hover:bg-neutral-100 hover:text-neutral-800"
          >
            Services
          </Link>
        </div>
      </div>
    </div>
  );
};

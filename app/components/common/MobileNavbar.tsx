"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Instagram, Mail } from "lucide-react";

interface MobileNavbarProps {
  smallLogoSrc: string;
  textColorClass: string;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

export const MobileNavbar = ({ smallLogoSrc, textColorClass, isMobileMenuOpen, toggleMobileMenu }: MobileNavbarProps) => {
  return (
    <div className="lg:hidden flex items-center justify-between w-full max-w-7xl mx-auto py-4 px-6 gap-8">
      <Link href="/" className="flex items-center gap-4">
        <Image
          src={smallLogoSrc}
          alt="Rinkai Logo"
          width={100}
          height={38}
          className="h-8"
        />
      </Link>
      <button onClick={toggleMobileMenu} className={`${textColorClass} z-50`}>
        {isMobileMenuOpen ? <X /> : <Menu />}
      </button>
      <div className={`fixed top-0 left-0 w-full h-full bg-neutral-50 text-neutral-800 z-40 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <Link href="/services" className="text-2xl link-underline">Services</Link>
          <Link href="/status" className="text-2xl link-underline">Status</Link>
          <Link href="/about" className="text-2xl link-underline">About Us</Link>
          <div className="flex gap-8 mt-8">
            <Link href="/status" className="link-underline">
              <Instagram size={32} />
            </Link>
            <Link href="/about" className="link-underline">
              <Mail size={32} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
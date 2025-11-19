"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Instagram, Mail, Globe } from "lucide-react";

interface MobileNavbarProps {
  smallLogoSrc: string;
  textColorClass: string;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

export const MobileNavbar = ({
  smallLogoSrc,
  textColorClass,
  isMobileMenuOpen,
  toggleMobileMenu,
}: MobileNavbarProps) => {
  return (
    <div className="md:hidden flex items-center justify-between w-full max-w-7xl mx-auto py-4 px-6 gap-8">
      <Link href="/" className="flex items-center gap-4">
        <Image
          src={smallLogoSrc}
          alt="Rinkai Logo"
          width={100}
          height={38}
          className="h-8"
        />
      </Link>
      <button onClick={toggleMobileMenu} className={`${textColorClass}`}>
        <Menu />
      </button>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-neutral-50 text-neutral-800 z-40 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-6 border-b border-neutral-200">
            <Image
              src={smallLogoSrc}
              alt="Rinkai Logo"
              width={100}
              height={38}
              className="h-8 w-fit"
            />
            <button onClick={toggleMobileMenu}>
              <X />
            </button>
          </div>
          <div className="flex flex-col p-6 gap-6 text-lg">
            <Link
              href="/services"
              className="link-underline"
              onClick={toggleMobileMenu}
            >
              Services
            </Link>
            <Link
              href="/solutions"
              className="link-underline"
              onClick={toggleMobileMenu}
            >
              Solutions
            </Link>
            <Link
              href="/about"
              className="link-underline"
              onClick={toggleMobileMenu}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="link-underline"
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
          </div>
          <div className="border-t border-neutral-200 p-6 mt-auto">
            <div className="flex items-center justify-center gap-8 mb-6">
              <Link
                href="/status"
                className="link-underline"
                onClick={toggleMobileMenu}
              >
                <Instagram />
              </Link>
              <Link
                href="/about"
                className="link-underline"
                onClick={toggleMobileMenu}
              >
                <Mail />
              </Link>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-neutral-500">
              <Globe size={16} />
              <span>English</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

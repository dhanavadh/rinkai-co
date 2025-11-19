"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronDown, Instagram, Mail, Menu, X } from "lucide-react";

const DevNavbar = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMenuHovered, setIsMenuHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isIndexPage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if at top
      setIsAtTop(currentScrollY === 0);

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down and past threshold
        setIsScrollingDown(true);
      } else {
        // Scrolling up or at top
        setIsScrollingDown(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Determine styles based on page and scroll position
  const getBackgroundClass = () => {
    if (isMobileMenuOpen) return "bg-neutral-50";
    if (isMenuHovered) return "bg-neutral-50";
    if (!isIndexPage) return "bg-neutral-50";
    return isAtTop
      ? "bg-linear-to-b from-neutral-800 to-transparent"
      : "bg-neutral-50";
  };

  const setSticky = () => {
    if (!isIndexPage) {
      return "sticky";
    } else return "fixed";
  };

  const getLargeLogoSrc = () => {
    if (isMobileMenuOpen) return "/images/logo-fish-neutral.svg";
    if (isMenuHovered) return "/images/logo-fish-neutral.svg";
    if (!isIndexPage) return "/images/logo-fish-neutral.svg";
    return isAtTop
      ? "/images/logo-fish-white.svg"
      : "/images/logo-fish-neutral.svg";
  };

  const getSmallLogoSrc = () => {
    if (isMobileMenuOpen) return "/images/logo-fish-only-black.svg";
    if (isMenuHovered) return "/images/logo-fish-only-black.svg";
    if (!isIndexPage) return "/images/logo-fish-only-black.svg";
    return isAtTop
      ? "/images/logo-fish-only.svg"
      : "/images/logo-fish-only-black.svg";
  };

  const getTextColorClass = () => {
    if (isMobileMenuOpen) return "text-neutral-800";
    if (isMenuHovered) return "text-neutral-800";
    if (!isIndexPage) return "text-neutral-800";
    return isAtTop ? "text-neutral-50" : "text-neutral-800";
  };

  return (
    <header className={`w-full ${setSticky()} top-0 z-50`}>
      <nav
        className={`font-sans w-full items-center justify-between ${isScrollingDown ? "top-[-64px]" : "top-0"} ${getBackgroundClass()} transition-all duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto py-4 px-6 gap-8">
          <Link href="/" className="flex items-center gap-4">
            <Image
              src={getLargeLogoSrc()}
              alt="Rinkai Logo"
              width={200}
              height={38}
              className="h-8 hidden lg:flex"
            />
            <Image
              src={getSmallLogoSrc()}
              alt="Rinkai Logo"
              width={100}
              height={38}
              className="h-8 flex lg:hidden"
            />
          </Link>
          <div className={`hidden lg:flex items-center gap-4 ${getTextColorClass()}`}>
            <Link href="/status" className="link-underline">
              <Instagram />
            </Link>
            <Link href="/about" className="link-underline">
              <Mail />
            </Link>
          </div>
          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`${getTextColorClass()}`}>
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-between max-w-7xl mx-auto py-4 px-6 gap-8 sticky top-0 font-medium">
          <div
            className={`flex items-center gap-2 ${getTextColorClass()}`}
            onMouseEnter={() => setIsMenuHovered(true)}
            onMouseLeave={() => setIsMenuHovered(false)}
          >
            <Link
              href="/services"
              className="link-underline flex gap-1 items-center justify-center px-2.5 py-1.5 rounded-md hover:bg-neutral-100 hover:text-neutral-800"
            >
              Services
              <ChevronDown className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="link-underline flex gap-1 items-center justify-center px-2.5 py-1.5 rounded-md hover:bg-neutral-100 hover:text-neutral-800"
            >
              Services
              <ChevronDown className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="link-underline flex gap-1 items-center justify-center px-2.5 py-1.5 rounded-md hover:bg-neutral-100 hover:text-neutral-800"
            >
              Services
            </Link>
            <Link
              href="/services"
              className="link-underline flex gap-1 items-center justify-center px-2.5 py-1.5 rounded-md hover:bg-neutral-100 hover:text-neutral-800"
            >
              Services
            </Link>
            <Link href="/status" className="link-underline">
              Status
            </Link>
            <Link href="/about" className="link-underline">
              About Us
            </Link>
          </div>
          <div className={`flex items-center gap-4 ${getTextColorClass()}`}>
            <Link href="/services" className="link-underline">
              Services
            </Link>
            <Link href="/status" className="link-underline">
              Status
            </Link>
            <Link href="/about" className="link-underline">
              About Us
            </Link>
          </div>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-neutral-50 text-neutral-800 w-full">
          <div className="flex flex-col items-center gap-4 py-4">
            <Link href="/services" className="link-underline">Services</Link>
            <Link href="/status" className="link-underline">Status</Link>
            <Link href="/about" className="link-underline">About Us</Link>
            <Link href="/status" className="link-underline">
              <Instagram />
            </Link>
            <Link href="/about" className="link-underline">
              <Mail />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default DevNavbar;

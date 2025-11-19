
"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export const useNavbarScroll = (isMenuHovered: boolean, isMobileMenuOpen: boolean) => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const pathname = usePathname();

  const isIndexPage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsAtTop(currentScrollY === 0);

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const getBackgroundClass = () => {
    if (isMobileMenuOpen || isMenuHovered || !isIndexPage) {
      return "bg-neutral-50";
    }
    return isAtTop ? "bg-linear-to-b from-neutral-800 to-transparent" : "bg-neutral-50";
  };

  const getLargeLogoSrc = () => {
    if (isMobileMenuOpen || isMenuHovered || !isIndexPage) {
      return "/images/logo-fish-neutral.svg";
    }
    return isAtTop ? "/images/logo-fish-white.svg" : "/images/logo-fish-neutral.svg";
  };

  const getSmallLogoSrc = () => {
    if (isMobileMenuOpen || isMenuHovered || !isIndexPage) {
      return "/images/logo-fish-only-black.svg";
    }
    return isAtTop ? "/images/logo-fish-only.svg" : "/images/logo-fish-only-black.svg";
  };

  const getTextColorClass = () => {
    if (isMobileMenuOpen || isMenuHovered || !isIndexPage) {
      return "text-neutral-800";
    }
    return isAtTop ? "text-neutral-50" : "text-neutral-800";
  };

  const setSticky = () => {
    return isIndexPage ? "fixed" : "sticky";
  };

  return {
    isScrollingDown,
    isAtTop,
    isIndexPage,
    backgroundClass: getBackgroundClass(),
    largeLogoSrc: getLargeLogoSrc(),
    smallLogoSrc: getSmallLogoSrc(),
    textColorClass: getTextColorClass(),
    stickyClass: setSticky(),
  };
};

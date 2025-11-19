"use client";
import { useState } from "react";
import { useNavbarScroll } from "../../hooks/useNavbarScroll";
import { DesktopNavbar } from "./DesktopNavbar";
import { MobileNavbar } from "./MobileNavbar";

const DevNavbar = () => {
  const [isMenuHovered, setIsMenuHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { 
    isScrollingDown, 
    isAtTop, 
    isIndexPage, 
    backgroundClass, 
    largeLogoSrc, 
    smallLogoSrc, 
    textColorClass, 
    stickyClass 
  } = useNavbarScroll(isMenuHovered, isMobileMenuOpen);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`w-full ${stickyClass} top-0 z-50`}>
      <nav
        className={`font-sans w-full items-center justify-between ${isScrollingDown ? "top-[-64px]" : "top-0"} ${backgroundClass} transition-all duration-300 ease-in-out`}
      >
        <DesktopNavbar 
          largeLogoSrc={largeLogoSrc}
          textColorClass={textColorClass}
          isAtTop={isAtTop}
          isIndexPage={isIndexPage}
          onMenuHover={setIsMenuHovered}
        />
        <MobileNavbar 
          smallLogoSrc={smallLogoSrc}
          textColorClass={textColorClass}
          isMobileMenuOpen={isMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
        />
      </nav>
    </header>
  );
};

export default DevNavbar;
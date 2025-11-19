"use client";
import { useState, useEffect } from "react";
import { useNavbarScroll } from "../../hooks/useNavbarScroll";
import { DesktopNavbar } from "./DesktopNavbar";
import { MobileNavbar } from "./MobileNavbar";
import { MegaMenu } from "./MegaMenu";

import { menuConfig } from "./menuConfig";

const DevNavbar = () => {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { 
    isScrollingDown, 
    backgroundClass, 
    largeLogoSrc, 
    smallLogoSrc, 
    textColorClass, 
    stickyClass 
  } = useNavbarScroll(!!hoveredMenu, isMobileMenuOpen);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <header className={`w-full ${stickyClass} top-0 z-50`}>
      <nav
        className={`hidden md:flex font-sans w-full items-center justify-between relative transition-transform duration-300 ease-in-out ${backgroundClass} ${isScrollingDown ? "-translate-y-full" : "translate-y-0"}`}
        onMouseLeave={() => setHoveredMenu(null)}
      >
        <DesktopNavbar 
          largeLogoSrc={largeLogoSrc}
          textColorClass={textColorClass}
          onMenuHover={setHoveredMenu}
        />
        <MegaMenu menu={hoveredMenu ? menuConfig.megaMenus[hoveredMenu] : null} />
      </nav>
      <nav className={`md:hidden font-sans w-full items-center justify-between relative ${backgroundClass}`}>
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
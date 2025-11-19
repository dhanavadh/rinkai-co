"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Instagram, Mail, Globe, ChevronDown } from "lucide-react";
import { menuConfig } from "./menuConfig";

interface MobileNavbarProps {
  smallLogoSrc: string;
  textColorClass: string;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

interface SubMenuProps {
  item: (typeof menuConfig.mainNav)[0];
  toggleMobileMenu: () => void;
}

const SubMenu = ({ item, toggleMobileMenu }: SubMenuProps) => {
  if (!item.megaMenu) return null;

  return (
    <div className="pl-4 pt-4 flex flex-col gap-4">
      {menuConfig.megaMenus[item.megaMenu].columns.map((column) => (
        <div key={column.title}>
          <h3 className="font-medium mb-2">{column.title}</h3>
          <ul className="space-y-2">
            {column.links.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="flex items-start gap-2 link-underline text-base"
                  onClick={toggleMobileMenu}
                >
                  <link.icon className="h-5 w-5 text-blue-500" />
                  <span>{link.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export const MobileNavbar = ({
  smallLogoSrc,
  textColorClass,
  isMobileMenuOpen,
  toggleMobileMenu,
}: MobileNavbarProps) => {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const handleSubMenuToggle = (subMenu: string) => {
    setOpenSubMenu(openSubMenu === subMenu ? null : subMenu);
  };

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

          <div className="flex flex-col p-6 gap-4 text-lg">
            {menuConfig.mainNav.map((item) => (
              <div key={item.title}>
                {item.megaMenu ? (
                  <button
                    className="link-underline text-left flex justify-between items-center w-full"
                    onClick={() =>
                      item.megaMenu && handleSubMenuToggle(item.megaMenu)
                    }
                  >
                    <span>{item.title}</span>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${openSubMenu === item.megaMenu ? "rotate-180" : ""}`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="link-underline"
                    onClick={toggleMobileMenu}
                  >
                    {item.title}
                  </Link>
                )}
                {item.megaMenu && openSubMenu === item.megaMenu && (
                  <SubMenu item={item} toggleMobileMenu={toggleMobileMenu} />
                )}
              </div>
            ))}
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

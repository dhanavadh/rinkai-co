import React from "react";
import { LucideProps } from "lucide-react";

export interface MegaMenuLink {
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<LucideProps>;
}

export interface MegaMenuColumn {
  title: string;
  links: MegaMenuLink[];
}

export type MegaMenu = {
  [key: string]: MegaMenuColumn[];
};

export type MenuConfig = {
  mainNav: {
    title: string;
    href: string;
    megaMenu?: string;
  }[];
  megaMenus: MegaMenu;
};
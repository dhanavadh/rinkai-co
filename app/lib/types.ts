import React from "react";
import { LucideProps } from "lucide-react";

export interface MegaMenuLink {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<LucideProps>;
}

export interface MegaMenuColumn {
  title: string;
  links: MegaMenuLink[];
}

export interface BannerConfig {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  href: string;
}

export type MegaMenu = {
  columns: MegaMenuColumn[];
  banner: BannerConfig[];
};

export type MenuConfig = {
  mainNav: {
    title: string;
    href: string;
    megaMenu?: string;
  }[];
  megaMenus: {
    [key: string]: MegaMenu;
  };
};
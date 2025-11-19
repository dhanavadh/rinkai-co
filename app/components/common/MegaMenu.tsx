"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

import { MegaMenu as MegaMenuType, MegaMenuLink } from "./types";

interface MegaMenuProps {
  menu: MegaMenuType | null;
}

const chunk = <T,>(arr: T[], size: number): T[][] =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size),
  );

export const MegaMenu = ({ menu }: MegaMenuProps) => {
  const isOpen = !!menu;
  if (!isOpen) return null;

  return (
    <div
      className={`absolute top-full flex left-0 w-full shadow-sm rounded-b-lg p-8 text-neutral-800 bg-neutral-100 transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <div className="flex w-full max-w-7xl mx-auto items-start justify-between gap-2 px-6">
        <div className="grid grid-cols-2 gap-4 w-1/2" id="menulist">
          {menu.columns.map((column) => (
            <div key={column.title}>
              <h3 className="font-bold text-lg mb-4">{column.title}</h3>
              <div className="flex gap-6">
                {chunk(column.links, 5).map((linkChunk, index) => (
                  <ul key={index} className="space-y-4">
                    {linkChunk.map((link: MegaMenuLink) => (
                      <li key={link.id}>
                        <Link
                          href={link.href}
                          className="flex items-start gap-4"
                        >
                          <link.icon className="h-6 w-6 text-neutral-500" />
                          <div>
                            <p className="font-semibold link-underline">
                              {link.title}
                            </p>
                            <p className="text-sm text-neutral-500">
                              {link.description}
                            </p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="w-1/2 h-full" id="banner">
          {menu.banner.map((bannerItem) => (
            <div
              key={bannerItem.id}
              className="block h-full w-full relative rounded-lg overflow-hidden group"
            >
              <div className="relative flex h-full min-h-[300px]">
                <div className="flex items-end max-w-7xl w-full mx-auto">
                  <section className="z-10 flex flex-col gap-4 p-6">
                    <span>
                      <p className="text-xl text-white mb-2">
                        {bannerItem.title}
                      </p>
                      <p className="text-lg text-white">
                        {bannerItem.description}
                      </p>
                    </span>
                    <Link
                      href="/"
                      className="flex items-center font-medium px-4 py-2 bg-white w-fit rounded-full"
                    >
                      ดูเพิ่มเติม
                    </Link>
                  </section>
                </div>
                <Image
                  src={bannerItem.imageSrc}
                  alt="Rinkai Industries Logo"
                  width={100}
                  height={100}
                  className="absolute w-full h-full object-cover brightness-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

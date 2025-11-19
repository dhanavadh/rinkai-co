"use client";
import Link from "next/link";
import React from "react";


import { MegaMenuColumn } from "./types";

interface MegaMenuProps {
  menu: MegaMenuColumn[] | null;
}

export const MegaMenu = ({ menu }: MegaMenuProps) => {
  const isOpen = !!menu;
  if (!isOpen) return null;

  return (
    <div
      className={`absolute top-full left-0 w-full shadow-lg rounded-b-lg p-8 text-neutral-800 bg-neutral-50 transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <div className={`grid grid-cols-${menu.length} gap-8 max-w-7xl mx-auto px-0 xl:px-6`}>
        {menu.map((column) => (
          <div key={column.title}>
            <h3 className="font-bold text-lg mb-4">{column.title}</h3>
            <ul className="space-y-4">
              {column.links.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="flex items-start gap-4 link-underline"
                  >
                    <link.icon className="h-6 w-6 text-blue-500" />
                    <div>
                      <p className="font-semibold">{link.title}</p>
                      <p className="text-sm text-neutral-500">
                        {link.description}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
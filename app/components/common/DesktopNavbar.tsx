"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Instagram, Mail } from "lucide-react";

interface DesktopNavbarProps {

  largeLogoSrc: string;

  textColorClass: string;

  isAtTop: boolean;

  isIndexPage: boolean;

  onMenuHover: (menu: "services" | "solutions" | null) => void;

}



export const DesktopNavbar = ({

  largeLogoSrc,

  textColorClass,

  isAtTop,

  isIndexPage,

  onMenuHover,

}: DesktopNavbarProps) => {

  return (

    <div className={`hidden md:flex flex-col w-full`}>

      <div className="flex items-center justify-between max-w-7xl mx-auto py-4 px-6 gap-8 w-full">

        <Link href="/" className="flex items-center gap-4">

          <Image

            src={largeLogoSrc}

            alt="Rinkai Logo"

            width={200}

            height={38}

            className="h-8"

          />

        </Link>

        <div className={`flex items-center gap-4 ${textColorClass}`}>

          <Link href="/status" className="link-underline">

            <Instagram />

          </Link>

          <Link href="/about" className="link-underline">

            <Mail />

          </Link>

        </div>

      </div>

      <div className="flex items-center justify-between max-w-7xl mx-auto py-4 px-6 gap-8 w-full font-medium">

        <div

          className={`flex items-center gap-8 ${textColorClass}`}

        >

          <Link

            href="/services"

            className="link-underline flex items-center gap-1"

            onMouseEnter={() => onMenuHover("services")}

          >

            Services

            <ChevronDown className="h-4 w-4" />

          </Link>

          <Link

            href="/solutions"

            className="link-underline flex items-center gap-1"

            onMouseEnter={() => onMenuHover("solutions")}

          >

            Solutions <ChevronDown className="h-4 w-4" />

          </Link>

          <Link href="/about" className="link-underline" onMouseEnter={() => onMenuHover(null)}>About Us</Link>

          <Link href="/contact" className="link-underline" onMouseEnter={() => onMenuHover(null)}>Contact</Link>

        </div>

        <div className={`flex items-center gap-4 ${textColorClass}`}>

          <Link href="/services" className="link-underline">Services</Link>

          <Link href="/status" className="link-underline">Status</Link>

          <Link href="/about" className="link-underline">About Us</Link>

        </div>

      </div>

    </div>

  );

};

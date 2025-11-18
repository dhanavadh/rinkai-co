import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="font-sans w-full items-center justify-between">
      <div className="flex lg:flex-row flex-col-reverse items-start justify-between max-w-7xl mx-auto gap-8 py-12 px-6">
        <div className="flex flex-col items-start text-neutral-600 max-w-64">
          <Image
            src="/images/logo-fish-neutral.svg"
            alt="Rinkai Logo"
            className="h-8 w-48"
            width={100}
            height={100}
          />
          <div className="flex flex-col items-start mt-4 gap-2">
            <p>
              A creative studio crafting digital experiences with passion and
              ❤️.
            </p>
          </div>
        </div>
        <section className="flex lg:flex-row flex-col items-start lg:gap-8 gap-4 text-neutral-600">
          <div className="flex flex-col items-start gap-1">
            <Link href="/services" className="link-underline">
              Business Solution
            </Link>
            <Link href="/about" className="link-underline">
              Digital Experience
            </Link>
          </div>
          <div className="flex flex-col items-start gap-1">
            <Link href="/about" className="link-underline">
              Website Development
            </Link>
            <Link href="/about" className="link-underline">
              CRM
            </Link>
            <Link href="/contact" className="link-underline">
              SEO Management
            </Link>
          </div>
          <div className="flex flex-col items-start gap-1">
            <Link href="/about" className="link-underline">
              Service
            </Link>
            <Link href="/about" className="link-underline">
              About Rinkai
            </Link>
            <Link href="/about" className="link-underline">
              Documentation
            </Link>
          </div>
        </section>
      </div>
      <section className="flex flex-col w-full items-center justify-center p-2 bg-neutral-200 text-neutral-800">
        <p>© 2025 Rinkai Industries</p>
      </section>
    </div>
  );
};

export default Footer;

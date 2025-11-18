import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <nav className="flex w-full flex-col border-b border-neutral-200 sticky top-0 z-50 bg-neutral-50">
        <div className="flex flex-col w-full max-w-7xl mx-auto px-6">
          <section className="flex items-center justify-between p-4">
            <Image
              src="/images/logo-fish-neutral.svg"
              alt="rinkai logo"
              width={100}
              height={100}
              className="h-8 w-fit"
            />
          </section>
          <nav className="flex w-full items-center justify-between pb-3 text-neutral-500">
            <div className="flex items-center gap-2">
              <a
                href="/"
                className="rounded-lg px-2.5 py-1.5 hover:bg-neutral-100"
              >
                Solutions
              </a>
              <a
                href="/"
                className="rounded-lg px-2.5 py-1.5 hover:bg-neutral-100"
              >
                Consulting
              </a>
              <a
                href="/"
                className="rounded-lg px-2.5 py-1.5 hover:bg-neutral-100"
              >
                Business
              </a>
              <a
                href="/"
                className="rounded-lg px-2.5 py-1.5 hover:bg-neutral-100"
              >
                Reviews
              </a>
              <a
                href="/"
                className="rounded-lg px-2.5 py-1.5 hover:bg-neutral-100"
              >
                Careers
              </a>
              <a
                href="/status"
                className="rounded-lg px-2.5 py-1.5 hover:bg-neutral-100"
              >
                Status
              </a>
            </div>
          </nav>
        </div>
      </nav>
    </>
  );
}

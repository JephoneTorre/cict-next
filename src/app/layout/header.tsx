"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const active =
  "relative text-white md:text-[var(--color-orange-light)] after:absolute after:left-[-7px] after:right-[-7px] after:-bottom-1 after:h-[3px] md:after:bg-[var(--color-orange-light)] after:rounded-full";
const inactive = "";

export default function Header({ inter }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header 
      className={`${inter.className} relative flex md:grid md:grid-cols-3 items-center px-6 py-4 text-lg font-medium bg-orange-dark md:bg-transparent`}
    >      
      {/* Hamburger icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden absolute flex left-6 justify-center items-center w-6 h-8 space-y-1"
      >
        <Image src="/hamburger-icon.png" width={20} height={15} alt="HAMBURGER" />
      </button>

      <Link 
        href="/" 
        className="flex justify-center items-center gap-x-2 col-span-3 md:col-span-1 mx-auto"
      >
        <Image src="/cict-emblem-dark.png" width={37} height={38} alt="CICT LOGO" className="hidden md:block" />
        <Image src="/cict-wordmark-dark.png" width={112} height={25} alt="WVSU CICT WORDMARK" className="hidden md:block" />
        
        <Image src="/cict-emblem-light.png" width={30} height={30} alt="CICT LOGO" className="md:hidden" />
        <Image src="/cict-wordmark-light.png" width={98} height={32} alt="WVSU CICT WORDMARK" className="md:hidden" />
      </Link>
    
      <div className="hidden md:flex justify-center gap-x-12 mt-1">
        <Link href="/programs" className={(pathname === "/programs") ? active : inactive}>
          PROGRAMS
        </Link>
        <Link
          href="/news-announcements"
          className={(pathname === "/news-announcements") ? active : inactive}
        >
          NEWS
        </Link>
        <Link
          href="/faculty-profiles"
          className={(pathname === "/faculty-profiles") ? active : inactive}
        >
          FACULTY
        </Link>
        <Link href="/contact" className={(pathname === "/contact") ? active : inactive}>
          CONTACT
        </Link>
      </div>
      

      {/* Mobile menu */}
      {isOpen && (
        <div className={`${inter.className} absolute top-full left-0 w-full bg-orange-dark flex flex-col items-center gap-y-4 py-4 md:hidden z-50"`}>
          <Link
            href="/programs"
            className={pathname === "/programs" ? active : inactive}
            onClick={() => setIsOpen(false)}
          >
            PROGRAMS
          </Link>
          <Link
            href="/news-announcements"
            className={pathname === "/news-announcements" ? active : inactive}
            onClick={() => setIsOpen(false)}
          >
            NEWS
          </Link>
          <Link
            href="/faculty-profiles"
            className={pathname === "/faculty-profiles" ? active : inactive}
            onClick={() => setIsOpen(false)}
          >
            FACULTY
          </Link>
          <Link
            href="/contact"
            className={pathname === "/contact" ? active : inactive}
            onClick={() => setIsOpen(false)}
          >
            CONTACT
          </Link>
        </div>
      )}

    </header>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const active =
  "relative text-[var(--color-orange-light)] after:absolute after:left-[-7px] after:right-[-7px] after:-bottom-1 after:h-[3px] md:after:bg-[var(--color-orange-light)] after:rounded-full duration-200";
const inactive = "hover:text-[var(--color-orange-light)] duration-200 hover:scale-105"
const active_mobile = "w-[90%] mx-auto text-center py-4 border-b border-gray-300 bg-orange-50 text-[var(--color-orange-light)] duration-200 active:scale-90";
const inactive_mobile = "w-[90%] mx-auto text-center py-4 border-b border-gray-300 duration-200 active:scale-90";

export default function Header({ inter }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header 
      className={`${inter.className} relative h-18 flex justify-between md:grid md:grid-cols-3 items-center px-6 text-lg font-medium`}
    >      
      <Link 
        href="/" 
        className="flex justify-center items-center gap-x-2 md:col-span-1 duration-200 md:hover:scale-105 active:scale-95"
      >
        <Image src="/cict-emblem-dark.png" width={37} height={38} alt="CICT LOGO" className="" />
        <Image src="/cict-wordmark-dark.png" width={112} height={25} alt="WVSU CICT WORDMARK" className="" />
      </Link>
      
      {/* Hamburger icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden duration-200 active:scale-90"
      >
        <Image src="/hamburger.png" width={20} height={20} alt="HAMBURGER" />
      </button>
    
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
        
        <div className={`${inter.className} absolute top-full left-0 w-full bg-white md:hidden z-50 flex flex-col justify-center border-t border-gray-300`}>
          
          <Link
            href="/programs"
            className={pathname === "/programs" ? active_mobile : inactive_mobile}
            onClick={() => setIsOpen(false)}
          >
            PROGRAMS
          </Link>
          <Link
            href="/news-announcements"
            className={pathname === "/news-announcements" ? active_mobile : inactive_mobile}
            onClick={() => setIsOpen(false)}
          >
            NEWS
          </Link>
          <Link
            href="/faculty-profiles"
            className={pathname === "/faculty-profiles" ? active_mobile : inactive_mobile}
            onClick={() => setIsOpen(false)}
          >
            FACULTY
          </Link>
          <Link
            href="/contact"
            className={pathname === "/contact" ? active_mobile : inactive_mobile}
            onClick={() => setIsOpen(false)}
          >
            CONTACT
          </Link>
          <p className="text-[10px] text-gray-500 my-3 text-center">
            Copyright 2026 © WVSU CICT. All Rights Reserved
          </p>
        </div>
      )}

    </header>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="fixed top-0 w-[95%] max-w-7xl mx-auto z-50 bg-orange-400/50 backdrop-blur-md text-white font-semibold px-6 py-3 rounded-b-2xl shadow-lg flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            src="/images/bmsceieeecs.png"
            width={100}
            height={100}
            alt="Logo"
          />
        </div>

        <div className="hidden md:flex gap-6 items-center">
          <Link href="#" className="hover:underline underline-offset-2">
            Home
          </Link>
          <Link href="#team" className="hover:underline underline-offset-2">
            Team
          </Link>
          <Link
            href="#initiatives"
            className="hover:underline underline-offset-2"
          >
            Initiatives
          </Link>
          <Link href="#events" className="hover:underline underline-offset-2">
            Events
          </Link>
          <Link href="#contact" className="hover:underline underline-offset-2">
            Contact Us
          </Link>
        </div>

        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(true)}
          aria-label="Open Menu"
        >
          &#9776;
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 bg-[#3c2f1e] text-white flex flex-col items-center justify-center gap-10 text-3xl z-50 transition-opacity duration-300 ease-in-out">
          <button
            className="absolute top-6 right-6 text-4xl"
            onClick={() => setMenuOpen(false)}
            aria-label="Close Menu"
          >
            &times;
          </button>

          <Link href="#" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="#team" onClick={() => setMenuOpen(false)}>
            Team
          </Link>
          <Link href="#initiatives" onClick={() => setMenuOpen(false)}>
            Initiatives
          </Link>
          <Link href="#events" onClick={() => setMenuOpen(false)}>
            Events
          </Link>
          <Link href="#contact" onClick={() => setMenuOpen(false)}>
            Contact Us
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;

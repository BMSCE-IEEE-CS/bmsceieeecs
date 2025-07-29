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
      <nav className="fixed top-2 left-1/2 transform -translate-x-1/2 w-[95%] max-w-7xl z-50 bg-blue-500/40 backdrop-blur-lg font-semibold px-6 py-3 rounded-xl shadow-2xl flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            src="/images/bmsceieeecs.png"
            width={128}
            height={128}
            alt="Logo"
          />
        </div>

        <div className="hidden md:flex gap-6 items-center">
          <Link href="#" className="hover:underline underline-offset-2">
            Home
          </Link>
          <Link href="#about" className="hover:underline underline-offset-2">
            About
          </Link>
          <Link href="#team" className="hover:underline underline-offset-2">
            Roadmaps
          </Link>
          <Link
            href="#initiatives"
            className="hover:underline underline-offset-2"
          >
            Contests
          </Link>
          <Link href="#events" className="hover:underline underline-offset-2">
            Practice
          </Link>
          <button className="bg-white text-blue-600 p-2 rounded">
            Get Started
          </button>
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
        <div className="fixed inset-0 bg-[#1e2a3c] text-white flex flex-col items-center justify-center gap-10 text-3xl z-50 transition-opacity duration-300 ease-in-out">
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
          <Link href="#about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="#team" onClick={() => setMenuOpen(false)}>
            Roadmaps
          </Link>
          <Link href="#initiatives" onClick={() => setMenuOpen(false)}>
            Contests
          </Link>
          <Link href="#events" onClick={() => setMenuOpen(false)}>
            Practice
          </Link>
          <button
            onClick={() => {
              console.log("auth part should be added");
              setMenuOpen(false);
            }}
          >
            Get Started
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;

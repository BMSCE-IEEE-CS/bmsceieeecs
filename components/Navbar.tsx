"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[95%] max-w-7xl mx-auto z-50 bg-[#3c2f1e]/90 backdrop-blur-md text-white font-semibold px-6 py-3 rounded-b-2xl shadow-lg flex justify-between items-center">
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
        <Link href="#about" className="hover:underline underline-offset-2">
          About
        </Link>
        <Link href="#pricing" className="hover:underline underline-offset-2">
          Pricing
        </Link>
        <Link
          href="#testimonial"
          className="hover:underline underline-offset-2"
        >
          Testimonials
        </Link>
        <Link href="#faq" className="hover:underline underline-offset-2">
          FAQ
        </Link>
      </div>

      <button
        className="md:hidden text-3xl"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        &#9776;
      </button>

      <div
        className={`fixed top-0 left-0 h-screen w-full bg-black text-white flex flex-col items-center justify-center gap-10 text-3xl transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        } z-40`}
      >
        <Link href="#" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link href="#about" onClick={() => setMenuOpen(false)}>
          About
        </Link>
        <Link href="#pricing" onClick={() => setMenuOpen(false)}>
          Pricing
        </Link>
        <Link href="#testimonial" onClick={() => setMenuOpen(false)}>
          Testimonials
        </Link>
        <Link href="#faq" onClick={() => setMenuOpen(false)}>
          FAQ
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

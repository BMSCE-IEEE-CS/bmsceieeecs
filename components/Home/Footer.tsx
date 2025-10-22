import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaLinkedinIn, FaRegCopyright } from "react-icons/fa6";
import { MdOutlineEmail, MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const Footer = () => {
  return (
    <div className="p-10 bg-orange-400/40 backdrop-blur-md rounded-t-3xl flex flex-col items-center text-white ">
      <div className="grid lg:grid-cols-3 gap-10 w-full">
        <div className="flex flex-col col-span-2">
          <Image
            src="/images/bmsceieeecs.png"
            width={256}
            height={256}
            alt="logo"
          />
          <p className="w-full md:w-3/4 mt-4 text-lg text-justify">
            A dynamic student community at BMSCE fostering innovation,
            leadership, and technical excellence through collaboration and
            continuous learning.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start w-full">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold">Site Map</h1>
            <div className="mt-4 flex flex-col gap-2">
              <Link className="hover:underline text-lg" href="/">
                Home
              </Link>
              <Link className="hover:underline text-lg" href="#about">
                About
              </Link>
              <Link className="hover:underline text-lg" href="/events">
                Events
              </Link>
              <Link className="hover:underline text-lg" href="#team">
                Team
              </Link>
              <Link className="hover:underline text-lg" href="#gallery">
                Gallery
              </Link>
              <Link className="hover:underline text-lg" href="#initiatives">
                Initiatives
              </Link>

              <Link className="hover:underline text-lg" href="#achievements">
                Achievements
              </Link>
              <Link className="hover:underline text-lg" href="#contact">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-6 mt-10 md:mt-0">
              <Link
                href="https://www.linkedin.com/company/bmsce-ieee-computer-society"
                target="_blank"
              >
                <FaLinkedinIn size={30} />
              </Link>
              <Link
                href="https://www.instagram.com/bmsce_ieeecs/"
                target="_blank"
              >
                <FaInstagram size={30} />
              </Link>
              <Link href="mailto:ieee.cs@bmsce.ac.in">
                <MdOutlineEmail size={30} />
              </Link>
            </div>
            <Link
              href="#home"
              className="mt-10 inline-flex items-center gap-2 p-2 border-[3px] border-orange-400 w-max bg-orange-400/20 hover:bg-orange-400/40 transition-all duration-150 text-lg"
            >
              <MdOutlineKeyboardDoubleArrowUp size={40} /> Back to Top
            </Link>
          </div>
        </div>
        {/* <div className="flex flex-col">
          <h1 className="text-3xl font-bold">Initiatives</h1>
          <div className="mt-4 flex flex-col gap-2">
            <Link className="hover:underline text-lg" href="/wings">
              Wings
            </Link>
            <Link className="hover:underline text-lg" href="/ieeecsps">
              IEEE CS Project Series
            </Link>
            <Link className="hover:underline text-lg" href="/csreach">
              CS Reach
            </Link>
          </div>
        </div> */}
      </div>
      <p className="inline-flex items-center gap-2 mt-8 text-center">
        <FaRegCopyright /> 2025 BMSCE IEEE Computer Society. All rights
        reserved.
      </p>
    </div>
  );
};

export default Footer;

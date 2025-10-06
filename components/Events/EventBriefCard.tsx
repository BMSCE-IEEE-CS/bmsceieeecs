"use client";

import React from "react";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

interface EventBriefCardProp {
  id: string;
  imageUrl: string;
  name: string;
  description: string;
  date: string;
  type: string[];
  regLink: string;
}

const EventBriefCard = ({
  id,
  imageUrl,
  name,
  description,
  date,
  type,
  regLink,
}: EventBriefCardProp) => {
  const formattedDate = new Date(date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const isUpcoming = new Date(date) > new Date();

  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,150,60,0.25)]">
      <div className="relative w-full pt-[100%] overflow-hidden">
        <Image
          src={imageUrl}
          alt={`${name} Poster`}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          unoptimized
        />
      </div>

      <div className="flex flex-col justify-between h-full px-6 py-6 space-y-4">
        <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-500/50 shadow-[inset_0_0_10px_rgba(255,255,255,0.05)]">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2 tracking-wide leading-tight">
            {name}
          </h2>
          <p className="text-slate-300 text-sm md:text-base text-justify">
            {description}
          </p>
        </div>

        <div className="flex flex-col gap-3 mt-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex flex-wrap gap-2">
              {type.map((t, i) => (
                <span
                  key={i}
                  className="bg-gradient-to-r from-orange-500/30 to-pink-400/20 text-orange-300 px-3 py-1 text-xs md:text-sm rounded-full font-medium border border-orange-400/30"
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="text-slate-200 font-medium">{formattedDate}</p>
          </div>

          {/* <Link
            href={`/events/${id}`}
            className="w-full bg-orange-500 hover:bg-orange-400 text-white font-semibold py-2 rounded-xl transition-all duration-200 inline-flex items-center justify-center gap-2"
          >
            Know More <FaExternalLinkAlt className="text-sm" />
          </Link> */}
          {isUpcoming && (
            <Link
              href={regLink}
              target="_blank"
              className="w-full bg-orange-500 hover:bg-orange-400 text-white font-semibold py-2 rounded-xl transition-all duration-200 inline-flex items-center justify-center gap-2 mt-2"
            >
              Register now <FaExternalLinkAlt className="text-sm" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventBriefCard;

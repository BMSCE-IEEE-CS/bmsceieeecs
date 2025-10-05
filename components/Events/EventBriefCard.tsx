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
}

const EventBriefCard = ({
  id,
  imageUrl,
  name,
  description,
  date,
  type,
}: EventBriefCardProp) => {
  const formattedDate = new Date(date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex flex-col bg-gradient-to-br from-slate-800/80 to-slate-800/60 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden h-full">
      <div className="relative w-full aspect-square">
        <Image
          src={imageUrl}
          alt={`${name} Poster`}
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      <div className="p-6 flex flex-col gap-4 flex-grow">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white">
          {name}
        </h2>

        <p className="text-slate-300 text-sm md:text-base leading-relaxed text-justify whitespace-pre-line">
          {description}
        </p>
      </div>

      <div className="border-t-2 border-slate-400/40 p-4 flex flex-col gap-3">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex flex-wrap gap-2">
            {type.map((t, i) => (
              <span
                key={i}
                className="bg-gradient-to-r from-cyan-500/30 to-cyan-400/20 text-cyan-300 px-3 py-1 text-xs md:text-sm rounded-full font-medium hover:scale-105 transition-transform duration-200"
              >
                {t}
              </span>
            ))}
          </div>

          <p className="text-white font-medium">{formattedDate}</p>
        </div>

        <Link
          href={`/events/${id}`}
          className="w-full bg-orange-500 hover:bg-orange-400 text-white font-semibold py-2 rounded-xl transition-all duration-200 inline-flex items-center justify-center gap-2"
        >
          Know More <FaExternalLinkAlt />
        </Link>
      </div>
    </div>
  );
};

export default EventBriefCard;

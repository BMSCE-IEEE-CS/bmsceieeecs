"use client";

import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaFileAlt, FaExternalLinkAlt } from "react-icons/fa";

interface EventCardProps {
  id: string;
  name: string;
  description: string;
  posterLink: string;
  brochureLink?: string | null;
  type?: string[];
  regLink?: string | null;
  date: string | number;
}

const EventCard = ({
  id,
  name,
  description,
  posterLink,
  brochureLink,
  type = [],
  regLink,
  date,
}: EventCardProps) => {
  const formattedDate = new Date(date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex flex-col md:flex-row w-full bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-lg border border-slate-800/40 rounded-3xl shadow-2xl overflow-hidden">
      <div className="w-full md:w-1/3 aspect-square relative">
        <Image
          src={posterLink}
          alt={name}
          fill
          className="object-cover rounded-r-none md:rounded-l-3xl"
          unoptimized
        />
      </div>

      <div className="w-full md:w-2/3 p-6 flex flex-col gap-6">
        <div className="bg-slate-800/50 rounded-2xl p-6 shadow-inner border border-slate-700/30">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-wide">
            {name}
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            {description}
          </p>
        </div>

        {type.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {type.map((t, i) => (
              <span
                key={i}
                className="bg-gradient-to-r from-cyan-500/30 to-cyan-400/20 text-cyan-300 px-4 py-1 text-xs md:text-sm rounded-full font-semibold hover:scale-105 transition-transform duration-200"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center gap-2 text-slate-300 text-sm md:text-base font-medium">
          <FaCalendarAlt size={18} className="text-cyan-400" />
          <span>{formattedDate}</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          {brochureLink && (
            <Link
              href={brochureLink}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-700/50 hover:bg-slate-700/70 text-cyan-300 font-semibold text-sm md:text-base transition-colors shadow-md"
            >
              <FaFileAlt size={16} />
              View Brochure
            </Link>
          )}
          {regLink && (
            <Link
              href={regLink}
              target="_blank"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/15 text-white font-semibold text-sm md:text-base shadow-lg transition-all duration-200 gap-2"
            >
              Register Now
              <FaExternalLinkAlt size={16} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;

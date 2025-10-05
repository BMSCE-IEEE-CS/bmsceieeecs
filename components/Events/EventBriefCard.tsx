import React from "react";
import Image from "next/image";
import { FaLink } from "react-icons/fa6";
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
  const formattedDate = new Date(date).toLocaleDateString();

  const isUpcoming = date > new Date().toISOString();

  return (
    <div className="mx-auto bg-slate-900/80 rounded-2xl overflow-hidden shadow-md flex flex-col h-full">
      <div className="aspect-square relative">
        <Image
          src={imageUrl}
          alt={`${name} Poster`}
          fill
          className="object-fill"
          unoptimized
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAApNJREFUWEfFl9luwkAMRROW//9BFgECgVjfWVI50hndcTwJtFWLNBrUlPiMfb1MfT6fm6qqqtfrVTVN0+7P57Ndj8cj7Xznuf2vLfvUdd2u0WjUrvF4HC6e285vagAwPgRgYMACYBD68j8BMAj9/AtAFILS6e3vhIdwteG7XC4N8bRT+RCoDtCG7aqBUggmk0lHC3gqacAAVIRqxIyzVJSADnmgD8BAkgfsixehGlcIABGiZoG6GeO6E4IsC67XaxiCCIBwaCYA4FNQDasnOqloAIRANeAB7vd7qgkaAvNcVAPMqC4VZ8cDGgItQkCYcQUCgFT0AN6410ImRDwQVUEzinF21cAnAEBpKraZcLvdMg2oB7xxwoAGIgBOO51OsxAAgFBTGCIPIDYz6CFUiJqGuNW7X0HMuD0fDIHGGwjVAV7ydQADQGCcPRSizwIfgsgL3wUgPJkHqIQqQq9+74VPALwW8ELSgO8FlFyF+A0AAwlDYPOANiNOp+KLAKgFvhSrCM3ooAdOp9PbAFEx8qX4XQCKV308HjsAQ1lgz3Uq4mW4uJQFoQgPh0PbCyIRUgk1E6I6wDxQAvA9IcuC/X6fNSPfC0pp6DWg3dB7QKsgkGkg2e12HQ+QCX2lmKmIuVAroRYkLUJUQXueALbbbacdaynWhqSDideAvVDTrNQRO81os9kUPRC141I3VCFGw4gfSpIH1ut1OBP2DSR+ItKhNPKCn5SzgWS1Wv14JKMW6EyIDnTvtGKbB5bLZRYCxvLSUEoNiDTQdy3THpB5YLFYFAF8X9D7YQlgCKJzL5jP5yFAybh2QnrIO5dTP5Kne4EB8CLb9WLiIaKbEVOxDqYlL+jpE8BsNuv1gEL8BEDvA6qBL91F5lbaApcDAAAAAElFTkSuQmCC"
        />
      </div>

      <div className="w-full p-6 flex flex-col flex-grow justify-start">
        <h1 className="text-2xl font-bold text-white">{name}</h1>
        <p className="text-slate-300 mt-2 text-justify whitespace-pre-line">
          {description}
        </p>
      </div>

      <div className="w-full p-4 border-t border-slate-700 mt-auto flex flex-col items-center gap-3">
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-wrap gap-2">
            {type.map((eventType, i) => (
              <span
                key={i}
                className="bg-slate-800 text-slate-200 text-xs px-2 py-1 rounded-md"
              >
                {eventType}
              </span>
            ))}
          </div>
          <p className="text-white">{formattedDate}</p>
        </div>
        <Link
          href={`/events/${id}`}
          className="w-full bg-white/30 hover:bg-white/50 text-white font-semibold py-2 rounded-lg transition-all duration-200 inline-flex items-center justify-center gap-2 mt-1"
        >
          Know more <FaExternalLinkAlt />
        </Link>
      </div>
    </div>
  );
};

export default EventBriefCard;

"use client";

import Image from "next/image";

const topImages = [
  { src: "/images/carousel/cymaplog.jpg", caption: "Cymaplog 3.0" },
  { src: "/images/carousel/techx.jpg", caption: "TechX Bangalore 2024" },
  { src: "/images/carousel/sheleads.jpg", caption: "SheLeads" },
];

const bottomImages = [
  { src: "/images/carousel/cymaplog.jpg", caption: "Cymaplog 3.0" },
  { src: "/images/carousel/techx.jpg", caption: "TechX Bangalore 2024" },
  { src: "/images/carousel/sheleads.jpg", caption: "SheLeads" },
];

const CarouselRow = ({
  images,
  reverse = false,
}: {
  images: { src: string; caption: string }[];
  reverse?: boolean;
}) => {
  const imageList = [...images, ...images, ...images, ...images];

  return (
    <div
      className={`relative overflow-hidden mx-auto ${reverse ? "mt-6" : ""}`}
    >
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#0b0b0b] via-[#0b0b0b]/90 to-transparent z-20" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#0b0b0b] via-[#0b0b0b]/90 to-transparent z-20" />

      <div
        className={`flex gap-6 whitespace-nowrap hover:[animation-play-state:paused] ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {imageList.map((img, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center shrink-0 w-[275px]"
          >
            <div className="relative w-full h-[175px] overflow-hidden rounded-2xl shadow-md">
              <Image
                src={img.src}
                alt={img.caption}
                fill
                className="object-cover"
                quality={50}
              />
            </div>
            <p className="mt-2 text-center text-gray-300 font-bold">
              {img.caption}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Carousel = () => {
  return (
    <div className="w-full mx-auto">
      <CarouselRow images={topImages} />
      <CarouselRow images={bottomImages} reverse />
    </div>
  );
};

export default Carousel;

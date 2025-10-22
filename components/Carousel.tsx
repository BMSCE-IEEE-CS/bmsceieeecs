"use client";

import Image from "next/image";
import { useState } from "react";

const topImages = [
  { src: "/images/carousel/cymaplog.jpg", caption: "Cymaplog 3.0" },
  { src: "/images/carousel/holoverse.jpg", caption: "Holoverse 360" },
  { src: "/images/carousel/mlw.jpg", caption: "Machine Learning Week" },
  { src: "/images/carousel/hackaphasia25.jpg", caption: "Hackaphasia 3.0" },
  { src: "/images/carousel/aihealthcare.jpg", caption: "AI In Healthcare" },
  { src: "/images/carousel/dva.jpg", caption: "DVA Workshop" },
  { src: "/images/carousel/ec.jpg", caption: "Entrepreneurship Conclave" },
  { src: "/images/carousel/gg.jpg", caption: "Glide & Go" },
  { src: "/images/carousel/orpr.jpg", caption: "One Race Plog Run" },
  { src: "/images/carousel/sc24.jpg", caption: "Student Congress 2024" },
];

const bottomImages = [
  { src: "/images/carousel/cymaplog.jpg", caption: "Cymaplog 3.0" },
  { src: "/images/carousel/techx.jpg", caption: "TechX Bangalore 2024" },
  { src: "/images/carousel/sheleads.jpg", caption: "SheLeads" },
  { src: "/images/carousel/brainwired.jpg", caption: "Brain Wired" },
  { src: "/images/carousel/dh.jpg", caption: "Data Heist" },
  { src: "/images/carousel/edut.jpg", caption: "EduTechathon" },
  { src: "/images/carousel/figmafy.jpg", caption: "FigmaFy" },
  { src: "/images/carousel/hackaphasia24.jpg", caption: "Hackaphasia 2.0" },
  { src: "/images/carousel/qof.jpg", caption: "Quest of Fantasy" },
  { src: "/images/carousel/unix.jpg", caption: "Unix Workshop" },
  { src: "/images/carousel/ddd.jpg", caption: "Deep Dive into DSA & Dev" },
];

const CarouselRow = ({
  images,
  reverse = false,
  onImageClick,
}: {
  images: { src: string; caption: string }[];
  reverse?: boolean;
  onImageClick: (img: { src: string; caption: string }) => void;
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
            className="flex flex-col items-center shrink-0 w-[275px] cursor-pointer"
            onClick={() => onImageClick(img)}
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
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    caption: string;
  } | null>(null);

  return (
    <div className="w-full mx-auto">
      <CarouselRow images={topImages} onImageClick={setSelectedImage} />
      <CarouselRow
        images={bottomImages}
        reverse
        onImageClick={setSelectedImage}
      />

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-2"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-[90%] max-h-[90%] p-4">
            <Image
              src={selectedImage.src}
              alt={selectedImage.caption}
              width={800}
              height={600}
              quality={50}
              className="rounded-xl object-contain"
            />
            <p className="text-white text-center mt-2 font-bold">
              {selectedImage.caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;

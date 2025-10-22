import { Montserrat } from "next/font/google";
import React from "react";
import { motion } from "framer-motion";

const titleFont = Montserrat({ subsets: ["latin"] });

const awardCategories = [
  {
    id: "global",
    title: <i>Global Recognitions</i>,
    awards: [
      {
        id: "global-award-2024",
        imageSrc: "/images/awards/2024_3.jpeg",
        caption: (
          <>
            Outstanding Chapter Global Award 2024
            <br />
            <i className="text-gray-200 font-semibold">
              Among 350+ student chapters worldwide
            </i>
          </>
        ),
        altText: "Outstanding Chapter Global Award 2024",
      },
      {
        id: "techx-2024",
        imageSrc: "/images/awards/2024_2.jpeg",
        caption: (
          <>
            TechX 2024 Outstanding Host - 1st Place
            <br />
            <i className="text-gray-200 font-semibold">
              Among 15 countries that hosted <i>TechX 2024!</i>
            </i>
          </>
        ),
        altText: "TechX 2024 Outstanding Host Award",
      },
    ],
  },
  {
    id: "national",
    title: <i>National Level Award</i>,
    awards: [
      {
        id: "aicssyc-2023",
        imageSrc: "/images/awards/2023_1.png",
        caption: "1st Runner-up Chapter at AICSSYC 2023",
        altText: "1st Runner-up Chapter at AICSSYC 2023 Award",
      },
    ],
  },
  {
    id: "bangalore-chapter",
    title: (
      <i>
        Outstanding Student Chapter Awards by
        <br /> IEEE Computer Society Bangalore Chapter
      </i>
    ),
    awards: [
      {
        id: "csbc-2024",
        desktopImageSrc: "/images/awards/2024_1.png",
        mobileImageSrc: "/images/awards/mob_view.png",
        caption: "2024",
        altText: "Outstanding Student Chapter 2024",
        imageHeightClass: "max-h-48",
      },
      {
        id: "csbc-2023",
        imageSrc: "/images/awards/2023_2.jpeg",
        caption: "2023",
        altText: "Outstanding Student Chapter 2023",
      },
      {
        id: "csbc-2022",
        imageSrc: "/images/awards/2022_1.png",
        caption: "2022",
        altText: "Outstanding Student Chapter 2022",
      },
    ],
  },
  {
    id: "volunteer",
    title: <i>Student Volunteer Awards</i>,
    awards: [
      {
        id: "stellar-2024",
        imageSrc: "/images/awards/2024_4.jpeg",
        caption: "Stellar Execom Volunteer Award 2024",
        altText: "Stellar Execom Volunteer Award 2024",
      },
      {
        id: "osv-2024",
        imageSrc: "/images/awards/2024_5.jpeg",
        caption: "Outstanding Student Volunteer 2024",
        altText: "Outstanding Student Volunteer 2024",
      },
      {
        id: "osv-2023",
        imageSrc: "/images/awards/2023_3.png",
        caption: "Outstanding Student Volunteer 2023",
        altText: "Outstanding Student Volunteer 2023",
      },
      {
        id: "osv-2022",
        imageSrc: "/images/awards/2022_2.png",
        caption: "Outstanding Student Volunteer 2022",
        altText: "Outstanding Student Volunteer 2022",
      },
    ],
  },
];

interface AwardItemProps {
  id: string;
  altText: string;
  caption: React.ReactNode;
  imageHeightClass?: string;
  imageSrc?: string;
  desktopImageSrc?: string;
  mobileImageSrc?: string;
}

interface AwardCategoryData {
  id: string;
  idx: number;
  title: React.ReactNode;
  awards: AwardItemProps[];
}

const AwardItem = ({
  imageSrc,
  desktopImageSrc,
  mobileImageSrc,
  altText,
  caption,
  imageHeightClass,
}: AwardItemProps) => {
  const defaultHeight = imageHeightClass || "max-h-64";

  return (
    <div className="flex flex-col items-center text-center">
      {desktopImageSrc && mobileImageSrc ? (
        <>
          <img
            src={desktopImageSrc}
            alt={altText}
            className={`object-contain rounded-lg shadow-lg ${defaultHeight} transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hidden md:block`}
          />
          <img
            src={mobileImageSrc}
            alt={altText}
            className={`object-contain rounded-lg shadow-lg ${defaultHeight} md:hidden`}
          />
        </>
      ) : (
        <img
          src={imageSrc}
          alt={altText}
          className={`object-contain rounded-lg shadow-lg ${defaultHeight} transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl`}
        />
      )}
      <p className="mt-4 max-w-[500px] font-bold text-orange-200 leading-snug text-extralight md:text-lg">
        {caption}
      </p>
    </div>
  );
};

const AwardCategory = ({ title, awards, idx }: AwardCategoryData) => (
  <section className="w-full max-w-6xl mt-10 bg-white/30 backdrop-blur-md rounded-2xl p-8 md:p-4 text-white">
    <motion.h2
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="text-2xl md:text-3xl md-text-3xl font-semibold text-center text-white mb-7 leading-tight"
    >
      {title}
    </motion.h2>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (idx + 1) * 0.2 }}
      className="flex flex-wrap justify-center items-start gap-10 md:gap-6"
    >
      {awards.map((award) => (
        <AwardItem key={award.id} {...award} />
      ))}
    </motion.div>
  </section>
);

const Achievements = () => {
  return (
    <div
      id="achievements"
      className="flex flex-col items-center w-full px-4 py-20 md:w-5/6"
    >
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className={`${titleFont.className} text-orange-400 text-4xl md:text-5xl font-bold text-center`}
      >
        Achievements
      </motion.h1>

      {awardCategories.map((category, idx) => (
        <AwardCategory idx={idx} key={category.id} {...category} />
      ))}
    </div>
  );
};

export default Achievements;

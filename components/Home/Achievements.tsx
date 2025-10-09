import { Montserrat } from "next/font/google";
import React from "react";

const titleFont = Montserrat({ subsets: ["latin"] });

const awardCategories = [
  {
    id: 'global',
    title: <i>Global Recognitions</i>,
    awards: [
      {
        id: 'global-award-2024',
        imageSrc: "/images/awards/2024_3.png",
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
        id: 'techx-2024',
        imageSrc: "/images/awards/2024_2.png",
        caption: (
          <>
            TechX 2024 Outstanding Host - 1st Place
            <br />
            <i className="text-gray-200 font-semibold">
              Among 15 countries that hosted 𝗧𝗲𝗰𝗵𝗫 𝟮𝟬𝟮𝟰!
            </i>
          </>
        ),
        altText: "TechX 2024 Outstanding Host Award",
      },
    ],
  },
  {
    id: 'national',
    title: <i>National Level Award</i>,
    awards: [
      {
        id: 'aicssyc-2023',
        imageSrc: "/images/awards/2023_1.png",
        caption: "1st Runner-up Chapter at AICSSYC 2023",
        altText: "1st Runner-up Chapter at AICSSYC 2023 Award",
      },
    ],
  },
 
  {
    id: 'bangalore-chapter',
    title: <i>Outstanding Student Chapter Awards by<br /> IEEE Computer Society Bangalore Chapter</i>,
    awards: [
      {
        id: 'csbc-2024',
        imageSrc: "/images/awards/2024_1.png",
        caption: "2024",
        altText: "Outstanding Student Chapter 2024",
        imageHeightClass: "max-h-48",
      },
      {
        id: 'csbc-2023',
        imageSrc: "/images/awards/2023_2.png",
        caption: "2023",
        altText: "Outstanding Student Chapter 2023",
      },
      {
        id: 'csbc-2022',
        imageSrc: "/images/awards/2022_1.png",
        caption: "2022",
        altText: "Outstanding Student Chapter 2022",
      },
    ],
  },
  {
   id: 'volunteer',
    title: <i>Student Volunteer Awards</i>,
    awards: [
      {
        id: 'stellar-2024',
        imageSrc: "/images/awards/2024_4.png",
        caption: "Stellar Execom Volunteer Award 2024",
        altText: "Stellar Execom Volunteer Award 2024",
      },
      {
        id: 'osv-2024',
        imageSrc: "/images/awards/2024_5.png",
        caption: "Outstanding Student Volunteer 2024",
        altText: "Outstanding Student Volunteer 2024",
      },
      {
        id: 'osv-2023',
        imageSrc: "/images/awards/2023_3.png",
        caption: "Outstanding Student Volunteer 2023",
        altText: "Outstanding Student Volunteer 2023",
      },
      {
        id: 'osv-2022',
        imageSrc: "/images/awards/2022_2.png",
        caption: "Outstanding Student Volunteer 2022",
        altText: "Outstanding Student Volunteer 2022",
      },
    ],
  },
];

interface AwardItemProps {
  id: string;
  imageSrc: string;
  altText: string;
  caption: React.ReactNode; 
  imageHeightClass?: string;
}

interface AwardCategoryData {
  id: string;
  title: React.ReactNode;
  awards: AwardItemProps[];
}

const AwardItem = ({ imageSrc, altText, caption, imageHeightClass }: AwardItemProps) => (
  <div className="flex flex-col items-center text-center">
    <img
      src={imageSrc}
      alt={altText}
      className={`object-contain rounded-lg shadow-lg ${imageHeightClass || 'max-h-64'} transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl`}
    />
    <p className="mt-4 max-w-[500px] font-bold text-orange-200 leading-snug text-lg">
      {caption}
    </p>
  </div>
);

const AwardCategory = ({ title, awards }: AwardCategoryData) => (
  <section className="w-full max-w-6xl mt-10 bg-white/30 backdrop-blur-md rounded-2xl p-8 md:p-5">
    <h2 className="text-3xl md-text-3xl font-semibold text-center text-white mb-7 leading-tight">
      {title}
    </h2>
    <div className="flex flex-wrap justify-center items-start gap-10 md:gap-6">
      {awards.map((award) => (
        <AwardItem key={award.id} {...award} />
      ))}
    </div>
  </section>
);

const Achievements = () => {
  return (
    <div
      id="achievements"
      className="flex flex-col items-center w-full px-4 py-20"
    >
      <h1
        className={`${titleFont.className} text-orange-400 text-4xl md:text-5xl font-bold text-center`}
      >
        Achievements
      </h1>

      {awardCategories.map((category) => (
        <AwardCategory key={category.id} {...category} />
      ))}
    </div>
  );
};

export default Achievements;
"use client";

import Image from "next/image";
import { useState } from "react";
// import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
import { motion } from "framer-motion";

// const font = localFont({ src: "../app/berlinsans.ttf" });

const title = Montserrat({ subsets: ["latin"] });

interface TeamComponentProps {
  image: string;
  name: string;
  desig: string;
  linkedinLink?: string;
  id?: number;
}

interface TeamCatProps {
  execom: TeamComponentProps[];
  sac?: TeamComponentProps[];
}

const teamData: Record<number, TeamCatProps[]> = {
  "2021": [
    {
      execom: [
        {
          name: "Nandita Mahendra",
          desig: "Chairperson",
          image: "/images/people/2021/nandita.png",
          linkedinLink:
            "https://www.linkedin.com/in/nandita-mahendra-6117431b9/",
        },
        {
          name: "Abhinandan Udupa",
          desig: "Secretary",
          image: "/images/people/2021/abhinandan.png",
          linkedinLink: "https://www.linkedin.com/in/abhinandan-u-bb35481b2/",
        },
      ],
    },
  ],
  "2022": [
    {
      execom: [
        {
          name: "Supriya P G",
          desig: "Chairperson",
          image: "/images/people/2022/supriya.png",
          linkedinLink: "https://www.linkedin.com/in/supriya-p-g/",
        },
        {
          name: "Kalp Dantewadia",
          desig: "Vice Chairperson",
          image: "/images/people/2022/kalp.png",
          linkedinLink: "https://www.linkedin.com/in/kalp-jain/",
        },
        {
          name: "Pradyun Naik",
          desig: "Treasurer",
          image: "/images/people/2022/pradyun.png",
          linkedinLink:
            "https://www.linkedin.com/in/pradyun-naik-amey-b1b2601b9/",
        },
        {
          name: "Harshitha Aparna",
          desig: "Secretary",
          image: "/images/people/2022/harshitha.png",
          linkedinLink:
            "https://www.linkedin.com/in/harshitha-aparna-8b4845209/",
        },
        {
          name: "Rajath V",
          desig: "Joint Secretary",
          image: "/images/people/2022/rajath.png",
          linkedinLink: "https://www.linkedin.com/in/rajathv23/",
        },
        {
          name: "Tuhina Bagchi",
          desig: "Senior SAC",
          image: "/images/people/2022/tuhina.png",
          linkedinLink: "https://www.linkedin.com/in/tuhina-b-1019b3212/",
        },
      ],
      sac: [
        {
          name: "Disha Naik",
          desig: "SAC",
          image: "/images/people/2023/disha.png",
          linkedinLink: "https://www.linkedin.com/in/dishannaik/",
        },
        {
          name: "Dyuthi B V",
          desig: "SAC",
          image: "/images/people/2023/dyuthi.png",
          linkedinLink: "https://www.linkedin.com/in/dyuthi-b-v-612435222/",
        },
        {
          name: "Harshala Rani",
          desig: "SAC",
          image: "/images/people/2023/harshala.png",
          linkedinLink: "https://www.linkedin.com/in/harshala-rani-a26880244/",
        },
        {
          name: "Jyothiprakash Panda",
          desig: "SAC",
          image: "/images/people/2023/jp.png",
          linkedinLink: "https://www.linkedin.com/in/jyotiprakashp/",
        },
        {
          name: "Om Patil",
          desig: "SAC",
          image: "/images/people/2023/om.png",
          linkedinLink: "https://www.linkedin.com/in/om-patil/",
        },
        {
          name: "Priyanshu Dhasmana",
          desig: "SAC",
          image: "/images/people/2023/priyanshu.png",
          linkedinLink:
            "https://www.linkedin.com/in/priyanshu-dhasmana-b7a12b1b6/",
        },
        {
          name: "Rahul Shirur",
          desig: "SAC",
          image: "/images/people/2023/rahul.png",
          linkedinLink: "https://www.linkedin.com/in/rahul-shirur-ab2a40247/",
        },
        {
          name: "Vaishnavi Acharya",
          desig: "SAC",
          image: "/images/people/2023/vaishnavi.png",
          linkedinLink:
            "https://www.linkedin.com/in/vaishnavi-acharya-027072236/",
        },
      ],
    },
  ],
  "2023": [
    {
      execom: [
        {
          name: "Dyuthi B V",
          desig: "Chairperson",
          image: "/images/people/2023/dyuthi.png",
          linkedinLink: "https://www.linkedin.com/in/dyuthi-b-v-612435222/",
        },
        {
          name: "Priyanshu Dhasmana",
          desig: "Vice Chairperson",
          image: "/images/people/2023/priyanshu.png",
          linkedinLink:
            "https://www.linkedin.com/in/priyanshu-dhasmana-b7a12b1b6/",
        },
        {
          name: "Om Patil",
          desig: "Treasurer",
          image: "/images/people/2023/om.png",
          linkedinLink: "https://www.linkedin.com/in/om-patil/",
        },
        {
          name: "Jyothiprakash Panda",
          desig: "Secretary",
          image: "/images/people/2023/jp.png",
          linkedinLink: "https://www.linkedin.com/in/jyotiprakashp/",
        },
        {
          name: "Disha Naik",
          desig: "Joint Secretary",
          image: "/images/people/2023/disha.png",
          linkedinLink: "https://www.linkedin.com/in/dishannaik/",
        },
      ],
      sac: [
        {
          name: "Aneesh K P",
          desig: "SAC",
          image: "/images/people/2024/aneesh.png",
          linkedinLink: "https://www.linkedin.com/in/aneesh-k-p-394a71259/",
        },
        {
          name: "Dheemanth G Athreya",
          desig: "SAC",
          image: "/images/people/2024/dheemanth.png",
          linkedinLink: "https://www.linkedin.com/in/dheemanth-athreya/",
        },
        {
          name: "M B Prajwal",
          desig: "SAC",
          image: "/images/people/2024/prajwal.png",
          linkedinLink: "https://www.linkedin.com/in/m-b-prajwal/",
        },
        {
          name: "Manjari Joshi",
          desig: "SAC",
          image: "/images/people/2024/manjari.png",
          linkedinLink: "https://www.linkedin.com/in/manjjoshi/",
        },
        {
          name: "Sanjana Shetty",
          desig: "SAC",
          image: "/images/people/2024/sanjana.png",
          linkedinLink: "https://www.linkedin.com/in/sanjana-shetty-b77163212/",
        },
        {
          name: "Shreya P",
          desig: "SAC",
          image: "/images/people/2024/shreya.png",
          linkedinLink: "https://www.linkedin.com/in/shreya-p-270b03244/",
        },
        {
          name: "Sneha N Shastri",
          desig: "SAC",
          image: "/images/people/2024/sneha.png",
          linkedinLink:
            "https://www.linkedin.com/in/sneha-n-shastri-b37299257/",
        },
        {
          name: "Tulasikrishna Tammina",
          desig: "SAC",
          image: "/images/people/2024/tk.png",
          linkedinLink:
            "https://www.linkedin.com/in/tulasikrishna-tammina-20849924a/",
        },
      ],
    },
  ],
  "2024": [
    {
      execom: [
        {
          name: "Dheemanth G Athreya",
          desig: "Chairperson",
          image: "/images/people/2024/dheemanth.png",
          linkedinLink: "https://www.linkedin.com/in/dheemanth-athreya/",
        },
        {
          name: "Tulasikrishna Tammina",
          desig: "Vice Chairperson",
          image: "/images/people/2024/tk.png",
          linkedinLink:
            "https://www.linkedin.com/in/tulasikrishna-tammina-20849924a/",
        },
        {
          name: "M B Prajwal",
          desig: "Treasurer",
          image: "/images/people/2024/prajwal.png",
          linkedinLink: "https://www.linkedin.com/in/m-b-prajwal/",
        },
        {
          name: "Manjari Joshi",
          desig: "Secretary",
          image: "/images/people/2024/manjari.png",
          linkedinLink: "https://www.linkedin.com/in/manjjoshi/",
        },
        {
          name: "Sanjana Shetty",
          desig: "Joint Secretary",
          image: "/images/people/2024/sanjana.png",
          linkedinLink: "https://www.linkedin.com/in/sanjana-shetty-b77163212/",
        },
        {
          name: "Aneesh K P",
          desig: "Technical Lead",
          image: "/images/people/2024/aneesh.png",
          linkedinLink: "https://www.linkedin.com/in/aneesh-k-p-394a71259/",
        },
        {
          name: "Sneha N Shastri",
          desig: "Technical Lead",
          image: "/images/people/2024/sneha.png",
          linkedinLink:
            "https://www.linkedin.com/in/sneha-n-shastri-b37299257/",
        },
      ],
      sac: [
        {
          name: "Anushree Shetty",
          desig: "SAC",
          image: "/images/people/2025/anushree.png",
          linkedinLink:
            "https://www.linkedin.com/in/anushree-shetty-a7882a23b/",
        },
        {
          name: "B Sai Sahithi",
          desig: "SAC",
          image: "/images/people/2025/sahithi.png",
          linkedinLink: "https://www.linkedin.com/in/bsaisahithi/",
        },
        {
          name: "Nandan M N",
          desig: "SAC",
          image: "/images/people/2025/nandan.png",
          linkedinLink: "https://www.linkedin.com/in/nandan-m-n-3143102b9/",
        },
        {
          name: "Pranati A P",
          desig: "SAC",
          image: "/images/people/2025/pranati.png",
          linkedinLink: "https://www.linkedin.com/in/pranati-a-p-207343293/",
        },
        {
          name: "Pranav Kiran Kumar",
          desig: "SAC",
          image: "/images/people/2025/pranav.png",
          linkedinLink:
            "https://www.linkedin.com/in/pranav-kiran-kumar-7a417029a/",
        },
        {
          name: "Rishika Nayana Shakthi",
          desig: "SAC",
          image: "/images/people/2025/rishika.png",
          linkedinLink: "https://www.linkedin.com/in/rishika-nayana-shakthi/",
        },
        {
          name: "Tanisha Prakash",
          desig: "SAC",
          image: "/images/people/2025/tanisha.png",
          linkedinLink:
            "https://www.linkedin.com/in/tanisha-prakash-78a644312/",
        },
        {
          name: "Vageesh G N",
          desig: "SAC",
          image: "/images/people/2025/vageesh.png",
          linkedinLink: "https://www.linkedin.com/in/vageeshgn/",
        },
      ],
    },
  ],
  "2025": [
    {
      execom: [
        {
          name: "Vageesh G N",
          desig: "Chairperson",
          image: "/images/people/2025/vageesh.png",
          linkedinLink: "https://www.linkedin.com/in/vageeshgn/",
        },
        {
          name: "B Sai Sahithi",
          desig: "Vice Chairperson",
          image: "/images/people/2025/sahithi.png",
          linkedinLink: "https://www.linkedin.com/in/bsaisahithi/",
        },
        {
          name: "Rishika Nayana Shakthi",
          desig: "Treasurer",
          image: "/images/people/2025/rishika.png",
          linkedinLink: "https://www.linkedin.com/in/rishika-nayana-shakthi/",
        },
        {
          name: "Anushree Shetty",
          desig: "Secretary",
          image: "/images/people/2025/anushree.png",
          linkedinLink:
            "https://www.linkedin.com/in/anushree-shetty-a7882a23b/",
        },
        {
          name: "Nandan M N",
          desig: "Joint Secretary",
          image: "/images/people/2025/nandan.png",
          linkedinLink: "https://www.linkedin.com/in/nandan-m-n-3143102b9/",
        },
        {
          name: "Tanisha Prakash",
          desig: "Joint Secretary",
          image: "/images/people/2025/tanisha.png",
          linkedinLink:
            "https://www.linkedin.com/in/tanisha-prakash-78a644312/",
        },
      ],
      sac: [
        {
          name: "Aditya N",
          desig: "SAC",
          image: "/images/people/2026/adityan.png",
          linkedinLink: "https://www.linkedin.com/in/aditya-n-9a8353330",
        },
        {
          name: "Aditya Paradkar",
          desig: "SAC",
          image: "/images/people/2026/adityap.png",
          linkedinLink: "https://www.linkedin.com/in/aditya-paradkar-b466a8243",
        },
        {
          name: "Disha V Bhargav",
          desig: "SAC",
          image: "/images/people/2026/disha.png",
          linkedinLink: "https://www.linkedin.com/in/disha-v-bhargav-900a57356",
        },
        {
          name: "Dwijesh D Donthy",
          desig: "SAC",
          image: "/images/people/2026/dwijesh.png",
          linkedinLink:
            "https://www.linkedin.com/in/dwijesh-d-donthy-73aa851b0",
        },
        {
          name: "Sanjana Shetty",
          desig: "SAC",
          image: "/images/people/2026/sanjana.png",
          linkedinLink:
            "https://www.linkedin.com/in/sanjana-v-shetty-73255a36b",
        },
        {
          name: "Shreya Suman",
          desig: "SAC",
          image: "/images/people/2026/shreya.png",
          linkedinLink: "https://www.linkedin.com/in/shreyasuman11",
        },
        {
          name: "Vaibhav Reddy",
          desig: "SAC",
          image: "/images/people/2026/vaibhav.png",
          linkedinLink: "https://linkedin.com/in/vaibhav-reddy-982b0a25b",
        },
      ],
    },
  ],
};

const TeamComponent = ({
  image,
  name,
  desig,
  linkedinLink,
  id,
}: TeamComponentProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: (id ?? 0 + 1) * 0.1 }}
      id="team"
      className="p-4 bg-white/30 backdrop-blur-md rounded-xl w-72 flex flex-col items-center shadow-2xl text-white"
    >
      <div className="w-40 aspect-square relative">
        <Image
          className="rounded-full object-cover bg-white"
          src={image}
          fill
          alt={name}
        />
      </div>
      <h1 className="text-xl font-semibold mt-4 text-center">{name}</h1>
      <p className="text-gray-200 text-center">{desig}</p>
      {linkedinLink && (
        <Link className="mt-2" href={linkedinLink} target="_blank">
          <FaLinkedin size={26} />
        </Link>
      )}
    </motion.div>
  );
};

const Team = () => {
  const [year, setYear] = useState<number>(2025);
  const years = [2025, 2024, 2023, 2022, 2021];

  const yearData = teamData[year]?.[0];

  return (
    <div className="py-20 px-4">
      <div className="flex flex-col items-center justify-center w-full">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className={`${title.className} text-orange-400 text-4xl md:text-5xl mb-10 text-center font-bold`}
        >
          Executive Committee
        </motion.h1>

        <TeamComponent
          name="Dr. N Sandeep Varma"
          desig="Chapter Advisor"
          image="/images/people/sv.png"
          linkedinLink="https://www.linkedin.com/in/dr-sandeep-varma-nadmipalli-527a471a4/"
          id={1}
        />

        <div className="flex flex-wrap items-center justify-center mt-10 gap-4 mb-4">
          {years.map((y, idx) => (
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: (idx + 1) * 0.1 }}
              key={y}
              onClick={() => setYear(y)}
              className={`px-4 py-2 border-2 border-orange-400 font-semibold rounded-lg transition-all duration-300 text-lg ${
                year === y ? "bg-orange-400 text-black" : "text-white"
              }`}
            >
              {y}
            </motion.button>
          ))}
        </div>

        {yearData?.execom && (
          <>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: 0.2 }}
              className={`${title.className} text-3xl text-orange-400 text-center mt-10 font-bold`}
            >
              Core Committee
            </motion.h2>
            <div className="flex flex-wrap justify-center items-start gap-6 w-full mt-6">
              {yearData.execom.map((member, idx) => (
                <TeamComponent
                  id={idx}
                  key={`execom-${member.name}-${idx}`}
                  name={member.name}
                  image={member.image}
                  desig={member.desig}
                  linkedinLink={member.linkedinLink}
                />
              ))}
            </div>
          </>
        )}

        {yearData?.sac && (
          <>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: 0.3 }}
              className={`${title.className} text-3xl text-orange-400 text-center mt-14 font-bold`}
            >
              Student Activities Committee Coordinators
            </motion.h2>
            <div className="flex flex-wrap justify-center items-start gap-6 w-full mt-6">
              {yearData.sac.map((member, idx) => (
                <TeamComponent
                  id={idx}
                  key={`sac-${member.name}-${idx}`}
                  name={member.name}
                  image={member.image}
                  desig={member.desig}
                  linkedinLink={member.linkedinLink}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Team;

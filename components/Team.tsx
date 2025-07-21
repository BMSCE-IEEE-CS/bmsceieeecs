"use client";

import Image from "next/image";
import { useState } from "react";

interface TeamMemberProp {
  name: string;
  desig: string;
  image: string;
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
        },
        {
          name: "Abhinandan Udupa",
          desig: "Secretary",
          image: "/images/people/2021/abhinandan.png",
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
        },
        {
          name: "Kalp Dantewadia",
          desig: "Vice Chairperson",
          image: "/images/people/2022/kalp.png",
        },
        {
          name: "Pradyun Naik",
          desig: "Treasurer",
          image: "/images/people/2022/pradyun.png",
        },
        {
          name: "Harshitha Aparna",
          desig: "Secretary",
          image: "/images/people/2022/harshitha.png",
        },
        {
          name: "Rajath V",
          desig: "Joint Secretary",
          image: "/images/people/2022/rajath.png",
        },
        {
          name: "Tuhina Bagchi",
          desig: "Senior SAC",
          image: "/images/people/2022/tuhina.png",
        },
      ],
      sac: [
        {
          name: "Disha Naik",
          desig: "SAC",
          image: "/images/people/2023/disha.png",
        },
        {
          name: "Dyuthi B V",
          desig: "SAC",
          image: "/images/people/2023/dyuthi.png",
        },
        {
          name: "Harshala Rani",
          desig: "SAC",
          image: "/images/people/placeholder.png",
        },
        {
          name: "Jyothiprakash Panda",
          desig: "SAC",
          image: "/images/people/2023/jp.png",
        },
        {
          name: "Om Patil",
          desig: "SAC",
          image: "/images/people/2023/om.png",
        },
        {
          name: "Priyanshu Dhasmana",
          desig: "SAC",
          image: "/images/people/2023/priyanshu.png",
        },
        {
          name: "Rahul Shirur",
          desig: "SAC",
          image: "/images/people/placeholder.png",
        },
        {
          name: "Vaishnavi Acharya",
          desig: "SAC",
          image: "/images/people/placeholder.png",
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
        },
        {
          name: "Priyanshu Dhasmana",
          desig: "Vice Chairperson",
          image: "/images/people/2023/priyanshu.png",
        },
        {
          name: "Om Patil",
          desig: "Treasurer",
          image: "/images/people/2023/om.png",
        },
        {
          name: "Jyothiprakash Panda",
          desig: "Secretary",
          image: "/images/people/2023/jp.png",
        },
        {
          name: "Disha Naik",
          desig: "Joint Secretary",
          image: "/images/people/2023/disha.png",
        },
      ],
      sac: [
        {
          name: "Aneesh K P",
          desig: "SAC",
          image: "/images/people/2024/aneesh.png",
        },
        {
          name: "Dheemanth G Athreya",
          desig: "SAC",
          image: "/images/people/2024/dheemanth.png",
        },
        {
          name: "M B Prajwal",
          desig: "SAC",
          image: "/images/people/2024/prajwal.png",
        },
        {
          name: "Manjari Joshi",
          desig: "SAC",
          image: "/images/people/2024/manjari.png",
        },
        {
          name: "Sanjana Shetty",
          desig: "SAC",
          image: "/images/people/2024/sanjana.png",
        },
        {
          name: "Shreya P",
          desig: "SAC",
          image: "/images/people/2024/shreya.png",
        },
        {
          name: "Sneha N Shastri",
          desig: "SAC",
          image: "/images/people/2024/sneha.png",
        },
        {
          name: "Tulasikrishna Tammina",
          desig: "SAC",
          image: "/images/people/2024/tk.png",
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
        },
        {
          name: "Tulasikrishna Tammina",
          desig: "Vice Chairperson",
          image: "/images/people/2024/tk.png",
        },
        {
          name: "M B Prajwal",
          desig: "Treasurer",
          image: "/images/people/2024/prajwal.png",
        },
        {
          name: "Manjari Joshi",
          desig: "Secretary",
          image: "/images/people/2024/manjari.png",
        },
        {
          name: "Sanjana Shetty",
          desig: "Joint Secretary",
          image: "/images/people/2024/sanjana.png",
        },
        {
          name: "Aneesh K P",
          desig: "Technical Lead",
          image: "/images/people/2024/aneesh.png",
        },
        {
          name: "Sneha N Shastri",
          desig: "Technical Lead",
          image: "/images/people/2024/sneha.png",
        },
      ],
      sac: [
        {
          name: "Anushree Shetty",
          desig: "SAC",
          image: "/images/people/2025/anushree.png",
        },
        {
          name: "B Sai Sahithi",
          desig: "SAC",
          image: "/images/people/2025/sahithi.png",
        },
        {
          name: "Nandan M N",
          desig: "SAC",
          image: "/images/people/2025/nandan.png",
        },
        {
          name: "Pranati A P",
          desig: "SAC",
          image: "/images/people/2025/pranati.png",
        },
        {
          name: "Pranav Kiran Kumar",
          desig: "SAC",
          image: "/images/people/2025/pranav.png",
        },
        {
          name: "Rishika Nayana Shakthi",
          desig: "SAC",
          image: "/images/people/2025/rishika.png",
        },
        {
          name: "Tanisha Prakash",
          desig: "SAC",
          image: "/images/people/2025/tanisha.png",
        },
        {
          name: "Vageesh G N",
          desig: "SAC",
          image: "/images/people/2025/vageesh.png",
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
        },
        {
          name: "B Sai Sahithi",
          desig: "Vice Chairperson",
          image: "/images/people/2025/sahithi.png",
        },
        {
          name: "Rishika Nayana Shakthi",
          desig: "Treasurer",
          image: "/images/people/2025/rishika.png",
        },
        {
          name: "Anushree Shetty",
          desig: "Secretary",
          image: "/images/people/2025/anushree.png",
        },
        {
          name: "Nandan M N",
          desig: "Joint Secretary",
          image: "/images/people/2025/nandan.png",
        },
        {
          name: "Tanisha Prakash",
          desig: "Joint Secretary",
          image: "/images/people/2025/tanisha.png",
        },
      ],
      sac: [
        {
          name: "Aditya N",
          desig: "SAC",
          image: "/images/people/2026/adityan.png",
        },
        {
          name: "Aditya Paradkar",
          desig: "SAC",
          image: "/images/people/2026/adityap.png",
        },
        {
          name: "Ananya Shetty",
          desig: "SAC",
          image: "/images/people/2026/ananya.png",
        },
        {
          name: "Disha V Bharghav",
          desig: "SAC",
          image: "/images/people/2026/disha.png",
        },
        {
          name: "Dwijesh D Donthy",
          desig: "SAC",
          image: "/images/people/2026/dwijesh.png",
        },
        {
          name: "Sanjana Shetty",
          desig: "SAC",
          image: "/images/people/2026/sanjana.png",
        },
        {
          name: "Shreya Suman",
          desig: "SAC",
          image: "/images/people/2026/shreya.png",
        },
        {
          name: "Vaibhav Reddy",
          desig: "SAC",
          image: "/images/people/2026/vaibhav.png",
        },
      ],
    },
  ],
};

interface TeamComponentProps {
  image: string;
  name: string;
  desig: string;
}

const TeamComponent = ({ image, name, desig }: TeamComponentProps) => {
  return (
    <div
      id="team"
      className="p-4 bg-white rounded-xl w-72 flex flex-col items-center shadow-2xl"
    >
      <div className="w-40 aspect-square relative">
        <Image
          className="rounded-full object-cover"
          src={image}
          fill
          alt={name}
        />
      </div>
      <h1 className="text-black text-xl font-semibold mt-4 text-center">
        {name}
      </h1>
      <p className="text-gray-600 text-center">{desig}</p>
    </div>
  );
};

const Team = () => {
  const [year, setYear] = useState<number>(2025);
  const years = [2025, 2024, 2023, 2022, 2021];

  const yearData = teamData[year]?.[0];

  return (
    <div className="py-20 px-4">
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-orange-400 text-4xl md:text-5xl font-bold mb-10">
          Meet the Team
        </h1>

        <TeamComponent
          name="Dr. N Sandeep Verma"
          desig="Chapter Advisor"
          image="/images/people/sv.png"
        />

        <div className="flex flex-wrap items-center justify-center mt-10 gap-4 mb-4">
          {years.map((y) => (
            <button
              key={y}
              onClick={() => setYear(y)}
              className={`px-4 py-2 border-2 border-orange-400 font-semibold rounded-lg transition-all duration-300 text-lg ${
                year === y ? "bg-orange-400 text-black" : ""
              }`}
            >
              {y}
            </button>
          ))}
        </div>

        {yearData?.execom && (
          <>
            <h2 className="text-3xl font-bold text-orange-400 mt-10">Execom</h2>
            <div className="flex flex-wrap justify-center items-start gap-6 w-full mt-4">
              {yearData.execom.map((member, idx) => (
                <TeamComponent
                  key={`execom-${member.name}-${idx}`}
                  name={member.name}
                  image={member.image}
                  desig={member.desig}
                />
              ))}
            </div>
          </>
        )}

        {yearData?.sac && (
          <>
            <h2 className="text-3xl font-bold text-orange-400 mt-10">SAC</h2>
            <div className="flex flex-wrap justify-center items-start gap-6 w-full mt-4">
              {yearData.sac.map((member, idx) => (
                <TeamComponent
                  key={`sac-${member.name}-${idx}`}
                  name={member.name}
                  image={member.image}
                  desig={member.desig}
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

import { Montserrat } from "next/font/google";

const titleFont = Montserrat({ subsets: ["latin"] });

const Achievements = () => {
  return (
    <div
      id="achievements"
      className="flex flex-col items-center w-full px-4 py-20 md:w-5/6"
    >
      <div className="flex flex-col items-center justify-center w-full">
        <h1
          className={`${titleFont.className} text-orange-400 text-4xl md:text-5xl font-bold text-center`}
        >
          Achievements
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-6 mt-10 bg-white/30 backdrop-blur-md rounded-xl">
          <div className="flex flex-col justify-center flex-1">
            <h2 className="mb-3 text-3xl font-semibold text-orange-400">
              Outstanding Chapter Global Award 2024
            </h2>
            <p className="text-lg text-justify text-white">
              BMSCE IEEE Computer Society has been{" "}
              <b>
                <i>
                  globally recognized as the No.1 Chapter among 350+ student
                  chapters worldwide,
                </i>
              </b>{" "}
              receiving the prestigious{" "}
              <b>IEEE Computer Society Outstanding Chapter Award.</b> This
              milestone stands as a testament to the dedication of our team, the
              unwavering support of our mentors, the strength of our members and
              the spirit of excellence that defines BMSCE IEEE Computer
              Society.
            </p>
          </div>
          <div className="flex items-center justify-center mt-6 md:mt-0">
            <img
              src="/images/awards/2024_3.png"
              alt="BMSCE IEEE Computer Society Outstanding Student Branch 2022 Award Plaque"
              className="object-contain rounded-lg shadow-lg max-h-85 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            />
          </div>
        </div>

        <div className="flex flex-col w-full md:flex-row items-center justify-between gap-8 p-6 mt-10 bg-white/30 backdrop-blur-md rounded-xl">
          <div className="flex flex-col justify-center flex-1">
            <h2 className="mb-4 text-3xl font-semibold text-orange-400">
              TechX 2024 Outstanding Host - 1st Place
            </h2>
            <p className="text-lg text-justify text-white">
              <b>TechX Bangalore 2024</b> proudly earned the{" "}
              <b>
                <i>top spot</i>
              </b>{" "}
              as{" "}
              <b>
                <i>Outstanding Hosts</i>
              </b>{" "}
              among over <i>15 countries in TechX 2024!</i> Jointly hosted by{" "}
              <b>BMSCE and Christ University IEEE Computer Society,</b> this
              global achievement is a testament to the determination,
              collaboration, and hard work of our incredible team.
            </p>
          </div>
          <div className="flex items-center justify-center mt-6 md:mt-0">
            <img
              src="/images/awards/2024_2.png"
              alt="Placeholder for new achievement image"
              className="object-contain rounded-lg shadow-lg max-h-65 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            />
          </div>
        </div>

        <div className="flex flex-col w-full md:flex-row items-center justify-between gap-8 p-6 mt-10 bg-white/30 backdrop-blur-md rounded-xl">
          <div className="flex flex-col justify-center flex-1">
            <h2 className="mb-4 text-3xl font-semibold text-orange-400">
              Outstanding Student Chapter 2024
            </h2>
            <p className="text-lg text-justify text-white">
              BMSCE IEEE Computer Society was proudly awarded the{" "}
              <b>
                Outstanding Student Chapter award for the second consecutive
                year
              </b>{" "}
              by the <b>IEEE Computer Society Bangalore Chapter.</b> This
              accolade highlighted the team's dedication and hard work.
            </p>
          </div>
          <div className="flex items-center justify-center mt-6 md:mt-0">
            <img
              src="/images/awards/2024_1.png"
              alt="Placeholder for new achievement image"
              className="object-contain rounded-lg shadow-lg max-h-72 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            />
          </div>
        </div>

        <div className="flex flex-col w-full md:flex-row items-center justify-between gap-8 p-6 mt-10 bg-white/30 backdrop-blur-md rounded-xl">
          <div className="flex flex-col justify-center flex-1">
            <h2 className="mb-4 text-3xl font-semibold text-orange-400">
              Stellar Execom Volunteer Award 2024
            </h2>
            <p className="text-lg text-justify text-white">
              BMSCE IEEE Computer Society's{" "}
              <i>Vice Chairperson of the term 2024,</i>{" "}
              <b>Tulasikrishna Tammina,</b> was honored with the{" "}
              <b>Stellar Execom Volunteer Award</b> for his significant
              contributions to the chapter's growth. This recognition fueled
              the BMSCE IEEE CS's commitment to promoting excellence.
            </p>
          </div>
          <div className="flex items-center justify-center mt-6 md:mt-0">
            <img
              src="/images/awards/2024_4.png"
              alt="Placeholder for new achievement image"
              className="object-contain rounded-lg shadow-lg max-h-64 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            />
          </div>
        </div>

        <div className="flex flex-col w-full md:flex-row items-center justify-between gap-8 p-6 mt-10 bg-white/30 backdrop-blur-md rounded-xl">
          <div className="flex flex-col justify-center flex-1">
            <h2 className="mb-4 text-3xl font-semibold text-orange-400">
              Outstanding Student Volunteer 2024
            </h2>
            <p className="text-lg text-justify text-white">
              BMSCE IEEE Computer Society's{" "}
              <i>Technical Lead of the term 2024,</i> <b>Aneesh K P,</b> was
              honored as the <b>Best Student Volunteer</b> for his significant
              contributions to the chapter's growth. This recognition fueled
              the BMSCE IEEE CS's commitment to promoting excellence.
            </p>
          </div>
          <div className="flex items-center justify-center mt-6 md:mt-0">
            <img
              src="/images/awards/2024_5.png"
              alt="Placeholder for new achievement image"
              className="object-contain rounded-lg shadow-lg max-h-64 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            />
          </div>
        </div>

        <div className="flex flex-col w-full md:flex-row items-center justify-between gap-8 p-6 mt-10 bg-white/30 backdrop-blur-md rounded-xl">
          <div className="flex flex-col justify-center flex-1">
            <h2 className="mb-4 text-3xl font-semibold text-orange-400">
              Outstanding Student Chapter 2023
            </h2>
            <p className="text-lg text-justify text-white">
              BMSCE IEEE Computer Society was proudly awarded the{" "}
              <b>Outstanding Student Chapter</b> award for the{" "}
              <b>second consecutive year</b> by the{" "}
              <b>IEEE Computer Society Bangalore Chapter.</b> This accolade
              highlighted the team's dedication and hard work.
            </p>
          </div>
          <div className="flex items-center justify-center mt-6 md:mt-0">
            <img
              src="/images/awards/2023_2.png"
              alt="Placeholder for new achievement image"
              className="object-contain rounded-lg shadow-lg max-h-56 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            />
          </div>
        </div>

        <div className="flex flex-col w-full md:flex-row items-center justify-between gap-8 p-6 mt-10 bg-white/30 backdrop-blur-md rounded-xl">
          <div className="flex flex-col justify-center flex-1">
            <h2 className="mb-4 text-3xl font-semibold text-orange-400">
              1st Runner-up Chapter at AICSSYC 2023
            </h2>
            <p className="text-lg text-justify text-white">
              BMSCE IEEE Computer Society was recognized as the{" "}
              <b>2nd Best Student Chapter in India.</b> The award was presented
              by{" "}
              <b>
                <i>
                  Mr. Eric, Global Membership Director, and Mr. Shivam Abhilash,
                  Chair IEEE CS YP.
                </i>
              </b>
            </p>
          </div>
          <div className="flex items-center justify-center mt-6 md:mt-0">
            <img
              src="/images/awards/2023_1.png"
              alt="Placeholder for new achievement image"
              className="object-contain rounded-lg shadow-lg max-h-64 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            />
          </div>
        </div>

        <div className="flex flex-col w-full md:flex-row items-center justify-between gap-8 p-6 mt-10 bg-white/30 backdrop-blur-md rounded-xl">
          <div className="flex flex-col justify-center flex-1">
            <h2 className="mb-4 text-3xl font-semibold text-orange-400">
              Outstanding Student Volunteer 2023
            </h2>
            <p className="text-lg text-justify text-white">
              BMSCE IEEE Computer Society's{" "}
              <i>Vice Chairperson of the term 2023,</i>{" "}
              <b>Priyanshu Dhasmana,</b> was honored as the{" "}
              <b>Best Student Volunteer</b> for his significant contributions
              to the chapter's growth. This recognition fueled the BMSCE IEEE
              CS's commitment to promoting excellence.
            </p>
          </div>
          <div className="flex items-center justify-center mt-6 md:mt-0">
            <img
              src="/images/awards/2023_3.png"
              alt="Placeholder for new achievement image"
              className="object-contain rounded-lg shadow-lg max-h-64 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            />
          </div>
        </div>

        <div className="flex flex-col w-full md:flex-row items-center justify-between gap-8 p-6 mt-10 bg-white/30 backdrop-blur-md rounded-xl">
          <div className="flex flex-col justify-center flex-1">
            <h2 className="mb-4 text-3xl font-semibold text-orange-400">
              Outstanding Student Branch 2022
            </h2>
            <p className="text-lg text-justify text-white">
              The BMSCE IEEE Computer Society was awarded the{" "}
              <b>Outstanding Student Chapter</b> by the{" "}
              <b>IEEE Computer Society Bangalore Chapter</b> in recognition of
              its efforts and hard work. This recognition served as motivation
              to continue the mission of promoting excellence in the field of
              Computer Science. Gratitude was extended to the entire team and
              its members for making this achievement possible.
            </p>
          </div>
          <div className="flex items-center justify-center mt-6 md:mt-0">
            <img
              src="/images/awards/2022_1.png"
              alt="Placeholder for new achievement image"
              className="object-contain rounded-lg shadow-lg max-h-64 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            />
          </div>
        </div>

        <div className="flex flex-col w-full md:flex-row items-center justify-between gap-8 p-6 mt-10 bg-white/30 backdrop-blur-md rounded-xl">
          <div className="flex flex-col justify-center flex-1">
            <h2 className="mb-4 text-3xl font-semibold text-orange-400">
              Outstanding Student Volunteer 2022
            </h2>
            <p className="text-lg text-justify text-white">
              BMSCE IEEE Computer Society's{" "}
              <i>Vice Chairperson of the term 2022,</i> <b>Kalp Dantewadia,</b>{" "}
              was presented with the <b>Best Student Volunteer</b> award,
              recognizing his exceptional dedication and contributions. This
              prestigious accolade highlighted his outstanding efforts and
              commitment.
            </p>
          </div>
          <div className="flex items-center justify-center mt-6 md:mt-0">
            <img
              src="/images/awards/2022_2.png"
              alt="Placeholder for new achievement image"
              className="object-contain rounded-lg shadow-lg max-h-64 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
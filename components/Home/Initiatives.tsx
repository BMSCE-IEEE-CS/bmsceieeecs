import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

const title = Montserrat({ subsets: ["latin"] });

const Initiatives = () => {
  return (
    <div
      id="initiatives"
      className="w-full md:w-5/6 flex flex-col items-center py-20 px-4 text-white"
    >
      <div className="w-full flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className={`${title.className} text-3xl md:text-5xl font-bold text-orange-400`}
        >
          Initiatives
        </motion.h1>

        {/* WINGS */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="grid lg:grid-cols-2 gap-10 mt-10 items-center bg-white/30 backdrop-blur-md p-6 rounded-2xl"
        >
          <div className="max-w-md mx-auto w-full">
            <Image
              className="w-full h-auto"
              src="/images/wings.png"
              width={500}
              height={500}
              alt="wings"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-orange-400 text-3xl text-center lg:text-left font-bold">
              Wings
            </h1>
            <p className="text-lg text-justify mt-2 items-center lg:items-start">
              Wings is a unique learning community with two sections:
              Competitive Programming and Web Development. It caters to students
              of all levels, offering a supportive environment for technical
              upskilling and innovation. Under the guidance of experienced
              mentors, members have the opportunity to seek guidance and
              establish valuable connections. Through a wide range of events,
              such as workshops and hackathons, Wings is committed to reshaping
              the culture of learning and innovation within the student
              community.
            </p>
            {/* <Link
              href="/wings"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 font-semibold text-lg rounded mt-4 animate-grad-xy cursor-pointer w-max mx-auto md:ml-0"
            >
              Get Started <FaArrowRight />
            </Link> */}
          </div>
        </motion.div>

        {/* CS PROJECT SERIES */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="grid lg:grid-cols-2 gap-10 mt-6 items-center bg-white/30 backdrop-blur-md p-6 rounded-2xl"
        >
          <div className="flex flex-col order-2 lg:order-1">
            <h1 className="text-orange-400 text-3xl text-center lg:text-left font-bold">
              IEEE CS Project Series
            </h1>
            <p className="text-lg text-justify mt-2 items-center lg:items-start">
              The IEEE CS Project Series by BMSCE IEEE Computer Society offers
              members a unique chance to bring ideas to life through hands-on
              projects with dedicated mentorship. Over 4 to 8 months,
              participants receive guidance from industry experts, helping them
              transform concepts into completed projects, with opportunities for
              research publication along the way. This program fosters
              collaboration, skill-building, and a pathway to making meaningful
              contributions - all free and exclusive for IEEE Computer Society
              members.
            </p>
            {/* <Link
              href="/ieeecsps"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 font-semibold text-lg rounded mt-4 animate-grad-xy cursor-pointer w-max mx-auto md:ml-0"
            >
              Get Involved <FaArrowRight />
            </Link> */}
          </div>
          <div className="max-w-md mx-auto w-full order-1 md:order-2">
            {/* <Image
              className="w-full h-auto"
              src="/images/wings.png"
              width={500}
              height={500}
              alt="wings"
            /> */}
            <h1 className="text-center text-7xl">IEEE CS Project Series</h1>
          </div>
        </motion.div>

        {/* CS REACH */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="grid lg:grid-cols-2 gap-10 mt-6 items-center bg-white/30 backdrop-blur-md p-6 rounded-2xl"
        >
          <div className="max-w-md mx-auto w-full">
            {/* <Image
              className="w-full h-auto"
              src="/images/wings.png"
              width={500}
              height={500}
              alt="wings"
            /> */}
            <h1 className="text-center text-7xl">CS Reach</h1>
          </div>
          <div className="flex flex-col">
            <h1 className="text-orange-400 text-3xl text-center lg:text-left font-bold">
              CS Reach
            </h1>
            <p className="text-lg text-justify mt-2 items-center lg:items-start">
              The CS Reach initiative by BMSCE IEEE Computer Society is designed
              to introduce young students to the exciting world of Computer
              Science, sparking interest through interactive learning and
              hands-on activities. CS Reach offers students a dynamic
              introduction to Computer Science, highlighting its practical
              applications and potential for innovation across fields. By
              connecting students with technical concepts and potential career
              paths, the program fosters curiosity and encourages future
              exploration, empowering them with skills for a tech-driven world.
            </p>
            {/* <Link
              href="/csreach"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 font-semibold text-lg rounded mt-4 animate-grad-xy cursor-pointer w-max mx-auto md:ml-0"
            >
              Become a volunteer <FaArrowRight />
            </Link> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Initiatives;

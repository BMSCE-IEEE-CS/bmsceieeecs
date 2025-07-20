import { FaBullseye } from "react-icons/fa6";
import { MdVisibility } from "react-icons/md";
import { RiFlagLine } from "react-icons/ri";

interface AboutComponentProps {
  title: string;
  description: string;
  icon: React.ReactElement;
}

const AboutComponent = ({ title, description, icon }: AboutComponentProps) => {
  return (
    <div className="flex flex-col items-center justify-center bg-black/50 p-8 rounded-2xl">
      <div className="text-5xl">{icon}</div>
      <h1 className="mt-4 text-3xl font-semibold">{title}</h1>
      <p className="text-justify mt-2 text-gray-200 font-medium text-lg">
        {description}
      </p>
    </div>
  );
};

const About = () => {
  return (
    <div id="about" className="w-full md:w-5/6 py-20 px-4">
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-orange-400 text-4xl font-bold">About Us</h1>
        <h1 className="bg-black/50 text-gray-200 rounded-2xl font-medium p-8 mt-10 text-lg">
          Engaging engineers from various streams along with scientists and
          industry professionals from all the areas of computing, BMSCE IEEE
          Computer Society sets the standard for education and engagement that
          fuels continued technological advancement. Through workshops,
          hackathons, codeathons, and by bringing together computer science and
          engineering students at every phase of their career for dialogue,
          debate and collaboration, BMSCE IEEE Computer Society empowers,
          shapes, and guides the future of not only its members, but the greater
          industry, enabling new opportunities to serve our world better.
        </h1>
        <div className="grid md:grid-cols-3 gap-4 mt-4 w-full">
          <AboutComponent
            icon={<MdVisibility />}
            title="Vision"
            description="To grow into a premier technical society, fostering eminent professionals with creative minds, innovative ideas and sound practical skills, team spirit and true leadership qualities, and to shape a future where technology works for the man's enrichment."
          />
          <AboutComponent
            icon={<FaBullseye />}
            title="Mission"
            description="Providing individuals with state-of-the-art knowledge in various technological disciplines and instilling within them a strong sense of social consciousness and professionalism and enabling them to face life's challenges with courage and conviction."
          />
          <AboutComponent
            icon={<RiFlagLine />}
            title="Objective"
            description="The society's broad objective of being an active agent of change by responding to the needs and challenges of the current environment. These challenges can be overcome by training, working as a team and inculcating leadership qualities within."
          />
        </div>
      </div>
    </div>
  );
};

export default About;

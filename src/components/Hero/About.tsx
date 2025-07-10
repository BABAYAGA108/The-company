import { FaReact, FaFigma, FaServer, FaCode } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import aboutImage from "../../assets/images/about-profile.jpg"; // Make sure this path is correct

const About = () => {
  const skills = [
    { name: "React", icon: <FaReact  />,  level: 90 }, 
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      level: 85,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs  />,
      level: 80,
    },
    {
      name: "UI/UX Design",
      icon: <FaFigma />,
      level: 75,
    },
    {
      name: "Backend",
      icon: <FaServer  />,
      level: 70,
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss />,
      level: 95,
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-600">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Profile Image */}
          <div className="lg:w-1/3 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl opacity-75 group-hover:opacity-100 transition-all duration-500 rotate-1"></div>
              <img
                src={aboutImage}
                alt="Honour Kalu Profile"
                className="relative w-full max-w-sm rounded-2xl shadow-xl border-8 border-white z-10 transform group-hover:-rotate-1 transition-transform duration-500"
              />
            </div>
          </div>

          {/* About Content */}
          <div className="lg:w-2/3">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Frontend Developer & UI Enthusiast
            </h3>

            <div className="space-y-4 text-gray-600 mb-8">
              <p>
                With over 3 years of experience in web development, I specialize
                in creating responsive, accessible, and performant user
                interfaces that deliver exceptional user experiences.
              </p>
              <p>
                My journey began with basic HTML/CSS and has evolved into
                building complex applications with modern frameworks. I believe
                in writing clean, maintainable code while staying updated with
                industry trends.
              </p>
              <p>
                When I'm not coding, you'll find me contributing to open-source
                projects, exploring new design tools, or mentoring aspiring
                developers.
              </p>
            </div>

            {/* Skills */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <FaCode />
                <span>My Skills</span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        {skill.icon}
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow hover:shadow-md transition-all"
              >
                Hire Me
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 font-medium rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

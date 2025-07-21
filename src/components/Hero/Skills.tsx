import { Link } from "react-router-dom";
import { FaReact, FaFigma, FaServer,  } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      name: "React",
      icon: <FaReact color="#61DAFB" size={20} />,
      level: 90,
      description: "Building interactive UIs with React hooks and context API",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript color="#3178C6" size={20} />,
      level: 85,
      description: "Type-safe JavaScript development",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs color="#000000" size={20} />,
      level: 70,
      description: "Server-side rendering and static site generation",
    },
    {
      name: "UI/UX Design",
      icon: <FaFigma color="#F24E1E" size={20} />,
      level: 95,
      description: "Creating intuitive user interfaces and experiences",
    },
    {
      name: "Backend",
      icon: <FaServer color="#5FB832" size={20} />,
      level: 50,
      description: "Node.js, Express, and database integration",
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss color="#06B6D4" size={20} />,
      level: 95,
      description: "Utility-first CSS framework for rapid development",
    },
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-blue-600">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {skill.name}
                  </h3>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  {skill.level}%
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {skill.description}
              </p>

              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                <div
                  className="bg-gradient-to-r from-blue-500 to-blue-400 h-2.5 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/projects"
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow hover:shadow-md transition-all"
          >
            View My Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Skills;

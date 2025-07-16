import { FaReact,}from "react-icons/fa";
import {FaFigma,}from"react-icons/fa";
import {FaServer,}from"react-icons/fa";
import { FaCode }from "react-icons/fa6";

import { SiTypescript,}  from "react-icons/si";
import{SiNextdotjs,}  from "react-icons/si";
import{SiTailwindcss } from "react-icons/si";
const Skills = () => {
  const skills = [
    {
      name: "React",
      icon: <FaReact color="#61DAFB" size={20} />, // React blue
      level: 90,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript color="#3178C6" size={20} />, // TypeScript blue
      level: 85,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs color="#000000" size={20} />, // Next.js black
      level: 70,
    },
    {
      name: "UI/UX Design",
      icon: <FaFigma color="#F24E1E" size={20} />, // Figma orange
      level: 95,
    },
    {
      name: "Backend",
      icon: <FaServer color="#5FB832" size={20} />, // Green for backend
      level: 50,
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss color="#06B6D4" size={20} />, // Tailwind cyan
      level: 95,
    },
  ];

  return (
    <div className="container mx-auto px-6 max-w-6xl">
      <h4 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
        <FaCode color="#61DAFB" />
        <span>My Skills</span>
      </h4>

      <div className="space-y-4 text-gray-600 mb-8 md:grid-cols-2 gap-6 w-full">
        {skills.map((skill, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-3">
                <span className="text-xl">{skill.icon}</span>
                <span className="font-medium text-gray-700">{skill.name}</span>
              </div>
              <span className="text-sm font-medium text-gray-500">
                {skill.level}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-gradient-to-r from-blue-500 to-blue-400 h-2.5 rounded-full transition-all duration-500"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

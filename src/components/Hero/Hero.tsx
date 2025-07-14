import { FaXTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import profileImage from "../../assets/images/hello and welcome.jpeg"; 
import workSample from "../../assets/images/number 2.jpeg"; 
import pdf from "../../assets/My cv/full stack developer resume example template primo.pdf"; 

const Hero = () => {
  const socialLinks = [
    {
      url: "https://x.com/kalu_honour",
      icon: <FaXTwitter size={20} />,
      label: "Twitter",
      color: "hover:text-blue-400",
      bg: "bg-blue-500/10",
    },
    {
      url: "https://instagram.com/your_real_profile", 
      icon: <FaInstagram size={20} />,
      label: "Instagram",
      color: "hover:text-pink-500",
      bg: "bg-pink-500/10",
    },
    {
      url: "mailto:your_real_email@example.com", 
      icon: <IoMdMailUnread size={20} />,
      label: "Email",
      color: "hover:text-red-500",
      bg: "bg-red-500/10",
    },
    {
      url: "https://github.com/your_real_profile", 
      icon: <FaGithub size={20} />,
      label: "GitHub",
      color: "hover:text-gray-800",
      bg: "bg-gray-800/10",
    },
    {
      url: "https://linkedin.com/in/your_real_profile", 
      icon: <FaLinkedinIn size={20} />,
      label: "LinkedIn",
      color: "hover:text-blue-600",
      bg: "bg-blue-600/10",
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <p className="text-lg font-medium text-blue-600 mb-2 animate-fade-in">
              Hello, I'm
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight animate-fade-in">
              Honour Kalu
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 mb-6 animate-fade-in">
              Frontend Developer & UI Specialist
            </h2>

            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-in">
              I craft exceptional digital experiences with modern web
              technologies. Specializing in React, TypeScript, and responsive
              design, I bridge the gap between beautiful interfaces and
              functional code.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12 animate-fade-in">
              <a
                href={pdf}
                download="Honour_Kalu_Frontend_Developer_CV.pdf"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                Contact Me
              </a>
            </div>

            <div className="flex justify-center lg:justify-start gap-3 animate-fade-in">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${link.bg} ${link.color} w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 hover:-translate-y-1`}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="lg:w-1/2 flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-3xl transform rotate-1"></div>
              <img
                src={profileImage}
                alt="Honour Kalu - Frontend Developer"
                className="relative w-full max-w-md rounded-2xl shadow-2xl border-8 border-white"
              />
              <div className="absolute bottom-0 right-0 -mr-6 -mb-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                <img
                  src={workSample}
                  alt="Work Sample"
                  className="w-24 h-32 object-cover rounded-lg"
                />
                <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  New
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

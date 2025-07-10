import { FaXTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { MdAttachEmail } from "react-icons/md";
import profileImage from "../../assets/images/hello and welcome.jpeg";
import workSample from "../../assets/images/number 2.jpeg";
import pdf from "../../assets/My cv/full stack developer resume example template primo.pdf";
import { motion } from "framer-motion";

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
      url: "https://instagram.com/yourprofile",
      icon: <IoLogoInstagram size={20} />,
      label: "Instagram",
      color: "hover:text-pink-500",
      bg: "bg-pink-500/10",
    },
    {
      url: "mailto:your.email@example.com",
      icon: <MdAttachEmail size={20} />,
      label: "Email",
      color: "hover:text-red-500",
      bg: "bg-red-500/10",
    },
    {
      url: "https://github.com/yourprofile",
      icon: <FaGithub size={20} />,
      label: "GitHub",
      color: "hover:text-gray-800",
      bg: "bg-gray-800/10",
    },
    {
      url: "https://linkedin.com/in/yourprofile",
      icon: <FaLinkedinIn size={20} />,
      label: "LinkedIn",
      color: "hover:text-blue-600",
      bg: "bg-blue-600/10",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          {/* Profile Content */}
          <motion.div
            variants={itemVariants}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <motion.p
              variants={itemVariants}
              className="text-lg font-medium text-blue-600 mb-2"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight"
            >
              Honour Kalu
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-3xl font-semibold text-gray-600 mb-6"
            >
              Frontend Developer & UI Specialist
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              I craft exceptional digital experiences with modern web
              technologies. Specializing in React, TypeScript, and responsive
              design, I bridge the gap between beautiful interfaces and
              functional code.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12"
            >
              <a
                href={pdf}
                download="Honour_Kalu_Frontend_Developer_CV.pdf"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                Contact Me
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start gap-3"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className={`${link.bg} ${link.color} w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300`}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="lg:w-1/2 flex justify-center"
          >
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
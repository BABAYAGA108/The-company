import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/yourusername" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/yourprofile" },
    { icon: <FaTwitter />, url: "https://twitter.com/yourhandle" },
    { icon: <MdEmail />, url: "mailto:your.email@example.com" },
  ];

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="mb-4 md:mb-0">
            <p className="text-sm md:text-base">
              &copy; {currentYear} Your Company Name. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors duration-300 text-xl"
                aria-label={`Social media link ${index + 1}`}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Additional Links */}
          <div className="mt-4 md:mt-0">
            <div className="flex flex-wrap justify-center space-x-4 text-sm">
              <a
                href="/privacy"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="/contact"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Attribution (optional) */}
        <div className="mt-6 text-xs text-gray-400">
          <p>Built with React and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

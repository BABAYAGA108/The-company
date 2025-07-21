import { Link } from "react-router-dom";
import image1 from "../../assets/Project/killing bite.png";
import image2 from "../../assets/Project/Sonic Excellence.png";
import image3 from "../../assets/Project/Exodus Pediatrics.png";
import { FaExternalLinkAlt, FaGithub, FaArrowRight } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Killing Bite",
      image: image1,
      description:
        "A full-stack online restaurant platform built with modern web technologies.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      demoLink: "https://killing-bite-61qx.vercel.app/",
      codeLink: "https://github.com/BABAYAGA108/killing-bite.git",
    },
    {
      id: 2,
      title: "Sonic Excellence",
      image: image2,
      description:
        "Music streaming platform with curated playlists and artist features.",
      tech: ["React", "TypeScript", "Firebase", "Redux"],
      demoLink: "https://muse-five-pink.vercel.app/",
      codeLink: "https://github.com/BABAYAGA108/muse.git",
    },
    {
      id: 3,
      title: "Exodus Pediatrics",
      image: image3,
      description: "Healthcare management system for pediatric clinics.",
      tech: ["React", "TypeScript", "Firebase", "Chart.js"],
      demoLink: "https://exdous-108.vercel.app/",
      codeLink: "https://github.com/BABAYAGA108/exdous-108.git",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one presented unique
            challenges and learning opportunities.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden h-60">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm">{project.description}</p>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((technology, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 text-xs px-3 py-1 rounded-full"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 transition-colors"
                  >
                    <FaGithub /> Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow hover:shadow-md transition-all"
          >
            Get In Touch <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;

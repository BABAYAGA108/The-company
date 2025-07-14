import image1 from "../../assets/Project/killing bite.png";
import image2 from "../../assets/Project/Sonic Excellence.png";
import image3 from "../../assets/Project/Exodus Pediatrics.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Killing Bite",
      image: image1,
      description: "A full-stack online restaurant using Tailwind.",
      tech: ["React", "Node.js", "MongoDB"],
      demoLink: "https://killing-bite-61qx.vercel.app/",
      codeLink: "https://github.com/BABAYAGA108/killing-bite.git",
    },
    {
      id: 2,
      title: " Sonic Excellence.",
      image: image2,
      description: "Another project description",
      tech: ["React", "TypeScript", "Firebase"],
      demoLink: "https://muse-five-pink.vercel.app/",
      codeLink: "https://github.com/BABAYAGA108/muse.git",
    },
    {
      id: 3,
      title: "Exodus Pediatrics",
      image: image3,
      description: "Another project description",
      tech: ["React", "TypeScript", "Firebase"],
      demoLink: "https://exdous-108.vercel.app/",
      codeLink: "https://github.com/BABAYAGA108/exdous-108.git",
    },
    // Add more projects as needed
  ];

  return (
    <>
    
      <div>
        <h2 className="text-3xl font-bold text-center my-8">Projects</h2>
        <p className="text-center text-gray-600 mb-6">
          Here are some of my recent projects.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-3">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((technology, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="flex space-x-3">
                <a
                  href={project.demoLink}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href={project.codeLink}
                  className="text-gray-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;

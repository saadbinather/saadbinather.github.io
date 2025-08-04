import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ExternalLink,
  Github,
  Code,
  Database,
  Sparkles,
  Gamepad2,
  FileText,
  Home,
  Bot,
  Film,
  Filter,
} from "lucide-react";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState("all");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const projects = [
    {
      title: "AI CodeLab",
      description:
        "A coding practice and challenge platform powered by the Gemini AI API with daily challenges, leaderboards, and submission tracking.",
      longDescription:
        "AI CodeLab is a comprehensive coding practice platform that leverages the power of AI to generate dynamic programming challenges. Built with modern web technologies, it features a competitive environment with daily challenges and real-time leaderboards.",
      image: "/p1.png",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "ShadCN/UI",
        "Node.js",
        "MongoDB",
        "Gemini API",
      ],
      category: "fullstack",
      features: [
        "AI-powered problem generation using Gemini",
        "Daily CodeWars leaderboard system",
        "Code submission evaluation and user history",
        "Real-time competitive programming environment",
      ],
      github: "https://github.com/saadbinather/ai-colab",
      demo: "#",
      status: "completed",
      icon: <Bot className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Freakmax - Movie Ticket Booking",
      description:
        "A full-stack movie ticket booking system with user and admin portals, featuring secure authentication and role-based access control.",
      longDescription:
        "Freakmax is a comprehensive movie ticket booking platform that handles everything from cinema management to payment processing. Built with a robust backend API and intuitive React frontend.",
      image: "/p2.png",
      technologies: [
        "Node.js",
        "SQL Server",
        "Express.js",
        "React.js",
        "Tailwind CSS",
      ],
      category: "fullstack",
      features: [
        "Admin portal for managing cinemas, movies, and shows",
        "User booking system with seat selection",
        "Ticket cancellation and payment management",
        "Comprehensive CRUD APIs (15+ modules)",
        "Role-based authentication system",
      ],
      github: "https://github.com/saadbinather/FreakMax",
      demo: "#",
      status: "completed",
      icon: <Film className="w-6 h-6" />,
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Stickball Manchester - Property Finder",
      description:
        "Live real-estate platform helping students find properties. Built as an educational project simulating platforms like Zillow or Rightmove.",
      longDescription:
        "A fully functional property listing and search platform designed to help students understand how real estate platforms work. Features advanced search capabilities and admin management tools.",
      image: "/p3.png",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "ShadCN/UI",
        "MongoDB",
        "Vercel",
      ],
      category: "fullstack",
      features: [
        "Property search with advanced filters",
        "Dynamic routing and image galleries",
        "Admin dashboard for listing management",
        "Contact forms with submission logic",
        "Fully responsive design",
      ],
      github: "https://github.com/saadbinather/StickBall-Rent-Home",
      demo: "https://money-manchester.stickball.biz",
      status: "live",
      icon: <Home className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Solitaire WebApp",
      description:
        "A drag-and-drop Solitaire card game built with React, featuring smooth animations and intuitive gameplay mechanics.",
      longDescription:
        "A fully functional Solitaire card game that demonstrates advanced React concepts including drag-and-drop functionality, state management, and game logic implementation.",
      image: "/p4.png",
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      category: "frontend",
      features: [
        "Drag-and-drop card movement",
        "Complete Solitaire game logic",
        "Smooth animations and transitions",
        "Responsive design for all devices",
      ],
      github: "https://github.com/saadbinather/solitaire",
      demo: "#",
      status: "completed",
      icon: <FileText className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "ASM Alphabet Catcher",
      description:
        "An interactive terminal-based game built in Assembly (x86) that teaches low-level programming concepts through engaging gameplay.",
      longDescription:
        "A unique educational tool that makes learning Assembly programming fun through interactive gaming. Features real-time input handling and optimized memory management.",
      image: "/p5.png",
      technologies: ["Assembly x86", "TASM/NASM", "DOSBox"],
      category: "systems",
      features: [
        "Real-time key detection using interrupts",
        "Progressive difficulty system",
        "Frame-based rendering with character grids",
        "High-score tracking with memory optimization",
        "Educational focus on CPU registers and I/O",
      ],
      github: "#",
      demo: "#",
      status: "completed",
      icon: <Gamepad2 className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Solitaire with DSA Logic",
      description:
        "Web-based Solitaire game implementing complex Data Structures & Algorithms for game logic, state management, and move validation.",
      longDescription:
        "More than just a card game - this project demonstrates deep understanding of computer science fundamentals through practical application in game development.",
      image: "/p6.png",
      technologies: ["JavaScript", "HTML5", "CSS3", "Data Structures"],
      category: "algorithms",
      features: [
        "Stack-based card pile management",
        "Queue implementation for dealing mechanics",
        "Recursive algorithms for move validation",
        "Graph traversal for game state analysis",
        "Fisher-Yates shuffling algorithm",
        "Drag-and-drop UI interaction",
      ],
      github: "#",
      demo: "#",
      status: "completed",
      icon: <Sparkles className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const filters = [
    { id: "all", label: "All Projects", count: projects.length },
    {
      id: "fullstack",
      label: "Full-Stack",
      count: projects.filter((p) => p.category === "fullstack").length,
    },
    {
      id: "frontend",
      label: "Frontend",
      count: projects.filter((p) => p.category === "frontend").length,
    },
    {
      id: "systems",
      label: "Systems",
      count: projects.filter((p) => p.category === "systems").length,
    },
    {
      id: "algorithms",
      label: "Algorithms",
      count: projects.filter((p) => p.category === "algorithms").length,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-white dark:bg-black">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            A collection of projects showcasing my skills in full-stack
            development, algorithms, and system design
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="glass-effect rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden h-full relative">
                {/* GitHub Icon - Lower Right Corner */}
                <div className="absolute bottom-4 right-4 z-10">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.github || "https://github.com/saadbinather"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <Github className="w-7 h-7" />
                  </motion.a>
                </div>

                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.github || "https://github.com/saadbinather"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      <Github className="w-6 h-6" />
                    </motion.a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded border border-gray-200 dark:border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Key Features */}
                  <div className="space-y-1 mb-4">
                    {project.features.slice(0, 2).map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-2 text-xs text-gray-600 dark:text-gray-400"
                      >
                        <div
                          className={`w-1 h-1 rounded-full bg-gradient-to-r ${project.color} mt-1.5 flex-shrink-0`}
                        ></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;

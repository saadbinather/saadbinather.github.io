import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Code,
  Palette,
  Server,
  Shield,
  Database,
  GitBranch,
  BookOpen,
  Award,
  Camera,
} from "lucide-react";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-6 h-6" />,
      skills: [
        "JavaScript (ES6+)",
        "TypeScript",
        "C/C++",
        "SQL",
        "HTML5",
        "CSS3",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Frontend",
      icon: <Palette className="w-6 h-6" />,
      skills: [
        "React.js",
        "Next.js (App Router)",
        "Tailwind CSS",
        "ShadCN/UI",
        "Responsive Design",
        "Figma to Code",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6" />,
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Role-Based Auth (JWT)",
        "NextAuth.js",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Authentication",
      icon: <Shield className="w-6 h-6" />,
      skills: [
        "JWT",
        "NextAuth.js",
        "Role-Based Access Control",
        "Admin/User Systems",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: [
        "MongoDB",
        "SQL Server",
        "Mongoose ODM",
        "ER Modeling",
        "SSMS",
        "MongoDB Compass",
      ],
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Tools & Deployment",
      icon: <GitBranch className="w-6 h-6" />,
      skills: [
        "Git",
        "GitHub",
        "Vercel",
        "Netlify",
        "Postman",
        "Git Workflows",
      ],
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "CS Fundamentals",
      icon: <BookOpen className="w-6 h-6" />,
      skills: [
        "Data Structures & Algorithms",
        "OOP",
        "OS Concepts",
        "DBMS",
        "Probability & Statistics",
      ],
      color: "from-teal-500 to-cyan-500",
    },
    {
      title: "Currently Learning",
      icon: <Award className="w-6 h-6" />,
      skills: [
        "MERN Stack Mastery",
        "Competitive Programming",
        "Prisma",
        "MongoDB Advanced Queries",
      ],
      color: "from-rose-500 to-pink-500",
    },
    {
      title: "Media & Content Creation",
      icon: <Camera className="w-6 h-6" />,
      skills: [
        "Adobe Premiere Pro",
        "CapCut & VN",
        "Basic Photoshop",
        "Instagram Reels Editing",
        "Photo Color Grading",
        "Cinematic Montages",
      ],
      color: "from-zinc-500 to-gray-700",
    },
  ];

  return (
    <section id="skills" className="section-padding bg-white dark:bg-black">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
              className="relative group"
            >
              <div className="glass-effect p-6 rounded-xl border border-gray-200 dark:border-gray-700 h-full relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 rounded-lg bg-black dark:bg-black text-white hover:text-blue-500 transition-colors">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: skillIndex * 0.1 }}
                        className="flex items-center space-x-2 group/skill"
                      >
                        <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 opacity-70 group-hover/skill:opacity-100 transition-opacity"></div>
                        <span className="text-gray-700 dark:text-gray-300 text-sm group-hover/skill:text-gray-900 dark:group-hover/skill:text-white transition-colors">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;

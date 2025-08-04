import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Building2,
  Calendar,
  MapPin,
  ExternalLink,
  CheckCircle,
} from "lucide-react";

const Experience = () => {
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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const experiences = [
    {
      title: "Full Stack Web Developer Intern",
      company: "Musketeer Tech",
      period: "June – August 2025",
      location: "Lahore, Pakistan",
      type: "Internship",
      description:
        "Worked on scalable web apps with modern frontend technologies and CMS integration.",
      achievements: [
        "Built pages using Next.js App Router",
        "Styled components with Tailwind CSS and ShadCN/UI",
        "Integrated Sanity CMS for content management",
        "Deployed on Vercel with performance tuning",
        "Enhanced UX with accessibility and mobile optimization",
      ],
      technologies: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "ShadCN/UI",
        "Sanity CMS",
        "Vercel",
        "Git",
      ],
      icon: <Building2 className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Web Development Intern",
      company: "DEN",
      period: "July – August 2025",
      location: "Remote",
      type: "Internship",
      description:
        "Contributed to frontend and backend development tasks in a fast-paced remote environment.",
      achievements: [
        "Collaborated on full-stack features using MERN stack",
        "Participated in code reviews and agile sprint planning",
        "Implemented responsive interfaces and REST APIs",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "GitHub"],
      icon: <Building2 className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Volunteer (Admin + Instructor)",
      company: "Aghaz",
      period: "June – August 2023",
      location: "Lahore, Pakistan",
      type: "Volunteer",
      description:
        "Led co-curricular education initiatives and supported admin operations at a welfare school.",
      achievements: [
        "Organized student events and workshops",
        "Taught basic art skills and creative activities",
        "Assisted with school management and logistics",
      ],
      technologies: [],
      icon: <Building2 className="w-6 h-6" />,
      color: "from-orange-500 to-yellow-500",
    },
  ];

  return (
    <section
      id="experience"
      className="section-padding bg-gray-50 dark:bg-black"
    >
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional experience and internships that shaped my development
            journey
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Date and location */}
                <div className="lg:w-64 flex-shrink-0">
                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400 flex items-center mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                {/* Experience content */}
                <div className="flex-1 border-l-2 border-gray-200 dark:border-gray-700 pl-8">
                  <div className="mb-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full font-medium">
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold text-lg">
                      {exp.company}
                    </p>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="flex items-start space-x-3 text-sm text-gray-600 dark:text-gray-400"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  {exp.technologies.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-md font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;

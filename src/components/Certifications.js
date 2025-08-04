import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Star, Calendar, Building } from "lucide-react";

const Certifications = () => {
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
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const certifications = [
    {
      title: "Dean's List",
      issuer: "FAST NUCES",
      period: "Fall 2024",
      description:
        "Maintained a 3.74 GPA, demonstrating academic excellence and a solid grasp of CS fundamentals",
      type: "Academic Achievement",
      icon: <Star className="w-6 h-6" />,
      color: "from-gray-500 to-gray-600",
      verified: true,
    },
    {
      title: "CS50: Introduction to CS",
      issuer: "Harvard University",
      period: "2024",
      description:
        "Comprehensive introduction to computer science and programming, covering algorithms, data structures, and web development",
      type: "Online Course",
      icon: <Award className="w-6 h-6" />,
      color: "from-gray-600 to-gray-700",
      verified: true,
    },
  ];

  return (
    <section
      id="certifications"
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
            Certifications & <span className="gradient-text">Awards</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Recognition for academic excellence and continuous learning in
            computer science
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="glass-effect p-6 rounded-xl border border-gray-200 dark:border-gray-700 h-full relative overflow-hidden">
                {/* Background decoration */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${cert.color} opacity-10 rounded-bl-full`}
                ></div>

                {/* Verified badge */}
                {cert.verified && (
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center space-x-1 px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded-full border border-green-200 dark:border-green-800">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Verified</span>
                    </div>
                  </div>
                )}

                <div className="relative z-10">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="p-3 rounded-lg bg-black dark:bg-black text-white hover:text-blue-500 transition-colors flex-shrink-0">
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {cert.title}
                      </h3>
                      <div className="flex items-center space-x-2 mb-2">
                        <Building className="w-4 h-4 text-gray-500" />
                        <span className="text-primary-600 dark:text-primary-400 font-semibold">
                          {cert.issuer}
                        </span>
                        <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full">
                          {cert.type}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <Calendar className="w-4 h-4" />
                        <span>{cert.period}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;

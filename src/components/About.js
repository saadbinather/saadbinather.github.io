import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { User, BookOpen, Dumbbell, Film } from "lucide-react";

const About = () => {
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const highlights = [
    {
      icon: <User className="w-6 h-6" />,
      title: "Full-Stack Developer",
      description: "React, Next.js, Node.js, PostgreSQL/MongoDB",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "CS Student",
      description: "Currently studying at FAST NUCES Lahore",
    },
    {
      icon: <Dumbbell className="w-6 h-6" />,
      title: "Athlete",
      description: "Football & Volleyball enthusiast",
    },
    {
      icon: <Film className="w-6 h-6" />,
      title: "Film & Media Creator",
      description: "Cinephile, photo/video editing enthusiast",
    },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-black">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
            Get to know the person behind the pixels
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              {/* Profile image */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/pfp.jpg"
                  alt="Saad Bin Ather"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Hey! I'm Saad Bin Ather
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  A 2nd-year Computer Science student at FAST NUCES Lahore with
                  a passion for turning ideas into reality through code. Whether
                  it's building smooth, responsive websites or crafting backend
                  logic for real-world apps, I love making tech that actually
                  feels good to use.
                </p>
                <p>
                  I mostly work across the full stack, and my go-to tools are
                  React, Next.js, Node.js, and PostgreSQL/MongoDB. From
                  AI-driven platforms to full-blown movie ticketing systems,
                  I've built projects that blend functionality with real-world
                  impact.
                </p>
                <p>
                  When I'm not coding, I'm probably editing a video, snapping
                  photos, or playing football. I'm also obsessed with film and
                  fantasize of working with platforms like Letterboxd or IMDb
                  someday — combining my love for cinema with software.
                </p>
                <p className="font-medium text-gray-700 dark:text-gray-300">
                  Always learning, always building — and always down for a new
                  challenge.
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-4 glass-effect rounded-lg border border-gray-200 dark:border-gray-700 group cursor-default"
                >
                  <div className="flex items-start space-x-3">
                    <div className="text-primary-600 dark:text-primary-400 group-hover:text-primary-500 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

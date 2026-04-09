import React from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaRocket, FaHandshake, FaLightbulb } from "react-icons/fa";

// Define skills with proficiency levels
const skills = [
  { name: "R", level: 90, category: "Statistics" },
  { name: "Power BI", level: 90, category: "Analytics" },
  { name: "Microsoft Excel", level: 90, category: "Analytics" },
  { name: "SPSS", level: 75, category: "Analytics" },
  { name: "Python", level: 80, category: "Data Science" },
  { name: "SQL", level: 82, category: "Database" },
  { name: "React", level: 80, category: "Frontend" },
  { name: "HTML & CSS", level: 80, category: "Frontend" },
  { name: "Git", level: 80, category: "Tools" },
];

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "ease-out"
      }
    }
  };

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        className="grid lg:grid-cols-2 gap-16 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Left Column - Content */}
        <motion.div variants={itemVariants}>
          <div className="mb-8">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "ease-out" }}
            >
              About Me
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            ></motion.div>
          </div>

          <motion.div
            className="space-y-6 text-gray-300 leading-relaxed"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              className="text-lg"
              variants={itemVariants}
            >
              I'm a passionate <span className="text-white font-semibold">Applied Statistics with Computing</span> student focused on data collection, manipulation, analysis, and visualization.
              My main strength is turning raw datasets into useful insight with tools like R, Excel, Power BI, and SPSS.
            </motion.p>

            <motion.p variants={itemVariants}>
              Development is a strong complement to my analytics work; I am most confident with frontend delivery while continuing to build backend experience.
              I enjoy creating clean interfaces for data dashboards and translating analysis into actionable business reports.
            </motion.p>

            <motion.p variants={itemVariants}>
              I am committed to continuous learning, ethical data handling, and practical impact through research-oriented and data-driven solutions.
            </motion.p>
          </motion.div>

          {/* Key Achievements */}
          <motion.div
            className="mt-8 grid grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.div
              className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-xl border border-gray-800/50"
              variants={itemVariants}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="text-2xl font-bold text-blue-400 mb-1"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              >
                15+
              </motion.div>
              <div className="text-sm text-gray-400">Projects Delivered</div>
            </motion.div>
            <motion.div
              className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-xl border border-gray-800/50"
              variants={itemVariants}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(147, 51, 234, 0.1)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="text-2xl font-bold text-purple-400 mb-1"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
              >
                3+
              </motion.div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Column - Skills */}
        <motion.div
          variants={itemVariants}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "ease-out" }}
        >
          <motion.h3
            className="text-2xl font-bold mb-8 text-center lg:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Technical Expertise
          </motion.h3>

          <div className="space-y-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300 font-medium">{skill.name}</span>
                  <motion.span
                    className="text-sm text-gray-500"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {skill.level}%
                  </motion.span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.1 + 0.5,
                      duration: 1.5,
                      ease: "ease-out"
                    }}
                    whileHover={{
                      boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
                      scaleY: 1.2,
                      transition: { duration: 0.2 }
                    }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            className="mt-12 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.h4
              className="text-lg font-semibold mb-4 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
            >
              Beyond Code
            </motion.h4>
            <div className="grid grid-cols-2 gap-4 text-center">
              {[
                { icon: FaBullseye, text: "Problem Solver" },
                { icon: FaRocket, text: "Quick Learner" },
                { icon: FaHandshake, text: "Team Player" },
                { icon: FaLightbulb, text: "Innovative" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.div
                    className="text-2xl mb-1"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <item.icon />
                  </motion.div>
                  <div className="text-sm text-gray-400">{item.text}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
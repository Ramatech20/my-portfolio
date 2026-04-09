import React from "react";
import { motion } from "framer-motion";

// Define project type with more details
type Project = {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  category: string;
};

// Enhanced projects data
const projects: Project[] = [
  {
    title: "SACCO Vision Analytics",
    description: "Financial analytics dashboard for cooperative lending and member performance.",
    longDescription: "A business intelligence solution for SACCOs that delivers key financial indicators, member analytics, and performance reports using Power BI and Python data processing.",
    tech: ["Power BI", "Python", "Excel", "SQL"],
    features: ["Member Trends", "Loan Portfolio Analysis", "Financial Reporting", "Performance Dashboards", "Data Cleaning"],
    category: "Finance",
    githubUrl: "#"
  },
  {
    title: "Education Performance Dashboard",
    description: "Student assessment analytics and progress reporting system.",
    longDescription: "A data platform for academic institutions to analyze student scores, attendance trends, and learning outcomes with visual reports and recommendations.",
    tech: ["R", "Excel", "Tableau", "Python"],
    features: ["Score Analysis", "Progress Tracking", "Performance Summary", "Trend Visualization", "Recommendations"],
    category: "Education",
    githubUrl: "#"
  },
  {
    title: "Market Research Report",
    description: "Survey analysis and statistical reporting for decision-making.",
    longDescription: "A research-focused analytics project applying hypothesis testing, regression modeling, and visual summaries to draw insights from survey datasets.",
    tech: ["R", "SPSS", "Excel", "Power BI"],
    features: ["Hypothesis Testing", "Regression Analysis", "Data Cleaning", "Report Writing", "Visualization"],
    category: "Research",
    githubUrl: "#"
  },
  {
    title: "Retail Sales Dashboard",
    description: "Sales performance analytics and forecasting for retail operations.",
    longDescription: "A data analytics suite built to measure sales trends, customer behavior, and inventory impact using Excel, Python, and dashboard visualization.",
    tech: ["Excel", "Python", "Power BI", "SQL"],
    features: ["Sales Forecasts", "Trend Analysis", "Customer Segmentation", "Inventory Insights", "Dashboard Reports"],
    category: "Retail",
    githubUrl: "#"
  },
  {
    title: "Data Cleaning & Reporting Toolkit",
    description: "Structured workflows for dataset preparation and analysis.",
    longDescription: "A toolkit focused on dataset organization, annotation, and quality assurance to ensure accurate analysis and reporting across research projects.",
    tech: ["R", "Python", "Excel", "SPSS"],
    features: ["Data Preparation", "Quality Checks", "Annotation", "Summary Statistics", "Report Generation"],
    category: "Data Management",
    githubUrl: "#"
  },
  {
    title: "Community Survey Insights",
    description: "Demographic and policy analytics for community surveys.",
    longDescription: "An analytics project that transforms community survey data into digestible insights for policy planning and institutional decision-making.",
    tech: ["R", "Power BI", "Excel"],
    features: ["Survey Analysis", "Demographic Trends", "Policy Reporting", "Visualization", "Insight Summaries"],
    category: "Community",
    githubUrl: "#"
  }
];

const Projects: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "ease-out"
      }
    }
  };

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Data Analytics Portfolio
        </motion.h2>
        <motion.div
          className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-8"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        ></motion.div>
        <motion.p
          className="text-gray-400 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          A showcase of analytics and data-focused projects built around statistical reporting, visualization, and decision support.
          Each item highlights how I turn data into actionable insight.
        </motion.p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-800/50 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2"
            variants={cardVariants}
            whileHover={{
              y: -8,
              boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)",
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Category Badge */}
            <motion.div
              className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-semibold rounded-full mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              {project.category}
            </motion.div>

            {/* Title */}
            <motion.h3
              className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              {project.title}
            </motion.h3>

            {/* Description */}
            <motion.p
              className="text-gray-400 mb-4 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              {project.description}
            </motion.p>

            {/* Key Features */}
            <motion.div
              className="mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
              <ul className="text-xs text-gray-500 space-y-1">
                {project.features.slice(0, 3).map((feature, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 + i * 0.1 }}
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full mr-2"></span>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              className="flex flex-wrap gap-2 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              {project.tech.map((tech, i) => (
                <motion.span
                  key={i}
                  className="text-xs bg-gray-800/80 px-2 py-1 rounded-md text-gray-300 border border-gray-700/50"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.1 + i * 0.05 }}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 + index * 0.1 }}
            >
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Live Demo
                </motion.a>
              )}
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 border border-gray-600 text-gray-300 text-sm font-semibold rounded-lg hover:border-white hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Code
                </motion.a>
              )}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.p
          className="text-gray-400 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          Interested in working together? Let's discuss your next project.
        </motion.p>
        <motion.button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          Start a Conversation
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Projects;
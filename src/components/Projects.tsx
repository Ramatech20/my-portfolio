import React from "react";

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
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Data Analytics Portfolio
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-8"></div>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          A showcase of analytics and data-focused projects built around statistical reporting, visualization, and decision support.
          Each item highlights how I turn data into actionable insight.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-800/50 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2"
          >
            {/* Category Badge */}
            <div className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-semibold rounded-full mb-4">
              {project.category}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Key Features */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
              <ul className="text-xs text-gray-500 space-y-1">
                {project.features.slice(0, 3).map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-1 h-1 bg-blue-400 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-gray-800/80 px-2 py-1 rounded-md text-gray-300 border border-gray-700/50"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
                >
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 border border-gray-600 text-gray-300 text-sm font-semibold rounded-lg hover:border-white hover:bg-white/10 transition-all duration-300"
                >
                  Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <p className="text-gray-400 mb-6">
          Interested in working together? Let's discuss your next project.
        </p>
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
        >
          Start a Conversation
        </button>
      </div>
    </section>
  );
};

export default Projects;
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
    title: "Hospital Management System",
    description: "Comprehensive healthcare management platform for modern hospitals",
    longDescription: "A full-stack application designed to streamline hospital operations, featuring patient management, appointment scheduling, medical records, and administrative dashboards.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Express"],
    features: ["Patient Registration", "Appointment Scheduling", "Medical Records", "Staff Management", "Reporting Dashboard"],
    category: "Healthcare",
    githubUrl: "#"
  },
  {
    title: "SACCO Vision Analytics",
    description: "Advanced financial data visualization and analytics platform",
    longDescription: "A powerful business intelligence tool for Savings and Credit Cooperative Organizations (SACCOs), providing real-time financial insights, member analytics, and performance dashboards.",
    tech: ["React", "D3.js", "Python", "FastAPI", "Power BI"],
    features: ["Real-time Dashboards", "Member Analytics", "Financial Reporting", "Risk Assessment", "Predictive Modeling"],
    category: "Finance",
    githubUrl: "#"
  },
  {
    title: "E-Commerce Analytics Suite",
    description: "Data-driven insights platform for online retail businesses",
    longDescription: "A comprehensive analytics solution that helps e-commerce businesses understand customer behavior, optimize pricing strategies, and improve conversion rates through advanced data visualization.",
    tech: ["React", "Python", "Pandas", "Plotly", "SQL"],
    features: ["Customer Segmentation", "Sales Forecasting", "A/B Testing", "Conversion Optimization", "Revenue Analytics"],
    category: "E-Commerce",
    githubUrl: "#"
  },
  {
    title: "Smart Inventory System",
    description: "AI-powered inventory management with predictive analytics",
    longDescription: "An intelligent inventory management system that uses machine learning to predict demand, optimize stock levels, and prevent stockouts through automated reordering.",
    tech: ["React", "Python", "TensorFlow", "MongoDB", "Docker"],
    features: ["Demand Forecasting", "Automated Reordering", "Stock Optimization", "Supplier Management", "Real-time Alerts"],
    category: "Logistics",
    githubUrl: "#"
  },
  {
    title: "Educational Data Platform",
    description: "Learning analytics and student performance tracking system",
    longDescription: "A comprehensive platform for educational institutions to track student performance, identify learning patterns, and provide personalized learning recommendations.",
    tech: ["React", "Python", "R", "PostgreSQL", "Tableau"],
    features: ["Student Analytics", "Performance Tracking", "Learning Recommendations", "Progress Reports", "Institutional Insights"],
    category: "Education",
    githubUrl: "#"
  },
  {
    title: "Real Estate Analytics Hub",
    description: "Property market analysis and investment decision support",
    longDescription: "A sophisticated platform that analyzes real estate market trends, property values, and investment opportunities using advanced statistical models and market data.",
    tech: ["React", "Python", "scikit-learn", "PostgreSQL", "Mapbox"],
    features: ["Market Analysis", "Property Valuation", "Investment ROI", "Location Intelligence", "Trend Forecasting"],
    category: "Real Estate",
    githubUrl: "#"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-8"></div>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          A showcase of my recent work in full-stack development, data analytics, and system design.
          Each project represents a unique challenge and innovative solution.
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
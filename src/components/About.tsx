import React from "react";
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
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column - Content */}
        <div>
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8"></div>
          </div>

          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              I'm a passionate <span className="text-white font-semibold">Applied Statistics with Computing</span> student focused on data collection, manipulation, analysis, and visualization.
              My main strength is turning raw datasets into useful insight with tools like R, Excel, Power BI, and SPSS.
            </p>

            <p>
              Development is a strong complement to my analytics work; I am most confident with frontend delivery while continuing to build backend experience.
              I enjoy creating clean interfaces for data dashboards and translating analysis into actionable business reports.
            </p>

            <p>
              I am committed to continuous learning, ethical data handling, and practical impact through research-oriented and data-driven solutions.
            </p>
          </div>

          {/* Key Achievements */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-xl border border-gray-800/50">
              <div className="text-2xl font-bold text-blue-400 mb-1">15+</div>
              <div className="text-sm text-gray-400">Projects Delivered</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-xl border border-gray-800/50">
              <div className="text-2xl font-bold text-purple-400 mb-1">3+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Right Column - Skills */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">Technical Expertise</h3>

          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300 font-medium">{skill.name}</span>
                  <span className="text-sm text-gray-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-blue-500/25"
                    style={{
                      width: `${skill.level}%`,
                      transitionDelay: `${index * 100}ms`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20">
            <h4 className="text-lg font-semibold mb-4 text-center">Beyond Code</h4>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl mb-1"><FaBullseye /></div>
                <div className="text-sm text-gray-400">Problem Solver</div>
              </div>
              <div>
                <div className="text-2xl mb-1"><FaRocket /></div>
                <div className="text-sm text-gray-400">Quick Learner</div>
              </div>
              <div>
                <div className="text-2xl mb-1"><FaHandshake /></div>
                <div className="text-sm text-gray-400">Team Player</div>
              </div>
              <div>
                <div className="text-2xl mb-1"><FaLightbulb /></div>
                <div className="text-sm text-gray-400">Innovative</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
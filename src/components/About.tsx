import React from "react";

// Define skills with proficiency levels
const skills = [
  { name: "React", level: 90, category: "Frontend" },
  { name: "TypeScript", level: 85, category: "Frontend" },
  { name: "Node.js", level: 80, category: "Backend" },
  { name: "Python", level: 85, category: "Data Science" },
  { name: "SQL", level: 88, category: "Database" },
  { name: "Power BI", level: 85, category: "Analytics" },
  { name: "R", level: 80, category: "Statistics" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "Git", level: 85, category: "Tools" },
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
              I'm a passionate <span className="text-white font-semibold">Applied Statistics & Computing</span> student
              with a proven track record in full-stack development and data analytics. My journey combines
              rigorous statistical analysis with modern web technologies to create meaningful digital solutions.
            </p>

            <p>
              With over 3 years of experience, I've successfully delivered projects ranging from
              hospital management systems to financial data visualization platforms. I specialize in
              transforming complex data into actionable insights and building scalable applications
              that drive business value.
            </p>

            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source
              projects, or mentoring fellow developers. I believe in continuous learning and staying
              at the forefront of technological innovation.
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
                <div className="text-2xl mb-1">🎯</div>
                <div className="text-sm text-gray-400">Problem Solver</div>
              </div>
              <div>
                <div className="text-2xl mb-1">🚀</div>
                <div className="text-sm text-gray-400">Quick Learner</div>
              </div>
              <div>
                <div className="text-2xl mb-1">🤝</div>
                <div className="text-sm text-gray-400">Team Player</div>
              </div>
              <div>
                <div className="text-2xl mb-1">💡</div>
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
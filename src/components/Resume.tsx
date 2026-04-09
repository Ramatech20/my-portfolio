import React from "react";

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Curriculum Vitae
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-8"></div>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          A focused profile in applied statistics, data analytics, and computing, with strong experience using R, Excel, SPSS, Power BI, and Python.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-3">
        <div className="space-y-6 p-8 bg-gray-900/50 border border-gray-800/50 rounded-3xl">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-white">Contact</h3>
            <p className="text-gray-300">Ramadhan Wambia Chitechi</p>
            <p className="text-gray-300">Phone: +254 704 489 778</p>
            <p className="text-gray-300">Email: ramadhanwambia83@gmail.com</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-white">Professional Profile</h3>
            <p className="text-gray-400 leading-relaxed">
              Motivated fourth-year Bachelor of Science student in Applied Statistics with Computing with strong analytical and quantitative skills. Proficient in R and Microsoft Excel, with working knowledge of Python and SPSS. Demonstrates solid understanding of statistical analysis, data management, and interpretation of results.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-white">Career Objective</h3>
            <p className="text-gray-400 leading-relaxed">
              To secure an internship position in a reputable research institution or corporate organization where statistical analysis, data interpretation, and computing skills can support research, policy development, and organizational performance.
            </p>
          </div>
        </div>

        <div className="space-y-6 p-8 bg-gray-900/50 border border-gray-800/50 rounded-3xl lg:col-span-2">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">Education</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <p className="font-semibold text-white">Bachelor of Science in Applied Statistics with Computing</p>
                  <p>University of Eldoret | 2023 – 2027 (Expected)</p>
                  <p>Current Year: Fourth Year</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Kenya Certificate of Secondary Education (KCSE)</p>
                  <p>St. Beda’s Bukaya Secondary School | Grade: B- | 2022</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Kenya Certificate of Primary Education (KCPE)</p>
                  <p>Talent Bright Academy | 331 Marks</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">Technical Skills</h3>
              <div className="grid gap-3 text-gray-300">
                <div>
                  <p className="font-semibold text-white">Data Analysis</p>
                  <p>R programming, Excel analytics, SPSS, data cleaning, exploratory analysis, visualization.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Data Management</p>
                  <p>Data collection, entry, annotation, dataset preparation, organization, accuracy control.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Computing</p>
                  <p>HTML/CSS, frontend development, basic Python, database concepts, statistical computing.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Other Skills</p>
                  <p>Report writing, problem solving, time management, collaboration, ethical data handling.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-white">Academic Projects</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                Completed multiple data-focused academic projects involving statistical analysis, regression modeling, hypothesis testing, and data visualization using R, Excel, SPSS, and introductory Python.
              </li>
              <li>
                Experience cleaning and analyzing structured datasets, generating summary statistics, building predictive models and translating results into clear analytical reports for decision-making.
              </li>
              <li>
                Built dashboards, dashboards and reports for use in economic, demographic, survey and financial analytics contexts.
              </li>
            </ul>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">Core Competencies</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Quantitative and analytical reasoning</li>
                <li>Strong numerical and statistical interpretation</li>
                <li>Attention to detail and data accuracy</li>
                <li>Problem solving and critical thinking</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">Areas of Interest</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Statistical research and survey data analysis</li>
                <li>Economic and demographic analytics</li>
                <li>Government and institutional data systems</li>
                <li>Policy-oriented reporting and business intelligence</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-white">Personal Attributes</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Professional integrity and ethical data handling</li>
              <li>Adaptable and fast learner</li>
              <li>Strong time management and organizational skills</li>
              <li>Effective written and verbal communication</li>
            </ul>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-3xl p-6">
            <h3 className="text-xl font-semibold mb-3 text-white">Referee</h3>
            <p className="text-gray-300">Argwings Ranyimbo</p>
            <p className="text-gray-300">+254 721 120 786</p>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <a
          href="/resume.txt"
          download="Ramadhan-Wambia-Chitechi-CV.txt"
          className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Resume;

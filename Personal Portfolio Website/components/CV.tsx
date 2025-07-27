export function CV() {
  const experience = [
    {
      period: '2022 - Present',
      company: 'Creative Agency Co.',
      position: 'Senior Digital Designer',
      description: 'Leading digital design projects for international clients, managing creative teams, and developing innovative design solutions.'
    },
    {
      period: '2020 - 2022',
      company: 'Tech Startup Inc.',
      position: 'UI/UX Designer',
      description: 'Designed user interfaces and experiences for web and mobile applications, conducted user research and usability testing.'
    },
    {
      period: '2018 - 2020',
      company: 'Design Studio Ltd.',
      position: 'Junior Designer',
      description: 'Worked on brand identity projects, print design, and digital marketing materials for various clients.'
    }
  ];

  const education = [
    {
      period: '2014 - 2018',
      institution: 'University of Design',
      degree: 'Bachelor of Fine Arts in Graphic Design',
      description: 'Specialized in digital design, typography, and visual communication.'
    }
  ];

  const skills = [
    'Adobe Creative Suite',
    'Figma',
    'Sketch',
    'React',
    'HTML/CSS',
    'JavaScript',
    'Typography',
    'Brand Identity',
    'User Experience Design',
    'Project Management'
  ];

  return (
    <section className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="mb-16">
          <div className="mb-8">
            <span className="text-gray-400 text-sm tracking-wider">(Curriculum Vitae)</span>
          </div>
          
          <h2 className="text-2xl lg:text-4xl leading-tight">
            Professional experience, education, and expertise in digital design 
            and creative direction.
          </h2>
        </div>

        {/* Experience */}
        <div className="mb-16">
          <h3 className="text-xl mb-8 text-gray-300">Experience</h3>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="pb-8 border-b border-gray-800 last:border-b-0">
                <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-8 mb-4">
                  <span className="text-gray-400 text-sm lg:w-32 flex-shrink-0">
                    {exp.period}
                  </span>
                  <div className="flex-1">
                    <h4 className="text-lg mb-1">{exp.position}</h4>
                    <p className="text-gray-300 mb-3">{exp.company}</p>
                    <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-xl mb-8 text-gray-300">Education</h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="pb-8 border-b border-gray-800 last:border-b-0">
                <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-8 mb-4">
                  <span className="text-gray-400 text-sm lg:w-32 flex-shrink-0">
                    {edu.period}
                  </span>
                  <div className="flex-1">
                    <h4 className="text-lg mb-1">{edu.degree}</h4>
                    <p className="text-gray-300 mb-3">{edu.institution}</p>
                    <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-xl mb-8 text-gray-300">Skills & Expertise</h3>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="text-gray-400 text-sm lg:text-base">
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Download CV Button */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <button className="inline-flex items-center gap-2 px-6 py-3 border border-gray-600 text-white hover:bg-white hover:text-black transition-colors duration-300">
            <span>Download CV</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
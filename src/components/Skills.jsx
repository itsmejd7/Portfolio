import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' }
  ];

  return (
    <section id="skills" className="section-shell py-16 md:py-24 bg-white">
      <div className="absolute inset-0 bg-grid opacity-25"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.3em] text-xs text-slate-500 mb-4">Skills</p>
          <h2 className="text-3xl md:text-5xl font-semibold text-slate-900">
            Tools I reach for daily.
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-600">
            Balanced between frontend craft and backend reliability.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/90 p-4 md:p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 rounded-xl border border-slate-200 bg-slate-50 p-2">
                <img src={skill.logo} alt={`${skill.name} logo`} className="h-full w-full object-contain" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-wide text-slate-500">Skill</p>
                <p className="text-base font-semibold text-slate-900">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

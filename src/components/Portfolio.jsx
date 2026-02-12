import React from 'react';
import ThunderAi from '../assets/ThunderAi.png';
import Notes from '../assets/Notes.png';
import Portfolioimg from '../assets/Portfolioimg.png';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Thunder-AI',
      category: 'Conversational AI',
      description:
        'AI chatbot project built to practice full stack development, prompt handling, and clean UI.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Gemini API'],
      githubLink: 'https://github.com/itsmejd7/Thunder-Ai',
      liveLink: 'https://thunder-ai-amber.vercel.app/',
      status: 'Live',
      image: ThunderAi
    },
    {
      id: 2,
      title: 'Notes App',
      category: 'Productivity',
      description:
        'Notes app built to practice CRUD operations, UI states, and responsive design.',
      technologies: ['React', 'JavaScript', 'HTML', 'Tailwind CSS'],
      githubLink: 'https://github.com/itsmejd7/NotesAPP',
      liveLink: 'https://notes-app-three-tan.vercel.app/',
      status: 'Live',
      image: Notes
    },
    {
      id: 3,
      title: 'Portfolio',
      category: 'Personal Brand',
      description:
        'Personal portfolio built to showcase my skills, projects, and learning journey.',
      technologies: ['React', 'Tailwind CSS'],
      githubLink: 'https://github.com/itsmejd7/Thunder-Ai',
      liveLink: 'https://thunder-ai-amber.vercel.app/',
      status: 'Live',
      image: Portfolioimg
    }
  ];

  return (
    <section id="portfolio" className="section-shell py-16 md:py-24 bg-slate-50">
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.3em] text-xs text-slate-500 mb-4">Portfolio</p>
          <h2 className="text-3xl md:text-5xl font-semibold text-slate-900">
            My projects.
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-600">
            A few full stack projects that showcase my MERN skills and UI work.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col rounded-3xl border border-slate-200 bg-white/90 overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
                  {project.category}
                </div>
                <div className="absolute top-4 right-4 rounded-full bg-teal-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  {project.status}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-600">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-full bg-slate-900 px-4 py-2 text-center text-sm font-semibold text-white hover:translate-y-[-2px] transition-transform"
                  >
                    Live
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-full border border-slate-300 bg-white px-4 py-2 text-center text-sm font-semibold text-slate-700 hover:border-teal-500 hover:text-teal-700 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Portfolio;

import React, { useState } from 'react';
import ThunderAi from "../assets/ThunderAi.png";
import Notes from "../assets/Notes.png";
import NewsAi from "../assets/NewsAi.png"
import Portfolioimg from "../assets/Portfolioimg.png"

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Thunder-Ai',
      category: 'ChatBot',
      description: 'An intelligent AI chatbot application built with React, featuring natural language processing and conversational AI capabilities.',
      technologies: ['React', 'JavaScript', 'NodeJs', 'GeminiApi','Express','mongodb','RestApi'],
      githubLink: 'https://github.com/itsmejd7/Thunder-Ai',
      liveLink: 'https://thunder-ai-amber.vercel.app/',
      status: 'Completed',
      highlight: 'AI ChatBot',
      image: ThunderAi
    },
    {
      id: 2,
      title: 'Notes App',
      category: 'Web Application',
      description: 'A feature-rich notes-taking web application built with the Reeact Tailwand Css allowing users to create, edit, delete, and manage notes with a clean and responsive interface.',
      technologies: ['React', 'JavaScript', 'Html', 'Tailwind Css'],
      githubLink: 'https://github.com/itsmejd7/NotesAPP',
      liveLink: 'https://notes-app-three-tan.vercel.app/',
      status: 'Completed',
      highlight: 'Productivity Tool',
      image: Notes
    },
    {
      id: 3,
      title: 'News-Ai',
      category: 'News',
      description: 'Display news summary using NewsAi API with React and Tailwind CSS.',
      technologies: ['React', 'JavaScript', 'TailwindCSS', 'NewsAi API'],
      githubLink: 'https://github.com/itsmejd7/News-Ai',
      liveLink: '',
      status: 'Completed',
      highlight: 'News Summary AI ChatBot',
      image: NewsAi
    },
    {
      id: 4,
      title: 'Portfolio',
      category: 'WebApp',
      description: 'My personal portfolio site built with React and Tailwind CSS.',
      technologies: ['React', 'JavaScript', 'TailwindCSS'],
      githubLink: 'https://github.com/itsmejd7/Thunder-Ai',
      liveLink: 'https://thunder-ai-amber.vercel.app/',
      status: 'Completed',
      highlight: 'Personal Portfolio Site',
      image: Portfolioimg
    }       
    
  ];

  return (
    <section id="portfolio" className="py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-56 md:w-80 h-56 md:h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            My Portfolio
          </h2>
          <p className="text-lg mt-2 md:text-xl text-gray-600 max-w-2xl mx-auto mb-6 md:mb-8">
            "Code, design, and innovation — in every project I build."
          </p>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-4xl md:max-w-6xl lg:max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 max-w-sm md:max-w-none mx-auto"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
             
              <div className="relative h-28 md:h-36 lg:h-44 overflow-hidden">
                {/* Project Image */}
                <img 
                  src={project.image} 
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Status Badge */}
                <div className="absolute top-2 md:top-3 lg:top-4 right-2 md:right-3 lg:right-4">
                  <span className={`px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Highlight Badge */}
                <div className="absolute top-2 md:top-3 lg:top-4 left-2 md:left-3 lg:left-4">
                  <span className="px-2 py-1 md:px-3 md:py-1 bg-white/90 text-gray-800 rounded-full text-xs font-semibold">
                    {project.highlight}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-3 md:p-4 lg:p-6">
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-800 mb-2 md:mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-2 md:mb-3 lg:mb-4 leading-relaxed text-xs md:text-sm lg:text-base">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 md:gap-1.5 lg:gap-2 mb-2 md:mb-3 lg:mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-1.5 md:px-2 lg:px-3 py-0.5 md:py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-1.5 md:py-2 lg:py-3 px-2 md:px-3 lg:px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-xs md:text-sm lg:text-base"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-800 text-white text-center py-1.5 md:py-2 lg:py-3 px-2 md:px-3 lg:px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-xs md:text-sm lg:text-base"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <p className="text-gray-600 mb-6 text-lg">Interested in working together?</p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <span>Let's Connect</span>
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
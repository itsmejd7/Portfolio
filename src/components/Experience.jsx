import React from 'react';

const Experience = () => {
 const experiences = [
  {
    role: 'Full Stack Developer Intern',
    company: 'Tata Technologies',
    period: '2025',
    location: 'Pune, India',
    summary:
      'Engineered a full-stack vehicle management platform using React.js, Node.js, Express.js, and MongoDB with secure role-based access control and scalable backend architecture.',
    highlights: [
      'Architected and implemented role-based authentication (Admin/User) with protected routing and secure API authorization.',
      'Designed RESTful APIs and integrated MongoDB for optimized and scalable CRUD operations.',
      'Built dynamic vehicle listing and detailed modules improving content rendering efficiency and user interaction.',
      'Structured backend logic and database schema to enhance maintainability and data consistency.',
      'Reduced static dependency by migrating to database-driven persistence enabling scalable growth.'
    ]
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Devine Tech Solutions',
    period: 'March 2025 – May 2025',
    location: 'Remote',
    summary:
      'Developed high-performance, responsive web applications using React.js and modern UI frameworks with focus on usability and clean architecture.',
    highlights: [
      'Built scalable and responsive UI components using React.js, Tailwind CSS, and modern CSS practices.',
      'Developed a Travel Booking platform with interactive forms and structured component-based architecture.',
      'Engineered a Resume Builder application with dynamic template rendering and reusable UI modules.',
      'Collaborated using Git and GitHub, maintaining clean commit history and structured version control workflow.'
    ]
  }
];



  return (
    <section id="experience" className="section-shell py-16 md:py-24 bg-white">
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.3em] text-xs text-slate-500 mb-4">Experience</p>
          <h2 className="text-3xl md:text-5xl font-semibold text-slate-900">
            Experience.
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-600">
            Industry experience alongside my academic journey.
          </p>
        </div>

        <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {experiences.map((item) => (
            <div
              key={`${item.role}-${item.company}`}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white text-xs font-semibold uppercase tracking-wide text-slate-700 border border-slate-200">
                  {item.period}
                </span>
                <span className="text-xs uppercase tracking-wide text-slate-500">{item.location}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-slate-900">
                {item.role}
              </h3>
              <p className="text-slate-600 mt-1">{item.company}</p>
              <p className="mt-4 text-slate-600 leading-relaxed">{item.summary}</p>
              <div className="mt-5 space-y-2">
                {item.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="mt-1 h-2 w-2 rounded-full bg-teal-500"></span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

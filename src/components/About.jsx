import React from 'react';
import Profile from '../assets/Profile.jpg';

const About = () => {
  return (
    <section id="about" className="section-shell py-16 md:py-24 bg-slate-50">
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-slate-500 mb-4">About</p>
            <h2 className="text-3xl md:text-5xl font-semibold text-slate-900">
              Full stack developer with a MERN focus.
            </h2>
            <p className="mt-5 text-base md:text-lg text-slate-600 leading-relaxed">
              I build complete web apps using MongoDB, Express, React, and Node.js. I enjoy creating clean UIs,
              writing reliable backend logic, and delivering projects that feel fast and polished.
            </p>
            <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
              I am currently a student and open to internships and collaborations where I can contribute
              and keep growing as a developer.
            </p>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-slate-600">
              <div className="rounded-2xl border border-slate-200 bg-white/90 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-500">Focus</p>
                <p className="mt-2 font-semibold text-slate-900">Web apps</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/90 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-500">Stack</p>
                <p className="mt-2 font-semibold text-slate-900">MERN + Tailwind</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/90 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-500">Value</p>
                <p className="mt-2 font-semibold text-slate-900">Quality, growth</p>
              </div>
            </div>
          </div>

          <div className="relative max-w-sm justify-self-center lg:justify-self-end">
            <div className="absolute -top-6 -left-6 h-16 w-16 rounded-2xl bg-teal-200/70"></div>
            <div className="absolute -bottom-8 -right-4 h-20 w-20 rounded-full bg-amber-200/70"></div>
            <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-xl shadow-slate-900/10">
              <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                <img
                  src={Profile}
                  alt="Jayesh Dhande portrait"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
                Currently based in India. Open to remote roles and collaborations.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

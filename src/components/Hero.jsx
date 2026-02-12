import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Jayesh_Dhande from '../assets/Jayesh_Dhande.pdf';

const Hero = () => {
  return (
    <section id="home" className="section-shell min-h-screen pt-24 md:pt-28 pb-16">
      <div className="absolute inset-0 bg-grid opacity-40"></div>
      <div className="absolute -top-32 -right-20 h-72 w-72 rounded-full bg-teal-200/50 blur-3xl"></div>
      <div className="absolute top-20 left-8 h-60 w-60 rounded-full bg-amber-200/50 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.25em] text-slate-600">
              Full Stack Developer
            </span>

            <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-semibold text-slate-900 leading-tight">
              Hi, I am Jayesh Dhande.
              <span className="font-display italic text-teal-700"> Full Stack</span> Developer.
            </h1>

            <p className="mt-6 text-base md:text-lg text-slate-600 leading-relaxed max-w-xl">
              I build complete web applications with the MERN stack, focusing on clean UI, scalable APIs,
              and reliable performance. I am currently pursuing my studies while working on real-world projects.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={Jayesh_Dhande}
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 hover:translate-y-[-2px] transition-transform"
              >
                View Resume
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/90 px-6 py-3 text-sm font-semibold text-slate-800 hover:border-teal-500 hover:text-teal-700 transition-colors"
              >
                See Projects
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 text-xs uppercase tracking-wide text-slate-500">
              <span className="rounded-full border border-slate-200 bg-white px-4 py-2">React projects</span>
              <span className="rounded-full border border-slate-200 bg-white px-4 py-2">API practice</span>
              <span className="rounded-full border border-slate-200 bg-white px-4 py-2">Responsive UI</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -left-6 h-20 w-20 rounded-2xl bg-amber-200/70"></div>
            <div className="absolute -bottom-8 -right-6 h-24 w-24 rounded-full bg-teal-200/70"></div>
            <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-xl shadow-slate-900/10">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Currently Learning</p>
              <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-slate-900">
                Expanding beyond MERN.
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                I am adding backend depth and problem-solving skills alongside my MERN stack work.
              </p>
              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm text-slate-500">Currently exploring</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">
                  <Typewriter words={['Spring Boot', 'DSA', 'Java']} loop={0} />
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2 text-xs uppercase tracking-wide text-slate-500">
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1">React</span>
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1">Node.js</span>
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1">MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

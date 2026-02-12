import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-lg font-semibold">Jayesh Dhande</p>
            <p className="mt-2 text-sm text-slate-300">
              Full stack developer focused on MERN applications.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/itsmejd7"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-700 px-4 py-2 text-xs uppercase tracking-wide text-slate-200 hover:border-teal-400 hover:text-teal-300 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jayesh-dhande8"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-700 px-4 py-2 text-xs uppercase tracking-wide text-slate-200 hover:border-teal-400 hover:text-teal-300 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <p className="mt-8 text-xs text-slate-500">
          © {new Date().getFullYear()} Jayesh Dhande. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

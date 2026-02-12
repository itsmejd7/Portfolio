import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="section-shell py-16 md:py-24 bg-white">
      <div className="absolute inset-0 bg-grid opacity-25"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10">
          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-slate-500 mb-4">Contact</p>
            <h2 className="text-3xl md:text-5xl font-semibold text-slate-900">
              Contact me.
            </h2>
            <p className="mt-4 text-base md:text-lg text-slate-600">
              Reach out for internships, collaboration, or project discussions.
            </p>

            <div className="mt-8 space-y-4 text-sm text-slate-600">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-500">Email</p>
                <p className="mt-1 font-semibold text-slate-900">Jdhande74@gmail.com</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-500">Based in</p>
                <p className="mt-1 font-semibold text-slate-900">India, open to remote</p>
              </div>
            </div>
          </div>

          <form
            action="https://formspree.io/f/maqdeoeq"
            method="POST"
            className="rounded-3xl border border-slate-200 bg-white/90 p-6 md:p-8 shadow-lg"
          >
            <div className="grid grid-cols-1 gap-4">
              <label className="text-sm font-semibold text-slate-700">
                Name
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 focus:border-teal-500 focus:outline-none"
                />
              </label>
              <label className="text-sm font-semibold text-slate-700">
                Email
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 focus:border-teal-500 focus:outline-none"
                />
              </label>
              <label className="text-sm font-semibold text-slate-700">
                Subject
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 focus:border-teal-500 focus:outline-none"
                />
              </label>
              <label className="text-sm font-semibold text-slate-700">
                Message
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 focus:border-teal-500 focus:outline-none"
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:translate-y-[-2px] transition-transform"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

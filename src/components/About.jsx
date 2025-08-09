import React from 'react';
import Profileimg from '../assets/ProfileImg.jpg';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-green-200 to-blue-200 rounded-full opacity-15 blur-lg"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 text-lg md:text-xl mt-6 max-w-2xl mx-auto">
            Passionate developer crafting digital experiences with code and creativity
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
            <div className="lg:col-span-1 flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-3xl p-1 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-3xl overflow-hidden">
                    <img 
                        src={Profileimg}
                      alt="Jayesh Dhande - IT Engineering Student"
                      className="w-full h-full object-cover object-center"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 flex items-center justify-center" style={{display: 'none'}}>
                      <div className="text-center text-white p-6">
                        <div className="text-6xl mb-4">👨‍💻</div>
                        <div className="text-xl font-bold mb-2">Jayesh Dhande</div>
                        <div className="text-blue-100 text-sm">IT Engineering Student</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 -left-6 w-4 h-4 bg-red-400 rounded-full animate-ping"></div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6 md:space-y-8">
              <div className="space-y-4 md:space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
                <p className="text-lg md:text-xl leading-relaxed">
                  Hello! I'm <span className="font-semibold text-blue-600">Jayesh Dhande</span>, a passionate third-year B.E. Computer Engineering student at Sinhgad Academy of Engineering, Pune. With a strong academic foundation and a current CGPA of <span className="font-bold text-purple-600">8.33</span>, I'm dedicated to turning innovative ideas into reality through code.
                </p>
                
                <p>
                  I specialize in building modern, responsive web applications and have hands-on experience with the <span className="font-semibold text-blue-600">MERN stack</span>. From concept to deployment, I've delivered several functional projects that showcase my ability to create clean, user-friendly solutions that solve real-world problems.
                </p>
                
                <p>
                  My passion lies in creating intuitive user experiences and writing clean, maintainable code. I'm always eager to learn new technologies and apply my skills to challenging projects that push the boundaries of what's possible on the web.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
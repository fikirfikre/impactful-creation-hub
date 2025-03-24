
import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title text-center">About Me</h2>
          <div className="glass-card p-8 md:p-10 space-y-6 animate-scale-in">
            <p className="text-gray-700">
              I'm a skilled Mobile App Developer with expertise in Flutter and Django, 
              focused on building high-quality applications that deliver exceptional 
              user experiences. With a strong foundation in state management (BLoC), 
              API integration, and local storage solutions (Hive), I develop fast, 
              user-friendly, and secure applications.
            </p>
            <p className="text-gray-700">
              My applications feature robust capabilities like offline access, 
              secure authentication flows, and seamless multimedia integration. 
              I'm passionate about writing clean, maintainable code and continuously 
              optimizing performance to create applications that truly make an impact.
            </p>
            <p className="text-gray-700">
              Currently working at Weyra Technologies, I continue to expand my skills 
              and take on challenging projects that push my capabilities. I approach 
              each project with enthusiasm and a dedication to excellence, always 
              eager to learn and improve.
            </p>
            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-3">Core Principles</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                  <span>Clean, maintainable code</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                  <span>Performance optimization</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                  <span>User-centric design</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                  <span>Continuous learning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

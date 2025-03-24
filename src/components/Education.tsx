
import React from "react";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="bg-blue-50 py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title text-center">Education</h2>
        <div className="max-w-3xl mx-auto mt-12">
          <div className="glass-card p-8 md:p-10 transition-all hover:shadow-md animate-scale-in">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <GraduationCap size={24} className="text-primary mr-3" />
                <h3 className="text-xl font-bold">BS, Software Engineering and Computing Technology</h3>
              </div>
              <div className="text-sm font-medium text-blue-600 flex items-center">
                <Calendar size={14} className="mr-1" />
                <span>2019 - 2024</span>
              </div>
            </div>
            
            <div className="flex items-center mb-6 text-gray-700">
              <span className="text-base font-medium">Addis Ababa University</span>
              <span className="mx-2">•</span>
              <span className="text-sm">Addis Ababa, Ethiopia</span>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-700">
                Specialized in Cyber Security Stream with a focus on software engineering 
                fundamentals, application development, and security practices.
              </p>
              
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <h4 className="font-medium mb-2">Key Areas of Study</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 bg-primary rounded-full mr-2"></span>
                    <span>Software Architecture</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 bg-primary rounded-full mr-2"></span>
                    <span>Mobile Application Development</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 bg-primary rounded-full mr-2"></span>
                    <span>Web Development</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 bg-primary rounded-full mr-2"></span>
                    <span>Data Structures & Algorithms</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 bg-primary rounded-full mr-2"></span>
                    <span>Cyber Security Principles</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 bg-primary rounded-full mr-2"></span>
                    <span>Database Systems</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-4">
                <a 
                  href="https://www.aau.edu.et/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:underline flex items-center"
                >
                  <span>Visit University Website</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

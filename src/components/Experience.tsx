
import React from "react";
import { Calendar, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "IT Trainee",
      company: "Commercial Bank of Ethiopia",
      period: "Dec 2024 - Present",
      location: "Addis Ababa, Ethiopia",
      description: [
        "Part of a team developing an e-learning platform using Moodle, aimed at enhancing digital education and training.",
        "Currently involved in the initial phase of the project, focusing on system architecture, customization, and integration.",
        "Collaborating with team members to implement secure and scalable learning solutions."
      ]
    },
    {
      title: "Flutter Developer",
      company: "Weyra Technologies",
      period: "Oct 2024 - Present",
      location: "Addis Ababa, Ethiopia",
      description: [
        "Developing and maintaining mobile applications using Flutter, ensuring high performance and smooth user experience.",
        "Implementing key features such as offline access, multimedia integration and authentication to enhance user engagement.",
        "Utilizing BLoC for efficient state management and clean architecture principles to maintain scalable codebases.",
        "Working with REST APIs, integrating with node-based backends, and handling secure authentication flows."
      ]
    },
    {
      title: "Flutter Developer Intern",
      company: "Orbit Technologies",
      period: "Aug 2024 - Oct 2024",
      location: "Addis Ababa, Ethiopia",
      description: [
        "Implemented Hive for offline storage, enabling seamless access to data without an internet connection.",
        "Developed and enhanced forums, discussion threads, polls, and interactive Q&A sessions within mobile applications.",
        "Integrated OPEN STREET for location-based recommendations and service centers."
      ]
    },
    {
      title: "Django Developer Intern",
      company: "Ministry of Innovation and Technology (MINT)",
      period: "Feb 2023 - Jun 2023",
      location: "Addis Ababa, Ethiopia",
      description: [
        "Implemented additional functionality, including a hiring system to streamline recruitment processes.",
        "Worked in a team-based environment, improving problem-solving and project management skills.",
        "Collaborated with a team to develop and enhance the website of the Ministry."
      ]
    }
  ];

  return (
    <section id="experience" className="bg-blue-50 py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title text-center">Work Experience</h2>
        <div className="max-w-3xl mx-auto mt-12">
          <div className="relative mx-auto">
            {experiences.map((job, index) => (
              <div 
                key={index} 
                className="timeline-item"
                style={{ "--animation-delay": index + 1 } as React.CSSProperties}
              >
                <div className="timeline-bullet"></div>
                <div className="ml-6">
                  <div className="glass-card p-6 md:p-8 transition-all hover:shadow-md">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                      <div className="text-sm font-medium text-blue-600 flex items-center mt-1 sm:mt-0">
                        <Calendar size={14} className="mr-1" />
                        <span>{job.period}</span>
                      </div>
                    </div>
                    <div className="flex items-center mb-4 text-gray-700">
                      <Briefcase size={16} className="mr-2" />
                      <span className="text-base font-medium">{job.company}</span>
                      <span className="mx-2">•</span>
                      <span className="text-sm">{job.location}</span>
                    </div>
                    <ul className="space-y-2 text-gray-600">
                      {job.description.map((item, i) => (
                        <li key={i} className="flex">
                          <span className="mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

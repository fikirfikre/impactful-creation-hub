
import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Mobile Development",
      skills: ["Flutter", "Dart", "BLoC Pattern", "Provider", "GetX", "UI/UX Design", "Animations", "Custom Widgets"]
    },
    {
      category: "Backend & APIs",
      skills: ["Django", "REST APIs", "API Integration", "Firebase", "Authentication", "JWT"]
    },
    {
      category: "Data Management",
      skills: ["Hive", "SQLite", "Shared Preferences", "State Management", "Stream Controllers", "Futures"]
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "Android Studio", "Google Play Console", "App Store Connect", "CI/CD"]
    },
    {
      category: "Additional Skills",
      skills: ["Responsive Design", "Cross-Platform Development", "Performance Optimization", "Debugging", "Unit Testing", "Team Collaboration"]
    }
  ];

  return (
    <section id="skills" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title text-center">Technical Skills</h2>
        <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="glass-card p-6 md:p-8 transition-all hover:shadow-md animate-fade-in opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-lg font-semibold mb-4 text-primary">
                {category.category}
              </h3>
              <div className="flex flex-wrap">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

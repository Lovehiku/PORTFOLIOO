import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database,  Brain, Server, Smartphone } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      skills: ["React.js" ,"JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap5", "Responsive Design"]
    },
    {
      icon: Server,
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "REST APIs", "Authentication", "MongoDB","c# .NET" ,"Golang"]
    },
    {
      icon: Database,
      title: "Database & Data",
      skills: ["MongoDB", "SQL", ]
    },
    
    {
      icon: Brain,
      title: "Data Science",
      skills: ["Machine Learning", "Python", "Pandas", "NumPy", "Matplotlib", ]
    },
    {
      icon: Smartphone,
      title: "Other Technologies",
      skills: ["Git & GitHub", "Docker", "Problem Solving", "Team Leadership","communication"]
    }
  ];

  return (
    <section id="skills" className="py-24 md:py-32 bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900 relative overflow-hidden border-t border-purple-800 z-20">
      {/* Circular accents */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Expertise & Software Skills
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative group h-full">
                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 hover:border-white/40 transition-all h-full">
                  <div className="p-4 bg-white/20 rounded-xl w-fit mb-6">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">
                    {category.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1.5 bg-white/20 text-white text-sm rounded-lg font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
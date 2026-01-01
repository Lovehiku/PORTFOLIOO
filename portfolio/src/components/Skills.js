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
    <section id="skills" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-16 rounded-full" />
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
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all h-full">
                  <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl w-fit mb-6">
                    <category.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-200 mb-4">
                    {category.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1.5 bg-slate-700/50 text-slate-300 text-sm rounded-lg border border-slate-600 hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
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
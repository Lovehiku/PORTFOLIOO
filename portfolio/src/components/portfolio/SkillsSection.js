import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", level: 95 },
      { name: "JavaScript/TypeScript", level: 75 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 70 },
      { name: "Responsive Design", level: 90 },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "c# .NET", level: 50 },
      { name: "Golang", level: 50 },     
      { name: "REST APIs", level: 70 },
    ],
  },
  {
    title: "Data Science & ML",
    skills: [
      { name: "Python", level: 85 },
      { name: "Machine Learning", level: 50 },
      { name: "Pandas/NumPy", level: 55 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "Docker", level: 65 },
      { name: "Problem Solving", level: 80 },
      { name: "Team Leadership", level: 70 },
      { name: "communication", level: 80 },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 font-medium tracking-widest uppercase text-sm">
            Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
            Technical Expertise
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="bg-slate-50 rounded-3xl p-8"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-6">{category.title}</h3>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-700 font-medium">{skill.name}</span>
                      <span className="text-slate-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: catIndex * 0.1 + skillIndex * 0.05, duration: 0.8 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech icons cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap items-center justify-center gap-4">
            {['React', 'Node.js', 'MongoDB', 'Express', 'Python', 'TensorFlow', 'Docker', 'Git', 'AWS', 'Linux', 'TypeScript', 'PostgreSQL'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-4 py-2 bg-white rounded-full border border-slate-200 text-slate-700 font-medium shadow-sm hover:shadow-md hover:border-blue-500/50 transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
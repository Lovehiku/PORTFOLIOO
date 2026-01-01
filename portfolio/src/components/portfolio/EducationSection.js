//education
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';

const education = [
  {
    degree: "BSc in Software Engineering",
    specialization: "Software Engineering & System Design",
    institution: "Addis Ababa University",
    location: "Addis Ababa, Ethiopia",
    period: "2021 - Present",
    description: "Focused on software development, data structures, distributed systems, databases, and modern engineering practices.",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 font-medium tracking-widest uppercase text-sm">
            Education
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
            Academic Background
          </h2>
        </motion.div>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">
                    {edu.period}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-2">{edu.degree}</h3>
                <p className="text-blue-500 font-medium mb-3">{edu.specialization}</p>

                <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                  <MapPin className="w-4 h-4" />
                  {edu.institution}, {edu.location}
                </div>

                <p className="text-slate-600 leading-relaxed">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

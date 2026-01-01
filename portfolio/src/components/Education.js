import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Science in Software Engineering",
      specialization: "Software Systems and Engineering Principles",
      institution: "Addis Ababa University",
      description:
        "Currently pursuing a Bachelor’s degree with a strong academic focus on software engineering fundamentals, system design, data structures, distributed systems, and modern development practices. The program emphasizes problem-solving, clean architecture, and building reliable software solutions."
    }
  ];

  return (
    <section id="education" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Circular accents */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-center mb-4 text-purple-800 flex items-center justify-center gap-2">
            <span>✨</span>
            <span>Education</span>
            <span>✨</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="relative group">
                <div className="relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-purple-500/50 transition-all">
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-purple-700/10 rounded-xl">
                      <GraduationCap className="w-8 h-8 text-purple-700" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-purple-700 font-semibold mb-2">
                        {edu.specialization}
                      </p>
                      <p className="text-gray-600 mb-4 flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        {edu.institution}
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
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

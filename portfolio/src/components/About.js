import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Mail, Code, Database, Shield } from 'lucide-react';

const quickFacts = [
  { icon: MapPin, label: "Location", value: "Addis Ababa, Ethiopia" },
  { icon: Calendar, label: "Academic Status", value: "Fourth-Year Software Engineering Student" },
  { icon: Mail, label: "Email", value: "lovehiku2@gmail.com" },
];

const expertise = [
  { icon: Code, title: "Full Stack Development", desc: "Backend-focused web application development" },
  { icon: Database, title: "Backend Engineering", desc: "RESTful APIs, databases, and scalable systems" },
  { icon: Shield, title: "Software Architecture", desc: "Clean architecture and concurrency principles" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
      {/* Circular accents */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mt-4 flex items-center justify-center gap-2">
            <span>✨</span>
            <span>Hello!</span>
            <span>✨</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-amber-500/20 rounded-3xl blur-2xl" />
              <div className="relative bg-white rounded-3xl p-8 md:p-10">
                <p className="text-lg text-gray-800 leading-relaxed mb-6">
                  I am a fourth-year Software Engineering student at Addis Ababa University with a strong interest in backend engineering, system design, and building scalable software solutions.
                </p>
                <p className="text-lg text-gray-800 leading-relaxed mb-8">
                  I am committed to developing ethical, reliable, and maintainable systems while continuously strengthening my understanding of distributed systems and concurrency concepts.
                </p>

                <div className="space-y-4">
                  {quickFacts.map((fact, index) => (
                    <motion.div
                      key={fact.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                        <fact.icon className="w-5 h-5 text-purple-700" />
                      </div>
                      <div>
                        <span className="text-gray-500 text-sm">{fact.label}</span>
                        <p className="text-gray-900 font-medium">{fact.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ x: 10 }}
                className="group p-6 rounded-2xl border border-gray-200 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 bg-white"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-700 to-purple-800 flex items-center justify-center shadow-lg shadow-purple-500/25 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 gap-4 pt-6"
            >
              {[
                { number: "3+", label: "Years of Study" },
                { number: "8+", label: "Projects Completed" },
                { number: "10+", label: "Technologies Used" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-2xl bg-gray-50">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-700 to-amber-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

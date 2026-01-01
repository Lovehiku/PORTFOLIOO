import React from 'react';
import { motion } from 'framer-motion';
import { Award, Image as ImageIcon } from 'lucide-react';

export default function Certificates() {
  const certificates = [
    {
      title: "Flutter Development Bootcamp",
      issuer: "NEJM",
      year: "2025",
      placeholder: "/images/programming.png"
    },
    {
      title: "React Developer Certification",
      issuer: "HUCIS",
      year: "2024",
      placeholder: "/images/jimma1st.png"
    },
    {
      title: "Packet Tracer Networking",
      issuer: "CISCO",
      year: "2024",
      placeholder: "/images/kotlin.png"
    },
    {
      title: "Hackathon third place Winner",
      issuer: "Elida 16 day activism Hackathon",
      year: "2025",
      placeholder: "/images/jimma2nd.png"
    },
  ];

  return (
    <section id="certificates" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Certificates & Achievements
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-16 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* ADDED ONCLICK TO THIS DIV - Makes entire card clickable */}
              <div 
                className="relative group h-full cursor-pointer"
                onClick={() => window.open(cert.placeholder, '_blank')}
                title={`View ${cert.title} certificate`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && window.open(cert.placeholder, '_blank')}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all h-full">
                  <div className="relative h-64 overflow-hidden bg-slate-800">
                    <img 
                      src={cert.placeholder} 
                      alt={cert.title}
                      className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="p-4 bg-cyan-500/10 rounded-full inline-block mb-4">
                          <ImageIcon className="w-12 h-12 text-cyan-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-cyan-500/10 rounded-lg mt-1">
                        <Award className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-slate-200 mb-1">
                          {cert.title}
                        </h3>
                        <p className="text-slate-400 text-sm">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                      <span className="text-cyan-400 text-sm font-semibold">
                        {cert.year}
                      </span>
                      <span className="text-slate-500 text-sm">
                        Click to view
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          {/* <p className="text-slate-400">
            <ImageIcon className="w-4 h-4 inline mr-2" />
            Upload your certificate images to replace placeholders
          </p> */}
        </motion.div>
      </div>
    </section>
  );
}
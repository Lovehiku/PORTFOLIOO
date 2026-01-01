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
    <section id="certificates" className="py-24 md:py-32 bg-gray-50 relative overflow-hidden border-t border-gray-200 z-50">
      {/* Circular accents */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-purple-800">
            Certificates & Achievements
          </h2>
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
                <div className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all h-full">
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    <img 
                      src={cert.placeholder} 
                      alt={cert.title}
                      className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="p-4 bg-purple-700/10 rounded-full inline-block mb-4">
                          <ImageIcon className="w-12 h-12 text-purple-700" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-purple-700/10 rounded-lg mt-1">
                        <Award className="w-5 h-5 text-purple-700" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                          {cert.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <span className="text-purple-700 text-sm font-semibold">
                        {cert.year}
                      </span>
                      <span className="text-gray-500 text-sm">
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
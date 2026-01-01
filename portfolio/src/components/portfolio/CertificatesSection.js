import React from 'react';
import { motion } from 'framer-motion';
import { Award, ImageIcon, ExternalLink, Download } from 'lucide-react';
import { Button } from "@/components/ui/button";

const certificates = [
 {
      title: "Flutter Development Bootcamp",
      issuer: "NEJM",
      year: "2025",
    },
    {
      title: "React Developer Certification",
      issuer: "HUCIS",
      year: "2024",
    },
    {
      title: "Packet Tracer Networking",
      issuer: "CISCO",
      year: "2024",
    },
    {
      title: "Hackathon third place Winner",
      issuer: "Elida 16 day activism Hackathon",
      year: "2025",
    },
];

export default function CertificatesSection() {
  return (
    <section id="certificates" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 font-medium tracking-widest uppercase text-sm">
            Certifications
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
            Professional Certificates
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="group h-full bg-white rounded-2xl border border-slate-200 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 overflow-hidden transition-all duration-300">
                {/* Certificate image placeholder */}
                <div className="relative h-40 bg-gradient-to-br from-blue-50 to-slate-100 flex items-center justify-center">
                  <div className="text-center">
                    <ImageIcon className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                    <span className="text-slate-400 text-xs">Certificate Image</span>
                  </div>
                  
                  <div className="absolute inset-0 bg-blue-500/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="text-white hover:bg-white/20"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-4 h-4 text-amber-500" />
                    <span className="text-slate-400 text-xs">{cert.date}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1 line-clamp-2">{cert.title}</h3>
                  <p className="text-slate-500 text-sm">{cert.issuer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Resume download section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Download My Resume
              </h3>
              <p className="text-blue-100 mb-6 max-w-lg mx-auto">
                Get a detailed overview of my experience, skills, and qualifications
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                {/* CV placeholder */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 w-full sm:w-auto">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-20 bg-white/20 rounded-lg flex items-center justify-center">
                      <ImageIcon className="w-8 h-8 text-white/60" />
                    </div>
                    <div className="text-left">
                      <p className="text-white font-medium">Ahmed_Mohammed_CV.pdf</p>
                      <p className="text-blue-200 text-sm">Resume / CV</p>
                    </div>
                  </div>
                </div>
                
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-full shadow-xl"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
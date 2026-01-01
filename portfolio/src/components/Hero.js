import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Loader2 } from 'lucide-react';
import { Button } from './ui/button';

export default function Hero() {
  const [downloading, setDownloading] = useState(false);
  
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    setDownloading(true);
    
    const link = document.createElement('a');
    link.href = 'images/Hiku_Oumer_CV.pdf';
    link.download = 'Hiku_Oumer_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setTimeout(() => setDownloading(false), 1000);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-6"
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-5xl font-bold text-cyan-400">
                HO
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-6xl md:text-7xl font-bold mb-4"
          >
            <span className="text-slate-300">Hello, I’m </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Hikma Oumer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-slate-400 mb-8 max-w-3xl mx-auto"
          >
            Software Engineering Student · Backend-Focused Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto"
          >
            I build reliable, ethical, and scalable software systems with a strong interest in backend engineering, system design, and distributed systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-600/15 text-slate-900 font-semibold px-8"
            >
              Contact Me
            </Button>
            
            <Button
              onClick={handleDownloadCV}
              size="lg"
              variant="outline"
              className="border-cyan-500 text-cyan-400 hover:bg-amber-500 px-8"
              disabled={downloading}
            >
              {downloading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Downloading…
                </>
              ) : (
                <>
                  <Download className="w-5 h-5 mr-2 text-amber-300" />
                  Download CV
                </>
              )}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              onClick={() => scrollToSection('about')}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ArrowDown className="w-8 h-8" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

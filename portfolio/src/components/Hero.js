import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Loader2 } from 'lucide-react';
import { Button } from './ui/button';

export default function Hero() {
  const [downloading, setDownloading] = useState(false);
  
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = async () => {
    setDownloading(true);
    
    try {
      // Fetch the CV file from public folder
      const response = await fetch('/CV.pdf');
      if (!response.ok) {
        throw new Error('CV file not found');
      }
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Hikma_Oumer_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading CV:', error);
      // Fallback: try direct link
      const link = document.createElement('a');
      link.href = '/CV.pdf';
      link.download = 'Hikma_Oumer_CV.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } finally {
      setTimeout(() => setDownloading(false), 1000);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900 z-0">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
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
            <div className="w-32 h-32 mx-auto rounded-full bg-white p-2 border-4 border-white">
              <div className="w-full h-full rounded-full bg-purple-900 flex items-center justify-center text-5xl font-bold text-white">
                HO
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/80 font-medium tracking-widest uppercase text-sm mb-4"
          >
            2026
          </motion.p>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-6xl md:text-7xl font-bold mb-4 text-white"
          >
            Portfolio & Resume
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-8 text-white"
          >
            Hikma Oumer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto"
          >
            Software Engineering Student · Backend-Focused Developer
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
              className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-8 rounded-lg"
            >
              Contact Me
            </Button>
            
            <Button
              onClick={handleDownloadCV}
              size="lg"
              className="bg-white text-purple-700 hover:bg-gray-100 font-semibold px-8 rounded-lg shadow-md transition-all"
              disabled={downloading}
            >
              {downloading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Downloading…
                </>
              ) : (
                <>
                  <Download className="w-5 h-5 mr-2" />
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
              className="text-white hover:text-white/80 transition-colors"
            >
              <ArrowDown className="w-8 h-8" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MessageCircle, Send, ChevronDown } from 'lucide-react';
import { Button } from "./ui/button";

const socialLinks = [
  { icon: Github, href: "https://github.com/AhmedMohammedAbdirehman", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ahmed-mohammed-75388b244/", label: "LinkedIn" },
  { icon: Send, href: "https://t.me/ahmimo53", label: "Telegram" },
  { icon: MessageCircle, href: "https://wa.me/251912345678", label: "WhatsApp" },
  { icon: Mail, href: "mailto:ahmimo53@gmail.com", label: "Email" },
];

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-8 inline-block"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-500 to-amber-500 p-1 mx-auto">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
                  HO
                </span>
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-blue-400 font-medium tracking-widest uppercase text-sm mb-4"
          >
            Welcome to my portfolio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
          >
            Hikma {' '}
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-amber-400 bg-clip-text text-transparent">
              Oumer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Full Stack Developer 
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300"
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-blue-500/25 transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full backdrop-blur-sm"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
          </motion.div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={scrollToAbout}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 hover:text-white transition-colors cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
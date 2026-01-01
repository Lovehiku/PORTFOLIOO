import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-950/90 backdrop-blur-lg border-b border-white/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo - UPDATED WITH IMAGE */}
            <motion.a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <img 
                src="/logo.png" 
                alt="Ahmed Mohammed Logo"
                className="h-10 w-auto"
                onError={(e) => {
                  // Fallback to text if image doesn't load
                  e.target.style.display = 'none';
                  const fallback = document.createElement('span');
                  fallback.className = 'text-2xl font-bold bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent';
                  fallback.textContent = 'AM';
                  e.target.parentNode.appendChild(fallback);
                }}
              />
            </motion.a>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="text-slate-400 hover:text-white transition-colors font-medium"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection('#contact')}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full px-6"
              >
                Hire Me
              </Button>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-slate-950/98 backdrop-blur-lg pt-24 md:hidden"
          >
            <div className="flex flex-col items-center gap-6 p-6">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => scrollToSection(link.href)}
                  className="text-2xl text-slate-300 hover:text-white transition-colors font-medium"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
              >
                <Button
                  onClick={() => scrollToSection('#contact')}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full px-8 py-6 text-lg mt-4"
                >
                  Hire Me
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
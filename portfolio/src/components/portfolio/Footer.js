import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-400">
            <span>© {currentYear} Hikma Oumer. All rights reserved.</span>
          </div>
          
          <div className="flex items-center gap-2 text-slate-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>in Ethiopia & Addis Ababa</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
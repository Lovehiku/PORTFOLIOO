import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            HO
          </div>
          
          <p className="text-slate-400 text-center">
            Full Stack Developer  | Tech Enthusiast
          </p>
          
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>by Hikma oumer</span>
          </div>
          
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
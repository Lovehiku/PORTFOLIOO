import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-purple-900 border-t border-purple-800 py-12 mt-0">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="text-3xl font-bold text-white">
            HO
          </div>
          
          <p className="text-white/80 text-center">
            Full Stack Developer  | Tech Enthusiast
          </p>
          
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-white fill-white" />
            <span>by Hikma oumer</span>
          </div>
          
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="relative mt-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 border-t border-gray-200 dark:border-gray-800">
      
      {/* Decorative glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-24 bg-gradient-to-r from-brand-primary/20 via-purple-500/20 to-cyan-400/20 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Left */}
          <div className="text-center sm:text-left space-y-1">
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
              © {new Date().getFullYear()} <span className="text-brand-primary">Hiku</span>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Software Engineer · Portfolio
            </p>
          </div>

          {/* Center */}
          <div className="flex items-center gap-5 text-sm text-gray-500 dark:text-gray-400">
            <a
              href="#home"
              className="hover:text-brand-primary transition-colors"
            >
              Back to top ↑
            </a>
            <span className="hidden sm:inline">•</span>
            <span className="text-center">
              Built with <span className="font-medium text-gray-700 dark:text-gray-300">React</span> &{" "}
              <span className="font-medium text-gray-700 dark:text-gray-300">Tailwind CSS</span>
            </span>
          </div>

          {/* Right (Tech accent) */}
          <div className="text-xs tracking-widest uppercase text-gray-400 dark:text-gray-500">
            Clean · Scalable · Ethical
          </div>

        </div>
      </div>
    </footer>
  );
}

// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Hiku. All rights reserved.
        </p>

        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <a
            href="#home"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Back to top
          </a>
          <span className="hidden sm:inline">•</span>
          <span>
            Built with React and Tailwind CSS
          </span>
        </div>
      </div>
    </footer>
  );
}

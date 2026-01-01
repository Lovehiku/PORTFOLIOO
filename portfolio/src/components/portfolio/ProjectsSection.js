import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ImageIcon, Code } from 'lucide-react';
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "SafeNet",
    description: "SafeNet is a digital safety platform designed to protect women and girls from online harm by detecting, preventing, and responding to Technology-Facilitated Gender-Based Violence (TFGBV).",
    tags: ["React ,Node.js", "Express", "MongoDB", ""],
    category: "Web Application",
  },
  {
    title: "Guardian App",
    description: "A Flutter application for managing medical information and emergency contacts.",
    tags: ["Dart", "Node.js", "MongoDB", "Swift"],
    category: "Mobile Application",
  },
  {
    title: "Data Analytics Dashboard",
    description: "Interactive dashboard for visualizing business metrics, generating reports, and predictive analytics using machine learning.",
    tags: ["Python", "React", "TensorFlow", "D3.js"],
    category: "Data Science",
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 font-medium tracking-widest uppercase text-sm">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Featured Projects
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in full-stack development, data science, and security
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="group h-full bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-slate-800 hover:border-blue-500/50 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
                {/* Image placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                  <div className="text-center z-10">
                    <ImageIcon className="w-12 h-12 text-slate-600 mx-auto mb-2" />
                    <span className="text-slate-500 text-sm">Project Screenshot</span>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button
                      size="icon"
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 rounded-full"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Button>
                    <Button
                      size="icon"
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 rounded-full"
                    >
                      <Github className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Code className="w-4 h-4 text-blue-400" />
                    <span className="text-blue-400 text-sm font-medium">{project.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-md bg-slate-800 text-slate-300 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
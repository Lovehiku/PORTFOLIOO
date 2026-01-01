import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { Button } from './ui/button';

export default function Projects() {
  const projects = [
   {
    title: "SafeNet",
    description: "SafeNet is a digital safety platform designed to protect women and girls from online harm by detecting, preventing, and responding to Technology-Facilitated Gender-Based Violence (TFGBV).",
    tags: ["React ,Node.js", "Express", "MongoDB", ""],
     image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80"
  },
  {
    title: "Guardian App",
    description: "A Flutter application for managing medical information and emergency contacts.",
    tags: ["Dart", "Node.js", "MongoDB", "Swift"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80"},
  {
    title: "Data Analytics Dashboard",
    description: "Interactive dashboard for visualizing business metrics, generating reports, and predictive analytics using machine learning.",
    tags: ["Python", "React", "TensorFlow", "D3.js"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80"}
  ];

  return (
    <section id="projects" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-16 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative group h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <div className="p-2 bg-slate-900/80 rounded-lg backdrop-blur-sm">
                        <Folder className="w-5 h-5 text-cyan-400" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-slate-200 mb-3">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-400 mb-4 flex-1">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full border border-cyan-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-slate-600 text-slate-300 hover:border-cyan-500 hover:text-cyan-400"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                              <Button
                              size="sm"
                              className="flex-1 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 border border-cyan-500/30"
                              onClick={() => window.open("YOUR_DEPLOYED_PROJECT_URL", "_blank")}
                              >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                              </Button>
                    </div>
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
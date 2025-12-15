// src/App.jsx
import { useEffect, useState } from "react";
const PHRASES = ["Creative Web Developer", "Cybersecurity Enthusiast", "Technical Writer"];
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import { projects } from "./data/projects";
import { links } from "./data/links";

export default function App() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setPhraseIndex((i) => (i + 1) % PHRASES.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  // contact page reverted to original; no form submission logic

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <Section id="home" title="Welcome">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center pt-24 pb-16">
    <div className="space-y-8 text-left">
      <h1 className="text-5xl sm:text-6xl font-bold leading-tight tracking-tight">
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Software Engineer
        </span>
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
        Building reliable, scalable, and ethical software with a focus on clarity,
        performance, and maintainability.
      </p>
      <h2 className="text-xl sm:text-2xl font-semibold h-8">
        <span className="inline-block transition-opacity duration-500 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {PHRASES[phraseIndex]}
        </span>
      </h2>
      <div className="flex items-center justify-start gap-6 pt-6 flex-wrap">
        <a href="#projects" className="btn-primary">View Projects</a>
        <a href="#contact" className="btn-outline">Contact</a>
      </div>
    </div>
    <div className="mx-auto max-w-xl text-left text-gray-600 dark:text-gray-400 space-y-4">
      <p className="text-sm bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
        Areas of impact
      </p>
      <p className="leading-relaxed">
        Specializing in backend engineering, system design, and concurrency —
        with hands-on experience across the full stack and modern tooling.
      </p>
      <div className="flex flex-wrap gap-3 pt-2">
        <span className="badge">Backend</span>
        <span className="badge">System Design</span>
        <span className="badge">Concurrency</span>
      </div>
    </div>
  </div>
</Section>

          <Section id="about" title="About Me">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

    {/* Main text */}
    <div className="space-y-5">
      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        I’m a Software Engineering student with a strong focus on backend systems
        and scalable architecture. I care deeply about writing clear code,
        designing predictable systems, and delivering thoughtful user experiences.
      </p>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        My work is guided by responsibility and intent — balancing performance,
        maintainability, and security to build software that people can trust.
      </p>
    </div>

    <div className="mx-auto max-w-md text-left">
      <div className="border-l-2 border-gray-200 dark:border-gray-800 pl-5 space-y-5">
        <div>
          <div className="font-semibold">Focus Areas</div>
          <p className="text-gray-600 dark:text-gray-400">Backend APIs, System Design, Concurrency</p>
        </div>
        <div>
          <div className="font-semibold">Principles</div>
          <p className="text-gray-600 dark:text-gray-400">Clarity, Reliability, and Ethical software</p>
        </div>
        <div>
          <div className="font-semibold">Tools</div>
          <p className="text-gray-600 dark:text-gray-400">Node.js, Express, TypeScript, Docker</p>
        </div>
      </div>
    </div>
  </div>
</Section>


        

        <Section id="skills" title="Technical Skills">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">

    {/* Programming Languages */}

    <div className="space-y-6">
      <h3 className="font-semibold text-lg mb-3">Programming Languages</h3>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm"><span>JavaScript</span><span>85%</span></div>
          <div className="h-[6px] bg-gray-200 dark:bg-gray-800 rounded-full"><div className="h-[6px] bg-brand-primary rounded-full" style={{width:"85%"}}></div></div>
        </div>
        <div>
          <div className="flex justify-between text-sm"><span>TypeScript</span><span>80%</span></div>
          <div className="h-[6px] bg-gray-200 dark:bg-gray-800 rounded-full"><div className="h-[6px] bg-brand-primary rounded-full" style={{width:"80%"}}></div></div>
        </div>
        <div>
          <div className="flex justify-between text-sm"><span>Go</span><span>70%</span></div>
          <div className="h-[6px] bg-gray-200 dark:bg-gray-800 rounded-full"><div className="h-[6px] bg-brand-primary rounded-full" style={{width:"70%"}}></div></div>
        </div>
      </div>
    </div>

    {/* Backend & Frameworks */}
    <div className="space-y-6">
      <h3 className="font-semibold text-lg mb-3">Backend & Frameworks</h3>
      <div className="flex flex-wrap justify-center gap-3">
        <span className="badge">Node.js</span>
        <span className="badge">Express.js</span>
        <span className="badge">.NET</span>
        <span className="badge">REST APIs</span>
        <span className="badge">JWT</span>
      </div>
    </div>

    {/* Databases */}
    <div className="space-y-6">
      <h3 className="font-semibold text-lg mb-3">Databases</h3>
      <div className="flex flex-wrap justify-center gap-3">
        <span className="badge">MongoDB</span>
        <span className="badge">MySQL</span>
        <span className="badge">Mongoose</span>
        <span className="badge">Schema Design</span>
      </div>
    </div>

    {/* Software Engineering Concepts */}
    <div className="space-y-6">
      <h3 className="font-semibold text-lg mb-3">Software Engineering</h3>
      <div className="flex flex-wrap justify-center gap-3">
        <span className="badge">Distributed Systems</span>
        <span className="badge">Concurrency</span>
        <span className="badge">Clean Architecture</span>
        <span className="badge">System Design</span>
      </div>
    </div>

    {/* Tools & DevOps */}
    <div className="space-y-6">
      <h3 className="font-semibold text-lg mb-3">Tools & DevOps</h3>
      <div className="flex flex-wrap justify-center gap-3">
        <span className="badge">Git</span>
        <span className="badge">Docker</span>
        <span className="badge">RabbitMQ</span>
        <span className="badge">Kubernetes</span>
        <span className="badge">Postman</span>
      </div>
    </div>

    {/* Cybersecurity & Writing */}
    <div className="space-y-6">
      <h3 className="font-semibold text-lg mb-3">Security & Documentation</h3>
      <div className="flex flex-wrap justify-center gap-3">
        <span className="badge">Risk Analysis</span>
        <span className="badge">Threat Modeling</span>
        <span className="badge">Mitigation</span>
        <span className="badge">Technical Writing</span>
      </div>
    </div>

  </div>
</Section>


        <Section id="projects" title="Projects">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </Section>
<Section id="services" title="Services">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    {/* Backend & System Development */}
    <div className="card p-6 space-y-3">
      <h3 className="font-semibold text-lg">
        Backend & System Development
      </h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        Design and development of secure, scalable backend systems,
        RESTful APIs, and well-structured application architectures.
      </p>
    </div>

    {/* Full-Stack Web Applications */}
    <div className="card p-6 space-y-3">
      <h3 className="font-semibold text-lg">
        Full-Stack Web Applications
      </h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        Development of responsive web applications, dashboards, and
        client portals with a strong focus on usability and performance.
      </p>
    </div>

    {/* Security & Technical Documentation */}
    <div className="card p-6 space-y-3">
      <h3 className="font-semibold text-lg">
        Security & Technical Documentation
      </h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        Cybersecurity risk assessments, threat modeling, mitigation
        strategies, and clear technical documentation for software systems.
      </p>
    </div>

  </div>
</Section>


         <Section id="contact" title="Contact">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
             <div className="card p-6 space-y-4">
               <h3 className="text-lg font-semibold">Send a message</h3>
               <form className="space-y-3">
                 <div className="text-left">
                   <label className="block text-sm mb-1">Full name</label>
                   <input className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your full name" />
                 </div>
                 <div className="text-left">
                   <label className="block text-sm mb-1">Email</label>
                   <input className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email address" />
                 </div>
                 <div className="text-left">
                   <label className="block text-sm mb-1">Message</label>
                   <textarea className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell me about your project or idea" rows="4" />
                 </div>
                 <button type="button" className="btn-primary w-full">Send message (demo)</button>
               </form>
             </div>
             <div className="card p-6 space-y-4">
               <h3 className="text-lg font-semibold">Connect</h3>
               <a className="btn-outline w-full" href={`mailto:${links.email}`}>{links.email}</a>
               <a className="btn-outline w-full" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
               <a className="btn-outline w-full" href={links.github} target="_blank" rel="noreferrer">GitHub</a>
             </div>
           </div>
         </Section>
      </main>
      <Footer />
    </div>
  );
}

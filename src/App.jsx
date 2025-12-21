// src/App.jsx
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import { projects } from "./data/projects";
import { links } from "./data/links";

export default function App() {
  // contact page reverted to original; no form submission logic

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <Section id="home" hideHeader>
  <div className="relative overflow-hidden rounded-none">
    <div className="relative">
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=60&w=1600&auto=format&fit=crop')] bg-cover bg-center"
      />
      <div className="absolute inset-0 bg-blue-900/70" />
      <div className="relative max-w-3xl mx-auto text-center text-white py-24 space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Software Engineer
        </h1>
        <p className="text-lg text-brand-primary">
          Building reliable, scalable, and ethical software with a focus on clarity,
          performance, and maintainability.
        </p>
        <div className="flex items-center justify-center gap-4 pt-2">
          <a
            href=""
            className="btn-green"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            Contact
          </a>
        </div>
      </div>
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,80 C320,160 640,0 960,80 C1200,140 1320,140 1440,100 L1440,180 L0,180 Z" fill="#d1fae5"></path>
        <path d="M0,120 C320,200 640,40 960,120 C1200,180 1320,180 1440,140 L1440,180 L0,180 Z" fill="#34d399" opacity="0.4"></path>
      </svg>
    </div>
  </div>
</Section>

          <Section id="about" title="About Me">
  <div className="relative rounded-2xl overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,#065f46_0%,#064e3b_50%,#052e25_100%)]" />
      <div className="relative p-6 sm:p-8">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-soft ring-1 ring-gray-200 dark:ring-gray-800 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1531498860502-7c5980f032d0?q=60&w=1200&auto=format&fit=crop"
            alt="Profile"
            className="h-48 sm:h-56 lg:h-full w-full object-cover rounded-xl"
          />
          <div className="absolute -top-2 left-6 w-6 h-16 border-2 border-gray-300 rounded-md bg-gray-100"></div>
        </div>
        <div className="space-y-5">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            I’m a Software Engineering student with a strong focus on backend systems
            and scalable architecture. I care deeply about writing clear code,
            designing predictable systems, and delivering thoughtful user experiences.
          </p>
          <div className="border-l-2 border-gray-200 dark:border-gray-800 pl-5 text-center mx-auto">
            <div className="font-semibold">Focus Areas</div>
            <p className="text-gray-600 dark:text-gray-400">Backend APIs, System Design, Concurrency</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</Section>


        

        <Section id="skills" title="Technical Skills">
  <div className="relative bg-white dark:bg-[#0b1324] rounded-xl py-12">
    <div className="absolute right-6 top-10 bottom-10 hidden md:flex flex-col items-center">
      <div className="w-px flex-1 bg-brand-primary/30"></div>
      <div className="w-2 h-2 rounded-full bg-brand-primary my-2"></div>
      <div className="w-px flex-1 bg-brand-primary/30"></div>
    </div>
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <article className="bg-white dark:bg-gray-900/70 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-soft">
          <div className="w-10 h-10 rounded-lg bg-brand-primary/20 text-brand-primary flex items-center justify-center">⌘</div>
          <h3 className="mt-4 font-semibold text-gray-900 dark:text-gray-100">Programming Languages</h3>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">JavaScript, TypeScript, Go</p>
        </article>
        <article className="bg-white dark:bg-gray-900/70 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-soft">
          <div className="w-10 h-10 rounded-lg bg-brand-primary/20 text-brand-primary flex items-center justify-center">⚙️</div>
          <h3 className="mt-4 font-semibold text-gray-900 dark:text-gray-100">Backend & Frameworks</h3>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">Node.js, Express, .NET, REST</p>
        </article>
        <article className="bg-white dark:bg-gray-900/70 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-soft">
          <div className="w-10 h-10 rounded-lg bg-brand-primary/20 text-brand-primary flex items-center justify-center">🗄️</div>
          <h3 className="mt-4 font-semibold text-gray-900 dark:text-gray-100">Databases</h3>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">MongoDB, MySQL, Mongoose</p>
        </article>
        <article className="bg-white dark:bg-gray-900/70 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-soft">
          <div className="w-10 h-10 rounded-lg bg-brand-primary/20 text-brand-primary flex items-center justify-center">🧠</div>
          <h3 className="mt-4 font-semibold text-gray-900 dark:text-gray-100">Software Engineering</h3>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">Distributed systems, concurrency, design</p>
        </article>
        <article className="bg-white dark:bg-gray-900/70 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-soft">
          <div className="w-10 h-10 rounded-lg bg-brand-primary/20 text-brand-primary flex items-center justify-center">🛠️</div>
          <h3 className="mt-4 font-semibold text-gray-900 dark:text-gray-100">Tools & DevOps</h3>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">Git, Docker, Kubernetes, Postman</p>
        </article>
        <article className="bg-white dark:bg-gray-900/70 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-soft">
          <div className="w-10 h-10 rounded-lg bg-brand-primary/20 text-brand-primary flex items-center justify-center">🔐</div>
          <h3 className="mt-4 font-semibold text-gray-900 dark:text-gray-100">Security & Docs</h3>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">Risk analysis, threat modeling, writing</p>
        </article>
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
           <div className="space-y-8">
             <div className="relative h-40 sm:h-48 rounded-xl overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521790797524-b2497295b8a0?q=60&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
               <div className="absolute inset-0 bg-black/40" />
               <div className="relative h-full flex items-center justify-center">
                 <div className="text-center">
                   <div className="text-2xl sm:text-3xl font-semibold text-white">Contact Us</div>
                 </div>
               </div>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
               <div className="card p-6 space-y-4">
                 <h3 className="text-lg font-semibold">Send a message</h3>
                 <form className="space-y-3">
                   <div className="text-left">
                     <label className="block text-sm mb-1">Full name</label>
                     <input className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-brand-primary" placeholder="Your full name" />
                   </div>
                   <div className="text-left">
                     <label className="block text-sm mb-1">Email</label>
                     <input className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-brand-primary" placeholder="Email address" />
                   </div>
                   <div className="text-left">
                     <label className="block text-sm mb-1">Message</label>
                     <textarea className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-brand-primary" placeholder="Tell me about your project or idea" rows="4" />
                   </div>
                   <button type="button" className="btn-primary w-full">Send message (demo)</button>
                 </form>
               </div>
               <div className="card p-6 space-y-6">
                 <div>
                   <div className="text-sm text-brand-primary font-semibold">Contact</div>
                   <p className="text-gray-600 dark:text-gray-400 mt-1">Get in touch using the details below.</p>
                 </div>
                 <div className="space-y-3">
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center">✉️</div>
                     <a className="text-brand-primary hover:opacity-90" href={`mailto:${links.email}`}>{links.email}</a>
                   </div>
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center">🔗</div>
                     <a className="text-brand-primary hover:opacity-90" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                   </div>
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center">💻</div>
                     <a className="text-brand-primary hover:opacity-90" href={links.github} target="_blank" rel="noreferrer">GitHub</a>
                   </div>
                 </div>
                 <div>
                   <div className="text-sm text-brand-primary font-semibold">Follow</div>
                   <div className="flex items-center gap-3 mt-2">
                     <a className="w-9 h-9 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center" href={links.linkedin} target="_blank" rel="noreferrer">in</a>
                     <a className="w-9 h-9 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center" href={links.github} target="_blank" rel="noreferrer">gh</a>
                   </div>
                 </div>
               </div>
             </div>
             <div className="rounded-xl overflow-hidden ring-1 ring-gray-200 dark:ring-gray-800">
               <iframe
                 title="map"
                 className="w-full h-64"
                 src="https://www.openstreetmap.org/export/embed.html?bbox=-0.14%2C51.49%2C-0.01%2C51.53&layer=mapnik"
               />
             </div>
           </div>
         </Section>
      </main>
      <Footer />
    </div>
  );
}

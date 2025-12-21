// src/components/ProjectCard.jsx
export default function ProjectCard({ project }) {
  const { title, type, tech, description, links } = project;
  return (
    <article className="group border rounded-xl overflow-hidden bg-white dark:bg-gray-950 transition transform hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-black/40">
      <div className="h-1 bg-brand-primary opacity-70" />
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold">{title}</h3>
          <span className="text-xs px-2 py-1 border rounded bg-gray-50 dark:bg-gray-900">{type}</span>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{description}</p>
        <ul className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <li key={t} className="text-xs px-2 py-1 rounded bg-brand-primary/10 text-brand-primary dark:bg-brand-primary/20 dark:text-brand-primary">
              {t}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          {links.demo && (
            <a
              href={links.demo}
              className="inline-flex items-center gap-1 text-brand-primary hover:opacity-90"
              target="_blank"
              rel="noreferrer"
            >
              <span>Live Demo</span>
              <span aria-hidden>↗</span>
            </a>
          )}
          {links.repo && (
            <a
              href={links.repo}
              className="inline-flex items-center gap-1 text-brand-primary hover:opacity-90"
              target="_blank"
              rel="noreferrer"
            >
              <span>Code</span>
              <span aria-hidden>↗</span>
            </a>
          )}
          {links.caseStudy && (
            <a
              href={links.caseStudy}
              className="inline-flex items-center gap-1 text-brand-primary hover:opacity-90"
              target="_blank"
              rel="noreferrer"
            >
              <span>Case Study</span>
              <span aria-hidden>↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

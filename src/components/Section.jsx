// src/components/Section.jsx
import { useEffect, useRef, useState } from "react";

export default function Section({ id, title, children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`py-20 md:py-24 scroll-mt-24 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      }`}
    >
      <header className="mb-8">
        <h2 className="section-title">
          {title}
        </h2>
      </header>

      <div className="space-y-6">{children}</div>
    </section>
  );
}

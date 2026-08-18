'use client';

import { useEffect, useRef } from 'react';

export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.12 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section id={id} ref={sectionRef} aria-labelledby={`${id}-heading`} className="section reveal">
      <div className="container">
        {title && <h2 id={`${id}-heading`} className="section-title">{title}</h2>}
        <div className="section-content">{children}</div>
      </div>
    </section>
  );
}

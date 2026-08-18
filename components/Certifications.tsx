'use client';

import { useEffect, useState, type KeyboardEvent as ReactKeyboardEvent } from 'react';
import Section from './Section';

type Certificate = {
  title: string;
  issuer: string;
  date?: string;
  src: string;
  alt: string;
};

const certificates: Certificate[] = [
  {
    title: 'AI Fluency: Framework & Foundations',
    issuer: 'Anthropic',
    src: '/certificates/AI Fluency Framework and Foundations.jpeg',
    alt: 'AI Fluency Framework and Foundations certificate',
  },
  {
    title: 'Claude 101',
    issuer: 'Anthropic',
    src: '/certificates/claude 101.jpeg',
    alt: 'Claude 101 certificate',
  },
  {
    title: 'Foundations of Project Management',
    issuer: 'Coursera',
    date: 'Jun 24, 2026',
    src: '/certificates/Foundations of Project Mangement.jpeg',
    alt: 'Foundations of Project Management certificate',
  },
  {
    title: 'Project Initiation: Starting a Successful Project',
    issuer: 'Coursera',
    date: 'Jul 20, 2026',
    src: '/certificates/Project Initiation.jpeg',
    alt: 'Project Initiation certificate',
  },
  {
    title: 'Project Planning: Putting It All Together',
    issuer: 'Coursera',
    date: 'Aug 11, 2026',
    src: '/certificates/project planning google cert 3_page-0001.jpg.jpeg',
    alt: 'Project Planning certificate',
  },
];

export default function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  useEffect(() => {
    if (!selectedCertificate) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedCertificate(null);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [selectedCertificate]);

  const handleCardKeyDown = (
    event: ReactKeyboardEvent<HTMLElement>,
    certificate: Certificate,
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setSelectedCertificate(certificate);
    }
  };

  return (
    <Section id="certifications" title="Certifications & Learning">
      <div className="certs-wrap">
        <div className="cert-grid" aria-label="Completed certificates and learning">
          {certificates.map((certificate) => (
            <article
              key={certificate.src}
              className="cert-card"
              tabIndex={0}
              role="button"
              aria-label={`Open ${certificate.title} certificate preview`}
              onClick={() => setSelectedCertificate(certificate)}
              onKeyDown={(event) => handleCardKeyDown(event, certificate)}
            >
              <div className="cert-image-frame">
                <img src={certificate.src} alt={certificate.alt} loading="lazy" />
              </div>

              <div className="cert-card-content">
                <div className="cert-card-header">
                  <p className="cert-card-platform">{certificate.issuer}</p>
                  <h3 className="cert-card-title">{certificate.title}</h3>
                </div>

                <div className="cert-card-meta">
                  <span>{certificate.issuer}</span>
                  {certificate.date ? <span>{certificate.date}</span> : null}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="muted certs-caption">
          A curated collection of verified learning milestones and professional certifications.
        </p>
      </div>

      {selectedCertificate ? (
        <div
          className="cert-lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-lightbox-title"
          onClick={() => setSelectedCertificate(null)}
        >
          <div className="cert-lightbox-panel" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="cert-lightbox-close"
              onClick={() => setSelectedCertificate(null)}
              aria-label={`Close ${selectedCertificate.title} certificate preview`}
            >
              ×
            </button>

            <div className="cert-lightbox-image-wrap">
              <img
                src={selectedCertificate.src}
                alt={selectedCertificate.alt}
                className="cert-lightbox-image"
              />
            </div>

            <div className="cert-lightbox-body">
              <h3 id="cert-lightbox-title" className="cert-lightbox-title">
                {selectedCertificate.title}
              </h3>
              <div className="cert-lightbox-meta">
                <span>{selectedCertificate.issuer}</span>
                {selectedCertificate.date ? <span>{selectedCertificate.date}</span> : null}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </Section>
  );
}

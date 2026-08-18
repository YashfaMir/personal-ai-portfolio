import Link from 'next/link';
import Section from './Section';
import { profile } from '../data/profile';

function ProjectCard({ p, featured = false }: { p: any; featured?: boolean }) {
  const isSkillPulse = p.title === 'SkillPulse AI';
  const isSocialConnect = p.title === 'Social Connect App';
  const isSodaPop = p.title === 'Soda Pop Product Design';

  return (
    <article className={`project-card ${featured ? 'project-card-featured' : ''}`} aria-labelledby={`project-${p.title}`}>
      {isSkillPulse ? (
        <div className="project-image">
          <img src="/projects/skillpulse/Employee Dashboard.png" alt="Employee Dashboard — SkillPulse AI" loading="lazy" />
        </div>
      ) : isSocialConnect ? (
        <div className="project-image">
          <img src="/social connect/welcome screen.png" alt="Welcome Screen — Social Connect App" loading="lazy" />
        </div>
      ) : isSodaPop ? (
        <div className="project-image">
          <img src="/sodapop/mystic pop.png" alt="Soda Pop concept board" loading="lazy" />
        </div>
      ) : (
        <div className="project-image" aria-hidden="true">
          <div className="device-mock">Project visual placeholder</div>
        </div>
      )}

      <div className="project-content">
        <div className="project-meta">{p.subtitle} • {p.year}</div>
        <h3 id={`project-${p.title}`} className="project-title">{p.title}</h3>
        <p className="project-description">{p.description}</p>

        <div className="project-tags" aria-label="Project tools">
          {p.tools.map((tool: string) => (
            <span key={`${p.title}-${tool}`} className="project-tag">{tool}</span>
          ))}
        </div>

        <div className="project-footer">
          <Link
            className="project-cta btn btn-ghost"
            href={isSkillPulse ? '/projects/skillpulse' : isSocialConnect ? '/projects/social-connect' : isSodaPop ? '/projects/soda-pop' : '#'}
          >
            Explore Case Study
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [first, second, third] = profile.projects;

  return (
    <Section id="projects" title="Selected Projects">
      <div className="projects-grid">
        {first && <ProjectCard p={first} featured />}
        {second && <ProjectCard p={second} />}
        {third && <ProjectCard p={third} />}
      </div>
    </Section>
  );
}

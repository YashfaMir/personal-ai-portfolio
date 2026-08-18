import Section from './Section';
import { profile } from '../data/profile';

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="experience-summary">
        <p className="muted">Professional and internship experience focused on UI/UX, research, and digital product thinking.</p>
        <p className="muted experience-summary-meta">{profile.university} • {profile.degree}</p>
      </div>

      <div className="experience-list">
        {profile.experience.map((entry, idx) => (
          <article key={`${entry.organization}-${entry.role}-${idx}`} className="experience-item">
            <div className="experience-header">
              <div>
                <p className="experience-kicker">{entry.organization}</p>
                <h3 className="experience-role">{entry.role}</h3>
                {entry.location ? <p className="experience-company">{entry.location}</p> : null}
              </div>
              <div className="experience-date">{entry.date}</div>
            </div>

            <ul className="experience-bullets">
              {entry.bullets.map((bullet, i) => (
                <li key={`${entry.role}-${i}`}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}

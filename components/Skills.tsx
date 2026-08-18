import Section from './Section';
import { profile } from '../data/profile';

const skillGroups = [
  {
    title: 'Design & UX',
    items: profile.primarySkills,
  },
  {
    title: 'Technical & Digital',
    items: profile.supportingSkills,
  },
  {
    title: 'Strengths',
    items: profile.softSkills,
  },
];

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="skills-layout">
        {skillGroups.map((group) => (
          <div key={group.title} className="skill-group">
            <h3 className="skill-group-title">{group.title}</h3>
            <div className="skills-grid" role="list" aria-label={group.title}>
              {group.items.map((skill) => (
                <div key={skill} className="skill" role="listitem">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

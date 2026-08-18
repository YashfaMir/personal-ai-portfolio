import Section from './Section';
import { profile } from '../data/profile';

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="about-grid">
        <div className="about-copy">
          <p className="section-lead">{profile.profileSummary}</p>
          <p>
            My work sits at the intersection of user-centered design, interface thinking, and
            polished front-end implementation. I enjoy turning research and ideas into digital
            experiences that feel intuitive, clear, and thoughtfully crafted.
          </p>
        </div>

        <div className="info-panel" aria-label="Profile details">
          <div className="info-item">
            <span className="info-label">Degree</span>
            <strong>{profile.degree}</strong>
          </div>
          <div className="info-item">
            <span className="info-label">University</span>
            <strong>{profile.university}</strong>
          </div>
          <div className="info-item">
            <span className="info-label">CGPA</span>
            <strong>{profile.cgpa}</strong>
          </div>
          <div className="info-item">
            <span className="info-label">Location</span>
            <strong>{profile.location}</strong>
          </div>
          <div className="info-item">
            <span className="info-label">Status</span>
            <strong>{profile.status}</strong>
          </div>
        </div>
      </div>
    </Section>
  );
}

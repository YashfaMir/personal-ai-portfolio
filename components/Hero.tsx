import Section from './Section';
import { profile } from '../data/profile';

export default function Hero() {
  return (
    <Section id="hero" title="">
      <div className="hero-viewport">
        <div className="hero-copy">
          <p className="eyebrow eyebrow-hero">UI/UX Designer • Frontend-focused • AI-curious</p>
          <h1 className="hero-title"><strong>{profile.name}</strong></h1>
          <p className="hero-lead">{profile.profileSummary}</p>

          <div className="hero-ctas">
            <a className="btn btn-primary" href="#projects">
              View selected work
            </a>
            <a className="btn btn-secondary" href={`mailto:${profile.email}`}>
              Contact me
            </a>
          </div>

          <ul className="hero-meta" aria-label="Profile overview">
            <li>{profile.location}</li>
            <li>{profile.degree}</li>
            <li>{profile.status}</li>
          </ul>
        </div>

        <div className="hero-visual" aria-label="Portfolio snapshot">
          <div className="hero-panel">
            <div className="hero-panel-head">
              <span className="hero-mini-label">Current focus</span>
              <span className="hero-pill">Design + Frontend</span>
            </div>

            <div className="hero-panel-grid">
              <div className="panel-tile">
                <span className="tile-label">Design</span>
                <strong>UI/UX</strong>
              </div>
              <div className="panel-tile">
                <span className="tile-label">Build</span>
                <strong>Responsive UX</strong>
              </div>
              <div className="panel-tile">
                <span className="tile-label">Research</span>
                <strong>User flows</strong>
              </div>
              <div className="panel-tile">
                <span className="tile-label">AI</span>
                <strong>Product thinking</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

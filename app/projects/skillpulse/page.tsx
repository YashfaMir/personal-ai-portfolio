import Link from 'next/link';

const dashboardScreens = [
  {
    src: '/projects/skillpulse/Employee Dashboard.png',
    alt: 'Employee Dashboard — SkillPulse AI',
    label: 'EMPLOYEE EXPERIENCE',
    description: 'The employee experience is designed to help users understand their current skill profile, identify strengths, and explore development opportunities in a clear and motivating way.',
  },
  {
    src: '/projects/skillpulse/Team Leader Dashboard.png',
    alt: 'Team Leader Dashboard — SkillPulse AI',
    label: 'TEAM LEADER EXPERIENCE',
    description: 'The team leader view supports visibility into team capability, project-fit alignment, and coaching opportunities across the workforce.',
  },
  {
    src: '/projects/skillpulse/HR DASHBOARD.png',
    alt: 'HR Dashboard — SkillPulse AI',
    label: 'HR EXPERIENCE',
    description: 'The HR experience supports workforce analysis, skill visibility, training compliance, and data-informed decision-making across the organization.',
  },
  {
    src: '/projects/skillpulse/Admin Dashboard.png',
    alt: 'Admin Dashboard — SkillPulse AI',
    label: 'ADMIN EXPERIENCE',
    description: 'The admin perspective focuses on system oversight, governance, and operational management for the wider platform experience.',
  },
];

export default function SkillPulseCaseStudyPage() {
  return (
    <div className="case-study-page">
      <div className="container case-study-shell">
        <div className="case-study-topbar">
          <Link href="/" className="back-link">← Back to Projects</Link>
        </div>

        <header className="case-study-header">
          <p className="case-study-kicker">UI/UX Case Study</p>
          <h1>SkillPulse AI</h1>
          <p className="case-study-subtitle">AI-powered workforce skill management and career development platform.</p>
        </header>

        <section className="case-study-hero">
          <div className="case-study-hero-copy">
            <p>
              SkillPulse AI is designed to help organizations maintain employee skill profiles, identify gaps, recommend learning, and support long-term workforce planning.
            </p>
            <div className="case-study-meta-row">
              <div>
                <span className="meta-label">My Role</span>
                <p>UI/UX Designer</p>
              </div>
              <div>
                <span className="meta-label">Tools</span>
                <p>Figma</p>
              </div>
              <div>
                <span className="meta-label">Timeline</span>
                <p>Placeholder</p>
              </div>
            </div>
          </div>

          <div className="case-study-hero-visual">
            <img src="/projects/skillpulse/Sign Up.png" alt="SkillPulse AI Sign Up Screen" />
          </div>
        </section>

        <section className="case-study-section editorial-section">
          <div className="section-index">01</div>
          <div className="section-content">
            <p className="eyebrow">Overview</p>
            <h2>Designing a clearer path from talent data to career growth.</h2>
            <p>
              SkillPulse AI focuses on helping organizations make workforce capability more visible and actionable. The product supports employees, team leaders, HR teams, and administrators with a shared understanding of skills, gaps, development, and strategic planning.
            </p>
          </div>
        </section>

        <section className="case-study-section editorial-section">
          <div className="section-index">02</div>
          <div className="section-content">
            <p className="eyebrow">Problem</p>
            <h2>Workforce talent information is often fragmented and difficult to act on.</h2>
            <p>
              Organizations need a clearer way to understand who has which skills, where gaps exist, and how teams can be better aligned with growth, training, and project needs. The challenge was to design a system that makes this information accessible without overwhelming users.
            </p>
          </div>
        </section>

        <section className="case-study-section editorial-section">
          <div className="section-index">03</div>
          <div className="section-content">
            <p className="eyebrow">Solution</p>
            <h2>A role-aware platform built around skill visibility and workforce development.</h2>
            <p>
              SkillPulse AI brings together onboarding, skill profiles, organizational dashboards, and training opportunities into one experience. The platform is designed to support employees, managers, HR, and administrators through different but connected views of the same workforce data.
            </p>
          </div>
        </section>

        <section className="case-study-section editorial-section">
          <div className="section-index">04</div>
          <div className="section-content">
            <p className="eyebrow">Key Features</p>
            <h2>Supporting workforce clarity across the employee lifecycle.</h2>
            <ul className="editorial-list">
              <li>Maintain employee skill profiles</li>
              <li>Identify skill gaps</li>
              <li>Recommend training</li>
              <li>Optimize project teams</li>
              <li>Analyze workforce data</li>
              <li>Support career and succession planning</li>
            </ul>
          </div>
        </section>

        <section className="case-study-feature">
          <div className="feature-caption">
            <p className="eyebrow">01 — Sign Up</p>
            <h2>Entry point for new users.</h2>
          </div>
          <div className="feature-visual full-bleed">
            <img src="/projects/skillpulse/Sign Up.png" alt="SkillPulse AI Sign Up Screen" />
          </div>
          <p className="feature-note">
            This is the entry point for new users. It introduces the onboarding and access experience for the platform.
          </p>
        </section>

        <section className="case-study-feature">
          <div className="feature-caption">
            <p className="eyebrow">02 — Login</p>
            <h2>Secure access and role-based entry.</h2>
          </div>
          <div className="feature-visual full-bleed">
            <img src="/projects/skillpulse/Login.png" alt="SkillPulse AI Login Screen" />
          </div>
          <p className="feature-note">
            The login experience supports secure access and gets users into the correct role-based journey depending on their organizational context.
          </p>
        </section>

        <section className="case-study-feature">
          <div className="feature-caption">
            <p className="eyebrow">03 — Landing Page</p>
            <h2>A clear introduction to the platform and its value.</h2>
          </div>
          <div className="feature-visual full-bleed">
            <img src="/projects/skillpulse/Landing Page.png" alt="SkillPulse AI Landing Page" />
          </div>
          <p className="feature-note">
            SkillPulse AI helps organizations understand workforce capability, uncover gaps, and guide employees toward growth, development, and better team alignment.
          </p>
        </section>

        <section className="case-study-feature">
          <div className="feature-caption">
            <p className="eyebrow">04 — Product Overview</p>
            <h2>SkillPulse AI is an AI-powered workforce skill management and career development platform.</h2>
          </div>
          <p className="feature-note">
            It helps organizations maintain employee skill profiles, identify skill gaps, recommend training, optimize project teams, analyze workforce data, and support career and succession planning.
          </p>
        </section>

        <section className="case-study-feature dashboard-section">
          <div className="feature-caption">
            <p className="eyebrow">05 — Role-Based Dashboards</p>
            <h2>Each role sees a tailored experience built around different decisions and responsibilities.</h2>
          </div>
        </section>

        <section className="case-study-feature dashboard-feature">
          <div className="dashboard-label">EMPLOYEE EXPERIENCE</div>
          <div className="feature-visual full-bleed">
            <img src="/projects/skillpulse/Employee Dashboard.png" alt="Employee Dashboard — SkillPulse AI" />
          </div>
          <p className="feature-note">
            The employee experience is designed to help users understand their strengths, identify skill gaps, and explore growth opportunities in a motivating and understandable way.
          </p>
        </section>

        <section className="case-study-feature dashboard-feature">
          <div className="dashboard-label">TEAM LEADER EXPERIENCE</div>
          <div className="feature-visual full-bleed">
            <img src="/projects/skillpulse/Team Leader Dashboard.png" alt="Team Leader Dashboard — SkillPulse AI" />
          </div>
          <p className="feature-note">
            The team leader perspective supports visibility into team capability, project fit, and coaching opportunities so managers can align individuals with the right work and development path.
          </p>
        </section>

        <section className="case-study-feature dashboard-feature">
          <div className="dashboard-label">HR EXPERIENCE</div>
          <div className="feature-visual full-bleed">
            <img src="/projects/skillpulse/HR DASHBOARD.png" alt="HR Dashboard — SkillPulse AI" />
          </div>
          <p className="feature-note">
            The HR experience supports workforce analysis, training compliance, skill visibility, and decision-making by surfacing trends and operational insight across the organization.
          </p>
        </section>

        <section className="case-study-feature dashboard-feature">
          <div className="dashboard-label">ADMIN EXPERIENCE</div>
          <div className="feature-visual full-bleed">
            <img src="/projects/skillpulse/Admin Dashboard.png" alt="Admin Dashboard — SkillPulse AI" />
          </div>
          <p className="feature-note">
            The admin experience focuses on governance, operational oversight, and system management to keep the platform aligned with organizational needs.
          </p>
        </section>

        <section className="case-study-section editorial-section">
          <div className="section-index">09</div>
          <div className="section-content">
            <p className="eyebrow">Design Decisions</p>
            <h2>Clarity, role awareness, and a consistent information hierarchy.</h2>
            <p>
              Placeholder: explain the design principles and rationale behind the product structure, dashboard organization, and user experience decisions.
            </p>
          </div>
        </section>

        <section className="case-study-section editorial-section">
          <div className="section-index">10</div>
          <div className="section-content">
            <p className="eyebrow">Final Outcome</p>
            <h2>SkillPulse AI presents a modern, role-aware workforce platform built for clarity and action.</h2>
            <p>
              Placeholder: summarize the final product direction and the value the experience aims to create for organizations and employees.
            </p>
          </div>
        </section>

        <div className="case-study-end">
          <Link href="/" className="case-study-back">Back to Projects</Link>
        </div>
      </div>
    </div>
  );
}

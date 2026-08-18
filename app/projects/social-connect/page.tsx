import Link from 'next/link';

const storyScreens = [
  {
    index: '01',
    name: 'WELCOME',
    src: '/social connect/welcome screen.png',
    alt: 'Welcome Screen — Social Connect App',
    description: 'The welcome experience introduces the application and provides a simple entry point for users.',
  },
  {
    index: '02',
    name: 'SIGN UP',
    src: '/social connect/sign up (3).png',
    alt: 'Sign Up Screen — Social Connect App',
    description: 'New users can create an account and enter the Social Connect experience through a clean onboarding flow.',
  },
  {
    index: '03',
    name: 'LOGIN',
    src: '/social connect/login page.png',
    alt: 'Login Screen — Social Connect App',
    description: 'The returning-user access experience is kept straightforward and focused on quick, reliable access.',
  },
  {
    index: '04',
    name: 'HOME',
    src: '/social connect/Home.png',
    alt: 'Home Screen — Social Connect App',
    description: 'This is the central area where users can access social content and navigate through the main experience.',
  },
  {
    index: '05',
    name: 'PROFILE',
    src: '/social connect/Profile.png',
    alt: 'Profile Screen — Social Connect App',
    description: 'Users can view and manage their personal profile and social identity through a clear, engaging layout.',
  },
  {
    index: '06',
    name: 'MESSAGES',
    src: '/social connect/Message 1.png',
    alt: 'Messages Screen — Social Connect App',
    description: 'This screen provides access to conversations and helps users manage communication in one place.',
  },
  {
    index: '07',
    name: 'CHAT ROOM',
    src: '/social connect/Chat room (1).png',
    alt: 'Chat Room Screen — Social Connect App',
    description: 'The focused conversation experience supports direct communication and keeps the interaction centered on the message thread.',
  },
  {
    index: '08',
    name: 'NOTIFICATIONS',
    src: '/social connect/Notification.png',
    alt: 'Notifications Screen — Social Connect App',
    description: 'Users can stay informed about relevant social activity, interactions, and updates through a clear alert experience.',
  },
];

export default function SocialConnectCaseStudyPage() {
  return (
    <div className="social-case-study-page">
      <div className="container social-case-study-shell">
        <div className="social-case-study-topbar">
          <Link href="/" className="back-link">← Back to Projects</Link>
        </div>

        <header className="social-case-study-header">
          <p className="case-study-kicker">UI/UX Case Study</p>
          <h1>Social Connect App</h1>
          <p className="case-study-subtitle">Minimal Social Networking Experience</p>
        </header>

        <section className="social-case-study-hero">
          <div className="social-case-study-copy">
            <p>
              Social Connect is designed to make connecting, communicating, and managing social interactions simple and intuitive.
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

          <div className="social-case-study-hero-visual">
            <img src="/social connect/welcome screen.png" alt="Welcome Screen — Social Connect App" />
          </div>
        </section>

        <section className="social-case-study-section editorial-section">
          <div className="section-index">01</div>
          <div className="section-content">
            <p className="eyebrow">Project Overview</p>
            <h2>Designing a simple, social-first experience for connection and communication.</h2>
            <p>
              Social Connect is a minimal social networking application created to help people connect with each other, communicate, share content, discover people, and manage their social interactions through a simple and intuitive interface.
            </p>
          </div>
        </section>

        <section className="social-case-study-section editorial-section">
          <div className="section-index">02</div>
          <div className="section-content">
            <p className="eyebrow">Design Goal</p>
            <h2>Simple navigation, clear hierarchy, and social interactions that feel effortless.</h2>
            <p>
              The design focuses on simple navigation, easy communication, clear content hierarchy, intuitive social interactions, consistent visual language, and a smooth overall user experience.
            </p>
          </div>
        </section>

        <section className="social-case-study-section editorial-section">
          <div className="section-index">03</div>
          <div className="section-content">
            <p className="eyebrow">User Journey</p>
            <h2>A complete social-product journey from onboarding to everyday engagement.</h2>
            <p>
              The experience moves from welcome and account access into core social touchpoints such as home, profile, messages, chat, and notifications.
            </p>
          </div>
        </section>

        {storyScreens.map((screen) => (
          <section key={screen.index} className="social-case-study-feature">
            <div className="feature-caption">
              <p className="eyebrow">{screen.index} — {screen.name}</p>
              <h2>{screen.name}</h2>
            </div>
            <p className="feature-note">{screen.description}</p>
            <div className="feature-visual full-bleed">
              <img src={screen.src} alt={screen.alt} />
            </div>
          </section>
        ))}

        <section className="social-case-study-section editorial-section">
          <div className="section-index">09</div>
          <div className="section-content">
            <p className="eyebrow">Design System / UI Decisions</p>
            <h2>Consistency, hierarchy, and clean interaction patterns.</h2>
            <p>
              The interface reflects a clear hierarchy through typography, spacing, consistent component language, and straightforward navigation patterns. Buttons, labels, and content blocks appear intentionally organized to support easy social interaction and a cohesive overall experience across screens.
            </p>
          </div>
        </section>

        <section className="social-case-study-section editorial-section">
          <div className="section-index">10</div>
          <div className="section-content">
            <p className="eyebrow">Responsive / Component Thinking</p>
            <h2>Structured to stay coherent across the core product journey.</h2>
            <p>
              The visual system is designed to maintain consistency across the experience, from onboarding through communication and profile management, creating a coherent social-product flow across core app screens.
            </p>
          </div>
        </section>

        <section className="social-case-study-closing">
          <p className="eyebrow">11 — Final Outcome</p>
          <h2>Social Connect demonstrates a complete social app experience built around clarity, connection, and communication.</h2>
          <p>
            The project presents a polished, user-centered social experience from onboarding and authentication through everyday interactions, profile management, and communication flows.
          </p>
          <Link href="/" className="case-study-back">Back to Projects</Link>
        </section>
      </div>
    </div>
  );
}

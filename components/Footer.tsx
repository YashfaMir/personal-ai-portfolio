import { profile } from '../data/profile';

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#projects">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}

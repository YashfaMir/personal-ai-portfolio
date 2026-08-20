
import Section from './Section';
import { profile } from '../data/profile';

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="contact-layout">
        <div className="contact-copy">
          <p className="eyebrow">Let&apos;s connect</p>
          <h3>Open to UI/UX, product design, and frontend opportunities.</h3>
          <p className="muted">
            I&apos;m interested in projects where thoughtful design, user clarity, and polished digital
            experiences matter. If you&apos;re building a product, internship experience, or creative
            collaboration, I&apos;d be glad to connect.
          </p>

          <div className="contact-direct">
            <span>Email</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
        </div>

        <form
          className="contact-form"
          action="https://formspree.io/f/myeglvvo"
          method="POST"
          aria-label="Contact form"
        >
          <label>
            <span>Name</span>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              aria-label="Your name"
              required
            />
          </label>

          <label>
            <span>Email</span>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              aria-label="Your email"
              required
            />
          </label>

          <label>
            <span>Message</span>
            <textarea
              name="message"
              placeholder="Tell me a bit about your project or opportunity"
              rows={5}
              aria-label="Your message"
              required
            />
          </label>

          <div className="contact-cta">
            <button type="submit" className="btn btn-primary">
              Send message
            </button>

            <a className="btn btn-secondary" href={`mailto:${profile.email}`}>
              Email directly
            </a>
          </div>
        </form>
      </div>
    </Section>
  );
}

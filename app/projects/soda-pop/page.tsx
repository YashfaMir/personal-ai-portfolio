import Link from 'next/link';

const creativeFlow = [
  'CHARACTER',
  'EMOTION',
  'COLOR',
  'IDENTITY',
  'PACKAGING',
];

const variantNotes = [
  {
    name: 'Variant 01',
    description:
      'This variant uses a vivid pink palette and a playful character-led composition, with bold, rounded packaging cues and a highly recognizable visual personality.',
  },
  {
    name: 'Variant 02',
    description:
      'This direction leans into a cool pastel palette and a more relaxed personality, using a softer visual rhythm while still keeping the concept distinctly branded and collectible.',
  },
  {
    name: 'Variant 03',
    description:
      'A brighter, more energetic variant uses strong contrast, expressive illustration, and a punchy packaging layout to emphasize personality and emotional energy.',
  },
];

export default function SodaPopCaseStudyPage() {
  return (
    <div className="soda-case-study-page">
      <div className="container soda-case-study-shell">
        <div className="soda-case-study-topbar">
          <Link href="/" className="back-link">← Back to Projects</Link>
        </div>

        <header className="soda-case-study-header">
          <p className="case-study-kicker">01 — HERO</p>
          <h1>SODA POP</h1>
          <p className="case-study-subtitle">Character-Driven Beverage Branding</p>
        </header>

        <section className="soda-case-study-hero">
          <div className="soda-case-study-copy">
            <p>
              Soda Pop explores how character, emotion and visual identity can come together to create a memorable beverage brand. Each soda is designed around a distinct personality and mood, translating that emotion into color, typography and packaging.
            </p>
            <div className="case-study-meta-row">
              <div>
                <span className="meta-label">Category</span>
                <p>Product Branding • Visual Identity • Packaging Design</p>
              </div>
              <div>
                <span className="meta-label">Focus</span>
                <p>Character-Driven Identity</p>
              </div>
              <div>
                <span className="meta-label">Approach</span>
                <p>Emotion-led Packaging</p>
              </div>
            </div>
          </div>

          <div className="soda-case-study-hero-visual">
            <img
              src="/sodapop/mystic%20pop.png"
              alt="Soda Pop concept board showing multiple character-driven beverage packaging directions"
            />
          </div>
        </section>

        <section className="soda-case-study-section editorial-section">
          <div className="section-index">02</div>
          <div className="section-content">
            <p className="eyebrow">The Concept</p>
            <h2>Instead of one generic soda, the concept explores a collection with distinct personalities.</h2>
            <p>
              Soda Pop is built on the idea that every variant should feel like a different mood or personality, expressed through a distinct combination of visual language, color direction, typography and packaging identity. Rather than creating a single static product, the project explores a fully recognizable brand family where each drink has its own energy while still feeling connected to the broader Soda Pop world.
            </p>
            <p>
              Each variant includes a different emotional tone and character-driven expression, resulting in a collection that feels cohesive, expressive and memorable. The goal was to make each soda feel individually distinct while maintaining clear continuity across the broader brand system.
            </p>
          </div>
        </section>

        <section className="soda-case-study-section editorial-section">
          <div className="section-index">03</div>
          <div className="section-content">
            <p className="eyebrow">The Creative Idea</p>
            <h2>CHARACTER → EMOTION → COLOR → IDENTITY → PACKAGING</h2>
            <p>
              The character or personality becomes the foundation of the visual direction. From there, the emotional tone influences the color palette, typography, composition and overall mood. That visual language is then translated into the product packaging so the emotional identity becomes tangible and physically recognizable on shelf.
            </p>
            <div className="soda-creative-flow" aria-label="Creative identity flow">
              {creativeFlow.map((step, index) => (
                <>
                  <span key={`${step}-label`} className="soda-flow-step">{step}</span>
                  {index < creativeFlow.length - 1 && <span key={`${step}-arrow`} className="soda-flow-arrow" aria-hidden="true">→</span>}
                </>
              ))}
            </div>
          </div>
        </section>

        <section className="soda-case-study-section editorial-section">
          <div className="section-index">04</div>
          <div className="section-content">
            <p className="eyebrow">Emotion-Driven Variants</p>
            <h2>A brand collection built from multiple personalities and moods.</h2>
            <p>
              The original Soda Pop artwork exists as a single comprehensive board, where several branded variants appear together in one composition. This allows the collection to be viewed as a whole: each soda carries its own visual attitude while also reinforcing the same commercial family.
            </p>

            <div className="soda-variant-visual">
              <img
                src="/sodapop/mystic%20pop.png"
                alt="Soda Pop composite packaging concept showing multiple beverage variants"
              />
            </div>

            <div className="soda-variant-list">
              {variantNotes.map((variant) => (
                <div key={variant.name} className="soda-variant-item">
                  <p className="meta-label">{variant.name}</p>
                  <p>{variant.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="soda-case-study-section editorial-section">
          <div className="section-index">05</div>
          <div className="section-content">
            <p className="eyebrow">Visual Identity</p>
            <h2>A bright, character-led system designed around clarity, personality and contrast.</h2>
            <p>
              The visual identity is built through a bold combination of saturated color palettes, expressive character illustrations, oversized typography and strong packaging hierarchy. Every variant uses a different color direction, but the overall visual system remains tightly connected through consistent shape language, rounded forms, playful proportion and expressive branding.
            </p>
            <p>
              The labels use strong contrast to keep the product readable and memorable, while the character illustration becomes a key anchor for emotional recognition. This helps each variant feel instantly different without breaking away from the Soda Pop family.
            </p>
            <ul className="editorial-list">
              <li>High-contrast color palettes that communicate mood quickly</li>
              <li>Character-driven artwork that gives each variant its own expression</li>
              <li>Typography used as a clear brand signal and emotional amplifier</li>
              <li>Packaging composition designed to be bold, readable and collectible</li>
              <li>Consistent brand language across variants to preserve family recognition</li>
            </ul>
          </div>
        </section>

        <section className="soda-case-study-section editorial-section">
          <div className="section-index">06</div>
          <div className="section-content">
            <p className="eyebrow">Packaging Design</p>
            <h2>The packaging turns personality into a physical product identity.</h2>
            <p>
              The packaging concept takes the emotional and visual direction of each soda and translates it into a shelf-ready product language. The designs feel characterful and polished, with labels that communicate mood quickly through facial expression, color and branding cues.
            </p>
            <p>
              The overall packaging composition is intentionally clean but expressive: each design prioritizes the character and emotional tone while keeping the brand recognizable from a distance. This creates a product story that feels both individual and cohesive.
            </p>
            <div className="soda-variant-visual soda-packaging-visual">
              <img
                src="/sodapop/mystic%20pop.png"
                alt="Soda Pop packaging concept details showing the brand family and label system"
              />
            </div>
          </div>
        </section>

        <section className="soda-case-study-section editorial-section">
          <div className="section-index">07</div>
          <div className="section-content">
            <p className="eyebrow">Brand System</p>
            <h2>Shared identity, distinct personality, unified collection.</h2>
            <p>
              The Soda Pop brand works because each variant feels unique while still belonging to the same visual family. The shared brand cues create recognition, while the individual character expressions introduce personality and emotional differentiation.
            </p>
            <div className="soda-brand-system" aria-label="Brand system concept statement">
              <span>Shared brand identity</span>
              <span className="soda-brand-plus">+</span>
              <span>Individual character personality</span>
              <span className="soda-brand-equals">=</span>
              <span>Cohesive Soda Pop collection</span>
            </div>
          </div>
        </section>

        <section className="soda-case-study-closing">
          <p className="eyebrow">08 — Design Reflection</p>
          <h2>This project demonstrates how character development, emotion-led color, typography and packaging can shape a memorable beverage identity.</h2>
          <p>
            Soda Pop shows the ability to transform a creative concept into a cohesive visual identity through personality-driven design, color exploration and packaging storytelling. The result is a recognizable brand system that feels playful, expressive and commercially strong.
          </p>
          <Link href="/" className="case-study-back">Back to Projects</Link>
        </section>
      </div>
    </div>
  );
}

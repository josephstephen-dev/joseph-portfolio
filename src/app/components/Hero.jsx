const SECTION_LINKS = [
  ["proof", "Quiet proof points"],
  ["journey", "Evolution of Craft"],
  ["about", "About"],
  ["projects", "Selected work"],
  ["process", "The Joseph Method"],
  ["contact", "Contact"],
];

export default function Hero() {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-title">
      <div className="hero-container">
        <p className="hero-eyebrow">SOFTWARE ENGINEER</p>

        <h1 id="hero-title" className="hero-title">
          Technology changes. Thoughtful engineering endures.
        </h1>

        <div className="hero-description">
          <p>Frameworks evolve.</p>
          <p>Products mature.</p>
          <p>Principles remain.</p>
          <p>I engineer software guided by clarity, maintainability, and long-term thinking.</p>
        </div>

        <div className="hero-actions">
          <a className="hero-primary-btn" href="#projects">
            Explore Selected Work
          </a>
          <a className="hero-secondary-btn" href="#contact">
            Start a Conversation
          </a>
        </div>
      </div>

      <nav className="section-indicator" aria-label="Page sections">
        {SECTION_LINKS.map(([id, label]) => (
          <a key={id} href={`#${id}`} aria-label={label} />
        ))}
      </nav>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
  const sections = [
  "hero",
  "proof",
  "journey",
  "projects",
  "metrics",
  "process",
  "testimonials",
  "contact",
  ];

  const handleScroll = () => {
    const scrollPosition =
      window.scrollY + window.innerHeight / 2;

    sections.forEach((id, index) => {
      const section = document.getElementById(id);

      if (!section) return;

      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;

      if (
        scrollPosition >= top &&
        scrollPosition < bottom
      ) {
        setActiveSection(index);
      }
    });
  };

  window.addEventListener("scroll", handleScroll);

  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-container">

        <div className="hero-eyebrow">
          ✦ PREMIUM ECOMMERCE ENGINEERING
        </div>

        <h1 className="hero-title">
          I build premium
          <br />
          ecommerce experiences.
        </h1>

        <p className="hero-description">
          Combining engineering precision with creative product thinking
          to create fast, conversion-focused digital experiences that help
          brands grow online.
        </p>

        <div className="hero-actions">
  <button className="hero-primary-btn">
    View Selected Work
  </button>

  <button className="hero-secondary-btn">
    Start a Conversation
  </button>
</div>

      </div>


      <div className="section-indicator">
  {[
    "hero",
    "proof",
    "journey",
    "skills",
    "process",
    "projects",
    "testimonials",
    "contact",
  ].map((id, index) => (
    <span
      key={id}
      className={activeSection === index ? "active" : ""}
      onClick={() =>
        document
          .getElementById(id)
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
      }
    />
  ))}
</div>

    </section>
  );
}
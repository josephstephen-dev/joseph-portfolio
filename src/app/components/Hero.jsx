"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [activeSection, setActiveSection] = useState(0);

  const SECTION_IDS = [
    "hero",
    "proof",
    "journey",
    "projects",
    "metrics",
    "process",
    "testimonials",
    "contact",
  ];

  useEffect(() => {
    const sections = SECTION_IDS.map((id) =>
      document.getElementById(id)
    );

    let rafId = null;
    let ticking = false;

   const computeVisibleIndex = () => {
  const viewportCenter = window.innerHeight / 2;

  let closestIndex = 0;
  let closestDistance = Infinity;

  sections.forEach((section, index) => {
    if (!section) {
      console.log("Missing section:", SECTION_IDS[index]);
      return;
    }

    const rect = section.getBoundingClientRect();
    const sectionCenter = rect.top + rect.height / 2;

    const distance = Math.abs(
      viewportCenter - sectionCenter
    );

    console.log(
      SECTION_IDS[index],
      "top:",
      rect.top,
      "height:",
      rect.height,
      "distance:",
      distance
    );

    if (distance < closestDistance) {
      closestDistance = distance;
      closestIndex = index;
    }
  });

  console.log("ACTIVE:", closestIndex);

  setActiveSection(closestIndex);
};

    const onScroll = () => {
      if (ticking) return;

      ticking = true;

      rafId = requestAnimationFrame(() => {
        computeVisibleIndex();
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    window.addEventListener("resize", onScroll);

    computeVisibleIndex();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);

      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-eyebrow">
          ✦ ENGINEERING PRODUCTS PEOPLE USE
        </div>

        <h1 className="hero-title">
          I build premium
          <br />
          ecommerce experiences.
        </h1>

        <p className="hero-description">
          Fast, conversion-focused digital experiences that help
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
        {SECTION_IDS.map((id, index) => (
          <span
            key={id}
            className={
              activeSection === index ? "active" : ""
            }
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
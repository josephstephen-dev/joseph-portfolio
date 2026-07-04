import { BookOpen, Compass, Lightbulb, RefreshCw, Users } from "lucide-react";

const PRINCIPLES = [
  {
    title: "Understand the real problem",
    paragraphs: [
      "I don't begin with features or frameworks.",
      "I begin by understanding the people, the environment, and the challenge beneath the request.",
      "Good software starts with the right question.",
    ],
    icon: Lightbulb,
  },
  {
    title: "Design for context",
    paragraphs: [
      "Every community has different needs.",
      "Instead of copying existing products, I design solutions that fit the people and environments they'll actually serve.",
    ],
    icon: Compass,
  },
  {
    title: "Build around people",
    paragraphs: [
      "Technology is a tool.",
      "People are the purpose.",
      "Every engineering decision should make someone's work, learning, or daily life meaningfully easier.",
    ],
    icon: Users,
  },
  {
    title: "Build for understanding",
    paragraphs: [
      "Readable systems.",
      "Clear interfaces.",
      "Thoughtful architecture.",
      "Software should be understandable today and maintainable tomorrow.",
    ],
    icon: BookOpen,
  },
  {
    title: "Never stop evolving",
    paragraphs: [
      "Every project teaches something.",
      "Every solution expands how I think.",
      "I treat engineering as a discipline of continuous learning rather than a destination.",
    ],
    icon: RefreshCw,
  },
];

export default function Process() {
  return (
    <section id="process" className="process-section" aria-labelledby="process-title">
      <header className="section-header process-header">
        <p className="section-eyebrow">HOW I WORK</p>
        <h2 id="process-title">The Joseph Method</h2>
        <div className="section-intro process-intro">
          <p>Every project teaches something.</p>
          <p>Over time, those lessons become a way of thinking.</p>
          <p>The Joseph Method isn&apos;t a framework I set out to invent.</p>
          <p>It&apos;s the pattern that naturally emerged across the problems I&apos;ve solved, the systems I&apos;ve built, and the principles that continue to guide my engineering decisions.</p>
        </div>
      </header>

      <div className="process-cards">
        <div className="process-line" aria-hidden="true" />
        {PRINCIPLES.map(({ title, paragraphs, icon: Icon }, index) => (
          <article className="process-card" key={title}>
            <span className="process-number">{String(index + 1).padStart(2, "0")}</span>
            <Icon className="process-icon" size={34} aria-hidden="true" />
            <h3>{title}</h3>
            <div className="process-copy">
              {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

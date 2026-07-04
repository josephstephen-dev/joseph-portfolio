import { BookOpen, Code2, Compass, Lightbulb, Target } from "lucide-react";

const JOURNEY = [
  {
    title: "Curiosity",
    description:
      "Fascinated by computers long before I owned one. Curiosity became the foundation of everything that followed.",
    icon: Lightbulb,
  },
  {
    title: "Commitment",
    description:
      "I chose work that gave me time to learn, turning quiet hours into opportunities to study, build, and improve.",
    icon: Target,
  },
  {
    title: "Practice",
    description:
      "Small websites, experiments, and projects became my classroom. Every build strengthened both my skills and my thinking.",
    icon: Code2,
  },
  {
    title: "Purpose",
    description:
      "Teaching, writing, and building showed me that engineering isn't just about software—it's about creating systems that help people succeed.",
    icon: BookOpen,
  },
  {
    title: "Direction",
    description:
      "Today I continue exploring software with the same curiosity that started the journey, guided by principles that will outlast today's technology.",
    icon: Compass,
  },
];

export default function Journey() {
  return (
    <section id="journey" className="journey-section" aria-labelledby="journey-title">
      <header className="section-header centered-header journey-header">
        <p className="section-eyebrow">THE JOURNEY</p>
        <h2 id="journey-title">Evolution of Craft</h2>
        <p className="section-intro">
          Every stage changed more than what I could build—it changed how I think about engineering.
        </p>
      </header>

      <div className="timeline">
        <div className="timeline-line" aria-hidden="true" />
        {JOURNEY.map(({ title, description, icon: Icon }, index) => (
          <article className={`timeline-item ${index % 2 ? "right" : "left"}`} key={title}>
            <div className="timeline-card">
              <span className="timeline-number">{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
            <div className="timeline-icon" aria-hidden="true">
              <Icon size={27} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

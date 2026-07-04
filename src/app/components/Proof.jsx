import { Award, MoveUpRight, Users, Zap } from "lucide-react";

const PROOF_POINTS = [
  {
    value: "340%",
    title: "Average conversion lift",
    detail: "Across redesigned checkout flows",
    icon: MoveUpRight,
  },
  {
    value: "2.4M+",
    title: "Users served",
    detail: "Through scalable platforms",
    icon: Users,
  },
  {
    value: "<1.2s",
    title: "Page load time",
    detail: "Core Web Vitals",
    icon: Zap,
  },
  {
    value: "5+",
    title: "Industry awards",
    detail: "Recognition for craft",
    icon: Award,
  },
];

export default function Proof() {
  return (
    <section id="proof" className="proof-section" aria-labelledby="proof-title">
      <div className="proof-container">
        <header className="section-header proof-header">
          <p className="section-eyebrow">Here&apos;s what matters</p>
          <h2 id="proof-title">Quiet proof points</h2>
        </header>

        <div className="proof-layout">
          {PROOF_POINTS.map(({ value, title, detail, icon: Icon }, index) => (
            <article className={`proof-card proof-card-${index + 1}`} key={title}>
              <Icon className="proof-icon" aria-hidden="true" />
              <p className="proof-value">{value}</p>
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import {
  MoveUpRight,
  Users,
  Zap,
  Award
} from "lucide-react";

export default function Proof() {
  return (
    <section
  id="proof"
  className="proof-section"
>

  <div className="proof-container">

    <div className="proof-header">

      <span className="proof-eyebrow">
        TRUSTED BY AMBITIOUS BRANDS
      </span>

      <h2 className="proof-title">
        Quiet proof points
      </h2>

      <p className="proof-description">
        Results speak louder than promises.
        <br />
        Here&apos;s what matters.
      </p>

    </div>

      <div className="proof-layout">

        {/* Card 1 */}

        <div className="proof-card proof-card-1 proof-large">

          <div className="proof-icon">
            <MoveUpRight size={26} strokeWidth={1.25} />
          </div>

          <h3>340%</h3>

          <h4>Average conversion lift</h4>

          <p>Across redesigned checkout flows</p>

        </div>

        {/* Card 2 */}

        <div className="proof-card proof-card-2">

          <div className="proof-icon">
            <Users size={30} strokeWidth={1.5} />
          </div>

          <h3>2.4M+</h3>

          <h4>Active users served</h4>

          <p className="descript-card">Through scalable platforms</p>

        </div>

        {/* Card 3 */}

        <div className="proof-card proof-card-3">

          <div className="proof-icon">
            <Zap size={28} strokeWidth={1.5} />
          </div>

          <h3>&lt;1.2s</h3>

          <h4>Page load time</h4>

          <p>Core Web Vitals</p>

        </div>

        {/* Card 4 */}

        <div className="proof-card proof-card-4">

          <div className="proof-icon">
            <Award size={28} strokeWidth={1.5} />
          </div>

          <h3>5+</h3>

          <h4>Industry awards</h4>

          <p>Recognition for craft</p>

        </div>

      </div>
    </div>

    </section>
  );
}
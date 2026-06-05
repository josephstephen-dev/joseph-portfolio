import {
  DollarSign,
  ShoppingCart,
  Users,
  Zap,
  Target,
  TrendingUp
} from "lucide-react";
export default function Metrics() {
  return (
    <section id="metrics" className="metrics-section">

      <div className="metrics-header">

        <span className="metrics-eyebrow">
          MEASURABLE IMPACT
        </span>

        <h2 className="metrics-title">
          Numbers that matter
        </h2>

        <p className="metrics-description">
          Every line of code is measured by business
          impact, not just technical excellence.
        </p>

      </div>

      <div className="metrics-grid">


        <div className="metric-card">
          <span className="metric-badge">+340%</span>
          <span className="metric-icon">
    <DollarSign className="blue-icon" />
  </span>
          <h3>$12.4M</h3>
          <p>Total Revenue Impact</p>
          <small>Generated across client projects</small>
        </div>



        <div className="metric-card">
  <span className="metric-badge">+12%</span>
  <span className="metric-icon">
    <ShoppingCart className="blue-icon" />
  </span>
          <h3>28%</h3>
          <p>Average Cart Conversion</p>
          <small>Above industry standard</small>
        </div>



        <div className="metric-card">
  <span className="metric-badge">+180%</span>
  <span className="metric-icon">
    <Users className="purple-icon" />
  </span>
          <h3>2.4M</h3>
          <p>Active Users</p>
          <small>Across platforms built</small>
        </div>



        <div className="metric-card">
  <span className="metric-badge">+65%</span>

  <span className="metric-icon">
    <Zap className="orange-icon" />
  </span>
          <h3>1.1s</h3>
          <p>Average Load Time</p>
          <small>Performance optimized</small>
        </div>



      </div>

      <div className="competencies-board">

        <h3 className="competencies-title">
  <span className="competencies-icon"><Target size={30}/></span>
  Core Competencies
</h3>

        <div className="skill-row">
          <span>Conversion Rate Optimization</span>
          <span>95%</span>
        </div>

        <div className="skill-track">
          <div className="skill-fill skill-95"></div>
        </div>

        <div className="skill-row">
          <span>Performance Engineering</span>
          <span>90%</span>
        </div>

        <div className="skill-track">
          <div className="skill-fill skill-90"></div>
        </div>

        <div className="skill-row">
          <span>User Experience Design</span>
          <span>85%</span>
        </div>

        <div className="skill-track">
          <div className="skill-fill skill-85"></div>
        </div>

        <div className="skill-row">
          <span>Technical Architecture</span>
          <span>92%</span>
        </div>

        <div className="skill-track">
          <div className="skill-fill skill-92"></div>
        </div>

        <div className="skill-row">
          <span>Mobile Optimization</span>
          <span>88%</span>
        </div>

        <div className="skill-track">
          <div className="skill-fill skill-88"></div>
        </div>

      </div>

      <div className="performance-pill">
  <TrendingUp  className="pill-icon" />
  <span>Consistently delivering 3x industry-standard performance metrics</span>
</div>

    </section>
  );
}
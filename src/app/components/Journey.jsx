import {
  Code,
  Target,
  BriefcaseBusiness,
  Rocket,
  Code2Icon
} from "lucide-react";
export default function Journey() {
  return (
    <section id="journey" className="journey-section">

      {/* Trusted By */}

      <div className="trusted-block">

        <span className="trusted-label">
          TRUSTED BY
        </span>

        <div className="trusted-logos">

          <span>Brand Nova</span>

          <span>StudyFlow Edu</span>

          <span>Cerebra</span>

          <span>Nova Plus</span>

        </div>

      </div>

      {/* Journey Header */}

      <div className="journey-header">

        <span className="journey-eyebrow">
          THE JOURNEY
        </span>

        <h2 className="journey-title">
          Evolution of Craft
        </h2>

        <p className="journey-description">
          Every milestone shaped how I think about
          ecommerce experiences today.
        </p>

      </div>

      <div className="timeline">

  <div className="timeline-line"></div>

  <div className="timeline-item left">

    <div className="timeline-card">

      <span className="timeline-year">2020</span>

      <h3>Foundation</h3>

      <h4>Frontend Developer → Senior Engineer</h4>

      <p>
        Built core competency in React, TypeScript,
        and performance optimization. Shipped 15+
        production features for high-traffic retail
        platforms.
      </p>

      <div className="achievement">
        <span>Key Achievement</span>

        <strong>
          Reduced bundle size by 60% through
          strategic code-splitting
        </strong>
      </div>

    </div>

    <div className="timeline-icon">
      <Code size={28} />
    </div>

  </div>

  <div className="timeline-item right">

    <div className="timeline-icon">
      <Target size={28} />
    </div>

    <div className="timeline-card">

      <span className="timeline-year">2021</span>

      <h3>Specialization</h3>

      <h4>Lead Ecommerce Engineer</h4>

      <p>
        Focused exclusively on conversion-driven
        experiences. Led redesign of checkout flows
        that moved the needle on revenue.
      </p>

      <div className="achievement">
        <span>Key Achievement</span>

        <strong>
          $2.3M additional revenue through optimized
          cart experience
        </strong>
      </div>

    </div>

  </div>

  <div className="timeline-item left">

    <div className="timeline-card">

      <span className="timeline-year">2022</span>

      <h3>Leadership</h3>

      <h4>Technical Lead</h4>

      <p>
        Scaled team from 3 to 12 engineers.
        Established design systems and component
        architecture patterns adopted company-wide.
      </p>

      <div className="achievement">
        <span>Key Achievement</span>

        <strong>
          Reduced development time by 40% with
          reusable systems
        </strong>
      </div>

    </div>

    <div className="timeline-icon">
      <BriefcaseBusiness size={28} />
    </div>

  </div>

  <div className="timeline-item right">

    <div className="timeline-icon">
      <Rocket size={28} />
    </div>

    <div className="timeline-card">

      <span className="timeline-year">
        2023–Present
      </span>

      <h3>Elevation</h3>

      <h4>Independent Consultant</h4>

      <p>
        Partnering with ambitious brands to create
        premium digital experiences. Combining
        engineering depth with product thinking.
      </p>

      <div className="achievement">
        <span>Key Achievement</span>

        <strong>
          Working with 6–8 select clients annually
        </strong>
      </div>

    </div>

  </div>

</div>

    </section>
  );
}
import {
  Package,
  Smartphone,
  ArrowUpRight,
  Globe
} from "lucide-react";
export default function Projects() {
  return (
    
    <section id="projects" className="projects-section">

      {/* Header */}

      <div className="projects-header">

        <span className="projects-eyebrow">
          SELECTED WORK
        </span>

        <h2 className="projects-title">
          Crafted Experiences
        </h2>

        <p className="projects-description">
          Each project is an opportunity to push boundaries and deliver measurable impact.
        </p>

      </div>

      {/* Projects List */}

      <div className="projects-grid">

        {/* Project 1 */}

        <article className="project-card project-purple">

          <div className="project-arrow">
  <ArrowUpRight size={18} />
</div>

          <div className="project-left">

            <div className="project-icon">
              <Package size={30} strokeWidth={2.3} color="blue"/>
            </div>

            <span className="project-label">
              FULL PLATFORM REDESIGN
            </span>

          </div>

          <div className="project-center">

            <h3>
              Luxury Fashion Platform
            </h3>

            <p>
              Complete replatforming for premium fashion brand.
              Built headless commerce experience with focus on editorial
              content and conversion.
            </p>

            <div className="project-tags">

              <span>Next.js</span>

              <span>Shopify Plus</span>

              <span>Headless</span>

            </div>

          </div>

          <div className="project-right">

            <strong>340% conversion increase</strong>

            <strong>1.2s page load</strong>

            <strong>$4.2M revenue lift</strong>

          </div>

        </article>

        {/* Project 2 */}

        <article className="project-card project-pink">

          <div className="project-arrow">
  <ArrowUpRight size={18} />
</div>

          <div className="project-left">

            <div className="project-icon">
              <Smartphone size={30} strokeWidth={2.3} color="blue"/>
            </div>

            <span className="project-label">
              MOBILE EXPERIENCE
            </span>

          </div>

          <div className="project-center">

            <h3>
              Mobile-First Beauty Brand
            </h3>

            <p>
              iOS and mobile web experience for emerging beauty brand.
              Focused on social commerce integration and seamless checkout.
            </p>

            <div className="project-tags">

              <span>React Native</span>

              <span>PWA</span>

              <span>Stripe</span>

            </div>

          </div>

          <div className="project-right">

            <strong>72% mobile conversion</strong>

            <strong>4.8 App Store rating</strong>

            <strong>85% retention</strong>

          </div>

        </article>

        {/* Project 3 */}

        <article className="project-card project-cyan">

          <div className="project-arrow">
  <ArrowUpRight size={18} />
</div>

          <div className="project-left">

            <div className="project-icon">
              <Globe size={30} strokeWidth={2.3} color="blue"/>
            </div>

            <span className="project-label">
              INTERNATIONAL EXPANSION
            </span>

          </div>

          <div className="project-center">

            <h3>
              Global Marketplace
            </h3>

            <p>
              Multi-currency, multi-language platform expansion.
              Scaled architecture to support 12 international markets.
            </p>

            <div className="project-tags">

              <span>TypeScript</span>

              <span>Internationalization</span>

              <span>Scalability</span>

            </div>

          </div>

          <div className="project-right">

            <strong>12 markets launched</strong>

            <strong>99.9% uptime</strong>

            <strong>2.4M active users</strong>

          </div>

        </article>

      </div>

      {/* CTA */}

      <div className="projects-cta">

        <button className="portfolio-button">

          View Complete Portfolio

          <span>↗</span>

        </button>

      </div>

    </section>
  );
}
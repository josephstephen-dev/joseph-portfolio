"use client";

import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">

      {/* Header */}

      <div className="testimonials-header">

        <span className="testimonials-eyebrow">
          CLIENT VOICES
        </span>

        <h2 className="testimonials-title">
          Trusted partnerships
        </h2>

        <p className="testimonials-description">
          Success measured not just in metrics,
          but in lasting relationships.
        </p>

      </div>

      {/* Testimonials */}

      <div className="testimonials-grid">

        {/* Card 1 */}

        <div className="testimonial-card">

          <Quote className="quote-icon" size={40} />

          <div className="stars">
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
          </div>

          <p className="testimonial-text">
           &ldquo;What sets them apart is the ability to think like a
product leader while executing like a senior engineer.
Every technical decision was grounded in business impact.&rdquo;
          </p>

          <div className="testimonial-footer">

            <h4>Sarah Chen</h4>

            <span>
              VP of Product, Luxury Fashion Brand
            </span>

          </div>

        </div>

        {/* Card 2 */}

        <div className="testimonial-card">

          <Quote className="quote-icon" size={40} />

          <div className="stars">
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
          </div>

          <p className="testimonial-text">
           &ldquo;We saw a 340% increase in mobile conversion within
3 months. The attention to performance details and
user experience was unlike any developer we&apos;ve worked with.&rdquo;
          </p>

          <div className="testimonial-footer">

            <h4>Marcus Rodriguez</h4>

            <span>
              CEO, Beauty Ecommerce Platform
            </span>

          </div>

        </div>

        {/* Card 3 */}

        <div className="testimonial-card">

          <Quote className="quote-icon" size={40} />

          <div className="stars">
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
          </div>

          <p className="testimonial-text">
           &ldquo;The code quality and documentation made it easy for
our team to maintain and extend the platform.
A true partner who cares about long-term success.&rdquo;
          </p>

          <div className="testimonial-footer">

            <h4>Emily Foster</h4>

            <span>
              CTO, Global Marketplace
            </span>

          </div>

        </div>

      </div>

      {/* Partners */}

      <div className="partners-box">

  <h3 className="partners-title">
    PROUD TO PARTNER WITH
  </h3>

  <div className="partners-grid">

    <span className="partner-item">Elite Commerce</span>

    <span className="partner-item">Luxury Goods Co</span>

    <span className="partner-item">Modern Beauty</span>

    <span className="partner-item">Premium Retail</span>

    <span className="partner-item">Exclusive Brands</span>

    <span className="partner-item">High-End Fashion</span>

  </div>

</div>


      {/* Rating Card */}

      <div className="rating-card">

        <div className="rating-number">

          <Star
            size={24}
            fill="currentColor" color="Gold"
          />

          <span>5.0</span>

        </div>

        <p>
          Average client satisfaction
          across 50+ projects
        </p>

      </div>

    </section>
  );
}
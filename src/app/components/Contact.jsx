"use client";

import {
  ArrowRight,
  Mail,
  Calendar,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">

      <div className="contact-container">

        <span className="contact-eyebrow">
          READY TO BUILD SOMETHING EXCEPTIONAL?
        </span>

        <h2 className="contact-title">
  Let&apos;s create your next
  <br />
  <span className="premium-text">
    premium experience
  </span>
</h2>

        <p className="contact-description">
          I partner with a select number of ambitious brands each year.
          <br />
          If you&apos;re committed to excellence, let&apos;s talk.
        </p>

        <button className="contact-cta">
          <span>Start a Conversation</span>
          <ArrowRight size={22} />
        </button>

        <div className="reach-out-label">
          OR REACH OUT DIRECTLY
        </div>

        <div className="contact-cards">

          <div className="contact-card">
            <Mail size={36} />
            <h3>Email</h3>
            <p>hello@portfolio.dev</p>
            <span>Send a message →</span>
          </div>

          <div className="contact-card">
            <Calendar size={36} />
            <h3>Schedule</h3>
            <p>Book a call</p>
            <span>Choose a time →</span>
          </div>

          <div className="contact-card">
            <FaLinkedin size={36} />
            <h3>LinkedIn</h3>
            <p>Connect professionally</p>
            <span>View profile →</span>
          </div>

        </div>

        <div className="social-links">
  <a href="#"><FaGithub size={22} /></a>
  <a href="#"><FaLinkedin size={22} /></a>
  <a href="#"><Mail size={22} /></a>
</div>

        <p className="contact-status">
  Currently accepting select projects for Q3 2026
</p>

<p className="contact-footer">
  © 2026 JosephStephen-dev.
</p>

      </div>

    </section>
  );
}
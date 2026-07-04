import { ArrowRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const CONTACT_LINKS = {
  email: "mailto:josephstep486@gmail.com",
  linkedin: null,
  github: null,
};

const CONTACT_METHODS = [
  {
    title: "Email",
    description: "josephstep486@gmail.com",
    detail: "Usually replies within 24 hours.",
    href: CONTACT_LINKS.email,
    icon: Mail,
  },
  {
    title: "LinkedIn",
    description: "Connect professionally.",
    href: CONTACT_LINKS.linkedin,
    icon: FaLinkedin,
  },
  {
    title: "GitHub",
    description: "See what I'm building.",
    href: CONTACT_LINKS.github,
    icon: FaGithub,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="contact-container">
        <h2 id="contact-title" className="contact-title">Ready to build something useful?</h2>
        <div className="contact-description">
          <p className="contact-lead">Let&apos;s solve a problem worth solving.</p>
          <p>Whether you&apos;re improving an existing product or building something entirely new, I enjoy working with people who care about creating software that lasts.</p>
        </div>

        <a className="contact-cta" href={CONTACT_LINKS.email}>
          <span>Start a Conversation</span>
          <ArrowRight size={22} aria-hidden="true" />
        </a>

        <p className="reach-out-label">CONTACT METHODS</p>
        <div className="contact-cards">
          {CONTACT_METHODS.map(({ title, description, detail, href, icon: Icon }) => {
            const Card = href ? "a" : "div";
            return (
              <Card
                className={`contact-card${href ? "" : " contact-card-placeholder"}`}
                href={href || undefined}
                key={title}
              >
                <Icon size={34} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{description}</p>
                {detail && <span>{detail}</span>}
              </Card>
            );
          })}
        </div>

        <footer className="contact-footer">
          <p>© Joseph Stephen</p>
          <p>Technology changes. Thoughtful engineering endures.</p>
        </footer>
      </div>
    </section>
  );
}

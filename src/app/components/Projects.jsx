import { CarFront, ScanLine, Store } from "lucide-react";

const CASE_STUDIES = [
  {
    number: "001",
    title: "Attendance Scanner",
    tagline: "Integrity through presence.",
    icon: ScanLine,
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "Attendance should reflect participation—not handwriting.",
          "This project was inspired by a recurring problem within my department. Students who consistently attended lectures were often disadvantaged by a manual attendance process that allowed absent classmates to sign through friends. Over time, this weakened trust in the system and frustrated both lecturers and students.",
          "Rather than treating it as a disciplinary issue, I saw it as a systems problem.",
        ],
      },
      {
        heading: "The Problem",
        paragraphs: [
          "The existing attendance process depended almost entirely on trust.",
          "Students could remain absent while someone else recorded attendance on their behalf. Lecturers had no reliable way to verify physical presence, making attendance records increasingly inaccurate and difficult to enforce fairly.",
          "The problem wasn't that students could write names.",
          "The problem was that the system couldn't verify presence.",
        ],
      },
      {
        heading: "The Engineering Question",
        paragraphs: [
          "How can attendance become evidence of physical presence without slowing down the classroom?",
          "Everything in the project came from answering that question.",
        ],
      },
      {
        heading: "The Approach",
        paragraphs: [
          "Instead of digitizing the paper attendance sheet, I redesigned the attendance process itself.",
          "The solution uses geofencing to verify that a student is physically within the lecturer-defined classroom perimeter before attendance becomes available. This shifts attendance from a trust-based process to a location-aware verification system while keeping the experience simple for both students and lecturers.",
        ],
      },
      {
        heading: "Engineering Decisions",
        paragraphs: ["Rather than focusing on features, the design prioritized several principles:"],
        list: [
          "Attendance should verify presence, not identity alone.",
          "Lecturers should control when and where attendance is available.",
          "Students should complete attendance in seconds.",
          "The system should discourage dishonest behavior without creating unnecessary complexity.",
          "The solution should remain scalable for institutional adoption.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "The project demonstrates how software can improve fairness by redesigning the process rather than merely digitizing it.",
          "Instead of asking,",
          '"Who signed the attendance sheet?"',
          "the system asks,",
          '"Who was actually present?"',
          "That single shift changes the reliability of the entire process.",
        ],
      },
    ],
    reflection:
      "The best software doesn't simply automate existing workflows. It questions whether the workflow should exist in its current form at all.",
    reflectionLead:
      "This project reinforced one of the principles that continues to shape how I approach engineering:",
  },
  {
    number: "002",
    title: "Campus Market",
    tagline: "Making campus commerce easier.",
    icon: Store,
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "Sometimes the best software begins with a single conversation.",
          "Campus Market was inspired by a student who wanted to sell his phone to raise money for school fees. He couldn't quickly find a trusted buyer, and the experience exposed a larger problem that extended far beyond one person.",
          "Students had things to sell.",
          "Students needed things to buy.",
          "There simply wasn't a marketplace designed for campus communities.",
        ],
      },
      {
        heading: "The Problem",
        paragraphs: [
          "Campus buying and selling often happened informally through conversations, messaging groups, and word of mouth.",
          "Transactions were slow.",
          "Trust varied.",
          "Finding the right buyer or seller depended more on luck than on an organized system.",
          "The issue wasn't the lack of products.",
          "It was the lack of connection.",
        ],
      },
      {
        heading: "The Engineering Question",
        paragraphs: [
          "How do you build a marketplace that feels local, trusted, and designed specifically for students?",
          "That question shaped every major decision throughout the project.",
        ],
      },
      {
        heading: "The Approach",
        paragraphs: [
          "Instead of building a general e-commerce platform, the focus became creating an environment centered on campus communities.",
          "The platform makes it easier for students to discover products, connect with buyers and sellers nearby, and complete transactions within a familiar environment.",
          "By narrowing the scope to campuses, the system reduces unnecessary complexity while increasing relevance and trust.",
        ],
      },
      {
        heading: "Engineering Decisions",
        paragraphs: ["The design prioritized several principles:"],
        list: [
          "Community before scale.",
          "Simplicity before feature overload.",
          "Trust before transaction.",
          "Local discovery before broad marketplaces.",
          "Growth through repeatable campus communities.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "What began as one student's immediate need evolved into a platform capable of serving an entire academic community.",
          "The project demonstrates how solving one person's problem can uncover a larger system worth building.",
        ],
      },
    ],
    reflection:
      "The best ideas rarely begin with technology. They begin with paying attention to people.",
    reflectionLead:
      "This project strengthened another principle that continues to shape my work:",
  },
  {
    number: "003",
    title: "CarryGo",
    tagline: "Bringing reliable transportation closer to home.",
    icon: CarFront,
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "Some engineering ideas begin with months of research.",
          "This one began with an evening out.",
          "I had gone to meet my older brother after he returned to town. He had invited me to join him and two friends at a local bar, where we spent the evening talking and catching up. When it was time to leave, one of his friends instinctively reached for his phone to request an Uber.",
          "Nothing happened.",
          "He had forgotten he wasn't in Lagos anymore.",
          "There were no active ride-hailing drivers available.",
          "Instead, they had to walk through quiet streets looking for motorcycles just to get home.",
          "That evening revealed a problem larger than transportation itself.",
          "It exposed the absence of a reliable connection between people who needed rides and the drivers already on the road.",
        ],
      },
      {
        heading: "The Problem",
        paragraphs: [
          "Transportation existed.",
          "Access did not.",
          "Passengers had no dependable way to find available drivers when they needed one, especially during evenings and in quieter parts of town. What should have been a simple journey became an unnecessary search.",
          "The challenge wasn't creating transportation.",
          "It was making transportation discoverable.",
        ],
      },
      {
        heading: "The Engineering Question",
        paragraphs: [
          "How can a ride-hailing platform make local transportation as accessible in Ebonyi as people expect it to be in larger cities?",
          "That question became the foundation of the project.",
        ],
      },
      {
        heading: "The Approach",
        paragraphs: [
          "The following day, my brother called to continue the conversation. After discussing the experience with his friends, they believed the problem was worth solving and asked whether I could build the software behind it.",
          "Together, we transformed a frustrating evening into a practical solution.",
          "CarryGo was designed to connect passengers with nearby drivers through a simple, location-aware platform that makes requesting transportation faster, easier, and more dependable.",
        ],
      },
      {
        heading: "Engineering Decisions",
        paragraphs: ["The project prioritized several principles:"],
        list: [
          "Reduce the time required to find transportation.",
          "Make requesting a ride simple and familiar.",
          "Build for local communities rather than copying larger cities.",
          "Create a platform capable of growing as driver adoption increases.",
          "Focus on reliability before feature expansion.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "What began as an ordinary evening with family became the foundation of a transportation platform now serving people across Ebonyi State.",
          "The project demonstrates how observing everyday frustration can lead to software that improves daily life at a much larger scale.",
        ],
      },
    ],
    reflection:
      "Sometimes the best engineering opportunities aren't discovered in meetings—they're discovered by paying attention to everyday life.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section" aria-labelledby="projects-title">
      <header className="section-header centered-header projects-header">
        <p className="section-eyebrow">SELECTED WORK</p>
        <h2 id="projects-title">Systems that solve. Ideas, engineered.</h2>
        <div className="section-intro projects-intro">
          <p>Every project begins with a question.</p>
          <p>Every solution ends with software.</p>
          <p>These case studies show how problems became systems—and how engineering decisions shaped the outcome.</p>
        </div>
      </header>

      <div className="case-study-divider"><span>Project Case Studies</span></div>

      <div className="projects-grid">
        {CASE_STUDIES.map((project, index) => {
          const Icon = project.icon;
          return (
            <article className={`project-card project-${index + 1}`} key={project.title}>
              <header className="project-heading">
                <div className="project-icon"><Icon size={30} aria-hidden="true" /></div>
                <div>
                  <p className="project-label">CASE STUDY {project.number}</p>
                  <h3>{project.title}</h3>
                  <p className="project-tagline">{project.tagline}</p>
                </div>
              </header>

              <div className="project-narrative">
                {project.sections.map((section) => (
                  <section className="case-section" key={section.heading} aria-labelledby={`${project.number}-${section.heading.toLowerCase().replaceAll(" ", "-")}`}>
                    <h4 id={`${project.number}-${section.heading.toLowerCase().replaceAll(" ", "-")}`}>{section.heading}</h4>
                    {section.paragraphs.map((paragraph, paragraphIndex) => (
                      <p key={`${section.heading}-${paragraphIndex}`}>{paragraph}</p>
                    ))}
                    {section.list && (
                      <ul>
                        {section.list.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    )}
                  </section>
                ))}

                <section className="case-section reflection" aria-labelledby={`${project.number}-reflection`}>
                  <h4 id={`${project.number}-reflection`}>Reflection</h4>
                  {project.reflectionLead && <p>{project.reflectionLead}</p>}
                  <blockquote>{project.reflection}</blockquote>
                </section>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

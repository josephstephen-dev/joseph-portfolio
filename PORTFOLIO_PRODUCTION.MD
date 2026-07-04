# SOURCE OF TRUTH

This document is the authoritative specification for portfolio content.

Implement the approved copy exactly as written.

Do not paraphrase, rewrite, shorten, summarize, or invent content.

When layout conflicts with the content, adapt the layout rather than changing the copy.

When an implementation note conflicts with existing code, follow this document.
---

# HERO

## Role

Software Engineer

## Headline

Technology changes. Thoughtful engineering endures.

## Supporting Copy

Frameworks evolve.

Products mature.

Principles remain.

I engineer software guided by clarity, maintainability, and long-term thinking.

## Primary Actions

- Explore Selected Work
- Start a Conversation

---

## Quiet Proof Points

### Label

Here's what matters

### Important Implementation Note

The current statistics in the existing portfolio are placeholder values.

Preserve the visual design of the four metric cards, but make all displayed metrics configurable through a single data source so they can be replaced later without modifying the layout.

Do **not** invent replacement statistics.

Keep the existing responsive behavior and animation.

---

# THE JOURNEY

## Section Label

The Journey

## Section Heading

Evolution of Craft

## Section Copy

Every stage changed more than what I could build—it changed how I think about engineering.

---

### Card 01

#### Title

Curiosity

#### Description

Fascinated by computers long before I owned one. Curiosity became the foundation of everything that followed.

---

### Card 02

#### Title

Commitment

#### Description

I chose work that gave me time to learn, turning quiet hours into opportunities to study, build, and improve.

---

### Card 03

#### Title

Practice

#### Description

Small websites, experiments, and projects became my classroom. Every build strengthened both my skills and my thinking.

---

### Card 04

#### Title

Purpose

#### Description

Teaching, writing, and building showed me that engineering isn't just about software—it's about creating systems that help people succeed.

---

### Card 05

#### Title

Direction

#### Description

Today I continue exploring software with the same curiosity that started the journey, guided by principles that will outlast today's technology.

---

## Implementation Notes

- Preserve the existing timeline layout.
- Replace all five existing cards with the approved copy above.
- Maintain the current animations.
- Allow cards to increase in height naturally if required by the final copy.
- Keep equal spacing between all cards.
- Ensure all card descriptions remain visible on mobile devices without requiring hover interactions.

---

# ABOUT

## Section Label

About

## Section Heading

The Story Behind the Engineer

## Section Copy

Long before I understood how software worked, I knew I wanted to understand computers.

That curiosity became the beginning of a journey that has shaped every major decision I've made since.

I grew up fascinated by what computers could do, even before I had one of my own. When I finally did, I found myself looking for every opportunity to learn. Along the way, I worked in different fields, not because they were the destination, but because they helped me move closer to the engineer I wanted to become.

Every stage taught me something different. Farming taught me the value of discipline. Barbing gave me the flexibility to spend countless hours learning, experimenting, and building. University gave me the opportunity to deepen that curiosity through Computer Science and connect it to the broader discipline of engineering.

As I learned, I found myself naturally helping others learn too. I designed portfolio websites for friends before they knew they needed one. Later, I wrote a Frontend Foundations curriculum to make learning web development more approachable and reusable for new students.

Today, my interests extend beyond frontend development. I'm exploring software engineering as a discipline—building products, designing systems, and continuously learning how thoughtful technology can create lasting value.

Looking back, I don't think my journey has been defined by the jobs I've had.

It's been defined by the curiosity I refused to let go of.

---

## Implementation Notes

- Replace the existing About section completely.
- Preserve the current visual layout and design language.
- Prioritize comfortable reading width over compactness.
- Increase vertical spacing between paragraphs where necessary.
- Do not split the narrative into multiple cards.
- Treat this as one continuous story.
- Ensure excellent readability on desktop, tablet, and mobile.
- Preserve typography hierarchy and existing animations.

---

# SELECTED WORK

## Section Label

Selected Work

## Section Heading

Systems that solve. Ideas, engineered.

## Section Introduction

Every project begins with a question.

Every solution ends with software.

These case studies show how problems became systems—and how engineering decisions shaped the outcome.

---

## Section Divider

Project Case Studies

---

## Implementation Notes

- Preserve the existing project section layout.
- Replace the existing project cards with the three approved flagship case studies.
- Remove emphasis on screenshots as the primary storytelling element.
- The narrative should lead each project.
- Screenshots should support the story rather than dominate it.
- Cards must grow naturally to accommodate the case study content.
- Avoid fixed-height containers.
- Preserve hover animations on desktop.
- Ensure all important information remains accessible on mobile devices.
- Maintain generous spacing between project case studies.

---

# CASE STUDY 001

## Title

Attendance Scanner

## Tagline

Integrity through presence.

---

## Overview

Attendance should reflect participation—not handwriting.

This project was inspired by a recurring problem within my department. Students who consistently attended lectures were often disadvantaged by a manual attendance process that allowed absent classmates to sign through friends. Over time, this weakened trust in the system and frustrated both lecturers and students.

Rather than treating it as a disciplinary issue, I saw it as a systems problem.

---

## The Problem

The existing attendance process depended almost entirely on trust.

Students could remain absent while someone else recorded attendance on their behalf. Lecturers had no reliable way to verify physical presence, making attendance records increasingly inaccurate and difficult to enforce fairly.

The problem wasn't that students could write names.

The problem was that the system couldn't verify presence.

---

## The Engineering Question

How can attendance become evidence of physical presence without slowing down the classroom?

Everything in the project came from answering that question.

---

## The Approach

Instead of digitizing the paper attendance sheet, I redesigned the attendance process itself.

The solution uses geofencing to verify that a student is physically within the lecturer-defined classroom perimeter before attendance becomes available. This shifts attendance from a trust-based process to a location-aware verification system while keeping the experience simple for both students and lecturers.

---

## Engineering Decisions

Rather than focusing on features, the design prioritized several principles:

- Attendance should verify presence, not identity alone.
- Lecturers should control when and where attendance is available.
- Students should complete attendance in seconds.
- The system should discourage dishonest behavior without creating unnecessary complexity.
- The solution should remain scalable for institutional adoption.

---

## Outcome

The project demonstrates how software can improve fairness by redesigning the process rather than merely digitizing it.

Instead of asking,

"Who signed the attendance sheet?"

the system asks,

"Who was actually present?"

That single shift changes the reliability of the entire process.

---

## Reflection

This project reinforced one of the principles that continues to shape how I approach engineering:

> The best software doesn't simply automate existing workflows. It questions whether the workflow should exist in its current form at all.

---

## Implementation Notes

- Preserve the existing project card aesthetic while allowing the content to expand vertically.
- Do not truncate any section.
- Present each subsection (Overview, Problem, Engineering Question, Approach, Engineering Decisions, Outcome, Reflection) with consistent spacing and typography.
- Keep screenshots secondary to the narrative.
- Ensure all content is fully readable on mobile devices.
- Avoid placing meaningful information behind hover-only interactions.

---

# CASE STUDY 002

## Title

Campus Market

## Tagline

Making campus commerce easier.

---

## Overview

Sometimes the best software begins with a single conversation.

Campus Market was inspired by a student who wanted to sell his phone to raise money for school fees. He couldn't quickly find a trusted buyer, and the experience exposed a larger problem that extended far beyond one person.

Students had things to sell.

Students needed things to buy.

There simply wasn't a marketplace designed for campus communities.

---

## The Problem

Campus buying and selling often happened informally through conversations, messaging groups, and word of mouth.

Transactions were slow.

Trust varied.

Finding the right buyer or seller depended more on luck than on an organized system.

The issue wasn't the lack of products.

It was the lack of connection.

---

## The Engineering Question

How do you build a marketplace that feels local, trusted, and designed specifically for students?

That question shaped every major decision throughout the project.

---

## The Approach

Instead of building a general e-commerce platform, the focus became creating an environment centered on campus communities.

The platform makes it easier for students to discover products, connect with buyers and sellers nearby, and complete transactions within a familiar environment.

By narrowing the scope to campuses, the system reduces unnecessary complexity while increasing relevance and trust.

---

## Engineering Decisions

The design prioritized several principles:

- Community before scale.
- Simplicity before feature overload.
- Trust before transaction.
- Local discovery before broad marketplaces.
- Growth through repeatable campus communities.

---

## Outcome

What began as one student's immediate need evolved into a platform capable of serving an entire academic community.

The project demonstrates how solving one person's problem can uncover a larger system worth building.

---

## Reflection

This project strengthened another principle that continues to shape my work:

> The best ideas rarely begin with technology. They begin with paying attention to people.

---

## Implementation Notes

- Preserve the same layout and typography used in Case Study 001.
- Maintain consistent spacing between every subsection.
- Allow the project card to expand naturally.
- Keep screenshots secondary to the written narrative.
- Ensure the complete case study remains fully readable on mobile devices.

---

# CASE STUDY 003

## Title

CarryGo

## Tagline

Bringing reliable transportation closer to home.

---

## Overview

Some engineering ideas begin with months of research.

This one began with an evening out.

I had gone to meet my older brother after he returned to town. He had invited me to join him and two friends at a local bar, where we spent the evening talking and catching up. When it was time to leave, one of his friends instinctively reached for his phone to request an Uber.

Nothing happened.

He had forgotten he wasn't in Lagos anymore.

There were no active ride-hailing drivers available.

Instead, they had to walk through quiet streets looking for motorcycles just to get home.

That evening revealed a problem larger than transportation itself.

It exposed the absence of a reliable connection between people who needed rides and the drivers already on the road.

---

## The Problem

Transportation existed.

Access did not.

Passengers had no dependable way to find available drivers when they needed one, especially during evenings and in quieter parts of town. What should have been a simple journey became an unnecessary search.

The challenge wasn't creating transportation.

It was making transportation discoverable.

---

## The Engineering Question

How can a ride-hailing platform make local transportation as accessible in Ebonyi as people expect it to be in larger cities?

That question became the foundation of the project.

---

## The Approach

The following day, my brother called to continue the conversation. After discussing the experience with his friends, they believed the problem was worth solving and asked whether I could build the software behind it.

Together, we transformed a frustrating evening into a practical solution.

CarryGo was designed to connect passengers with nearby drivers through a simple, location-aware platform that makes requesting transportation faster, easier, and more dependable.

---

## Engineering Decisions

The project prioritized several principles:

- Reduce the time required to find transportation.
- Make requesting a ride simple and familiar.
- Build for local communities rather than copying larger cities.
- Create a platform capable of growing as driver adoption increases.
- Focus on reliability before feature expansion.

---

## Outcome

What began as an ordinary evening with family became the foundation of a transportation platform now serving people across Ebonyi State.

The project demonstrates how observing everyday frustration can lead to software that improves daily life at a much larger scale.

---

## Reflection

> Sometimes the best engineering opportunities aren't discovered in meetings—they're discovered by paying attention to everyday life.

---

## Implementation Notes

- Match the visual structure used in the previous two case studies.
- Preserve consistent typography and spacing across all three projects.
- Allow the project card to grow naturally with the content.
- Keep narrative as the primary storytelling element.
- Screenshots should support the story rather than replace it.
- Ensure the complete content remains fully accessible on mobile devices.

---

# THE JOSEPH METHOD

## Section Heading

The Joseph Method

## Section Introduction

Every project teaches something.

Over time, those lessons become a way of thinking.

The Joseph Method isn't a framework I set out to invent.

It's the pattern that naturally emerged across the problems I've solved, the systems I've built, and the principles that continue to guide my engineering decisions.

---

## Principle 01

### Understand the real problem

I don't begin with features or frameworks.

I begin by understanding the people, the environment, and the challenge beneath the request.

Good software starts with the right question.

---

## Principle 02

### Design for context

Every community has different needs.

Instead of copying existing products, I design solutions that fit the people and environments they'll actually serve.

---

## Principle 03

### Build around people

Technology is a tool.

People are the purpose.

Every engineering decision should make someone's work, learning, or daily life meaningfully easier.

---

## Principle 04

### Build for understanding

Readable systems.

Clear interfaces.

Thoughtful architecture.

Software should be understandable today and maintainable tomorrow.

---

## Principle 05

### Never stop evolving

Every project teaches something.

Every solution expands how I think.

I treat engineering as a discipline of continuous learning rather than a destination.

---

## Implementation Notes

- Remove "(Version 1)" from the heading.
- Remove the Guiding Principles summary card completely.
- The section ends immediately after Principle 05.
- Preserve the current visual language and animations.
- Allow each principle card to grow naturally if necessary.
- Maintain equal spacing between all five principles.
- Ensure all content remains accessible on mobile devices.
- Do not hide explanatory text behind hover interactions.

---

# CONTACT

## Section Heading

Ready to build something useful?

## Supporting Copy

Let's solve a problem worth solving.

Whether you're improving an existing product or building something entirely new, I enjoy working with people who care about creating software that lasts.

---

## Primary Action

Start a Conversation

---

## Contact Methods

### Email

josephstep486@gmail.com

Usually replies within 24 hours.

---

### LinkedIn

Connect professionally.

> Replace with actual LinkedIn profile URL during implementation.

---

### GitHub

See what I'm building.

> Replace with actual GitHub profile URL during implementation.

---

## Footer

© Joseph Stephen

Technology changes. Thoughtful engineering endures.

---

## Final Implementation Notes

### Preserve

- Existing visual identity.
- Existing color palette.
- Existing typography.
- Existing motion language.
- Existing design system.
- Existing animations where they improve the experience.

---

### Remove Completely

- Trusted Partnerships section.
- Testimonials.
- Client logos.
- Guiding Principles summary card.
- Schedule a Call card.

These sections should be removed entirely, with surrounding layouts adjusted naturally so no visual gaps remain.

---

### Mobile Experience

Desktop hover interactions may remain.

However, no important information may exist behind hover-only interactions.

Any content currently revealed only on hover must also be visible or expandable by tap on touch devices.

Desktop and mobile users must receive equivalent information.

---

### Cards

Allow all cards to grow naturally based on content.

Never force long content into fixed-height containers.

Avoid internal scrolling wherever possible.

---

### Typography

Prioritize readability over compactness.

Increase spacing where necessary rather than reducing font size.

Maintain consistent vertical rhythm throughout the portfolio.

---

### Performance

Do not introduce unnecessary JavaScript.

Prefer CSS solutions where appropriate.

Maintain smooth scrolling and lightweight interactions.

---

### Accessibility

Maintain semantic HTML.

Preserve heading hierarchy.

Support keyboard navigation.

Respect reduced-motion preferences.

Ensure touch targets are comfortable on mobile devices.

---

### Final Verification Checklist

- Hero matches production copy.
- About section matches production copy.
- Evolution of Craft matches production copy.
- Three case studies implemented.
- The Joseph Method implemented.
- Guiding Principles card removed.
- Testimonials removed.
- Schedule card removed.
- Contact section updated.
- Email uses mailto:josephstep486@gmail.com.
- LinkedIn placeholder ready.
- GitHub placeholder ready.
- Mobile interaction parity verified.
- No clipped text.
- No placeholder marketing copy.
- No visual gaps after section removal.
- Responsive layout verified.
- Animations preserved where appropriate.

### Remove Additional Legacy Sections

Remove any remaining sections inherited from the original portfolio template that communicate self-assessed skills, competency percentages, placeholder statistics, marketing metrics, or generic capability cards.

Examples include:

- Core Competencies
- Percentage skill bars
- Performance score cards
- Marketing metric cards
- Placeholder analytics

These no longer align with the portfolio's narrative and should be removed entirely, with surrounding layouts adjusted naturally.
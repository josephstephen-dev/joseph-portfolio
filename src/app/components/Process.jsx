"use client";

import {
  Lightbulb,
  LayoutGrid,
  Code2,
  BarChart3,
  RefreshCw,
  Rocket
} from "lucide-react";

import { useState } from "react";

export default function Process() {

const [activeCard, setActiveCard] = useState(null);
  return (

<section id="process" className="process-section">

  {/* Header */}

  <div className="process-header">

    <span className="process-eyebrow">
      HOW I WORK
    </span>

    <h2 className="process-title">
      Structured thinking,
      <br />
      creative execution
    </h2>

    <p className="process-description">
      A proven methodology that balances strategic rigor
      with adaptive problem-solving.
    </p>

  </div>


{/* Process Cards */}

<div
className={`process-cards ${
activeCard !== null ? "cards-expanded" : ""
}`}
>

  <div className="process-line"></div>

  {/* Card 1 */}

  <div
className={`process-card ${
activeCard === 0 ? "active" : ""
}`}
onMouseEnter={() => setActiveCard(0)}
onMouseLeave={() => setActiveCard(null)}
>
  <div className="card-orb"></div>

    <span className="process-number">01</span>

    <div className="process-icon">
      <Lightbulb size={35} />
    </div>

    <h3>Strategic Discovery</h3>

    <p>
      Deep dive into business goals,
      user needs, and technical constraints.
    </p>

    <div className="process-hidden">

      <ul>
        <li>Stakeholder interviews</li>
        <li>User research & analytics</li>
        <li>Technical audit</li>
        <li>Competitive analysis</li>
      </ul>

    </div>

  </div>

  {/* Card 2 */}

  <div
className={`process-card ${
activeCard === 1 ? "active" : ""
}`}
onMouseEnter={() => setActiveCard(1)}
onMouseLeave={() => setActiveCard(null)}
>

  <div className="card-orb"></div>

    <span className="process-number">02</span>

    <div className="process-icon">
      <LayoutGrid  size={35}/>
    </div>

    <h3>Experience Design</h3>

    <p>
      Craft user journeys and interface systems
      that align business and user value.
    </p>

    <div className="process-hidden">

      <ul>
        <li>User flow mapping</li>
        <li>Wireframe iteration</li>
        <li>Design system planning</li>
        <li>Prototype validation</li>
      </ul>

    </div>

  </div>

  {/* Card 3 */}

  <div
className={`process-card ${
activeCard === 2 ? "active" : ""
}`}
onMouseEnter={() => setActiveCard(2)}
onMouseLeave={() => setActiveCard(null)}
>

  <div className="card-orb"></div>

    <span className="process-number">03</span>

    <div className="process-icon">
      <Code2 size={35} />
    </div>

    <h3>Engineering Excellence</h3>

    <p>
      Build with performance,
      scalability, and maintainability
      as core principles.
    </p>

    <div className="process-hidden">

      <ul>
        <li>Component architecture</li>
        <li>Performance optimization</li>
        <li>Quality assurance</li>
        <li>Accessibility standards</li>
      </ul>

    </div>

  </div>

  {/* Card 4 */}

  <div
className={`process-card ${
activeCard === 3 ? "active" : ""
}`}
onMouseEnter={() => setActiveCard(3)}
onMouseLeave={() => setActiveCard(null)}
>

  <div className="card-orb"></div>

    <span className="process-number">04</span>

    <div className="process-icon">
      <BarChart3 size={35} />
    </div>

    <h3>Measure & Learn</h3>

    <p>
      Instrument, monitor, and optimize
      based on real user behavior and
      business metrics.
    </p>

    <div className="process-hidden">

      <ul>
        <li>Analytics integration</li>
        <li>A/B testing setup</li>
        <li>Performance monitoring</li>
        <li>Conversion tracking</li>
      </ul>

    </div>

  </div>

  {/* Card 5 */}

  <div
className={`process-card ${
activeCard === 4 ? "active" : ""
}`}
onMouseEnter={() => setActiveCard(4)}
onMouseLeave={() => setActiveCard(null)}
>

  <div className="card-orb"></div>

    <span className="process-number">05</span>

    <div className="process-icon">
      <RefreshCw size={35}/>
    </div>

    <h3>Iterate & Scale</h3>

    <p>
      Continuous improvement through
      data-driven insights and
      user feedback.
    </p>

    <div className="process-hidden">

      <ul>
        <li>Feature iteration</li>
        <li>Performance tuning</li>
        <li>Team enablement</li>
        <li>Documentation</li>
      </ul>

    </div>

  </div>

</div>




  {/* Guiding Principles */}

  <div className="guiding-principles">

  <div className="principles-header">

    <Rocket
size={30}
color="#3b82f6"
/>

    <h3>Guiding Principles</h3>

  </div>

  <div className="principles-list">

    <div className="principle-item">
      <span className="principle-number">1</span>
      <p>Business impact over technical complexity</p>
    </div>

    <div className="principle-item">
      <span className="principle-number">2</span>
      <p>User experience drives architecture</p>
    </div>

    <div className="principle-item">
      <span className="principle-number">3</span>
      <p>Performance is a feature, not an afterthought</p>
    </div>

    <div className="principle-item">
      <span className="principle-number">4</span>
      <p>Scalable systems enable growth</p>
    </div>

    <div className="principle-item">
      <span className="principle-number">5</span>
      <p>Data informs every decision</p>
    </div>

  </div>

</div>

</section>

);
}
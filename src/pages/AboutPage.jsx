import { useEffect, useState } from 'react';
import { useReveal } from '../hooks/useReveal';


const services = [
  {
    category: 'Strategy',
    description: 'The strategic groundwork that defines what a brand needs to say before it says anything.',
    items: ['Brand positioning', 'Brand architecture', 'Competitive analysis', 'Value proposition', 'Market research']
  },
  {
    category: 'Identity',
    description: 'The visual and verbal language that makes the strategy visible and consistent across every application.',
    items: ['Logo & visual identity', 'Typography & colour systems', 'Naming', 'Verbal identity & tone of voice', 'Brand guidelines']
  },
  {
    category: 'Experience',
    description: 'The touchpoints where the brand meets its audience and the strategy becomes tangible.',
    items: ['Web design & development', 'Digital platforms', 'Brand environments', 'Presentation systems']
  },
  {
    category: 'Management',
    description: 'The discipline required to keep a brand coherent as the company grows and the market shifts.',
    items: ['Brand governance', 'System documentation', 'Brand training', 'Evolution & refresh', 'Ongoing consultancy']
  }
];

const pillars = [
  { 
    title: 'Conviction', 
    text: 'Bravvia was named after bravery for a reason. Every engagement we take requires a client willing to make decisions that matter and a team prepared to defend them. The work we do best happens when both sides bring conviction to the table.', 
    delay: '0.1s' 
  },
  { 
    title: 'Business first', 
    text: 'Our founders came from consulting, corporate leadership, and agency life before starting Bravvia. That background shows up in how we begin every project with the commercial question, not the visual one. Design follows strategy, never the other way around.', 
    delay: '0.2s' 
  },
  { 
    title: 'Independence', 
    text: 'Bravvia is privately held, free from network obligations and holding company priorities. That independence means every recommendation we make is driven by what the client needs, not by what a parent company sells.', 
    delay: '0.3s' 
  },
  { 
    title: 'Craft', 
    text: 'We believe the difference between a good brand and a lasting one lives in the details that most people never notice. Typography, spacing, tone, motion, hierarchy. The quality of a brand system is measured in the precision of its smallest parts.', 
    delay: '0.4s' 
  },
  { 
    title: 'Global by design', 
    text: 'We work from Mexico City with clients across continents and time zones. The distance is intentional. It gives us perspective that proximity sometimes removes, and it forces every deliverable to be built for clarity at a distance, not just in the room.', 
    delay: '0.5s' 
  },
  { 
    title: 'Long-term thinking', 
    text: 'We build brands meant to hold their position for years, not campaigns designed to perform for weeks. The systems we deliver are engineered to absorb growth, adapt to new markets, and remain coherent as the company evolves.', 
    delay: '0.6s' 
  },
  { 
    title: 'Candor', 
    text: 'We tell clients what we see, not what they want to hear. If the strategy has a weakness, we name it. If the design needs more time, we say so. The relationship works when both sides trust each other enough to be direct.', 
    delay: '0.7s' 
  },
  { 
    title: 'Full spectrum', 
    text: 'We provide comprehensive solutions that cover the entire lifecycle of a brand, ensuring that every touchpoint—from digital to physical—is aligned with the core strategy and visual identity.', 
    delay: '0.8s' 
  },
];

export default function AboutPage() {
  useReveal();
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    document.title = 'About | Bravvia Agency';
  }, []);

  return (
    <main className="about-page">
      
      {/* ── Hero ── */}
      <section className="about-hero">
        <div className="about-hero-content">
          <p className="reveal philosophy-label">Our philosophy</p>
          <p className="reveal philosophy-text">
            The courage to decide. The conviction to believe. The ambition to dream. <br /><br />
            Bravvia is a brand consultancy built on creative closeness and the strategy to make it last. 
            We work with companies ready to define who they are, and we make sure it holds.
            <br /> <br />Not for everyone. For the brave.
          </p>
        </div>
      </section>

      {/* ── Banner image ── */}
      <section className="about-banner">
        <div className="reveal visual-zoom banner-container">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbkvoZXaKrS-JTMco_8iMkkr7vX4vyHQlg2tuqvZYiabHBcsYAJ444m3Rl5xVa5WDTtePqn-KwFYvBpvacLprp1mfymlbDkUWogDQMCwzu2GO9CIIsVASvrlcmAij_5XFcvidzFtP1QkooTGqCj1sm3_qz7PJG701RUrMZO180vtVnlvWYXw0-mHNRn2POMUuDrxIbCsI_e2YClHsHR3vkLa77BQ_sDH1nrcV1ItPrhKPscw41uYLwvMKjhrKirPXmIo0FDbtSLHEw" alt="Architectural" className="banner-img" />
        </div>
      </section>

      {/* ── Services / Capabilities ── */}
      <section className="services-section">
        <div className="section-container">
          <p className="reveal section-label">Our Services</p>

          <div className="reveal">
            {services.map((service, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={service.category} className="accordion-item">
                  <div 
                    className="accordion-header"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <h2 className="accordion-title">{service.category}</h2>
                    <div className="accordion-icon">
                      <div className="icon-line-h" />
                      <div className={`icon-line-v ${isOpen ? 'open' : ''}`} />
                    </div>
                  </div>

                  <div className={`accordion-content ${isOpen ? 'is-open' : ''}`}>
                    <div className="accordion-grid">
                      <div>
                        <p className="content-label">Approach</p>
                        <p className="content-desc">{service.description}</p>
                      </div>
                      <div>
                        <p className="content-label">What we do</p>
                        <div className="tags-container">
                          {service.items.map((item) => (
                            <span key={item} className="service-tag">
                              <div className="tag-dot" />
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Pillars ── */}
      <section className="pillars-section">
        <div className="section-container">
          <p className="reveal section-label">Our Pillars</p>
          <div className="pillars-grid">
            {pillars.map(({ title, text, delay }) => (
              <div key={title} className="reveal pillar-card" style={{ animationDelay: delay }}>
                <div className="pillar-body">
                  <h2 className="pillar-title">{title}</h2>
                  <p className="pillar-text">{text}</p>
                </div>
                <div className="pillar-divider" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
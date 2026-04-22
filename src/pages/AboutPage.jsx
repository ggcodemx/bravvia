import { useEffect } from 'react';
import { useReveal } from '../hooks/useReveal';
import { useState } from 'react';

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
    // Forzamos el fondo negro y texto blanco desde el contenedor padre
    <main style={{ background: 'black', color: 'white', minHeight: '100vh' }}>
      
      {/* ── Hero ── */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '8rem 2rem 4rem' }}>
        <div style={{ margin: '0 12rem', width: '75%' }}>
          <p className="reveal" style={{ fontSize: '1.5rem', fontWeight: 500, marginBottom: '3rem' }}>Our philosophy</p>
          <p className="reveal" style={{ fontSize: 'clamp(1.75rem, 5vw, 3.75rem)', fontWeight: 300, lineHeight: 1.05, animationDelay: '0.2s' }}>
            We believe in radical clarity.<br />
            At Bravvia, we deconstruct complexity to reveal the structural essence of a brand.
          </p>
        </div>
      </section>

      {/* ── Banner image ── */}
      <section style={{ padding: '0 2rem', marginBottom: '8rem' }}>
        <div className="reveal visual-zoom" style={{ aspectRatio: '21/9', width: '100%', overflow: 'hidden', background: '#111', filter: 'grayscale(1)' }}>
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbkvoZXaKrS-JTMco_8iMkkr7vX4vyHQlg2tuqvZYiabHBcsYAJ444m3Rl5xVa5WDTtePqn-KwFYvBpvacLprp1mfymlbDkUWogDQMCwzu2GO9CIIsVASvrlcmAij_5XFcvidzFtP1QkooTGqCj1sm3_qz7PJG701RUrMZO180vtVnlvWYXw0-mHNRn2POMUuDrxIbCsI_e2YClHsHR3vkLa77BQ_sDH1nrcV1ItPrhKPscw41uYLwvMKjhrKirPXmIo0FDbtSLHEw" alt="Architectural" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
        </div>
      </section>

      {/* ── Services / Capabilities ── */}
     <section style={{ padding: '8rem 2rem' }}>
        <div style={{ maxWidth: '90rem', margin: '0 auto' }}>
          <p className="reveal" style={{ fontSize: '1.5rem', marginBottom: '2rem', opacity: 0.5 }}>
            Our Services
          </p>

          <div className="reveal">
            {services.map((service, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={service.category} 
                  style={{ 
                    borderTop: '1px solid rgba(255,255,255,0.2)',
                    overflow: 'hidden',
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  {/* Header de la Pestaña */}
                  <div 
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center', 
                      padding: '2.5rem 0', 
                      cursor: 'pointer' 
                    }}
                  >
                    <h3 style={{ 
                      fontSize: 'clamp(2rem, 6vw, 3.5rem)', 
                      fontWeight: 400, 
                      margin: 0, 
                    
                    }}>
                      {service.category}
                    </h3>
                    
                    {/* Icono interactivo (+ / -) */}
                    <div style={{ 
                      width: '40px', 
                      height: '40px', 
                      borderRadius: '50%', 
                      border: '1px solid rgba(255,255,255,0.3)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      position: 'relative'
                    }}>
                      <div style={{ width: '12px', height: '1px', background: 'white' }} />
                      <div style={{ 
                        width: '1px', 
                        height: '12px', 
                        background: 'white', 
                        position: 'absolute',
                        transition: 'transform 0.4s',
                        transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                        opacity: isOpen ? 0 : 1
                      }} />
                    </div>
                  </div>

                  {/* Contenido Expandible */}
                  <div style={{ 
                    maxHeight: isOpen ? '600px' : '0px', 
                    opacity: isOpen ? 1 : 0,
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    paddingBottom: isOpen ? '4rem' : '0rem'
                  }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                      
                      {/* Lado Izquierdo: Descripción (Approach) */}
                      <div>
                        <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem', opacity: 0.4 }}>
                          Approach
                        </p>
                        <p style={{  lineHeight: 1.5, color: 'rgba(255,255,255,0.8)', maxWidth: '500px' }}>
                          {service.description}
                        </p>
                      </div>

                      {/* Lado Derecho: Lista de Items (Services) */}
                      <div>
                        <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem', opacity: 0.4 }}>
                          What we do
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                          {service.items.map((item) => (
                            <span key={item} style={{ 
                              
                              padding: '0.5rem 1rem', 
                              border: '1px solid rgba(255,255,255,0.1)',
                              borderRadius: '2px',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.5rem'
                            }}>
                              <div style={{ width: '4px', height: '4px', background: 'white' }} />
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
      <section style={{ padding: '8rem 2rem' }}>
        <div style={{ maxWidth: '90rem', margin: '0 auto' }}>
           <h2 className="reveal" style={{ fontSize: '1.5rem', fontWeight: 500,marginBottom: '6rem' }}>
            Pillars
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '5rem' }}>
            {pillars.map(({ title, text, delay }) => (
              <div key={title} className="reveal" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', animationDelay: delay }}>
                <div style={{ paddingBottom: '2rem' }}>
                  <h2 style={{ fontSize: '1.7rem', fontWeight: 500, letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>{title}</h2>
                  <p style={{ textAlign: 'justify', fontSize: '1rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>{text}</p>
                </div>
                <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.2)' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clients ── 
      <section style={{ padding: '8rem 2rem' }}>
        <div style={{ maxWidth: '90rem', margin: '0 auto' }}>
          <h2 className="reveal" style={{ fontSize: '1.5rem', fontWeight: 500, letterSpacing: '-0.02em', marginBottom: '4rem' }}>
            We've worked with
          </h2>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '5rem', alignItems: 'center' }}>
            {clients.map(({ name, src }) => (
              <div key={name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.4 }}>
                <img src={src} alt={name} style={{ height: '1.5rem', filter: 'brightness(0) invert(1)', objectFit: 'contain' }} />
              </div>
            ))}
          </div>
        </div>
      </section>
      */}
    </main>
  );
}
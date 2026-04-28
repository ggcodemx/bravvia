import { useEffect } from 'react';
import { useReveal } from '../hooks/useReveal';
import WorldClock from '../components/WorldClock';
import { globalOffices } from '../data';


export default function ContactPage() {
  useReveal();

  useEffect(() => {
    document.title = 'Contact | Bravvia Agency';
  }, []);

  return (
    <main className="contact-page">
      {/* ── Hero ── */}
      <section className="contact-hero">
        <h2 className="reveal contact-hero-title">
          The work starts here.
        </h2>
      </section>

      {/* ── Banner ── */}
      <section className="contact-banner">
        <div className="reveal banner-frame">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyxurEiT71wsmlA89X6ZhNvtt_WEhYZrimf2FnEB5G6mLI5iO9WUy_SPS7vGEjgkwRVytx6peJuDJ_GLpuEt67nw8G-mYr7nFx0TCLzKXToXlEc5V1Fumn62rXxnwmxS0PYaLUaxDktagl0QtYbobdVasmj3RJQkw3XB2J5SUfWfMgrtrOM4wG9iA5hpC1J8IYF2zGJ1xxDWT1wqH0swLSPapCPDiNAZ3k7UfSTGL5npkbfejcTvkH_fE2AMbG6o0WztBVy8E_i7rs"
            alt="Architectural banner"
            className="banner-image"
          />
        </div>
      </section>

      {/* ── Clocks + Contact ── */}
      <section className="contact-info-section">
        <div className="contact-grid">
          
          {/* World clocks */}
          <div className="reveal clocks-column">
            <div className="clocks-group">
              <p className="label-text white">Where we work</p>
              <WorldClock 
                city="Mexico City" 
                timezone="America/Mexico_City" 
                subtitle="Main Office / CST" 
              />
            </div>

            <div className="clocks-group">
              <p className="label-text">Serving clients across time zones</p>
              <div className="global-clocks-list">
                {globalOffices.map((office) => (
                  <WorldClock key={office.city} {...office} />
                ))}
              </div>
            </div>
          </div>

          {/* Direct contact */}
          <div className="reveal direct-contact-column">
            <div className="email-block">
              <p className="label-text spacing-bottom">Direct channel</p>
              <a href="mailto:hello@bravvia.agency" className="contact-email-link">
                hello@bravvia.agency
              </a>
            </div>

            <div className="social-grid">
              {[
                { label: 'Instagram', handle: '@bravviaa', href: '#' },
                { label: 'LinkedIn',  handle: 'Bravvia Agency', href: '#' },
                { label: 'Facebook',  handle: 'Bravvia', href: '#' },
              ].map(({ label, handle, href }) => (
                <div key={label} className="social-item">
                  <p className="social-label">{label}</p>
                  <a href={href} className="social-link">
                    {handle}
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
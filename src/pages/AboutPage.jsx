import { useEffect } from 'react';
import { useReveal } from '../hooks/useReveal';

const pillars = [
  {
    title: 'Precision',
    text: 'Every pixel and point is considered within the context of the whole. We do not tolerate decorative noise or structural ambiguity.',
    delay: '0.1s',
  },
  {
    title: 'Intellect',
    text: 'Design is a cognitive discipline. We build brands from the foundation of rigorous strategic research and systematic thinking.',
    delay: '0.2s',
  },
  {
    title: 'Longevity',
    text: 'We build for decades, not seasons. Our aesthetic is timeless because it is rooted in universal geometry and enduring principles.',
    delay: '0.3s',
  },
  {
    title: 'Structure',
    text: 'Brands are architectural entities. We create frameworks that support growth and withstand the pressures of evolving markets.',
    delay: '0.4s',
  },
  {
    title: 'Clarity',
    text: 'We strip away the non-essential. Effective communication requires the removal of friction between the brand and the audience.',
    delay: '0.5s',
  },
  {
    title: 'Identity',
    text: "A brand's soul is its truth. We manifest this truth through visual languages that are both profound and highly functional.",
    delay: '0.6s',
  },
];

const clients = [
  { name: 'YouTube',     src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyxurEiT71wsmlA89X6ZhNvtt_WEhYZrimf2FnEB5G6mLI5iO9WUy_SPS7vGEjgkwRVytx6peJuDJ_GLpuEt67nw8G-mYr7nFx0TCLzKXToXlEc5V1Fumn62rXxnwmxS0PYaLUaxDktagl0QtYbobdVasmj3RJQkw3XB2J5SUfWfMgrtrOM4wG9iA5hpC1J8IYF2zGJ1xxDWT1wqH0swLSPapCPDiNAZ3k7UfSTGL5npkbfejcTvkH_fE2AMbG6o0WztBVy8E_i7rs' },
  { name: 'V&A',         src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQ3bRLBoVqQk4NNeY_fShy2J0s6MDGdNEuBrcia0DkxWZ30xqLtvRyc9JH3hFtgFWadod30kIPANU2rfLDUa43ROaetXGagehK9gTxxItjfRkZQCxafdRHyQMVKbuB2-OG9qKQjSi_A-PJwjmBJmYyHL_z70ctkYBdT-7sXOx7KfXk1YgcUxrGWJRfzlNA3EF6QEjWc6fzrgDQ8LuoIemthAPcAQYGjGGapzkmii3GUA_mIM-w3Uy9uYGfk_YFkB_Cc6fOpZC3wnt0' },
  { name: 'Amazon Ads',  src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBj69A07RA2dQYZHQCFdW-xi-VRgstovdXWD-Q768BsWLk1AcabOWl7tJmhUJHDviJ9zlKqoyYT1OL_J6FD-wGzLSW1I8DJpMtHQs7kOrFi1yjM-Cf6qXI89JLI1l-EJ7yLCyPutEBuji5bqNeCNJu1KE1Kp7EEqBAgZ-nAbZc2O5-xstZ6PBf4kbsIaQMavNV0XGCywd6QWy8nyIpEGBCMH_NfwS8AmNC-37-llN7U7_zhjwQlgFbyqDCTr9iMStt80fu_3uQhNquX' },
  { name: 'Meta',        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHeccEBagB3ZDYHRjm_lzk-HjhWpmNmG8L6AnMDfjFfucBsflhBXUSHctNi9TrzQSO42G3GiYMeDIPI7dpuMMH2J2OgO6sYIGD-DsZUyuVyFsPSjV7oZIha7cCygCvjMN_jfx9aqIyvyWDI2VcabvNOCQTUpukUWmv17fYTR3VMHDZqZxGpRkzKlPvNAxjhaKzYKCHH7zJoxOvdQN5MXzH4Z8lhB5T2wZd9ydoRTE_R2GwaugZCMPhkp0WpwXbrSShQTCillIEsA4i' },
  { name: 'Repsol',      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9nKu93HwPhuaPQcypM2njU4yHOgFlW-0MMETcgmI59d4QmAfDf9vcI7FaAe8tYJB0TWwNfPXBV0siTntVzncVZiv1TzPu4rak3V66FNG1DeQdy5NdkdysUMB5OCayl3ZcblScNkm4TjUovc2Ql5hvM7h6y4s4v83XhK5r7YjPokuWQdsqc5DHsh-pzgJJ1DQLHIhyjuHRym-XidVq2sBPstzzmDdw8qAwlnjhS7qUy2EOLKjB5KQbkcV4-B1rdw6-r5obHeQ2nZlX' },
  { name: 'Swisscom',    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD819bp8cOGzgvgHLCY7s2CqeZctE_NSCfDjHUmSZcXb6CNMmk1PrwmGA_WOLclbMblZVHnftD0Fv3C7xKCV-aCHkctFm6Pbq6qC59MFa6eFYqTdMvmWsGNoqLom6dmM-EedXr38-XKufosyCsEBuWRPEFqdO81jwJtLG-bwUYDNSTcG0sWpGRcsAI1XnbyphRukvzCxxLuiDcIV1NIw5bFZg9CGQAR1rZ2KYwRKKjk_E28alLN9gGUlcNqSM2_DgLaKPZOUIU7WZHJ' },
  { name: 'Skoda',       src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5RgEPLfrATGr3vNmeb1LwYPjHK6_wuvv3hrxRmvzixT3WDTGHiVWr5Ki3xUugLkyieWHwV2dmY6t87NS9kPAc2kgj4o_WatM9KjE8Ms3EfG1BLbLkBmHUjfmrQve1bFB3R1XhP-HCdUm0rBiD1RMhnKJO7O4qNbnHk9SW2ZhZg3amDy5M_GAdFtQWBRtBT5XZh9Ub38SYyA81yEHvIMvFaETEnHQjO4iov-etQ_aSQRhtydnhKWpzGQaHVQYDG0vGSFO8ZHe_J0uK' },
  { name: 'Kyocera',     src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQnpHsKf0N4HzAFN9fHAkUfKlY-DKSKqq5t5Kij0mtXP6MBrDuZSPxuedkdx_IekKfj2TsW0wCTHiP7LsaHohQyK2Sv4iFK1jM0XHyb961qw1l85vfxbncn62hFrdq6ssSpMTA_kY7wVRMe1wk9QcYj2ajSCn9KzbZiW44DOxKlYQQCAh5JIVc4Z1lCSu0Iwh1Co23kbXyzXslGYLyEbXkwEaol5hhHr-SuegJTD7m95Zr3Wy38KkhwujrpbgiVbK4wFcq2sCs3gTH' },
];

/**
 * AboutPage
 */
export default function AboutPage() {
  useReveal();

  useEffect(() => {
    document.title = 'About | Bravvia Agency';
  }, []);

  return (
    <main>
      {/* ── Hero ── */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '8rem 2rem 4rem',
        }}
      >
        <div style={{ maxWidth: '90rem', margin: '0 auto', width: '100%' }}>
          <p
            className="reveal"
            style={{
              fontSize: '0.875rem',
              fontWeight: 500,
              letterSpacing: '-0.02em',
              marginBottom: '3rem',
            }}
          >
            Our philosophy
          </p>
          <p
            className="reveal"
            style={{
              fontSize: 'clamp(1.75rem, 5vw, 3.75rem)',
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: '-0.04em',
              animationDelay: '0.2s',
            }}
          >
            We believe in radical clarity.
            <br />
            At Bravvia, we deconstruct complexity to reveal the structural
            essence of a brand. Architecture is our metaphor, precision is our
            tool.
          </p>
        </div>
      </section>

      {/* ── Banner image ── */}
      <section style={{ padding: '0 2rem', marginBottom: '8rem' }}>
        <div
          className="reveal visual-zoom"
          style={{
            aspectRatio: '21/9',
            width: '100%',
            overflow: 'hidden',
            background: '#111',
            filter: 'grayscale(1)',
          }}
        >
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbkvoZXaKrS-JTMco_8iMkkr7vX4vyHQlg2tuqvZYiabHBcsYAJ444m3Rl5xVa5WDTtePqn-KwFYvBpvacLprp1mfymlbDkUWogDQMCwzu2GO9CIIsVASvrlcmAij_5XFcvidzFtP1QkooTGqCj1sm3_qz7PJG701RUrMZO180vtVnlvWYXw0-mHNRn2POMUuDrxIbCsI_e2YClHsHR3vkLa77BQ_sDH1nrcV1ItPrhKPscw41uYLwvMKjhrKirPXmIo0FDbtSLHEw"
            alt="Architectural visual"
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
          />
        </div>
      </section>

      {/* ── Pillars ── */}
      <section style={{ padding: '8rem 2rem', background: 'black' }}>
        <div style={{ maxWidth: '90rem', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '5rem',
            }}
          >
            {pillars.map(({ title, text, delay }) => (
              <div
                key={title}
                className="reveal"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  animationDelay: delay,
                }}
              >
                <div style={{ paddingBottom: '2rem' }}>
                  <h2
                    style={{
                      fontSize: '1.125rem',
                      fontWeight: 500,
                      letterSpacing: '-0.02em',
                      textTransform: 'uppercase',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {title}
                  </h2>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>
                    {text}
                  </p>
                </div>
                <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.2)' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clients ── */}
      <section style={{ padding: '8rem 2rem', background: 'black' }}>
        <div style={{ maxWidth: '90rem', margin: '0 auto' }}>
          <h2
            className="reveal"
            style={{
              fontSize: '1.125rem',
              fontWeight: 500,
              letterSpacing: '-0.02em',
              marginBottom: '4rem',
            }}
          >
            We've worked with
          </h2>
          <div
            className="reveal"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '5rem',
              alignItems: 'center',
            }}
          >
            {clients.map(({ name, src }) => (
              <div
                key={name}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0.4,
                  transition: 'opacity 0.5s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.4)}
              >
                <img
                  src={src}
                  alt={name}
                  style={{ height: '1.5rem', filter: 'brightness(0) invert(1)', objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

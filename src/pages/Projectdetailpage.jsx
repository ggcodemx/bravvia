import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';

// ─── Data ──────────────────────────────────────────────────────────────────
// En un proyecto real esto vendría de una API usando el `slug` del URL.
// Por ahora los datos viven aquí; agregar más proyectos es tan simple
// como añadir un objeto al array.
const PROJECTS_DATA = {
  sois: {
    title: 'Bravvia.',
    label: 'Architectural Narrative / 001',
    meta: [
      { label: 'Sector',     value: 'Architecture' },
      { label: 'Discipline', value: 'Identity & Space' },
      { label: 'Year',       value: '2024' },
      { label: 'Status',     value: 'Completed' },
    ],
    challenge:
      'Bravvia demanded a digital presence that mirrored the stark, uncompromising precision of their structural designs. The primary objective was to eliminate noise and allow the purity of form to lead the experience.',
    strategy:
      'We adopted a philosophy of "Negative Space as Content." By utilizing a monochromatic palette and precise grid alignments, we created a sanctuary for high-end architectural imagery.',
    identityText:
      'A visual language built on the foundations of geometric reduction. The identity system utilizes a bespoke typeface and a strict monochromatic hierarchy to emphasize the architectural origins of the brand.',
    digitalSurfaceText:
      'Translating physical mass into digital light. The interface responds with a calculated stillness, prioritizing navigation through spatial logic rather than decorative elements.',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbkvoZXaKrS-JTMco_8iMkkr7vX4vyHQlg2tuqvZYiabHBcsYAJ444m3Rl5xVa5WDTtePqn-KwFYvBpvacLprp1mfymlbDkUWogDQMCwzu2GO9CIIsVASvrlcmAij_5XFcvidzFtP1QkooTGqCj1sm3_qz7PJG701RUrMZO180vtVnlvWYXw0-mHNRn2POMUuDrxIbCsI_e2YClHsHR3vkLa77BQ_sDH1nrcV1ItPrhKPscw41uYLwvMKjhrKirPXmIo0FDbtSLHEw',
    cinematicImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBlRT_IN4MP0DRtCChgySAigpcdDGqRrVwqQAOfGmkL8RXndnXdBXKuCGKt0uZRYAHylLcCBu1mtOe1rwffCJiXUda_cOPAmtr3lPfjVH3101uQ0Lf8hq3FXm0tchbaJow1ivAJ6COQTDp2ntdNzEICwyJUKGYPT_S2X3LIBwR1gTnSVcurEagNjsH-RtZnySjJ0k_geJBNBbayXL8lJWlKdUBX-neGqj8wt1lf7ymkxaE5pOvKcUu3C-rexEm5zz7HGIVX0-tGNKqV',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAb8NpvEckePRVIXNCd27Fa1lKpkMlg8prpXl3rnW8Fuj7s7YF7z5QA--IGuCa98QR3MUTkKfQNipTNFpGz36vdv-kxW2L_Rtg7Qge8XSgQb36-d4ZyTmrTFrThg5l6a-AAERxAVa9oZkjiOaZ04pWdtEVSPHckFn6GV6V6aWSs06kK6fzcv2KFNiyo6AoLB8Z4dBKsNcyaTdU7_80mpzwQuRcrfsLWLITFwkAdxS7uweU3z09NCiRKHPEdEKo_szQqIo2gXZc1FdQS',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBiVwdLNFd-oOLldUPIIKnpZ9MzONR69hAcyQ2N2Bu-yNbxKeEkbKqCVM8tf6eyhINiEwrGU7QFuW2PCUf-z3MJ20eSMy8lw8yZlnV7mpL9pgl5xT3ga4PCwhgiBepbsfeqENTHZN5ZFHa495PxxXEnI0k3RTk9v3k9IpZetV7PczfK0W-QMsAbwH1q3jmOrDBisqtBNP3fJBqZMBtkmuOlvGVayiym1Yda1AB7UQQoEpX_NA-ggnNvOuMXGE3ov-82-dak2xYLrxQ_',
    ],
    collageImages: [
      { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBRXrz_8fihFgew0d0yKXxMPx3DLQJnYSrMM_v7OobgQdEvVUas6ELAR8JPRy9EHKHcspQ7yaOFZzoln3X_Djsf-KcpuWlwPhv0IHAs6A1NrXiL70kb006KVJ_L1k7y98vIV8lNYnKuWAaxgpkIXG-6xTNrULb9BvR3gsuDkwWVoI02JFM85uILfmQyE2qJMpL-lHzBgaj-JSr8Q9SHmYgwhzHrRg-wDuYFAQ5vbkTS05zBvRIHR2ZHD-FcTv56mOJ6hHA8sdsA9Ke', cols: 7, offset: '' },
      { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3WMbxRIOzB-fbE4SnFkHhvAg29SeUgrbvaGjuQvNEskwzpGMrXBDrVoF0l9T3q94Os6gaj7BzlWXHWmAVEDK1JEVc8GYCP-ZL3Z6_4poPsYPWcLW81yIK25azpxShSNpTDxqoWMIS67nORXKj1N80ukbW3F-vWR_jXRV7oVv6a2vFPHGz4PBSx6jrY3EmU192w6Q8wTn13NdjG3gu_0QcdVz4EeuuFEeDGGgB5PRiHV8_NpaKhTQTaM-rx307m1z95ouHbHlSJb0M', cols: 5, offset: 'top' },
      { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbkvoZXaKrS-JTMco_8iMkkr7vX4vyHQlg2tuqvZYiabHBcsYAJ444m3Rl5xVa5WDTtePqn-KwFYvBpvacLprp1mfymlbDkUWogDQMCwzu2GO9CIIsVASvrlcmAij_5XFcvidzFtP1QkooTGqCj1sm3_qz7PJG701RUrMZO180vtVnlvWYXw0-mHNRn2POMUuDrxIbCsI_e2YClHsHR3vkLa77BQ_sDH1nrcV1ItPrhKPscw41uYLwvMKjhrKirPXmIo0FDbtSLHEw', cols: 4, offset: 'neg-top' },
      { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlRT_IN4MP0DRtCChgySAigpcdDGqRrVwqQAOfGmkL8RXndnXdBXKuCGKt0uZRYAHylLcCBu1mtOe1rwffCJiXUda_cOPAmtr3lPfjVH3101uQ0Lf8hq3FXm0tchbaJow1ivAJ6COQTDp2ntdNzEICwyJUKGYPT_S2X3LIBwR1gTnSVcurEagNjsH-RtZnySjJ0k_geJBNBbayXL8lJWlKdUBX-neGqj8wt1lf7ymkxaE5pOvKcUu3C-rexEm5zz7HGIVX0-tGNKqV', cols: 8, offset: '' },
      { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAb8NpvEckePRVIXNCd27Fa1lKpkMlg8prpXl3rnW8Fuj7s7YF7z5QA--IGuCa98QR3MUTkKfQNipTNFpGz36vdv-kxW2L_Rtg7Qge8XSgQb36-d4ZyTmrTFrThg5l6a-AAERxAVa9oZkjiOaZ04pWdtEVSPHckFn6GV6V6aWSs06kK6fzcv2KFNiyo6AoLB8Z4dBKsNcyaTdU7_80mpzwQuRcrfsLWLITFwkAdxS7uweU3z09NCiRKHPEdEKo_szQqIo2gXZc1FdQS', cols: 6, offset: 'top-mid' },
      { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiVwdLNFd-oOLldUPIIKnpZ9MzONR69hAcyQ2N2Bu-yNbxKeEkbKqCVM8tf6eyhINiEwrGU7QFuW2PCUf-z3MJ20eSMy8lw8yZlnV7mpL9pgl5xT3ga4PCwhgiBepbsfeqENTHZN5ZFHa495PxxXEnI0k3RTk9v3k9IpZetV7PczfK0W-QMsAbwH1q3jmOrDBisqtBNP3fJBqZMBtkmuOlvGVayiym1Yda1AB7UQQoEpX_NA-ggnNvOuMXGE3ov-82-dak2xYLrxQ_', cols: 6, offset: 'neg-top-big' },
    ],
    outcomeImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC-DqkG_FRRPWoF4C_LzAM-x85YTkf2-JpHUCB00x_udQ9j7HdHLmbtUpxDXfHbF4dlxfCazEpDSrq_ZGrapTQ82-TYYdosHErdgathgJTKMGdnr4bkWFsz4mLQLx2PXzc5sEjUt_TAyIU-X880ULw7Up-NShIXxsOsbqk65Sptp7SjbqFuamWD0-4ZlQneM1IKURjAXmerD7JCBsIbEsSFFu6fBRWFNbzbzaP6Vp1qg_sliLL9oCTsccTVnSXtjAZYkLzmZ_xOWTkr',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCBRXrz_8fihFgew0d0yKXxMPx3DLQJnYSrMM_v7OobgQdEvVUas6ELAR8JPRy9EHKHcspQ7yaOFZzoln3X_Djsf-KcpuWlwPhv0IHAs6A1NrXiL70kb006KVJ_L1k7y98vIV8lNYnKuWAaxgpkIXG-6xTNrULb9BvR3gsuDkwWVoI02JFM85uILfmQyE2qJMpL-lHzBgaj-JSr8Q9SHmYgwhzHrRg-wDuYFAQ5vbkTS05zBvRIHR2ZHD-FcTv56mOJ6hHA8sdsA9Ke',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB3WMbxRIOzB-fbE4SnFkHhvAg29SeUgrbvaGjuQvNEskwzpGMrXBDrVoF0l9T3q94Os6gaj7BzlWXHWmAVEDK1JEVc8GYCP-ZL3Z6_4poPsYPWcLW81yIK25azpxShSNpTDxqoWMIS67nORXKj1N80ukbW3F-vWR_jXRV7oVv6a2vFPHGz4PBSx6jrY3EmU192w6Q8wTn13NdjG3gu_0QcdVz4EeuuFEeDGGgB5PRiHV8_NpaKhTQTaM-rx307m1z95ouHbHlSJb0M',
    ],
    nextProject: { title: 'Lumina.', slug: 'lumina', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiVwdLNFd-oOLldUPIIKnpZ9MzONR69hAcyQ2N2Bu-yNbxKeEkbKqCVM8tf6eyhINiEwrGU7QFuW2PCUf-z3MJ20eSMy8lw8yZlnV7mpL9pgl5xT3ga4PCwhgiBepbsfeqENTHZN5ZFHa495PxxXEnI0k3RTk9v3k9IpZetV7PczfK0W-QMsAbwH1q3jmOrDBisqtBNP3fJBqZMBtkmuOlvGVayiym1Yda1AB7UQQoEpX_NA-ggnNvOuMXGE3ov-82-dak2xYLrxQ_' },
  },
};

// Fallback: si el slug no existe usamos el primero disponible
const getProject = (slug) => PROJECTS_DATA[slug] ?? Object.values(PROJECTS_DATA)[0];

// ─── Parallax hook ─────────────────────────────────────────────────────────
function useParallax() {
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll('[data-parallax]').forEach((el) => {
        const rect = el.parentElement.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const offset = (window.innerHeight - rect.top) * 0.15;
          el.style.transform = `translateY(${offset}px)`;
        }
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}

// ─── Sub-components ────────────────────────────────────────────────────────

/** Imagen de fondo con efecto parallax */
function ParallaxImage({ src, alt, style = {} }) {
  return (
    <div style={{ overflow: 'hidden', position: 'relative', ...style }}>
      <img
        data-parallax
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '120%',
          top: '-10%',
          position: 'absolute',
          objectFit: 'cover',
          transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1)',
        }}
      />
    </div>
  );
}

/** Bloque de texto con label tenue + párrafo */
function TextBlock({ heading, body, delay = '0s' }) {
  return (
    <div className="reveal" style={{ animationDelay: delay }}>
      <h2 style={{ fontSize: '1.125rem', fontWeight: 500, marginBottom: '2.5rem', color: 'white' }}>
        {heading}
      </h2>
      <p style={{ color: 'rgba(204,204,204,0.6)', fontSize: '1.125rem', lineHeight: 1.7, fontWeight: 300, letterSpacing: '-0.03em', maxWidth: '28rem' }}>
        {body}
      </p>
    </div>
  );
}

/** Imagen de collage con hover de opacidad */
function CollageImage({ src, alt, style = {}, delay = '0s' }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="reveal"
      style={{ animationDelay: delay, ...style }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: 'auto',
          opacity: hovered ? 0.8 : 1,
          transition: 'opacity 0.7s',
          display: 'block',
        }}
      />
    </div>
  );
}

/** Sección "Next Project" con zoom de imagen al hover */
function NextProject({ project }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      to={`/work/${project.slug}`}
      style={{ position: 'relative', height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', textDecoration: 'none', borderTop: '1px solid rgba(255,255,255,0.05)' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* BG image */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            opacity: 0.2,
            transform: hovered ? 'scale(1.1)' : 'scale(1)',
            transition: 'transform 1s ease',
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)' }} />
      </div>

      {/* Text */}
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1rem', fontWeight: 500,  marginBottom: '2.5rem' }}>
          Next Project
        </p>
        <h2
          style={{
            color: 'white',
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            fontWeight: 300,
            letterSpacing: hovered ? '-0.01em' : '-0.05em',
            transition: 'letter-spacing 0.7s',
            lineHeight: 1,
          }}
        >
          {project.title}
        </h2>
      </div>
    </Link>
  );
}

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProject(slug);

  useReveal();
  useParallax();

  useEffect(() => {
    document.title = `${project.title} | Bravvia`;
  }, [project.title]);

  return (
    <main>
      {/* ── Hero ── */}
      <section className='hero-section'
        style={{
          position: 'relative',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '0 3rem 6rem',
          overflow: 'hidden',
        }}
      >
        {/* Parallax BG */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
          <img
            data-parallax
            src={project.heroImage}
            alt={project.title}
            style={{
              width: '100%', height: '120%', top: '-10%', position: 'absolute',
              objectFit: 'cover', opacity: 0.3, transform: 'scale(1.1)',
              transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1)',
            }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #000 0%, transparent 60%)' }} />
        </div>

        {/* Content */}
        <div className="reveal" style={{ position: 'relative', zIndex: 10, maxWidth: '96rem', width: '100%', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem' }}>
            <p style={{ fontSize: '1rem',  color: 'rgba(204,204,204,0.4)', marginBottom: '1rem' }}>
              {project.label}
            </p>
            <h1 style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', fontWeight: 300, letterSpacing: '-0.05em', color: 'white', lineHeight: 1, marginBottom: '5rem' }}>
              {project.title}
            </h1>
          </div>

          {/* Meta grid */}
          <div className='meta-project' >
            {project.meta.map(({ label, value }) => (
              <div key={label}>
                <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '1rem', marginBottom: '0.75rem' }}>
                  {label}
                </p>
                <p style={{ color: 'white', fontSize: '1.05rem', fontWeight: 300 }}>
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Challenge / Strategy ── */}
      <section style={{ padding: '8rem 3rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '6rem' }}>
          <TextBlock heading="The Challenge" body={project.challenge} />
          <TextBlock heading="The Strategy" body={project.strategy} delay="0.2s" />
        </div>
      </section>

      {/* ── Cinematic images ── */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
        {/* Full width */}
        <div className="reveal" style={{ width: '100%', height: '70vh' }}>
          <ParallaxImage src={project.cinematicImages[0]} alt="Cinematic detail 1" style={{ width: '100%', height: '100%' }} />
        </div>

        {/* 2-col grid */}
        <div style={{ padding: '0 3rem' }}>
          <div style={{ maxWidth: '96rem', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            {[project.cinematicImages[1], project.cinematicImages[2]].map((src, i) => (
              <div key={i} className="reveal" style={{ animationDelay: `${i * 0.2}s`, aspectRatio: '16/9' }}>
                <ParallaxImage src={src} alt={`Cinematic detail ${i + 2}`} style={{ width: '100%', height: '100%' }} />
              </div>
            ))}
          </div>
        </div>

        {/* Full width again */}
        <div className="reveal" style={{ width: '100%', height: '70vh' }}>
          <ParallaxImage src={project.cinematicImages[0]} alt="Cinematic detail 4" style={{ width: '100%', height: '100%' }} />
        </div>
      </section>

      {/* ── Identity System ── */}
      <section style={{ padding: '8rem 3rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }} className="reveal">
          <h2 style={{ fontSize: '1.125rem', fontWeight: 500, marginBottom: '2.5rem', letterSpacing: '-0.02em' }}>
            Identity System
          </h2>
          <div style={{ height: '1px', width: '6rem', background: 'rgba(255,255,255,0.1)', margin: '0 auto 2.5rem' }} />
          <p style={{ color: 'rgba(204,204,204,0.6)', fontSize: '1.125rem', lineHeight: 1.7, fontWeight: 300, letterSpacing: '-0.03em', maxWidth: '42rem', margin: '0 auto' }}>
            {project.identityText}
          </p>
        </div>
      </section>

      {/* ── Collage asimétrico ── */}
      <section style={{ padding: '0 3rem', overflow: 'hidden' }}>
        <div style={{ maxWidth: '112rem', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2rem' }}>
          {project.collageImages.map((img, i) => {
            // Mapeamos el offset semántico a estilos reales
            const offsetMap = {
              '':            {},
              'top':         { paddingTop: '8rem' },
              'neg-top':     { marginTop: '-3rem' },
              'top-mid':     { marginTop: '3rem' },
              'neg-top-big': { marginTop: '-6rem' },
            };
            return (
              <CollageImage
                key={i}
                src={img.src}
                alt={`Collage ${i + 1}`}
                delay={`${(i % 3) * 0.1}s`}
                style={{ gridColumn: `span ${img.cols}`, ...offsetMap[img.offset] }}
              />
            );
          })}
        </div>
      </section>

      {/* ── Digital Surface ── */}
      <section style={{ padding: '8rem 3rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'baseline', gap: '3rem' }} className="reveal">
          <h2 style={{ fontSize: '1.125rem', fontWeight: 500, letterSpacing: '-0.02em' }}>Digital Surface</h2>
          <p style={{ color: 'rgba(204,204,204,0.6)', fontSize: '1.125rem', lineHeight: 1.7, fontWeight: 300, letterSpacing: '-0.03em', maxWidth: '36rem' }}>
            {project.digitalSurfaceText}
          </p>
        </div>
      </section>

      {/* ── Outcomes ── */}
      <section style={{ padding: '0 3rem 16rem' }}>
        <div style={{ maxWidth: '96rem', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {/* Full width outcome */}
          <div className="reveal">
            <img src={project.outcomeImages[0]} alt="Outcome 1" style={{ width: '100%', display: 'block' }} />
          </div>
          {/* 2-col outcomes */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            {project.outcomeImages.slice(1).map((src, i) => (
              <div key={i} className="reveal" style={{ animationDelay: `${(i + 1) * 0.2}s` }}>
                <img src={src} alt={`Outcome ${i + 2}`} style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Next Project ── */}
      <NextProject project={project.nextProject} />
    </main>
  );
}
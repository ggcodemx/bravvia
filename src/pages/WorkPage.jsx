import { useEffect } from 'react';
import { useReveal } from '../hooks/useReveal';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data';

/**
 * WorkPage
 * Grid-based portfolio with staggered project layouts.
 */
export default function WorkPage() {
  useReveal();

  useEffect(() => {
    document.title = 'Work | Bravvia Agency';
  }, []);

  return (
    <main style={{ paddingTop: '15rem', paddingBottom: '8rem' }}>
      {/* Page heading */}
      <section style={{ padding: '0 12rem', marginBottom: '10rem' }}>
        <h2
          className="reveal"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 300,
            letterSpacing: '-0.05em',
            lineHeight: 0.95,
          }}
        >
          Brave work for brave companies.
          
        </h2>
      </section>

      {/* Projects */}
      <section style={{ padding: '0 12rem', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        {/* Full-width row */}
        <div className="reveal">
          <ProjectCard project={projects[0]} aspect="21/9" />
        </div>

        {/* 6/4 grid row */}
        <div
          className="reveal"
          style={{ display: 'grid', gridTemplateColumns: '6fr 4fr', gap: '4rem', alignItems: 'end' }}
        >
          <ProjectCard project={projects[1]} aspect="16/15" />
          <ProjectCard project={projects[2]} aspect="4/5" />
        </div>

        {/* Full-width row */}
        <div className="reveal">
          <ProjectCard project={projects[3]} aspect="21/9" />
        </div>

        {/* 4/6 grid row */}
        <div
          className="reveal"
          style={{ display: 'grid', gridTemplateColumns: '4fr 6fr', gap: '4rem', alignItems: 'end' }}
        >
          <ProjectCard project={projects[4]} aspect="4/5" />
          <ProjectCard project={projects[5]} aspect="4/4" />
        </div>
      </section>
    </main>
  );
}

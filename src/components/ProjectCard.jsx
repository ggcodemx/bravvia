import { useRef } from 'react';
import { Link } from 'react-router-dom';

/**
 * ProjectCard
 * Displays a project image with hover scale + optional click bubble.
 *
 * Props:
 *   project  – project data object
 *   aspect   – CSS aspect-ratio string, e.g. "21/9" | "16/15" | "4/5"
 *   showMeta – show title/category/year below the image (default true)
 */
export default function ProjectCard({ project, aspect = '21/9', showMeta = true }) {
  const bubbleRef = useRef(null);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const bubble = bubbleRef.current;
    const container = containerRef.current;
    if (!bubble || !container) return;

    const rect = container.getBoundingClientRect();
    bubble.style.left = `${e.clientX - rect.left}px`;
    bubble.style.top  = `${e.clientY - rect.top}px`;
  };

  const imageContent = (
    <div
      ref={containerRef}
      className="project-image-container"
      onMouseMove={handleMouseMove}
      style={{
        aspectRatio: aspect,
        background: '#18181b',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="project-image"
        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.85)' }}
      />
      {/* Click bubble */}
      <div ref={bubbleRef} className="click-bubble">
        VIEW
      </div>
    </div>
  );

  return (
    <div style={{ cursor: 'none' }}>
      {project.link ? (
        <Link to={project.link} style={{ display: 'block', textDecoration: 'none' }}>
          {imageContent}
        </Link>
      ) : (
        imageContent
      )}

      {showMeta && (
        <div
          style={{
            marginTop: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          <div>
            <h2
              style={{
                fontSize: '2rem',
                fontWeight: 300,
                letterSpacing: '-0.04em',
                lineHeight: 1,
                marginBottom: '0.5rem',
                color: 'white',
              }}
            >
              {project.title}
            </h2>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)' }}>
              {project.category}
            </p>
          </div>
          {project.year && (
            <span style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)' }}>
              {project.year}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

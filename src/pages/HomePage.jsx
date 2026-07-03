import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import ProjectCard from '../components/ProjectCard';
import NewsCard from '../components/NewsCard';
import { projects, news } from '../data';
import videoFondo from '../media/fondo.jpg';


export default function HomePage() {
  useReveal();

  useEffect(() => {
    document.title = 'Bravvia Agency | Global Branding';
  }, []);

  return (
    <>
      {/* ── Hero ── */}
      <main className="hero-section">
        <img src={videoFondo} alt="Hero background" className="hero-video" />
        <div className="hero-overlay" />

        <div className="hero-tagline-container">
          <h2 className="hero-tagline">
          Built by the brave. Built for the brave.
          </h2>
        </div>
      </main>

      {/* ── Brand statement ── */}
      <section className="brand-statement">
        <div className="statement-container">
          <h2 className="reveal statement-text">
            We are an independent brand consultancy. Our work is built for the companies that move first, define their own terms, and know that brand is the bridge between how a business thinks and how the world receives it.
          </h2>
        </div>
      </section>

      {/* ── Projects scroll ── */}
      <section className="projects-scroll">
        <div className="projects-container">
          {projects.map((project, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={project.id} className={`reveal project-row ${isEven ? 'even' : 'odd'}`}>
                {/* Text */}
                <div className="project-info">
                  <h2 className="project-title-text">{project.title}</h2>
                  <h3 className="project-brand-type">{project.type}</h3>
                  <p className="project-description-text">{project.description}</p>
                </div>

                {/* Image */}
                <div className="project-media">
                  <ProjectCard project={project} aspect="16/10" showMeta={false} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── News Section ── */}
      <section className="home-news">
        <div className="news-container">
          <h2 className="reveal news-label">
            Insights&nbsp;&nbsp;•&nbsp;&nbsp;News&nbsp;&nbsp;•&nbsp;&nbsp;Press
          </h2>

          <div className="news-home-grid">
            {news.slice(0, 6).map((item) => (
              <div key={item.id} className="news-item-wrapper">
                <NewsCard item={item} />
              </div>
            ))}
          </div>

          <div className="news-footer">
            <Link to="/news" className="all-news-link">
              All news →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
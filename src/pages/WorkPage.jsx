import { useEffect } from 'react';
import { useReveal } from '../hooks/useReveal';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data';
import '../styles/work.css';

export default function WorkPage() {
  useReveal();

  useEffect(() => {
    document.title = 'Work | Bravvia Agency';
  }, []);

  return (
    <main className="work-page">
      <section className="work-header">
        <h2 className="reveal work-title">
          Brave work for brave companies.
        </h2>
      </section>

      <section className="work-container">
        <div className="reveal full-row">
          <ProjectCard project={projects[0]} aspect="21/9" />
        </div>

        <div className="reveal grid-64">
          <ProjectCard project={projects[1]} aspect="16/15" />
          <ProjectCard project={projects[2]} aspect="4/5" />
        </div>

        <div className="reveal full-row">
          <ProjectCard project={projects[3]} aspect="21/9" />
        </div>

        <div className="reveal grid-46">
          <ProjectCard project={projects[4]} aspect="4/5" />
          <ProjectCard project={projects[5]} aspect="4/4" />
        </div>
      </section>
    </main>
  );
}
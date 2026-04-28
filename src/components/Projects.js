import { useInView } from '../hooks/useInView';
import { projects } from '../data/portfolioData';

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView(0.08);

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="card" style={{ padding: 0, overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* Image */}
        <div style={{ position: 'relative', height: 190, overflow: 'hidden', background: 'var(--surface)', flexShrink: 0 }}>
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', transition: 'transform 0.4s ease', padding: 20 }}
              onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.target.style.transform = 'scale(1)'}
            />
          ) : (
            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--surface)' }}>
              <svg width="40" height="40" fill="none" stroke="var(--border-hi)" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}
          {/* Company chip */}
          <div style={{
            position: 'absolute', bottom: 12, left: 14,
            background: 'rgba(255,248,238,0.88)', backdropFilter: 'blur(8px)',
            border: '1px solid var(--border)', borderRadius: 100,
            padding: '4px 11px', fontSize: '0.7rem', fontWeight: 600, color: 'var(--text-2)',
          }}>
            {project.company}
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: '20px 22px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-1)', marginBottom: 8 }}>
            {project.title}
          </h3>
          <p style={{ fontSize: '0.84rem', color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 16, flex: 1 }}>
            {project.description}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {project.tech.map(t => (
              <span key={t} className="badge" style={{ fontSize: '0.7rem' }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView();

  return (
    <section id="projects" className="section-wrap">
      <div className="section-inner">
        <div ref={ref} className={`reveal ${inView ? 'visible' : ''}`}>
          <span className="label">Projects</span>
          <h2 className="heading-lg" style={{ marginBottom: 12 }}>Selected work</h2>
          <p className="subtext" style={{ marginBottom: 48 }}>
            Key projects delivered throughout my career — enterprise systems, integrations, and platforms.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 22 }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

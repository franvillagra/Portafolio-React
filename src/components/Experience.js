import { useInView } from '../hooks/useInView';
import { experiences } from '../data/portfolioData';

function ExperienceCard({ exp, index }) {
  const [ref, inView] = useInView(0.08);

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      {/* Timeline dot + card row */}
      <div style={{ display: 'flex', gap: 0, marginBottom: 24 }}>

        {/* Dot + line */}
        <div className="hidden md:flex" style={{ flexDirection: 'column', alignItems: 'center', width: 48, flexShrink: 0, paddingTop: 20 }}>
          <div style={{
            width: 12, height: 12, borderRadius: '50%',
            background: 'var(--accent)', border: '3px solid var(--bg)',
            boxShadow: '0 0 0 2px var(--accent-dim)',
            flexShrink: 0,
          }} />
          <div style={{ flex: 1, width: 1, background: 'var(--border)', marginTop: 6 }} />
        </div>

        {/* Card */}
        <div className="card" style={{ flex: 1, marginLeft: 0 }}>
          {/* Card header */}
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, marginBottom: 16, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              {/* Logo */}
              <div style={{
                width: 52, height: 52, borderRadius: 12,
               border: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                overflow: 'hidden', flexShrink: 0,
              }}>
                {exp.logo ? (
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    style={{ width: 44, height: 44, objectFit: 'contain' }}
                    onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
                  />
                ) : null}
                <span style={{ display: 'none', fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent)' }}>
                  {exp.company.slice(0, 2).toUpperCase()}
                </span>
              </div>

              <div>
                <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-1)', lineHeight: 1.3 }}>
                  {exp.company}
                  {exp.client && (
                    <span style={{ fontWeight: 400, color: 'var(--text-3)', fontSize: '0.88rem' }}> · {exp.client}</span>
                  )}
                </div>
                <div style={{ fontWeight: 500, fontSize: '0.85rem', color: 'var(--accent)', marginTop: 2 }}>
                  {exp.role}
                </div>
              </div>
            </div>

           {/*  { Period }
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 500, color: 'var(--text-2)' }}>{exp.period}</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-3)', marginTop: 2 }}>{exp.duration}</div>
            </div> */}
          </div>

          {/* Highlights */}
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px', display: 'flex', flexDirection: 'column', gap: 7 }}>
            {exp.highlights.map((h, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.875rem', color: 'var(--text-2)' }}>
                <svg width="14" height="14" fill="none" stroke="var(--accent)" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: 3 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                {h}
              </li>
            ))}
          </ul>

          {/* Tech badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, paddingTop: 14, borderTop: '1px solid var(--border)' }}>
            {exp.tech.map(t => (
              <span key={t} className="badge">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const [ref, inView] = useInView();

  return (
    <section id="experience" className="section-wrap-alt">
      <div className="section-inner">
        <div ref={ref} className={`reveal ${inView ? 'visible' : ''}`}>
          <span className="label">Experience</span>
          <h2 className="heading-lg" style={{ marginBottom: 12 }}>Professional journey</h2>
          <p className="subtext" style={{ marginBottom: 52 }}>
            7+ years across enterprise software — from BI and legacy migrations to microservices and cloud.
          </p>
        </div>

        {/* Timeline wrapper */}
        <div style={{ paddingLeft: 0 }}>
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

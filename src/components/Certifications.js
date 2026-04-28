import { useInView } from '../hooks/useInView';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  const [ref, inView] = useInView();

  return (
    <section id="certifications" className="section-wrap-alt">
      <div className="section-inner">
        <div ref={ref} className={`reveal ${inView ? 'visible' : ''}`}>
          <span className="label">Credentials</span>
          <h2 className="heading-lg" style={{ marginBottom: 12 }}>Education &amp; Certifications</h2>
          <p className="subtext" style={{ marginBottom: 48 }}>
            Formal engineering degree complemented by continuous learning and industry certifications.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
            {certifications.map((cert, i) => (
              <div key={i} className="card" style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                {/* Icon / Logo */}
                <div style={{
                  width: 48, height: 48, borderRadius: 12, flexShrink: 0,
                  
                  display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
                }}>
                  {cert.logo ? (
                    <img
                      src={cert.logo}
                      alt={cert.institution}
                      style={{ width: 40, height: 40, objectFit: 'contain', filter: 'brightness(1.1)' }}
                    />
                  ) : (
                    <svg width="22" height="22" fill="none" stroke="var(--accent)" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )}
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8, flexWrap: 'wrap', marginBottom: 4 }}>
                    <h3 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-1)', lineHeight: 1.35 }}>
                      {cert.title}
                    </h3>
                    <span style={{
                      flexShrink: 0, fontSize: '0.68rem', fontWeight: 600, padding: '2px 9px',
                      borderRadius: 100,
                      background: cert.status === 'completed' ? 'rgba(110,231,183,0.1)' : 'rgba(252,211,77,0.1)',
                      border: `1px solid ${cert.status === 'completed' ? 'rgba(110,231,183,0.25)' : 'rgba(252,211,77,0.25)'}`,
                      color: cert.status === 'completed' ? '#6ee7b7' : '#fcd34d',
                    }}>
                      {cert.status === 'completed' ? 'Completed' : 'In Progress'}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-2)', margin: 0 }}>{cert.institution}</p>
                  <p style={{ fontSize: '0.72rem', color: 'var(--text-3)', margin: '2px 0 0' }}>{cert.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

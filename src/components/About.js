import { useInView } from '../hooks/useInView';

const stats = [
  { value: '7+',  label: 'Years of experience'  },
  { value: '5',   label: 'Companies worked with' },
  { value: '15+', label: 'Technologies in prod'  },
  { value: '∞',   label: 'Lines of C# written'   },
];

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" className="section-wrap-alt">
      <div className="section-inner">
        <div ref={ref} className={`reveal ${inView ? 'visible' : ''}`}>
          <span className="label">About</span>
          <h2 className="heading-lg" style={{ marginBottom: 40 }}>
            Backend-first engineer.<br />
            <span style={{ color: 'var(--accent)' }}>Delivery-focused mindset.</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 48 }}>
            {/* Bio */}
            <div>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--text-2)', marginBottom: 16 }}>
                I'm a <strong style={{ color: 'var(--text-1)', fontWeight: 600 }}>Systems Engineer</strong> graduated
                from Universidad Tecnológica Nacional (UTN, 2021), based in Córdoba, Argentina.
                Over 7 years I've built and maintained enterprise applications, REST APIs, integrations,
                and data platforms across telecom, logistics, and business intelligence.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--text-2)', marginBottom: 16 }}>
                My core stack is <strong style={{ color: 'var(--text-1)', fontWeight: 600 }}>.NET / C#</strong> on
                the backend, with solid SQL skills (SQL Server, Oracle, PostgreSQL) and hands-on experience
                shipping containerized services with Docker and Kubernetes.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--text-2)', marginBottom: 28 }}>
                Currently deepening expertise in <strong style={{ color: 'var(--text-1)', fontWeight: 600 }}>Azure</strong>,{' '}
                AI solutions, and DevOps automation. I communicate comfortably in English and thrive in agile, remote-first teams.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                <a
                  href="https://www.linkedin.com/in/francisco-villagra"
                  target="_blank" rel="noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: '0.85rem', fontWeight: 500, color: 'var(--accent)', textDecoration: 'none' }}
                >
                  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn Profile
                </a>
                <span style={{ color: 'var(--border-hi)' }}>·</span>
                <a
                  href="mailto:fran96villagra@gmail.com"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: '0.85rem', fontWeight: 500, color: 'var(--accent)', textDecoration: 'none' }}
                >
                  <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  fran96villagra@gmail.com
                </a>
              </div>
            </div>

            {/* Stats grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {stats.map(({ value, label }) => (
                <div key={label} className="card" style={{ textAlign: 'center', padding: '28px 16px' }}>
                  <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--accent)', letterSpacing: '-0.03em', marginBottom: 6 }}>
                    {value}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-3)', fontWeight: 500, lineHeight: 1.4 }}>
                    {label}
                  </div>
                </div>
              ))}

              {/* Location */}
              <div className="card" style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10, background: 'rgba(217,119,6,0.08)',
                  border: '1px solid rgba(217,119,6,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <svg width="18" height="18" fill="none" stroke="var(--accent)" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-1)', justifySelf: 'center' }}>Córdoba, Argentina</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-3)', marginTop: 2 }}>Open to remote opportunities worldwide</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

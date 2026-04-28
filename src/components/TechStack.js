import { useInView } from '../hooks/useInView';
import { techStack } from '../data/portfolioData';

const accentMap = {
  blue:    { dot: '#2563EB', badge: 'rgba(37,99,235,0.07)',   border: 'rgba(37,99,235,0.2)',   text: '#1D4ED8' },
  cyan:    { dot: '#0891B2', badge: 'rgba(8,145,178,0.07)',   border: 'rgba(8,145,178,0.2)',   text: '#0E7490' },
  emerald: { dot: '#059669', badge: 'rgba(5,150,105,0.07)',   border: 'rgba(5,150,105,0.2)',   text: '#047857' },
  violet:  { dot: '#7C3AED', badge: 'rgba(124,58,237,0.07)',  border: 'rgba(124,58,237,0.2)',  text: '#6D28D9' },
  amber:   { dot: '#D97706', badge: 'rgba(217,119,6,0.08)',   border: 'rgba(217,119,6,0.22)',  text: '#B45309' },
  rose:    { dot: '#DC2626', badge: 'rgba(220,38,38,0.07)',   border: 'rgba(220,38,38,0.2)',   text: '#B91C1C' },
};

export default function TechStack() {
  const [ref, inView] = useInView();

  return (
    <section id="stack" className="section-wrap">
      <div className="section-inner">
        <div ref={ref} className={`reveal ${inView ? 'visible' : ''}`}>
          <span className="label">Tech Stack</span>
          <h2 className="heading-lg" style={{ marginBottom: 12 }}>Tools I work with daily</h2>
          <p className="subtext" style={{ marginBottom: 48 }}>
            Technologies used in production across enterprise systems, APIs, and scalable services.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 18 }}>
            {techStack.map(({ category, color, items }) => {
              const c = accentMap[color];
              return (
                <div key={category} className="card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: c.dot, flexShrink: 0 }} />
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c.text }}>
                      {category}
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                    {items.map(item => (
                      <span
                        key={item}
                        style={{
                          padding: '4px 11px', fontSize: '0.75rem', fontWeight: 500,
                          borderRadius: 100, background: c.badge, border: `1px solid ${c.border}`,
                          color: c.text,
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

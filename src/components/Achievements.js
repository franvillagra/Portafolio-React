import { useInView } from '../hooks/useInView';

const achievements = [
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: 'amber',
    title: 'Process Automation',
    description:
      'Designed and implemented automated batch processing pipelines reducing manual intervention by over 80% in critical telecom billing and porting workflows. Leveraged Hangfire, RabbitMQ, and custom schedulers to orchestrate complex multi-step jobs.',
    tags: ['Hangfire', 'RabbitMQ', 'Batch Processing', 'Workflow Automation'],
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: 'blue',
    title: 'Performance Optimization',
    description:
      'Identified and resolved critical bottlenecks across SQL Server and Oracle databases, reducing query response times significantly. Implemented caching layers with Redis and optimized microservice communication patterns to improve overall system throughput.',
    tags: ['SQL Tuning', 'Redis Caching', 'Oracle', 'Profiling'],
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    color: 'emerald',
    title: 'Legacy System Migrations',
    description:
      'Led full Java-to-.NET migration for an IoT fleet management platform, modernizing architecture and improving maintainability. Also migrated a VB.NET monolith to .NET Core — reducing deployment complexity and enabling CI/CD adoption.',
    tags: ['.NET Migration', 'Refactoring', 'Docker', 'CI/CD'],
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    color: 'violet',
    title: 'Microservices & Integrations',
    description:
      'Designed and maintained event-driven microservices architectures for large-scale telecom systems. Built reliable REST and messaging integrations using RabbitMQ, Elasticsearch, and Kong API Gateway serving millions of operations monthly.',
    tags: ['Microservices', 'Kong Gateway', 'Elasticsearch', 'REST APIs'],
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    color: 'rose',
    title: 'Business Intelligence & ETL',
    description:
      'Built enterprise data warehouses and end-to-end ETL pipelines with Pentaho, enabling real-time BI dashboards and data-driven reporting for agribusiness and logistics clients. Transformed raw transactional data into actionable insights.',
    tags: ['ETL', 'Pentaho', 'Data Warehouse', 'BI Dashboards'],
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: 'cyan',
    title: 'DevOps & CI/CD Automation',
    description:
      'Containerized services with Docker and Kubernetes, reducing environment inconsistencies and deployment friction. Set up Jenkins and GitHub Actions pipelines that cut manual deployment effort and improved release confidence across teams.',
    tags: ['Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions'],
  },
];

const colorMap = {
  amber:   { bg: 'rgba(217,119,6,0.08)',   border: 'rgba(217,119,6,0.2)',   text: '#B45309' },
  blue:    { bg: 'rgba(37,99,235,0.07)',    border: 'rgba(37,99,235,0.2)',   text: '#1D4ED8' },
  emerald: { bg: 'rgba(5,150,105,0.07)',    border: 'rgba(5,150,105,0.2)',   text: '#047857' },
  violet:  { bg: 'rgba(124,58,237,0.07)',   border: 'rgba(124,58,237,0.2)',  text: '#6D28D9' },
  rose:    { bg: 'rgba(220,38,38,0.07)',    border: 'rgba(220,38,38,0.2)',   text: '#B91C1C' },
  cyan:    { bg: 'rgba(8,145,178,0.07)',    border: 'rgba(8,145,178,0.2)',   text: '#0E7490' },
};

function AchievementCard({ item, index }) {
  const [ref, inView] = useInView(0.08);
  const c = colorMap[item.color];

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 16 }}>
        {/* Icon */}
        <div style={{
          width: 46, height: 46, borderRadius: 12, flexShrink: 0,
          background: c.bg, border: `1px solid ${c.border}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: c.text,
        }}>
          {item.icon}
        </div>

        {/* Content */}
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-1)', marginBottom: 10, lineHeight: 1.3 }}>
            {item.title}
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-2)', lineHeight: 1.75, margin: 0 }}>
            {item.description}
          </p>
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, paddingTop: 14, borderTop: '1px solid var(--border)' }}>
          {item.tags.map(tag => (
            <span
              key={tag}
              style={{
                padding: '3px 10px', fontSize: '0.7rem', fontWeight: 500,
                borderRadius: 100, background: c.bg, border: `1px solid ${c.border}`,
                color: c.text,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Achievements() {
  const [ref, inView] = useInView();

  return (
    <section id="impact" className="section-wrap">
      <div className="section-inner">
        <div ref={ref} className={`reveal ${inView ? 'visible' : ''}`}>
          <span className="label">Impact</span>
          <h2 className="heading-lg" style={{ marginBottom: 12 }}>
            Key achievements &amp; areas of impact
          </h2>
          <p className="subtext" style={{ marginBottom: 52 }}>
            Beyond day-to-day development — how I've driven measurable improvements in performance,
            reliability, and delivery across enterprise environments.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
          {achievements.map((item, i) => (
            <AchievementCard key={item.title} item={item} index={i} />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div
          ref={ref}
          className={`reveal ${inView ? 'visible' : ''}`}
          style={{ marginTop: 56 }}
        >
          <div style={{
            background: 'linear-gradient(135deg, #FFF8EE 0%, #FFE1AE 100%)',
            border: '1px solid var(--border-hi)',
            borderRadius: 16,
            padding: '36px 40px',
            display: 'flex', flexWrap: 'wrap', alignItems: 'center',
            justifyContent: 'space-between', gap: 24,
          }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-1)', marginBottom: 6 }}>
                Looking for a developer who delivers?
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-2)', margin: 0, maxWidth: 480 }}>
                I bring a pragmatic, delivery-focused mindset to every project — from architecture decisions
                to production deployment.
              </p>
            </div>
            <a href="#contact" className="btn-accent" style={{ whiteSpace: 'nowrap' }}>
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              Let's talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

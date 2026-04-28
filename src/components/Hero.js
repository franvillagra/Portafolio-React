import { useState, useEffect } from 'react';

const ROLES = [
  'Senior .NET Backend Developer',
  'Full Stack Engineer',
  'Enterprise API Architect',
  'Cloud & DevOps Practitioner',
];

function TypingText() {
  const [idx, setIdx]         = useState(0);
  const [text, setText]       = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[idx];
    let t;
    if (!deleting && text.length < current.length) {
      t = setTimeout(() => setText(current.slice(0, text.length + 1)), 55);
    } else if (!deleting && text.length === current.length) {
      t = setTimeout(() => setDeleting(true), 2400);
    } else if (deleting && text.length > 0) {
      t = setTimeout(() => setText(current.slice(0, text.length - 1)), 30);
    } else {
      setDeleting(false);
      setIdx(i => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(t);
  }, [text, deleting, idx]);

  return (
    <span style={{ color: 'var(--accent)' }}>
      {text}
      <span className="animate-blink" style={{ color: 'var(--accent)', marginLeft: 2 }}>|</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(160deg, #FFF8EE 55%, #FFE1AE 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle radial glow */}
      <div style={{
        position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)',
        width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(217,119,6,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ textAlign: 'center', padding: '0 32px', position: 'relative', zIndex: 1, maxWidth: 760, margin: '0 auto' }}>

        {/* Status pill */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,

          borderRadius: 100, padding: '6px 16px',
          marginBottom: 32, fontSize: '0.78rem', fontWeight: 500,
          color: 'var(--accent)',
        }}>
         
        </div>

        {/* Name */}
        <h1 style={{
          fontSize: 'clamp(3rem, 8vw, 5.5rem)',
          fontWeight: 900, letterSpacing: '-0.04em',
          color: 'var(--text-1)', lineHeight: 1.0, marginBottom: 4,
        }}>
          Francisco
        </h1>
        <h1 style={{
          fontSize: 'clamp(3rem, 8vw, 5.5rem)',
          fontWeight: 900, letterSpacing: '-0.04em',
          color: 'var(--accent)', lineHeight: 1.0, marginBottom: 28,
        }}>
          Villagra
        </h1>

        {/* Typing role */}
        <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)', fontWeight: 500, color: 'var(--text-1)', minHeight: 36, marginBottom: 18 }}>
          <TypingText />
        </p>

        {/* Tagline */}
        <p style={{ fontSize: '1rem', color: 'var(--text-2)', maxWidth: 520, margin: '0 auto 40px', lineHeight: 1.75 }}>
          7+ years delivering enterprise backends, APIs, and scalable solutions.
          Deep expertise in .NET, SQL, Docker and cloud-native architecture.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
          <a href="#contact" className="btn-accent">
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get in Touch
          </a>
          <a href="#experience" className="btn-ghost">
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            View Experience
          </a>
          <a
            href="https://drive.google.com/file/d/1F3TiJ5I-bm0hdzUBa8JxzQ8n-W6SMeBc/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CV
          </a>
        </div>

        {/* Scroll cue */}
        <div style={{ marginTop: 72 }}>
          <a href="#about" style={{ color: 'var(--text-3)' }}>
            <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              style={{ display: 'inline-block', animation: 'bounce 2s infinite' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>

      <style>{`@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(6px)}}`}</style>
    </section>
  );
}

import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'About',      href: '#about'      },
  { label: 'Stack',      href: '#stack'       },
  { label: 'Experience', href: '#experience'  },
  { label: 'Projects',   href: '#projects'    },
    { label: 'Education',   href: '#certifications'    },
      { label: 'Impact',   href: '#impact'    },
  { label: 'Contact',    href: '#contact'     },
];

export default function NavBar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999,
        transition: 'background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
        background: scrolled ? 'rgba(255,248,238,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.06)' : 'none',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Brand */}
        <a href="#hero" style={{ display: 'flex', alignItems: 'baseline', gap: 2, textDecoration: 'none' }}>
          <span style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--text-1)', letterSpacing: '-0.03em' }}>
            Francisco
          </span>
          <span style={{ fontWeight: 500, fontSize: '1.05rem', color: 'var(--accent)', letterSpacing: '-0.03em', marginLeft: 5 }}>
            Villagra
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex" style={{ alignItems: 'center', gap: 32 }}>
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-2)', transition: 'color 0.15s' }}
              onMouseEnter={e => e.target.style.color = 'var(--text-1)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-2)'}
            >
              {label}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1F3TiJ5I-bm0hdzUBa8JxzQ8n-W6SMeBc/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="btn-accent"
            style={{ padding: '8px 18px', fontSize: '0.82rem' }}
          >
            CV
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-2)', padding: 4 }}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: 'rgba(255,248,238,0.97)', borderTop: '1px solid var(--border)', padding: '12px 32px 20px' }}>
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{ display: 'block', padding: '12px 0', fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-2)', borderBottom: '1px solid var(--border)' }}
            >
              {label}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1F3TiJ5I-bm0hdzUBa8JxzQ8n-W6SMeBc/view?usp=drive_linkg"
            target="_blank"
            rel="noreferrer"
            className="btn-accent"
            style={{ marginTop: 16, width: '100%', justifyContent: 'center' }}
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
}

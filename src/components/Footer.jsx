import React from 'react';
import { Link } from 'react-router-dom';


const footerSections = [
  {
    heading: 'Bravvia',
    links: [
      { label: 'Home', to: '/' },
      { label: 'About', to: '/about' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    heading: 'Studio',
    links: [
      { label: 'Work', to: '/work' },
      { label: 'News', to: '/news' },
    ],
  },
];

const socialLinks = [
  { label: 'LinkedIn', url: 'https://linkedin.com/in/tu-perfil' },
  { label: 'Instagram', url: 'https://instagram.com/tu-usuario' },
  { label: 'Privacy policy', url: '/privacy' },
];

export default function Footer() {
  return (
    <>
      <footer className="main-footer">
        {/* Capas de textura */}
        <div className="footer-texture" />
        <div className="footer-radial-overlay">
          <div className="radial-circle" />
        </div>

        <div className="footer-container">
          <div className="footer-grid">
            {/* Columna de Marca */}
            <div className="brand-column">
              <p className="brand-description">
                Brand strategy and identity for companies ready to take a position. Built for the brave.
              </p>
            </div>

            {/* Columnas de Navegación */}
            {footerSections.map(({ heading, links }) => (
              <div key={heading} className="nav-column">
                <h4 className="column-title">{heading}</h4>
                <ul className="nav-list">
                  {links.map(({ label, to }) => (
                    <li key={label}>
                      <Link to={to} className="nav-link">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Columna de Contacto */}
            <div className="contact-column">
              <h4 className="column-title">Initiate</h4>
              <a href="mailto:hello@bravvia.agency" className="contact-email">
                hello@bravviaa.com
              </a>
              <div className="social-links">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Rótulo gigante amarillo */}
      <div className="logo-yellow-section">
        <Link to="/" className="big-logo-link" data-cursor-hover>
          <h4 className="big-logo-text">Bravvia</h4>
        </Link>
      </div>
    </>
  );
}
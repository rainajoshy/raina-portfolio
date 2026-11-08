import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <p className="footer-brand">Raina<span>.</span></p>
      <p>B.Tech Computer Science student · Learning, building and growing.</p>
      <div className="footer-links">
        <Link to="/">Home</Link><Link to="/about">About</Link><Link to="/contact">Contact</Link>
      </div>
      <small>© {new Date().getFullYear()} Raina. All rights reserved.</small>
    </footer>
  );
}

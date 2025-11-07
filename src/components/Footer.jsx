import React from 'react';
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-white border-t border-white/10 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/hnz.com_"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition"
            aria-label="Instagram"
          >
            <Instagram size={18} />
            <span>@hnz.com_</span>
          </a>
        </div>

        <div className="text-center md:text-right text-white/60 text-sm">
          <p>© 2025 Hanzzz — Motorsport & Aviation Visuals</p>
          <p>Crafted with precision and passion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

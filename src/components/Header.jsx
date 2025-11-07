import React from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#stories', label: 'Stories' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header id="home" className="w-full fixed top-0 left-0 z-30 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex flex-col leading-tight">
          <span className="text-2xl sm:text-3xl font-medium tracking-tight text-white">Hanzzz<span className="text-blue-500">.</span></span>
          <span className="text-[11px] sm:text-xs text-white/70">Motorsport & Aviation Visual Journal</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white/80 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-white/10 text-white/80">
          <Menu size={18} />
        </button>
      </div>
    </header>
  );
};

export default Header;

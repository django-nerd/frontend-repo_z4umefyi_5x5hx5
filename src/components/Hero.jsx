import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const handleExplore = (e) => {
    e.preventDefault();
    const el = document.querySelector('#gallery');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-40 pb-24 text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white">Hanzzz</h1>
        <p className="mt-3 text-lg sm:text-xl text-white/80">Motorsport & Aviation Enthusiast</p>
        <p className="mt-4 max-w-3xl mx-auto text-white/70 italic">
          “Capturing the beauty of machines built for speed, precision, and purpose.”
        </p>
        <div className="mt-10">
          <a
            href="#gallery"
            onClick={handleExplore}
            className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-lg shadow-blue-600/30 transition"
          >
            Explore My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

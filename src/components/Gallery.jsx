import React from 'react';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2069&auto=format&fit=crop',
    alt: 'Race car in motion',
  },
  {
    src: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop',
    alt: 'Aircraft silhouette',
  },
  {
    src: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1935&auto=format&fit=crop',
    alt: 'Cockpit detail',
  },
  {
    src: 'https://images.unsplash.com/photo-1590925761990-a2052e55c2da?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDb2NrcGl0JTIwZGV0YWlsfGVufDB8MHx8fDE3NjI1MDU2NDh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Track day moment',
  },
  {
    src: 'https://images.unsplash.com/photo-1519558260268-cde7e03a0152?q=80&w=2070&auto=format&fit=crop',
    alt: 'Aviation ramp at dawn',
  },
  {
    src: 'https://images.unsplash.com/photo-1511300636408-a63a89df3482?q=80&w=2069&auto=format&fit=crop',
    alt: 'Carbon fiber detail',
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="relative bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Gallery</h2>
          <p className="mt-2 text-white/70">A selection of my favorite captures — where design meets performance.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {images.map((img, idx) => (
            <figure key={idx} className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur border border-white/10">
              <img src={img.src} alt={img.alt} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <figcaption className="absolute inset-0 pointer-events-none flex items-end">
                <span className="m-3 text-[10px] uppercase tracking-wider text-white/70 bg-black/30 px-2 py-1 rounded">
                  © Hanzzz Visual
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

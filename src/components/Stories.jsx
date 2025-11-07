import React from 'react';

const posts = [
  {
    title: 'Finding Rhythm at the Apex',
    excerpt:
      'How tire temperature, aero balance, and driver inputs dance together to carve perfect lines lap after lap.',
  },
  {
    title: 'The Quiet Poetry of Preflight',
    excerpt:
      'Checklists are more than steps—they are rituals of precision that make the sky feel like home.',
  },
  {
    title: 'Carbon, Kevlar, and the Art of Lightness',
    excerpt:
      'Behind every gram saved is a philosophy about purpose and restraint in engineering.',
  },
];

const Stories = () => {
  return (
    <section id="stories" className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Stories / Journal</h2>
          <p className="mt-2 text-white/70">“Notes from the Pit and the Sky”</p>
          <p className="text-white/60">Personal reflections on engineering, aesthetics, and the pursuit of speed.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, idx) => (
            <article key={idx} className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.07] transition">
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{post.excerpt}</p>
              <p className="mt-6 italic text-white/60">— Hanzzz</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stories;

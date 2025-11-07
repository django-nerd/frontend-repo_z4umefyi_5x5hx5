import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-black text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">About Me</h2>
        <div className="mt-6 space-y-4 text-white/80 leading-relaxed">
          <p>I’m Hanief, a motorsport and aviation enthusiast based in Yogyakarta.</p>
          <p>
            I enjoy exploring how engineering and design come together in motion — whether it’s a race car
            cutting through a corner or an aircraft taking off into the sunrise.
          </p>
          <p>
            This site is my personal space to share photos, thoughts, and stories that reflect my fascination with
            speed and precision.
          </p>
          <p><span className="text-white">Interests:</span> Motorsport, Aircraft, Automotive Design, Photography, Simulation</p>
        </div>
      </div>
    </section>
  );
};

export default About;

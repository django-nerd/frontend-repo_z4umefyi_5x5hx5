import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Stories from './components/Stories';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Header />
      <main>
        <Hero />
        <Gallery />
        <Stories />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;

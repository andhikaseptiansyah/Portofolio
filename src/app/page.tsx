import React from 'react';
import Preloader from '../components/Preloader';
import SocialSidebar from '../components/SocialSidebar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    /* Wrapper ini memastikan tidak ada jarak/margin tersisa */
    <div style={{ width: '100%', margin: 0, padding: 0, overflowX: 'hidden' }}>
      <Preloader />
      <SocialSidebar />
      <Hero />
      <Features />
      <Portfolio />
      <Services />
      <Footer />
    </div>
  );
}
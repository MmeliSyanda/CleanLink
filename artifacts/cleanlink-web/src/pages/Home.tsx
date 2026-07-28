import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Services from '@/components/Services';
import WhyCleanLink from '@/components/WhyCleanLink';
import ForCleaners from '@/components/ForCleaners';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Services />
      <WhyCleanLink />
      <ForCleaners />
      <Testimonials />
      <Footer />
    </main>
  );
}
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { HowItWorks } from './components/HowItWorks';
import { ForAthletes } from './components/ForAthletes';
import { ForParents } from './components/ForParents';
import { TestimonialHighlight } from './components/TestimonialHighlight';
import { AffordablePricing } from './components/AffordablePricing';
import { Testimonials } from './components/Testimonials';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    // Set meta tags
    document.title = 'RecruitBridge | Get seen by college coaches faster';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Automate outreach, track replies, and know which coaches are interested. Built for under-recruited athletes and parents.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Automate outreach, track replies, and know which coaches are interested. Built for under-recruited athletes and parents.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <HowItWorks />
      <TestimonialHighlight />
      <ForAthletes />
      <ForParents />
      <AffordablePricing />
      <Testimonials />
      <FinalCTA />
      <Footer />
      <SpeedInsights />
    </div>
  );
}
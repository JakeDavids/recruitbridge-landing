import { HeroSection } from '../components/HeroSection';
import { HowItWorks } from '../components/HowItWorks';
import { ForAthletes } from '../components/ForAthletes';
import { ForParents } from '../components/ForParents';
import { TestimonialHighlight } from '../components/TestimonialHighlight';
import { AffordablePricing } from '../components/AffordablePricing';
import { Testimonials } from '../components/Testimonials';
import { FinalCTA } from '../components/FinalCTA';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.title = 'RecruitBridge | Get seen by college coaches faster';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Automate outreach, track replies, and know which coaches are interested. Built for under-recruited athletes and parents.');
    }
  }, []);

  return (
    <>
      <HeroSection />
      <HowItWorks />
      <TestimonialHighlight />
      <ForAthletes />
      <ForParents />
      <AffordablePricing />
      <Testimonials />
      <FinalCTA />
    </>
  );
}

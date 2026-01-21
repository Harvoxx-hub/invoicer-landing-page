import React from 'react';
import { Helmet } from 'react-helmet-async';
import Heros from '../components/Heros';
import SocialProofBar from '../components/homepage/SocialProofBar';
import ProblemSolution from '../components/homepage/ProblemSolution';
import FeaturesSec from '../components/FeaturesSec';
import HowItWorks from '../components/HowItWorks';
import HardwareShowcase from '../components/homepage/HardwareShowcase';
import TestimonialSec from '../components/TestimonialSec';
import BusinessJourney from '../components/homepage/BusinessJourney';
import PricingTeaser from '../components/homepage/PricingTeaser';
import Security from '../components/Security';
import CTA from '../components/CTA';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Invoicer - Inventory & POS Software for Nigerian Businesses</title>
        <meta
          name="description"
          content="Run your entire business from your phone. Inventory management, POS system, and online store - all in one platform built for African businesses. Start free today."
        />
      </Helmet>

      <main>
        {/* Section 1: Hero section - Main landing area */}
        <section className="bg-[#163300]" aria-label="Hero section">
          <Heros />
        </section>

        {/* Section 2: Social Proof Bar */}
        <SocialProofBar />

        {/* Section 3: Problem/Solution Statement */}
        <ProblemSolution />

        {/* Section 4: Core Features Overview */}
        <section className="bg-[#163300]" id="features" aria-label="Features section">
          <FeaturesSec />
        </section>

        {/* Section 5: How It Works */}
        <section id="works" aria-label="How it works section">
          <HowItWorks />
        </section>

        {/* Section 6: Hardware Showcase */}
        <HardwareShowcase />

        {/* Section 7: Video Testimonials/Success Stories */}
        <section id="testimonials" aria-label="Testimonials section">
          <TestimonialSec />
        </section>

        {/* Section 8: From Store to Online */}
        <BusinessJourney />

        {/* Section 9: Pricing Teaser */}
        <PricingTeaser />

        {/* Section 10: Trust & Security */}
        <section id="benefits" aria-label="Benefits section">
          <Security />
        </section>

        {/* Section 11: Final CTA */}
        <section aria-label="Call to action section">
          <CTA />
        </section>
      </main>
    </>
  );
};

export default HomePage;

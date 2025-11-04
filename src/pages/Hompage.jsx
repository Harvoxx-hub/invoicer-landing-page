import React from 'react'
import Heros from '../components/Heros'
import FeaturesSec from '../components/FeaturesSec'
import HowItWorks from '../components/HowItWorks'
import Security from '../components/Security'
import TestimonialSec from '../components/TestimonialSec'
import CTA from '../components/CTA'

const Hompage = () => {
  return (
    <main>
        {/* Hero section - Main landing area */}
      <section className='bg-[#163300]' aria-label="Hero section">
        {/* <Header /> */}
        <Heros />
      </section>
 
      {/* Features section - Inventory management features */}
      <section className='bg-[#163300]' id='features' aria-label="Features section">
        <FeaturesSec />
      </section> 
      
      {/* How it works section */}
      <section id='works' aria-label="How it works section">
        <HowItWorks /> 
      </section>

      {/* Benefits/Security section */}
      <section id='benefits' aria-label="Benefits section">
        <Security />
      </section>

      {/* Testimonials section */}
      <section id='testimonials' aria-label="Testimonials section">
        <TestimonialSec />
      </section>

      {/* Call to action section */}
      <section aria-label="Call to action section">
        <CTA />
      </section>

      {/* <section>
        <Footer />
      </section> */}
    </main>
  )
}

export default Hompage

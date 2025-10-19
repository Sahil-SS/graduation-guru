import CoursesSection from '@/components/courses-section'
import Footer from '@/components/footer'
import HeroSection from '@/components/hero-section'
import OfferingsSection from '@/components/offering'
import TestimonialsSection from '@/components/testimonial'
import WhyChooseUs from '@/components/why-choose-us'
import React from 'react'

const page = () => {
  return (
    <main>
      <HeroSection />
      <OfferingsSection />
      <WhyChooseUs />
      <CoursesSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}

export default page
'use client';
import About from '@/component/Home/About';
import Contact from '@/component/Home/Contact';
import FAQ from '@/component/Home/FAQ';
import Hero from '@/component/Home/Hero';
import Portfolio from '@/component/Home/Portfolio';
import Service from '@/component/Home/Service';
import Testimonial from '@/component/Home/Testimonial';
import Trusted from '@/component/Home/Trusted';
export default function Home() {
  return (
    <>
      <Hero />
      <Trusted />
      <About />
      <Service />
      <Portfolio />
      <Testimonial />
      <FAQ />
      <Contact />
    </>
  );
}

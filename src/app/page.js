'use client';
import About from '@/component/Home/About';
import Contact from '@/component/Home/Contact';
import FAQ from '@/component/Home/FAQ';
import Hero from '@/component/Home/Hero';
import Portfolio from '@/component/Home/Portfolio';
import Service from '@/component/Home/Service';
import Testimonial from '@/component/Home/Testimonial';
import Trusted from '@/component/Home/Trusted';
import { useRef } from 'react';
export default function Home() {
  const exploreRef = useRef(null);
  return (
    <>
      <Hero exploreRef={exploreRef} />
      <Trusted exploreRef={exploreRef} />
      <About />
      <Service />
      <Portfolio />
      <Testimonial />
      <FAQ />
      <Contact />
    </>
  );
}

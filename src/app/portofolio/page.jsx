import HeroComponents from '@/component/Hero';
import Portfolio from '@/component/Portofolio';
import React from 'react';

export default function page() {
  return (
    <>
      <HeroComponents
        title='portfolio'
        type='home'
      />
      <Portfolio />
    </>
  );
}

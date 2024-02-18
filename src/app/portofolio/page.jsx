import HeroComponents from '@/component/Hero';
import Portfolio from '@/component/Portofolio';
import React from 'react';
export const metadata = {
  title: 'Portofolio',
};
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

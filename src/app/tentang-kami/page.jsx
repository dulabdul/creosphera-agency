import HeroComponents from '@/component/Hero';
import TentangKami from '@/component/tentang-kami';
import React from 'react';
export const metadata = {
  title: 'About',
};
export default function page() {
  return (
    <>
      <HeroComponents
        title='Tentang kami'
        type='home'
      />
      <TentangKami />
    </>
  );
}

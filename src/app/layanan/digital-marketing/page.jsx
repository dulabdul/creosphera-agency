import HeroComponents from '@/component/Hero';
import Marketing from '@/component/Layanan/Digimar';

import React from 'react';
export const metadata = {
  title: 'Service',
};
export default function page() {
  return (
    <>
      <HeroComponents
        title='digital marketing'
        type='layanan'
      />
      <Marketing />
    </>
  );
}

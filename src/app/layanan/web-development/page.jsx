import HeroComponents from '@/component/Hero';
import Content from '@/component/Layanan/Website';
import React from 'react';
export const metadata = {
  title: 'Service',
};
export default function WebDev() {
  return (
    <>
      <HeroComponents
        title='web app development'
        type='layanan'
      />
      <Content />
    </>
  );
}

import HeroComponents from '@/component/Hero';
import ContactPage from '@/component/Kontak';
import React from 'react';
export const metadata = {
  title: 'Contact',
};
export default function page() {
  return (
    <>
      <HeroComponents
        title='Let&#39;s Talk;'
        type='home'
      />
      <ContactPage />
    </>
  );
}

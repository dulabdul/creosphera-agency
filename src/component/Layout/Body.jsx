'use client';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { usePathname } from 'next/navigation';

export default function Body({ children, font }) {
  // to get current path url
  const pathName = usePathname();
  return (
    <body
      className={`${pathName === '/' ? 'bg-gradient' : ''} ${
        font.className
      } font-sans`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </body>
  );
}

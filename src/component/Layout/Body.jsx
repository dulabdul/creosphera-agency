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
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM}`}
          height='0'
          width='0'
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
      <Header />
      <main>{children}</main>
      <Footer />
    </body>
  );
}

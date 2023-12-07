import React from 'react';
import Heading from '../Heading';
import PortfolioCard from '../Card/PortfolioCard';

export default function Portfolio() {
  return (
    <div className='w-full h-full py-12 px-4 overflow-hidden'>
      <div className='container mx-auto'>
        <Heading
          title='Portoflio Kami'
          description='Kami membuat ide anda menjadi nyata'
        />
        <PortfolioCard />
      </div>
    </div>
  );
}

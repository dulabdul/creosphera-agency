import React from 'react';
import Heading from '../Heading';
import PortfolioCard from '../Card/PortfolioCard';
import Card from '../Card';

export default function Portfolio() {
  return (
    <div className='w-full h-full overflow-hidden container mx-auto py-12 md:py-24 px-4'>
      <Heading
        classNames='text-primary text-2xl md:text-4xl'
        title='portfolio kami'
        description='Kami membuat ide anda menjadi nyata'
      />
      <PortfolioCard />
      <Card isCardContact />
    </div>
  );
}

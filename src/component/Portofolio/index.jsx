import React from 'react';
import Heading from '../Heading';
import PortfolioCard from '../Card/PortfolioCard';
import Image from 'next/image';
import CustomButton from '../Button';
export default function Portfolio() {
  return (
    <div className='w-full h-full overflow-hidden container mx-auto py-12 md:py-24 px-4'>
      <Heading
        title='portfolio kami'
        description='Kami membuat ide anda menjadi nyata'
      />
      <PortfolioCard />
      <div className='px-6 py-12 rounded-[30px] flex bg-gradient-to-r from-[#E9F7FF] via-[#FFDBD4] to-[#FFF3CA]'>
        <div className='heading_content w-3/4'>
          <h1 className=' text-2xl md:text-[42px] leading-snug font-medium text-[#5956E8]'>
            Konsultasi gratis{' '}
            <span className='text-2xl md:text-[42px] leading-snug font-medium text-primary'>
              sekarang dan kembangkan bisnis anda
            </span>
          </h1>
          <div className='py-8 md:py-16'>
            <CustomButton
              className='px-4 py-2 bg-primary text-white'
              isRounded
              isHover
              href='/'
              type='link'
              target='_blank'>
              Hubungi Kami
            </CustomButton>
          </div>
        </div>
        <div className='w-[25%] bg-[url("/images/cubic.png")] bg-cover bg-no-repeat bg-center'>
          <Image
            src={'/images/rocket.png'}
            className='w-full'
            alt='Rocket'
            width={234}
            height={352}
          />
        </div>
      </div>
    </div>
  );
}

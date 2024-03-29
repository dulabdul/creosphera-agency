import Image from 'next/image';
import React from 'react';
import CustomButton from '../Button';

export default function Hero({ exploreRef }) {
  const handlerScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop - 50,
      behavior: 'smooth',
    });
  };
  return (
    <div className='w-full h-full pt-16 overflow-hidden'>
      <div className='z-10 w-full h-full absolute'>
        <Image
          alt='Spiral'
          src='/images/spiral_hero1.png'
          width={1080}
          height={1245}
          className='w-full h-full '
        />
      </div>
      <div className='container w-full flex flex-wrap md:flex-nowrap items-center justify-center mx-auto relative z-20 py-12 px-6 md:px-12 xl:pl-24 xl:pr-12 xl:py-20'>
        <div className='flex flex-row items-center w-full xl:w-[60%]'>
          <div className='flex flex-col items-start tracking-widest '>
            <h1 className='uppercase text-primary text-4xl xl:text-6xl font-semibold leading-tight'>
              Improving your <br /> business with <br />
              <span className='uppercase text-4xl xl:text-6xl font-light creosphera_name'>
                creosphera
              </span>
            </h1>
            <p className='text-primary text-base font-normal'>
              Tingkatkan nilai dan penjualan bisnis anda melalui digitalisasi
              yang <br />
              dikelola oleh profesional
            </p>
            <CustomButton
              onClick={() => handlerScroll(exploreRef.current)}
              type='button'
              id='scroll-down'
              ariaLabel='Explore sekarang'
              isPrimary
              isPrimaryHover
              isRoundedFull
              className='btn cursor-pointer mt-4 text-white'>
              Explore Now
            </CustomButton>
          </div>
        </div>
        <div className='w-full xl:w-[40%]'>
          <Image
            src='/images/people_hero.webp'
            width={500}
            height={700}
            alt='CreoSphera Hero'
            className='w-full h-full'
          />
        </div>
      </div>
    </div>
  );
}

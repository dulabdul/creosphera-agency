'use client';
import Image from 'next/image';
import React from 'react';
import CustomButton from '../Button';
import { usePathname } from 'next/navigation';
export default function Footer() {
  const pathName = usePathname();
  const menuData = {
    menu: [
      {
        name: 'home',
        route: '/',
      },
      {
        name: 'web development',
        route: '/layanan/web-development',
      },
      {
        name: 'digital marketing',
        route: '/layanan/digital-marketing',
      },
      {
        name: 'portofolio',
        route: '/portofolio',
      },
      {
        name: 'tentang',
        route: '/tentang-kami',
      },
      {
        name: 'kontak',
        route: '/kontak',
      },
    ],
    social: [
      {
        name: 'instragam',
        url: 'https://www.instagram.com/',
      },
      {
        name: 'facebook',
        url: 'https://www.facebook.com/',
      },
    ],
  };
  return (
    <footer
      className={`w-full h-full overflow-hidden ${
        pathName === '/'
          ? ''
          : 'bg-[url(/images/bg-wave-footer.svg)] bg-no-repeat bg-cover'
      }`}>
      <div className='z-10 w-full h-[80vh] absolute'>
        <Image
          alt='Spiral'
          src='/images/spiral_footer.png'
          width={1080}
          height={1245}
          className='w-full h-full'
        />
      </div>
      <div className='container px-4 mx-auto z-20 relative pt-32 pb-12 xl:pt-72 xl:pb-16'>
        <div className='flex gap-y-5 gap-x-4 xl:gap-0 flex-wrap md:flex-nowrap'>
          <div className='flex w-full md:w-1/2 xl:w-2/5 flex-col gap-y-2 md:gap-y-4'>
            <p className='text-primary font-normal text-2xl md:text-4xl'>
              Giliran anda membuktikan kualitas jasa kami
            </p>
            <CustomButton
              type='link'
              isExternal
              id='hubungi kami'
              href='https://api.whatsapp.com/send?phone=6289675293838&text=Halo%20saya%20ingin%20berkonsultasi'
              ariaLabel='Konsultasi Sekarang'
              isSecondary
              isSecondaryHover
              isRounded
              isFlex
              className='btn text-primary max-w-[200px] items-center justify-center'>
              Konsultasi Sekarang
            </CustomButton>
          </div>
          <div className='flex w-full md:w-1/2 xl:w-1/5  flex-col gap-2'>
            <p className='text-primary font-light text-lg md:text-xl'>Menu</p>
            <ul>
              {menuData.menu.map((item, index) => {
                return (
                  <li key={index}>
                    <CustomButton
                      type='link'
                      id={item.name}
                      href={item.route}
                      ariaLabel={item.name}
                      className='min-w-[48px] min-h-[48px] block text-primary font-normal text-base md:text-lg capitalize hover:text-redColor hover:underline transition-all duration-150'>
                      {item.name}
                    </CustomButton>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='flex w-full md:w-1/2 xl:w-1/5  flex-col gap-2'>
            <p className='text-primary font-light text-lg md:text-xl'>Social</p>
            <ul>
              {menuData.social.map((item, index) => {
                return (
                  <li key={index}>
                    <CustomButton
                      type='link'
                      isExternal
                      target='_blank'
                      href={item.url}
                      ariaLabel={item.name}
                      className='min-w-[48px] min-h-[48px] block text-primary font-normal text-base md:text-lg capitalize hover:text-redColor hover:underline transition-all duration-150'>
                      {item.name}
                    </CustomButton>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='flex w-full md:w-1/2 xl:w-1/5  flex-col gap-2'>
            <p className='text-primary font-light text-lg md:text-xl'>
              AFFILIATE
            </p>
            <ul>
              <li>
                <CustomButton
                  type='link'
                  href='/affiliate'
                  ariaLabel='Buka Affiliate page'
                  className='min-w-[48px] min-h-[48px] block text-primary font-normal text-base md:text-lg capitalize hover:text-redColor hover:underline transition-all duration-150'>
                  Program Reseller
                </CustomButton>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

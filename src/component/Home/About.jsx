import Image from 'next/image';
import React from 'react';
import CustomButton from '../Button';

export default function About() {
  return (
    <div className='w-full h-full ovefflow-hidden px-4 py-12'>
      <div className='container mx-auto'>
        <div className='grid gap-y-12 md:gap-x-4 md:gap-y-0 grid-cols-1 items-center md:grid-cols-2'>
          <div className='w-full h-full'>
            <Image
              src='/images/people-about.webp'
              width={718}
              height={572}
              alt='Tentang Kami CreoSphera'
              className='object-cover w-full h-full'
            />
          </div>
          <div className='w-full h-full flex gap-y-2 flex-col '>
            <h2 className='text-sekunder font-medium text-2xl'>Tentang Kami</h2>
            <h3 className='text-primary font-semibold text-3xl md:text-5xl'>
              Mengenal Kami Membuat Anda Percaya
            </h3>
            <p className='text-primary font-normal text-lg'>
              CreoSphera telah membantu banyak perusahaan dan perorangan dalam
              mencapai tujuan finansial dan branding mereka.
            </p>
            <p className='text-tersier text-base tracking-wider leading-relaxed'>
              Kami menawarkan berbagai jenis website, mulai dari website
              perusahaan, toko online, blog, hingga website pribadi. Semua
              website yang kami buat dilengkapi dengan tampilan yang menarik,
              responsif serta mudah diakses oleh semua pengguna, Kami juga
              memberikan layanan konsultasi gratis untuk membantu Kamu memilih
              jenis website yang tepat untuk bisnis atau proyek Kamu.
            </p>
            <CustomButton
              type='link'
              href='/tentang-kami'
              isSecondary
              isSecondaryHover
              isRounded
              isFlex
              ariaLabel='Selengkapnya'
              className='btn text-primary max-w-[180px] items-center'>
              Selengkapnya
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import CustomBreadcumb from '@/component/Breadcumb';
import React from 'react';

export default function Hero() {
  return (
    <div className='w-full h-[50vh] lg:h-[100vh] overflow-hidden bg-[url("/images/bg-wave.svg")] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center'>
      <h1 className='text-primary text-3xl lg:text-6xl font-normal'>
        Web App Development
      </h1>
      <CustomBreadcumb
        title={'web development'}
        type={'layanan'}
      />
    </div>
  );
}

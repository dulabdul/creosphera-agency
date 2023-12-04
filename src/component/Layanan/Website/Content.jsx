import React from 'react';
import Image from 'next/image';
import CustomButton from '@/component/Button';
import Heading from '@/component/Heading';
import Card from '@/component/Card';
export default function Content() {
  const data = [
    {
      title: 'harga terjangkau',
      description: 'harga yang murah untuk sebuah digitalisasi',
    },
    {
      title: 'fast respond',
      description:
        'Kami berkomitmen untuk memberikan ON Time Support Fast Respon ketika Anda butuh bantuan.',
    },
    {
      title: 'harga terjangkau',
      description: 'harga yang murah untuk sebuah digitalisasi',
    },
    {
      title: 'fast respond',
      description:
        'Kami berkomitmen untuk memberikan ON Time Support Fast Respon ketika Anda butuh bantuan.',
    },
    {
      title: 'harga terjangkau',
      description: 'harga yang murah untuk sebuah digitalisasi',
    },
    {
      title: 'fast respond',
      description:
        'Kami berkomitmen untuk memberikan ON Time Support Fast Respon ketika Anda butuh bantuan.',
    },
  ];
  return (
    <>
      <div className='w-full overflow-hidden flex flex-wrap md:flex-nowrap px-4 py-12 items-center justify-center'>
        <div className='w-full lg:w-1/2'>
          <Image
            src='/images/sally-bg.png'
            alt='Sally'
            className='w-[750px] h-full'
            width='750'
            height='693'
          />
        </div>
        <div className='w-full lg:w-1/2'>
          <h2 className='text-primary text-3xl leading-tight text-[42px] font-medium'>
            Tingkatkan Kredibelitas Bisnismu
          </h2>
          <p className='text-primary text-lg leading-snug font-light lg:text-2xl'>
            Memiliki website yang profesional dan responsif dapat memberikan
            kesan yang baik bagi calon pelanggan.
          </p>
          <p className='text-tersier font-light text-base leading-normal lg:text-xl'>
            Di era digital saat ini, keberadaan website menjadi salah satu hal
            yang sangat penting bagi setiap bisnis. Selain sebagai media untuk
            memperkenalkan produk atau jasa yang ditawarkan, website juga dapat
            meningkatkan kredibilitas bisnismu di mata pelanggan.
          </p>
          <CustomButton
            isSecondary
            isRounded
            isSecondaryHover
            isFlex
            className='mt-2 px-4 py-2 text-white'>
            Order Sekarang
          </CustomButton>
        </div>
      </div>
      <div className='w-full overflow-hidden flex flex-wrap md:flex-nowrap md:flex-col py-6 justify-center items-center'>
        <Heading
          title='Kenapa Website'
          description='Website berkualitas, bisnis anda naik kelas'
        />

        <div className='grid lg:grid-cols-3 gap-4 py-8'>
          {data.map((item, index) => {
            return index % 2 === 0 ? (
              <Card
                className='max-w-[295px] mx-auto'
                key={index}
                title={item.title}
                isRed
                description={item.description}
              />
            ) : (
              <Card
                className='max-w-[295px] mx-auto'
                key={index}
                title={item.title}
                description={item.description}
                isGreen
              />
            );
          })}
        </div>
        <Heading
          title='harga kami'
          description='Paket harga jasa pembuatan website'
        />
        <Card isPrice />
      </div>
    </>
  );
}

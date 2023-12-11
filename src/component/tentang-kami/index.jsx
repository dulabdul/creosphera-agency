import React from 'react';
import Image from 'next/image';
import Card from '../Card';
import FlashCard from '../Card/FlashCard';
import CustomButton from '../Button';

export default function TentangKami() {
  const data = [
    {
      title: 'Intregritas',
      description: 'bayar hanya saat click',
    },
    {
      title: 'Intregritas',
      description: 'bayar hanya saat click',
    },
    {
      title: 'Intregritas',
      description: 'bayar hanya saat click',
    },
  ];
  const dataService = [
    {
      type: 'development',
      content: [
        {
          name: 'web development',
          description:
            'Frontend development involves building the part of a website or application that users directly interact with, including the layout, design, and user interface. It plays a crucial role in providing a seamless and enjoyable user experience. Our frontend development service ensures that your website or application is visually appealing, intuitive, and easy to use, helping to attract and retain more customers.',
        },
      ],
    },
    {
      type: 'digital marketing',
      content: [
        {
          name: 'digital marketing',
          description:
            'Frontend development involves building the part of a website or application that users directly interact with, including the layout, design, and user interface. It plays a crucial role in providing a seamless and enjoyable user experience. Our frontend development service ensures that your website or application is visually appealing, intuitive, and easy to use, helping to attract and retain more customers.',
        },
      ],
    },
  ];
  return (
    <div className='w-full h-full ovefflow-hidden px-4 py-12 container mx-auto'>
      <div className='flex flex-wrap items-center '>
        <div className='w-full md:w-1/2 h-full'>
          <Image
            src='/images/people-about.png'
            width={718}
            height={572}
            alt='Tentang Kami CreoSphera'
            className='object-cover w-full h-full'
          />
        </div>
        <div className='w-full md:w-1/2 h-full flex gap-y-2 flex-col '>
          <h2 className='text-sekunder font-medium text-2xl'>Tentang Kami</h2>
          <h3 className='text-primary font-semibold text-3xl md:text-5xl'>
            Mengenal Kami Membuat Anda Percaya
          </h3>
          <p className='text-primary font-normal text-lg'>
            Di era digital saat ini, website bukan lagi menjadi pilihan, tetapi
            menjadi kebutuhan bagi bisnis.
          </p>
          <p className='text-tersier text-base tracking-wider'>
            Dibikin.online adalah perusahaan pembuat website & Pakar SEO yang
            didirikan oleh CV Orizin Ciptapedia. Misi kami adalah untuk mengubah
            cara pandangan kamu tentang website. Kami memahami bahwa website
            bukan hanya tentang tampilan yang menarik, tetapi juga tentang
            fungsionalitas dan pengalaman pengguna yang baik. Oleh karena itu,
            kami menawarkan solusi pembuatan website yang dapat memenuhi
            kebutuhan bisnis kamu yang di optimalkan dengan SEO terbaik.
          </p>
        </div>
        <div className='py-12 md:py-24 w-full grid grid-cols-1 md:grid-cols-3 gap-5 justify-center'>
          {data.map((items, index) => {
            return index % 2 === 0 ? (
              <Card
                titleCardSmall={items.title}
                descriptionCardSmall={items.description}
                isCardSmall
                isGreen
              />
            ) : (
              <Card
                titleCardSmall={items.title}
                descriptionCardSmall={items.description}
                isCardSmall
                isRed
              />
            );
          })}
        </div>
        <div className='py-12 flex flex-col justify-start'>
          <h2 className='text-tersier text-xl md:text-2xl font-normal'>
            Layanan
          </h2>
          <h3 className='text-primary font-medium text-2xl md:text-3xl'>
            Apa yang bisa kami lakukan untuk bisnis anda
          </h3>
          {dataService.map((items, index) => {
            return (
              <FlashCard
                key={index}
                type={items.type}
                content={items.content}
              />
            );
          })}
        </div>
        <Card isCardContact />
      </div>
    </div>
  );
}

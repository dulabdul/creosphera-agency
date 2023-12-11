import React from 'react';
import Image from 'next/image';
import Card from '../Card';
import FlashCard from '../Card/FlashCard';
import CustomButton from '../Button';

export default function TentangKami() {
  const data = [
    {
      title: 'Inovasi Berkelanjutan:',
      description:
        'Kami terus mendorong batas-batas kreativitas untuk memberikan solusi digital terbaik',
    },
    {
      title: 'Agile',
      description:
        'Dengan pendekatan Agile kami dapat beradaptasi dengan kebutuhan trend digital',
    },
    {
      title: 'Kolaborasi Berorientasi Klien',
      description:
        'Kemitraan dengan klien adalah kunci. Kami mendengarkan, berkolaborasi, dan menghadirkan solusi yang sesuai dengan kebutuhan dan visi bisnis mereka.      ',
    },
  ];
  const dataService = [
    {
      type: 'development',
      content: [
        {
          name: 'web development',
          description:
            'Website kini diakses oleh seluruh orang di dunia, dengan menjajaki dunia digital bisnis Anda memungkinkan untuk diakses tanpa batasan tempat dan waktu. Pengembangan website yang dilakukan oleh tim kami berorientasi terhadap client dan berorientasi terhadap visi misi Anda',
        },
      ],
    },
    {
      type: 'digital marketing',
      content: [
        {
          name: 'digital marketing',
          description:
            'Dengan layanan digital marketing kami, khususnya melalui Google Ads, kami memastikan bisnis Anda tampil di puncak hasil pencarian, menjangkau audiens yang tepat, dan mengonversi peluang menjadi pelanggan setia. Jangan lewatkan kesempatan untuk mendominasi pangsa pasar digital Anda bersama kami.',
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
            Kami di Creosphera adalah pionir dalam membawa bisnis Anda ke
            peradaban digital. Dengan dedikasi penuh, kami menawarkan solusi
            digital yang meliputi pembuatan website yang memukau dan strategi
            iklan Google Ads yang efektif. Kami adalah mitra yang peduli dan
            berkomitmen untuk mewujudkan keberhasilan bisnis Anda di dunia
            digital.
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

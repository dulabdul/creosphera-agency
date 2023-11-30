import React from 'react';
import Card from '../Card';
import Heading from '../Heading';

export default function Service() {
  const serviceList = [
    {
      icons: '/images/ex_green.png',
      title: 'Web Development',
      description:
        'Pengembangan website menggunakan teknologi wordpress maupun custom sesuai kebutuhan bisnis Anda untuk sistem informasi, administrasi, serta promosi.',
      href: '/layanan/web-development',
    },
    {
      icons: '/images/icons_ex.svg',
      title: 'Search Engine Optimization',
      description:
        'Dengan meningkatkan peringkat SEO, Kamu dapat meningkatkan jumlah kunjungan, konversi, dan penjualan melalui website.',
      href: '/layanan/seo',
    },
    {
      icons: '/images/ex_green.png',
      title: 'Digital Marketing',
      description:
        'Layanan jasa pemasaran melalui media online seperti beriklan di Google, Facebook, Instagram, Tiktok, Marketplace,',
      href: '/layanan/digital-marketing',
    },
  ];
  return (
    <section className='w-full h-full overflow-hidden px-4 py-12'>
      <div className='container mx-auto'>
        <Heading
          title={'Layanan Kami'}
          description={'Solusi yang ditawarkan kami untuk bisnis anda'}
        />
        <div className='grid grid-cols-1 gap-4 items-center py-10 md:py-16 justify-center md:grid-cols-3'>
          {serviceList.map((item, index) => {
            return index % 2 === 0 ? (
              <Card
                className='h-full max-w-[410px]'
                key={index}
                isGreen
                icons={item.icons}
                isHasLink
                href={item.href}
                title={item.title}
                description={item.description}
              />
            ) : (
              <Card
                className='h-full max-w-[410px]'
                key={index}
                isRed
                icons={item.icons}
                isHasLink
                href={item.href}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

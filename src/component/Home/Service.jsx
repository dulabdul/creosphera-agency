import React from 'react';
import Card from '../Card';
import Heading from '../Heading';
import { FaChartLine } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
export default function Service() {
  const serviceList = [
    {
      icons: <TbWorldWww />,
      title: 'Web Development',
      description:
        'Pengembangan website menggunakan teknologi wordpress maupun custom sesuai kebutuhan bisnis Anda untuk sistem informasi, administrasi, serta promosi.',
      href: '/layanan/web-development',
    },
    {
      icons: <FaChartLine />,
      title: 'Digital Marketing',
      description:
        'Dapatkan hasil maksimal dari kampanye iklan online Anda dengan layanan digital marketing khusus, fokus pada strategi promosi melalui platform Google Ads untuk mencapai target pasar yang tepat.',
      href: '/layanan/digital-marketing',
    },
  ];
  return (
    <div className='w-full h-full overflow-hidden px-4 py-12'>
      <div className='container mx-auto'>
        <Heading
          title={'Layanan Kami'}
          description={'Solusi yang ditawarkan kami untuk bisnis anda'}
        />
        <div className='flex flex-col md:flex-row items-center justify-center gap-4 py-12 md:py-16'>
          {serviceList.map((item, index) => {
            return index % 2 === 0 ? (
              <Card
                className='max-h-[420px] max-w-[410px]'
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
                className='max-h-[420px] max-w-[410px]'
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
    </div>
  );
}

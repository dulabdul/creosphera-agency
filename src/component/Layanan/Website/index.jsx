import React from 'react';
import Image from 'next/image';
import CustomButton from '@/component/Button';
import Heading from '@/component/Heading';
import Card from '@/component/Card';
export default function Content() {
  const dataReason = [
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
  const dataPrice = [
    {
      price: '1,5',
      type: 'enterprise',
      description: 'cocok untuk website ecommerce, web traffic tinggi',
      fitur: [
        {
          name: 'all limited links',
        },
        {
          name: 'all limited links',
        },
        {
          name: 'all limited links',
        },
        {
          name: 'all limited links',
        },
        {
          name: 'all limited links',
        },
        {
          name: 'all limited links',
        },
        {
          name: 'all limited links',
        },
        {
          name: 'all limited links',
        },
      ],
    },
    {
      price: '1,5',
      type: 'enterprise',
      description: 'cocok untuk website ecommerce, web traffic tinggi',
      fitur: [
        {
          name: 'all limited links',
        },
        {
          name: 'all limited links',
        },
        {
          name: 'all limited links',
        },
        {
          name: 'all limited links',
        },
        {
          name: 'all limited links',
        },
        {
          name: 'all limited links',
        },
        {
          name: 'all limited links',
        },
        {
          name: 'all limited links',
        },
      ],
    },
    {
      price: '1,5',
      type: 'enterprise',
      description: 'cocok untuk website ecommerce, web traffic tinggi',
      fitur: [
        {
          name: 'all limited links',
        },
        {
          name: 'all limited links',
        },
        {
          name: 'all limited links',
        },
        {
          name: 'all limited links',
        },
        {
          name: 'all limited links',
        },
        {
          name: 'all limited links',
        },
        {
          name: 'all limited links',
        },
        {
          name: 'all limited links',
        },
      ],
    },
  ];
  return (
    // Start Content

    <div className='container mx-auto py-16 md:py-24'>
      {/* Start krediblitas content*/}
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
      {/* End krediblitas content*/}
      {/* Start kenapa website content*/}
      <div>
        <Heading
          title='Kenapa Website'
          description='Website berkualitas, bisnis anda naik kelas'
        />

        <div className='grid lg:grid-cols-3 gap-4 py-8'>
          {dataReason.map((item, index) => {
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
      </div>
      {/* End kenapa website content*/}
      {/* Start price website content*/}

      <div className='py-12 md:py-24'>
        <Heading
          title='harga kami'
          description='Paket harga jasa pembuatan website'
        />
        <div className='py-12 md:py-24 flex flex-wrap md:flex-nowrap justify-center items-center gap-x-4 gap-y-5'>
          {dataPrice.map((items, index) => {
            return index % 2 === 0 ? (
              <Card
                price={items.price}
                descriptionPrice={items.description}
                typePrice={items.type}
                featurePrice={items.fitur}
                isPriceLight
                isPrice
              />
            ) : (
              <Card
                price={items.price}
                descriptionPrice={items.description}
                typePrice={items.type}
                featurePrice={items.fitur}
                isPrice
                isPriceRed
              />
            );
          })}
        </div>
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
      {/* End kenapa website content*/}
    </div>
    // End Content
  );
}

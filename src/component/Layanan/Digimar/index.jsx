import React from 'react';
import Image from 'next/image';
import CustomButton from '@/component/Button';
import { FaChartLine, FaChartPie } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import Card from '@/component/Card';
import Heading from '@/component/Heading';

export default function Marketing() {
  const data = [
    {
      title: 'pay per click',
      description: 'Bayar saat hanya click',
    },
    {
      title: 'pay per click',
      description: 'Bayar saat hanya click',
    },
    {
      title: 'pay per click',
      description: 'Bayar saat hanya click',
    },
    {
      title: 'pay per click',
      description: 'Bayar saat hanya click',
    },
    {
      title: 'pay per click',
      description: 'Bayar saat hanya click',
    },
    {
      title: 'pay per click',
      description: 'Bayar saat hanya click',
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
    <div className='container mx-auto w-full h-full overflow-hidden px-4 py-12 md:py-24'>
      {/* Start ads description */}
      <div className='flex items-center justify-center flex-wrap md:flex-nowrap gap-x-4'>
        <div className='w-full md:w-1/2  items-center justify-center'>
          <Image
            src='/images/marketing-img.png'
            alt='Marketing service'
            width={517}
            height={517}
            className='w-full h-full'
          />
        </div>
        <div className='w-full md:w-1/2 flex flex-col'>
          <h1 className='text-primary text-2xl md:text-[42px] leading-normal font-medium'>
            Tingkatkan Organik Trafik Hingga{' '}
            <span className='text-cyanColor'>75.000 Klik</span>
          </h1>
          <p className='text-primary text-base md:text-xl leading-normal font-normal'>
            Search Engine Optimization adalah cara untuk meningkatkan kualitas
            dan kuantitas kunjungan ke website Kamu melalui teknik-teknik
            seperti pengoptimalan kata kunci, struktur situs web, konten yang
            relevan dan berkualitas.
          </p>
          <p className='text-tersier text-base lg:text-lg leading-normal font-normal'>
            Tujuannya untuk meningkatkan peringkat website Kamu pada mesin
            pencari sehingga lebih mudah ditemukan oleh pengguna. Dengan
            meningkatkan peringkat SEO, Kamu dapat meningkatkan jumlah
            kunjungan, konversi, dan penjualan melalui website.
          </p>
          <CustomButton
            type='link'
            isSecondary
            isSecondaryHover
            isRounded
            href='/'
            isFlex
            className='text-white items-center justify-center px-4 py-2 max-w-[170px] my-4'>
            Order Sekarang
          </CustomButton>
        </div>
      </div>
      {/* End ads description */}
      {/* Start manfaat digimar */}
      <div className='flex items-center justify-center flex-wrap md:flex-nowrap gap-x-8 py-12 md:py-16'>
        <div className='w-full md:w-1/2'>
          <h2 className='text-primary text-2xl lg:text-[40px] font-normal'>
            Manfaat Digital Marketing Untuk Bisnis Anda
          </h2>
          <Image
            src='/images/marketing-img_1.png'
            alt='Marketing service'
            width={567}
            height={458}
            className='w-full h-full'
          />
        </div>
        <div className='w-full md:w-1/2 flex flex-col gap-y-20 md:gap-y-16'>
          <div className='flex'>
            <div className='w-[60px] h-[60px] float-left flex items-center justify-center rounded-full border border-[#CFCFCF]'>
              <FaChartLine className='text-3xl' />
            </div>

            <div className='flex-1 relative'>
              <p className='relative z-10 font-medium text-base md:text-lg'>
                Page Rankings
              </p>
              <div className='float-left w-full h-[1px] bg-[#CFCFCF] absolute top-1/2 left-0 z-0'></div>
              <p className='absolute top-[75%]'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
                enim voluptas ullam obcaecati, necessitatibus iusto.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div className='w-[60px] h-[60px] float-left flex items-center justify-center rounded-full border border-[#CFCFCF]'>
              <IoMdSettings className='text-3xl' />
            </div>

            <div className='flex-1 relative'>
              <p className='relative z-10 font-medium text-base md:text-lg'>
                Site Optimization
              </p>
              <div className='float-left w-full h-[1px] bg-[#CFCFCF] absolute top-1/2 left-0 z-0'></div>
              <p className='absolute top-[75%]'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
                enim voluptas ullam obcaecati, necessitatibus iusto.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div className='w-[60px] h-[60px] float-left flex items-center justify-center rounded-full border border-[#CFCFCF]'>
              <FaChartPie className='text-3xl' />
            </div>

            <div className='flex-1 relative'>
              <p className='relative z-10 font-medium text-base md:text-lg'>
                Reporting and Analyze
              </p>
              <div className='float-left w-full h-[1px] bg-[#CFCFCF] absolute top-1/2 left-0 z-0'></div>
              <p className='absolute top-[75%]'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
                enim voluptas ullam obcaecati, necessitatibus iusto.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* End manfaat digimar */}
      {/* Start feature digimar */}
      <div className='py-12 md:py-24 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center'>
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
      {/* End feature digimar */}
      {/* Start price digimar */}
      <div className='py-12 md:py-24'>
        <Heading
          title='harga fleksibel'
          description='Diskusikan kebutuhan SEO Kamu kepada kami, tim kami akan sangat senang untuk merekomendasikan hal yang terbaik untuk Kamu'
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
      </div>
      {/* End price digimar */}
      <Card isCardContact />
    </div>
  );
}

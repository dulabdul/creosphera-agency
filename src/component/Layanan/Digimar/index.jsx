import React from 'react';
import Image from 'next/image';
import CustomButton from '@/component/Button';
import { FaChartLine, FaChartPie } from 'react-icons/fa';
import Card from '@/component/Card';
import Heading from '@/component/Heading';
import { TbWorldWww } from 'react-icons/tb';
export default function Marketing() {
  const data = [
    {
      title: 'pay per click',
      description:
        'Anda hanya membayar ketika iklan Anda diklik, sehingga budget iklan menjadi lebih efektif dan hemat.',
    },
    {
      title: 'Cocok untuk Bisnis B2B',
      description:
        'Iklan Google Ads sangat cocok untuk segala jenis usaha terutama usaha B2B (business-to-business).',
    },
    {
      title: 'Tepat Sasaran',
      description:
        'Sampai ke pelanggan yang tepat berdasarkan kata kunci, lokasi, dan perilaku online.',
    },
    {
      title: 'Pantau Hasil Secara Real-time',
      description:
        'Lihat seberapa baik iklan Anda berperform dan ubah strategi dengan mudah berdasarkan data yang tersedia.',
    },
    {
      title: 'Optimasi Budget',
      description:
        'Budget iklan akan dioptimalkan supaya mendapatkan hasil paling maksimal dengan bid paling minimal.',
    },
    {
      title: 'Multi Channel',
      description:
        'Jika diperlukan, iklan Anda bisa dimunculkan di Youtube, aplikasi Android, dan partner Google lainnya.',
    },
  ];
  const dataPrice = [
    {
      price: '1,5',
      suffix: 'ribu',
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
      suffix: 'ribu',

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
      suffix: 'ribu',

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
  const dataReason = [
    {
      name: 'page rankings',
      description:
        'Optimalkan kehadiran online bisnis Anda! Melalui Google Ads, kami fokus pada peningkatan peringkat halaman untuk meningkatkan kunjungan dan konversi yang signifikan.',
      icons: <FaChartLine className='text-3xl text-redColor' />,
    },
    {
      name: 'Site Optimization',
      description:
        'Dapatkan keunggulan yang tak terbantahkan! Dengan strategi optimisasi situs yang canggih, kami hadir untuk memaksimalkan potensi situs Anda dan membantu bisnis Anda menonjol di pasar digital.',
      icons: <TbWorldWww className='text-3xl text-redColor' />,
    },
    {
      name: 'Reporting and Analyze',
      description:
        'Ingin pemahaman yang lebih dalam tentang efektivitas kampanye Google Ads Anda? Kami tidak hanya memberikan laporan, tetapi juga menganalisis data secara menyeluruh untuk mengidentifikasi peluang dan meningkatkan kinerja kampanye Anda.',
      icons: <FaChartPie className='text-3xl text-redColor' />,
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
          <h1 className='text-primary text-2xl md:text-[42px] leading-relaxed font-medium'>
            Tingkatkan Organik Trafik Hingga{' '}
            <span className='text-cyanColor'>75.000 Klik</span>
          </h1>
          <p className='text-primary text-base md:text-xl leading-relaxed font-normal'>
            Search Engine Optimization adalah cara untuk meningkatkan kualitas
            dan kuantitas kunjungan ke website Kamu melalui teknik-teknik
            seperti pengoptimalan kata kunci, struktur situs web, konten yang
            relevan dan berkualitas.
          </p>
          <p className='text-tersier text-base lg:text-lg leading-relaxed font-normal'>
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
          <h2 className='text-primary text-2xl lg:text-[40px] leading-relaxed font-normal'>
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
          {dataReason.map((items, index) => {
            return (
              <div
                key={index}
                className='flex my-8 gap-x-2'>
                <div className='w-[60px] h-[60px] float-left flex items-center justify-center rounded-full border border-[#CFCFCF]'>
                  {items.icons}
                </div>

                <div className='flex-1 relative'>
                  <p className='relativ capitalize z-10 font-medium text-base md:text-lg'>
                    {items.name}
                  </p>
                  <div className='float-left w-full h-[1px] bg-[#CFCFCF] absolute top-1/2 left-0 z-0'></div>
                  <p className='absolute top-[75%]'>{items.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* End manfaat digimar */}
      {/* Start feature digimar */}
      <div className='py-32 md:py-24 flex flex-col md:flex-row items-center flex-wrap justify-around gap-x-2 gap-y-5'>
        {data.map((items, index) => {
          return index % 2 === 0 ? (
            <Card
              className='max-h-[400px] w-full lg:w-[30%]'
              titleCardSmall={items.title}
              descriptionCardSmall={items.description}
              isCardSmall
              isGreen
            />
          ) : (
            <Card
              className='max-h-[400px] w-full lg:w-[30%]'
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
          classNames='text-primary text-2xl md:text-4xl'
          title='harga fleksibel'
          description='Diskusikan kebutuhan Marketing Anda kepada kami'
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
                suffixPrice={items.suffix}
              />
            ) : (
              <Card
                price={items.price}
                descriptionPrice={items.description}
                typePrice={items.type}
                featurePrice={items.fitur}
                suffixPrice={items.suffix}
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

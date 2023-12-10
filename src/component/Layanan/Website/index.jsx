import React from 'react';
import Image from 'next/image';
import CustomButton from '@/component/Button';
import Heading from '@/component/Heading';
import Card from '@/component/Card';
import { FaMobileScreenButton } from 'react-icons/fa6';
import {
  FaDoorOpen,
  FaSearch,
  FaCreditCard,
  FaRocketchat,
} from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';
export default function Content() {
  const dataReason = [
    {
      title: 'Tampilan Profesional',
      description:
        'Website berkualitas tinggi memberikan kesan profesional yang kuat kepada pengunjung. Dengan desain menarik dan terstruktur, halaman website bisa menarik perhatian mereka sejak awal.',
      icons: <FaMobileScreenButton />,
    },
    {
      title: 'Kenyamanan Akses',
      description:
        'Dengan website, pelanggan bisa mengakses informasi tentang produk atau layanan Anda dengan mudah kapan saja. Kenyamanan ini menjadi daya tarik tersendiri bagi mereka yang menginginkan kemudahan dalam mencari informasi.',
      icons: <FaDoorOpen />,
    },
    {
      title: 'Keterjangkauan Lebih Luas',
      description:
        'Dengan hadirnya website, bisnis Anda bisa menjangkau pelanggan dari berbagai lokasi. Hal ini meningkatkan potensi menarik minat dari sejumlah calon konsumen yang berbeda-beda.',
      icons: <BiWorld />,
    },
    {
      title: 'Tampil di Pencarian',
      description:
        'Website yang dioptimalkan untuk mesin pencari membantu bisnis Anda muncul di hasil pencarian. Ini membuat lebih banyak orang menemukan dan tertarik untuk melihat lebih lanjut tentang apa yang ditawarkan.',
      icons: <FaSearch />,
    },
    {
      title: 'Kemudahan Bertransaksi',
      description:
        'Jika terdapat layanan e-commerce, pelanggan dapat dengan mudah melakukan pembelian atau pemesanan, menarik bagi mereka yang mencari kenyamanan dalam berbelanja.',
      icons: <FaCreditCard />,
    },
    {
      title: 'Interaksi yang Reaktif',
      description:
        'Website yang responsif dan interaktif meningkatkan keterlibatan pelanggan. Dengan konten yang menarik dan fitur yang responsif, pelanggan akan merasa tertarik untuk tetap berinteraksi dan kembali lagi ke website Anda.',
      icons: <FaRocketchat />,
    },
  ];
  const dataPrice = [
    {
      price: 599.0,
      suffix: 'ribu',
      type: 'essential',
      description: 'cocok untuk landing page, portofolio, dan UMKM',
      fitur: [
        {
          name: 'Sekali bayar, tanpa perpanjangan',
        },
        {
          name: 'desain 4 halaman',
        },
        {
          name: 'mobile friendly',
        },
        {
          name: 'optimisasi page speed',
        },
        {
          name: 'termasuk domain .com ',
        },
        {
          name: 'termasuk hosting',
        },
        {
          name: 'full akses login cms dan cpanel',
        },
        {
          name: 'fitur chat whatsapp',
        },
        {
          name: 'revisi 2x',
        },
        {
          name: 'security SSL + HTTPS',
        },
        {
          name: 'Full Support',
        },
        {
          name: 'Unlimited Garansi',
        },
        {
          name: 'dokumen panduan',
        },
      ],
    },

    {
      price: 1.249,
      suffix: 'JT',
      type: 'enterprise',
      description:
        'cocok untuk website ecommerce kompleks, web traffic tinggi, dan bisnis profesional lainnya',
      fitur: [
        {
          name: 'Sekali bayar, tanpa perpanjangan',
        },
        {
          name: 'desain 10 halaman',
        },
        {
          name: 'mobile friendly',
        },
        {
          name: 'optimisasi page speed',
        },
        {
          name: 'termasuk domain .com ',
        },
        {
          name: 'termasuk hosting',
        },
        {
          name: 'full akses login cms dan cpanel',
        },
        {
          name: 'fitur chat whatsapp',
        },
        {
          name: 'fitur livechat',
        },
        {
          name: 'intregrasi google analytics 4',
        },
        {
          name: 'intregrasi sosial media',
        },
        {
          name: 'intregrasi payment gateaway',
        },
        {
          name: 'intregrasi shipping method',
        },
        {
          name: 'catalog product',
        },
        {
          name: 'SEO Optimisasi',
        },
        {
          name: 'revisi 5x',
        },
        {
          name: 'security SSL + HTTPS',
        },
        {
          name: 'Full Support',
        },
        {
          name: 'Unlimited Garansi',
        },
        {
          name: 'dokumen panduan',
        },
      ],
    },
    {
      price: 749.0,
      suffix: 'ribu',
      type: 'Enhanced',
      description: 'cocok untuk ecommerce sederhana, blog',
      fitur: [
        {
          name: 'Sekali bayar, tanpa perpanjangan',
        },
        {
          name: 'desain 6 halaman',
        },
        {
          name: 'mobile friendly',
        },
        {
          name: 'optimisasi page speed',
        },
        {
          name: 'termasuk domain .com ',
        },
        {
          name: 'termasuk hosting',
        },
        {
          name: 'full akses login cms dan cpanel',
        },
        {
          name: 'fitur chat whatsapp',
        },
        {
          name: 'fitur livechat',
        },
        {
          name: 'intregrasi google analytics 4',
        },
        {
          name: 'intregrasi sosial media',
        },
        {
          name: 'catalog product',
        },
        {
          name: 'revisi 3x',
        },
        {
          name: 'security SSL + HTTPS',
        },
        {
          name: 'Full Support',
        },
        {
          name: 'Unlimited Garansi',
        },
        {
          name: 'dokumen panduan',
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
          <p className='text-tersier font-light text-base leading-relaxed lg:text-xl'>
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
                icons={item.icons}
              />
            ) : (
              <Card
                className='max-w-[295px] mx-auto'
                key={index}
                title={item.title}
                description={item.description}
                isGreen
                icons={item.icons}
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
                suffixPrice={items.suffix}
              />
            ) : (
              <Card
                price={items.price}
                descriptionPrice={items.description}
                typePrice={items.type}
                featurePrice={items.fitur}
                isPrice
                suffixPrice={items.suffix}
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

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
      serviceParent: 'webdev',
      suffix: 'ribu',
      type: 'essential',
      description: 'cocok untuk landing page, portofolio, dan UMKM',
      url: 'https://api.whatsapp.com/send?phone=6289675293838&text=Halo%20saya%20ingin%20berkonsultasi%20dan%20bertanya%20lebih%20lanjut%20tentang%20paket%20web%20development%20type%20essential',
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
          name: 'full akses login wordpress',
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
      serviceParent: 'webdev',
      type: 'enterprise',
      url: 'https://api.whatsapp.com/send?phone=6289675293838&text=Halo%20saya%20ingin%20berkonsultasi%20dan%20bertanya%20lebih%20lanjut%20tentang%20paket%20web%20development%20type%20enterprise',

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
          name: 'full akses login wordpress',
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
      serviceParent: 'webdev',
      type: 'enhanced',
      url: 'https://api.whatsapp.com/send?phone=6289675293838&text=Halo%20saya%20ingin%20berkonsultasi%20dan%20bertanya%20lebih%20lanjut%20tentang%20paket%20web%20development%20type%20enhanced',

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
          name: 'full akses login wordpress',
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
            id='hubungi kami'
            isExternal
            target='_blank'
            ariaLabel='Hubungi kami untuk konsultasi'
            type='link'
            href='https://api.whatsapp.com/send?phone=6289675293838&text=Halo%20saya%20ingin%20berkonsultasi'
            isSecondaryHover
            isFlex
            className='mt-2 px-4 py-2 text-primary max-w-[200px]'>
            Order Sekarang
          </CustomButton>
        </div>
      </div>
      {/* End krediblitas content*/}
      {/* Start kenapa website content*/}
      <div>
        <Heading
          classNames='text-primary text-2xl md:text-4xl'
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
          classNames='text-primary text-2xl md:text-4xl'
          title='harga kami'
          description='Paket harga jasa pembuatan website'
        />
        <div className='py-12 md:py-24 flex flex-wrap md:flex-nowrap justify-center items-center gap-x-4 gap-y-5'>
          {dataPrice.map((items, index) => {
            return index % 2 === 0 ? (
              <Card
                className='h-[1050px]'
                price={items.price}
                descriptionPrice={items.description}
                typePrice={items.type}
                featurePrice={items.fitur}
                isPriceLight
                isPrice
                serviceParent={items.serviceParent}
                href={items.url}
                suffixPrice={items.suffix}
              />
            ) : (
              <Card
                className='h-[1050px]'
                serviceParent={items.serviceParent}
                price={items.price}
                descriptionPrice={items.description}
                typePrice={items.type}
                featurePrice={items.fitur}
                isPrice
                href={items.url}
                suffixPrice={items.suffix}
                isPriceRed
              />
            );
          })}
        </div>
        <Card isCardContact />
      </div>
      {/* End kenapa website content*/}
    </div>
    // End Content
  );
}

'use client';
import React, { useState } from 'react';
import Heading from '../Heading';
import Image from 'next/image';
import CustomButton from '../Button';
import { IoIosArrowDown } from 'react-icons/io';
export default function FAQ() {
  const [isActive, setIsActive] = useState(null);
  console.log(isActive);
  const handleAccordion = (index) => {
    if (isActive === index) {
      setIsActive(null);
    } else {
      setIsActive(index);
    }
  };
  const data = [
    {
      title: 'Apakah Website Mahal?',
      content:
        'Membuat website itu murah jika dibandingkan dengan apa yang akan didapatkan kedepannya bagi kemajuan suatu bisnis atau perusahaan. Mau bikin website dengan harga murah? kami solusinya. Mulai dari 700ribuan saja Anda sudah bisa punya website lho.',
    },
    {
      title: 'Apakah Website Dapat Meningkatkan Penjualan?',
      content:
        'Iya, website bisa bantu banget tingkatkan penjualan. Misalnya, punya website bagus bisa bikin orang lebih percaya sama bisnis kamu. Mereka juga bisa liat produk atau layanan kapan aja, 24/7 gitu, yang bisa bantu jualan terus. Plus, dengan situs web yang bagus, kamu bisa muncul di hasil pencarian internet, jadi lebih gampang ditemuin sama orang. Ada juga yang bisa langsung beli dari situ, lho.  Pokoknya, website ini juga bisa kasih data penting buat liat gimana pengunjungnya, apa yang mereka suka, dan gimana caranya biar bisa jualan lebih banyak lagi. Jadi, sebenernya, website itu bisa jadi alat yang super berguna buat bisnis.',
    },
    {
      title: 'Apa saja data yang harus disiapkan?',
      content:
        'Kami membutuhkan beberapa data Anda sebagai bahan untuk membangun website terkait informasi yang ingin Anda tampilkan pada situs Anda. Antara lain: data pengelola ( nama, alamat, nomor kontak ) company profile / profil bisnis, logo, deskripsi produk, foto / gambar produk, dan artikel yang diperlukan.',
    },
    {
      title: 'Apakah terdapat panduan untuk melakukan edit konten web?',
      content:
        'Tentu saja! Kami akan memberi panduan dan jika Anda memiliki pertanyaan kami siap 24/7 untuk menjawab pertanyaan Anda.',
    },
    {
      title:
        'Apakah penting bagi situs web untuk responsif terhadap perangkat mobile?',
      content:
        'Sangat penting! Situs web responsif memastikan tampilan yang optimal di berbagai perangkat, meningkatkan pengalaman pengguna dan mendukung SEO.',
    },
    {
      title:
        'Apa manfaat dari menggunakan layanan digital marketing seperti Google Ads?',
      content:
        'Google Ads memungkinkan Anda untuk menjangkau audiens yang tepat dengan iklan yang relevan. Manfaatnya termasuk peningkatan visibilitas online, penargetan yang presisi, dan kontrol anggaran iklan.',
    },
    {
      title: 'Bagaimana jika saya sudah punya domain dan hosting?',
      content:
        'Jika anda sudah mempunyai keduanya atau salah satunya, Anda bisa langsung menghubungi kami dan akan kami berikan harga yang berbeda dari harga paket kami',
    },
  ];
  return (
    <div className='w-full h-full overflow-hidden py-12 md:py-16'>
      <div className='container mx-auto'>
        <Heading
          classNames='text-primary text-2xl md:text-4xl'
          title='FAQs'
          description='Pertanyaan yang sering ditanyakan'
        />
        <div className='grid grid-cols-1 gap-y-4 md:grid-cols-2 pt-6 md:pt-12'>
          <div className='flex flex-col gap-y-5'>
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`bg-white flex flex-col px-6 py-3 items-start justify-center rounded-2xl transition-all duration-500 `}>
                  <div className='w-full flex items-center justify-between'>
                    <CustomButton
                      className='text-start'
                      type='button'
                      onClick={() => handleAccordion(index)}>
                      {item.title}
                    </CustomButton>

                    <CustomButton
                      className='flex justify-end h-[36px] w-[36px] items-center bg-cyanColor rounded-full px-2 py-1 transition-all duration-500'
                      type='button'
                      onClick={() => handleAccordion(index)}>
                      <IoIosArrowDown
                        className={`text-4xl text-white transition-all duration-500 ${
                          isActive === index ? '-rotate-180' : ''
                        }`}
                      />
                    </CustomButton>
                  </div>
                  <div
                    className={`${
                      isActive === index
                        ? 'opacity-100 h-auto my-4'
                        : 'opacity-0 h-0 overflow-hidden'
                    } transition-all duration-[400] ease-in-out `}>
                    <p>{item.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className='w-full h-full max-h-[440px] flex justify-center'>
            <Image
              src='/images/faq.png'
              alt='FAQ'
              width={490}
              height={440}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

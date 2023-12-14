'use client';
import React, { useState } from 'react';
import { LiaHandshake } from 'react-icons/lia';
import { FaWhatsapp } from 'react-icons/fa';
import CustomButton from '../Button';
import Image from 'next/image';
import Card from '../Card';
export default function ContactPage() {
  const [isActive, setIsActive] = useState(null);
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
    {
      title: 'Apakah ada jaminan produk terjual?',
      content:
        'Perlu Anda ketahui, faktor yang bisa mempengaruhi sebuah produk bisa terjual atau tidak ada banyak. Google Ads hanya menjembatani customer potensial dengan produk yang Anda miliki. Semua transaksi juga bergantung pada tampilan website atau landing page milik Anda, kemampuan sales dalam menawarkan produk yang Anda jual dan yang lainnya. Jadi, Google Ads bukan “penentu” utama sebuah produk bisa terjual ataupun tidak.',
    },
  ];
  return (
    <div className='w-full h-full overflow-hidden container mx-auto px-4 py-12 md:py-24'>
      <div className='flex flex-col items-center justify-center'>
        <div className='flex items-center justify-center rounded-full w-[44px] h-[44px] bg-cyanColor'>
          <LiaHandshake className='text-white text-3xl md:text-4xl' />
        </div>
        <h2 className='text-primary text-center font-normal text-2xl md:text-4xl'>
          Let’s build something awesome together
        </h2>
        <div className='flex py-12 flex-col md:flex-row items-center justify-center gap-x-4 gap-y-2'>
          <div className='mt-8 md:my-16 p-6 max-w-[380px] md:min-w-[380px] h-full bg-gradient-to-br rounded-md from-[#FFE9E9] via-cyan-rgba to-[#FFF3CA]'>
            <div className='bg-white rounded-lg max-w-[330px] md:min-w-[330px] p-6 flex flex-col'>
              <div className='max-w-[150px] bg-[#FFDC60] px-4 py-1 rounded-full flex items-center justify-start'>
                Telephone
              </div>
              <hr className='my-4' />
              <div className='flex items-center gap-x-2'>
                <FaWhatsapp className='text-2xl text-[#5956E8]' />
                <div className='flex flex-col'>
                  <CustomButton
                    isExternal
                    target='_blank'
                    ariaLabel='Telepon Sekarang'
                    type='link'
                    href='https://api.whatsapp.com/send?phone=6289675293838&text=Halo%20saya%20ingin%20berkonsultasi'>
                    +6289675293838
                  </CustomButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Card isCardContact />
        <div className='grid grid-cols-1 gap-y-4 md:grid-cols-2 pt-6 md:pt-12'>
          <div className='flex flex-col gap-y-5'>
            {data.map((item, index) => {
              return (
                <Card
                  isActiveState={isActive}
                  isFAQ
                  id={index}
                  handleAccordion={handleAccordion}
                  title={item.title}
                  description={item.content}
                  key={index}
                />
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

'use client';
import Image from 'next/image';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function Testimonial() {
  const data = [
    {
      name: 'Shirley Fultz',
      job: 'Designer',
      review:
        ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui distinctio error explicabo sapiente labore odio perspiciatis voluptatum ipsum iure ullam.',
      star: 4.8,
      imgUrl: '/images/testi.png',
    },
    {
      name: 'John Doe',
      job: 'Backend Dev',
      review:
        ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui distinctio error explicabo sapiente labore odio perspiciatis voluptatum ipsum iure ullam.',
      star: 4.5,
      imgUrl: '/images/testi.png',
    },
    {
      name: 'Nao Lynn',
      job: 'Public Relationship',
      review:
        ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui distinctio error explicabo sapiente labore odio perspiciatis voluptatum ipsum iure ullam.',
      star: 5,
      imgUrl: '/images/testi.png',
    },
    {
      name: 'Linda',
      job: 'Broadcasting',
      review:
        ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui distinctio error explicabo sapiente labore odio perspiciatis voluptatum ipsum iure ullam.',
      star: 4.4,
      imgUrl: '/images/testi.png',
    },
  ];
  return (
    <section className='w-full h-full overflow-hidden px-4 py-12 md:py-24'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-12'>
          <div className='md:col-start-1 md:col-end-4 flex flex-col gap-y-4'>
            <Image
              src='/images/3star.png'
              width={105}
              height={70}
              alt='3 Bintang Icon'
              className='max-w-[105px] max-h-[70px]'
            />
            <h2 className='text-primary font-medium text-3xl md:text-4xl'>
              Apa yang dikatakan client tentang kami
            </h2>
          </div>
          <div className='flex md:col-start-5 md:col-end-12'>
            <Carousel
              showArrows={true}
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
              interval={6100}>
              {data?.map((items, index) => {
                return (
                  <div
                    className='flex gap-y-2 flex-col'
                    key={index}>
                    <span className='text-sekunder text-start font-medium text-8xl'>
                      &bdquo;
                    </span>
                    <p className='text-start text-primary font-normal text-bas md:text-lg'>
                      {items.review}
                    </p>
                    <Image
                      src={items.imgUrl}
                      alt={items.name}
                      width={32}
                      height={32}
                      className='max-w-[36px] max-h-[36px]'
                    />
                    <p className='text-primary text-start font-normal md:text-xl text-base'>
                      {items.name}
                    </p>
                    <span className='text-start text-tersier font-normal text-sm'>
                      {items.job}
                    </span>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
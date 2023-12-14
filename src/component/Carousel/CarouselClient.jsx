'use client';
import Image from 'next/image';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
export default function CarouselSlider() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      paritialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      paritialVisibilityGutter: 30,
    },
  };
  const images = [
    {
      name: 'netflix',
      imageUrl: '/images/netflix.png',
    },
    {
      name: 'amazon',
      imageUrl: '/images/amazon.png',
    },
    {
      name: 'forbes',
      imageUrl: '/images/forbes.png',
    },
    {
      name: 'enterpreuner',
      imageUrl: '/images/enterpreuner.png',
    },
    {
      name: 'sej',
      imageUrl: '/images/sej.png',
    },
  ];
  return (
    <>
      <Carousel
        infinite={true}
        ssr
        partialVisbile={false}
        responsive={responsive}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        itemClass='items-center'>
        {images.map((item, index) => (
          <Image
            key={index}
            src={item.imageUrl}
            alt={item.name}
            width={170}
            height={55}
            className='w-[170px] h-[55px]'
            style={{ cursor: 'pointer' }}
            draggable={false}
          />
        ))}
      </Carousel>
    </>
  );
}

import React from 'react';
import CarouselSlider from '../Carousel/CarouselClient';
import Card from '../Card';
import CustomButton from '../Button';

export default function Trusted() {
  const list = [
    {
      text: 'PageTraffic offers top notch SEO and digital marketing solutions to help you rank high on search results, connect with.',
    },
    {
      text: 'PageTraffic offers top notch SEO and digital marketing solutions to help you rank high on search results, connect with.',
    },
    {
      text: 'PageTraffic offers top notch SEO and digital marketing solutions to help you rank high on search results, connect with.',
    },
    {
      text: 'PageTraffic offers top notch SEO and digital marketing solutions to help you rank high on search results, connect with.',
    },
  ];
  const cardList = [
    {
      title: 'Harga Terjangkau',
      description:
        'Kami berkomitmen untuk memberikan ON Time Support Fast Respon ketika Anda butuh bantuan.',
    },
    {
      title: 'Harga Terjangkau',
      description:
        'Kami berkomitmen untuk memberikan ON Time Support Fast Respon ketika Anda butuh bantuan.',
    },
    {
      title: 'Harga Terjangkau',
      description:
        'Kami berkomitmen untuk memberikan ON Time Support Fast Respon ketika Anda butuh bantuan.',
    },
    {
      title: 'Harga Terjangkau',
      description:
        'Kami berkomitmen untuk memberikan ON Time Support Fast Respon ketika Anda butuh bantuan.',
    },
  ];
  return (
    <section className='w-full h-full overflow-hidden px-4 py-16 md:py-24'>
      <div className='container mx-auto'>
        <div className='mb-10 md:mb-6'>
          <h2 className='text-sekunder font-medium text-[42px] text-center'>
            Trusted By
          </h2>
          <p className='text-primary font-normal text-base text-center'>
            Dipercaya oleh ratusan perusahaan ternama
          </p>
        </div>
        <CarouselSlider />
        <div className='grid gap-x-6 gap-y-16 md:gap-y-0 grid-cols-1 items-center md:grid-cols-12 pt-12 pb-6'>
          <div className='flex flex-col md:col-start-1 md:col-end-7'>
            <h2 className='text-primary font-medium text-3xl md:text-4xl'>
              Kenapa Memilih Kami?
            </h2>
            <p className='text-tersier font-light text-sm'>
              PageTraffic offers top notch SEO and digital marketing solutions
              to help you rank high on search results, connect with.
            </p>
            <ul>
              {list.map((item, index) => {
                return (
                  <li
                    key={index}
                    className='flex my-4 items-center gap-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='15'
                      height='14'
                      viewBox='0 0 15 14'
                      fill='none'>
                      <g clipPath='url(#clip0_14_77)'>
                        <path
                          d='M7.34388 12.8333C10.7238 12.8333 13.4638 10.2216 13.4638 6.99996C13.4638 3.7783 10.7238 1.16663 7.34388 1.16663C3.96396 1.16663 1.224 3.7783 1.224 6.99996C1.224 10.2216 3.96396 12.8333 7.34388 12.8333Z'
                          stroke='#FF1D03'
                          strokeWidth={2}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M7.34384 8.75C8.35781 8.75 9.1798 7.9665 9.1798 7C9.1798 6.0335 8.35781 5.25 7.34384 5.25C6.32986 5.25 5.50787 6.0335 5.50787 7C5.50787 7.9665 6.32986 8.75 7.34384 8.75Z'
                          stroke='#FF1D03'
                          strokeWidth={2}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_14_77'>
                          <rect
                            width='14.6877'
                            height='14'
                            fill='white'
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>{item.text} </span>
                  </li>
                );
              })}
            </ul>
            <CustomButton
              isSecondary
              isSecondaryHover
              type='link'
              ariaLabel='Hubungi Kami'
              href='/'
              isFlex
              isRounded
              className='btn text-white max-w-[180px] flex items-center'>
              Hubungi Kami
            </CustomButton>
          </div>
          <div className='w-full flex flex-wrap justify-start md:grid md:grid-rows-3 md:grid-cols-2 md:col-start-7 gap-y-4 md:col-end-13'>
            {cardList.map((item, index) => {
              return index % 2 === 0 ? (
                <Card
                  className={`max-w-[285px] max-h-[335px] md:max-h-[400px] ${
                    index === 2 ? 'md:row-start-3 md:col-start-2' : ''
                  }`}
                  isRed
                  title={item.title}
                  description={item.description}
                />
              ) : (
                <Card
                  className={`max-w-[285px] max-h-[335px]  md:max-h-[400px] ${
                    index == 3 ? 'md:row-start-2' : ''
                  } ${index == 1 ? 'md:row-start-2 ' : ''}`}
                  isGreen
                  title={item.title}
                  description={item.description}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
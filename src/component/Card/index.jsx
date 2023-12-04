import Image from 'next/image';
import React from 'react';
import propTypes from 'prop-types';
import Link from 'next/link';
import { FaCheck } from 'react-icons/fa';
export default function Card({
  isRed,
  isGreen,
  isHasLink,
  href,
  className,
  title,
  description,
  isPortofolio,
  titlePortofolio,
  portofolioImageUrl,
  isPrice,
}) {
  const data = [
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
  ];
  const classNames = [className];
  if (isRed)
    classNames.push(
      'border-t-redColor border-s-redColor border-e-redColor border-b-white hover:border-b-redColor'
    );
  if (isGreen)
    classNames.push(
      'border-t-sekunder border-s-sekunder border-e-sekunder  border-b-white hover:border-b-sekunder'
    );
  if (isPortofolio) {
    return (
      <div className='max-w-[375px] max-h-[275px] overflow-hidden transition-all duration-200 hover:scale-105'>
        <Image
          src={portofolioImageUrl}
          width={375}
          height={275}
          alt={titlePortofolio}
          className='w-full h-full'
        />
      </div>
    );
  }
  if (isPrice) {
    return (
      <div className='card_price w-full px-4 pt-4 pb-6 rounded-[26px] bg-redColor max-w-xs'>
        <div className='flex justify-end'>
          <div className='popular flex  rounded-full px-4 py-1 bg-[#C10A20]'>
            <p className='uppercase text-white text-[10px]'>most popular</p>
          </div>
        </div>
        <div className='card_price_content'>
          <h4 className='text-white text-2xl lg:text-4xl font-semibold'>
            Rp1,5 JT
          </h4>
          <h5 className='text-white text-xl lg:text-3xl font-medium mt-4'>
            Enterprise
          </h5>
          <p className='text-white font-light text-sm lg:text-base leading-normal mt-2'>
            cocok untuk website ecommerce, web trafic tinggi
          </p>
          {data.map((items, index) => {
            return (
              <div
                key={index}
                className='flex items-center gap-x-2 mt-2'>
                <div className='bg-[#E9344A] rounded-full p-1 '>
                  <FaCheck className='text-white text-xl' />
                </div>
                <p className='text-sm text-white capitalize font-medium'>
                  {items.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  return (
    <div
      className={`w-full relative flex flex-col shadow-lg rounded-3xl border transition-all duration-200 ease-linear px-6 py-16 ${
        isGreen ? 'bg-[#F6FFFE]' : ''
      } ${classNames.join(' ')}`}>
      <Image
        src='/images/spinner.png'
        width={32}
        height={32}
        className='max-w-[32px] justify-end top-3 bottom-0 right-5 absolute animate-rotate-tringale'
        alt='Rectangle animation'
      />
      <div
        className={`flex w-[100px] h-[100px] justify-center items-center ${
          isRed ? 'bg-[#FFECEA]' : 'bg-[#D2FCFF]'
        } rounded-xl`}>
        <Image
          src={isGreen ? '/images/ex_green.png' : '/images/icons_ex.svg'}
          className='max-w-[50px] max-h-[50px]  w-full h-full'
          width={50}
          height={50}
          alt='Example Icons'
        />
      </div>
      <div className='text_content my-4 flex flex-col gap-y-2'>
        <p className='font-medium capitalize text-2xl text-primary'>{title}</p>
        <p className='font-normal text-base capitalize text-tersier'>
          {description}
        </p>
        {isHasLink ? (
          <Link
            href={href}
            className={`${
              isRed ? 'text-redColor' : 'text-cyanColor'
            } underline font-normal text-base hover:text-blue-600`}>
            Lihat daftar harga
          </Link>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

Card.propTypes = {
  isRed: propTypes.bool,
  isGreen: propTypes.bool,
  isHasLink: propTypes.bool,
  isPortofolio: propTypes.bool,
  isPrice: propTypes.bool,
  isHero: propTypes.bool,
  portofolioImageUrl: propTypes.string.isRequired,
  titlePortofolio: propTypes.string.isRequired,
  href: propTypes.string,
  className: propTypes.string,
  title: propTypes.string,
  description: propTypes.string,
  icons: propTypes.any,
};

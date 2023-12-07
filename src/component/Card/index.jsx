import Image from 'next/image';
import React from 'react';
import propTypes from 'prop-types';
import Link from 'next/link';
import { FaCheck } from 'react-icons/fa';
import CustomButton from '../Button';
export default function Card({
  isRed,
  isGreen,
  isCardSmall,
  titleCardSmall,
  descriptionCardSmall,
  isHasLink,
  href,
  className,
  title,
  description,
  isPortofolio,
  titlePortofolio,
  portofolioImageUrl,
  isPrice,
  isPriceRed,
  isPriceLight,
  price,
  descriptionPrice,
  typePrice,
  featurePrice,
}) {
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
  if (isCardSmall) {
    return (
      <div
        className={`px-4 py-3 shadow-lg md:min-w-[360px] max-h-[100px] rounded-3xl border transition-all duration-200 ease-linear ${classNames.join(
          ' '
        )}`}>
        <div className='flex justify-end'>
          <Image
            src='/images/spinner.png'
            width={24}
            height={24}
            className='max-w-[24px] justify-end animate-rotate-tringale'
            alt='Rectangle animation'
          />
        </div>
        <div className='flex gap-x-2'>
          <div
            className={`flex w-[50px] h-[50px] justify-center items-center ${
              isRed ? 'bg-[#FFECEA]' : 'bg-[#D2FCFF]'
            } rounded-xl`}>
            <Image
              src={isGreen ? '/images/ex_green.png' : '/images/icons_ex.svg'}
              className='max-w-[25px] max-h-[25px]  w-full h-full'
              width={25}
              height={25}
              alt='Example Icons'
            />
          </div>
          <div className='flex flex-col'>
            <p className='capitalize font-medium text-primary text-lg  md:text-xl'>
              {titleCardSmall}
            </p>
            <p className='text-sm font-light text-primary'>
              {descriptionCardSmall}
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (isPrice) {
    if (isPriceRed) {
      return (
        <div className='bg-[url("/images/bg-card-price.svg")] bg-no-repeat bg-cover bg-center card_price w-full px-4 pt-4 pb-6 rounded-[26px] bg-redColor max-w-xs shadow-lg shadow-redColor'>
          <div className='flex justify-end'>
            <div className='popular flex  rounded-full px-4 py-1 bg-[#C10A20]'>
              <p className='uppercase text-white text-[10px]'>most popular</p>
            </div>
          </div>
          <div className='card_price_content'>
            <h4 className='text-white text-2xl lg:text-4xl font-semibold'>
              Rp{price} JT
            </h4>
            <h5 className='text-white capitalize text-xl lg:text-3xl font-medium mt-4'>
              {typePrice}
            </h5>
            <p className='text-white capitalize font-light text-sm lg:text-base leading-normal mt-2'>
              {descriptionPrice}
            </p>
            {featurePrice.map((items, index) => {
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
            <CustomButton
              isRoundedFull
              isFlex
              isFull
              isHover
              className='items-center justify-center bg-white px-4 py-2 text-redColor font-semibold mt-4 hover:bg-gray-100'>
              Pilih Paket
            </CustomButton>
          </div>
        </div>
      );
    }
    if (isPriceLight) {
      return (
        <div className='card_price w-full px-4 pt-4 pb-6 rounded-[26px] bg-[#f6fffe] max-w-xs border border-t-sekunder border-s-sekunder border-e-sekunder  border-b-white hover:border-b-sekunder'>
          <div className='flex justify-end'>
            <Image
              src='/images/spinner.png'
              width={32}
              height={32}
              className='max-w-[32px] justify-end animate-rotate-tringale'
              alt='Rectangle animation'
            />
          </div>

          <div className='card_price_content'>
            <h4 className='text-primary text-2xl lg:text-4xl font-semibold'>
              Rp{price} JT
            </h4>
            <h5 className='text-primary capitalize text-xl lg:text-3xl font-medium mt-4'>
              {typePrice}
            </h5>
            <p className='text-tersier capitalize font-light text-sm lg:text-base leading-normal mt-2'>
              {descriptionPrice}
            </p>
            {featurePrice.map((items, index) => {
              return (
                <div
                  key={index}
                  className='flex items-center gap-x-2 mt-2'>
                  <div className='bg-cyan-rgba rounded-full p-1 '>
                    <FaCheck className='text-cyanColor text-xl' />
                  </div>
                  <p className='text-sm text-primary capitalize font-medium'>
                    {items.name}
                  </p>
                </div>
              );
            })}
            <CustomButton
              isRoundedFull
              isFlex
              isFull
              isHover
              className='items-center justify-center bg-cyan-rgba px-4 py-2 text-cyanColor font-semibold mt-4 hover:bg-gray-100'>
              Pilih Paket
            </CustomButton>
          </div>
        </div>
      );
    }
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
  isCardSmall: propTypes.bool,
  isHasLink: propTypes.bool,
  isPortofolio: propTypes.bool,
  isPrice: propTypes.bool,
  isPriceRed: propTypes.bool,
  isPriceLight: propTypes.bool,
  portofolioImageUrl: propTypes.string.isRequired,
  titlePortofolio: propTypes.string.isRequired,
  href: propTypes.string,
  className: propTypes.string,
  title: propTypes.string,
  titleCardSmall: propTypes.string,
  descriptionCardSmall: propTypes.string,
  description: propTypes.string,
  icons: propTypes.any,
};

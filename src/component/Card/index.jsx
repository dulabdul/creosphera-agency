'use client';
import Image from 'next/image';
import React, { useState, useRef } from 'react';
import propTypes from 'prop-types';
import Link from 'next/link';
import { FaCheck } from 'react-icons/fa';
import CustomButton from '../Button';
import { IoIosArrowDown } from 'react-icons/io';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Inline from 'yet-another-react-lightbox/plugins/inline';
import {
  isImageFitCover,
  isImageSlide,
  useLightboxProps,
  useLightboxState,
} from 'yet-another-react-lightbox';

function isNextJsImage(slide) {
  return (
    isImageSlide(slide) &&
    typeof slide.width === 'number' &&
    typeof slide.height === 'number'
  );
}

function NextJsImage({ slide, offset, rect }) {
  const {
    on: { click },
    carousel: { imageFit },
  } = useLightboxProps();

  const { currentIndex } = useLightboxState();

  const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit);

  if (!isNextJsImage(slide)) return undefined;

  const width = !cover
    ? Math.round(
        Math.min(rect.width, (rect.height / slide.height) * slide.width)
      )
    : rect.width;

  const height = !cover
    ? Math.round(
        Math.min(rect.height, (rect.width / slide.width) * slide.height)
      )
    : rect.height;

  return (
    <div style={{ position: 'relative', width, height }}>
      <Image
        fill
        alt=''
        src={slide}
        loading='eager'
        draggable={false}
        placeholder={slide.blurDataURL ? 'blur' : undefined}
        style={{
          objectFit: cover ? 'cover' : 'contain',
          cursor: click ? 'pointer' : undefined,
        }}
        sizes={`${Math.ceil((width / window.innerWidth) * 100)}vw`}
        onClick={
          offset === 0 ? () => click?.({ index: currentIndex }) : undefined
        }
      />
    </div>
  );
}
export default function Card({
  isRed,
  isGreen,
  isCardSmall,
  isPortofolio,
  isPrice,
  isPriceRed,
  isPriceLight,
  isCardContact,
  isFAQ,
  id,
  handleAccordion,
  isActiveState,
  titleCardSmall,
  descriptionCardSmall,
  isHasLink,
  href,
  className,
  title,
  description,
  serviceParent,
  titlePortofolio,
  portofolioImageUrl,
  icons,
  price,
  suffixPrice,
  descriptionPrice,
  typePrice,
  featurePrice,
}) {
  const [open, setOpen] = useState(false);
  const captionsRef = useRef();
  const zoomRef = useRef();
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
        <button
          id={titlePortofolio}
          onClick={() => setOpen(true)}>
          <Image
            width={375}
            height={275}
            src={portofolioImageUrl}
            alt={titlePortofolio}
            className='w-full h-full'
          />
        </button>
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          toolbar={{
            buttons: [
              href === undefined ? (
                <></>
              ) : (
                <button
                  key='my-button'
                  type='button'
                  className='yarl__button'>
                  <a
                    href={href}
                    target='_blank'>
                    Open Portofolio
                  </a>
                </button>
              ),
              'close',
            ],
          }}
          slides={[
            {
              title: titlePortofolio,
              alt: titlePortofolio,
              src: portofolioImageUrl,
            },
          ]}
          plugins={[Captions, Zoom]}
          render={{
            slide: NextJsImage,
            buttonNext: () => null,
            buttonPrev: () => null,
          }}
          on={{
            click: () => {
              (captionsRef.current?.visible
                ? captionsRef.current?.hide
                : captionsRef.current?.show)?.();
            },
          }}
          zoom={{ ref: zoomRef }}
          inline={{
            style: {
              imageFit: 'cover',
              width: '100%',
              maxWidth: '900px',
              aspectRatio: '3 / 2',
            },
          }}
          captions={{ ref: captionsRef }}
        />

        <button
          type='button'
          onClick={() => zoomRef.current?.zoomIn()}></button>

        <button
          type='button'
          onClick={() => zoomRef.current?.zoomOut()}></button>
      </div>
    );
  }
  if (isCardSmall) {
    return (
      <div
        className={`px-4 py-3 shadow-lg rounded-3xl border transition-all duration-200 ease-linear min-h-[200px] ${classNames.join(
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
        <div className='flex flex-col gap-x-2'>
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
        <div
          className={`bg-[url("/images/bg-card-price.svg")] bg-no-repeat bg-cover bg-center card_price w-full px-4 pt-4 pb-6 rounded-[26px] bg-redColor max-w-xs shadow-lg  shadow-redColor ${classNames.join(
            ''
          )}`}>
          <div className='flex justify-end'>
            <div className='popular flex  rounded-full px-4 py-1 bg-[#C10A20]'>
              <p className='uppercase text-white text-[10px]'>most popular</p>
            </div>
          </div>
          <div className='card_price_content'>
            <h4 className='text-white text-2xl lg:text-4xl font-semibold'>
              Rp
              {suffixPrice === 'JT'
                ? `${price}${suffixPrice}`
                : `${price}${suffixPrice}`}
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
              type='link'
              href={href}
              target='_blank'
              isExternal
              ariaLabel='Order Sekarang'
              isFlex
              isFull
              id={`layanan ${serviceParent} ${typePrice}`}
              className='items-center justify-center px-4 py-2 font-semibold mt-4 bg-white hover:bg-gray-300 transition-all'>
              Pilih Paket
            </CustomButton>
          </div>
        </div>
      );
    }
    if (isPriceLight) {
      return (
        <div
          className={`card_price w-full px-4 pt-4 pb-6 rounded-[26px] bg-[#f6fffe] max-w-xs max-h-[1100px] border border-t-sekunder border-s-sekunder border-e-sekunder  border-b-white hover:border-b-sekunder ${classNames.join(
            ''
          )}`}>
          <div className='flex justify-end'>
            <Image
              src='/images/spinner.png'
              width={32}
              height={32}
              className='max-w-[32px] justify-end animate-rotate-tringale'
              alt='Rectangle animation'
            />
          </div>

          <div className='card_price_content flex flex-col h-full w-full overflow-hidden justify-evenly'>
            <div className='flex flex-col justify-between h-[70%]'>
              <h4 className='text-primary text-2xl lg:text-4xl font-semibold'>
                Rp
                {suffixPrice === 'JT'
                  ? `${price}${suffixPrice}`
                  : `${price}${suffixPrice}`}
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
            </div>
            <CustomButton
              isRoundedFull
              isFlex
              type='link'
              href={href}
              target='_blank'
              isExternal
              ariaLabel='Order Sekarang'
              isFull
              isSecondary
              id={`layanan ${serviceParent} ${typePrice}`}
              isSecondaryHover
              className='items-center justify-center text-primary px-4 py-2 font-semibold mt-4'>
              Pilih Paket
            </CustomButton>
          </div>
        </div>
      );
    }
  }
  if (isCardContact) {
    return (
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
              id='hubungi kami'
              className='px-6 py-3 bg-primary text-white hover:bg-white hover:text-primary transition-all duration-500'
              isRounded
              ariaLabel='Hubungi kami untuk konsultasi'
              isHover
              href='https://api.whatsapp.com/send?phone=6289675293838&text=Halo%20saya%20ingin%20berkonsultasi'
              isExternal
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
    );
  }
  if (isFAQ) {
    return (
      <div
        className={`bg-white flex flex-col px-6 py-3 items-start justify-center rounded-2xl transition-all duration-500 `}>
        <div className='w-full flex items-center justify-between'>
          <CustomButton
            className='text-start'
            type='button'
            ariaLabel='Open & Closed FAQ'
            onClick={() => handleAccordion(id)}>
            {title}
          </CustomButton>

          <CustomButton
            className='flex justify-end h-[36px] w-[36px] items-center bg-cyanColor rounded-full px-2 py-1 transition-all duration-500'
            type='button'
            ariaLabel='Open & Closed FAQ'
            onClick={() => handleAccordion(id)}>
            <IoIosArrowDown
              className={`text-4xl text-white transition-all duration-500 ${
                isActiveState === id ? '-rotate-180' : ''
              }`}
            />
          </CustomButton>
        </div>
        <div
          className={`${
            isActiveState === id
              ? 'opacity-100 h-auto my-4'
              : 'opacity-0 h-0 overflow-hidden'
          } transition-all duration-[400] ease-in-out `}>
          <p>{description}</p>
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
        <div
          className={`text-6xl ${
            isGreen ? 'text-cyanColor' : 'text-redColor'
          }`}>
          {icons}
        </div>
      </div>
      <div className='text_content my-4 flex flex-col gap-y-2'>
        <p className='font-medium capitalize text-2xl text-primary'>{title}</p>
        <p className='font-normal text-base text-tersier leading-normal'>
          {description}
        </p>
        {isHasLink ? (
          <Link
            id={title}
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
  isCardContact: propTypes.bool,
  isFAQ: propTypes.bool,
  handleAccordion: propTypes.func,
  icons: propTypes.node,
  portofolioImageUrl: propTypes.string,
  titlePortofolio: propTypes.string,
  href: propTypes.string,
  className: propTypes.string,
  title: propTypes.string,
  titleCardSmall: propTypes.string,
  descriptionCardSmall: propTypes.string,
  description: propTypes.string,
  icons: propTypes.any,
};

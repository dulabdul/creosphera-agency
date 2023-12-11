import React from 'react';
import { LiaHandshake } from 'react-icons/lia';
import { FaWhatsapp } from 'react-icons/fa';
import CustomButton from '../Button';
import Image from 'next/image';
import FAQ from '../Home/FAQ';
import Card from '../Card';
export default function ContactPage() {
  return (
    <div className='w-full h-full overflow-hidden container mx-auto px-4 py-12 md:py-24'>
      <div className='flex flex-col items-center justify-center'>
        <div className='flex items-center justify-center rounded-full w-[44px] h-[44px] bg-cyanColor'>
          <LiaHandshake className='text-white text-3xl md:text-4xl' />
        </div>
        <h2 className='text-primary text-center font-normal text-2xl md:text-4xl'>
          Let’s build something awesome together
        </h2>
        <div className='flex flex-col md:flex-row items-center justify-center gap-x-4 gap-y-2'>
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
                    type='link'
                    href='/'>
                    +6289675293838
                  </CustomButton>
                </div>
              </div>
            </div>
          </div>
          <div className='my-8 md:my-16 p-6 max-w-[380px] md:min-w-[380px] h-full bg-gradient-to-br rounded-md from-[#FFE9E9] via-cyan-rgba to-[#FFF3CA]'>
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
                    type='link'
                    href='/'>
                    +6289675293838
                  </CustomButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Card isCardContact />
        <FAQ />
      </div>
    </div>
  );
}

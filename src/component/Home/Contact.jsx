import Image from 'next/image';
import CustomButton from '../Button';

export default function Contact() {
  return (
    <div className='w-full h-full overflow-hidden py-12 md:pt-24 pb-0 px-4'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap md:flex-nowrap items-center'>
          <div className='flex flex-col gap-y-8'>
            <p className='text-4xl md:text-5xl font-normal text-[#292930]'>
              <span className='text-[#5956E8] font-medium'>
                Konsultasi gratis
              </span>{' '}
              sekarang dan kembangkan bisnis anda
            </p>
            <CustomButton
              type='link'
              id='hubungi kami'
              isExternal
              href='https://api.whatsapp.com/send?phone=6289675293838&text=Halo%20saya%20ingin%20berkonsultasi'
              isSecondary
              isSecondaryHover
              isRounded
              isFlex
              ariaLabel='Hubungi Kami'
              className='btn text-primary items-center justify-center max-w-[160px]'>
              Hubungi Kami
            </CustomButton>
          </div>
          <div>
            <Image
              src='/images/rocket.png'
              alt='Hubungi Kami'
              width={527}
              height={415}
              className='w-full h-full'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

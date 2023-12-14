import CustomButton from '@/component/Button';
import Image from 'next/image';

export default function NotFound() {
  return (
    <section className='w-full h-full py-20 md:py-24 px-4'>
      <div className='flex gap-y-4 flex-col items-center justify-center'>
        <Image
          src='/images/404.png'
          width={630}
          height={255}
          alt='Halaman Tidak Ditemukan'
          className='max-w-[350px] max-h-[150px] md:max-w-[630px] md:max-h-[255px]'
        />
        <p className='text-center font-semibold text-primary text-3xl md:text-5xl'>
          Ooops, halaman ini tidak ditemukan
        </p>
        <p className='text-center font-normal text-lg text-tersier'>
          Mungkin kamu nyasar, segera kembali ke halaman utama yuk
        </p>
        <CustomButton
          type='link'
          href='/'
          ariaLabel='Kembali ke halaman utama'
          isSecondary
          isSecondaryHover
          isFlex
          isRounded
          className='text-white items-center btn'>
          Kembali ke halaman utama
        </CustomButton>
      </div>
    </section>
  );
}

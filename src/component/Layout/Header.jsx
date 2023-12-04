'use client';

import { Button, Navbar, Dropdown } from 'flowbite-react';
import Image from 'next/image';
import CustomButton from '../Button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function Header() {
  const path = usePathname();

  const menus = [
    {
      name: 'home',
      route: '/',
      isDropdown: false,
    },
    {
      name: 'Layanan',
      route: '/layanan',
      isDropdown: true,
      dropdown: [
        {
          dropdownName: 'web development',
          route: '/layanan/web-development',
        },
        {
          dropdownName: 'search engine optimization',
          route: '/layanan/search-engine-optimization',
        },
        {
          dropdownName: 'digital marketing',
          route: '/layanan/digital-marketing',
        },
      ],
    },
    {
      name: 'portofolio',
      route: '/portofolio',
      isDropdown: false,
    },
    {
      name: 'tentang',
      route: '/tentang-kami',
      isDropdown: false,
    },
    {
      name: 'blog',
      route: '/blog',
      isDropdown: false,
    },
    {
      name: 'kontak',
      route: '/kontak',
      isDropdown: false,
    },
  ];
  return (
    <header className='w-full top-0 z-50 scrolled sm:no-scrolled flex items-center'>
      <Navbar
        fluid
        rounded
        className='container mx-auto bg-transparent'>
        <Navbar.Brand href='/'>
          <Image
            alt='Flowbite React Logo'
            className='w-[220px] md:w-[120px] xl:w-full h-full'
            src='/images/logo/creosphera.png'
            width={200}
            height={50}
          />
        </Navbar.Brand>
        <div className='flex md:order-2'>
          <CustomButton
            type='link'
            href='/'
            isExternal
            target='_blank'
            ariaLabel='Hubungi Kami'
            isPrimary
            isPrimaryHover
            isRoundedFull
            className='btn text-white cursor-pointer w-1/2 sm:w-full mt-2 hidden md:block'>
            Hubungi Kami
          </CustomButton>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className='z-[99]'>
          {menus.map((menu, index) => {
            return (
              <li
                key={index}
                className={`${
                  path === menu.route ? 'active' : ''
                } capitalize text-primary hover:text-sekunder transition-all text-lg font-normal`}>
                {menu.isDropdown ? (
                  <Dropdown
                    inline
                    label={menu.name}>
                    {menu.dropdown.map((item, index) => {
                      return (
                        <Link
                          className='flex flex-col px-4 py-2'
                          href={item.route}
                          key={index}>
                          {item.dropdownName}
                        </Link>
                      );
                    })}
                  </Dropdown>
                ) : (
                  <Link href={menu.route}>{menu.name}</Link>
                )}
              </li>
            );
          })}
          <CustomButton
            type='link'
            href='/'
            isExternal
            target='_blank'
            ariaLabel='Hubungi Kami'
            isPrimary
            isPrimaryHover
            isRoundedFull
            className='btn text-white cursor-pointer w-1/2 sm:w-full mt-2 sm:hidden'>
            Hubungi Kami
          </CustomButton>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

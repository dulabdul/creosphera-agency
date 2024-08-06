'use client';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react';
import { FaBars, FaXmark } from 'react-icons/fa6';
import Image from 'next/image';
import CustomButton from '../Button';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { usePathname } from 'next/navigation';

export default function Header() {
  const path = usePathname();
  const [scrolledNav, setScrolledNav] = useState(null);

  const listenScrollEvent = () => {
    window.scrollY > 20 ? setScrolledNav('scrolled') : setScrolledNav('');
  };
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);
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
      name: 'kontak',
      route: '/kontak',
      isDropdown: false,
    },
  ];
  return (
    <header
      className={`w-full top-0 z-[99] scrolled sm:no-scrolled flex items-center absolute ${scrolledNav}`}>
      <Disclosure
        as='nav'
        className='bg-transparent w-full '>
        <div className='mx-auto w-full px-2 sm:px-6 lg:px-8'>
          <div className='relative flex h-16 items-center justify-between'>
            <div className='absolute inset-y-0 right-0 flex items-center sm:hidden'>
              {/* Mobile menu button*/}
              <DisclosureButton className='group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                <span className='absolute -inset-0.5' />

                <FaBars
                  aria-hidden='true'
                  className='block h-6 w-6 group-data-[open]:hidden'
                />
                <FaXmark
                  aria-hidden='true'
                  className='hidden h-6 w-6 group-data-[open]:block'
                />
              </DisclosureButton>
            </div>
            <div className='flex items-center w-full justify-start sm:justify-evenly'>
              <div className='flex flex-shrink-0 items-center'>
                <Link
                  type='link'
                  href={'/'}>
                  <Image
                    alt='Creosphera Logo'
                    className='w-[220px] md:w-[120px] xl:w-full h-full'
                    src='/images/logo/creosphera.png'
                    width={200}
                    height={50}
                  />
                </Link>
              </div>
              <div className='hidden sm:ml-6 sm:block'>
                <div className='flex space-x-10'>
                  {menus.map((menu) =>
                    menu.isDropdown ? (
                      <Menu
                        as='div'
                        className='relative ml-3'>
                        <div>
                          <MenuButton
                            className={`flex items-center ${
                              path === menu.route
                                ? 'active'
                                : 'relative flex capitalize text-primary hover:text-sekunder transition-all text-lg font-normal'
                            }`}>
                            {menu.name}{' '}
                            <MdKeyboardArrowDown className='text-2xl' />
                          </MenuButton>
                        </div>
                        <MenuItems
                          transition
                          className='absolute flex flex-col gap-y-2 px-4 right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in'>
                          {menu.dropdown.map((item, index) => {
                            return (
                              <MenuItem>
                                <Link
                                  href={item.route}
                                  key={index}
                                  className='capitalize text-primary hover:text-sekunder transition-all text-lg font-normal'>
                                  {item.dropdownName}
                                </Link>
                              </MenuItem>
                            );
                          })}
                        </MenuItems>
                      </Menu>
                    ) : (
                      <Link
                        className={`${
                          path === menu.route ? 'active' : ''
                        } capitalize text-primary hover:text-sekunder transition-all text-lg font-normal`}
                        id={menu.name}
                        href={menu.route}>
                        {menu.name}
                      </Link>
                    )
                  )}
                </div>
              </div>
              <div>
                <CustomButton
                  type='link'
                  href='/'
                  isExternal
                  target='_blank'
                  ariaLabel='Hubungi Kami'
                  isPrimary
                  isPrimaryHover
                  isRoundedFull
                  className='btn text-white cursor-pointer w-1/2 sm:w-full mt-2 hidden sm:block'>
                  Hubungi Kami
                </CustomButton>
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel className='sm:hidden'>
          <div className='space-y-1 px-2 pb-3 pt-2'>
            {menus.map((menu, index) => {
              return (
                <li
                  key={index}
                  className={`${
                    path === menu.route ? 'active' : ''
                  } capitalize text-primary hover:text-sekunder transition-all text-lg font-normal list-none`}>
                  {menu.isDropdown ? (
                    <Menu
                      as='div'
                      className='relative'>
                      <div>
                        <MenuButton
                          className={`flex items-center ${
                            path === menu.route
                              ? 'active'
                              : 'relative flex capitalize text-primary hover:text-sekunder transition-all text-lg font-normal'
                          }`}>
                          {menu.name}{' '}
                          <MdKeyboardArrowDown className='text-2xl' />
                        </MenuButton>
                      </div>
                      <MenuItems
                        transition
                        className='flex flex-col gap-y-2 px-4 right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-transparent py-2 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in'>
                        {menu.dropdown.map((item, index) => {
                          return (
                            <MenuItem>
                              <Link
                                href={item.route}
                                key={index}
                                className='capitalize text-primary hover:text-sekunder transition-all text-lg font-normal'>
                                {item.dropdownName}
                              </Link>
                            </MenuItem>
                          );
                        })}
                      </MenuItems>
                    </Menu>
                  ) : (
                    <Link
                      id={menu.name}
                      href={menu.route}>
                      {menu.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </header>
  );
}

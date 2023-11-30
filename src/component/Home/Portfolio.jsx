'use client';
import React, { useEffect, useState, useMemo } from 'react';
import Heading from '../Heading';
import CustomButton from '../Button';
import { Dropdown } from 'flowbite-react';
import Image from 'next/image';
import Card from '../Card';
export default function Portfolio() {
  const data = {
    categories: [
      {
        name: 'web development',
        projects: [
          {
            id: 1,
            title: 'BillsStone Luxury',
            url: 'https://facebook.com',
            imageUrl: '/images/porto_1.png',
          },
          {
            id: 2,
            title: 'BillsStone Luxury',
            url: 'https://facebook.com',
            imageUrl: '/images/porto_2.png',
          },
          {
            id: 3,
            title: 'BillsStone Luxury',
            url: 'https://facebook.com',
            imageUrl: '/images/porto_3.png',
          },
        ],
      },
      {
        name: 'digital marketing',
        projects: [
          {
            id: 1,
            title: 'BillsStone Luxury',
            url: 'https://facebook.com',
            imageUrl: '/images/porto_2.png',
          },
          {
            id: 2,
            title: 'BillsStone Luxury',
            url: 'https://facebook.com',

            imageUrl: '/images/porto_1.png',
          },
          {
            id: 3,
            title: 'BillsStone Luxury',
            url: 'https://facebook.com',
            imageUrl: '/images/porto_3.png',
          },
        ],
      },
      {
        name: 'search engine optimization',
        projects: [
          {
            id: 1,
            title: 'BillsStone Luxury',
            url: 'https://facebook.com',

            imageUrl: '/images/porto_3.png',
          },
          {
            id: 2,
            title: 'BillsStone Luxury',
            url: 'https://facebook.com',
            imageUrl: '/images/porto_2.png',
          },
          {
            id: 3,
            title: 'BillsStone Luxury',
            url: 'https://facebook.com',
            imageUrl: '/images/porto_1.png',
          },
        ],
      },
    ],
  };
  const [selectedCategory, setSelectedCategory] = useState('web development');
  const [portoflioData, setPortofolioData] = useState(null);
  const [windowWith, setWindoWidth] = useState(null);
  useEffect(() => {
    setWindoWidth(window.screen.width);
    const handleWindowResize = () => {
      setWindoWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [data.categories]);
  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }
  function filteredProject() {
    if (!selectedCategory) {
      return data.categories;
    }
    return data.categories?.filter((item) => item.name === selectedCategory);
  }
  let filterList = useMemo(filteredProject, [
    selectedCategory,
    data.categories,
  ]);

  return (
    <section className='w-full h-full py-12 px-4 overflow-hidden'>
      <div className='container mx-auto'>
        <Heading
          title='Portoflio Kami'
          description='Kami membuat ide anda menjadi nyata'
        />
        <div className='portfolio_category-name flex flex-row gap-4 justify-start md:justify-center items-center py-8'>
          {windowWith < 576 ? (
            <Dropdown
              inline={true}
              className='capitalize'
              label={selectedCategory}
              dismissOnClick={false}>
              {data.categories?.map((item, index) => (
                <Dropdown.Item
                  className='capitalize'
                  key={index}>
                  <button
                    type='button'
                    value={item.name}
                    className='capitalize'
                    onClick={handleCategoryChange}>
                    {item.name}
                  </button>
                </Dropdown.Item>
              ))}
            </Dropdown>
          ) : (
            data.categories?.map((item, index) => (
              <div key={index}>
                <CustomButton
                  type='button'
                  value={item.name}
                  onClick={handleCategoryChange}
                  className={`text-primary font-medium text-base md:text-lg capitalize transition-all duration-200 ease-in hover:text-redColor ${
                    selectedCategory === item.name
                      ? 'border-b-2 border-redColor'
                      : ''
                  }`}>
                  {item.name}
                </CustomButton>
              </div>
            ))
          )}
        </div>
        <div className='grid grid-cols-1 items-center gap-4 justify-center md:grid-cols-2 xl:grid-cols-3'>
          {filterList?.map((item) => {
            return item.projects.length === 0
              ? '<p>No Data Portoflio</p>'
              : item.projects.map((project) => (
                  <Card
                    key={project.id}
                    isPortofolio
                    titlePortofolio={project.name}
                    portofolioImageUrl={project.imageUrl}
                  />
                ));
          })}
        </div>
        <div className='flex justify-center pt-8'>
          <CustomButton
            type='link'
            href='/portofolio'
            isSecondary
            isSecondaryHover
            isRounded
            isFlex
            ariaLabel='Button lihat semua portfolio'
            className='btn text-white items-center max-w-[170px]'>
            Lihat Semua
          </CustomButton>
        </div>
      </div>
    </section>
  );
}

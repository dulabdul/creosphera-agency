'use client';
import React from 'react';
import Heading from '../Heading';
import { Accordion } from 'flowbite-react';
import Image from 'next/image';
export default function FAQ() {
  const data = [
    {
      title: 'Domain itu apasih',
      content:
        'Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.',
    },
    {
      title: 'Domain itu apasih',
      content:
        'Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.',
    },
    {
      title: 'Domain itu apasih',
      content:
        'Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.',
    },
  ];
  return (
    <section className='w-full h-full overflow-hidden px-4 py-12 md:py-16'>
      <div className='container mx-auto'>
        <Heading
          title='FAQs'
          description='Pertanyaan yang sering ditanyakan'
        />
        <div className='grid grid-cols-1 gap-y-4 md:grid-cols-2 pt-6 md:pt-12'>
          <div className='flex flex-col gap-y-5'>
            {data.map((item, index) => {
              return (
                <Accordion
                  collapseAll
                  key={index}
                  className='bg-white border-none shadow-lg rounded-[32px] accordion_faq hover:rounded-[32px]'>
                  <Accordion.Panel>
                    <Accordion.Title className='text-primary font-medium'>
                      {item.title}
                    </Accordion.Title>
                    <Accordion.Content>
                      <p className='mb-2 font-normal text-tersier text-base'>
                        {item.content}
                      </p>
                    </Accordion.Content>
                  </Accordion.Panel>
                </Accordion>
              );
            })}
          </div>
          <div className='w-full h-full flex justify-center'>
            <Image
              src='/images/faq.png'
              alt='FAQ'
              width={490}
              height={440}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

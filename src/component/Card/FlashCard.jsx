'use client';
import React, { useState } from 'react';
import CustomButton from '../Button';
import PropTypes from 'prop-types';
export default function FlashCard({ type, content }) {
  const [isActive, setIsActive] = useState(false);
  const handleClickButton = () => {
    setIsActive(!isActive);
  };
  return (
    <div className='flex flex-col lg:flex-row items-start md:items-center gap-x-2 py-8'>
      <CustomButton
        type='button'
        onClick={handleClickButton}
        className={`${
          isActive ? 'text-primary' : 'text-tersier font-light'
        } flex w-[15%] capitalize text-start text-2xl md:text-3xl font-normal transition-all duration-300 hover:text-primary`}>
        {type}
      </CustomButton>
      <div
        className={`flex flex-col lg:flex-row  items-start md:items-center md:w-[85%] gap-x-4 transition-all duration-500 ${
          isActive ? 'max-h-[500px' : 'max-h-0'
        }`}
        style={{
          maxHeight: isActive ? '500px' : '0px',
          opacity: isActive ? 1 : 0,
        }}>
        <div className='float-left w-[1px] h-[100px] max-h-[200px] ml-[10%] md:ml-0 md:w-[200px] md:h-[1px] bg-primary'></div>
        <div className='flex-1 '>
          {content.map((items, index) => {
            return (
              <div
                key={index}
                className='content'>
                <p className='text-primary text-2xl capitalize md:text-3xl font-normal'>
                  {items.name}
                </p>
                <p className='text-tersier text-lg md:text-xl font-normal'>
                  {items.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

FlashCard.propTypes = {
  type: PropTypes.string,
  content: PropTypes.array,
};

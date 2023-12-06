import React from 'react';
import CustomBreadcumb from '../Breadcumb';
import PropTypes from 'prop-types';
export default function HeroComponents({ title, type }) {
  return (
    <div className='w-full h-[50vh] lg:h-[100vh] overflow-hidden bg-[url("/images/bg-wave.svg")] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center'>
      <h1 className='text-primary text-3xl lg:text-6xl font-normal capitalize'>
        {title}
      </h1>
      <CustomBreadcumb
        title={title}
        type={type}
      />
    </div>
  );
}

HeroComponents.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

'use client';
import PropTypes from 'prop-types';
export default function CustomBreadcumb({ title, type }) {
  return (
    <div className='flex items-center pt-4'>
      <p className='text-tersier text-base font-light capitalize'>{type} </p>
      <span className='font-sans'> &nbsp; / &nbsp;</span>
      <p className='text-base font-medium text-cyanColor capitalize'>{title}</p>
    </div>
  );
}

CustomBreadcumb.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
};

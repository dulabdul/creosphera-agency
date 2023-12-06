import React from 'react';
import propTypes from 'prop-types';
export default function Heading({ title, description, classNames }) {
  return (
    <div className={classNames}>
      <h2 className='capitalize text-center text-sekunder font-medium text-lg md:text-xl'>
        {title}
      </h2>
      <h3 className='capitalize text-center text-primary font-semibold text-2xl md:text-4xl'>
        {description}
      </h3>
    </div>
  );
}

Heading.propTypes = {
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  classNames: propTypes.string,
};

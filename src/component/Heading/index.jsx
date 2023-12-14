import React from 'react';
import propTypes from 'prop-types';
export default function Heading({ title, description, classNames }) {
  const className = [classNames];

  return (
    <div>
      <h2 className='capitalize text-center text-sekunder font-medium text-lg md:text-xl'>
        {title}
      </h2>
      <h3 className={`capitalize text-center ${className.join(' ')}`}>
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

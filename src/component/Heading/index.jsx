import React from 'react';
import propTypes from 'prop-types'
export default function Heading({ title, description }) {
  return (
    <div>
      <h2 className='text-center text-sekunder font-medium text-lg md:text-xl'>
        {title}
      </h2>
      <h3 className='text-center text-primary font-semibold text-2xl md:text-4xl'>
        {description}
      </h3>
    </div>
  );
}

Heading.propTypes = {
    title : propTypes.string.isRequired,
    description : propTypes.string.isRequired,
}

// packages
import * as React from 'react';

const Heading = ({ heading }) => {
  return (
    <h2 className='ada-heading' dangerouslySetInnerHTML={{ __html: heading }} />
  );
};

export default Heading;

// packages
import * as React from 'react';

const Heading = ({ heading, children }) => {
  return (
    children
      ? <h2 className='ada-heading'>
        {children}
      </h2>
      : <h2
        className='ada-heading'
        dangerouslySetInnerHTML={{ __html: heading }}
      />
  );
};

export default Heading;

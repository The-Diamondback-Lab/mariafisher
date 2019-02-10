// packages
import * as React from 'react';

const Text = ({ text }) => {
  return (
    <p className='ada-text' dangerouslySetInnerHTML={{ __html: text }} />
  );
};

export default Text;

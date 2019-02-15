// packages
import * as React from 'react';

// molecules
import { Navigation } from '../../molecules';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className='ado-footer'>
        <div className='ada-container'>
          <Navigation />
        </div>
      </footer>
    );
  }
}

// packages
import * as React from 'react';

// molecules
import { Navigation } from '../../molecules';

export default class Header extends React.Component {
  render() {
    return (
      <header className='ado-header'>
        <div className='ada-container'>
          <Navigation />
        </div>
      </header>
    );
  }
}

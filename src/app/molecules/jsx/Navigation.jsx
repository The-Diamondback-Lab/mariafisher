// packages
import * as React from 'react';

// atoms
import { NavigationItem } from '../../atoms';

export default class Navigation extends React.Component {
  render() {
    return (
      <nav className='adm-navigation'>
        <NavigationItem path='/intro' icon='intro' />
        <NavigationItem path='/friends' icon='friends' />
        <NavigationItem path='/the-night-before' icon='night' />
        <NavigationItem path='/the-morning-after' icon='morning' />
        <NavigationItem path='/professor' icon='professor' />
        <NavigationItem path='/avenue-guest-house' icon='b&b' />
      </nav>
    );
  }
}

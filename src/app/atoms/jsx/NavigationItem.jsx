/* eslint-disable camelcase */
/* eslint-disable space-before-function-paren */

// packages
import * as React from 'react';
import { NavLink } from 'react-router-dom';

// atoms
import Icon from './Icon.jsx';

export default class NavigationItem extends React.Component {
  componentDidMount() {

  }

  render() {
    const { path, icon } = this.props;

    return (
      <NavLink to={path} className='ada-navigation-item'>
        <Icon name={icon} />
      </NavLink>
    );
  }
}

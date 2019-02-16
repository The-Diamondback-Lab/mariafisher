// packages
import React from 'reactn'
import { NavLink } from 'react-router-dom'

// atoms
import Icon from './Icon.jsx'

/**
 * Class representing a navigation item.
 *
 * @class NavigationItem
 * @hideconstructor
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */
export default class NavigationItem extends React.Component {
  /**
   * Renders a navigation link.
   *
   * @param {object} props - properties for the component
   * @param {string} props.path - link path
   * @param {string} props.icon - name of navigation icon
   * @returns {React.Component} application component
   */
  render = () => {
    const { path, icon } = this.props

    return (
      <NavLink to={path} className='ada-navigation-item'>
        <Icon name={icon} />
      </NavLink>
    )
  }
}

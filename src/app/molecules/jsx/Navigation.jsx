// packages
import React from 'reactn'

// atoms
import { NavigationItem } from '../../atoms'

/**
 * Class representing the navigation.
 *
 * @class Navigation
 * @hideconstructor
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */
export default class Navigation extends React.Component {
  /**
   * Renders the navigation.
   *
   * @returns {HTMLElement} html nav element
   */
  render = () => {
    return (
      <nav className='adm-navigation'>
        <NavigationItem path='/i' />
        <NavigationItem path='/ii' />
        <NavigationItem path='/iii' />
        <NavigationItem path='/iv' />
        <NavigationItem path='/v' />
        <NavigationItem path='/vi' />
        <NavigationItem path='/vii' />

      </nav>
    )
  }
}

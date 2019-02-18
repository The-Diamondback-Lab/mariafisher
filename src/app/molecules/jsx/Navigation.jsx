/* eslint-disable camelcase */

// packages
import React from 'reactn'
import $ from 'jquery'
import URI from 'urijs'

// atoms
import { Button, Container, Icon, NavigationItem } from '../../atoms'

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
    const { mobile } = this.global
    const { items } = this.props

    let right = ['/ii', '/iv', '/vi']
    let nav_left = right.includes(URI.parse(window.location.href).path)
    let style = nav_left
      ? mobile ? { right: '2.5%' } : { left: '2.5%' }
      : { right: '2.5%' }

    return (
      <nav className='adm-navigation'>
        <Container>
          <div className='links' style={style}>
            {
              items.map(item => {
                return (
                  <NavigationItem
                    path={item.path}
                    text={item.path.replace('/', '').toUpperCase()}
                  />
                )
              })
            }

            <Button onClick={() => {
              $('.adm-navigation').removeClass('open')
              $('.ado-footer > .ada-container').css({
                height: 'auto', opacity: 1, width: '100%'
              })
            }}>
              <Icon weight='fas' name='fa-times' />
            </Button>
          </div>
        </Container>
      </nav>
    )
  }
}

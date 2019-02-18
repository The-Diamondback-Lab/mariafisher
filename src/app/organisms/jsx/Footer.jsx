/* eslint-disable camelcase */

// packages
import React from 'reactn'
import $ from 'jquery'
import URI from 'urijs'

// atoms
import { Button, Container, Icon } from '../../atoms'

/**
 * Functional React component representing the footer.
 *
 * @class Footer
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */
export default class Footer extends React.Component {
  /**
   * Renders the footer.
   *
   * @returns {HTMLElement} html footer element
   */
  render = () => {
    const right = ['/ii', '/iv', '/vi']
    const nav_left = right.includes(URI.parse(window.location.href).path)

    return (
      <footer className='ado-footer'>
        <Container style={{
          justifyContent: `flex-${nav_left ? 'start' : 'end'}`
        }}>
          <Button onClick={() => {
            $('.adm-navigation').addClass('open')
            $('.ado-footer > .ada-container').css({
              height: 0, opacity: 0, width: 0
            })
          }}>
            <Icon weight='fas' name='fa-bars' />
          </Button>
        </Container>
      </footer>
    )
  }
}

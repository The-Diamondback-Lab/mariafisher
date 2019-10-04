/* eslint-disable camelcase */

// packages
import React from 'react'
import $ from 'jquery'

// atoms
import { Button, Container, Icon } from '../atoms'

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
  render() {
    return (
      <footer className='ado-footer'>
        <Container>
          <Button onClick={() => {
            $('.adm-navigation').addClass('open')
            $('.ado-footer > .ada-container').css({
              height: 0, opacity: 0, width: 0
            })
          }}
          >
            <Icon weight='fas' name='fa-bars' />
          </Button>
        </Container>
      </footer>
    )
  }
}

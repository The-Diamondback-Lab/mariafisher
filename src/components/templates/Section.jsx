// Packages
import React, { Component } from 'react'
import $ from 'jquery'

// Components
import { Container } from '../atoms'
import { Card } from '../organisms'

/**
 * Class representing a story section.
 *
 * @class Section
 * @extends Component
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */
export default class Section extends Component {
  componentDidMount() {
    if (this.logging) console.info('Section component mounted.')

    const { card, id } = this.props

    $('.ado-footer > .ada-container').css(card.style.footer)
    $('#root').addClass(id)
  }

  componentWillUnmount() {
    const { id } = this.props

    $('#root').removeClass(id)
  }

  render() {
    const { card, id } = this.props
    const { mobile } = card

    card.image.style = { opacity: mobile ? 0 : 1 }

    return (
      <div className='adt-section' id={id}>
        <Container style={card.style.section}>
          <Card data={card} />
        </Container>
      </div>
    )
  }
}

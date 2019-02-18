/* eslint-disable camelcase */

// packages
import React from 'reactn'
import { Link } from 'react-router-dom'

// atoms
import { Container, Heading, Icon, Text } from '../../atoms'

/**
 * Class representing a story section.
 *
 * @class Section
 * @hideconstructor
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */
export default class Card extends React.Component {
  /**
   * Renders the story card.
   *
   * @returns {HTMLElement} html div element
   */
  render = () => {
    const { data } = this.props
    const { slug, title, graphs, prev, next } = data

    let heading = slug === '/i' ? '<span>The Missing Hours</span>' : title

    let footer_container = prev
      ? { justifyContent: 'space-between' }
      : { justifyContent: 'flex-end' }

    return (
      <div className='ado-card'>
        <div className='card-header'>
          <Container>
            <Heading heading={heading} />
          </Container>
        </div>
        <Container>
          {graphs.map(g => <Text text={g} key={g} />)}
        </Container>
        <div className='card-footer'>
          <Container style={footer_container}>
            {
              prev
                ? (
                  <Link
                    to={{ pathname: prev }}
                    onClick={() => this.forceUpdate()}
                  >
                    <Icon weight='far' name='fa-chevron-left' />
                    Previous
                  </Link>
                )
                : null
            }
            <Link
              to={{ pathname: next }}
              onClick={() => this.forceUpdate()}
            >
              Next
              <Icon weight='far' name='fa-chevron-right' />
            </Link>
          </Container>
        </div>
      </div>
    )
  }
}

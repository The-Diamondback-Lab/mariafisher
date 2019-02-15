// packages
import * as React from 'react'
import $ from 'jquery'

// config
import { INTRODUCTION } from '../../../config/constants.config'

// atoms
import { Heading, Text } from '../../atoms'

export default class Section extends React.Component {
  async componentDidMount() {
    const { name, section_id } = this.props

    // set window title
    document.title = INTRODUCTION ? name : `${name} - Fisher: 1 Year Later`

    // add class to update section specific image background
    $('#app').addClass(section_id)
  }

  componentWillUnmount() {
    const { section_id } = this.props

    // remove class that adds section specific image background
    $('#app').removeClass(section_id)
  }

  render() {
    const { name, section_id } = this.props

    return (
      <div className='adt-section' id={section_id}>
        <div className='ada-container'>
          {
            INTRODUCTION
              ? <Heading>
                Fisher: <span>1 Year Later</span>
              </Heading>
              : <Heading heading={name} />
          }
        </div>
      </div>
    )
  }
}

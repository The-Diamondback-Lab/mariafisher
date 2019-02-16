// packages
import React from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'

// templates
import { Layout } from '../../atoms'

export default class Index extends React.Component {
  componentDidMount () {
    $('#app').addClass('index')
  }

  componentWillUnmount () {
    $('#app').removeClass('index')
  }

  render () {
    const { name } = this.props

    return (
      <Layout page='index' name={name} />
    )
  }
}

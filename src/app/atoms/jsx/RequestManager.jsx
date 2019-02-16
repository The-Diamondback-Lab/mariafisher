// packages
import * as React from 'react'

// atoms
import Loading from './Loading.jsx'

/**
 * @file Functional React component that handles the request state.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Functional component representing that handles the request state.
 *
 * @param {object} props - properties for the component
 * @param {*} props.children - component children
 * @returns {React.Component} Loading component or props.children
 */
const RequestManager = ({ requesting, children }) => {
  return (
    <div className='ada-container'>
      {requesting ? <Loading /> : children}
    </div>
  )
  // if (requesting) return <Loading />
  // return children
}

export default RequestManager

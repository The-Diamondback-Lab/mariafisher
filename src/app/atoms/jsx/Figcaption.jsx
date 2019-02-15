// packages
import * as React from 'react'


const Figcaption = ({ caption }) => {
  return (
    <figcaption
      className='ada-figcaption'
      dangerouslySetInnerHTML={{ __html: caption }}
    />
  )
}

export default Figcaption

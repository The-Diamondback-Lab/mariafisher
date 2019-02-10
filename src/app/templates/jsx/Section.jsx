// packages
import * as React from 'react';

// atoms
import { Heading, Text } from '../../atoms';

export default class Section extends React.Component {
  componentDidMount() {
    document.title = this.props.name;
  }

  render() {
    const { name } = this.props;

    return (
      <div className='adt-section'>
        <div className='ada-container'>
          <Heading heading='Section' />
        </div>
      </div>
    );
  }
}

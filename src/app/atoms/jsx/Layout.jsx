// packages
import * as React from 'react';

export default class Layout extends React.Component {
  componentDidMount() {
    document.title = this.props.name;
  }

  render() {
    const { page, children } = this.props;

    return (
      <div className={`adp-${page}`}>
        <div className='ada-container'>
          {children}
        </div>
      </div>
    );
  }
}

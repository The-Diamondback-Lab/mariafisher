// packages
import * as React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default class Button extends React.Component {
  render() {
    let { link, to, className, id, onClick, children } = this.props;

    if (link) {
      return (
        <Link smooth to={to} className={`ada-button ${className}`}>
          {children}
        </Link>
      );
    }

    return (
      <button className={`ada-button ${className}`} id={id} onClick={onClick} >
        {children}
      </button>
    );
  }
}

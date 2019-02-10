// packages
import * as React from 'react';

// atoms
import { Icon, Text } from '../../atoms';

export default class Loading extends React.Component {
  render() {
    const { container } = this.props;

    return (
      <div className={container ? `adm-loading ${container}` : 'adm-loading'}>
        <Icon />
        <Text text='Loading...' />
      </div>
    );
  }
}

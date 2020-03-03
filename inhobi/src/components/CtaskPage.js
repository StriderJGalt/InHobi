import React, { PureComponent } from 'react';
import { getComponentFromId } from '../taskPage_figmaComponents';

export class CtaskPage extends PureComponent {
  state = {};

  render() {
    const Component = getComponentFromId(this.props.nodeId);
    return <Component {...this.props} {...this.state} />;
  }
}

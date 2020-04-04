import React, { PureComponent } from 'react';
import { getComponentFromId } from '../pages/taskSubmission';

export class CtopBar extends PureComponent {
  state = {};

  render() {
    const Component = getComponentFromId(this.props.nodeId);
    return <Component {...this.props} {...this.state} />;
  }
}

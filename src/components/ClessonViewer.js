import React, { PureComponent } from 'react';
import { getComponentFromId } from '../pages/taskViewer';

export class ClessonViewer extends PureComponent {
  state = {};

  render() {
    const Component = getComponentFromId(this.props.nodeId);
    return <Component {...this.props} {...this.state} />;
  }
}

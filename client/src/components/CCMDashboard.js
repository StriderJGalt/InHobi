import React, { PureComponent } from 'react';
import { getComponentFromId } from '../pages/CMDashboard';

export class CCMDashboard extends PureComponent {
  state = {};

  render() {
    const Component = getComponentFromId(this.props.nodeId);
    return <Component {...this.props} {...this.state} />;
  }
}

import React, { PureComponent } from 'react';
import { getComponentFromId } from '../taskFeedbackPage_figmaComponents';

export class CtaskFeedbackPage extends PureComponent {
  state = {};

  render() {
    const Component = getComponentFromId(this.props.nodeId);
    return <Component {...this.props} {...this.state} />;
  }
}

import React, { PureComponent } from 'react';
import { getComponentFromId } from '../pages/taskFeedback';

export class CtaskFeedbackPage extends PureComponent {
  state = {};

  render() {
    const Component = getComponentFromId(this.props.nodeId);
    return <Component {...this.props} {...this.state} />;
  }
}

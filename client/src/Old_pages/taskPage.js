import React, { PureComponent } from 'react';
import { CtopBar } from './components/CtopBar';
import { CtaskPage } from './components/CtaskPage';

export class MastertaskPage extends PureComponent {
  render() {
    return <div className="master" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
      <CtaskPage {...this.props} nodeId="12:51" />
    </div>
  }
}

export function getComponentFromId(id) {
  if (id === "12:55") return CtopBar12D55;
  if (id === "12:51") return CtaskPage12D51;
  return null;
}

class CtopBar12D55 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      task_heading: "Task 2",
    }
  }
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I12:55;2:4"
            style={{ "marginLeft": 0, "marginRight": 0, "flexGrow": 1, "marginTop": 0, "marginBottom": 0, "backgroundColor": "rgba(134, 69, 255, 1)" }}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{ "zIndex": 1 }} className="outerDiv centerer">
          <div
            id="I12:55;3:2"
            style={{ "marginLeft": 8, "marginRight": 343, "flexGrow": 1, "marginTop": 15, "marginBottom": 16 }}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{
              __html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="white"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{ "zIndex": 2 }} className="outerDiv centerer">
          <div
            id="I12:55;3:6"
            style={{ "marginLeft": 196, "marginRight": 107, "flexGrow": 1, "marginTop": 8, "marginBottom": 9, "color": "rgba(255, 255, 255, 1)", "fontSize": 24, "fontWeight": 400, "fontFamily": "Roboto", "textAlign": "LEFT", "fontStyle": "normal", "lineHeight": "125%", "letterSpacing": "0.12px" }}
            className="innerDiv"
          >
            <div>
              {this.props.Task_1 && this.props.Task_1.split("\n").map((line, idx) => <div key={idx}>{line}</div>)}
              {!this.props.Task_1 && (<div>
                <span style={{}} key="end">{this.state.task_heading}</span>
              </div>)}
            </div>
          </div>
        </div>
        <div style={{ "zIndex": 3 }} className="outerDiv centerer">
          <div
            id="I12:55;3:9"
            style={{ "width": "24.533333333333335%", "marginLeft": "73.33333333333333%", "height": "72.72727272727273%", "top": "12.727272727272727%" }}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{
              __html: `<svg preserveAspectRatio="none" width="92" height="40" viewBox="0 0 92 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 20C0 8.95431 8.95431 0 20 0H72C83.0457 0 92 8.95431 92 20C92 31.0457 83.0457 40 72 40H20C8.95431 40 0 31.0457 0 20Z" fill="#F8B03E"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{ "zIndex": 4 }} className="outerDiv centerer">
          <div
            id="I12:55;3:11"
            style={{ "width": "23.466666666666665%", "marginLeft": "73.86666666666666%", "height": "52.72727272727273%", "top": "21.818181818181817%", "color": "rgba(0, 0, 0, 1)", "fontSize": 18, "fontWeight": 500, "fontFamily": "Roboto", "textAlign": "CENTER", "fontStyle": "normal", "lineHeight": "125%", "letterSpacing": "0.135px" }}
            className="innerDiv"
          >
            <div>
              <button style={{ "background-color": "transparent", "border-color": "transparent", "color": "white", "fontSize": 20, "fontWeight": 500, "fontFamily": "Roboto" }} key="end">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class CtaskPage12D51 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      task_name: "Sunset Shoot",
      course_name: "Intro to Photography",
      task_cont: "testing",
    }
  }
  render() {
    return (
      <div>
        <div style={{ "zIndex": 3 }} className="outerDiv">
          <div
            id="12:55"
            style={{ "marginLeft": 0, "width": 375, "minWidth": 375, "height": null, "marginTop": 0, "marginBottom": 612, "minHeight": 55, "backgroundColor": "rgba(0, 0, 0, 0)" }}
            className="innerDiv"
          >
            <CtopBar {...this.props} nodeId="12:55" />
          </div>
        </div>
        <div style={{ "zIndex": 1 }} className="outerDiv">
          <div
            id="12:53"
            style={{ "marginLeft": 12, "width": 200, "minWidth": 200, "height": null, "marginTop": -604, "marginBottom": 580, "minHeight": 24, "color": "rgba(58, 21, 127, 1)", "fontSize": 14, "fontWeight": 500, "fontFamily": "Roboto", "textAlign": "LEFT", "fontStyle": "normal", "lineHeight": "125%", "letterSpacing": "0.105px" }}
            className="innerDiv"
          >
            <div>
              {this.props.course_name && this.props.course_name.split("\n").map((line, idx) => <div key={idx}>{line}</div>)}
              {!this.props.course_name && (<div>
                <span style={{}} key="end">{this.state.course_name}</span>
              </div>)}
            </div>
          </div>
        </div>
        <div style={{}} className="outerDiv">
          <div
            id="12:52"
            style={{ "marginLeft": 12, "width": 219, "minWidth": 219, "height": null, "marginTop": -582, "marginBottom": 534, "minHeight": 48, "color": "rgba(0, 0, 0, 1)", "fontSize": 34, "fontWeight": 400, "fontFamily": "Roboto", "textAlign": "LEFT", "fontStyle": "normal", "lineHeight": "125%", "letterSpacing": "0.085px" }}
            className="innerDiv"
          >
            <div>
              {this.props.task_heading && this.props.task_heading.split("\n").map((line, idx) => <div key={idx}>{line}</div>)}
              {!this.props.task_heading && (<div>
                <span style={{}} key="end">{this.state.task_name}</span>
              </div>)}
            </div>
          </div>
        </div>
        <div style={{ "zIndex": 2 }} className="outerDiv">
          <div
            id="12:54"
            style={{ "marginLeft": 16, "width": 343, "minWidth": 343, "height": null, "marginTop": -546, "marginBottom": 50, "minHeight": 496, "color": "rgba(0, 0, 0, 1)", "fontSize": 16, "fontWeight": 400, "fontFamily": "Roboto", "textAlign": "LEFT", "fontStyle": "normal", "lineHeight": "125%", "letterSpacing": "0.08px" }}
            className="innerDiv"
          >
            <div>
              {this.props.task_statement && this.props.task_statement.split("\n").map((line, idx) => <div key={idx}>{line}</div>)}
              {!this.props.task_statement && (<div>
                <br key="br0" />
                <br key="br1" />
                <p style={{}} key="527">{this.state.task_cont}</p>
              </div>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


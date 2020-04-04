import React, { PureComponent } from 'react';
import { CtopBar } from '../components/CtopBar';
import { CtaskFeedbackPage } from '../components/CtaskFeedbackPage';

export class MastertaskFeedbackPage extends PureComponent {
  render() {
    return <div className="master" style={{ backgroundColor: "rgba(246, 243, 250, 1)" }}>
      <CtaskFeedbackPage {...this.props} nodeId="49:1" />
    </div>
  }
}

export function getComponentFromId(id) {
  if (id === "49:5") return CtopBar49D5;
  if (id === "49:1") return CtaskFeedbackPage49D1;
  return null;
}

class CtopBar49D5 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      task: "Task 1"
    };
  }
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I49:5;2:4"
            style={{ "marginLeft": 0, "marginRight": 0, "flexGrow": 1, "marginTop": 0, "marginBottom": 0, "backgroundColor": "rgba(134, 69, 255, 1)" }}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{ "zIndex": 1 }} className="outerDiv centerer">
          <div
            id="I49:5;3:2"
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
            id="I49:5;3:6"
            style={{ "marginLeft": 150, "marginRight": 100, "flexGrow": 1, "marginTop": 8, "marginBottom": 9, "color": "rgba(255, 255, 255, 1)", "fontSize": 24, "fontWeight": 400, "fontFamily": "Roboto", "textAlign": "LEFT", "fontStyle": "normal", "lineHeight": "125%", "letterSpacing": "0.12px" }}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">{this.state.task}</span>
            </div>
          </div>
        </div>
        <div style={{ "zIndex": 3 }} className="outerDiv centerer">
          {/* <div
            id="I49:5;3:9"
            style={{ "width": "24.533333333333335%", "marginLeft": "73.33333333333333%", "height": "72.72727272727273%", "top": "12.727272727272727%" }}
            className="innerDiv"
          >
            { <div className="vector" dangerouslySetInnerHTML={{
              __html: `<svg preserveAspectRatio="xMidYMid" width="92" height="40" viewBox="0 0 92 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 20C0 8.95431 8.95431 0 20 0H72C83.0457 0 92 8.95431 92 20C92 31.0457 83.0457 40 72 40H20C8.95431 40 0 31.0457 0 20Z" fill="#F8B03E"/>
</svg>  
`}} /> }
        </div> */}


        </div>
        <div
          id="49:17"
          style={{ "marginRight": "auto", "marginLeft": "auto", "width": 150, "minWidth": 150, "height": null, "marginTop": 10, "color": "rgba(248, 176, 62, 1)", "borderRadius": "10px 10px 10px 10px", "zIndex": 3 }}
          className="innerDiv"
        >
          <div style={{ "zIndex": 4 }} className="outerDiv centerer">
            <div
              id="I49:5;3:11"
              style={{ "width": "23.466666666666665%", "marginLeft": "85%", "height": "52.72727272727273%", "top": "21.818181818181817%", "color": "rgba(0, 0, 0, 1)", "fontSize": 18, "fontWeight": 500, "fontFamily": "Roboto", "textAlign": "CENTER", "fontStyle": "normal", "lineHeight": "125%", "letterSpacing": "0.135px" }}
              className="innerDiv"
            >

              <button style={{ "background-color": "transparent", "border-color": "transparent", "color": "white", "fontSize": 20, "fontWeight": 500, "fontFamily": "Roboto" }} key="end">
                SUBMIT
            </button>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

class CtaskFeedbackPage49D1 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{ "zIndex": 1 }} className="outerDiv">
          <div
            id="49:5"
            style={{ "marginRight": "auto", "marginLeft": "auto", "width": 375, "minWidth": 375, "height": null, "marginTop": 0, "marginBottom": 612, "minHeight": 55, "backgroundColor": "rgba(0, 0, 0, 0)" }}
            className="innerDiv"
          >
            <CtopBar {...this.props} nodeId="49:5" />
          </div>
        </div>
        <div style={{}} className="outerDiv">
          <div
            id="49:2"
            style={{ "marginRight": "auto", "marginLeft": "auto", "width": 219, "minWidth": 219, "height": null, "marginTop": -578, "marginBottom": 0, "minHeight": 48, "color": "rgba(58, 21, 127, 1)", "fontSize": 34, "fontWeight": 400, "fontFamily": "Roboto", "textAlign": "LEFT", "fontStyle": "normal", "lineHeight": "125%", "letterSpacing": "0.085px" }}
            className="innerDiv"
          >
            <div>
              {this.props.task_heading && this.props.task_heading.split("\n").map((line, idx) => <div key={idx}>{line}</div>)}
              {!this.props.task_heading && (<div>
                <span style={{}} key="end">Sunset Shoot</span>
              </div>)}
            </div>
          </div>
        </div>
        <div style={{ "zIndex": 3 }} className="outerDiv">
          <div
            id="49:17"
            style={{ "marginRight": "auto", "marginLeft": "auto", "width": 150, "minWidth": 150, "height": null, "marginTop": -386, "marginBottom": 346, "minHeight": 40, "backgroundColor": "rgba(248, 176, 62, 1)", "borderRadius": "10px 10px 10px 10px" }}
            className="innerDiv"
          >
            <div>
              <div
                id="49:19"
                // style={{ "marginRight": "auto", "marginLeft": "auto", "width": 129, "minWidth": 129, "height": null, "marginTop": 10, "marginBottom": 5, "minHeight": 17, "color": "rgba(0, 0, 0, 1)", "fontSize": 18, "fontWeight": 500, "fontFamily": "Roboto", "textAlign": "CENTER", "fontStyle": "normal", "lineHeight": "125%", "letterSpacing": "0.135px" }}
                className="innerDiv"
              >
                <div>
                  {/* <span style={{}} key="13">Download File</span> */}
                  <button style={{ "background-color": "transparent", "border-color": "transparent", "color": "white", "fontSize": 18, "fontWeight": 500, "fontFamily": "Roboto" }} key="end">
                    Download File
                  </button>
                  <br key="br13" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div style={{"zIndex":4}} className="outerDiv"> */}
        {/* <div
            id="49:19"
            style={{"marginRight":"auto","marginLeft":"auto","width":129,"minWidth":129,"height":null,"marginTop":-377,"marginBottom":360,"minHeight":17,"color":"rgba(0, 0, 0, 1)","fontSize":18,"fontWeight":500,"fontFamily":"Roboto","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0.135px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="13">Download File</span>
              <br key="br13" />
            </div>
          </div> */}
        {/* </div> */}
        <div style={{ "zIndex": 5 }} className="outerDiv">
          <div
            id="49:20"
            style={{ "marginRight": "auto", "marginLeft": "auto", "width": 115, "minWidth": 115, "height": null, "marginTop": -335, "marginBottom": 309, "minHeight": 26, "color": "rgba(58, 21, 127, 1)", "fontSize": 24, "fontWeight": 400, "fontFamily": "Roboto", "textAlign": "LEFT", "fontStyle": "normal", "lineHeight": "125%", "letterSpacing": "0.12px" }}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Feedback</span>
            </div>
          </div>
        </div>
        <div style={{ "zIndex": 6 }} className="outerDiv">
          <div
            id="49:22"
            style={{ "marginRight": "auto", "marginLeft": "auto", "width": 344, "minWidth": 344, "height": null, "marginTop": -302, "marginBottom": 72, "minHeight": 230, "backgroundColor": "rgba(255, 255, 255, 1)", "borderRadius": "20px 20px 20px 20px" }}
            className="innerDiv"
          >
            <textarea rows={15} cols={24} style={{ "border-style": "none", "marginRight": "auto", "marginLeft": 8, "width": 328 }} type="text" />
          </div>
        </div>
        <div style={{ "zIndex": 7 }} className="outerDiv">
          <div
            id="50:155"
            style={{ "marginRight": "auto", "marginLeft": "auto", "width": 299, "minWidth": 299, "height": null, "marginTop": -57, "marginBottom": 17, "minHeight": 40, "backgroundColor": "rgba(0, 0, 0, 0)", "overflow": "hidden" }}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv">
                <div
                  id="49:25"
                  style={{ "marginLeft": 0, "width": 150, "minWidth": 150, "height": null, "marginTop": 0, "marginBottom": 0, "minHeight": 40, "backgroundColor": "rgba(134, 69, 255, 1)", "borderRadius": "20px 20px 20px 20px" }}
                  className="innerDiv"
                >
                  <div style={{ "zIndex": 1 }} className="outerDiv">
                    <div
                      id="49:26"
                      style={{ "marginLeft": 12, "width": 126, "minWidth": 126, "height": null, "marginTop": 0, "marginBottom": 8, "minHeight": 25, "color": "rgba(255, 255, 255, 1)", "fontSize": 18, "fontWeight": 500, "fontFamily": "Roboto", "textAlign": "LEFT", "fontStyle": "normal", "lineHeight": "125%", "letterSpacing": "0.135px" }}
                      className="innerDiv"
                    >
                      <div>
                        {/* <span style={{}} key="end">Unlock Lesson</span> */}
                        <button style={{ "background-color": "transparent", "border-color": "transparent", "color": "white", "fontSize": 20, "fontWeight": 500, "fontFamily": "Roboto" }} key="end">
                          Unlock Lesson
                    </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ "zIndex": 3 }} className="outerDiv">
                <div
                  id="49:27"
                  style={{ "marginLeft": 158, "width": 141, "minWidth": 141, "height": null, "marginTop": -60, "marginBottom": 0, "minHeight": 40, "backgroundColor": "rgba(58, 21, 127, 1)", "borderRadius": "20px 20px 20px 20px" }}
                  className="innerDiv"
                >
                  <div>
                    <div
                      id="49:28"
                      style={{ "marginLeft": 20, "width": 120, "minWidth": 104, "height": null, "marginTop": 7, "marginBottom": 11, "minHeight": 19, "color": "rgba(255, 255, 255, 1)", "fontSize": 18, "fontWeight": 500, "fontFamily": "Roboto", "textAlign": "LEFT", "fontStyle": "normal", "lineHeight": "125%", "letterSpacing": "0.135px" }}
                      className="innerDiv"
                    >

                      {/* <span style={{}} key="end">Lock Lesson</span> */}
                      <button style={{ "background-color": "transparent", "border-color": "transparent", "color": "white", "fontSize": 20, "fontWeight": 500, "fontFamily": "Roboto" }} key="end">
                        Lock Lesson
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ "zIndex": 4 }} className="outerDiv">
                {/* <div
                  id="49:28"
                  style={{"marginLeft":177,"width":104,"minWidth":104,"height":null,"marginTop":-30,"marginBottom":11,"minHeight":19,"color":"rgba(255, 255, 255, 1)","fontSize":18,"fontWeight":500,"fontFamily":"Roboto","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0.135px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">Lock Lesson</span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* <div style={{"zIndex":2}} className="outerDiv centerer">
          <div
            id="49:14"
            style={{"width":"38.666666666666664%","marginLeft":"30.666666666666668%","height":"21.73913043478261%","top":"21.58920539730135%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="145" height="145" viewBox="0 0 145 145" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M114.792 18.125H89.5375C87 11.1167 80.3542 6.04167 72.5 6.04167C64.6458 6.04167 58 11.1167 55.4625 18.125H30.2083C23.5625 18.125 18.125 23.5625 18.125 30.2083V114.792C18.125 121.438 23.5625 126.875 30.2083 126.875H114.792C121.438 126.875 126.875 121.438 126.875 114.792V30.2083C126.875 23.5625 121.438 18.125 114.792 18.125ZM72.5 18.125C75.8229 18.125 78.5417 20.8438 78.5417 24.1667C78.5417 27.4896 75.8229 30.2083 72.5 30.2083C69.1771 30.2083 66.4583 27.4896 66.4583 24.1667C66.4583 20.8438 69.1771 18.125 72.5 18.125ZM84.5833 102.708H42.2917V90.625H84.5833V102.708ZM102.708 78.5417H42.2917V66.4583H102.708V78.5417ZM102.708 54.375H42.2917V42.2917H102.708V54.375Z" fill="#3A157F"/>
</svg>
`}} />
          </div>
        </div> */}
      </div>
    );
  }
}


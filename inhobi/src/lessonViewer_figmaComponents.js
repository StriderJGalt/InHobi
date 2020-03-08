import React, { PureComponent } from 'react';
import { ClessonViewer } from './components/ClessonViewer';
import { Component } from 'react'
import ReactPlayer from 'react-player'

// class App extends Component {
//   render() {
//     return <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing />
//   }
// }
class ResponsivePlayer extends Component {
  render() {
    return (
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=ixRKeQMa7Nc'
          width='100%'
          height='100%'
          controls={true}
        />
      </div>
    )
  }
}


export class MasterlessonViewer extends PureComponent {
  render() {
    return <div className="master" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
      <ClessonViewer {...this.props} nodeId="6:1" />
    </div>
  }
}

export function getComponentFromId(id) {
  if (id === "6:1") return ClessonViewer6D1;
  return null;
}

class Lesson extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      lesson_num: "Lesson 1",
      lesson_name: "Golden Hours",
      duration: "00:15",
    };
  }
  render() {
    return (
      <div style={{ "zIndex": 0 }} className="outerDiv">
        <div
          id="12:45"
          style={{ "marginLeft": "auto", "marginRight": "auto", "width": 375, "minWidth": 320, "height": null, "marginTop": -340, "marginBottom": 290, "minHeight": 0, "backgroundColor": "rgba(255, 255, 255, 1)", "overflow": "hidden" }}
          className="innerDiv"
        >
          <div>
            <div style={{}} className="outerDiv centerer">
              <div
                id="I12:45;9:4"
                style={{ "marginLeft": 7, "marginRight": 346, "flexGrow": 1, "marginTop": 8, "marginBottom": 9 }}
                className="innerDiv"
              >
                <div className="vector" dangerouslySetInnerHTML={{
                  __html: `<svg preserveAspectRatio="MidXMidY" width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 0H2C0.89 0 0 0.89 0 2V14C0 15.1 0.89 16 2 16H7V18H15V16H20C21.1 16 21.99 15.1 21.99 14L22 2C22 0.89 21.1 0 20 0ZM20 14H2V2H20V14ZM15 8L8 12V4L15 8Z" fill="black"/>
</svg>
`}} />
              </div>
            </div>
            <div style={{ "zIndex": 1 }} className="outerDiv centerer">
              <div
                id="I12:45;9:5"
                style={{ "marginLeft": 42, "marginRight": 256, "flexGrow": 1, "marginTop": 8, "marginBottom": 10, "color": "rgba(0, 0, 0, 1)", "fontSize": 18, "fontWeight": 500, "fontFamily": "Roboto", "textAlign": "LEFT", "fontStyle": "normal", "lineHeight": "125%", "letterSpacing": "0.135px" }}
                className="innerDiv"
              >
                <div>
                  {this.props.Lesson && this.props.Lesson.split("\n").map((line, idx) => <div key={idx}>{line}</div>)}
                  {!this.props.Lesson && (<div>
                    <span style={{}} key="end">{this.state.lesson_num}</span>
                  </div>)}
                </div>
              </div>
            </div>
            <div style={{ "zIndex": 2 }} className="outerDiv centerer">
              <div
                id="I12:45;9:6"
                style={{ "marginLeft": 144, "marginRight": 120, "flexGrow": 1, "marginTop": 7, "marginBottom": 7, "color": "rgba(0, 0, 0, 1)", "fontSize": 18, "fontWeight": 400, "fontFamily": "Roboto", "textAlign": "LEFT", "fontStyle": "normal", "lineHeight": "125%", "letterSpacing": "0.135px" }}
                className="innerDiv"
              >
                <div>
                  {this.props.LessonName && this.props.LessonName.split("\n").map((line, idx) => <div key={idx}>{line}</div>)}
                  {!this.props.LessonName && (<div>
                    <span style={{}} key="end">{this.state.lesson_name}</span>
                  </div>)}
                </div>
              </div>
            </div>
            <div style={{ "zIndex": 3 }} className="outerDiv centerer">
              <div
                id="I12:45;9:8"
                style={{ "marginLeft": 302, "marginRight": 8, "flexGrow": 1, "marginTop": 8, "marginBottom": 6, "color": "rgba(0, 0, 0, 1)", "fontSize": 18, "fontWeight": 400, "fontFamily": "Roboto", "textAlign": "LEFT", "fontStyle": "normal", "lineHeight": "125%", "letterSpacing": "0.135px" }}
                className="innerDiv"
              >
                <div>
                  {this.props.Duration && this.props.Duration.split("\n").map((line, idx) => <div key={idx}>{line}</div>)}
                  {!this.props.Duration && (<div>
                    <span style={{}} key="end">{this.state.duration}</span>
                  </div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


class ClessonViewer6D1 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{ "zIndex": 1 }} className="outerDiv">
          <div
            id="6:2"
            style={{ "marginLeft": 0, "width": "100%", "minWidth": 320, "height": null, "marginTop": 0, "marginBottom": 0, "minHeight": 0, "backgroundColor": "rgba(196, 196, 196, 1)" }}
            className="innerDiv"
          >
            <div>
              <ResponsivePlayer></ResponsivePlayer>
            </div>
          </div>
        </div>
        <div style={{ "zIndex": 1 }} className="outerDiv">
          <div
            id="27:179"
            style={{ "marginLeft": 0, "width": "100%", "minWidth": 320, "height": null, "marginTop": -4, "marginBottom": 416, "minHeight": 40, "backgroundColor": "rgba(97, 41, 203, 1)", "overflow": "hidden" }}
            className="innerDiv"
          >
            <div>
              <div style={{ "zIndex": 1 }} className="outerDiv">
                <div
                  id="27:174"
                  style={{ "marginRight": "10px", "marginLeft": "auto", "width": 24, "minWidth": 24, "height": null, "marginTop": 8, "marginBottom": 8, "minHeight": 24, "backgroundColor": "rgba(0, 0, 0, 0)", "overflow": "hidden" }}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="27:175"
                        style={{ "width": "100%", "marginLeft": "0%", "height": "100%", "top": "0%" }}
                        className="innerDiv"
                      >
                        <div className="vector" dangerouslySetInnerHTML={{
                          __html: `<svg preserveAspectRatio="none" width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.7639 10.7229C16.8046 10.4176 16.8249 10.1023 16.8249 9.76654C16.8249 9.44099 16.8046 9.11544 16.7537 8.81024L18.8189 7.20283C19.002 7.0604 19.0529 6.78571 18.941 6.58224L16.9877 3.20465C16.8656 2.98083 16.6113 2.90962 16.3874 2.98083L13.956 3.95748C13.4473 3.57089 12.9081 3.24534 12.3079 3.00118L11.9416 0.417113C11.9009 0.172949 11.6975 0 11.4533 0H7.54669C7.30253 0 7.10923 0.172949 7.06854 0.417113L6.70229 3.00118C6.10206 3.24534 5.55269 3.58107 5.05419 3.95748L2.62272 2.98083C2.39891 2.89944 2.14457 2.98083 2.02249 3.20465L0.0793535 6.58224C-0.0427283 6.79589 -0.00203446 7.0604 0.201435 7.20283L2.26665 8.81024C2.21578 9.11544 2.17509 9.45117 2.17509 9.76654C2.17509 10.0819 2.19544 10.4176 2.24631 10.7229L0.181088 12.3303C-0.00203444 12.4727 -0.0529017 12.7474 0.0590066 12.9508L2.01232 16.3284C2.1344 16.5523 2.38873 16.6235 2.61255 16.5523L5.04401 15.5756C5.55269 15.9622 6.09188 16.2877 6.69212 16.5319L7.05836 19.116C7.10923 19.3601 7.30253 19.5331 7.54669 19.5331H11.4533C11.6975 19.5331 11.9009 19.3601 11.9315 19.116L12.2977 16.5319C12.8979 16.2877 13.4473 15.9622 13.9458 15.5756L16.3773 16.5523C16.6011 16.6336 16.8554 16.5523 16.9775 16.3284L18.9308 12.9508C19.0529 12.727 19.002 12.4727 18.8087 12.3303L16.7639 10.7229ZM9.5 13.429C7.48565 13.429 5.83754 11.7809 5.83754 9.76654C5.83754 7.75219 7.48565 6.10409 9.5 6.10409C11.5143 6.10409 13.1625 7.75219 13.1625 9.76654C13.1625 11.7809 11.5143 13.429 9.5 13.429Z" fill="white"/>
</svg>
`}} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="27:180"
                  style={{ "width": "30%", "marginLeft": "4.266666666666667%", "height": "42.5%", "top": "30%", "color": "rgba(255, 255, 255, 1)", "fontSize": 18, "fontWeight": 500, "fontFamily": "Roboto", "textAlign": "LEFT", "fontStyle": "normal", "lineHeight": "125%", "letterSpacing": "0.135px" }}
                  className="innerDiv"
                >
                  <div>
                    {this.props.Lesson && this.props.Lesson.split("\n").map((line, idx) => <div key={idx}>{line}</div>)}
                    {!this.props.Lesson && (<div>
                      <span style={{}} key="end">Lesson 1</span>
                    </div>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ "zIndex": 12 }} className="outerDiv">
          <div
            id="12:4"
            style={{ "marginLeft": 0, "width": "100%", "minWidth": 320, "height": null, "marginTop": -402, "marginBottom": 350, "minHeight": 52, "border-radius": "20px 20px 0px 0px", "box-shadow": "0px -4px 4px grey", "backgroundColor": "rgba(97, 41, 203, 1)" }}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{ "zIndex": 13 }} className="outerDiv">
          <div
            id="14:56"
            style={{ "marginLeft": 16, "marginRight": 197, "flexGrow": 1, "height": null, "marginTop": -392, "marginBottom": 359, "minHeight": 33, "backgroundColor": "rgba(0, 0, 0, 0)", "overflow": "hidden" }}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I14:56;14:54"
                  style={{ "marginLeft": 11, "marginRight": 11, "flexGrow": 1, "marginTop": 0, "marginBottom": 5, "color": "rgba(255, 255, 255, 1)", "fontSize": 24, "fontWeight": 400, "fontFamily": "Roboto", "textAlign": "CENTER", "fontStyle": "normal", "lineHeight": "125%", "letterSpacing": "0.12px" }}
                  className="innerDiv"
                >
                  <div>
                    <span style={{ "border-bottom": "2px solid white", "paddingBottom": "2px" }} key="end">Course Plan</span>
                  </div>
                </div>
              </div>
              <div style={{ "zIndex": 1 }} className="outerDiv centerer">
                <div
                  id="I14:56;14:53"
                  style={{ "marginLeft": 0, "marginRight": 0, "flexGrow": 1, "marginTop": 33, "marginBottom": -3.907985046680551e-14 }}
                  className="innerDiv"
                >
                  <div className="vector" dangerouslySetInnerHTML={{
                    __html: `<svg preserveAspectRatio="none" width="162" height="2" viewBox="0 0 162 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="1" x2="162" y2="1" stroke="white" stroke-width="2"/>
</svg>
`}} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ "zIndex": 14 }} className="outerDiv">
          <div
            id="14:65"
            style={{ "marginLeft": 197, "marginRight": 16, "flexGrow": 1, "height": null, "marginTop": -392, "marginBottom": 359, "minHeight": 33, "backgroundColor": "rgba(0, 0, 0, 0)", "overflow": "hidden" }}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I14:65;14:63"
                  style={{ "marginLeft": 11, "marginRight": 11, "flexGrow": 1, "marginTop": 0, "marginBottom": 5, "color": "rgba(255, 255, 255, 1)", "fontSize": 24, "fontWeight": 400, "fontFamily": "Roboto", "textAlign": "CENTER", "fontStyle": "normal", "lineHeight": "125%", "letterSpacing": "0.12px" }}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">Group</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Lesson lesson_num="Lesson 1"
            lesson_name="Golden Hours"
            duration="00:15">
          </Lesson>;
        </div>
        <div></div>
      </div >
    );
  }
}


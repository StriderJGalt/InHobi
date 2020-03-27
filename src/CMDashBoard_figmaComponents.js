import React, { PureComponent } from 'react';
import { CCMDashboard } from './components/CCMDashboard';
import axios from 'axios';
import Auth from './auth/auth';

export class MasterCMDashboard extends PureComponent {
  render() {
    return <div className="master" style={{backgroundColor: "rgba(246, 243, 250, 1)"}}>
      <CCMDashboard {...this.props} nodeId="22:14" />
    </div>
  }
}

export function getComponentFromId(id) {
  if (id === "22:14") return CCMDashboard22D14;
  return null;
}
class SubmissionCard extends PureComponent {
  constructor(props) {
    super(props);
    if (props.Username) {
      this.Username = props.Username;
    }
    else {
      this.Username = "rahul";
    }
    
    if (props.TaskNumber) {
      this.TaskNumber = props.TaskNumber;
    }
    else {
      this.TaskNumber = 1;
    }

    if (props.Time) {
      this.Time = props.Time;
    }
    else {
      this.Time = "";
    }

}
  render() {
    return ( 
    <div style={{}} className="outerDiv">
                <div
                  id="39:226"
                  style={{"marginLeft":"auto","marginRight":"auto","width":359,"minWidth":359,"height":null,"marginTop":0,"marginBottom":4,"minHeight":70,"backgroundColor":"rgba(255, 255, 255, 1)","border-radius": "5px","overflow":"hidden"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I39:226;22:159"
                        style={{"marginLeft":9,"marginRight":234,"flexGrow":1,"marginTop":43,"marginBottom":7,"color":"rgba(177, 176, 176, 1)","fontSize":16,"fontWeight":400,"fontFamily":"Roboto","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0.08px"}}
                        className="innerDiv"
                      >
                        <div>
                            <span style={{}} key="end">@{this.Username}</span>
                        </div>
                      </div>
                    </div>
                    <div style={{"zIndex":1}} className="outerDiv centerer">
                      <div
                        id="I39:226;22:160"
                        style={{"marginLeft":-12,"marginRight":255,"flexGrow":1,"marginTop":11,"marginBottom":36,"color":"rgba(58, 21, 127, 1)","fontSize":24,"fontWeight":400,"fontFamily":"Roboto","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0.12px"}}
                        className="innerDiv"
                      >
                        <div>
                          {this.props.Task3 && this.props.Task3.split("\n").map((line, idx) => <div key={idx}>{line}</div>)}
                          {!this.props.Task3 && (<div>
                            <span style={{}} key="end">Task 1</span>
                          </div>)}
                        </div>
                      </div>
                    </div>
                    <div style={{"zIndex":2}} className="outerDiv centerer">
                      <div
                        id="I39:226;40:343"
                        style={{"marginLeft":201,"marginRight":10,"flexGrow":1,"marginTop":14,"marginBottom":13,"color":"rgba(97, 41, 203, 1)","fontSize":24,"fontWeight":400,"fontFamily":"Roboto","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0.12px"}}
                        className="innerDiv"
                      >
                        <div>
                          <span style={{}} key="end">{this.Time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    )
  }
}

class CCMDashboard22D14 extends PureComponent {
  render() {
    return (
      <div style={{"marginLeft":"auto","marginRight":"auto","width":375}}>
        <div style={{"zIndex":1}} className="outerDiv">
          <div
            id="22:27"
            style={{"width":375,"minWidth":320,"height":null,"marginTop":0,"marginBottom":0,"minHeight":52,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I22:27;20:2"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(97, 41, 203, 1)","boxShadow":"0px 4px 4px rgba(0, 0, 0, 0.25)"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="I22:27;20:3"
                  style={{"marginLeft":7.246337890625,"marginRight":333.33337020874023,"flexGrow":1,"marginTop":7,"marginBottom":7}}
                  className="innerDiv"
                >
                  <div className="vector" dangerouslySetInnerHTML={{__html: ``}} />
                </div>
              </div>
              <div style={{"zIndex":2}} className="outerDiv centerer">
                <div
                  id="I22:27;20:6"
                  style={{"marginLeft":79.547119140625,"marginRight":80.452880859375,"flexGrow":1,"marginTop":8,"marginBottom":7,"backgroundColor":"rgba(0, 0, 0, 0)","overflow":"hidden"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv">
                      <div
                        id="I22:27;20:7"
                        style={{"marginLeft":0,"width":67,"minWidth":67,"height":null,"marginTop":0,"marginBottom":0,"minHeight":37,"color":"rgba(255, 251, 251, 1)","fontSize":24,"fontWeight":400,"fontFamily":"Roboto","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
                        className="innerDiv"
                      >
                        <div>
                          {this.props.Group && this.props.Group.split("\n").map((line, idx) => <div key={idx}>{line}</div>)}
                          {!this.props.Group && (<div>
                            <span style={{}} key="end">Group</span>
                          </div>)}
                        </div>
                      </div>
                    </div>
                    <div style={{"zIndex":1}} className="outerDiv">
                      <div
                        id="I22:27;20:8"
                        style={{"marginLeft":88,"width":127,"minWidth":127,"height":null,"marginTop":-37,"marginBottom":0,"minHeight":28,"color":"rgba(255, 251, 251, 1)","fontSize":24,"fontWeight":400,"fontFamily":"Roboto","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
                        className="innerDiv"
                      >
                        <div>
                          {this.props.Assignments && this.props.Assignments.split("\n").map((line, idx) => <div key={idx}>{line}</div>)}
                          {!this.props.Assignments && (<div>
                            <span style={{}} key="end">Assigments</span>
                          </div>)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":3}} className="outerDiv centerer">
                <div
                  id="I22:27;20:10"
                  style={{"marginLeft":335.1448974609375,"marginRight":5.434814453125,"flexGrow":1,"marginTop":8,"marginBottom":6}}
                  className="innerDiv"
                >
                  <div className="vector" dangerouslySetInnerHTML={{__html: ``}} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <SubmissionCard />
      </div>
    );
  }
}


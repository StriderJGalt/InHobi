import React, { PureComponent } from 'react';
import { CtopBar } from './components/CtopBar';
import { CtaskPage } from './components/CtaskPage';

export class MastertaskPage extends PureComponent {
  render() {
    return <div className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CtaskPage {...this.props} nodeId="2:2" />
    </div>
  }
}

export function getComponentFromId(id) {
  if (id === "3:13") return CtopBar3D13;
  if (id === "2:2") return CtaskPage2D2;
  return null;
}

class CtopBar3D13 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="2:4"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(134, 69, 255, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="3:2"
            style={{"marginLeft":8,"marginRight":343,"flexGrow":1,"marginTop":15,"marginBottom":16}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="white"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv centerer">
          <div
            id="3:6"
            style={{"marginLeft":196,"marginRight":107,"flexGrow":1,"marginTop":8,"marginBottom":9,"color":"rgba(255, 255, 255, 1)","fontSize":24,"fontWeight":400,"fontFamily":"Roboto","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0.12px"}}
            className="innerDiv"
          >
            <div>
              {this.props.Task_1 && this.props.Task_1.split("\n").map((line, idx) => <div key={idx}>{line}</div>)}
              {!this.props.Task_1 && (<div>
                <span style={{}} key="end">Task 1</span>
              </div>)}
            </div>
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv centerer">
          <div
            id="3:9"
            style={{"width":"24.533333333333335%","marginLeft":"73.33333333333333%","height":"72.72727272727273%","top":"12.727272727272727%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="92" height="40" viewBox="0 0 92 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 20C0 8.95431 8.95431 0 20 0H72C83.0457 0 92 8.95431 92 20C92 31.0457 83.0457 40 72 40H20C8.95431 40 0 31.0457 0 20Z" fill="#F8B03E"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":4}} className="outerDiv centerer">
          <div
            id="3:11"
            style={{"width":"23.466666666666665%","marginLeft":"73.86666666666666%","height":"52.72727272727273%","top":"21.818181818181817%","color":"rgba(0, 0, 0, 1)","fontSize":18,"fontWeight":500,"fontFamily":"Roboto","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0.135px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">SUBMIT</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class CtaskPage2D2 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{"zIndex":3}} className="outerDiv">
          <div
            id="3:13"
            style={{"marginLeft":0,"width":375,"minWidth":375,"height":null,"marginTop":0,"marginBottom":612,"minHeight":55,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <CtopBar {...this.props} nodeId="3:13" />
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv">
          <div
            id="3:15"
            style={{"marginLeft":12,"width":200,"minWidth":200,"height":null,"marginTop":-604,"marginBottom":580,"minHeight":24,"color":"rgba(58, 21, 127, 1)","fontSize":14,"fontWeight":500,"fontFamily":"Roboto","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0.105px"}}
            className="innerDiv"
          >
            <div>
              {this.props.course_name && this.props.course_name.split("\n").map((line, idx) => <div key={idx}>{line}</div>)}
              {!this.props.course_name && (<div>
                <span style={{}} key="end">Intro to photography</span>
              </div>)}
            </div>
          </div>
        </div>
        <div style={{}} className="outerDiv">
          <div
            id="3:14"
            style={{"marginLeft":12,"width":219,"minWidth":219,"height":null,"marginTop":-582,"marginBottom":534,"minHeight":48,"color":"rgba(0, 0, 0, 1)","fontSize":34,"fontWeight":400,"fontFamily":"Roboto","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0.085px"}}
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
        <div style={{"zIndex":2}} className="outerDiv">
          <div
            id="3:18"
            style={{"marginLeft":16,"width":343,"minWidth":343,"height":null,"marginTop":-546,"marginBottom":50,"minHeight":496,"color":"rgba(0, 0, 0, 1)","fontSize":16,"fontWeight":400,"fontFamily":"Roboto","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0.08px"}}
            className="innerDiv"
          >
            <div>
              {this.props.task_statement && this.props.task_statement.split("\n").map((line, idx) => <div key={idx}>{line}</div>)}
              {!this.props.task_statement && (<div>
                <br key="br0" />
                <br key="br1" />
                <span style={{}} key="527">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin odio pulvinar tellus interdum aliquam. Nulla posuere feugiat sem, et bibendum massa fermentum non. Phasellus risus ipsum, pellentesque quis molestie nec, placerat vitae libero. Nam porta justo eu sapien aliquam, eu lobortis lorem condimentum. Ut quis odio in turpis porttitor malesuada et sodales nibh. Nulla malesuada tellus sed risus malesuada, eu ullamcorper risus tincidunt. Nam id malesuada magna. Quisque placerat laoreet massa blandit congue.</span>
                <br key="br527" />
                <br key="br528" />
                <span style={{}} key="916">Nulla id nisl at purus sollicitudin dapibus sit amet in ante. Quisque a mauris eu augue commodo consectetur. Maecenas rutrum odio eget mattis condimentum. Fusce faucibus gravida lorem. Duis nec elit sollicitudin, viverra felis non, vehicula odio. Nam vitae leo velit. Suspendisse magna sapien, egestas et dolor non, placerat ultrices nisl. Cras sed diam nec risus sollicitudin porttitor.</span>
                <br key="br916" />
                <br key="br917" />
                <span style={{}} key="1545">Morbi molestie lacus sed lorem laoreet accumsan. Nullam ac eros ipsum. Etiam vulputate fermentum purus, sit amet semper arcu viverra et. Praesent molestie posuere eros, ut scelerisque nisi venenatis id. Ut sodales nunc eu magna placerat hendrerit. In placerat tempus posuere. Mauris convallis posuere ex vitae mattis. Proin a neque est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam dui lorem, vulputate ut scelerisque et, porttitor at sem. Suspendisse potenti. Fusce tortor mi, gravida non tincidunt vitae, viverra varius sapien. Pellentesque vitae lorem laoreet orci varius efficitur et sit amet erat.</span>
                <br key="br1545" />
                <br key="br1546" />
                <span style={{}} key="2139">Integer imperdiet justo nec sapien ultricies, eu dapibus nunc commodo. Maecenas suscipit, nisi eu tincidunt laoreet, justo ex scelerisque arcu, ac dignissim erat nisi id nisl. Etiam a erat metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin sollicitudin cursus ornare. Cras tincidunt massa ac dignissim interdum. In volutpat felis et ipsum luctus, at consectetur quam semper. Donec est augue, tincidunt non augue et, imperdiet porttitor sem. Phasellus sed justo a risus placerat euismod. Ut congue sem ut orci imperdiet, vel feugiat est porta.</span>
                <br key="br2139" />
                <br key="br2140" />
                <span style={{}} key="end">Morbi dapibus dignissim mauris, sed finibus nulla congue quis. Vestibulum gravida turpis nec ex rutrum facilisis. Nunc condimentum elit odio. Mauris faucibus eleifend nulla. Quisque ultrices risus sed eros auctor tempor. Mauris commodo leo non ultrices suscipit. Integer sagittis massa ultrices nibh fermentum, vitae vulputate urna tincidunt. Integer at volutpat tortor. Nam sed ex magna. Nunc eros leo, tempus rutrum pretium at, tempus vitae sapien. Nunc a leo vel metus mattis condimentum. Integer eu tristique lacus, at aliquet sapien. Duis vel nunc lorem. </span>
              </div>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


import React, { PureComponent } from 'react';
import { CLogIn } from './components/CLogIn';
import Auth from './auth/auth';

export class MasterLogIn extends PureComponent {
  render() {
    return <div className="master" style={{backgroundColor: "rgba(246, 243, 250, 1)"}} >
      <CLogIn {...this.props} nodeId="23:55" />
    </div>
  }
}

export function getComponentFromId(id) {
  if (id === "23:55") return CLogIn23D55;
  return null;
}


class CLogIn23D55 extends PureComponent {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
    };

    onSubmit(e){
        e.preventDefault();
        Auth.login(this.state.username, this.state.password);
    }
  render() {
    return (
      <div>
        <div style={{"zIndex":6}} className="outerDiv">
          <div
            id="23:56"
            style={{"marginLeft":"auto","marginRight":"auto","width":"50%","minWidth":323.8307800292969,"height":null,"marginTop":104,"marginBottom":398.3025665283203,"minHeight":164.6974334716797,"color":"rgba(97, 41, 203, 1)","fontSize":106.83076477050781,"fontWeight":400,"fontFamily":"Roboto","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"-1.602461471557617px"}}
            className="innerDiv"
          >
            <div>
              {this.props.Inhobi && this.props.Inhobi.split("\n").map((line, idx) => <div key={idx}>{line}</div>)}
              {!this.props.Inhobi && (<div>
                <span style={{}} key="end">InHobi</span>
              </div>)}
            </div>
          </div>
        </div>
        <div style={{"zIndex":5}} className="outerDiv">
          <div
            id="23:143"
            style={{"marginLeft":"auto","marginRight":"auto","width":"50%","minWidth":298.23590087890625,"height":null,"marginTop":-439.58973693847656,"marginBottom":392.8512763977051,"minHeight":46.738460540771484,"color":"rgba(0, 0, 0, 1)","fontSize":26.707691192626953,"fontWeight":400,"fontFamily":"Roboto","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0.13353845596313477px"}}
            className="innerDiv"
          >
            <div>
              {this.props.Subtitle && this.props.Subtitle.split("\n").map((line, idx) => <div key={idx}>{line}</div>)}
              {!this.props.Subtitle && (<div>
                <span style={{}} key="end">A Social Good App</span>
              </div>)}
            </div>
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv">
          <div
            id="23:129"
            style={{"marginLeft":"auto","marginRight":"auto","width":"357.21539306640625","minWidth":357.21539306640625,"height":null,"marginTop":-312,"marginBottom":240.77948760986328,"minHeight":71.22051239013672,"position": "relative","left": 24,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I23:129;23:84"
                  style={{"marginLeft":0,"marginRight":44.5128173828125,"flexGrow":1,"marginTop":13.353843688964844,"marginBottom":13.35384750366211,"backgroundColor":"rgba(255, 255, 255, 1)","borderRadius":"22.256410598754883px 22.256410598754883px 22.256410598754883px 22.256410598754883px"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="I23:129;23:85"
                  style={{"marginLeft":51.18974304199219,"marginRight":0.0000152587890625,"flexGrow":1,"marginTop":0,"marginBottom":0,"width":"50%","color":"rgba(52, 41, 63, 1)","fontSize":20,"fontWeight":500,"fontFamily":"Roboto","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0.135px"}}
                  className="innerDiv"
                >
                  <div>
                    <form>
                      {/* <label for="fname">Username:</label> */}
                      <br />
                      <input type="text" id="username" placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange} />
                      <br />
                    </form>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":2}} className="outerDiv centerer">
                <div
                  id="I23:129;23:195"
                  style={{"marginLeft":11.128204345703125,"marginRight":323.83077812194824,"flexGrow":1,"marginTop":24.482051849365234,"marginBottom":24.4820499420166}}
                  className="innerDiv"
                >
                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5 0C5.152 0 0 5.152 0 11.5C0 17.848 5.152 23 11.5 23H17.25V20.7H11.5C6.509 20.7 2.3 16.491 2.3 11.5C2.3 6.509 6.509 2.3 11.5 2.3C16.491 2.3 20.7 6.509 20.7 11.5V13.1445C20.7 14.053 19.8835 14.95 18.975 14.95C18.0665 14.95 17.25 14.053 17.25 13.1445V11.5C17.25 8.326 14.674 5.75 11.5 5.75C8.326 5.75 5.75 8.326 5.75 11.5C5.75 14.674 8.326 17.25 11.5 17.25C13.087 17.25 14.536 16.606 15.571 15.5595C16.3185 16.583 17.6065 17.25 18.975 17.25C21.2405 17.25 23 15.41 23 13.1445V11.5C23 5.152 17.848 0 11.5 0ZM11.5 14.95C9.591 14.95 8.05 13.409 8.05 11.5C8.05 9.591 9.591 8.05 11.5 8.05C13.409 8.05 14.95 9.591 14.95 11.5C14.95 13.409 13.409 14.95 11.5 14.95Z" fill="#3A157F"/>
</svg>
`}} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":4}} className="outerDiv">
          <div
            id="23:213"
            style={{"marginLeft":"auto","marginRight":"auto","minWidth":357.21539306640625,"height":null,"marginTop":-249.18460083007812,"marginBottom":177.9640884399414,"minHeight":71.22051239013672,"position": "relative","left": 24,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="23:214"
                  style={{"width":"87.53894198099756%","marginLeft":"0%","height":"62.500001339044445%","top":"18.749975227677727%","backgroundColor":"rgba(255, 255, 255, 1)","borderRadius":"22.256410598754883px 22.256410598754883px 22.256410598754883px 22.256410598754883px"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="23:215"
                  style={{"width":"85.66977815223514%","marginLeft":"14.33021757617148%","height":"100%","top":"-0.0000214247111547223%","color":"rgba(52, 41, 63, 1)","fontSize":20,"fontWeight":500,"fontFamily":"Roboto","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0.150230770111084px"}}
                  className="innerDiv"
                >
                  <div>
                    {this.props.Password && this.props.Password.split("\n").map((line, idx) => <div key={idx}>{line}</div>)}
                    {!this.props.Password && (<div>
                      <form>
                        {/* <label for="lname">Password:</label> */}
                        <br />
                        <input type="password" placeholder="Password" id="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                      </form>
                    </div>)}
                  </div>
                </div>
              </div>
              <div style={{"zIndex":2}} className="outerDiv centerer">
                <div
                  id="23:218"
                  style={{"width":"7.476635558930304%","marginLeft":"3.11526450475061%","height":"37.500001339044445%","top":"31.249976566722175%"}}
                  className="innerDiv"
                >
                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.25 9H19.125V6.75C19.125 3.645 16.605 1.125 13.5 1.125C10.395 1.125 7.87501 3.645 7.87501 6.75V9H6.75001C5.51251 9 4.50001 10.0125 4.50001 11.25V22.5C4.50001 23.7375 5.51251 24.75 6.75001 24.75H20.25C21.4875 24.75 22.5 23.7375 22.5 22.5V11.25C22.5 10.0125 21.4875 9 20.25 9ZM13.5 19.125C12.2625 19.125 11.25 18.1125 11.25 16.875C11.25 15.6375 12.2625 14.625 13.5 14.625C14.7375 14.625 15.75 15.6375 15.75 16.875C15.75 18.1125 14.7375 19.125 13.5 19.125ZM16.9875 9H10.0125V6.75C10.0125 4.82625 11.5763 3.2625 13.5 3.2625C15.4238 3.2625 16.9875 4.82625 16.9875 6.75V9Z" fill="#3A157F"/>
</svg>
`}} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{}} className="outerDiv">
          <div
            id="23:141"
            style={{"marginLeft":"auto","marginRight":"auto","minWidth":137.98974609375,"height":null,"marginTop":-173.5128173828125,"marginBottom":128.99999618530273,"minHeight":44.512821197509766,"backgroundColor":"rgba(97, 41, 203, 1)","borderRadius":"22.256410598754883px 22.256410598754883px 22.256410598754883px 22.256410598754883px"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv">
          <div
            id="23:142"
            style={{"marginLeft":"auto","marginRight":"auto","minWidth":99.04102325439453,"height":null,"marginTop":-166.8358917236328,"marginBottom":134.5640983581543,"minHeight":32.271793365478516,"color":"rgba(255, 255, 255, 1)","fontSize":20.03076934814453,"fontWeight":500,"fontFamily":"Roboto","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0.150230770111084px"}}
            className="innerDiv"
          >
            <div>
              <button type="submit" onClick={this.onSubmit} style={{"background-color": "transparent","border-color": "transparent","color":"white","fontSize":20,"fontWeight":500,"fontFamily":"Roboto"}} key="end">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

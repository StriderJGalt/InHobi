import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import '../css/lessonViewer.css';
// import { Table, TableRow, TableCell } from '@material-ui/core';
import { TitleBar, TabBar, BottomNavBar } from '../Bars.js'
import a_icon from '../images/assignment.svg'
import l_icon from '../images/course_icon.svg'
import axios from 'axios';
import Auth from '../auth/auth'

export default class MasterlessonViewer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      lessonPlan: true,
      group: false,
      currentlesson: 'Introduction to Machine Learning',
      modules:[],
      url:''
    }

    this.clickLessonPlan = this.clickLessonPlan.bind(this)
    this.clickGroup = this.clickGroup.bind(this)
    this.click = this.click.bind(this)
    this.processmodules = this.processmodules.bind(this)
  }

  processmodules(data){
    let response_data=[]
    for(let topic in data){
        for(let module in topic){
          
        }
    }
}

  clickLessonPlan() {
    // alert("Lesson Plan")
    this.setState({
        lessonPlan: true,
        group: false,
        currentlesson : ''
      })
    // this.state.lessonPlan = false
    // this.state.group = true
    // this.render()
  }

  clickGroup() {
    // alert("Group")
    this.setState({
        lessonPlan: false,
        group: true,
        currentlesson : 1,
      })
    // this.state.group = true
    // this.state.lessonPlan = false
    console.log(this.state.group)
    // this.render()
  }

  click() {
    
  }

  componentDidMount(){
    this.setState({
      id:this.props.location.id
    });
    console.log(this.props.location.id)
    axios.post('http://localhost:8080/course/course_contents',
        {courseid:this.props.location.id, wstoken:Auth.getToken()})
        .then(response => {
            console.log(response)
        })
        .catch(function(error) {
            console.log(error);
        })
  }

  render () {
    return (
    <div class="LessonViewer">
      <div className="top_bars" >
        <TitleBar title="Lesson"/>
      </div>
      <ReactPlayerComp url={this.state.url}/>

      <div class="lesson_title">
          Now Playing: {this.state.currentlesson}
      </div>

      <TabBar rounded tabs={{"Lesson Plan": this.state.lessonPlan, "Group": this.state.group}} click={[this.clickLessonPlan, this.clickGroup]} class="tabbar" />

      {this.state.lessonPlan ? <div class="syllabus">
        {
        //   this.state.courses.map((course, index) => {
        //     return (
        //         <Course history={this.props.history} id={course.id} img={this.state.images} course_name={course.displayname} progress={course.progress}/>
        //     )
        // })
        }

        <Lesson type="url" url="https://www.youtube.com/watch?v=PPLop4L2eGk&feature=youtu.be" ssonNumber="L1" lessonName="Introduction to Machine Learning" time="21m" click={this.click}/>
        <Lesson history={this.props.history} lessonNumber="A1" lessonName="Assignment" status="Open" click={this.click}/>
        <Lesson type="url" lessonNumber="L2" lessonName="Linear Regression with One Variable" time="15m" click={this.click}/>
      </div> : <Group />}

      <BottomNavBar />      
    </div>)
  }
}

class ReactPlayerComp extends Component {

  constructor(props) {
    super(props)
  }

  render () {
    return (
        <ReactPlayer
          url="https://www.youtube.com/watch?v=PPLop4L2eGk&feature=youtu.be"
          width="100%"
          height={null}
          class="player"
        />
      
    )
  }
}

class Lesson extends Component {
  constructor(props) {
    super(props)
    this.onclick = this.onclick.bind(this)
  }

  onclick(){
    this.props.history.push({
      pathname: '/taskPage'
    })
  }
  render() {
    return (
      <div class="Lesson" onClick={this.onclick}>
        <img src={ this.props.type == "url" ? l_icon : a_icon } />
        {/* <div class="num"> {this.props.lessonNumber} </div */}
        <div class="name"> {this.props.lessonName} </div>
        {/* <div class="time"> { this.props.type == "lesson" ? this.props.time : this.props.status} </div>  */}
      </div>
    )
  }
}

export class Group extends Component {
  constructor(props) {
      super(props)
      this.state = {
          messages: [{"sender": "tim", "content": "hi", "time":"21:15:10"},{"sender": "me", "content": "hello", "time":"18:11:50"}]
      }
  }

  render() {
      var messages = [];
      if (this.state.messages) {
          for (const m in this.state.messages) {
              messages.push(
              <div className={(this.state.messages[m]["sender"]=="me")?"message me":"message"}>
                  <div className="content">{this.state.messages[m]["content"]}</div>
                  <p>{this.state.messages[m]["sender"]+'-'+this.state.messages[m]["time"]}</p>
              </div>)
          }
      }
      return (
          <div className="Group">
              {messages}
              <div className="writer">
                  <input type="text" />
                  <button type="button">Send</button>
              </div>
          </div>
      )
    }
}
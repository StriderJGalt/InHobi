import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import '../css/lessonViewer.css';
// import { Table, TableRow, TableCell } from '@material-ui/core';
import { TitleBar, TabBar, BottomNavBar } from '../Bars.js'
import a_icon from '../images/assignment.svg'
import l_icon from '../images/course_icon.svg'

export default class MasterlessonViewer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      lessonPlan: true,
      group: false,
      currentlesson : 1
    }

    this.clickLessonPlan = this.clickLessonPlan.bind(this)
    this.clickGroup = this.clickGroup.bind(this)
    this.click = this.click.bind(this)
  }

  clickLessonPlan() {
    // alert("Lesson Plan")
    this.setState({
        lessonPlan: true,
        group: false,
        currentlesson : 1
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
        currentlesson : 1
      })
    // this.state.group = true
    // this.state.lessonPlan = false
    console.log(this.state.group)
    // this.render()
  }

  click() {
    
  }

  render () {

    return (
    <div class="LessonViewer">
      <div className="top_bars" >
        <TitleBar title="Lesson"/>
      </div>
      <ReactPlayerComp />

      <div class="lesson_title">
          Now Playing: Lesson #{this.state.currentlesson}
      </div>

      <TabBar rounded tabs={{"Lesson Plan": this.state.lessonPlan, "Group": this.state.group}} click={[this.clickLessonPlan, this.clickGroup]} class="tabbar" />

      {this.state.lessonPlan ? <div class="syllabus">
        <Lesson type="lesson" lessonNumber="L1" lessonName="Introduction to Machine Learning" time="21m" click={this.click}/>
        <Lesson lessonNumber="A1" lessonName="Assignment" status="Open" click={this.click}/>
        <Lesson type="lesson" lessonNumber="L2" lessonName="Linear Regression with One Variable" time="15m" click={this.click}/>
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
          url="https://www.youtube.com/watch?v=bQI5uDxrFfA&list=PLLssT5z_DsK-h9vYZkQkYNWcItqhlRJLN&index=2"
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
  }

  render() {
    return (
      <div class="Lesson" onClick={this.props.click}>
        <img src={ this.props.type == "lesson" ? l_icon : a_icon } />
        <div class="num"> {this.props.lessonNumber} </div>
        <div class="name"> {this.props.lessonName} </div>
        <div class="time"> { this.props.type == "lesson" ? this.props.time : this.props.status} </div> 
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
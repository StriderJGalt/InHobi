import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import '../css/lessonViewer.css';
import { Table, TableRow, TableCell } from '@material-ui/core';
import { TitleBar, TabBar, BottomNavBar } from '../Bars.js'

export default class MasterlessonViewer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      lessonPlan: true,
      group: false
    }

    this.clickLessonPlan = this.clickLessonPlan.bind(this)
    this.clickGroup = this.clickGroup.bind(this)
    this.click = this.click.bind(this)
  }

  clickLessonPlan() {
    alert("Lesson Plan")
    this.state.lessonPlan = false
    this.state.group = true
    this.render()
  }

  clickGroup() {
    alert("Group")
    this.state.group = true
    this.state.lessonPlan = false
    console.log(this.state.group)
    this.render()
  }

  click() {
    
  }

  render () {

    return (
    <div class="body">
      <TitleBar title="Lesson" class="titlebar" />

      <div class="inner">
      <ReactPlayerComp />

      <div class="playerTitle">
          {/* <b>Now Playing:</b> Lesson # - Lesson Description */}
      </div>

      <TabBar tabs={{"Lesson Plan": this.state.lessonPlan, "Group": this.state.group}} click={[this.clickLessonPlan, this.clickGroup]} class="tabbar" />

      <Table class="lessonTable">
        <LessonRow lessonNumber="Lesson 1" lessonName="Introduction to Machine Learning" time="" click={this.click}/>
        {/* <LessonRow lessonNumber="Lesson 2" lessonName="Linear Regression with One Variable" time="" click={this.click}/> */}
      </Table>
      </div>

      <BottomNavBar />      
    </div>)
  }
}

class ReactPlayerComp extends Component {

  constructor(props) {
    super(props)
  }

<<<<<<< HEAD
  state = {
    options: {
      poster: "https://www.youtube.com/watch?v=PPLop4L2eGk&feature=youtu.be",
      sources: [{
        type: "video/mp4",
        src: "https://youtu.be/PPLop4L2eGk"
      }],
      subtitles: [{
          language: 'zh',
          url: "https://peng666.github.io/react-awesome-player/zh.vtt",
          label: "中文"
        },
        {
          language: 'en',
          url: "https://peng666.github.io/react-awesome-player/en.vtt",
          label: "EN"
      }],
      defaultSubtitle: 'en'
    }
  }
  loadeddata() {
    console.log('loadeddata')
  }
  canplay() {
    console.log('canplay')
  }
  canplaythrough() {
    console.log('canplaythrough')
  }
  play() {
    console.log('play')
  }
  pause() {
    console.log('pause')
  }
  waiting() {
    console.log('waiting')
  }
  playing() {
    console.log('playing')
  }
  ended() {
    console.log('ended')
  }
  error() {
    console.log('error')
  }

=======
>>>>>>> 96dc1a90f85fa7758a9057d789c9cd76cdf70a69
  render () {

    return (
      
        <ReactPlayer
          url="https://www.youtube.com/watch?v=AuW-7YGkb0g"
          width="100%"
          class="player"
        />
      
    )
  }
}

class LessonRow extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <TableRow class="lessonRow">
        <TableCell class="lessonCell"> <div onClick={this.props.click}> </div> </TableCell>
        <TableCell class="lessonCell"> <div onClick={this.props.click}> {this.props.lessonNumber} </div> </TableCell>
        <TableCell class="lessonCell"> <div onClick={this.props.click}> {this.props.lessonName} </div> </TableCell>
        <TableCell class="lessonCell"> <div onClick={this.props.click}> {this.props.time} </div> </TableCell>
      </TableRow>
    )
  }
}


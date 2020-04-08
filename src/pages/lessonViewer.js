import React, { Component } from 'react';
import ReactAwesomePlayer from 'react-awesome-player';
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
    alert("Lesson Clicked")
  }

  render () {

    return (
    <div class="body">
      <TitleBar title="Lesson" />
      <ReactPlayer />

      <div class="playerTitle">
          <b>Now Playing:</b> Lesson # - Lesson Description
      </div>

      <TabBar tabs={{"Lesson Plan": this.state.lessonPlan, "Group": this.state.group}} click={[this.clickLessonPlan, this.clickGroup]} class="tabbar" />
        
     
      {/* <div class="lessonButtonDiv">
        <div class="lessonButton">
          <button> Lesson Plan </button>
        </div>
          
        <div class="lessonButton">
          <button> Group </button>
        </div>
      </div> */}

      <Table class="lessonTable">
        <LessonRow lessonNumber="Lesson 1" lessonName="Test Lesson" time="10 Mins" click={this.click}/>
        <LessonRow lessonNumber="Lesson 2" lessonName="Test Lesson Long Description" time="10000 Mins" click={this.click}/>
      </Table>
      
    </div>)
  }
}

class ReactPlayer extends Component {

  constructor(props) {
    super(props)
  }

  state = {
    options: {
      poster: "http://pic2.52pk.com/files/130514/1283314_143556_2145.jpg",
      sources: [{
        type: "video/mp4",
        src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
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

  render () {
    const { options } = this.state

    return (
      <div class="player">
        <ReactAwesomePlayer
          options={options}
          loadeddata={this.loadeddata}
          canplay={this.canplay}
          canplaythrough={this.canplaythrough}
          play={this.play}
          pause={this.pause}
          waiting={this.waiting}
          playing={this.playing}
          ended={this.ended}
          error={this.error}
        />
      </div>
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
        <TableCell class="lessonCell"> <div onClick={this.props.click}> Img </div> </TableCell>
        <TableCell class="lessonCell"> <div onClick={this.props.click}> {this.props.lessonNumber} </div> </TableCell>
        <TableCell class="lessonCell"> <div onClick={this.props.click}> {this.props.lessonName} </div> </TableCell>
        <TableCell class="lessonCell"> <div onClick={this.props.click}> {this.props.time} </div> </TableCell>
      </TableRow>
    )
  }
}


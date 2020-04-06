import React, { PureComponent } from 'react';
import { Component } from 'react'
import ReactAwesomePlayer from 'react-awesome-player'
import '../css/lessonViewer.css'

export default class lessonViewerPage extends Component {

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
    <div class="">
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

      <div class="playerTitle">
          <b>Now Playing:</b> Lesson # - Lesson Description
      </div>

      <div class="lessonButtonDiv">
        <div class="lessonButton">
          <button> Lesson Plan </button>
        </div>
          
        <div class="lessonButton">
          <button> Group </button>
        </div>
      </div>

      <div class="lessonTable">
        <lessonRow lessonNumber="Lesson 1" lessonName="Test Lesson" time="10 Mins"> Hi </lessonRow>
      </div>
    </div>)
  }
}

class lessonRow extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div class="lessonRow">
        <button> Img </button>
        <button> {this.props.lessonNumber} </button>
        <button> {this.props.lessonName} </button>
        <span> {this.props.time} </span>
      </div>
    )
  }
}
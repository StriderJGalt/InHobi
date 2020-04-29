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
      currentlesson: '',
      contents: [],
      url: ''
    }

    this.clickLessonPlan = this.clickLessonPlan.bind(this)
    this.clickGroup = this.clickGroup.bind(this)
    this.onclick = this.onclick.bind(this)
    this.goback = this.goback.bind(this)
    this.clickHome = this.clickHome.bind(this)
  }

  clickLessonPlan() {
    this.setState({
      lessonPlan: true,
      group: false,
    })
  }

  clickGroup() {
    this.setState({
      lessonPlan: false,
      group: true
    })
  }

  clickHome() {
    this.props.history.push({
      pathname: '/courses'
    });
  }

  onclick(info) {
    if (info.modname == 'url') {
      if (info.contents == undefined) {
        alert('Available when the previous Lessons are completed!')
      }
      else {
        this.setState({
          currentlesson: info.name,
          url: info.contents[0].fileurl
        })
        axios.post('/course/mark_complete', {
          cmid: info.id,
          wstoken: Auth.getToken()
        }).then(response => {
          console.log(response);
        })
        this.forceUpdate()
        this.componentDidMount()
      }
    }
    else if (info.modname == 'assign') {
      if (info.uservisible == true) {
        this.props.history.push({
          pathname: '/taskPage',
          cmid: info.id,
          courseid: this.state.id
        })
      }
      else {
        alert('Available when the previous Lessons are completed!')
      }

    }
  }

  componentDidMount() {
    console.log(Auth.getName())
    this.setState({
      id: this.props.location.id
    });
    console.log(this.props.location.id)
    axios.post('/course/course_contents',
      { courseid: this.props.location.id, wstoken: Auth.getToken() })
      .then(response => {
        console.log(response.data)
        this.setState({
          contents: response.data
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  goback() {

  }

  render() {
    return (
      <div class="LessonViewer">
        <div className="top_bars" onclick={this.goback} >
          <TitleBar title="Lessons" />
        </div>
        <ReactPlayerComp url={this.state.url} />

        <div class="lesson_title">
          Now Playing: {this.state.currentlesson}
        </div>

        <TabBar rounded tabs={{ "Lesson Plan": this.state.lessonPlan, "Group": this.state.group }} click={[this.clickLessonPlan, this.clickGroup]} class="tabbar" />

        {this.state.lessonPlan ? <div class="syllabus">
          {
            this.state.contents.map((topic) => {
              return topic.modules.map((item) => {
                if (item.modname == 'url' || item.modname == 'assign') {
                  return (
                    <Lesson onclick={this.onclick} lessonName={item.name} type={item.modname} info={item} />
                  )
                }
              })
            })
          }
        </div> : <Group forceupdate={this.forceUpdate} courseid={this.props.location.id} />}

        <BottomNavBar history={this.props.history} />
      </div>)
  }
}

export class Group extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      forumid: 0,
      msg: ''
    }

    this.onSend = this.onSend.bind(this)
    this.onChangeMsg = this.onChangeMsg.bind(this)
  }

  componentDidMount() {
    
    axios.post('/forum/get_forums_by_courses',
      { courseid: this.props.courseid, wstoken: Auth.getToken() })
      .then(response => {
        
        // Get Group's Forum ID
        response.data.map((forum) => {
          if (forum.name == 'Group') {
            this.setState({
              forumid: forum.id
            })
          }
        }) 
        
        // Find Forum's Discussions
        axios.post('/forum/get_forum_discussions',
          { forum_id: this.state.forumid, wstoken: Auth.getToken() })
          .then((res) => {

            console.log(res)
            var messages = []

            res.data.discussions.map((discussion) => {

              var message = {
                'sender': discussion.userfullname,
                'content': discussion.message
              }
              
              messages.push(message)
            })

            this.setState({
              messages: messages
            })
            
          })

      })
      .catch(function (error) {
        console.log(error);
      })
  }

  onChangeMsg(event) {
    this.setState({ msg: event.target.value });
  }

  onSend() {
    var params = {
      forum_id: this.state.forumid,
      subject: 'Group',
      message: this.state.msg,
      wstoken: Auth.getToken()
    }

    axios.post('/forum/add_discussion', params)
      .then((response) => {

        console.log(response)
        this.setState({
          msg: ''
        })
      })
  }

  render() {
    var messages = [];
    
    if (this.state.messages) {
      for (let m = this.state.messages.length - 1; m >= 0; m--) {
      
        messages.push(
          <div className={(this.state.messages[m]['sender'] == Auth.getName()) ? "message me" : "message"}>
            <div className="content" dangerouslySetInnerHTML={{__html: this.state.messages[m]["content"]}}></div>
            <p>- {this.state.messages[m]["sender"]}</p>
          </div>)
      }
      console.log(messages)
    } 
    
    return (
      <div className="Group">
        {messages}
        <div className="writer">
          <textarea rows="1" maxlength="140" autocomplete required className="input" value={this.state.msg} onChange={this.onChangeMsg} />
          <button type="button" onClick={this.onSend}>Send</button>
        </div>
      </div>
    )
  }
}

class ReactPlayerComp extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ReactPlayer
        url={this.props.url}
        width="100%"
        height={null}
        class="player"
      />

    )
  }
}

export class Lesson extends Component {
  constructor(props) {
    super(props)
    this.onclick = this.onclick.bind(this)
  }
  onclick() {
    this.props.onclick(this.props.info)
  }
  render() {
    return (
      <div class="Lesson" onClick={this.onclick}>
        <img src={this.props.type == "url" ? l_icon : a_icon} />
        {/* <div class="num"> {this.props.lessonNumber} </div */}
        <div class="name"> {this.props.lessonName} </div>
        {/* <div class="time"> { this.props.type == "lesson" ? this.props.time : this.props.status} </div>  */}
      </div>
    )
  }
}


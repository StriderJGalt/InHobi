import React, { Component } from 'react'
import './css/TaskFeedbackPage.css'
import { TitleBar, TabBar, BottomNavBar } from './Bars.js'

export default class TaskFeedbackPage extends Component {
    render() {
        return (
            <div>
                <div className="top_bars" >
                    <TitleBar title="Feedback" />
                </div>
                <div className="container">
                    <FeedbackCard task_name='Task 3' />
                </div>
                <BottomNavBar />
            </div>
        )
    }
}

export class FeedbackCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task_name: this.props.task_name
        }
    }
    render() {
        return (
            <div className="task_card">
                <div className="header">
                    <h3>{this.state.task_name}</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none" /><path fill="white" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1-8h-2V7h2v2z" /></svg>
                </div>
                <div className="download_btn">
                    <h4>Download Submission</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 13v5c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1v-5c0-.55-.45-1-1-1s-1 .45-1 1v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-.55-.45-1-1-1s-1 .45-1 1zm-6-.33l1.88-1.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-3.59 3.59c-.39.39-1.02.39-1.41 0L7.7 12.2c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L11 12.67V4c0-.55.45-1 1-1s1 .45 1 1v8.67z" /></svg>
                </div>
                <div className="comment_box">
                    <textarea name="comments" placeholder="Comments"></textarea>
                </div>
                <div className="submit_btn">
                    <h4>SUBMIT</h4>
                </div>
                <div style={{ "clear": "both" }}></div>
            </div>
        )
    }
}
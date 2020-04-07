import React,{ Component } from 'react'
import './css/taskSubmission.css'
//import upload_icon from './css/upload_icon.png'
import { TitleBar, TabBar, BottomNavBar } from './Bars.js'

export class TaskSub extends Component {
    render() {
        return (
            <div className="page_container">
                <div className="top_bars">
                    <TitleBar title="Practice" />
                    <TabBar tabs={{"Task":false,"Submissions":true}}/>
                </div>    
                <Sub ins="Select each photo and save with low quality setting so that file size is less.
                    Compress the five photos toether into a zip file before uploading. 
                    Total file size must be less than 25MB" />
                <BottomNavBar />
            </div>
        )
    }
}

class Sub extends Component {
    render() {
        return (
            <div class='container' >
                <h2>Submission Instructions</h2>
                <p>{this.props.ins}</p>
                <div class="com_up">
                    <div class="comments">
                        <textarea name="comments" placeholder="Comments"></textarea>
                    </div>
                    <div class="upload">
                        Upload
                    </div>
                </div>
            </div>
        )
    }
}

import React,{ Component } from 'react'
import '../css/taskSubmission.css'
//import upload_icon from './css/upload_icon.png'
import { TitleBar, TabBar, BottomNavBar } from '../Bars.js'

export class TaskSub extends Component {
    constructor(props) {
        super(props)

        this.clickTask = this.clickTask.bind(this)
        this.clickSubmissions = this.clickSubmissions.bind(this)
    }

    clickTask() {
        alert("task")
    }

    clickSubmissions() {
        alert("submission")
    }
    render() {
        return (
            <div className="tasksubmission">
            <div className="page_container">
                <div className="top_bars">
                    <TitleBar title="Practice" />
                    <TabBar tabs={{"Task":false,"Submissions":true}} click={[this.clickTask, this.clickSubmissions]}/>
                </div>    
                <Sub ins="Select each photo and save with low quality setting so that file size is less.
                    Compress the five photos toether into a zip file before uploading. 
                    Total file size must be less than 25MB" />
                <BottomNavBar />
            </div>
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
                        <form>
                            <textarea name="comments" placeholder="Comments"></textarea>
                        </form>
                    </div>
                    <div class="upload">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg"  height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path fill="white" d="M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z"/></svg>
                        </div>
                        <div>
                            Upload
                        </div>    
                    </div>
                </div>
            </div>
        )
    }
}

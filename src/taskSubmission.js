import React,{ Component } from 'react'
import './css/taskpage.css'
import upload_icon from './css/upload_icon.png'

export class TaskPage extends Component {
    render() {
        return (
            <div className="page_container">
                <div className="top_bars">
                    <TitleBar title="Practice" />
                    <nav class="tab_bar">
                        <a class="nav-item" href="#">Task</a>
                        <a class="nav-item selected" href="#">Submission</a>
                    </nav>
                </div>    
                <BottomNavBar />
                <div class="container">
                    <h2>Submission Instructions</h2>
                    <p><Sub ins="Select each photo and save with low quality setting so that file size is less
                    Compress the five photos toether into a zip file before uploading. 
                    Total file size must be less than 25MB" />
                    </p>
                    <div class="com_up">
                        <div class="comments">
                            <textarea name="comments" placeholder="Comments"></textarea>
                        </div>
                        <div class="upload">
                            {upload_icon}
                            Upload
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Sub extends Component {
    render() {
        return (
            <div className='content' >
                    <h3 className='course_name' >
                        {this.props.ins}
                    </h3>
                    <h2 className='task_name'>
                        {this.props.task_name}
                    </h2>
                    <h5 className='task_content'>
                        {this.props.task_content}
                    </h5>
            </div>
        )
    }
}

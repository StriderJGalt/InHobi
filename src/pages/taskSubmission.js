import React,{ Component } from 'react'
import '../css/taskSubmission.css'
//import upload_icon from './css/upload_icon.png'
import { TitleBar, TabBar, BottomNavBar } from '../Bars.js'
import axios from "axios";

export class TaskSub extends Component {
    constructor(props) {
        super(props)

        this.clickTask = this.clickTask.bind(this)
        this.clickSubmissions = this.clickSubmissions.bind(this)
    }

    clickTask() {
        this.props.history.push({
            pathname: '/taskPage',
            cmid:this.props.location.cmid,
            courseid:this.props.location.courseid
        });
    }

    clickSubmissions() {
        
    }
    render() {
        return (
            <div className="tasksubmission">
            <div className="page_container">
                <div className="top_bars">
                    <TitleBar title="Practice" />
                    <TabBar tabs={{"Task":false,"Submissions":true}} click={[this.clickTask, this.clickSubmissions]}/>
                </div>    
                <Sub history={this.props.history} />
                <BottomNavBar />
            </div>
            </div>
        )
    }
}

class Sub extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content:'',
            selectedFile:null,
        }

        this.onChangeContent = this.onChangeContent.bind(this);
        this.onFileChange = this.onFileChange.bind(this);
        this.onFileUpload = this.onFileUpload.bind(this);
    }

    onFileChange(event){ 
        this.setState({ selectedFile: event.target.files[0] }); 
    }; 

    onChangeContent(event){
        this.setState({content: event.target.value});
    }

    onFileUpload(){ 
        alert('Submission Made!')
        this.props.history.push({
            pathname:'/lessonViewer'
        })
        // Create an object of formData 
        const formData = new FormData(); 
       
        // Update the formData object 
        formData.append( 
          "myFile", 
          this.state.selectedFile, 
          this.state.selectedFile.name 
        ); 
       
        // Details of the uploaded file 
        console.log(this.state.selectedFile); 
       
        // // Request made to the backend api 
        // // Send formData object 
        // axios.post("api/uploadfile", formData); 
      };


    render() {
        return (
            <div class='container' >
                <h2>Submission Portal</h2>
                <p>{this.props.ins}</p>
                <div class="com_up">
                    <div class="comments">
                        <form>
                            <textarea name="comments" placeholder="Comments"></textarea>
                        </form>
                    </div>
<<<<<<< HEAD
                    <input type="file" onChange={this.onFileChange} /> 
                    <div class="upload">
=======
                
                    <label class="upload">
                        <input id="file_input" type="file"/>
>>>>>>> b0717630af627abd8f9b044e30151fb6de0f41f1
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg"  height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path fill="white" d="M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z"/></svg>
                        </div>
                        <div onClick={this.onFileUpload}>
                            Upload
                        </div> 
                    </label>    
                </div>
            </div>
        )
    }
}

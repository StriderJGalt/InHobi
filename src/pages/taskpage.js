import React,{ Component } from 'react'
import '../css/taskpage.css'
import { TitleBar, TabBar, BottomNavBar } from '../Bars.js'
import Auth from '../auth/auth';
import axios from 'axios';

export class TaskPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            coursename:'',
            asggn_name:'',
            intro:'',
            assgn_id:''
        }
        this.clickTask = this.clickTask.bind(this)
        this.clickSubmissions = this.clickSubmissions.bind(this)
    }

    clickTask() {
        
    }

    clickSubmissions() {
        this.props.history.push({
            pathname: '/taskSubmission',
            assgnid:this.state.assgn_id,
            courseid:this.props.location.courseid,
            cmid:this.props.location.cmid
        })
    }

    componentDidMount(){
        axios.post('/assgn/assignments',
        {
            courseid:this.props.location.courseid, 
            wstoken:Auth.getToken()})
        .then(response => {
            response = response.data.courses[0]
            var coursename = response.fullname
            var assignments = response.assignments
            for(let index in assignments){
                if(assignments[index].cmid==this.props.location.cmid){
                    this.setState({
                        coursename:coursename,
                        assgn_name:assignments[index].name,
                        intro:assignments[index].intro,
                        assgn_id:assignments[index].id
                    })
                }
            }
        })
        .catch(function(error) {
            console.log(error);
        })
    }
    
    render() {
        return (
            <div className="taskpage">
                <div className="page_container">
                <div className="top_bars">
                    <TitleBar title="Practice" />
                    <TabBar tabs={{"Task":true,"Submissions":false}} click={[this.clickTask, this.clickSubmissions]} />
                </div>    
                <div className='container courses'>
                    <Task course_name={this.state.coursename} task_name={this.state.assgn_name} task_content={this.state.intro}/>
                </div>
                <BottomNavBar />
                </div>
            </div>
        )
    }
}

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className='container' >
                    <h3 className='course_name' >
                        {this.props.course_name}
                    </h3>
                    <h2 className='task_name'>
                        {this.props.task_name}
                    </h2>
                    <div className='task_content'>
                        {this.props.task_content}
                    </div>
            </div>
        )
    }
}

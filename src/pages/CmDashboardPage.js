import React, { Component } from 'react'
import '../css/CmDashboardPage.css'
import { TitleBar, TabBar, BottomNavBar } from '../Bars.js'
import Auth from '../auth/auth'
import axios from 'axios'

export default class CmDashboardPage extends Component {
    // constructor(props) {
    //     super(props);
    //     var task_card_array = [];
    //     for (const key in this.props.tasks) {
    //         task_card_array.push(
    //             <div className="task_card">
    //                 <div className="left">
    //                     <h3>{this.props.tasks[key]["task_name"]}</h3>
    //                     <p>@{this.props.tasks[key]["user_name"]}</p>
    //                 </div>
    //             </div>
    //         )
    //     };
    //     this.state = {
    //         tasks: task_card_array
    //     }
    // }
    constructor(props) {
        super(props)
        this.state = {
            submissions:[],
            assignmentnames:[]
        }

        this.clickTasks = this.clickTasks.bind(this)
        this.clickGroup = this.clickGroup.bind(this)
    }

    clickTasks() {
        alert("Tasks")
    }

    clickGroup() {
        alert("Group")
    }

    componentDidMount(){
        axios.post('/assgn/assignments',
            {
                courseid:3,
                wstoken:Auth.getToken()

            }).then(
                response => {
                    let assignments = response.data.courses[0].assignments;
                    var submissions = []
                    var ids = []
                    for(let i in assignments){
                        ids.push(assignments[i].id)
                        axios.post('/assgn/submissions',
                        {
                            assign_id:assignments[i].id,
                            wstoken:Auth.getToken()
                        }).then(
                            response2 => {
                                submissions.push(response2.data.assignments)
                            }
                        )
                    }
                    this.setState({
                        submissions:submissions
                    })
                    console.log(submissions)
                    console.log(this.state.submissions)
                    
                }
            ).catch(function(error){
                console.log(error)
            })
    }
    render() {
        return (
            <div className="CmDashboardPage">
                <div className="top_bars" >
                    <TitleBar title="Dashboard" />
                    <TabBar tabs={{ "Tasks": true, "Group": false }} click={[this.clickTasks, this.clickGroup]} />
                </div>
                <div className="container">
                    {
                        this.state.submissions.map((assignment, assignmentid) => {
                            console.log('hello')
                        })
                    }
                    <TaskCard history={this.props.history} task_name="Supervised Learning Methods" user_name="rahul" time_submited="23:02" />
                </div>
                <BottomNavBar />
            </div>

        )
    }
}

export class TaskCard extends Component {
    constructor(props){
        super(props);
        this.onclick = this.onclick.bind(this)
    }

    onclick(){
        this.props.history.push({
            pathname:'/taskFeedback'
        })
    }
    render() {
        return (
            <div className="task_card" onClick={this.onclick}>
                <div className="left">
                    <h3>{this.props.task_name}</h3>
                    <p>@{this.props.user_name}</p>
                </div>
                <div className="right">
                    <h4>{this.props.time_submited}</h4>
                </div>
            </div>
        )
    }
}
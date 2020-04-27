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
            submissions: [],
            names: [],
            ids: []
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

    componentDidMount() {
        axios.post('/assgn/assignments',
            {
                courseid: 3,
                wstoken: Auth.getToken()

            }).then(
                response => {
                    let assignments = response.data.courses[0].assignments;
                    var ids = []
                    var names = []
                    console.log(assignments)
                    for (let i in assignments) {
                        ids.push(assignments[i].id)
                        names.push(assignments[i].name)
                    }
                    console.log(names)
                    axios.post('/assgn/submissions',
                        {
                            assign_id: ids,
                            wstoken: Auth.getToken()
                        }).then(
                            response2 => {
                                console.log(response2.data.assignments)
                                this.setState({
                                    ids: ids,
                                    names: names,
                                    submissions: response2.data.assignments
                                })
                            }
                        )
                }
            ).catch(function (error) {
                console.log(error)
            })
    }
    render() {
        return (
            <div className="CmDashboardPage">
                <div className="top_bars" >
                    <TitleBar title="CM_Dash" />
                    <TabBar tabs={{ "Tasks": true, "Group": false }} click={[this.clickTasks, this.clickGroup]} />
                </div>
                <div className="container">
                    {
                        this.state.submissions.map((assignment, index) => {
                            return assignment.submissions.map((submission) => {
                                if (submission.status == "submitted" && submission.gradingstatus == "notgraded") {
                                    return (
                                        <TaskCard submission={submission} time_modified={submission.timemodified} history={this.props.history} task_name={this.state.names[this.state.ids.indexOf(assignment.assignmentid)]} userid={submission.userid} assignid={assignment.assignmentid} />
                                    )
                                }
                            })
                        })
                    }
                    {/* <TaskCard history={this.props.history} task_name="Supervised Learning Methods" user_name="rahul" time_submited="23:02" /> */}
                </div>
                <BottomNavBar history={this.props.history} />
            </div>

        )
    }
}

export class TaskCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            timemodified: ''
        }
        this.onclick = this.onclick.bind(this)
    }

    onclick() {
        this.props.history.push({
            pathname: '/taskFeedback',
            submission: this.props.submission,
            assignid: this.props.assignid,
            userid: this.props.userid,
            assignmentname: this.props.task_name
        })
    }
    componentDidMount() {
        axios.post('/assgn/get_participant',
            {
                userid: this.props.userid,
                wstoken: Auth.getToken(),
                assignid: this.props.assignid
            }).then(
                response => {
                    this.setState({
                        fullname: response.data.fullname
                    })
                }
            )
        var theDate = new Date(this.props.time_modified * 1000);
        var dateString = theDate.toLocaleString();
        this.setState({
            timemodified: dateString
        })
    }


    render() {
        return (
            <div className="task_card" onClick={this.onclick}>
                <div className="left">
                    <h3>{this.props.task_name}</h3>
                    <p>{this.state.fullname}</p>
                </div>
                <div className="right">
                    <h10>{this.state.timemodified}</h10>
                </div>
            </div>
        )
    }
}
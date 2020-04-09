import React, { Component } from 'react'
import '../css/CmDashboardPage.css'
import { TitleBar, TabBar, BottomNavBar } from '../Bars.js'

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

        this.clickTasks = this.clickTasks.bind(this)
        this.clickGroup = this.clickGroup.bind(this)
    }

    clickTasks() {
        alert("Tasks")
    }

    clickGroup() {
        alert("Group")
    }
    render() {
        return (
            <div>
                <div className="top_bars" >
                    <TitleBar title="Dashboard" />
                    <TabBar tabs={{ "Tasks": true, "Group": false }} click={[this.clickTasks, this.clickGroup]} />
                </div>
                <div className="container">
                    <TaskCard task_name="Task 3" user_name="jeff" time_submited="21:15:00" />
                </div>
                <BottomNavBar />
            </div>

        )
    }
}

export class TaskCard extends Component {
    render() {
        return (
            <div className="task_card">
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
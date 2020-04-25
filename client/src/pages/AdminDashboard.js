import React, { Component } from 'react'
import "../css/AdminDashboard.css"
import { TitleBar, BottomNavBar } from '../Bars'

export default class Admin_Dashboard extends Component {
    render() {
        return (
            <div className="Admin_dashboard">
                <div className="top_bars" >
                    <TitleBar title="Admin Dashboard" />
                </div>
                <div className="roles">
                    <RoleCard name="Users Admin" />
                    <RoleCard name="Groups Admin" />
                    <RoleCard name="InHobi TV Admin" />
                    <RoleCard name="Role Assignment Admin" />
                </div>
                <BottomNavBar history={this.props.history}/>
            </div>
        )
    }
}

export class RoleCard extends Component {
    render() {
        return (
            <div className='RoleCard'>
                <h2>{this.props.name}</h2>
            </div>
        )
    }
}
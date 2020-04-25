import React, { Component } from 'react'
import '../css/MenuPage.css'
import { TitleBar, TabBar, BottomNavBar } from '../Bars'
import profile_pic from '../images/ppic.jpg'
import settings_icon from '../images/settings_icon.svg'
import course_icon from '../images/course_icon.svg'
import intsructor_icon from '../images/instructor_icon.png'
import groups_icon from '../images/group_icon.svg'
import blog_icon from '../images/content.svg'
import sponsor_icon from '../images/gift.svg'

export default class MenuPage extends Component {
    render() {
        return (
            <div className="MenuPage">
                <div className="top_bars" >
                    <TitleBar title="InHobi" />
                </div>
                <div className="container">
                    <MenuItem name="Profile" icon={profile_pic} />
                    <MenuItem name="Settings" icon={settings_icon} />
                    <MenuItem name="Courses" icon={course_icon} />
                    <MenuItem name="Instructors" icon={intsructor_icon} />
                    <MenuItem name="Open Groups" icon={groups_icon} />
                    <MenuItem name="Blog" icon={blog_icon} />
                    <MenuItem name="Sponsor" icon={sponsor_icon} />
                </div>
                <BottomNavBar />
            </div>
        )
    }
}

class MenuItem extends Component {
    render() {
        return (
            <div className={"MenuItem "+this.props.name}>
                <div className="icon">
                    <img src={this.props.icon} />
                </div>
                <div className="name">
                    <h2>{this.props.name}</h2>
                </div>
            </div>
        )
    }
}
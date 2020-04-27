import React, { Component } from 'react'
import '../css/MenuPage.css'
import { TitleBar, TabBar, BottomNavBar } from '../Bars'
import profile_pic from '../images/ppic.jpg'
import settings_icon from '../images/settings_icon.svg'
import course_icon from '../images/course_icon.svg'
import intsructor_icon from '../images/instructor_icon.png'
import groups_icon from '../images/group_icon.svg'
import blog_icon from '../images/content.svg'
import user_prof from '../images/user_prof_icon.svg'
import sponsor_icon from '../images/gift.svg'
import Auth from '../auth/auth'

export default class MenuPage extends Component {
    constructor(props) {
        super(props);
        this.clickCourses = this.clickCourses.bind(this);
        this.clickInstructors = this.clickInstructors.bind(this);
        this.clickLogOut = this.clickLogOut.bind(this)
    }
    clickLogOut() {
        Auth.logout(this.props)
    }
    clickCourses() {
        this.props.history.push({
            pathname: '/CoursesPage'
        })
    }

    clickInstructors() {
        this.props.history.push({
            pathname: "/InstructorsPage"
        })
    }

    render() {
        return (
            <div className="MenuPage">
                <div className="top_bars" >
                    <TitleBar title="InHobi" logout />
                </div>
                <div className="container">
                    <MenuItem name="Profile" icon={profile_pic} />
                    <MenuItem name="Settings" icon={settings_icon} />
                    <MenuItem click={this.clickCourses} name="Courses" icon={course_icon} />
                    <MenuItem click={this.clickInstructors} name="Instructors" icon={intsructor_icon} />
                    <MenuItem name="Open Groups" icon={groups_icon} />
                    <MenuItem name="Blog" icon={blog_icon} />
                    <MenuItem name="Sponsor" icon={sponsor_icon} />
                    {/* <MenuItem click={this.clickLogOut} name="Log Out" icon={user_prof} /> */}
                </div>
                <BottomNavBar history={this.props.history} />
            </div>
        )
    }
}

class MenuItem extends Component {
    render() {
        return (
            <div onClick={this.props.click} className={"MenuItem " + this.props.name}>
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
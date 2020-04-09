import React, { Component } from 'react'
import '../css/CoursePage.css'
import course_icon from '../css/camera_web.jpg'
import group_icon from '../css/group-24px.svg'
import { TitleBar, TabBar, BottomNavBar } from '../Bars'

export class CoursePage extends Component {
    constructor(props) {
        super(props)

        this.clickFeed = this.clickFeed.bind(this)
        this.clickCourses = this.clickCourses.bind(this)
        this.clickGroups = this.clickGroups.bind(this)
    }

    clickFeed() {
        alert("Feed")
    }

    clickCourses() {
        alert("Courses")
    }
    clickGroups() {
        alert("Groups")
    }
    render() {
        return (
            <div className="CoursePage">
                {/* <nav className="container navbar">
                    <a className='nav-item' href="#">Feed</a>
                    <a className='nav-item selected' href="#">Courses</a>
                    <a className='nav-item' href="#">Groups</a>
                </nav> */}
                <div className="top_bars" >
                    <TitleBar title="User Dashboard" />
                    <TabBar tabs={{ "Feed": false, "Courses": true, "Groups": false }} click={[this.clickFeed, this.clickCourses, this.clickGroups]} />
                </div>
                <div className='container courses'>
                    <Course img={course_icon} course_name='Introduction to Photography' instructor='John Galt' progress={56} notifications={23} />
                    <Course img={course_icon} course_name='Advanced Photography' instructor='Ansel Adams' progress={10} notifications={3} />
                    <Course img={course_icon} course_name='Sports Photography' instructor='David Luis' progress={0} notifications={5} />
                    <Course img={course_icon} course_name='Astro Photography' instructor='Johannes Kepler' progress={85} notifications={0} />
                </div>
                <BottomNavBar />
            </div>
        )
    }
}

class Course extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: this.props.progress,
            notifications: this.props.notifications
        }
    }
    render() {
        return (
            <div className='course' >
                <div className='course-icon' >
                    <img src={this.props.img} />
                </div>
                <div className='course-details'>
                    <p className='course-name'>{this.props.course_name}</p>
                    <p className='course-instructor'>{this.props.instructor}</p>
                </div>
                <div className='course-progress'>
                    <div className='course-progress-bar'>
                        <span className='course-progress-bar-done' style={{ 'width': this.state.progress + '%' }}></span>
                    </div>
                    <p>{this.state.progress}% completed</p>
                </div>
                <div className='course-group-button'>
                    {/* <img src={group_icon} /> */}
                    <a href="#" class="notif"><span class="num">{this.state.notifications}</span></a>
                </div>
            </div>
        )
    }
}


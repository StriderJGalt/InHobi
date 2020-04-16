import React, { Component } from 'react'
import '../css/instructor_profile_courses.css'
import course_icon from '../css/camera_web.jpg'
import { TitleBar, TabBar, BottomNavBar } from '../Bars'
import axios from "axios";

export class Instructor_courses extends Component {
    constructor(props) {
        super(props)

        this.clickAbout = this.clickAbout.bind(this)
        this.clickCourses = this.clickCourses.bind(this)
        this.clickFeed = this.clickFeed.bind(this)
    }

    clickAbout() {
        alert("About")
    }

    clickFeed() {
        alert("Feed")
    }

    clickCourses() {
        this.props.history.push({
            pathname: '/ins_courses',
        });
    }

    componentDidMount() {
        axios.post('http://localhost:8080/course/courses')
    }
    render() {
        console.log('render')
        return (
            <div className="Instructor_courses">
                <div className="top_bars" >
                    <TitleBar title="Instructor Profile" />
                </div>
                <div className='Instructor_profile'>
                    <Ins_profile img={instructor - icon} ins_name='Naveen Seth' description='Story Teller || Visual Alchemist' award='' />
                </div>
                <TabBar tabs={{ "About": false, "Courses": true, "Feed": false }} click={[this.clickAbout, this.clickCourses, this.clickFeed]} />
                <div className='courses_container'>
                    <Course_profile img={course_icon} course_name='Introduction to Photography' no_of_lessons='21 Lessons' />
                    <Course_profile img={course_icon} course_name='Machine Learning' no_of_lessons='15 Lessons' />

                </div>
                <BottomNavBar />
            </div>
        )
    }
}
class Ins_profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    };
    render() {
        return (
            <div className='profile'>
                <div className='instructor-icon' >
                    <img src={this.props.img} />
                </div>
                <div className='instructor-name'>
                    {this.props.ins_name}
                </div>
                <div className='description'>
                    {this.props.description}
                </div>
                <div className="Award">
                    {this.props.award}
                </div>
            </div>
        )
    }
}

class Course_profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    };
    render() {
        return (
            <div className='course'>
                <div className='course-icon' >
                    <img src={this.props.img} />
                </div>
                <div className='course-name'>
                    {this.props.course_name}
                </div>
                <div className='no_of_lessons'>
                    {this.state.no_of_lessons}
                </div>
            </div>
        )
    }
}


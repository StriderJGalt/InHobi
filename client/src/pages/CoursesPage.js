import React, { Component } from 'react'
import "../css/CoursesPage.css"
import { TitleBar, TabBar, BottomNavBar } from '../Bars'
import course_pic from '../images/camera_web.jpg'

export default class CoursesPage extends Component {
    render() {
        return (
            <div className="CoursesPage">
                <div className="top_bars" >
                    <TitleBar title="Courses" />
                </div>
                <div className="courses">
                    <CourseCard img={course_pic} name="Intro to Photography" num_lessons="27 Lessons" rating="4.8" />
                    <CourseCard img={course_pic} name="Intro to Photography" num_lessons="27 Lessons" rating="4.8" />
                    <CourseCard img={course_pic} name="Intro to Photography" num_lessons="27 Lessons" rating="4.8" />
                    <CourseCard img={course_pic} name="Intro to Photography" num_lessons="27 Lessons" rating="4.8" />
                    <CourseCard img={course_pic} name="Intro to Photography" num_lessons="27 Lessons" rating="4.8" />
                    <CourseCard img={course_pic} name="Intro to Photography" num_lessons="27 Lessons" rating="4.8" />
                    <CourseCard img={course_pic} name="Intro to Photography" num_lessons="27 Lessons" rating="4.8" />
                    <CourseCard img={course_pic} name="Intro to Photography" num_lessons="27 Lessons" rating="4.8" />
                    <CourseCard img={course_pic} name="Intro to Photography" num_lessons="27 Lessons" rating="4.8" />
                    <CourseCard img={course_pic} name="Intro to Photography" num_lessons="27 Lessons" rating="4.8" />
                </div>
                <BottomNavBar history={this.props.history}/>
            </div>
        )
    }
}

export class CourseCard extends Component {

    constructor(props) {
        super(props);
        this.clickcourses = this.clickcourses.bind(this);
    }

    clickcourses() {
        // alert("clicked");
        window.location = "/CourseProfile";
    }

    render() {
        return (
            <div onClick={this.clickcourses} className='CourseCard'>
                <img src={this.props.img} />
                <h3>{this.props.name}</h3>
                <p>{this.props.num_lessons}</p>
            </div>
        )
    }
}
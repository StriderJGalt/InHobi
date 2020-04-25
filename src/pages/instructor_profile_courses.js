import React, { Component } from 'react'
import '../css/instructor_profile_courses.css'
import course_pic from '../css/camera_web.jpg'
import instructor_pic from '../images/ppic.jpg'
import { TitleBar, TabBar, BottomNavBar } from '../Bars'
import { Ins_profile } from './instructor_profile_about'
import { CourseCard } from './CoursesPage'

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


    render() {
        console.log('render')
        return (
            <div className="Instructor_courses">
                <div className="top_bars" >
                    <TitleBar title="Instructor Profile" />
                </div>
                <div className='Instructor_profile'>
                    <Ins_profile img={instructor_pic} ins_name='Naveen Seth' description='Story Teller || Visual Alchemist' award='Red Dot Award Winner' />
                </div>
                <TabBar rounded tabs={{ "About": false, "Courses": true, "Feed": false }} click={[this.clickAbout, this.clickCourses, this.clickFeed]} />
                <div className='courses_container'>
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
                <BottomNavBar />
            </div>
        )
    }
}

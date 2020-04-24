import React, { Component } from 'react'
// import '../css/Courses_about.css'
import { Course_profile } from './Course_about'
import { Lesson } from './lessonViewer'
import { TitleBar, TabBar, BottomNavBar } from '../Bars'
import course_pic from '../images/camera_web.jpg'

export class Course_syllabus extends Component {
    constructor(props) {
        super(props)

        this.clickAbout = this.clickAbout.bind(this)
        this.clickSyllabus = this.clickSyllabus.bind(this)
        this.clickReviews = this.clickReviews.bind(this)
        this.clickBuy = this.clickBuy.bind(this)
    }

    clickAbout() {
        alert("About")
    }

    clickSyllabus() {
        alert("Syllabus")
    }

    clickReviews() {
        alert("Reviews")
    }

    clickBuy() {
        alert("Buy")
    }

    render() {
        console.log('render')
        return (
            <div className="Course_syllabus">
                <div className="top_bars" >
                    <TitleBar title="Course Syllabus" />
                </div>
                <div className='profile'>
                    <Course_profile img={course_pic} course_name='Intro to Photography' no_of_lessons='21 Lessons' stars='4 Stars' />
                </div>
                <TabBar rounded tabs={{ "About": false, "Syllabus": true, "Reviews": false, "Buy": false }} click={[this.clickAbout, this.clickSyllabus, this.clickReviews, this.clickBuy]} />
                <div className='syllabus'>
                    <Lesson type="lesson" lessonNumber="L1" lessonName="Introduction to Machine Learning" time="21m" click={this.click} />
                    <Lesson lessonNumber="A1" lessonName="Assignment" status="Open" click={this.click} />
                    <Lesson type="lesson" lessonNumber="L2" lessonName="Linear Regression with One Variable" time="15m" click={this.click} />
                    <Lesson lessonNumber="A2" lessonName="Assignment" status="Lock" click={this.click} />
                </div>
                <BottomNavBar />
            </div>
        )
    }
}


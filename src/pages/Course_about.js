import React, { Component } from 'react'
import '../css/Course_about.css'
import { InstructorCard } from './HomePage'
import instructor_pic from '../images/ins_pic.jpg'
import { TitleBar, TabBar, BottomNavBar } from '../Bars'
// import axios from "axios";
import course_pic from '../images/camera_web.jpg'

export class Course_about extends Component {
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

    // componentDidMount() {
    //     axios.post('http://localhost:8080/course/courses')
    // }
    render() {
        console.log('render')
        return (
            <div className="Course_about">
                <div className="top_bars" >
                    <TitleBar title="Course About" />
                </div>
                <div className='profile'>
                    <Course_profile img={course_pic} course_name='Intro to Photography' no_of_lessons='21 Lessons' stars='4 Stars' />
                </div>
                <TabBar rounded tabs={{ "About": true, "Syllabus": false, "Reviews": false, "Buy": false }} click={[this.clickAbout, this.clickSyllabus, this.clickReviews, this.clickBuy]} />
                <div className='about_container'>
                    <Details overview='Want to know what it takes to be professional Photographer, then this course is the first step to that goal.This course will be covering all the technical aspects of photography and also all the technical terms and definitions related to photography. There are assignments related to the technical aspects covered here. ' />
                </div>
                <BottomNavBar />
            </div>
        )
    }
}
export class Course_profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    };
    render() {
        return (
            <div className='profile'>
                <div className='course-icon' >
                    <img src={this.props.img} />
                </div>
                <div className='course-name'>
                    {this.props.course_name}
                </div>
                <div className='no-of-lessons'>
                    {this.props.no_of_lessons}
                </div>
                <div className="stars">
                    {this.props.stars}
                </div>
            </div>
        )
    }
}

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    };
    render() {
        return (
            <div className='details'>
                <div className='overview'>
                    <h2>Course Overview</h2>
                    <div className='content'>
                        {this.props.overview}
                    </div>
                </div>
                <div className='ins_profile'>
                    <h2>Instructor Profile</h2>
                    <InstructorCard img={instructor_pic} name='Fathima Nizam' description="Designer | Photographer" courses={["Intro to Photography", "Flash Photography", "Portrait photography"]} />
                </div>
            </div>
        )
    }
}


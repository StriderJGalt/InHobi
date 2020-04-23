import React, { Component } from 'react'
import '../css/Course_reviews.css'
import { TitleBar, TabBar, BottomNavBar } from '../Bars'
import user_prof_icon from '../images/user_prof_icon.svg'
import axios from "axios";

export class Course_reviews extends Component {
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
            <div className="Course_reviews">
                <div className="top_bars" >
                    <TitleBar title="Course Reviews" />
                </div>
                <div className='profile'>
                    <Course_profile img={course_icon} course_name='Intro to Photography' no_of_lessons='21 Lessons' stars='4' />
                </div>
                <TabBar rounded tabs={{ "About": false, "Syllabus": false, "Reviews": true, "Buy": false }} click={[this.clickAbout, this.clickSyllabus, this.clickReviews, this.clickBuy]} />
                <div className='reviews_container'>
                    <Review user_pic={user_prof_icon} username='Jeff John' star='4' date='12 Jan 2020' content='Got to learn new concepts on how to focus on the subject, what the aperture and shutter speed was and how to optimise them for taking the best picture.' />
                    <Review user_pic={user_prof_icon} username='Joseph John' star='4' date='13 Jan 2020' content='Got to learn new concepts on how to focus on the subject, what the aperture and shutter speed was and how to optimise them for taking the best picture.' />
                </div>
                <BottomNavBar />
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

class Review extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    };
    render() {
        return (
            <div className='review'>
                <div className='user-pic'>
                    {this.props.user_pic}
                </div>
                <div className='username'>
                    <h4>{this.props.username}</h4>
                    <h5>{this.props.star}</h5>
                </div>
                <div className='date'>
                    {this.props.date}
                </div>
                <div className='content'>
                    {this.props.content}
                </div>
            </div>
        )
    }
}


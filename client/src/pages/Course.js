import React, { Component } from 'react'
import '../css/Course.css'
import { InstructorCard } from './HomePage'
import instructor_pic from '../images/ins_pic.jpg'
import { TitleBar, TabBar, BottomNavBar } from '../Bars'
import { Lesson } from './lessonViewer'
// import axios from "axios";
import course_pic from '../images/camera_web.jpg'
import user_prof_icon from '../images/user_prof_icon.svg'
import star from '../images/star.svg'
import primarystar from '../images/star-24px.svg'
export class Course_about extends Component {
    constructor(props) {
        super(props)

        this.clickAbout = this.clickAbout.bind(this)
        this.clickSyllabus = this.clickSyllabus.bind(this)
        this.clickReviews = this.clickReviews.bind(this)
        this.clickBuy = this.clickBuy.bind(this)

        this.state = {
            subpage: { "about": true, "syllabus": false, "reviews": false, "buy": false }
        };
    }

    clickAbout() {
        // alert("About");
        this.setState({
            subpage: { "about": true, "syllabus": false, "reviews": false, "buy": false }
        });
    }

    clickSyllabus() {
        // alert("Syllabus");
        this.setState({
            subpage: { "about": false, "syllabus": true, "reviews": false, "buy": false }
        });
    }

    clickReviews() {
        // alert("Reviews");
        this.setState({
            subpage: { "about": false, "syllabus": false, "reviews": true, "buy": false }
        });
    }

    clickBuy() {
        // alert("Buy");
        this.setState({
            subpage: { "about": false, "syllabus": false, "reviews": false, "buy": true }
        });
    }

    // componentDidMount() {
    //     axios.post('http://localhost:8080/course/courses')
    // }
    render() {
        console.log('render')
        return (
            <div className="Course_about">
                <div className="top_bars" >
                    <TitleBar title="Course" />
                </div>
                <div className='profile'>
                    <Course_profile img={course_pic} course_name='Intro to Photography' no_of_lessons='21 Lessons' stars='4.2' clickBuy={this.clickBuy} />
                </div>
                {
                    (this.state.subpage["buy"]) ? (
                        <div className='reciept'>
                            <Bill name='Intro to Photography' mrp='Rs 999/-' discount='Rs 300' price='Rs 600' />
                        </div>
                    ) : (
                            <div>
                                <TabBar rounded tabs={{ "About": this.state.subpage["about"], "Syllabus": this.state.subpage["syllabus"], "Reviews": this.state.subpage["reviews"] }} click={[this.clickAbout, this.clickSyllabus, this.clickReviews]} />
                                {(this.state.subpage["about"]) ? (
                                    <div className='about_container'>
                                        <Details overview='Want to know what it takes to be professional Photographer, then this course is the first step to that goal.This course will be covering all the technical aspects of photography and also all the technical terms and definitions related to photography. There are assignments related to the technical aspects covered here. ' />
                                    </div>
                                ) : ""
                                }
                                {(this.state.subpage["syllabus"]) ? (
                                    <div className='syllabus'>
                                        <Lesson type="lesson" lessonNumber="L1" lessonName="Introduction to Machine Learning" time="21m" click={this.click} />
                                        <Lesson lessonNumber="A1" lessonName="Assignment" status="Open" click={this.click} />
                                        <Lesson type="lesson" lessonNumber="L2" lessonName="Linear Regression with One Variable" time="15m" click={this.click} />
                                        <Lesson lessonNumber="A2" lessonName="Assignment" status="Lock" click={this.click} />
                                    </div>
                                ) : ""
                                }
                                {(this.state.subpage["reviews"]) ? (
                                    <div className='reviews_container'>
                                        <Review user_pic={user_prof_icon} username='Jeff John' star='3.6' date='12 Jan 2020' content='Got to learn new concepts on how to focus on the subject, what the aperture and shutter speed was and how to optimise them for taking the best picture.' />
                                        <Review user_pic={user_prof_icon} username='Joseph John' star='4.8' date='13 Jan 2020' content='Got to learn new concepts on how to focus on the subject, what the aperture and shutter speed was and how to optimise them for taking the best picture.' />
                                    </div>
                                ) : ""
                                }
                            </div>
                        )
                }

                <BottomNavBar history={this.props.history} />
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
                <div className="rating_and_buy">
                    <div className="stars">
                        {this.props.stars}
                        <img src={star} />
                    </div>
                    <div className="buy" onClick={this.props.clickBuy}>
                        Buy
                    </div>
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

class Bill extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    };
    render() {
        return (
            <div className='bill'>
                <div className="buy"><p>Buy Now</p></div>
                <div className='price'>
                    <h2>Price</h2>
                    <p>MRP = {this.props.mrp}</p>
                    <p>Discount= {this.props.discount}</p>
                    <hr />
                    <p>Total Price = {this.props.price}</p>
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
                {/* <div className="icon"> */}
                <img src={this.props.user_pic} />
                {/* </div> */}
                {/* <div className="right"> */}
                <div className='leftup'>
                    <h4>{this.props.username}</h4>
                    <p>{this.props.date}</p>
                </div>
                <div className='rightup'>
                    <h5>{this.props.star}</h5>
                    <img src={primarystar} />
                </div>
                <div className='content'>
                    <p>{this.props.content}</p>
                </div>
                {/* </div> */}
            </div>
        )
    }

}
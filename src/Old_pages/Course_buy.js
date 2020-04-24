import React, { Component } from 'react'
import '../css/Courses_buy.css'
// import { Course_profile } from './Course_about'
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
            <div className="Course_buy">
                <div className="top_bars" >
                    <TitleBar title="Buy Course" />
                </div>
                <div className='profile'>
                    <Course_profile img={course_pic} course_name='Intro to Photography' no_of_lessons='21 Lessons' stars='4 Stars' />
                </div>
                <TabBar rounded tabs={{ "About": false, "Syllabus": false, "Reviews": false, "Buy": true }} click={[this.clickAbout, this.clickSyllabus, this.clickReviews, this.clickBuy]} />
                <div className='reciept'>
                    <Bill name='Intro to Photography' mrp='Rs 999/-' discount='Rs 300' price='Rs 600' />
                </div>
                <BottomNavBar />
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
                <h2>Bill</h2>
                <div className='course-name'>
                    {this.props.name}
                </div>
                <div className='price'>
                    <h2>Price</h2>
                    <p>MRP = {this.props.mrp}</p>
                    <p>Discount= {this.props.discount}</p>
                    <p>Total Price = {this.props.price}</p>
                </div>
            </div>
        )
    }

}



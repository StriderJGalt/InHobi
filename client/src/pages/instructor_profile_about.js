import React, { Component } from 'react'
import '../css/instructor_profile_about.css'
import { TitleBar, TabBar, BottomNavBar } from '../Bars'
import Naveen from '../images/Naveen_Seth.jpeg'
// import axios from "axios";

export class Instructor_about extends Component {
    constructor(props) {
        super(props)

        this.clickAbout = this.clickAbout.bind(this)
        this.clickCourses = this.clickCourses.bind(this)
        this.clickFeed = this.clickFeed.bind(this)
    }

    clickAbout() {
        this.props.history.push({
            pathname: '/InstructorAbout',
        });
    }

    clickFeed() {
        alert("Feed")
    }

    clickCourses() {
        this.props.history.push({
            pathname: '/InstructorCourses',
        });
    }


    render() {
        console.log('render')
        return (
            <div className="Instructor-about">
                <div className="top_bars" >
                    <TitleBar title="Instructor" />
                </div>
                <div className='profile'>
                    <Ins_profile img={Naveen} ins_name='Naveen Seth' description='Story Teller || Visual Alchemist' award='Red Dot Award Winner' />
                </div>
                <TabBar rounded tabs={{ "About": true, "Courses": false, "Feed": false }} click={[this.clickAbout, this.clickCourses, this.clickFeed]} />
                <div className='about_container'>
                    <About intro='Naveen Seth is of age 27. He has completed a degree in Story telling and animation.' accreditations='Winner of National Story Telling award' />
                </div>
                <BottomNavBar history={this.props.history} />
            </div>
        )
    }
}
export class Ins_profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    };
    render() {
        return (
            <div className='Ins-profile'>
                <div className='instructor-icon' >
                    <img src={this.props.img} />
                </div>
                <div className='instructor-name'>
                    {this.props.ins_name}
                </div>
                <div className='description'>
                    {this.props.description}
                </div>
                <div className="award">
                    {this.props.award}
                </div>
            </div>
        )
    }
}

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    };
    render() {
        return (
            <div className='about'>
                <div className='intro'>
                    <h2>Introduction</h2>
                    <div className='content'>
                        {this.props.intro}
                    </div>
                </div>
                <div className='awards'>
                    <h2>Accreditations</h2>
                    <div className='accreditations'>
                        {this.props.accreditations}
                    </div>
                </div>
            </div>
        )
    }
}


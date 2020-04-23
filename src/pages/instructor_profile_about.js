import React, { Component } from 'react'
import '../css/instructor_profile_about.css'
import { TitleBar, TabBar, BottomNavBar } from '../Bars'
import axios from "axios";

export class Instructor_about extends Component {
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
            <div className="about">
                <div className="top_bars" >
                    <TitleBar title="Instructor Profile" />
                </div>
                <div className='profile'>
                    <Ins_profile img={instructor_icon} ins_name='Naveen Seth' description='Story Teller || Visual Alchemist' award='' />
                </div>
                <TabBar rounded tabs={{ "About": true, "Courses": false, "Feed": false }} click={[this.clickAbout, this.clickCourses, this.clickFeed]} />
                <div className='about_container'>
                    <About intro='Naveen Seth is of age 27. He has completed a degree in Story telling and animation.' accreditations='Winner of National Story Telling award' />
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
                    {this.props.intro}
                </div>
                <div className='awards'>
                    <h2>Accreditations</h2>
                    {this.state.accreditations}
                </div>
            </div>
        )
    }
}


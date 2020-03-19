import React,{ Component } from 'react'
import './CoursePage.css'
import course_icon from './camera_web.jpg'
import group_icon from './group-24px.svg'

export default class CoursePage extends Component {
    render() {
        return (
            <div className="page_container">
                <nav className="container navbar">
                    <a className='nav-item' href="#">Feed</a>
                    <a className='nav-item selected' href="#">Courses</a>
                    <a className='nav-item' href="#">Groups</a>
                </nav>
                <div className='container courses'>
                    <Course img={course_icon} course_name='Introduction to Photography' instructor='John Galt' progress={56} notifications={3} />
                    <Course img={course_icon} course_name='Advanced Photography' instructor='Ansel Adams' progress={10} notifications={3} />
                    <Course img={course_icon} course_name='Advanced Photography' instructor='Ansel Adams' progress={10} notifications={3} />
                    <Course img={course_icon} course_name='Advanced Photography' instructor='Ansel Adams' progress={10} notifications={3} />
                </div>
            </div>
        )
    }
}

class Course extends Component {
    render() {
        return (
            <div className='course' >
                    <div className='course-icon' >
                        <img src={this.props.img} />
                    </div>
                    <div className='course-details'>
                        <p className='course-name'>{this.props.course_name}</p>
                        <p className='course-instructor'>{this.props.instructor}</p>
                    </div>
                    <div className='course-progress'>
                        <div className='course-progress-bar'>
                            <span className='course-progress-bar-done' style={{'width': '56%'}}></span>
                        </div>
                        <p>{this.props.progress}% completed</p>
                    </div>
                    <div className='course-group-button'>
                        <img src={group_icon} />
                    </div>
            </div>
        )
    }
}


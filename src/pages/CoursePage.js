import React, { Component } from 'react'
import '../css/CoursePage.css'
import course_icon from '../css/camera_web.jpg'
import group_icon from '../css/group-24px.svg'
import { TitleBar, TabBar, BottomNavBar } from '../Bars'
import axios from "axios";
import Auth from '../auth/auth'
import { Redirect } from 'react-router'

export class CoursePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            courses:[],
            images:'',
            x:[1,2,3,4]
        }
        this.clickFeed = this.clickFeed.bind(this)
        this.clickCourses = this.clickCourses.bind(this)
        this.clickGroups = this.clickGroups.bind(this)
    }

    clickFeed() {
        alert("Feed")
    }

    clickCourses() {
        this.props.history.push({
            pathname: '/courses',
        });
    }
    clickGroups() {
        alert("Groups")
    }

    componentDidMount(){
        axios.post('/course/enrolled_courses',
        {userid:Auth.getUserID(), wstoken:Auth.getToken()})
        .then(response => {
            this.setState({courses: response.data});
            
            const arr = response.data;
            
                axios.post('/utils/course_image',
                {
                    image_url:response.data[0].overviewfiles[0].fileurl,
                    wstoken:Auth.getToken(),
                    mimetype:response.data[0].overviewfiles[0].mimetype
                }).then(
                    response2 => {
                        this.setState({images: response2.data});
                    }
                )
        })
        .catch(function(error) {
            console.log(error);
        })
    }
    render() {
        
        return (
            <div className="CoursePage">
                {/* <nav className="container navbar">
                    <a className='nav-item' href="#">Feed</a>
                    <a className='nav-item selected' href="#">Courses</a>
                    <a className='nav-item' href="#">Groups</a>
                </nav> */}
                <div className="top_bars" >
                    <TitleBar title="User Dashboard" />
                    <TabBar tabs={{ "Feed": false, "Courses": true, "Groups": false }} click={[this.clickFeed, this.clickCourses, this.clickGroups]} />
                </div>
                <div className='container courses'>
                    {
                        this.state.courses.map((course, index) => {
                            return (
                                <Course img={this.state.images} history={this.props.history} id={course.id} img={this.state.images} course_name={course.displayname} progress={course.progress}/>
                            )
                        })
                    }
                    {/* <Course img={course_icon} course_name='Introduction to Photography' instructor='John Galt' progress={56} notifications={23} /> */}
                    {/* <Course img={course_icon} course_name='Machine Learning' instructor='' progress={70} notifications={0} /> */}
                    
                </div>
                <BottomNavBar />
            </div>
        )
    }
}

class Course extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: '',
            notifications: '',
            id:''
        }
        this.onclick = this.onclick.bind(this);
    }

    componentDidMount(){
        if (this.props.progress==null){
            this.setState({
                progress:0,
            })
        }
        else{
            this.setState({
                progress:this.props.progress,
            })
        }
        this.setState({
            id:this.props.id,
            history:this.props.history
        })
    }

    onclick(){
        console.log(this.state.id)
        this.state.history.push({
            pathname:'/lessonViewer',
            id:this.state.id
        })
    }
    render() {
        return (
            <div className='course' onClick={this.onclick} >
                <div className='course-icon' >
                    <img src={this.props.img} />
                </div>
                <div className='course-details'>
                    <p className='course-name'>{this.props.course_name}</p>
                    <p className='course-instructor'>{this.props.instructor}</p>
                </div>
                <div className='course-progress'>
                    <div className='course-progress-bar'>
                        <span className='course-progress-bar-done' style={{ 'width': this.state.progress + '%' }}></span>
                    </div>
                    <p>{this.state.progress}% completed</p>
                </div>
                <div className='course-group-button'>
                    {/* <img src={group_icon} /> */}
                    <a href="#" class="notif"><span class="num">{this.state.notifications}</span></a>
                </div>
            </div>
        )
    }
}


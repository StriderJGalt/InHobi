import React, { Component } from 'react'
// import '../css/CoursePage.css'
// import course_icon from '../css/camera_web.jpg'
import group_pic from '../images/guitar.jpg'
import Photography from '../images/Photography.jpg'
import Film from '../images/Film_Making.jpg'
import Food from '../images/Foodies_Hyd.jpg'
import Travel from '../images/Bloggers_Travel.jpg'
import Yoga from '../images/Yoga.jpg'
import { TitleBar, TabBar, BottomNavBar } from '../Bars'
import axios from "axios";
import Auth from '../auth/auth'
import { Group } from './HomePage';

export default class DashboardGroups extends Component {
    constructor(props) {
        super(props)
        this.state = {
            courses: [],
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
        this.props.history.push({
            pathname: '/DashboardGroups',
        });
    }

    componentDidMount() {
        axios.post('/course/enrolled_courses',
            { userid: Auth.getUserID(), wstoken: Auth.getToken() })
            .then(response => {
                this.setState({ courses: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    render() {

        return (
            <div className="DashboardGroups">
                {/* <nav className="container navbar">
                    <a className='nav-item' href="#">Feed</a>
                    <a className='nav-item selected' href="#">Courses</a>
                    <a className='nav-item' href="#">Groups</a>
                </nav> */}
                <div className="top_bars" >
                    <TitleBar title="Dashboard" />
                    <TabBar tabs={{ "Feed": false, "Courses": false, "Groups": true }} click={[this.clickFeed, this.clickCourses, this.clickGroups]} />
                </div>
                <div className='container groups' style={{ marginTop: '100px' }} >
                    <Group name="Photography" icon={Photography} />
                    <Group name="Music_Hyd" icon={group_pic} />
                    <Group name="Film_Making" icon={Film} />
                    <Group name="Bloggers_Travel" icon={Travel} />
                    <Group name="Yoga Class" icon={Yoga} />
                    <Group name="Foodies_Hyd" icon={Food} />
                    {/* <Course img={course_icon} course_name='Introduction to Photography' instructor='John Galt' progress={56} notifications={23} /> */}
                    {/* <Course img={course_icon} course_name='Machine Learning' instructor='' progress={70} notifications={0} /> */}

                </div>
                <BottomNavBar history={this.props.history} />
            </div>
        )
    }
}
export class Groups extends Component {
    render() {
        return (
            <div className="group">
                <img src={this.props.icon} />
                <h5>{this.props.name}</h5>
                <button>Open</button>
            </div>
        )
    }
}
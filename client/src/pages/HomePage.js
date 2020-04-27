import React, { Component } from 'react'
import "../css/HomePage.css"
import { TitleBar, TabBar, BottomNavBar } from '../Bars'
import instructor_pic from '../images/ins_pic.jpg'
import instructor_pic2 from '../images/ppic.jpg'
import Rahul from '../images/Rahul_Kumar.png'
import Neha from '../images/Neha_Sharma.jpeg'
import Naveen from '../images/Naveen_Seth.jpeg'
import Sukanya from '../images/Sukanya_Shetty.jpeg'
import Photography from '../images/Photography.jpg'
import Film from '../images/Film_Making.jpg'
import Food from '../images/Foodies_Hyd.jpg'
import Travel from '../images/Bloggers_Travel.jpg'
import Yoga from '../images/Yoga.jpg'
import group_pic from '../images/guitar.jpg'
import ad from '../images/ad_placeholder.png'
import ad2 from '../images/pottery.jpg'

export default class HomePage extends Component {

    render() {
        return (
            <div className="HomePage">
                <div className="top_bars" >
                    <TitleBar no_back signin title="InHobi" />
                </div>
                <div className="ad_carousel">
                    <img src={ad} />
                    <img src={group_pic} />
                    <img src={ad2} />
                </div>
                <div className="instructors">
                    <TabBar rounded tabs={{ "Instructors": false }} click={["null"]} />
                    <div className="cards">
                        <InstructorCard img={Rahul} name="Rahul Kumar" description="Motion Designer | Illustrator" courses={["Animation", "Video Game Design", "Internet Safety"]} />
                        <InstructorCard img={Neha} name="Neha Sharma" description="Author || Mentor" courses={["Creative Writing", "Essay Writing", "Poetry"]} />
                        <InstructorCard img={Naveen} name="Naveen Seth" description="Story teller || Visual Alchemist" courses={["Film Making", "Video Editing", "Photography Phone"]} />
                        <InstructorCard img={Sukanya} name="Sukanya Shetty" description="Institute of languages and skills" courses={["Sanskrit", "German", "French"]} />
                        <InstructorCard img={instructor_pic} name="Fathima Nizam" description="Designer, Photographer" courses={["Intro to Photography", "Flash Photography outside studios", "Portrait photography"]} />
                        <InstructorCard img={instructor_pic2} name="John Galt" description="Designer | Photographer" courses={["Intro to Photography", "Flash Photography", "Portrait photography"]} />
                        <InstructorCard img={instructor_pic2} name="John Galt" description="Designer | Photographer" courses={["Intro to Photography", "Flash Photography", "Portrait photography"]} />
                        <InstructorCard img={instructor_pic2} name="John Galt" description="Designer | Photographer" courses={["Intro to Photography", "Flash Photography", "Portrait photography"]} />
                        <InstructorCard img={instructor_pic2} name="John Galt" description="Designer | Photographer" courses={["Intro to Photography", "Flash Photography", "Portrait photography"]} />
                        <InstructorCard img={instructor_pic2} name="John Galt" description="Designer | Photographer" courses={["Intro to Photography", "Flash Photography", "Portrait photography"]} />
                    </div>
                </div>
                <div className="groups">
                    <TabBar rounded tabs={{ "Open Groups": false }} click={["null"]} />
                    <Group name="Photography" icon={Photography} />
                    <Group name="Music_Hyd" icon={group_pic} />
                    <Group name="Film_Making" icon={Film} />
                    <Group name="Bloggers_Travel" icon={Travel} />
                    <Group name="Yoga Class" icon={Yoga} />
                    <Group name="Foodies_Hyd" icon={Food} />
                </div>
                <BottomNavBar history={this.props.history} />
            </div>
        )
    }
}

export class InstructorCard extends Component {

    constructor(props) {
        super(props);
        this.clickInstructor = this.clickInstructor.bind(this);
    }

    clickInstructor() {
        // alert("clicked");
        window.location = "/InstructorAbout";
    }

    render() {
        var course_names = [];
        for (const c in this.props.courses) {
            course_names.push(<li>{this.props.courses[c]}</li>);
        };
        return (
            <div onClick={this.clickInstructor} className="InstructorCard">
                <img src={this.props.img} />
                <p className="name">{this.props.name}</p>
                <p className="desc">{this.props.description}</p>
                <div className="courses">
                    Top Courses
                    <ul>
                        {course_names}
                    </ul>
                </div>
            </div>
        )
    }
}

export class Group extends Component {
    render() {
        return (
            <div className="group">
                <img src={this.props.icon} />
                <h5>{this.props.name}</h5>
                <button>Join</button>
            </div>
        )
    }
}
import React, { Component } from 'react'
import "../css/InstructorsPage.css"
import { TitleBar, TabBar, BottomNavBar } from '../Bars'
import { InstructorCard } from './HomePage'
import instructor_pic from '../images/ins_pic.jpg'
import instructor_pic2 from '../images/ppic.jpg'
import Rahul from '../images/Rahul_Kumar.png'
import Neha from '../images/Neha_Sharma.jpeg'
import Naveen from '../images/Naveen_Seth.jpeg'
import Sukanya from '../images/Sukanya_Shetty.jpeg'

export default class InstructorsPage extends Component {
    render() {
        return (
            <div className="Instructors">
                <div className="top_bars" >
                    <TitleBar title="Instructors" />
                </div>
                <div className="instructors">
                    <InstructorCard img={Rahul} name="Rahul Kumar" description="Motion Designer | Illustrator" courses={["Animation", "Video Game Design", "Internet Safety"]} />
                    <InstructorCard img={Neha} name="Neha Sharma" description="Author || Mentor" courses={["Creative Writing", "Essay Writing", "Poetry"]} />
                    <InstructorCard img={Naveen} name="Naveen Seth" description="Story teller || Visual Alchemist" courses={["Film Making", "Video Editing", "Photography Phone"]} />
                    <InstructorCard img={Sukanya} name="Sukanya Shetty" description="Institute of languages and skills" courses={["Sanskrit", "German", "French"]} />
                    <InstructorCard img={instructor_pic} name="Fathima Nizam" description="Designer | Photographer" courses={["Intro to Photography", "Flash Photography", "Portrait photography"]} />
                    <InstructorCard img={instructor_pic2} name="John Galt" description="Designer | Photographer" courses={["Intro to Photography", "Flash Photography", "Portrait photography"]} />
                    <InstructorCard img={instructor_pic2} name="John Galt" description="Designer | Photographer" courses={["Intro to Photography", "Flash Photography", "Portrait photography"]} />
                    <InstructorCard img={instructor_pic2} name="John Galt" description="Designer | Photographer" courses={["Intro to Photography", "Flash Photography", "Portrait photography"]} />

                </div>
                <BottomNavBar history={this.props.history} />
            </div>
        )
    }
}


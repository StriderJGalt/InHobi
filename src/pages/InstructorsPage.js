import React, { Component } from 'react' 
import "../css/InstructorsPage.css"
import { TitleBar, TabBar, BottomNavBar } from '../Bars'
import {InstructorCard} from './HomePage'
import instructor_pic from '../images/ins_pic.jpg' 
import instructor_pic2 from '../images/ppic.jpg' 

export default class InstructorsPage extends Component {
    render() {
        return (
            <div className="InstructorsPage">
                <div className="top_bars" >
                    <TitleBar title="Instructors" />
                </div>
                <div className="instructors">
                    <InstructorCard img={instructor_pic} name="John Galt" description="Designer, Photographer, Illustrator" courses={["Intro to Photography","Flash Photography outside studios","Portrait photography"]} /> 
                    <InstructorCard img={instructor_pic2} name="John Galt" description="Designer | Photographer" courses={["Intro to Photography","Flash Photography","Portrait photography"]} /> 
                    <InstructorCard img={instructor_pic2} name="John Galt" description="Designer | Photographer" courses={["Intro to Photography","Flash Photography","Portrait photography"]} /> 
                    <InstructorCard img={instructor_pic2} name="John Galt" description="Designer | Photographer" courses={["Intro to Photography","Flash Photography","Portrait photography"]} /> 
                    <InstructorCard img={instructor_pic2} name="John Galt" description="Designer | Photographer" courses={["Intro to Photography","Flash Photography","Portrait photography"]} /> 
                    <InstructorCard img={instructor_pic2} name="John Galt" description="Designer | Photographer" courses={["Intro to Photography","Flash Photography","Portrait photography"]} /> 
                    <InstructorCard img={instructor_pic2} name="John Galt" description="Designer | Photographer" courses={["Intro to Photography","Flash Photography","Portrait photography"]} /> 
                    <InstructorCard img={instructor_pic2} name="John Galt" description="Designer | Photographer" courses={["Intro to Photography","Flash Photography","Portrait photography"]} /> 
                    <InstructorCard img={instructor_pic2} name="John Galt" description="Designer | Photographer" courses={["Intro to Photography","Flash Photography","Portrait photography"]} /> 
                    <InstructorCard img={instructor_pic2} name="John Galt" description="Designer | Photographer" courses={["Intro to Photography","Flash Photography","Portrait photography"]} /> 
                </div>
                <BottomNavBar />
            </div>
        )
    }
}


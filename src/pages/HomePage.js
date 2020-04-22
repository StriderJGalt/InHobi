import React, { Component } from 'react' 
import "../css/HomePage.css"
import { TitleBar, TabBar, BottomNavBar } from '../Bars'
import instructor_pic from '../images/ins_pic.jpg' 
import instructor_pic2 from '../images/ppic.jpg' 
import group_pic from '../images/guitar.jpg' 

export default class HomePage extends Component {
    render() {
        return (
            <div className="HomePage">
                <div className="top_bars" >
                    <TitleBar no_back signin title="InHobi" />
                </div>
                <div className="ad_carousel">
                </div>
                <div className="instructors">
                    <TabBar rounded tabs={{"Instructors":false}} click={["null"]} />
                    <div className="cards">
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
                </div>
                <div className="groups">
                    <TabBar rounded tabs={{"Open Groups":false}} click={["null"]} />
                    <Group name="Photography Hyd" icon={group_pic} />
                    <Group name="Photography Hyd" icon={group_pic} />
                    <Group name="Photography Hyd" icon={group_pic} />
                </div>
                <BottomNavBar />
            </div>
        )
    }
}

export class InstructorCard extends Component {
    render() {
        var course_names = [];
        for (const c in this.props.courses){
            course_names.push(<li>{this.props.courses[c]}</li>);
        };
        return (
            <div className="InstructorCard">
                <img src={this.props.img}/>
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
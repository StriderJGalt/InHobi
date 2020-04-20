import React, { Component } from 'react' 
import "../css/HomePage.css"
import { TitleBar, TabBar, BottomNavBar } from '../Bars'

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
                        <InstructorCard img="" name="John Galt" description="Designer | Photographer" courses={["intro to photography","flash Photography","portrait photography"]} /> 
                        <InstructorCard img="" name="John Galt" description="Designer | Photographer" courses={["intro to photography","flash Photography","portrait photography"]} /> 
                    </div>
                </div>
                <div className="groups">
                    <TabBar rounded tabs={{"Open Groups":false}} click={["null"]} />
                    <Group name="Photography Hyd" icon="" />
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
                <img src={this.props.img} className="instructor_pic"/>
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
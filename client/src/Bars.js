import React, { Component } from 'react'
import './css/Bars.css'

export class TitleBar extends Component {
    render() {
        return (
            <div className="title_bar">
                {this.props.no_back ? "" : (<svg className="back_btn" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path fill="white" d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z" />
                </svg>)}
                <h1 className="title">{this.props.title}</h1>
                {this.props.signin ? (<h1 className="signin"><span>Login</span> / <span>Signup</span></h1>) : ""}
            </div>
        )
    }
}

export class TabBar extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        var tabs = [];
        var i = 0;
        for (const key in this.props.tabs) {

            if (this.props.tabs[key]) {
                tabs.push(<div className="selected" onClick={this.props.click[i]}>{key}</div>)
            }
            else {
                tabs.push(<div onClick={this.props.click[i]}>{key}</div>)
            }

            i++;
        };

        return (
            <div className={`tab_bar ${this.props.rounded ? "rounded" : ""}`}>
                {tabs}
            </div>
        )
    }
}


export class BottomNavBar extends Component {

    constructor(props) {
        super(props);
        this.clickDashBtn = this.clickDashBtn.bind(this);
        this.state = {
            dash_wheel: "out"
        };
        this.clickHome = this.clickHome.bind(this)
        this.clickMenu = this.clickMenu.bind(this)

    }

    clickHome() {
        // this.props.history.push({
        //     pathname: '/HomePage',
        // });
        window.location = "/HomePage";
    }

    clickMenu() {
        // this.props.history.push({
        //     pathname: '/MenuPage',
        // });
        window.location = "/MenuPage";
    }

    clickDashBtn() {
        this.setState({ dash_wheel: this.state.dash_wheel == "in" ? "out" : "in" })
    }

    render() {
        return (
            <div>
                <div class="bottom_nav_bar">
                    <div class="nav_item home" onClick={this.clickHome}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path fill="white"
                                d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z" />
                        </svg>
                        <h6>Home</h6>
                    </div>
                    <div class="nav_item">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path fill="white"
                                d="M10.5 17.15l3.98-2.28c.67-.38.67-1.35 0-1.74l-3.98-2.28c-.67-.38-1.5.11-1.5.87v4.55c0 .77.83 1.26 1.5.88zM21 6h-7.59l2.94-2.94c.2-.2.2-.51 0-.71s-.51-.2-.71 0L12 5.99 8.36 2.35c-.2-.2-.51-.2-.71 0s-.2.51 0 .71L10.59 6H3c-1.1 0-2 .89-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2-2zm-1 14H4c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1z" />
                        </svg>
                        <h6>Tv</h6>
                    </div>
                    <div class="nav_item placeholder">
                        <div className="circle" />
                    </div>
                    <div class="nav_item">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path fill="white"
                                d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                        </svg>
                        <h6>Search</h6>
                    </div>
                    <div class="nav_item" onClick={this.clickMenu} >
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path fill="white"
                                d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z" />
                        </svg>
                        <h6>Menu</h6>
                    </div>
                </div>
                <div class="dashboard_btn" onClick={this.clickDashBtn}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                        <path fill="white"
                            d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
                    </svg>
                </div>
                {/* { this.state.dash_wheel ?  */}
                <div className={"dial " + this.state.dash_wheel}>
                    <div className="circle" />
                    <div className="dial_icon courses" onClick={this.props.homeClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" fill="white" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 11.55c-1.82-1.7-4.12-2.89-6.68-3.35C4.11 7.99 3 8.95 3 10.18v6.24c0 1.68.72 2.56 1.71 2.69 2.5.32 4.77 1.35 6.63 2.87.35.29.92.32 1.27.04 1.87-1.53 4.16-2.58 6.68-2.9.94-.13 1.71-1.06 1.71-2.02v-6.92c0-1.23-1.11-2.19-2.32-1.98-2.56.46-4.86 1.65-6.68 3.35zM12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z" /></svg>
                        <p>Courses</p>
                    </div>
                    <div className="dial_icon feed">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" fill="#ffffff" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-3.13c-.47 0-.85.34-.98.8-.35 1.27-1.52 2.2-2.89 2.2s-2.54-.93-2.89-2.2c-.13-.46-.51-.8-.98-.8H5V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v9z" /></svg>
                        <p>Feed</p>
                    </div>
                    <div className="dial_icon groups">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="white" /></svg>
                        <p>Groups</p>
                    </div>
                </div>
                {/* : ""} */}
            </div>
        )
    }
}
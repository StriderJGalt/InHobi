import React,{ Component } from 'react'
import '../css/taskpage.css'

export class TaskPage extends Component {
    render() {
        return (
            <div className="page_container">
                <div className="top_bars">
                    <div class="title_bar">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path fill="white"
                                d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z" />
                        </svg>
                        <h1>Practice</h1>
                    </div>
                    <nav class="tab_bar">
                        <a class="nav-item selected" href="#">Task</a>
                        <a class="nav-item" href="#">Submission</a>
                    </nav>
                </div>    
                <div class="bottom_nav_bar">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path fill="white"
                                d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z" />
                        </svg>
                        <h6>Home</h6>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path fill="white"
                                d="M10.5 17.15l3.98-2.28c.67-.38.67-1.35 0-1.74l-3.98-2.28c-.67-.38-1.5.11-1.5.87v4.55c0 .77.83 1.26 1.5.88zM21 6h-7.59l2.94-2.94c.2-.2.2-.51 0-.71s-.51-.2-.71 0L12 5.99 8.36 2.35c-.2-.2-.51-.2-.71 0s-.2.51 0 .71L10.59 6H3c-1.1 0-2 .89-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2-2zm-1 14H4c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1z" />
                        </svg>
                        <h6 >Tv</h6>
                    </div>
                    <div class="center_placeholder"></div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                            <path fill="white"
                                d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                            <path d="M0 0h24v24H0z" fill="none" />
                        </svg>
                        <h6>Search</h6>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path fill="white"
                                d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z" />
                        </svg>
                        <h6>Menu</h6>
                    </div>
                </div>
                <div class="dashboard">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                        <path fill="white"
                            d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
                    </svg>
                </div>
                <div className='container courses'>
                    <Task course_name='Introduction to Photography' task_name='Sunset Shoot' task_content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                    Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
                    Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable
                    source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes
                    of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular
                    during the Renaissance. The first line of Lorem Ipsum, '0Lorem ipsum dolor sit amet..', comes from a line in
                    section 1.10.32.

                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections
                    1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact
                    original form, accompanied by English versions from the 1914 translation by H. Rackham.There are many
                    variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by
                    injected humour, or randomised words which don't look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                    All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this
                    the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a
                    handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem
                    Ipsum is therefore always free from corruption"/>
                </div>
            </div>
        )
    }
}

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className='container' >
                    <h3 className='course-name' >
                        {this.props.course_name}
                    </h3>
                    <h2 className='task-name'>
                        {this.props.task_name}
                    </h2>
                    <h5 className='task-content'>
                        {this.props.task_content}
                    </h5>
            </div>
        )
    }
}

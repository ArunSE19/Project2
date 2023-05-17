import React from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'
const Dashboard2 = () => {
    return (
        <>
            <div className='navbar bg-dark fixed-top flex-md-nowrap p-2 shadow'>
                <a className='navbar-brand col-sm-3 col-md-2 mr-0' href='/' id='dash'>EarnFromLearn</a>
                <ul className='navbar-nav ms-auto px-3'>
                    <li className='nav-item text-nowrap'>
                        <Link className='nav-link' id='dashlink' to='/'>Logout</Link>
                    </li>
                </ul>
            </div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-2 bg-dark d-none d-md-block sidebar'>
                        <div className='left-sidebar'>
                            <ul className='nav flex-column sidebar-nav'>
                                <li className='nav-item side'>
                                    <Link className="nav-link" id='dashlink' to="/Body">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                        </svg>
                                    Build Resume</Link>
                                </li>
                                <li className='nav-item side'>
                                    <Link className="nav-link" id='dashlink' to="/ViewCourseStu">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                        </svg>
                                    Courses</Link>
                                </li>
                                <li className='nav-item side'>
                                    <Link className="nav-link" id='dashlink' to="/StuLec">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                        </svg>
                                    Lectures</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard2
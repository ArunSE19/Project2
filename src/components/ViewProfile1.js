import React from 'react'
// import Dashboard from './Dashboard'
import Dashboard1 from './Dashboard1'

const ViewProfile1 = () => {
    return (
        <>
            <div>
                <Dashboard1/>
                <div>
                    <main role="main" className="col-md-9 ms-sm-auto col-lg-10 px-4">
                        {/* <h1>hello world</h1> */}
                        <h3>Candidates</h3>
                        <hr />

                        <div className="container p-5">
                            <div className="row">
                                <div className="col-lg-4 bg-dark text-white text-center py-4">
                                    <div className="header-left">
                                        <img src="recruiter.jpg" alt="" className='img-thumbnail rounded-circle mb-2' />
                                        <h1 className="display-5">FirstName</h1>
                                        <h4 className='lead text-uppercase text-white-50 mb-4'>Role</h4>
                                    </div>

                                    <h5 className='text-uppercase bg-white text-dark py-2 rounded-pill'>Contact</h5>
                                    <ul className="list-unstyled text-white-50 ml-5 py-2 text-left">
                                        <li className='list-item'>
                                            <i className='fas fa-mobile-alt mx-4'></i>
                                            Number
                                        </li>
                                        <li className='list-item'>
                                            <i className='fas fa-blog mx-4'></i>
                                            Email
                                        </li>
                                        <li className='list-item'>
                                            <i className='fas fa-map-marker mx-4'></i>
                                            Address
                                        </li>
                                    </ul>

                                    <div>
                                        <h5 className='text-uppercase bg-white text-dark py-2 rounded-pill'>Expertise</h5>
                                        <ul className='list text-white-50 ml-5 py-2 text-left text-capitalize'></ul>
                                        <li className='list-item'>Skill1</li>
                                        <li className='list-item'>Skill2</li>
                                        <li className='list-item'>Skill3</li>
                                    </div>

                                    <div>
                                        <h5 className='text-uppercase bg-white text-dark py-2 rounded-pill'>Professional Platforms</h5>
                                        <ul className='list text-white-50 ml-5 py-2 text-left text-capitalize'>
                                            <li className='list-item'>Linkedin</li>
                                            <li className='list-item'>Github</li>
                                            <li className='list-item'>Twitter</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 className='text-uppercase bg-white text-dark py-2 rounded-pill'>Payment Info</h5>
                                        <ul className='list text-white-50 ml-5 py-2 text-left text-capitalize'>
                                            <li className='list-item'>Paypal Client ID</li>
                                    2        <li className='list-item'>Paypal Secret ID</li>
                                            <li className='list-item'>Stripe Client ID</li>
                                            <li className='list-item'>Stripe Secret ID</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-8 bg-light text-dark py-4 px-5">
                                    <div className="header-right">
                                        <h4 className='text-uppercase'>Profile</h4>
                                        <hr />
                                        <p>Biblography</p>
                                    </div>

                                    <div>
                                        <h4 className='text-uppercase'>Education</h4>
                                        <hr />
                                        <ul className='list'>
                                            <li className='list-item'>
                                                <h5 className='display-6 text-uppercase'>Uni 1</h5>
                                                <h6 className='text-uppercase text-block-50'>Duration</h6>
                                            </li>
                                            <li className='list-item'>
                                                <h5 className='display-6 text-uppercase'>Uni 2</h5>
                                                <h6 className='text-uppercase text-block-50'>Duration</h6>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default ViewProfile1

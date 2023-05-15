import React from 'react'
import Dashboard2 from './Dashboard2'
import './Dashboard.css'
// import data from './back/data/data';
import Header from './Header';
// import { useState } from 'react';
// import "./Header.css";
// import { Link } from 'react-router-dom';
window.data = null;
const ViewCourseStu = ({courses,HandleAddProduct}) => {    
    return (
        <>
            <div>
                <Dashboard2 />
                <div>
                    <main role="main" className="col-md-9 ms-sm-auto col-lg-10 px-4">
                        <h3>Candidates</h3>
                        <hr />
                        <div className='container mt-5'>
                            <h1 className="text-center font-weight-normal">Courses</h1>
                        </div>
                        <Header />
                        <div className="container mt-4 d-flex mb-5">
                            <div className="row">
                                {courses.map((course) => (
                                    <>
                                        <div className="col-md-4 mt-5">
                                            <div className="card">
                                                <img src={course.image} alt="" className="card-img-top w-70" />
                                                <div className="card-body">
                                                    <h2 className="card-title">{course.name}</h2>
                                                    <div className="d-flex justify-content-between">
                                                        <p className='card-text'>{course.description}</p>
                                                        <p className='card-text mr-4 text-success'>PKR.{course.price}</p>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <p className='card-text'>Taught By: {course.instructor}</p>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <p className='card-text'>Lectures: {course.lecture}</p>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <p className='card-text'>Assignment: {course.Assignment}</p>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <p className='card-text'>Duration: {course.Duration} hr</p>
                                                    </div>
                                                    <button className='btn btn-success mt-2 cart' onClick={()=>HandleAddProduct(course)}>Add To Cart</button>

                                                    {/* <button type="button" onClick={() => { setModalData(course); setModalIsOpen(true); }}>Explore</button> */}
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ))}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
};

export default ViewCourseStu;



{/* <div className="container mt-4 d-flex mb-5">
                            <div className="row">
                                <div className="col-md-4 mt-5">
                                    <div className="card">
                                        <img src="AI_.jpg" alt="" className="card-img-top w-70" />
                                        <div className="card-body">
                                            <h2 className="card-title">Artificial Intelligence</h2>
                                            <div className="d-flex justify-content-between">
                                                <p className='card-text'>Make Advanced Applications</p>
                                                <p className='card-text mr-4 text-success'>PKR.55000</p>
                                            </div>
                                            <button  type="button" data-bs-toggle="modal" data-bs-target="#modalID">Explore</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 mt-5">
                                    <div className="card">
                                        <img src="Web_.jpg" alt="" className="card-img-top w-70" />
                                        <div className="card-body">
                                            <h2 className="card-title">Web-Development</h2>
                                            <div className="d-flex justify-content-between">
                                                <p className='card-text'>Learn HTML CSS & JS</p>
                                                <p className='card-text mr-4 text-success'>PKR.25000</p>
                                            </div>
                                            <button  type="button" data-bs-toggle="modal" data-bs-target="#web">Explore</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 mt-5">
                                    <div className="card">
                                        <img src="DevOps.jpg" alt="" className="card-img-top w-70" />
                                        <div className="card-body">
                                            <h2 className="card-title">DevOps</h2>
                                            <div className="d-flex justify-content-between">
                                                <p className='card-text'>Learn applications deployment</p>
                                                <p className='card-text mr-4 text-success'>PKR.35000</p>
                                            </div>
                                            <button type="button" data-bs-toggle="modal" data-bs-target="#dev">Explore</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id='dev'>
                                <div className="modal-dialog bg-success">
                                    <div className="modal-content">
                                        <div className="modal-header pb-2">
                                            <h2 className='font-weight-light ml-4'>Description</h2>
                                            <button type='button' className='close' data-dismiss="modal" aria-label='close'>
                                                <span aria-hidden="false">Taught By: Ehtisham Sheikh</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="row mt-2 p-3">
                                                <div className="col-md-6">
                                                    <img src="DevOps.jpg" alt="" className="card-img-top w-70 rounded" />
                                                </div>
                                                <div className="col-md-6">
                                                    <h3 className='product_name'>DevOps</h3>
                                                    <p className='product_desc'>Total Lectures: 20</p>
                                                    <p className='product_desc'>Total Assignments: 10</p>
                                                    <p className='product_desc'>Total Duration: 50hrs</p>
                                                    <p>Review: &nbsp;&nbsp;&nbsp;
                                                        <i className='fa fa-star text-warning ml-2'>*</i>
                                                        <i className='fa fa-star text-warning ml-2'>*</i>
                                                        <i className='fa fa-star text-warning ml-2'>*</i>
                                                        <i className='fa fa-star text-warning ml-2'>*</i>
                                                        <i className='fa fa-star text-warning ml-2'>*</i>
                                                    </p>
                                                    <h4 className='product_price'>Coupon: Dev123</h4>
                                                    <button className='btn btn-success mt-2 cart'>Add To Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div className="modal fade" id='web'>
                                <div className="modal-dialog bg-success">
                                    <div className="modal-content">
                                        <div className="modal-header pb-2">
                                            <h2 className='font-weight-light ml-4'>Description</h2>
                                            <button type='button' className='close' data-dismiss="modal" aria-label='close'>
                                                <span aria-hidden="false">Taught By: Moiz Soomro</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="row mt-2 p-3">
                                                <div className="col-md-6">
                                                    <img src="web_.jpg" alt="" className="card-img-top w-70 rounded" />
                                                </div>
                                                <div className="col-md-6">
                                                    <h3 className='product_name'>Web Development</h3>
                                                    <p className='product_desc'>Total Lectures: 18</p>
                                                    <p className='product_desc'>Total Assignments: 8</p>
                                                    <p className='product_desc'>Total Duration: 35hrs</p>
                                                    <p>Review: &nbsp;&nbsp;&nbsp;
                                                        <i className='fa fa-star text-warning ml-2'>*</i>
                                                        <i className='fa fa-star text-warning ml-2'>*</i>
                                                        <i className='fa fa-star text-warning ml-2'>*</i>
                                                        <i className='fa fa-star text-warning ml-2'></i>
                                                        <i className='fa fa-star ml-2'></i>
                                                    </p>
                                                    <h4 className='product_price'>Coupon: Web123</h4>
                                                    <button className='btn btn-success mt-2 cart'>Add To Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
</div>*/}
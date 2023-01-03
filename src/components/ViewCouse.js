import React from 'react'
// import { decodeToken } from 'react-jwt';
import Dashboard from './Dashboard'
import './Dashboard.css'
// import $ from 'jquery'
// import { Scale } from '@mui/icons-material';
const ViewCourse = () => {
    // const [userData,setData]=useState("");
    //  const viewData=async()=>{
    //     try{
    //         const res=await fetch("http://localhost:3000/auth/signin",{
    //             method:"GET",
    //             headers:{
    //                 Accept:"application/x-www-form-urlencoded",
    //                 "Content-Type":"application/x-www-form-urlencoded"
    //             },
    //             credentials:"include"
    //         });
    //         const data=await res.json();  
    //         const data1=decodeToken(data.access_token);
    //         console.log(data1);
    //         // setData(data1);
    //     }catch(err){

    //     }
    //  }
    // useEffect(()=>{
    //     viewData();
    // })
    return (
        <>
            <div>
                <Dashboard />
                <div>
                    <main role="main" className="col-md-9 ms-sm-auto col-lg-10 px-4">
                        {/* <h1>hello world</h1> */}
                        <h3>Candidates</h3>
                        <hr />
                        <div className='container mt-5'>
                            <h1 className="text-center font-weight-normal">Courses</h1>
                        </div>

                        <div className="container mt-4 d-flex mb-5">
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
                                            <button  type="button" data-bs-toggle="modal" data-bs-target="#modalID">More</button>
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
                                            <button  type="button" data-bs-toggle="modal" data-bs-target="#web">More</button>
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
                                            <button  type="button" data-bs-toggle="modal" data-bs-target="#dev">More</button>
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
                            </div>
                            <div className="modal fade" id='modalID'>
                                <div className="modal-dialog bg-success">
                                    <div className="modal-content">
                                        <div className="modal-header pb-2">
                                            <h2 className='font-weight-light ml-4'>Description</h2>
                                            <button type='button' className='close' data-dismiss="modal" aria-label='close'>
                                                <span aria-hidden="false">Taught By: Shehryar Ahmed</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="row mt-2 p-3">
                                                <div className="col-md-6">
                                                    <img src="AI_.jpg" alt="" className="card-img-top w-70 rounded" />
                                                </div>
                                                <div className="col-md-6">
                                                    <h3 className='product_name'>Artificial Intelligence</h3>
                                                    <p className='product_desc'>Total Lectures: 15</p>
                                                    <p className='product_desc'>Total Assignments: 5</p>
                                                    <p className='product_desc'>Total Duration: 45hrs</p>
                                                    <p>Review: &nbsp;&nbsp;&nbsp;
                                                        <i className='fa fa-star text-warning ml-2'>*</i>
                                                        <i className='fa fa-star text-warning ml-2'>*</i>
                                                        <i className='fa fa-star text-warning ml-2'>*</i>
                                                        <i className='fa fa-star text-warning ml-2'>*</i>
                                                        <i className='fa fa-star ml-2'>*</i>
                                                    </p>
                                                    <h4 className='product_price'>Coupon: Fast123</h4>
                                                    <button className='btn btn-success mt-2 cart'>Add To Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                    </main>
                </div>
            </div>
        </>
    )
};

export default ViewCourse

import React from 'react'
// import { decodeToken } from 'react-jwt';
import Dashboard1 from './Dashboard1'
import './Dashboard.css'
// import $ from 'jquery'
// import { Scale } from '@mui/icons-material';
const ViewJobs = () => {
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
                <Dashboard1 />
                <div>
                    <main role="main" className="col-md-9 ms-sm-auto col-lg-10 px-4">
                        {/* <h1>hello world</h1> */}
                        <h3>Candidates</h3>
                        <hr />
                        <div className='container mt-5'>
                            <h1 className="text-center font-weight-normal">Jobs</h1>
                        </div>

                        <div className="container mt-4 d-flex mb-5">
                            <div className="row">
                                
                                <div className="col-md-4 mt-5">
                                    <div className="card">
                                        <img src="dot.jpg" alt="" className="card-img-top w-70" />
                                        <div className="card-body">
                                            <h5 className="card-title">Dot Net Engineer</h5>
                                            <div className="d-flex justify-content-between">
                                                <p className='card-text'>Company: Astera</p>
                                                <p className='card-text mr-4 text-success'>Exp. 1-3 years</p>
                                            </div>
                                            <button  type="button" data-bs-toggle="modal" data-bs-target="#modalID">More</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 mt-5">
                                    <div className="card">
                                        <img src="365.jpg" alt="" className="card-img-top w-70" />
                                        <div className="card-body">
                                            <h5 className="card-title">Microsoft Dynamics 365 Developer</h5>
                                            <div className="d-flex justify-content-between">
                                                <p className='card-text'>Company: Diners</p>
                                                <p className='card-text mr-4 text-success'>Exp. Nill</p>
                                            </div>
                                            <button  type="button" data-bs-toggle="modal" data-bs-target="#web">More</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 mt-5">
                                    <div className="card">
                                        <img src="sqa.jpg" alt="" className="card-img-top w-70" />
                                        <div className="card-body">
                                            <h5 className="card-title">SQA Engineer</h5>
                                            <div className="d-flex justify-content-between">
                                                <p className='card-text'>Company: 10Pearls</p>
                                                <p className='card-text mr-4 text-success'>Exp. 1-3 years</p>
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
                                            {/* <button type='button' className='close' data-dismiss="modal" aria-label='close'>
                                                <span aria-hidden="false">Taught By: Ehtisham Sheikh</span>
                                            </button> */}
                                        </div>
                                        <div className="modal-body">
                                            <div className="row mt-2 p-3">
                                                <div className="col-md-6">
                                                    <img src="sqa.jpg" alt="" className="card-img-top w-70 rounded" />
                                                </div>
                                                <div className="col-md-6">
                                                    <h4 className='product_name'>SQA Engineer</h4>
                                                    <p className='product_desc'>Allowances: True</p>
                                                    <p className='product_desc'>Shift Timing: 9AM-5PM</p>
                                                    <p className='product_desc'>Minimum Contract: 2 years</p>
                                                    <p>Review: &nbsp;&nbsp;&nbsp;
                                                        <i className='fa fa-star text-warning ml-2'>*</i>
                                                        <i className='fa fa-star text-warning ml-2'>*</i>
                                                        <i className='fa fa-star text-warning ml-2'>*</i>
                                                        <i className='fa fa-star text-warning ml-2'>*</i>
                                                        <i className='fa fa-star  ml-2'>*</i>
                                                    </p>
                                                    <h4 className='product_price'>Salary: PKR 100000</h4>
                                                    <button className='btn btn-success mt-2 cart'>Edit</button>
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
                                            {/* <button type='button' className='close' data-dismiss="modal" aria-label='close'>
                                                <span aria-hidden="false">Taught By: Moiz Soomro</span>
                                            </button> */}
                                        </div>
                                        <div className="modal-body">
                                            <div className="row mt-2 p-3">
                                                <div className="col-md-6">
                                                    <img src="365.jpg" alt="" className="card-img-top w-70 rounded" />
                                                </div>
                                                <div className="col-md-6">
                                                    <h4 className='product_name'>Microsoft Dynamics 365</h4>
                                                    <p className='product_desc'>Allowance: True</p>
                                                    <p className='product_desc'>Shift Timings: Flexible</p>
                                                    <p className='product_desc'>Minimum Contract: Nil</p>
                                                    <p>Review: &nbsp;&nbsp;&nbsp;
                                                        <i className='fa fa-star text-warning ml-2'>*</i>
                                                        <i className='fa fa-star text-warning ml-2'>*</i>
                                                        <i className='fa fa-star text-warning ml-2'>*</i>
                                                        <i className='fa fa-star text-warning ml-2'>*</i>
                                                        <i className='fa fa-star text-warning ml-2'>*</i>
                                                    </p>
                                                    <h4 className='product_price'>Salary: PKR. 130000</h4>
                                                    <button className='btn btn-success mt-2 cart'>Edit</button>
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
                                            {/* <button type='button' className='close' data-dismiss="modal" aria-label='close'>
                                                <span aria-hidden="false">Taught By: Shehryar Ahmed</span>
                                            </button> */}
                                        </div>
                                        <div className="modal-body">
                                            <div className="row mt-2 p-3">
                                                <div className="col-md-6">
                                                    <img src="dot.jpg" alt="" className="card-img-top w-70 rounded" />
                                                </div>
                                                <div className="col-md-6">
                                                    <h4 className='product_name'>Dot Net Developer</h4>
                                                    <p className='product_desc'>Allowance: False</p>
                                                    <p className='product_desc'>Shift Timings: 6PM-2AM</p>
                                                    <p className='product_desc'>Minimum contract: 3 years</p>
                                                    <p>Review: &nbsp;&nbsp;&nbsp;
                                                        <i className='fa fa-star text-warning ml-2'>*</i>
                                                        <i className='fa fa-star text-warning ml-2'>*</i>
                                                        <i className='fa fa-star  ml-2'>*</i>
                                                        <i className='fa fa-star  ml-2'>*</i>
                                                        <i className='fa fa-star  ml-2'>*</i>
                                                    </p>
                                                    <h4 className='product_price'>Salary: PKR.120000</h4>
                                                    <button className='btn btn-success mt-2 cart'>Edit</button>
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

export default ViewJobs

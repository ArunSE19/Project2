import React from 'react'
// import { decodeToken } from 'react-jwt';
import Dashboard from './Dashboard'

const ViewProfile = ({profilesIns}) => {
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
                        {profilesIns.map((profiles) => (
                        <div className="container p-5">
                            <div className="row">
                                <div className="col-lg-4 bg-dark text-white text-center py-4">
                                    <div className="header-left">
                                        <img src={profiles.image} alt="" className='img-thumbnail rounded-circle mb-4' />
                                        <h6 className="display-6">{profiles.name}</h6>
                                        <h4 className='lead text-uppercase text-white-50 mb-4'>Instructor</h4>
                                    </div>
                                    
                                    <h5 className='text-uppercase bg-white text-dark py-2 rounded-pill'>Contact</h5>

                                    <ul className="list-unstyled text-white-50 ml-5 py-2 text-left">
                                        <li className='list-item'>
                                            <i className='fas fa-mobile-alt '></i>
                                            {profiles.no}
                                        </li>
                                        <li className='list-item'>
                                            <i className='fas fa-blog '></i>
                                            {profiles.email}
                                        </li>
                                        <li className='list-item'>
                                            <i className='fas fa-map-marker'></i>
                                            {profiles.address}
                                        </li>
                                    </ul>
                                    <div>
                                        <h5 className='text-uppercase bg-white text-dark py-2 rounded-pill'>Expertise</h5>
                                        <ul className='list text-white-50 ml-5 py-2 text-left text-capitalize'>
                                        <li className='list-item'>{profiles.expertise}</li>
                                        <li className='list-item'>Git, Linux (Debian), Bash (Shell Scripting)</li>
                                        <li className='list-item'>MySQL, MongoDB, Oracle
                                        </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 className='text-uppercase bg-white text-dark py-2 rounded-pill'>Professional Platforms</h5>
                                        <ul className='list text-white-50 ml-5 py-2 text-left text-capitalize'>
                                            <li className='list-item'>{profiles.linkedin}</li>
                                            <li className='list-item'>{profiles.twitter}</li>
                                            <li className='list-item'>mshehryar.com/ (Personal)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 className='text-uppercase bg-white text-dark py-2 rounded-pill'>Payment Info</h5>
                                        <ul className='list text-white-50 ml-5 py-2 text-left text-capitalize'>
                                            <li className='list-item'>{profiles.pay1}</li>
                                            <li className='list-item'>{profiles.pay2}</li>
                                            <li className='list-item'>{profiles.pay3}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-8 bg-light text-dark py-4 px-5">
                                    <div className="header-right">
                                        <h4 className='text-uppercase'>Profile</h4>
                                        <hr />
                                        <p>{profiles.des}</p>
                                    </div>

                                    <div>
                                        <h4 className='text-uppercase'>Education</h4>
                                        <hr />
                                        <ul className='list'>
                                            <li className='list-item'>
                                                <h6 className='display-7 text-uppercase'>{profiles.degree} {profiles.university}</h6>
                                                <h6 className='text-uppercase text-block-50'>{profiles.time}</h6>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className='text-uppercase'>Experience</h4>
                                        <hr />
                                        <ul className='list'>
                                            <li className='list-item'>
                                                <h6 className='display-7 text-uppercase'>{profiles.role} {profiles.company}</h6>
                                                <h6 className='text-uppercase text-block-50'>{profiles.comTime}</h6>
                                                <h6 className='text-uppercase text-block-50'> {profiles.rol_des}</h6>
                                                <h6 className='text-uppercase text-block-50'><b>Core technologies:</b> PHP, JavaScript, HTML/CSS, Python,
                                                    SQL, Bash Scripting.</h6>
                                            </li>

                                            <li className='list-item'>
                                                <h6 className='display-7 text-uppercase'>- Jr. Developer (Remote)Let’s Awake Inc. (Mississauga, Canada)
                                                </h6>
                                                <h6 className='text-uppercase text-block-50'> [01/2019 - 06/2021]</h6>
                                                <h6 className='text-uppercase text-block-50'>Was employed as a junior developer on various projects
                                                    such as, student performance tracker, class attendance
                                                    management, lecture planner etc.
                                                </h6>
                                                <h6 className='text-uppercase text-block-50'><b>Core technologies:</b>JavaScript, HTML/CSS, PHP, Google
                                                    App Scripts</h6>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className='text-uppercase'>Projects</h4>
                                        <hr />
                                        <ul className='list'>
                                            <li className='list-item'>
                                                <h6 className='display-7 text-uppercase'>Shop.it </h6>
                                                <h6 className='text-uppercase text-block-50'>[01/2022 - 06/2022]</h6>
                                                <h6 className='text-uppercase text-block-50'>Developed a PHP-based online clothing store with
                                                    an SQL database and Bootstrap frontend</h6>

                                            </li>
                                            <li className='list-item'>
                                                <h6 className='display-7 text-uppercase'>Neural Net Trainer</h6>
                                                <h6 className='text-uppercase text-block-50'>[07/2020 - 01/2021]</h6>
                                                <h6 className='text-uppercase text-block-50'>Created a C++-based neural net trainer for
                                                    customized dataset with core data structures and
                                                    algorithms</h6>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </main>
                </div>
            </div>
        </>
    )
};

export default ViewProfile

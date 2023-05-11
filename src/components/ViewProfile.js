import React from 'react'
// import { decodeToken } from 'react-jwt';
import Dashboard from './Dashboard'

const ViewProfile = () => {
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

                        <div className="container p-5">
                            <div className="row">
                                <div className="col-lg-4 bg-dark text-white text-center py-4">
                                    <div className="header-left">
                                        <img src="shehryar.jpeg" alt="" className='img-thumbnail rounded-circle mb-4' />
                                        <h6 className="display-6">Shehryar Ahmed</h6>
                                        <h4 className='lead text-uppercase text-white-50 mb-4'>Instructor</h4>
                                    </div>

                                    <h5 className='text-uppercase bg-white text-dark py-2 rounded-pill'>Contact</h5>

                                    <ul className="list-unstyled text-white-50 ml-5 py-2 text-left">
                                        <li className='list-item'>
                                            <i className='fas fa-mobile-alt '></i>
                                            +92 315 5546431
                                        </li>
                                        <li className='list-item'>
                                            <i className='fas fa-blog '></i>
                                            contact@mshehryar.com
                                        </li>
                                        <li className='list-item'>
                                            <i className='fas fa-map-marker'></i>
                                            Flat# C-34, Safari Heights, Block-15, Gulistan-e-Johar, Karachi, Pakistan
                                        </li>
                                    </ul>

                                    <div>
                                        <h5 className='text-uppercase bg-white text-dark py-2 rounded-pill'>Expertise</h5>
                                        <ul className='list text-white-50 ml-5 py-2 text-left text-capitalize'>
                                        <li className='list-item'>C/C++, Java, PHP, JavaScript, HTML/CSS</li>
                                        <li className='list-item'>Git, Linux (Debian), Bash (Shell Scripting)</li>
                                        <li className='list-item'>MySQL, MongoDB, Oracle
                                        </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 className='text-uppercase bg-white text-dark py-2 rounded-pill'>Professional Platforms</h5>
                                        <ul className='list text-white-50 ml-5 py-2 text-left text-capitalize'>
                                            <li className='list-item'>linkedin.com/in/mohammedshehryarahmed</li>
                                            <li className='list-item'>msherryahmed</li>
                                            <li className='list-item'>mshehryar.com/ (Personal)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 className='text-uppercase bg-white text-dark py-2 rounded-pill'>Payment Info</h5>
                                        <ul className='list text-white-50 ml-5 py-2 text-left text-capitalize'>
                                            <li className='list-item'>Y6NNPFY22QSBC</li>
                                            <li className='list-item'>880696422786</li>
                                            <li className='list-item'>PK65 BAHL 0000 0011 2345 6702</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-8 bg-light text-dark py-4 px-5">
                                    <div className="header-right">
                                        <h4 className='text-uppercase'>Profile</h4>
                                        <hr />
                                        <p>An aspiring software engineer with a motive to drive efficient solutions to critical problems. I am a firm believer of teamwork with a passion to streamline and smoothen processes by managing people and other resources to achieve business goals; with critical analysis, I aim to turn problems into opportunities using technology as a tool.</p>
                                    </div>

                                    <div>
                                        <h4 className='text-uppercase'>Education</h4>
                                        <hr />
                                        <ul className='list'>
                                            <li className='list-item'>
                                                <h6 className='display-7 text-uppercase'>BS Software Engineering FAST-NUCES</h6>
                                                <h6 className='text-uppercase text-block-50'> [08/2019 - 06/2023]</h6>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className='text-uppercase'>Experience</h4>
                                        <hr />
                                        <ul className='list'>
                                            <li className='list-item'>
                                                <h6 className='display-7 text-uppercase'>Contractor (Remote) Equinix (Sunnyvale, California)</h6>
                                                <h6 className='text-uppercase text-block-50'> [01/2022 - 01/2023]</h6>
                                                <h6 className='text-uppercase text-block-50'> Worked under the supervision of Senior Manager - (Cloud
                                                    and Edge Services) to develop an AWS Virtual Machine
                                                    hosted application for the reservation of a troubleshooting
                                                    lab which is used to replicate bugs and errors indicated by
                                                    the clients</h6>
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
                    </main>
                </div>
            </div>
        </>
    )
};

export default ViewProfile

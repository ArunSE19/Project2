import React from 'react'
import Footer from './Footer'
import "./Form.css"
import Navbar from './Navbar'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
const Signup = () => {
    const history=useNavigate();
    const [user,setUser]=useState({
        FirstName :"",LastName :"",Username :"",Password : "", Confirm_Password: "",Role : ""
    });
    let name,value;
    const handleSubmit=(e)=>{
        // console.log(e.target.value);
        name=e.target.name;
        value=e.target.value;
        setUser({...user, [name]:value});
    }

    const PostData= async (e) => {
        e.preventDefault();
        const {FirstName,LastName,Username,Password,Confirm_Password,Role}=user;
        const res= await fetch("http://localhost:3000/auth/signup",{
            method: "POST",
            headers: {"Content-Type": 'application/x-www-form-urlencoded'},
            // body:JSON.stringify({
            //     First_Name,Last_Name,Username,Password,Confirm_Password,Role
            // })
            body: new URLSearchParams({
                                'First_Name': FirstName,
                                'Last_Name': LastName,
                                'Username': Username,
                                'Password': Password,
                                'Role': Role,
                            }).toString(),

        });
        const data= await res.JSON();
        console.log(data.status);
        // if(data.status===201)
        // {
        //     history("/Signin");
        // }
    }
    // const [FirstName, setFname] = useState("");
    // const [LastName, setLname] = useState("");
    // const [Username, setUsername] = useState("");
    // const [Password, setPassword] = useState("");
    // const [Confirm_Password, setconfirmPassword] = useState("");
    // const [Role, setrole] = useState("");
    // const [message, setMessage] = useState("");
    // let handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         var res = await fetch("http://localhost:3000/auth/signup",{
    //             method: "POST",
    //             // mode:"no-cors",
    //             headers: {
    //                 'Content-Type': 'application/x-www-form-urlencoded',

    //             },
    //             body: new URLSearchParams({
    //                 'First_Name': FirstName,
    //                 'Last_Name': LastName,
    //                 'Username': Username,
    //                 'Password': Password,
    //                 'Role': Role,
    //             }).toString(),
    //         });

    //         // let resJson = await res.json();
    //         // console.log(res)
    //         if (res.status === 200) {
    //             setFname("");
    //             setLname("");
    //             setUsername("");
    //             setPassword("")
    //             setconfirmPassword("")
    //             setrole("")
    //             // setMessage("User created successfully");
    //         } else {
    //             // setMessage("Some error occured");
    //         }
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    return (
        <>
        <Navbar/>
        {/* <br/><br/>
        <br/><br/> */}
        
            <section className='wrapper'>
                <div className='container'>
                    <div className='col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 text-center'>
                        <form method="POST" className='rounded bg-white shadow p-5' onSubmit={PostData}>
                            <h3 className='text-dark fw-bolder fs-4 mb-2'>Create An Account</h3>
                            <div className='fw-normal text-muted mb-2'>
                                Already Have an Account? <a href="/" className='text-primary fw-bold text-decoration-none'>Sign in here</a>
                            </div>
                            <div className='text-center text-muted text-uppercase mb-2'>OR</div>
                            
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" value={user.FirstName} name="FirstName" id="floatingFirstName" placeholder="First Name" onChange={handleSubmit} />
                                <label htmlFor="floatingFirstName">First Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" value={user.LastName} name="LastName" id="floatingLastName" placeholder="LastName" onChange={handleSubmit} />
                                <label htmlFor="floatingLastName">Last Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" value={user.Username} name="Username" id="floatingInput" placeholder="name@example.com" onChange={handleSubmit} />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" value={user.Password} name="Password" id="floatingPassword" placeholder="Password" onChange={handleSubmit} />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" value={user.Confirm_Password} name="Confirm_Password" id="floatingConfirmPassword" placeholder="Password" onChange={handleSubmit} />
                                <label htmlFor="floatingConfirmPassword">Confirm Password</label>
                            </div>
                            <div className="form-check d-flex align-items-center">
                                <input className="form-check-input" type="radio" name="Role" value="Student"  id="flexRadioDefault2" checked onChange={handleSubmit}/>
                                <label className="form-check-label ms-2" htmlFor="lexRadioDefault2">
                                 Student
                                </label>
                            </div>
                            <div className="form-check d-flex align-items-center">
                                <input className="form-check-input" type="radio" name="Role" value="Instructor" id="flexRadioDefault2" onChange={handleSubmit}/>
                                <label className="form-check-label ms-2" htmlFor="flexRadioDefault2">
                                Instructor                                </label>
                            </div>
                            <div className="form-check d-flex align-items-center">
                                <input className="form-check-input" type="radio" name="Role" value="Recruitor" id="flexRadioDefault2" onChange={handleSubmit}/>
                                <label className="form-check-label ms-2" htmlFor="flexRadioDefault2">
                                 Recruiter
                                </label>
                            </div>
                          <button type="submit" className="btn btn-primary submit_btn w-50 my-4" onClick={PostData}>SignUp</button>
                        </form>
                    </div>
                </div>
            </section>
            {/* <br/><br/><br/><br/><br/><br/> */}
        <Footer/>
        </>
    )
}

export default Signup

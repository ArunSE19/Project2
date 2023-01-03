import React from 'react'
import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import Footer from './Footer'
import { decodeToken } from 'react-jwt'
import "./Form.css"
import Navbar from './Navbar'
// import { Fetcher } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Signin = () => {        
const [Username, setUsername] = useState("");
const [Password, setPassword] = useState("");
const navigate=useNavigate();
let handleSubmit = async (e) => {
  // const bodyparsar=require("body-parser");
                                        e.preventDefault();
                                        try {
                                          const res = await fetch("http://localhost:3000/auth/signin", {
                                            method: "POST",
                                            // mode:'no-cors',
                                            headers: {
                                              'Content-Type': 'application/x-www-form-urlencoded',
                                            },
                                            body: new URLSearchParams ({
                                              'Username': Username,
                                              'Password': Password,
                                            }).toString()
                                            
                                            // body:JSON.stringify({
                                            //   Username: Username,
                                            //   Password: Password
                                            // })
                                          }).then(res => res.json()).then(data =>{
                                            //console.log(data.access_token);  
                                            const user = decodeToken(data.access_token);
                                            if(user.Role==="Recruitor")
                                            {
                                              navigate("/dashboard1");
                                            }
                                            else if(user.Role==="Instructor")
                                            {
                                              navigate("/dashboard");
                                            }
                                            else if(user.Role==="Student")
                                            {
                                              window.alert("System Functionality For Student Under Development");
                                            }
                                            else{
                                              window.alert("Incorrect Credentials");
                                            }
                                            if (res.status===201) {
                                              setUsername("");
                                              setPassword("");
                                              // window.alert("Login Successfull")
                                              // console.log(res.json());
                                              // console.log("Hello2");
                                              // <Link to='/dashboard' active></Link>
                                              // navigate("/dashboard");
                                            }
                                            
                                          });
                                          }
                                          // console.log(res.json());
                                          // console.log(res.body.getReader);
                                          // const data = await res.json();
                                          //  console.log(resJson.value);
                                          // console.log(res.status);
                                          // console.log(res.ok);
                                        //  console.log(res.arrayBuffer()); 
                                          
                                           
                                          catch (err) {
                                          // window.alert("Login Unsuccessful")
                                            
                                          console.log(err);
                                        }
                                        // console.log("Hello3");
                                        
                    //  func();                   
                    // console.log(token);

    };
    return (
        <>
        <Navbar/>
            <section className='wrapper'>
                <div className='container'>
                    <div className='col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 text-center'>
                        <form method='POST' className='rounded bg-white shadow p-5' onSubmit={handleSubmit}>
                            <h3 className='text-dark fw-bolder fs-4 mb-2'>Sign In To EarnFromLearn</h3>
                            <div className='fw-normal text-muted mb-4'>
                                New Here? <a href="/" className='text-primary fw-bold text-decoration-none'>Create An Account</a>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" value={Username} id="floatingInput" placeholder="name@example.com" onChange={(e) => setUsername(e.target.value)} required/>
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" value={Password} id="floatingPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                              <button type="submit" className="btn btn-primary submit_btn w-50 my-4" onclick={handleSubmit}>Login</button>
                        </form>
                    </div>
                </div>
            </section>
            {/* <Link to="/dashboard1" className='log'></Link></Link> */}
            {/* <br/><br/><br/><br/><br/><br/> */}
        <Footer/>
        </>
    )
}

export default Signin

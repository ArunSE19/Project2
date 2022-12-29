import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import "./Form.css"
import Navbar from './Navbar'

const Signin = () => {
    
const [Username, setUsername] = useState("");
const [Password, setPassword] = useState("");
let handleSubmit = async (e) => {
                                        e.preventDefault();
                                        try {
                                          let res = await fetch("https://localhost:3000/auth/signup", {
                                            method: "POST",
                                            headers: {
                                              'Content-Type': 'application/x-www-form-urlencoded',
                                              
                                            },
                                            body: new URLSearchParams ({
                                              'Username': Username,
                                              'Password': Password,
                                            }).toString(),
                                          });
                                          
                                          // let resJson = await res.json();
                                          if (res.status === 200) {
                                            setUsername("");
                                            setPassword("")
                                          } 
                                        } catch (err) {
                                          console.log(err);
                                        }

    };

    
    
    
    
    return (
        <>
        <Navbar/>
            <section className='wrapper'>
                <div className='container'>
                    <div className='col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 text-center'>
                        <form action="" className='rounded bg-white shadow p-5' onSubmit={handleSubmit}>
                            <h3 className='text-dark fw-bolder fs-4 mb-2'>Sign In To EarnFromLearn</h3>
                            <div className='fw-normal text-muted mb-4'>
                                New Here? <a href="/" className='text-primary fw-bold text-decoration-none'>Create An Account</a>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" value={Username} id="floatingInput" placeholder="name@example.com" onChange={(e) => setUsername(e.target.value)}/>
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" value={Password} id="floatingPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                              <button type="submit" className="btn btn-primary submit_btn w-50 my-4" onClick={handleSubmit}><Link to='/dashboard' className='log'>Login</Link></button>
                        </form>
                    </div>
                </div>
            </section>
            {/* <br/><br/><br/><br/><br/><br/> */}
        <Footer/>
        </>
    )
}

export default Signin

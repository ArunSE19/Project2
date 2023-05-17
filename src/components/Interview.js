import { useState } from 'react'
import React from 'react'
import Dashboard2 from './Dashboard2'
import "./Form.css"
import { UserCheck } from 'react-feather'
const Interview = () => {
  const [Username, setUsername] = useState("");
  let handleSubmit=async (e)=>{
    setUsername(e.target.value);
    e.preventDefault();
        console.log("Sending");
        const token = window.Data.access_token.toString();
        console.log(token);
        const res= await fetch(`http://localhost:3000/auth/sendMail/${Username}`,{
            method: "POST",
            headers: {"Content-Type": 'application/x-www-form-urlencoded', "Authorization": `Bearer ${token}`},
        });
    
  }
                                        
  return (
    <>
      <div>
        <Dashboard2 />
        <div>
          <main role="main" className="col-md-9 ms-sm-auto col-lg-10 px-4">
            <h3>Candidates</h3>
            <hr />
            <section className='wrapper'>
              <div className='container'>
                <div className='col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 text-center'>
                  <form method='POST' className='rounded bg-white shadow p-5' onSubmit={handleSubmit}>
                    <h3 className='text-dark fw-bolder fs-4 mb-2'>Mock Interview</h3>
                    <div className='fw-normal text-muted mb-4'>
                      {/* <Link to="/Signup" className='text-primary fw-bold text-decoration-none'></Link> */}
                    </div>
                    <div className="form-floating mb-3">
                      <input type="email" className="form-control" value={Username} id="floatingInput" placeholder="Write Email" onChange={(e) => setUsername(e.target.value)} required />
                      <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <button type="submit" className="btn btn-primary submit_btn w-50 my-4" onClick={handleSubmit}>Submit</button>
                  </form>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  )
}

export default Interview

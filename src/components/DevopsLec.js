import React, { useState } from 'react'
import Dashboard from './Dashboard'

// import { ElfsightWidget } from 'react-elfsight-widget'
// import data from './back/data/data';
import ReactPlayer from 'react-player/youtube'
import Dashboard2 from './Dashboard2'
import Dashboard1 from './Dashboard1'
function DevopsLec({DevopsLink,dash}){
  // const {DevopsLink}=data
  // console.log(props);
  const comp=dash;
  const dim=null;
    // if (comp===1) {
    //   dim=<Dashboard2/>
    // }
    // else
    // {
    //   dim=<Dashboard/>
    // }
  return (
    <>
    
         <div>
              <Dashboard/>
         <div>
                  {/* console.log({props}); */}
                    <main role="main" className="col-md-9 ms-sm-auto col-lg-10 px-4">
                        {/* <h1>hello world</h1> */}
                        <h3></h3>
                        <hr />
                        {/* <h1>{coursename}</h1> */}
                        {/* {props.match.params.coursename} */}
                        {DevopsLink.map((DevopsLink)=>(
                            <ReactPlayer url={DevopsLink.Lec} className='mx-2 my-4'/>
                        ))}
                        
                    </main>
                </div>
            </div>


    </>
  )
}

export default DevopsLec

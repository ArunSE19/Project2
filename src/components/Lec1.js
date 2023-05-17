import React from 'react'
import Dashboard2 from './Dashboard2'
// import { ElfsightWidget } from 'react-elfsight-widget'
// import data from './back/data/data';
import ReactPlayer from 'react-player/youtube'
function Lec1({DevopsLink,dash}){
  // const {DevopsLink}=data
  // console.log(props);
  return (
    <>
         <div>
                <dash />
                <div>
                  {/* console.log({props}); */}
                    <main role="main" className="col-md-9 ms-sm-auto col-lg-10 px-4">
                        {/* <h1>hello world</h1> */}
                        <h3>Candidates</h3>
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

export default Lec1

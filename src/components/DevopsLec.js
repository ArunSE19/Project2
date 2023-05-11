import React from 'react'
import Dashboard from './Dashboard'
import { ElfsightWidget } from 'react-elfsight-widget'
const DevopsLec = (props) => {
  return (
    <>
         <div>
                <Dashboard />
                <div>
                    <main role="main" className="col-md-9 ms-sm-auto col-lg-10 px-4">
                        {/* <h1>hello world</h1> */}
                        <h3>Candidates</h3>
                        <hr />
                        {/* <h1>lectures</h1> */}
                        <ElfsightWidget widgetId='ddba515b-171c-4210-8795-927a1c846262'/>
                        </main>
                </div>
            </div>


    </>
  )
}

export default DevopsLec

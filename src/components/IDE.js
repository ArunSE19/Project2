import React from 'react'
import Dashboard2 from './Dashboard2'
const IDE = ({handlecompile}) => {
  return (
    <>
             <div>
        {/* <Dashboard2 /> */}
        <div>
          <main role="main" className="col-md-9 ms-sm-auto col-lg-10 px-4">
            <h3></h3>
            <hr />
            {handlecompile(0)}
            </main>
        </div>
      </div>
    </>
  )
}

export default IDE

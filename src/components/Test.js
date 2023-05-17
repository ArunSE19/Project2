import React from 'react'
import Quiz from './Quiz'
import Dashboard2 from './Dashboard2'

const Test = () => {
  return (
  <>
  <div>
                <Dashboard2 />
                <div>
                    <main role="main" className="col-md-9 ms-sm-auto col-lg-10 px-4">
                        {/* <h1>hello world</h1> */}
                        {/* <h3>Candidates</h3> */}
                        {/* <hr /> */}
                            <Quiz/>
                        </main>
                </div>
            </div>
  
  
  
  </>
    )
}

export default Test

import React from 'react'
import Crousal from './Crousal'
import Footer from './Footer'
import Navbar from './Navbar'
import Service from './Service'
// import Signup from './Signup'
import Team from './Team'
// import './Crousal.css'
const Home = () => {
  return (
    <div>
      
      <Navbar/>
        <Crousal/>
        <Service/>
        <Team/>
        <Footer/>
        {/* <Signup/> */}
    </div>
    
       
          
  )
}

export default Home

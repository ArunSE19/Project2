import './App.css';
// import Navbar from './components/Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home'
import Signin from './components/Signin'
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import LinearStepper from './components/LinearStepper';
import Profile from './components/Profile';
import Postjob from './components/PostJob';
import Recruiterprofile from './components/RecruiterProfile';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Signin' element={<Signin/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/LinearStepper' element={<LinearStepper/>}/>
      <Route path='/Profile' element={<Profile/>}/>
      <Route path='/PostJob' element={<Postjob/>}/>
      <Route path='/RecruiterProfile' element={<Recruiterprofile/>}/>
      
    </Routes>
    </>
  );
}

export default App;

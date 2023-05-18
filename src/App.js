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
import Dashboard1 from './components/Dashboard1';
import Dashboard2 from './components/Dashboard2';
import ViewProfile from './components/ViewProfile';
import ViewProfile1 from './components/ViewProfile1';
import ViewCourse from './components/ViewCouse'
import ViewJobs from './components/ViewJobs';
import Body from './components/Body/Body';
import IDE from './components/IDE';
import DevopsLec from './components/DevopsLec';
// import Lec1 from './components/Lec1';
import Quiz from './components/Quiz';
import Test from './components/Test';
import Interview from './components/Interview';
import ViewCourseStu from './components/ViewCourseStu';
import Header from './components/Header';
import Cart from './components/Cart';
import StuLec from './components/StuLec';
import data from './components/back/data/data';
import { useState } from 'react';
window.dash=0;

function App() {
  const [cartItems,setCartItem]=useState([]);
  const [course,setCourse]=useState();
  const [val,setValue]=useState(0);
  // const [dash,setDash]=useState("1");
  const { courses,profilesIns,DevopsLink,WebDevelopment } = data;
  let lecture=0; 
  const handlecompile=(name)=>{
    <div data-pym-src="https://www.jdoodle.com/embed/v0/2"></div>
  }
  const handleDash=(name)=>{
    window.dash=name;
  }
  const handleVal=(name)=>
  {
    setValue(name);
    console.log(name);
  }
  const handleCourse=(name)=>{
    setCourse(name);
  }
  const HandleAddProduct=(course)=>{
      const ProductExist = cartItems.find((item)=>item.id===course.id);
      if (ProductExist){
          setCartItem(cartItems.map((item)=>item.id===course.id ? 
          {...ProductExist,quantity:ProductExist.quantity+0}: item));
      }
  else{
      setCartItem([...cartItems, {...course,quantity:1}]);
  }
}
const HandleRemoveProduct=(product)=>{
  const ProductExist = cartItems.find((item)=>item.id===product.id);
  if(ProductExist.quantity===1){
    setCartItem(cartItems.filter((item)=>item.id!==product.id));
  }
  else{
    setCartItem.map((item)=>item.id===product.id ? {...ProductExist,quantity:ProductExist.quantity-1}:item)
  }
  
}
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Signin' element={<Signin/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/dashboard1' element={<Dashboard1/>}/>
      <Route path='/dashboard2' element={<Dashboard2/>}/>
      <Route path='/LinearStepper' element={<LinearStepper/>}/>
      <Route path='/Profile' element={<Profile/>}/>
      <Route path='/PostJob' element={<Postjob/>}/>
      <Route path='/RecruiterProfile' element={<Recruiterprofile/>}/>
      <Route path='/ViewProfile' element={<ViewProfile profilesIns={profilesIns}/>}></Route>
      <Route path='/ViewProfile1' element={<ViewProfile1/>}></Route>
      <Route path='/ViewCourse' element={<ViewCourse courses={courses} handleDash={handleDash} handleVal={handleVal}/>}></Route>
      <Route path='/StuLec' element={<StuLec courses={courses} handleDash={handleDash}/>}></Route>
      <Route path='/ViewJobs' element={<ViewJobs/>}></Route>
      <Route path='/Body' element={<Body/>}></Route>   
      <Route path='/:coursename' element={<DevopsLec DevopsLink={DevopsLink}/>}></Route>
      {/* <Route path='/Web_Development' element={<DevopsLec DevopsLink={null} WebDevelopment={WebDevelopment}/>}></Route> */}
      {/* <Route path='/Web_Development' element={<DevopsLec WebDevelopment={WebDevelopment} />}></Route> */}
      {/* <Route path='/DevOps' element={<DevopsLec DevopsLink={DevopsLink} />}></Route> */}
      <Route path='/ViewCourseStu' element={<ViewCourseStu courses={courses} HandleAddProduct={HandleAddProduct}/>}></Route> 
      <Route path='/Header' element={<Header/>}></Route> 
      <Route path='/Cart' element={<Cart cartItems={cartItems} HandleAddProduct={HandleAddProduct}  HandleRemoveProduct={HandleRemoveProduct}/>}></Route>       
      <Route path='/Interview' element={<Interview/>}></Route>
      <Route path='/Test' element={<Test/>}></Route>
      <Route path='/Quiz' element={<Quiz/>}></Route>
      <Route path='/IDE' element={<IDE handlecompile={handlecompile}/> }></Route> 
    </Routes>
    </>
  );
}

export default App;

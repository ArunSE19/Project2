import React , {useState} from "react"; 
import { TextField, Button, Stepper , Step ,StepLabel, Typography } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './Image.css';
import Dashboard1 from "./Dashboard1";
// import Dashboard from "./Dashboard";
var valueProfile="";
var valueImage = "";
function GetSteps(){
    return [
      "Basic Information",
      "Login Credentials",
      "Social Information",
      "Company Information",
      "Finish",
    ]
  }
  function GetContent(step){
    const [showPassword, setShowPassword] = React.useState(false);
    const [selectedImages, setSelectedImages] = useState([]);
    const [recruiterprofile,setRecruiterProfile]=useState({
      FirstName:"",LastName:"",Biography:"",Responsibility:"",Age:"",Gender:"",Email:"",Password:"",FacebookURL:"",
      TwitterURL:"",LinkedInURL:"",GithubURL:"",CompanyName:"",Designation:"",CompanyBiography:"",
    });
     valueProfile = recruiterprofile;
     valueImage = selectedImages;   
     
    const handleSubmit=(e)=>{
      const { name, value } = e.target;
      setRecruiterProfile({...recruiterprofile, [name]:value});} 
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    const onSelectFile = (event) => {
      const selectedFiles = event.target.files;
      const selectedFilesArray = Array.from(selectedFiles);
  
      const imagesArray = selectedFilesArray.map((file) => {
        return URL.createObjectURL(file);
      });
  
      setSelectedImages((previousImages) => previousImages.concat(imagesArray));
  
      // FOR BUG IN CHROME
      event.target.value = "";
    };
  
    function deleteHandler(image) {
      setSelectedImages(selectedImages.filter((e) => e !== image));
      URL.revokeObjectURL(image);
    }
    switch(step){
      case 0:
        return(
          <>
          <div> <section>
      <label className="box">
        + Upload Image
        <br />
        <input className="invisible"
          type="file"
          name="images"
          onChange={onSelectFile}
          accept="image/png , image/jpeg, image/webp"
        />
      </label>
      <br />
       <div className="images">
        {selectedImages &&
          selectedImages.map((image, index) => {
            return (
              <div key={image} className="image">
                <img src={image} height="200" alt="upload" />
                <button onClick={() => deleteHandler(image)}>
                  Delete
                </button>
                <p>{index + 1}</p>
              </div>
            );
          })}
      </div>
    </section></div>
          <TextField
            id="r-fname"
            name="FirstName"
            fullWidth
            label="First Name"
            margin="normal"
            variant="standard"
            value={recruiterprofile.FirstName}
            onChange={handleSubmit}
            
          />
              <TextField
            id="r-lname"
            name="LastName"
            fullWidth
            label="Last Name"
            margin="normal"
            variant="standard"
            value={recruiterprofile.LastName}
            onChange={handleSubmit}
          />
           <TextField
            id="bio"
            name="Biography"
            required
            fullWidth
            multiline
            label="Biography"
            rows={3}
            placeholder="Briefly describe yourself"
            variant="standard"
            value={recruiterprofile.Biography}
            onChange={handleSubmit}
          />
          <TextField
            id="responsibility"
            name="Responsibility"
            required
            fullWidth
            multiline
            label="Responsibilities"
            rows={3}
            placeholder="Briefly describe job responsibilities"
            variant="standard"
            value={recruiterprofile.Responsibility}
            onChange={handleSubmit}
          />
          <TextField
            id="age"
            label="Age"
            name="Age"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            fullWidth
            required
            min = "18"
            value={recruiterprofile.Age}
            onChange={handleSubmit}
          />
           <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
        <InputLabel  id="gender">Gender</InputLabel>
        <Select
          labelId="select-gender"
          id="demo-select-gender"
          name="Gender"
          label="Gender"
          value={recruiterprofile.Gender}
          onChange={handleSubmit}
        >
          <MenuItem value={1}>Male</MenuItem>
          <MenuItem value={2}>Female</MenuItem>
          <MenuItem value={3}>Other</MenuItem>
        </Select>
      </FormControl>
      
          
            
          </>
          )
      case 1:
        return(
          <>
          <TextField
          id="email"
          label="Email"
          name="Email"
          variant="standard"
          placeholder="Enter your email."
          fullWidth
          margin="normal"
          value={recruiterprofile.Email}
          onChange={handleSubmit}
        />
         <FormControl sx={{ m: 0, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            id="password"
            name="Password"
            value={recruiterprofile.Password}
            onChange={handleSubmit}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
          </>
        )
      case 2:
        return(
          <>
            <TextField
          id="f-url"
          fullWidth
          label="Facebook"
          variant="standard"
          placeholder="Enter your facebook url."
          margin="normal"
          name="FacebookURL"
          value={recruiterprofile.FacebookURL}
          onChange={handleSubmit}
        />
          <TextField
          id="t-url"
          fullWidth
          label="Twitter"
          variant="standard"
          placeholder="Enter yout twitter url."
          margin="normal"
          name="TwitterURL"
          value={recruiterprofile.TwitterURL}
          onChange={handleSubmit}
        />
             <TextField
          id="l-url"
          name="LinkedInURL"
          fullWidth
          label="LinkedIn"
          variant="standard"
          placeholder="Enter your linkedin url."
          margin="normal"
          value={recruiterprofile.LinkedInURL}
          onChange={handleSubmit}
        />
         <TextField
          id="g-url"
          name="GithubURL"
          fullWidth
          label="Github"
          variant="standard"
          placeholder="Enter your github url."
          margin="normal"
          value={recruiterprofile.GithubURL}
          onChange={handleSubmit}
        />
          </>
        )
      case 3:
        return(
          <>
           <TextField
          id="comp-name"
          fullWidth
          required
          label="Company Name"
          variant="standard"
          placeholder="Enter your company's name."
          margin="normal"
          name="CompanyName"
          value={recruiterprofile.CompanyName}
          onChange={handleSubmit}
            />
            <TextField
          id="designation"
          fullWidth
          required
          label="Designation"
          variant="standard"
          placeholder="Enter your designation."
          margin="normal"
          name="Designation"
          value={recruiterprofile.Designation}
          onChange={handleSubmit}
        />
          <TextField
            id="comp-bio"
            required
            fullWidth
            multiline
            label="About Company"
            rows={3}
            placeholder="Briefly describe your about your here."
            variant="standard"
            name="CompanyBiography"
          value={recruiterprofile.CompanyBiography}
          onChange={handleSubmit}
          />
          
          </>
        )
      case 4:
          return(
            <>
  
        
            </>
          )
    
        default: return ""
    }
  }
const Recruiterprofile = () => {
    const [activeStep, setActiveStep] = useState(0)
    const [skippedSteps ,setSkippedSteps] = useState([])
    const steps = GetSteps()
    const isStepOptional = (step) =>{
      return step === 1
    }
    const isStepSkipped = (step) =>{
      return skippedSteps.includes(step)
    }
    const handleNext = () =>{
      setActiveStep(activeStep + 1)
      setSkippedSteps(skippedSteps.filter((skipItem)=> skipItem !==activeStep))
    }
    const handleBack = () =>{
      setActiveStep(activeStep - 1)
    }
    const handleSkip = () =>{
      if(!isStepSkipped(activeStep))
      {setSkippedSteps([activeStep])}
      setActiveStep(activeStep + 1)
    }
    const PostData= async (e) => {
      // e.preventDefault();
      const {FirstName,LastName,Biography,Age,Responsibility,Gender,Email,Password,FacebookURL,TwitterURL,LinkedInURL,
      GithubURL,CompanyName,Designation,CompanyBiography}=valueProfile;
      const image = valueImage;
      console.log(valueProfile)
      console.log(valueImage)
      // const res= await fetch("http://localhost:3000/auth/signup",{
      //     method: "POST",
      //     headers: {"Content-Type": 'application/x-www-form-urlencoded'},
      //     // body:JSON.stringify({
      //     //     First_Name,Last_Name,Username,Password,Confirm_Password,Role
      //     // })
      //     body: new URLSearchParams({
      //                         // 'First_Name': FirstName,
      //                         // 'Last_Name': LastName,
      //                         // 'Username': Username,
      //                         // 'Password': Password,
      //                         // 'Role': Role,
      //                     }).toString(),

      // });
      // const data= await res.JSON();
      // console.log(data.status);
  }
  return (
    
    <>
    <div>
         <Dashboard1/>
            <div>

                <main role="main" className="col-md-9 ms-sm-auto col-lg-10 px-4">
                    {/* <h1>hello world</h1> */}
                    <h3>Candidates</h3>
                    <hr /> 
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
                optional
              </Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length  ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>
          <form method="POST" onSubmit={PostData}>{GetContent(activeStep)}</form>
          <Button
            
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            back
          </Button>
          {isStepOptional(activeStep) && (
            <Button
              
              variant="contained"
              color="primary"
              onClick={handleSkip}
            >
              skip
            </Button>
          )}
          <Button
            
            variant="contained"
            color="primary"
            onClick={activeStep === steps.length - 1 ? PostData : handleNext}
          >
            {activeStep === steps.length - 1 ? "Submit" : "Next"}
          </Button>
        </>
      )}
      </main>
    </div>
    </div>
   </>
  );
};

export default Recruiterprofile
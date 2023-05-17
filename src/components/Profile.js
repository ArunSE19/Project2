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
import Dashboard from "./Dashboard";

var valuesOfProfile="";
var valueOfImage="";

function GetSteps(){
    return [
      "Basic Information",
      "Social Information",
      "Payment Information",
      "Experience",
      "Education",
      "Finish",
    ]
  }
  function GetContent(step){
    const [showPassword, setShowPassword] = React.useState(false);
    const [selectedImages, setSelectedImages] = useState([]);
    const [profile,setProfile]=useState({
      FirstName:"",LastName:"",University:"",Company:"",Role:"",Duration:"",RoleDes:"",Year:"",Degree:"",Biography:"",Age:"",Gender:"",FacebookURL:"",TwitterURL:"",LinkedInURL:"",GithubURL:"",PaypalId:"",PaypalSecret:"",StripeId:"",StripeSecret:"",Expertise:""
    });
    valuesOfProfile = profile;
    valueOfImage =  selectedImages;
    
    const handleSubmit=(e)=>{
      const { name, value } = e.target;
      setProfile({...profile, [name]:value});} 

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
        <input
          type="file"
          name="images"
          onChange={onSelectFile}
          className="invisible"
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
            id="f-name"
            name="FirstName"
            fullWidth
            label="First Name"
            margin="normal"
            variant="standard"
            value={profile.FirstName}
            onChange={handleSubmit}
            
          />
              <TextField
            id="l-name"
            name="LastName"
            fullWidth
            label="Last Name"
            margin="normal"
            variant="standard"
            value={profile.LastName}
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
            value={profile.Biography}
            onChange={handleSubmit}
          />
          <TextField
            id="age"
            name="Age"
            label="Age"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            fullWidth
            required
            min = "18"
            value={profile.Age}
            onChange={handleSubmit}
          />
           <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
        <InputLabel  id="gender">Gender</InputLabel>
        <Select
          labelId="select-gender"
          id="demo-select-gender"
          name="Gender"
          label="Gender"
          value={profile.Gender}
            onChange={handleSubmit}
        >
          <MenuItem value={1}>Male</MenuItem>
          <MenuItem value={2}>Female</MenuItem>
          <MenuItem value={3}>Other</MenuItem>
        </Select>
      </FormControl>
      
          
            
          </>
          )
      // case 1:
      //   return(
      //     <>
      //     <TextField
      //     id="email"
      //     name="Email"
      //     label="Email"
      //     variant="standard"
      //     placeholder="Enter your email."
      //     fullWidth
      //     margin="normal"
      //     value={profile.Email}
      //     onChange={handleSubmit}
          
      //   />
      //    <FormControl sx={{ m: 0, width: '25ch' }} variant="standard">
      //     <InputLabel htmlFor="password">Password</InputLabel>
      //     <Input
      //       id="password"
      //       name="Password"
      //       value={profile.Password}
      //       onChange={handleSubmit}
      //       type={showPassword ? 'text' : 'password'}
      //       endAdornment={
      //         <InputAdornment position="end">
      //           <IconButton
      //             aria-label="toggle password visibility"
      //             onClick={handleClickShowPassword}
      //             onMouseDown={handleMouseDownPassword}
      //           >
      //             {showPassword ? <VisibilityOff /> : <Visibility />}
      //           </IconButton>
      //         </InputAdornment>
      //       }
      //     />
      //   </FormControl>
      //     </>
      //   )
      case 1:
        return(
          <>
            <TextField
          id="f-url"
          name="FacebookURL"
          fullWidth
          label="Facebook"
          variant="standard"
          placeholder="Enter your facebook url."
          margin="normal"
          value={profile.FacebookURL}
          onChange={handleSubmit}
          
        />
          <TextField
          id="t-url"
          name="TwitterURL"
          fullWidth
          label="Twitter"
          variant="standard"
          placeholder="Enter yout twitter url."
          margin="normal"
          value={profile.TwitterURL}
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
          value={profile.LinkedInURL}
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
          value={profile.GithubURL}
            onChange={handleSubmit}
        />
          </>
        )
      case 2:
        return(
          <>
           <TextField
          id="p-id"
          name="PaypalId"
          fullWidth
          required
          label="Paypal Client Id"
          variant="standard"
          placeholder="Enter your paypal id."
          margin="normal"
          value={profile.PaypalId}
            onChange={handleSubmit}
            />
            <TextField
          id="p-sec"
          name="PaypalSecret"
          fullWidth
          required
          label="Paypal Secret Key"
          variant="standard"
          placeholder="Enter your paypal secret key."
          margin="normal"
          value={profile.PaypalSecret}
          onChange={handleSubmit}
        />
           <TextField
          id="s-id"
          name="StripeId"
          fullWidth
          required
          label="Stripe Client Id"
          variant="standard"
          placeholder="Enter your stripe id."
          margin="normal"
          value={profile.StripeId}
            onChange={handleSubmit}
            />
            <TextField
          id="s-sec"
          name="StripeSecret"
          fullWidth
          required
          label="Stripe Secret Key"
          variant="standard"
          placeholder="Enter your stripe secret key."
          margin="normal"
          value={profile.StripeSecret}
            onChange={handleSubmit}
        />
          </>
        )
      case 3:
        return(
          <>
            <TextField
            id="Company"
            name="Company"
            required
            fullWidth
            multiline
            label="Company"
            rows={3}
            placeholder="Company Name"
            variant="standard"
            value={profile.Company}
            onChange={handleSubmit}
          />
          <TextField
            id="comTime"
            name="Duration"
            required
            fullWidth
            multiline
            label="Duration"
            rows={3}
            placeholder="Duration"
            variant="standard"
            value={profile.Duration}
            onChange={handleSubmit}
          />
          <TextField
            id="Role"
            name="Role"
            required
            fullWidth
            multiline
            label="Role"
            rows={3}
            placeholder="What Was Your Role"
            variant="standard"
            value={profile.Role}
            onChange={handleSubmit}
          />
          <TextField
            id="RoleInfo"
            name="RoleInfo"
            required
            fullWidth
            multiline
            label="RoleInfo"
            rows={3}
            placeholder="Role Information"
            variant="standard"
            value={profile.RoleDes}
            onChange={handleSubmit}
          />
          </>
        )
      case 4:
          return(
            <>
                <TextField
          id="Degree"
          name="Degree"
          fullWidth
          required
          label="Degree"
          variant="standard"
          placeholder="Enter Your Qualification."
          margin="normal"
          value={profile.Degree}
            onChange={handleSubmit}
            />
              <TextField
          id="Edu"
          name="Education"
          fullWidth
          required
          label="University"
          variant="standard"
          placeholder="Enter Your University."
          margin="normal"
          value={profile.University}
            onChange={handleSubmit}
            />
             <TextField
          id="Time"
          name="Time"
          fullWidth
          required
          label="Graduation Year"
          variant="standard"
          placeholder="Graduation Year."
          margin="normal"
          value={profile.Year}
            onChange={handleSubmit}
            />
        
            </>
          )
          case 5:
            return(
              <>
    
          
              </>
            )
          
        default: return ""
    }
  }
const Profile = () => {
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
      const {FirstName,LastName,Biography,Age,Gender,Email,Password,FacebookURL,TwitterURL,LinkedInURL,
      GithubURL,PaypalId,PaypalSecret,StripeId,StripeSecret,Expertise,University}=valuesOfProfile;
      const image = valueOfImage;
      console.log(valuesOfProfile)
      console.log(valueOfImage)
    
      // const res= await fetch("http://localhost:3000/course/addCourse",{
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
      <Dashboard/>
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

export default Profile
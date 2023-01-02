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
// import Dashboard from "./Dashboard";
import Dashboard1 from "./Dashboard1";

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
    const [Gender, setGender] = useState('');
    const [selectedImages, setSelectedImages] = useState([]);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    const handleChangeGender = (event) => {
      setGender(event.target.value);
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
            fullWidth
            label="First Name"
            margin="normal"
            variant="standard"
            name="r-fname"
          />
              <TextField
            id="r-lname"
            fullWidth
            label="Last Name"
            margin="normal"
            variant="standard"
            name="r-lname"
          />
           <TextField
            id="bio"
            required
            fullWidth
            multiline
            label="Biography"
            rows={3}
            placeholder="Briefly describe yourself"
            variant="standard"
          />
          <TextField
            id="responsibility"
            required
            fullWidth
            multiline
            label="Responsibilities"
            rows={3}
            placeholder="Briefly describe job responsibilities"
            variant="standard"
          />
          <TextField
            id="age"
            label="Age"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            fullWidth
            required
            min = "18"
          />
           <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
        <InputLabel  id="gender">Gender</InputLabel>
        <Select
          labelId="select-gender"
          id="demo-select-gender"
          value={Gender}
          label="Gender"
          onChange={handleChangeGender}
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
          variant="standard"
          placeholder="Enter your email."
          fullWidth
          margin="normal"
          name="email"
        />
         <FormControl sx={{ m: 0, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            id="password"
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
          name="f-url"
        />
          <TextField
          id="t-url"
          fullWidth
          label="Twitter"
          variant="standard"
          placeholder="Enter yout twitter url."
          margin="normal"
          name="t-url"
        />
             <TextField
          id="l-url"
          fullWidth
          label="LinkedIn"
          variant="standard"
          placeholder="Enter your linkedin url."
          margin="normal"
          name="l-url"
        />
         <TextField
          id="g-url"
          fullWidth
          label="Github"
          variant="standard"
          placeholder="Enter your github url."
          margin="normal"
          name="g-url"
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
          name="comp-name"
            />
            <TextField
          id="designation"
          fullWidth
          required
          label="Designation"
          variant="standard"
          placeholder="Enter your designation."
          margin="normal"
          name="designation"
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
  return (
    
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
          <form>{GetContent(activeStep)}</form>
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
            onClick={handleNext}
          >
            {activeStep === steps.length - 1 ? "Submit" : "Next"}
          </Button>
        </>
      )}
    </main>
    </div>
    </div>
  );
};

export default Recruiterprofile
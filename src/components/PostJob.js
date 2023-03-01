import React , {useState} from "react"; 
import { TextField, Button, Stepper , Step ,StepLabel, Typography } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './Image.css';
import Dashboard1 from "./Dashboard1";

var valuesOfJobPost="";
var valueOfImage="";
var valueOfQualification="";

function GetSteps(){
    return [
      "Job Information",
      "Requirements",
      "Finish",
    ]
  }
  function GetContent(step){
    const [qualificationList, setQualificationList] = useState([{ qualification: "" }]);
    const [selectedImages, setSelectedImages] = useState([]);
    const [jobpost,setJobPost]=useState({
      JobTitle:"",JobDes:"",Responsibilities:"",Department:"",Location:"",Salary:"",Mode:""
    });
    valuesOfJobPost=jobpost;
    valueOfImage=selectedImages;
    valueOfQualification =qualificationList;

    const handleSubmit=(e)=>{
      const { name, value } = e.target;
      setJobPost({...jobpost, [name]:value});} 

    const handleQualificationChange = (e, index) => {
      const { name, value } = e.target;
      const list = [...qualificationList];
      list[index][name] = value;
      setQualificationList(list);
    };
    const handleQualificationRemove = (index) => {
      const list = [...qualificationList];
      list.splice(index, 1);
      setQualificationList(list);
    };
    const handleQualificationAdd = () => {
      setQualificationList([...qualificationList, { qualification: "" }]);
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
        + Upload Job Poster
        <br />
        <input  className="invisible"
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
            id="job-title"
            required
            fullWidth
            label="Job Title"
            margin="normal"
            variant="standard"
            name="JobTitle"
            value={jobpost.JobTitle}
            onChange={handleSubmit}
          />
          <TextField
            id="job-des"
            required
            fullWidth
            multiline
            label="Job Brief"
            rows={3}
            placeholder="Briefly describe the position."
            variant="standard"
            name="JobDes"
            value={jobpost.JobDes}
            onChange={handleSubmit}
          />
            <TextField
            id="responsibility"
            name="Responsibilities"
            required
            fullWidth
            multiline
            label="Responsibilities"
            rows={3}
            placeholder="Briefly describe job responsibilities"
            variant="standard"
            value={jobpost.Responsibilities}
            onChange={handleSubmit}
          />
          <TextField
            id="department"
            required
            fullWidth
            label="Department"
            margin="normal"
            variant="standard"
            name="Department"
            value={jobpost.Department}
            onChange={handleSubmit}
          />
           <TextField
            id="location"
            name="Location"
            fullWidth
            label="Location"
            margin="normal"
            variant="standard"
            value={jobpost.Location}
            onChange={handleSubmit}
            
          />
          <TextField
            id="salary"
            name="Salary"
            label="Salary"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            fullWidth
            required
            value={jobpost.Salary}
            onChange={handleSubmit}
          />
          <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
        <InputLabel  id="job-mode">Job Type</InputLabel>
        <Select
          labelId="selec-job-mode"
          id="demo-select-job-mode"
          name="Mode"
          value={jobpost.Mode}
          onChange={handleSubmit}
          label="Job Type"
          
        >
          <MenuItem value={1}>Remote</MenuItem>
          <MenuItem value={2}>Office</MenuItem>
          <MenuItem value={3}>Hybrid</MenuItem>
        </Select>
      </FormControl>
      
          </>
          )
      case 1:
        return(
          <>
          <form className="App" autoComplete="off">
              <div className="form-field">
                <label htmlFor="service">Qualification and Skill(s)</label>
                {qualificationList.map((singleService, index) => (
                  <div key={index} className="services">
                    <div>
                      <TextField
                    name="qualification"
                    id="qualification/skill"
                    size="small"
                    value={singleService.service}
                    onChange={(e) => handleQualificationChange(e, index)}
                    required
                    fullWidth
                    label="Qualification/Skill"
                    margin="normal"
                    variant="standard"
                  />
                   
                    </div>
                    <div>
                      {qualificationList.length !== 1 && (
                        <Button
                        variant="contained"
                        size="small"
                        color="primary"
                        onClick={() => handleQualificationRemove(index)}>
                        Remove
                      </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleQualificationAdd}>
                        Add
                      </Button></div>
            </form>
          </>
        )
      case 2:
        return(
          <>
          
          
          </>
        )
        default: return ""
    }
  }
const Postjob = () => {
    const [activeStep, setActiveStep] = useState(0)
    const steps = GetSteps()
    const handleNext = () =>{
      setActiveStep(activeStep + 1)
     
    }
    const handleBack = () =>{
      setActiveStep(activeStep - 1)
    }
    const PostData= async (e) => {
      // e.preventDefault();
      const {JobTitle,JobDes,Responsibilities,Department,Location,Salary,Mode}=valuesOfJobPost;
      const image = valueOfImage;
      
      console.log(valuesOfJobPost);
      console.log(valueOfQualification);
      console.log(valueOfImage);
      
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
      <Dashboard1 />
            <div>

                <main role="main" className="col-md-9 ms-sm-auto col-lg-10 px-4">
                    {/* <h1>hello world</h1> */}
                    <h3>Candidates</h3>
                    <hr /> 
  <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          
          
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>
          <form form method="POST" onSubmit={PostData}>{GetContent(activeStep)}</form>
          <Button
            
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            back
          </Button>
          <Button
            
            variant="contained"
            color="primary"
            onClick={activeStep === steps.length - 1 ? PostData : handleNext}
          >
            {activeStep === steps.length - 1 ? "Submit" : "Next"}
          </Button>
        </>
      )}
    </div>
    </main>
    </div>
    </div>
    </>
  );
};

export default Postjob
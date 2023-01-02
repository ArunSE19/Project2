import React , {useState} from "react"; 
import { TextField, Button, Stepper , Step ,StepLabel, Typography } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './Image.css';
// import Dashboard from "./Dashboard";
import Dashboard1 from "./Dashboard1";

function GetSteps(){
    return [
      "Job Information",
      "Requirements",
      "Finish",
    ]
  }
  function GetContent(step){
    const [serviceList, setServiceList] = useState([{ service: "" }]);
    const [mode, setMode] = useState('');
    const [selectedImages, setSelectedImages] = useState([]);
    const handleServiceChange = (e, index) => {
      const { name, value } = e.target;
      const list = [...serviceList];
      list[index][name] = value;
      setServiceList(list);
    };
    const handleServiceRemove = (index) => {
      const list = [...serviceList];
      list.splice(index, 1);
      setServiceList(list);
    };
    const handleServiceAdd = () => {
      setServiceList([...serviceList, { service: "" }]);
    };

    
    const handleChangeMode = (event) => {
      setMode(event.target.value);
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
            name="job-title"
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
            id="department"
            required
            fullWidth
            label="Department"
            margin="normal"
            variant="standard"
            name="department"
          />
           <TextField
            id="location"
            fullWidth
            label="Location"
            margin="normal"
            variant="standard"
            name="location"
          />
          <TextField
            id="salary"
            label="Salary"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            fullWidth
            required
          />
          <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
        <InputLabel  id="job-mode">Job Type</InputLabel>
        <Select
          labelId="selec-job-mode"
          id="demo-select-job-mode"
          value={mode}
          label="Job Type"
          onChange={handleChangeMode}
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
                {serviceList.map((singleService, index) => (
                  <div key={index} className="services">
                    <div>
                      <TextField
                    name="qualification/skill"
                    id="qualification/skill"
                    size="small"
                    value={singleService.service}
                    onChange={(e) => handleServiceChange(e, index)}
                    required
                    fullWidth
                    label="Qualification/Skill"
                    margin="normal"
                    variant="standard"
                  />
                   
                    </div>
                    <div>
                      {serviceList.length !== 1 && (
                        <Button
                        variant="contained"
                        size="small"
                        color="primary"
                        onClick={() => handleServiceRemove(index)}>
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
                        onClick={handleServiceAdd}>
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
          <form>{GetContent(activeStep)}</form>
          <Button
            
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            back
          </Button>
        
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

export default Postjob
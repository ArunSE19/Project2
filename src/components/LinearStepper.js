import React , {useState} from "react"; 
import { TextField, Button, Stepper , Step ,StepLabel, Typography } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Dashboard from './Dashboard'
import './Image.css';
import './Lesson.css';

function GetSteps(){
    return [
      "Basic Information",
      "Pre-requisite",
      "Outcome",
      "Pricing",
      "Media",
      "Lesson",
      "SEO",
      "Finish",
    ]
  }
  function GetContent(step){
    const [serviceList, setServiceList] = useState([{ service: "" }]);
    const [level, setLevel] = useState('');
    const [cate, setCate] = useState('');
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
  const handleChangeLevel = (event) => {
      setLevel(event.target.value);
    };
  const handleChangeCate = (event) => {
      setCate(event.target.value);
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
          <TextField
            id="course-title"
            required
            fullWidth
            label="Course Title"
            margin="normal"
            variant="standard"
            name="coursetitle"
          />
           <TextField
            id="short-des"
            required
            fullWidth
            multiline
            label="Short Description"
            rows={3}
            placeholder="Briefly describe the course"
            variant="standard"
          />
          <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
        <InputLabel  id="level">Level</InputLabel>
        <Select
          labelId="selec-level"
          id="demo-select-level"
          value={level}
          label="Level"
          onChange={handleChangeLevel}
        >
          
          <MenuItem value={1}>Beginner</MenuItem>
          <MenuItem value={2}>Intermediate</MenuItem>
          <MenuItem value={3}>Advanced</MenuItem>
        </Select>
      </FormControl>
    <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
        <InputLabel  id="cate">Category</InputLabel>
        <Select
          labelId="selec-cate"
          id="demo-select-cate"
          value={cate}
          label="Category"
          onChange={handleChangeCate}
        >
      
          <MenuItem value={1}>Technology</MenuItem>
          <MenuItem value={2}>Business</MenuItem>
          <MenuItem value={3}>Marketing</MenuItem>
        </Select>
      </FormControl>
          </>
          )
      case 1:
        return(
          <>
          <TextField
          id="req"
          label="Requirements"
          variant="standard"
          placeholder="Enter pre-requists of the course."
          fullWidth
          margin="normal"
          name="req"
        />
          </>
        )
      case 2:
        return(
          <>
          <TextField
          id="outcomes"
          label="Outcome"
          variant="standard"
          placeholder="Enter the outcome of this course."
          fullWidth
          required
          margin="normal"
          name="outcomes"
        />
          </>
        )
      case 3:
        return(
          <>
            <TextField
            id="c-price"
            label="Price"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            fullWidth
            required
          />
          </>
        )
      case 4:
        return(
          <>
           <TextField
          id="c-url"
          fullWidth
          required
          label="Course overview url"
          variant="standard"
          placeholder="Enter the course overview video's url."
          margin="normal"
          name="c-url"
        />
        <div> <section>
      <label className="box">
        + Upload Cover
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
       
          </>
        )
      case 5:
          return(
            <>
          <form className="App" autoComplete="off">
              <div className="form-field">
                <label htmlFor="service">Lesson(s)</label>
                {serviceList.map((singleService, index) => (
                  <div key={index} className="services">
                    <div>
                      <TextField
                    name="lesson"
                    id="lesson"
                    size="small"
                    value={singleService.service}
                    onChange={(e) => handleServiceChange(e, index)}
                    required
                    fullWidth
                    label="Lesson Title"
                    margin="normal"
                    variant="standard"
                  />
                  <TextField
                    name="lesson-url"
                    id="lesson-url"
                    size="small"
                    value={singleService.service}
                    onChange={(e) => handleServiceChange(e, index)}
                    required
                    fullWidth
                    placeholder="Enter lesson url."
                    label="Lesson URL"
                    margin="normal"
                    variant="standard"
                  />
                  <TextField
                    id="lesson-des"
                    size="small"
                    required
                    fullWidth
                    multiline
                    onChange={(e) => handleServiceChange(e, index)}
                    label="Lesson Description"
                    rows={3}
                    placeholder="Briefly describe the lesson."
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
                        Add lesson
                      </Button></div>
            </form>
        
            </>
          )
      case 6:
        return(
          <>
          <TextField
          id="keywords"
          fullWidth
          label="Meta Keywords"
          variant="standard"
          placeholder="Enter course keywords "
          margin="normal"
          name="keywords"
        />
        <TextField
            id="meta-des"
            fullWidth
            multiline
            label="Meta Description"
            rows={3}
            placeholder="Enter meta description of the course"
            variant="standard"
          />
          </>
        )
      case 7:
        return(
          <></>
        )
        default: return ""
    }
  }
const LinearStepper = () => {
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
    <>
    <div>
      <Dashboard />
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
  </>
  )
}

export default LinearStepper
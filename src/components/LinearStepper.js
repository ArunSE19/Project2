import React , {useState} from "react"; 
import { TextField, Button, Stepper , Step ,StepLabel, Typography } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Dashboard from './Dashboard'
import './Image.css';
import './Lesson.css';

var valueOfCourse="";
var valueOfImage="";
var valueOfLesson ="";

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
    const [serviceList, setServiceList] = useState([{ lesson:"" , lessonUrl:"" , lessonDes:"" }]);
    const [selectedImages, setSelectedImages] = useState([]);
    const [course,setCourse]=useState({
      courseTitle:"",courseShortDes:"",courseLevel:"",courseCategory:"",courseRequirement:"",courseOutcomes:"",coursePrice:"",courseURL:"",courseKeywords:"",courseMetaDes:""
    });
   
    valueOfCourse = course;
    valueOfImage =  selectedImages;
    valueOfLesson = serviceList;
       // console.log(course);
    // console.log(selectedImages);
    // console.log(serviceList);
    const handleSubmit=(e)=>{
      const { name, value } = e.target;
      setCourse({...course, [name]:value});}

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
        setServiceList([...serviceList, { lesson:"" , lessonUrl:"" , lessonDes:""  }]);
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
            name="courseTitle"
            required
            fullWidth
            label="Course Title"
            margin="normal"
            variant="standard"
            value={course.courseTitle}
            onChange={handleSubmit}
          />
           <TextField
            id="short-des"
            name="courseShortDes"
            required
            fullWidth
            multiline
            label="Short Description"
            rows={3}
            placeholder="Briefly describe the course"
            variant="standard"
            value={course.courseShortDes}
            onChange={handleSubmit}
          />
          <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
        <InputLabel  id="level">Level</InputLabel>
        <Select
          labelId="selec-level"
          id="demo-select-level"
          name="courseLevel"
          label="Level"
          value={course.courseLevel}
          onChange={handleSubmit}
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
          name="courseCategory"
          label="Category"
          value={course.courseCategory}
          onChange={handleSubmit}
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
          name="courseRequirement"
          label="Requirements"
          variant="standard"
          placeholder="Enter pre-requists of the course."
          fullWidth
          margin="normal"
          value={course.courseRequirement}
          onChange={handleSubmit}
        />
          </>
        )
      case 2:
        return(
          <>
          <TextField
          id="outcomes"
          name="courseOutcomes"
          label="Outcome"
          variant="standard"
          placeholder="Enter the outcome of this course."
          fullWidth
          required
          margin="normal"
          value={course.courseOutcomes}
          onChange={handleSubmit}
        />
          </>
        )
      case 3:
        return(
          <>
            <TextField
            id="c-price"
            name="coursePrice"
            label="Price"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            fullWidth
            required
            value={course.coursePrice}
            onChange={handleSubmit}
          />
          </>
        )
      case 4:
        return(
          <>
           <TextField
          id="c-url"
          name="courseURL"
          fullWidth
          required
          label="Course overview url"
          variant="standard"
          placeholder="Enter the course overview video's url."
          margin="normal"
          value={course.courseURL}
          onChange={handleSubmit}
        />
        <div> <section>
      <label className="box">
        + Upload Cover
        <br />
        <input className="invisible"
          type="file"
          name="courseImages"
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
                      value={singleService.lesson}
                      onChange={(e) => handleServiceChange(e, index)}
                      required
                      fullWidth
                      label="Lesson Title"
                      margin="normal"
                      variant="standard"
                    />
                    <TextField
                      name="lessonUrl"
                      id="lesson-url"
                      size="small"
                      value={singleService.lessonUrl}
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
                      name = "lessonDes"
                      required
                      fullWidth
                      multiline
                      value={singleService.lessonDes}
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
          name="courseKeywords"
          fullWidth
          label="Meta Keywords"
          variant="standard"
          placeholder="Enter course keywords "
          margin="normal"
          value={course.courseKeywords}
          onChange={handleSubmit}
        />
        <TextField
            id="meta-des"
            name="courseMetaDes"
            fullWidth
            multiline
            label="Meta Description"
            rows={3}
            placeholder="Enter meta description of the course"
            variant="standard"
            value={course.courseMetaDes}
            onChange={handleSubmit}
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
    const PostData= async (e) => {
      // e.preventDefault();
      // const {courseTitle,courseShortDes,courseLevel,courseCategory,courseRequirement,courseOutcomes,
      //   coursePrice,courseURL,courseImages,courseKeywords,courseMetaDes}=valueOfCourse;
//      const image = valueOfImage;
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
          <form method="POST" onSubmit={PostData}>{GetContent(activeStep)}
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
          </form>
        </>
      )}
    </main>
    </div>
    </div>
  </>
  )
}

export default LinearStepper
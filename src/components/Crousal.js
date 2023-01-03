import React from 'react'
import "./Crousal.css"
import { Link } from 'react-router-dom'
// import $ from 'jquerry'
const Crousal = () => {
    return (
    <>    
    <div className="carousel slide" data-bs-ride="carousel" id="carouselExampleIndicators">
		<div className="carousel-indicators">
			<button aria-label="Slide 1" className="active" data-bs-slide-to="0" data-bs-target="#carouselExampleIndicators" type="button"></button> <button aria-label="Slide 2" data-bs-slide-to="1" data-bs-target="#carouselExampleIndicators" type="button"></button> <button aria-label="Slide 3" data-bs-slide-to="2" data-bs-target="#carouselExampleIndicators" type="button"></button>
		</div>
		<div className="carousel-inner">
			<div className="carousel-item active">
				<img alt="..." className="d-block w-100" src="student.jpg"/>
				<div className="carousel-caption">
					<h5>Study With Comfort</h5>
					<p>Study whether at college, cafe , or at home and get hired. All you need is dedication to learn and our companionship.</p>
					<p><Link className="btn btn-primary mt-3" to="/">Learn More</Link></p>
				</div>
			</div>
			<div className="carousel-item">
				<img alt="..." className="d-block w-100" src="teacher.jpg"/>
				<div className="carousel-caption">
					<h5>Teach Flexibly</h5>
					<p>Teach from anywhere. All you need is a camera and motivation to serve the society through our platform. </p>
					<p><a className="btn btn-primary mt-3" href="/">Learn More</a></p>
				</div>
			</div>
			<div className="carousel-item">
				<img alt="..." className="d-block w-100" src="recruiter.jpg"/>
				<div className="carousel-caption">
					<h5>Hire Efficiently</h5>
					<p>Hiring becomes easier with our platform. We bring you the best candidates to elevate your bussiness to new heights.</p>
					<p><a className="btn btn-primary mt-3" href="/">Learn More</a></p>
				</div>
			</div>
		</div><button className="carousel-control-prev" data-bs-slide="prev" data-bs-target="#carouselExampleIndicators" type="button"><span aria-hidden="true" className="carousel-control-prev-icon"></span> <span className="visually-hidden">Previous</span></button> <button className="carousel-control-next" data-bs-slide="next" data-bs-target="#carouselExampleIndicators" type="button"><span aria-hidden="true" className="carousel-control-next-icon"></span> <span className="visually-hidden">Next</span></button>
	</div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
    )
}

export default Crousal

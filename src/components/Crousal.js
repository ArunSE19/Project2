import React from 'react'
import "./Crousal.css"
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
					<h5>Your Dream House</h5>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</p>
					<p><a className="btn btn-primary mt-3" href="/">Learn More</a></p>
				</div>
			</div>
			<div className="carousel-item">
				<img alt="..." className="d-block w-100" src="teacher.jpg"/>
				<div className="carousel-caption">
					<h5>Always Dedicated</h5>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</p>
					<p><a className="btn btn-primary mt-3" href="/">Learn More</a></p>
				</div>
			</div>
			<div className="carousel-item">
				<img alt="..." className="d-block w-100" src="recruiter.jpg"/>
				<div className="carousel-caption">
					<h5>True Construction</h5>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</p>
					<p><a className="btn btn-primary mt-3" href="/">Learn More</a></p>
				</div>
			</div>
		</div><button className="carousel-control-prev" data-bs-slide="prev" data-bs-target="#carouselExampleIndicators" type="button"><span aria-hidden="true" className="carousel-control-prev-icon"></span> <span className="visually-hidden">Previous</span></button> <button className="carousel-control-next" data-bs-slide="next" data-bs-target="#carouselExampleIndicators" type="button"><span aria-hidden="true" className="carousel-control-next-icon"></span> <span className="visually-hidden">Next</span></button>
	</div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
    )
}

export default Crousal

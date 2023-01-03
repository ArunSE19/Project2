import React from 'react'
import './Crousal.css'
const Team = () => {
  return (
    <>
    <section className="team section-padding" id="team">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="section-header text-center pb-5">
						<h2>Our Team</h2>
						<p>The core team behind the <br/>
						success of EarnFromLearn.</p>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-12 col-md-6 col-lg-4">
					<div className="card text-center">
						<div className="card-body">
							<img  alt="" className="img-fluid" src="Arun_.jpg"/>
							<h3 className="card-title py-2">Arun</h3>
							<p className="card-text">A firm believer of teamwork with a passion to streamline and smoothen processes by managing people and other resources to achieve business goals; with critical analysis, aims to turn problems into opportunities using technology as a tool.</p>
							<p className="socials"><i className="bi bi-twitter text-dark mx-1"></i> <i className="bi bi-facebook text-dark mx-1"></i> <i className="bi bi-linkedin text-dark mx-1"></i> <i className="bi bi-instagram text-dark mx-1"></i></p>
						</div>
					</div>
				</div>
				<div className="col-12 col-md-6 col-lg-4">
					<div className="card text-center">
						<div className="card-body">
							<img alt="" className="img-fluid" src="Aisha_.jpeg"/>
							<h3 className="card-title py-2">Aisha Anwar</h3>
							<p className="card-text">A keen learner and passionate front-end developer. One who focuses on details and perfection, understands design, keeping in view the perpective of the end users.</p><br/><br/>
							<p className="socials"><i className="bi bi-twitter text-dark mx-1"></i> <i className="bi bi-facebook text-dark mx-1"></i> <i className="bi bi-linkedin text-dark mx-1"></i> <i className="bi bi-instagram text-dark mx-1"></i></p>
						</div>
					</div>
				</div>
				<div className="col-12 col-md-6 col-lg-4">
					<div className="card text-center">
						<div className="card-body">
							<img alt="" className="img-fluid" src="Manan1.jpeg"/>
							<h3 className="card-title py-2">Abdul Manan</h3>
							<p className="card-text">An aspiring software engineer with a motive to drive efficient solutions to critical problems. A tech geek with unmatchable skills. One who has solutions to all your technical problems; the man behind the efficient execution of technology behind EarnFromLearn.</p>
							<p className="socials"><i className="bi bi-twitter text-dark mx-1"></i> <i className="bi bi-facebook text-dark mx-1"></i> <i className="bi bi-linkedin text-dark mx-1"></i> <i className="bi bi-instagram text-dark mx-1"></i></p>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	</section>
    </>
  )
}

export default Team

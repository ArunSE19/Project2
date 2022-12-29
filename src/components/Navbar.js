import React from 'react'
import { Link } from 'react-router-dom'
import './Crousal.css'
const Navbar = () => {
    return (
        <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
		<div className="container">
			<Link className="navbar-brand brand" to="/"><span className="text-primary">Earn</span><span className="text-dark">From</span><span className="text-primary">Learn</span></Link><button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse" type="button"><span className="navbar-toggler-icon"></span></button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
					<li className="nav-item">
						<Link className="nav-link active" aria-current="page" to="/">Home</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/Signin">Login</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/Signup">SignUp</Link>
					</li>
				</ul>
			</div>
		</div>
	</nav>

            
        </>
    )
}
export default Navbar

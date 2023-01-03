import React from 'react'
import './Crousal.css'
const Service = () => {
    return (
        <>
            <div>
                <section className="services section-padding" id="services">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-header text-center pb-5">
                                    <h2>Our Services</h2>
                                    <p>We believe in three<br/>
                                    core principles of work ethics.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-4">
                                <div className="card text-white text-center bg-dark pb-2">
                                    <div className="card-body">
                                        <i className="bi bi-laptop"></i>
                                        <h3 className="card-title">Best Quality</h3>
                                        <p className="lead">Quality is what we stand for. Our product is never compromised on quality on any grounds. We ensure quality through throughly reviewed educational content and an competitive selection criteria for job shortlisting.</p><button className="btn bg-primary text-dark">Read More</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-4">
                                <div className="card text-white text-center bg-dark pb-2">
                                    <div className="card-body">
                                        <i className="bi bi-journal"></i>
                                        <h3 className="card-title">Sustainability</h3>
                                        <p className="lead">Sustainability makes a company stay for long and make a mark in the industry. We have achieved sustainability through reduced bussiness cost and innovative strategies.</p><br/><button className="btn bg-primary text-dark">Read More</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-4">
                                <div className="card text-white text-center bg-dark pb-2">
                                    <div className="card-body">
                                        <i className="bi bi-intersect"></i>
                                        <h3 className="card-title">Integrity</h3>
                                        <p className="lead">Integrity is what has made us stand out for so many years. our customers have stayed with us for our tranparency and commitment which has lead to greater integrity.</p><br/><br/><button className="btn bg-primary text-dark">Read More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>

    )
}

export default Service

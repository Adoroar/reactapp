import React from 'react'

const Features = () => {
  return (
    <section className="features">
            <div className="container grid-container">
                
                <div className="features-leftside">
                    <h2 className="feature-title">Features</h2>
                    <div className="second-title">Our Accounting Is<br />Trusted By Thousands<br /> Of Companies</div>
                    <div className="button-learnmore">
                        <a href="feature.html" className="btn-long-yellow">Learn More<i className="fa-regular fa-arrow-up-right"></i></a>
                    </div>
                </div>
                <div className="features-rightside">
                    <div className="custom-card">
                        <div className="card-body">
                            <i className="fa-regular fa-handshake"></i>
                            <h5 className="card-title">Business Advice</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error id esse ipsam ex.</p>
                        </div>
                    </div>
                    <div className="custom-card">
                        <div className="card-body">
                            <i className="fa-regular fa-lightbulb-exclamation-on"></i>
                            <h5 className="card-title">Startup Business</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error id esse ipsam ex.</p>
                        </div>
                    </div>
                    <div className="custom-card">
                        <div className="card-body">
                            <i className="fa-sharp fa-light fa-chart-mixed-up-circle-dollar"></i>
                            <h5 className="card-title">Financial Advice</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error id esse ipsam ex.</p>
                        </div>
                    </div>
                    <div className="custom-card">
                        <div className="card-body">
                            <i className="fa-solid fa-toolbox"></i>
                            <h5 className="card-title">Risk Management</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error id esse ipsam ex.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Features
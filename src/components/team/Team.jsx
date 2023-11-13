import React from 'react'
import img_Slide1 from '../../assets/images/christina-wocintechchat-com-SJvDxw0azqw-unsplash.jpg'
import img_Slide2 from '../../assets/images/itay-verchik-6ZKGBzrDd3I-unsplash.jpg'
import img_Slide3 from '../../assets/images/christina-wocintechchat-com-Zpzf7TLj_gA-unsplash.jpg'
import img_Slide4 from '../../assets/images/the-connected-narrative-N8lRH2uxih4-unsplash.jpg'
import Testimonial from '../testimonial/Testimonial'



const Team = () => {
  return (
    <section className="team-section">
        <div className="header-container">
            <h6>Meet Our Team</h6>
            <h1>Team Members Experience </h1>
            <button className="browse-team-btn">
                Browse Team <i className="fa-solid fa-arrow-trend-up"></i>
            </button>
        </div>
        <div className="carousel">
            <div className="carousel-slides">
                <div>
                    <img src={img_Slide1} alt="Slide 1"/>
                    <div>
                        <strong>Kristine Palmer</strong>
                        <p className="client-description">Chef Operation Officer</p>
                    </div>
                </div>   
                <div>
                    <img src={img_Slide2} alt="Slide 2"/>
                    <div>
                        <strong>Mark Aubri</strong>
                        <p className="client-description">Senior Consultant</p>
                    </div>
                </div>
                <div>
                    <img src={img_Slide3} alt="Slide 3"/>
                    <div>
                        <strong>Kimberly Hansen</strong>
                        <p className="client-description">Senior Consultant</p>
                    </div>
                </div>
                <div>
                    <img src={img_Slide4} alt="Slide 4"/>
                    <div>
                        <strong>Justin Willoman</strong>
                        <p className="client-description">Senior Tech Consultant</p>
                    </div>
                </div>
                <div className="carousel-indicators">
                    <span className="active"></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
        <Testimonial/>
    </section>
  )
}

export default Team
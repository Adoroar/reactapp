import React from 'react'
import img_Samantha_Brown from '../../assets/images/Samantha Brown.jpg'

const About_company = () => {
  return (
    <section className="about-company">
            <div className="container">
                <div className="left-side">
                    <img src={img_Samantha_Brown} alt="Samantha_Brown"/>
                    <div className="blue-box">
                        <h2>Samantha Brown, <span className="title">Founder</span></h2>
                        <p>Lorem ipsum lorem ipsum</p>
                    </div>
                </div>
                <div className="right-side">
                    <h6>About Company</h6>
                    <h1>We Are Business <br /> Consulting & Credit <br /> Repair Experts</h1>
                    <div className="subtext">
                        <p />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, tempora, adipisicing elit. Numquam, tempora <p />
                    </div>
                    <a className="btn-black">Learn More <i className="fa-solid fa-arrow-trend-up"></i></a>
                    <a href="path_to_your_video.mp4" className="introvideo"><i className="fa-regular fa-circle-play"></i>Intro Video</a>
                </div>
            </div>
        </section>
  )
}

export default About_company
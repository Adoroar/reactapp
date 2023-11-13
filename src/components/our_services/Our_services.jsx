import React from 'react'
import img_backgroundlinesright from '../../assets/images/background-lines-right.svg'

const Our_services = () => {
  return (
    <section className="our-services">
            <div className="container">
                <h6 className="titel"> Our Services</h6>
                <h1>We Provide The Best<br /> Service for Consulting</h1>
                <div className="content-box">
                    <div className="tile white-tile">
                        <div className="decorative-stripe"></div>
                        <h6>Business Advice</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias deleniti voluptatibus odit molestiae error temporibus atque velit. </p>
                        <a href="din_länk_här" className="btn-circle-black" role="button"><i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className="tile white-tile">
                        <div className="decorative-stripe"></div>
                        <h6>Startup Business</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias deleniti voluptatibus odit molestiae error temporibus atque velit.</p>
                        <a href="din_länk_här" className="btn-circle-black" role="button"><i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className="tile white-tile">
                        <div className="decorative-stripe"></div>
                        <h6>Financial Advice</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias deleniti voluptatibus odit molestiae error temporibus atque velit.</p>
                        <a href="din_länk_här" className="btn-circle-black" role="button"><i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className="tile white-tile">
                        <div className="decorative-stripe"></div>
                        <h6>Risk Management</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias deleniti voluptatibus odit molestiae error temporibus atque velit.</p>
                        <a href="din_länk_här" className="btn-circle-black" role="button"><i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <a href="din_länk_här" className="btn-transparent" role="button">Browse services <i className="fa-solid fa-arrow-trend-up"></i></a>
            </div>
                <img className="image-our-services" src={img_backgroundlinesright} alt=""/>
            
        </section>
  )
}

export default Our_services
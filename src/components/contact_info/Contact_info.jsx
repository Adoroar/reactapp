import React from 'react'

const Contact_info = () => {
  return (
    <section className="contact-section">
    <div className="content-container">
        <div className="info-section">
            <div className="info-box">
                <i className="fa-regular fa-location-dot"></i>
                <div className="text-section">
                    <h6>Visit Us</h6>
                    <p>Sveavägen 31</p>
                    <p>111 34 STOCKHOLM</p>
                </div>
            </div>
            <div className="info-box">
                <i className="fa-solid fa-mobile-retro"></i>
                <div className="text-section">
                    <h6>Call Us</h6>
                    <p>+46 (8) 121 470 50</p>
                    <p>+46 (8) 121 470 51</p>
                </div>
            </div>
            <div className="info-box">
                <i className="fa-regular fa-envelope"></i>
                <div className="text-section">
                    <h6>Email Us</h6>
                    <p>info@crito.com</p>
                    <p>support@crito.com</p>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Contact_info
import React from 'react'
import img_amy_hirschi from '../../assets/images/amy-hirschi-K0c8ko3e6AA-unsplash.jpg'

const Why_choose_us = () => {
  return (
    <section className="custom-section">
            <div className="container">
                <div className="left-column">
                    <h6>Why Choose Us</h6>
                    <h1>Why We Are The<br /> Best Business Consultant Agency</h1>
                    <div className="cards">
                        <div className="card">
                            <div className="text-container">
                                <h4><i className="fa-regular fa-thumbs-up"></i>Process Exellence</h4>
                                <p className="under-text">Lorem ipsum dolor sit amet consectetur .</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="text-container">
                                <h4><i className="fa-regular fa-chess-queen"></i>Strategic Planning</h4>
                                <p className="under-text">Lorem ipsum dolor sit amet consectetur .</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="text-container">
                                <h4><i className="fa-regular fa-gem"></i>Experience Design</h4>
                                <p className="under-text">Lorem ipsum dolor sit amet consectetur .</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="text-container">
                                <h4><i className="fa-solid fa-person-dots-from-line"></i>Artificial Inteligens</h4>
                                <p className="under-text">Lorem ipsum dolor sit amet consectetur .</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-column">
                    <div className="beige-box"></div>
                    <img src={img_amy_hirschi} alt="Beskrivande text" className="overlapping-image" />
                </div>
            </div>
        </section>
  )
}

export default Why_choose_us
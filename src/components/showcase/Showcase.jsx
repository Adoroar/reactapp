import React from 'react'
import img_man_in_suit from '../../assets/images/man in suit.svg'
import img_background_lines from '../../assets/images/background-lines.svg'

const Showcase = () => {
  return (
    <section className="showcase">
            <div className="container">
                <div className="content">
                    <h1>We Provide The Best Business Solutions</h1>
                    <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                    <a className="btn-yellow" href="consulting.hmtl">Get Consulting <i className="fa-regular fa-arrow-up-right"></i></a>
                    <a className="btn-transparent" href="services.hmtl">Learn More <i className="fa-regular fa-arrow-up-right"></i></a>
                </div>
                <img src={img_man_in_suit} alt="image of a man in a suit with a tablet"/>
            </div>
            <div className="showcase-wave-image">
                <img src={img_background_lines} alt=""/>
            </div>
        </section>
  )
}

export default Showcase
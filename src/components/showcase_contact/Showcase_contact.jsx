import React from 'react'
import img_backgroundlines from '../../assets/images/background-lines.svg'

const Showcase_contact = () => {
  return (
    <section className="showcase-contact">
        <div className="container">
            <div className="links-contact">
                <a className="toplinkhome" href="home.html">Home</a>
                <a className="toplinknews" href="news.html">News</a>
            </div>
            <h1> Lets Connect</h1>
            <div className="showcase-image-wayvy-lines">
                <img src={img_backgroundlines} alt=""/> 
            </div>
        </div>
    </section>
  )
}

export default Showcase_contact
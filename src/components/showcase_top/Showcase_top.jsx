import React from 'react';
import { Link } from 'react-router-dom';
import img_backgroundlines from '../../assets/images/background-lines.svg';

const Showcase_top = ({ title = 'Lets Connect' }) => {
  return (
    <section className="showcase-contact">
        <div className="container">
            <div className="links-contact">
                <Link className="toplinkhome" to="/home">Home</Link>
                <Link className="toplinknews" to="/news">News</Link>
            </div>
            <h1>{title}</h1>
            <div className="showcase-image-wayvy-lines">
                <img src={img_backgroundlines} alt=""  /> 
            </div>
        </div>
    </section>
  )
}

export default Showcase_top;

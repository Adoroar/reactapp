import React from 'react'
import img_critologotype from '../../assets/images/logotype.svg'
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
    <div className="container">
     <Link to="/"><img src={img_critologotype} alt="crito logotype"/></Link>
     <button className="menu-bars"><i className="fa-solid fa-bars-staggered"></i></button>
     <div className="menu">
         <div className="top-menu">
             <div className="contact-info">
                 <div className="contact-info-box">
                     <i className="fa-regular fa-phone-volume"></i>
                     +46 (8) 121 470 50
                 </div>
                 <div className="contact-info-box">
                     <i className="fa-regular fa-envelope"></i>        
                     info@crito.com
                 </div>
                 <div className="contact-info-box last">
                     <i className="fa-regular fa-location-dot"></i>
                     Sveavägen 31, 111 34 STOCKHOLM
                 </div>
             </div>
             <div className="social-media">
                 <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                 <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                 <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                 <a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                 
             </div>
         </div>
         <div className="main-menu">
             <nav>
                 <NavLink to="/">Home</NavLink>
                 <NavLink to="/services">Services</NavLink>
                 <NavLink to="/news">News</NavLink>
                 <NavLink to="/contacts">Contacts</NavLink>
             </nav>
             <a className="btn-yellow btn-login" href="login.html">Login <i className="fa-regular fa-arrow-up-right"></i></a>
         </div>
     </div>


    </div>
 </header>
  )
}

export default Header
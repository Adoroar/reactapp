import React from 'react'
import img_background_lines_right_side from '../../assets/images/background-lines-right.svg'
import img_logotypewhite from '../../assets/images/logotype-white.svg'

const Footer = () => {
  return (
    <footer>
        <section>
            <img className="background-lines-right" src={img_background_lines_right_side} alt="background-lines-right-side"/>
            <div className="container">
                <div className="logo-footer">
                    <img src={img_logotypewhite} alt="Crito-Consulting Company Inc."/>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum voluptatibus aspernatur error.</p>
                </div>
              <div>
                <h5>Company</h5>
                <ul>
                    <li><a href="/about">About</a></li>
                    <li><a href="/features">Features</a></li>
                    <li><a href="/work">Works</a></li>
                    <li><a href="/career">Career</a></li>
                </ul>
              </div>
              <div>
                <h5>Help</h5>
                <ul>
                    <li><a href="/support">Customer Support</a></li>
                    <li><a href="/delivery">Delivery Details</a></li>
                    <li><a href="/agreements/terms">Terms & Conditions</a></li>
                    <li><a href="/agreements/privacy">Privacy policy</a></li>
                </ul>
              </div>
              <div>
                <h5>Resources</h5>
                <ul>
                    <li><a href="/free/ebook">Free ebooks</a></li>
                    <li><a href="/tutorials/development">Development Tutorial</a></li>
                    <li><a href="/guides/how-to-blog">How to - blog</a></li>
                    <li><a href="/https://youtube.com" target="_blank">YouTube Playlist</a></li>
                </ul>
              </div>
              <div>
                <h5>Link</h5>
                <ul>
                    <li><a href="/free/ebook">Free ebooks</a></li>
                    <li><a href="/tutorials/development">Development Tutorial</a></li>
                    <li><a href="/guides/how-to-blog">How to - blog</a></li>
                    <li><a href="/https://youtube.com" target="_blank">YouTube Playlist</a></li>
                </ul>
              </div>
            </div>
            <div className="end-footer">
                <div className="end-footer-text">
                    © 2023 Crito - Consulting Company Inc.All Rights Reserved.
                </div>
                <div className="social-media">
                    <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
        </section>
 </footer>
  )
}

export default Footer
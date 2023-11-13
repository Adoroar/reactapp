import React from 'react'
import img_25mar from '../../assets/images/linkedin-sales-solutions-Mis5fyJi7Q0-unsplash.jpg'
import img_17mar from '../../assets/images/emiliano-vittoriosi-vEN1bsdSjxM-unsplash.jpg'
import img_11mar from '../../assets/images/kobu-agency-ipARHaxETRk-unsplash.jpg'

const Article_news = () => {
  return (
    <div className="wrapper-article">
    <div className="container-article">
        <div className="header-article">
            <div className="left">
                <h6>Article & News</h6>
                <h1>Get Every Single Article And News</h1>
            </div>
            <div className="right">
                <button className="button-article">
                    Browse Articles <i className="fa-solid fa-arrow-trend-up"></i>
                </button>
            </div>
        </div>
        <div className="carousel-article">
            <div className="carousel-wrapper">
                <div className="card-article">
                    <div className="date-stamp">25</div>
                    <div className="date-month">Mar</div>
                    <img src={img_25mar} alt="Image Description"/>
                    <p>Business</p>
                    <h6>How To Use Digitalization In The Classroom</h6>
                    <p>Lorem Ipsum, Lorem Ipsum.</p>
                </div>
                <div className="card-article">
                    <div className="date-stamp">17</div>
                    <div className="date-month">Mar</div>
                    <img src={img_17mar} alt="Image Description"/> 
                    <p>Business</p>
                    <h6>How To Use Digitalization In The Classroom</h6>
                    <p>Lorem Ipsum, Lorem Ipsum.</p>
                </div>
                <div className="card-article">
                    <div className="date-stamp">11</div>
                    <div className="date-month">Mar</div>
                    <img src={img_11mar} alt="Image Description"/> 
                    <p>Business</p>
                    <h6>How To Use Digitalization In The Classroom</h6>
                    <p>Lorem Ipsum, Lorem Ipsum.</p>
                </div>
            </div>
            <div className="carousel-article-news">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
</div>
  )
}

export default Article_news
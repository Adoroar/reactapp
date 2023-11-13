import React from 'react'
import img_ProjectImage1 from '../../assets/images/oli-dale-xjSkI_seiZY-unsplash.jpg'
import img_ProjectImage2 from '../../assets/images/marek-levak-zANXcXyByos-unsplash.jpg'
import img_ProjectImage3 from '../../assets/images/oli-dale-xjSkI_seiZY-unsplash.jpg'
import img_ProjectImage4 from '../../assets/images/carlos-muza-hpjSkU2UYSU-unsplash.jpg'

const Projects_and_cases = () => {
  return (
    <section className="project-section">           
            <div className="container">
                <h6>Project and Case Studies</h6>
                <h1>Lets Look At Our Global Projects</h1>               
                <div className="cards-container">
                    <div className="card">
                        <img src={img_ProjectImage1}alt="Project Image 1"/> 
                        <p>Grow your own business</p>
                        <hr />
                        <a href="#" className="read-more">Read More <i className="fa-solid fa-arrow-trend-up"></i></a>
                    </div>
                    <div className="card">
                        <img src={img_ProjectImage2} alt="Project Image 2"/>
                        <p>Why your client needs a responsive website </p>
                        <hr />
                        <a href="#" className="read-more">Read More <i className="fa-solid fa-arrow-trend-up"></i></a>
                    </div>
                    <div className="card">
                        <img src={img_ProjectImage3} alt="Project Image 3"/>
                        <p>Educate your employees to get better results</p>
                        <hr />
                        <a href="#" className="read-more">Read More <i className="fa-solid fa-arrow-trend-up"></i></a>
                    </div>
                    <div className="card">
                        <img src={img_ProjectImage4} alt="Project Image 4"/>
                        <p>Business insights is a important piece of your business</p>
                        <hr />
                        <a href="#" className="read-more">Read More <i className="fa-solid fa-arrow-trend-up"></i></a>
                    </div>
                </div>
                <a href="din_länk_här" className="projects-btn" role="button">
                    All Recent Projects <i className="fa-solid fa-arrow-trend-up"></i>
                </a>            
            </div>
        </section>
  )
}

export default Projects_and_cases
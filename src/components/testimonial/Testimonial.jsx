import React from 'react'
import img_Client1 from '../../assets/images/vince-veras-AJIqZDAUD7A-unsplash.jpg'
import img_Client2 from '../../assets/images/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg'
import img_Client3 from '../../assets/images/christina-wocintechchat-com-PlikkWB79qs-unsplash.jpg'

const Testimonial = () => {
  return (
    <div className="testimonial-container">
            <h6>Testimonial</h6>
            <h1>What Our Client Says</h1>
            <div className="testimonial-cards-container">
                <div className="testimonial-card">
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <p className="testimonial-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis accusantium, et libero aliquam a quo? Vitae dolore, vel nostrum dicta temporibus aspernatur voluptatem laudantium atque. Odio doloremque reiciendis doloribus deserunt.</p>
                    <div className="client-info">
                        <img src={img_Client1} alt="Client 1"/> 
                        <div>
                            <strong>Cassandra Warren</strong>
                            <p className="client-description">Business Manager, Dorfus</p>
                        </div>
                    </div>
                </div>
                <div className="testimonial-card">
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <p className="testimonial-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam corrupti porro illo illum incidunt dolores officiis, modi blanditiis nesciunt! Iusto pariatur quibusdam reprehenderit doloribus architecto! Laboriosam laborum aliquid sapiente nobis?</p>
                    <div className="client-info">
                        <img src={img_Client2} alt="Client 2"/> 
                        <div>
                            <strong>Amanda Tulling</strong>
                            <p className="client-description">Senior Developer, Square</p>
                        </div>
                    </div>
                </div>
                <div className="testimonial-card">
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <p className="testimonial-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore hic voluptas quas ab repellendus. Rem, esse repudiandae. Ratione aut, debitis necessitatibus eius, totam minima optio porro pariatur, quisquam laborum cum!</p>
                    <div className="client-info">
                        <img src={img_Client3} alt="Client 3"/> 
                        <div>
                            <strong>Jack McDogglas</strong>
                            <p className="client-description">Key Account Manager, Gobona</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="reviews-btn">
                All Reviews <i className="fa-solid fa-arrow-trend-up"></i>
            </button>
    </div>
  )
}

export default Testimonial
import React from 'react'

const Subscribe = () => {
  return (
    <section className="signup-section">
        <div className="signup-container">
            <h1>Get News Updates By Signup</h1>
            <input type="email" placeholder="username@domain.com"/>
            <button className="subscribe-btn">Subscribe <i className="fa-solid fa-arrow-trend-up"></i></button>
        </div>
    </section>
  )
}

export default Subscribe
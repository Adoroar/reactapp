import React from 'react'

const Contact_form = () => {
  return (
    <section>
    <div className="form-container">
        <h1>Contact Us For Any Questions</h1>
        <form id="contactForm">
            <input type="text" id="name" placeholder="Name*" required />
            <div id="name-error" className="error-message"></div>
            
            <input type="email" id="email" placeholder="Email*" required />
            <div id="email-error" className="error-message"></div>
            
            <textarea id="message" placeholder="Your Message*" required></textarea>
            <div id="message-error" className="error-message"></div>
            <button type="submit">Send</button>
        </form>
        <div id="thank-you-message" className="thank-you-message"></div>
    </div>
</section>
  )
}

export default Contact_form
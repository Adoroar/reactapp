import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const [responseType, setResponseType] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = 'Namn krävs.';
    if (!formData.email) {
      tempErrors.email = 'E-post krävs.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'E-post är ogiltig.';
    }
    if (!formData.message) tempErrors.message = 'Meddelande krävs.';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('Tack för ditt meddelande, vi hör av oss fort som möjligt.');
        setResponseType('success');
      } else {
        setMessage('Ett fel uppstod vid skickandet av formuläret.');
        setResponseType('error');
      }
    } catch (error) {
      setMessage('Ett fel uppstod vid kommunikation med servern.');
      setResponseType('error');
    }
  };

  return (
    <section>
      <div className="form-container">
        <h1>Contact Us For Any Questions</h1>
        <form id="contactForm" onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            placeholder="Name*"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <div id="name-error" className="error-message">{errors.name}</div>

          <input
            type="email"
            id="email"
            placeholder="Email*"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <div id="email-error" className="error-message">{errors.email}</div>

          <textarea
            id="message"
            placeholder="Your Message*"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <div id="message-error" className="error-message">{errors.message}</div>

          <div className={`message ${responseType}`}>{message}</div>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;

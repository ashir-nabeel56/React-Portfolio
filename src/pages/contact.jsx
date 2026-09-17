// import './Contact.css';

import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Apna WhatsApp number yahan country code ke sath, bina + ya 0 ke
  // Pakistan number 0313-0309189 ban jayega: 923130309189
  const WHATSAPP_NUMBER = "03130309189";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `New message from portfolio:%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;

    window.open(whatsappUrl, "_blank");

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Career opportunities ya collaboration ke liye message karein.</p>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input 
              type="text" 
              id="name" 
              placeholder="Enter Your Name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="input-group">
            <input 
              type="email" 
              id="email" 
              placeholder="Email Address" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="input-group">
            <textarea 
              id="message" 
              rows="5" 
              placeholder="Type Your Message.......... " 
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
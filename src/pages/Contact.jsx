import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-left">
          <h2>Contact us</h2>
          <p><i className="fas fa-paper-plane"></i> ayushigupta5664@gmail.com</p>
          <p><i className="fas fa-phone"></i> 8126833427</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
           
          </div>
        </div>

        <div className="contact-right">
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="6" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

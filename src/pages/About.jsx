import React from 'react';
import './About.css';  // Import a CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
       
        <p>Your one-stop destination for quality products</p>
      </header>
      <section className="about-content">
        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            We started with a simple mission: to provide high-quality, affordable products for everyone. 
            Since then, we’ve grown into a trusted brand known for reliability, excellent customer service, and innovation.
          </p>
        </div>
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our goal is to make online shopping easy, secure, and enjoyable. We handpick every item in our store, ensuring 
            that you receive only the best. We aim to deliver an exceptional experience that exceeds your expectations.
          </p>
        </div>
        <div className="about-section">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Wide selection of premium products</li>
            <li>Affordable prices</li>
            <li>Fast, secure shipping</li>
            <li>Dedicated customer support</li>
          </ul>
        </div>
      </section>
      <footer className="about-footer">
        <p>Join our community and shop with confidence!</p>
        
      </footer>
    </div>
  );
};

export default About;

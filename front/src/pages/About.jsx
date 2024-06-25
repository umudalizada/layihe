import React from 'react';
import './assets/scss/About.scss';
import backgroundVideo from '../assets/videos/about.mp4';

const About = () => {
  return (
    <section id="about">
      <video autoPlay muted loop className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>About Us</h1>
        <div className="about-grid">
          <div className="about-section">
            <h2>Our Mission</h2>
            <p>To provide the ultimate cinematic experience with cutting-edge technology and exceptional customer service.</p>
          </div>
          <div className="about-section">
            <h2>Our Vision</h2>
            <p>To be the leading cinema destination, combining entertainment with innovation and excellence.</p>
          </div>
          <div className="about-section">
            <h2>History</h2>
            <p>Founded in 2024, we have grown from a single theater to a network of cinemas across Baku/Khalglar M/s.</p>
          </div>
          <div className="about-section">
            <h2>Services</h2>
            <p>We offer a wide range of movies, VIP seating, advanced sound systems, and a gourmet concessions stand.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

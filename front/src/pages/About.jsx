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
        <h1>Welcome to Our Movie Experience</h1>
        <p className="lead">
          Discover the story behind our journey to becoming Baku's premier cinema destination.
        </p>
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
            <h2>Our History</h2>
            <p>Founded in 2024, we have grown from a single theater to a network of cinemas across Baku/Khalglar M/s.</p>
            <p>With a passion for movies and a commitment to quality, we continue to expand and innovate.</p>
          </div>
          <div className="about-section">
            <h2>Our Services</h2>
            <p>We offer a wide range of movies, VIP seating, advanced sound systems, and a gourmet concessions stand.</p>
            <p>Experience comfort and luxury with our premium amenities designed for your enjoyment.</p>
          </div>
        </div>
        <div className="additional-info">
          <h2>Why Choose Us?</h2>
          <p>At our cinemas, every visit is an experience. From the latest blockbusters to exclusive events, we cater to all movie lovers.</p>
          <p>Explore our state-of-the-art facilities and immerse yourself in the world of cinema like never before.</p>
        </div>
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>
            Address: 123 Movie Avenue, Baku, Azerbaijan
            <br />
            Phone: +123 456 7890
            <br />
            Email: info@yourcinema.com
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

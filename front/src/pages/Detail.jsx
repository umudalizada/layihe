import React, { useState } from 'react';
import "./assets/scss/Detail.scss";

const Detail = () => {
  const [showContent, setShowContent] = useState(true);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <section id="detail">
      <div className={`detail ${showContent ? 'show' : 'hide'}`}>
        {showContent && (
          <div className="content">
            <button className="close-btn" onClick={toggleContent}>X</button>
            <div className="info">
              <h1>Avatar (2009)</h1>
              <p><strong>Director:</strong> James Cameron</p>
              <p><strong>Cast:</strong> Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang</p>
              <p><strong>Genre:</strong> Action, Adventure, Fantasy</p>
              <p><strong>Release Date:</strong> December 18, 2009</p>
              <p>
                <strong>Description:</strong> 
                Avatar depicts a story where humans interact with the Na'vi, the indigenous inhabitants of the planet Pandora. Jake Sully, a paraplegic former Marine, becomes a part of this new world using an Avatar, a genetically engineered Na'vi body.
              </p>
            </div>
          </div>
        )}
        <div className="backVideo">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/a6VVrAZUnsc?si=OGT_MCGTKYCotf_E&autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Detail;

import React, { useState } from 'react';
import "./assets/scss/Detail.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Detail = () => {
  

  return (
    <section id="detail">
      <div className="container info">
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <div className="img">
                <img 
                  src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1636996180" 
                  alt="Movie Poster" 
                />
              </div>
              <h2>Detail</h2>
            </div>
            <div className="card-back">
              <div className="name">
                <h2>Movie :</h2>
                <p>Alpha</p>
              </div>
              <div className="genre">
                <h2>Genre :</h2>
                <p>Drama, Action, 3D, IMAX</p>
              </div>
              <div className="director">
                <h2>Director :</h2>
                <p>Kelsey Man</p>
              </div>
              <div className="play">
                <h2>Trailer</h2>
                <Link to="https://youtu.be/MBTlfH1YIgs?si=nt-C_Z60FeIKOj-k" target='_blank' className="button" >
                  <FontAwesomeIcon className="svg" icon={faPlay} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;

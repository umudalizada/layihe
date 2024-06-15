import React, { useState } from 'react';
import "./assets/scss/Detail.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicket } from '@fortawesome/free-solid-svg-icons';

const Detail = () => {


  return (
    <section id="detail">
      <div className="container detail">
        <div className="left">
          <div className="info">
          <FontAwesomeIcon className='ticket' icon={faTicket} />
            <div className="img">
              <img src="https://m.media-amazon.com/images/I/91iiMiqj6FL._AC_UF894,1000_QL80_.jpg" alt="" />
            </div>
            <div className="infoinfo">
              <div className="name">
                <h2>Movie :</h2>
                <p>Avatar</p>
              </div>
              <div className="genre">
                <h2>Genre :</h2>
                <p>Dram,Action,3D,IMAX</p>
              </div>
              <div className="director">
                <h2>Director :</h2>
                <p>Umud Alizada</p>
              </div>
            </div>
          </div>
          <div className="iframe">
          <iframe  src="https://www.youtube.com/embed/3G6J-ITWekA?si=mQbHvCvXGdY295tI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
        <div className="right">
          <div className="img">
            <img src="https://parkcinema.az/uploads/structures/banners/files/Park_Cinema_banner_Az-04.png" alt="" />
          </div>
          <div className="img">
            <img src="https://parkcinema.az/uploads/structures/banners/files/wolt-sayt-baner.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;

import React, { useEffect } from 'react';
import "./assets/scss/Detail.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicket } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllData } from '../service/requests';
import { addReklams } from '../redux/slice/reklamSlice';

const Detail = () => {
  const handleExternalLink = (url) => (event) => {
    event.preventDefault();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const reklamdata = useSelector((state) => state.allReklam.reklams);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllData("reklams").then((res) => {
      dispatch(addReklams(res));
    });
  }, [dispatch]);

  const { id } = useParams();
  const data = useSelector(state => state.allTicket.tickets);
  const control = data.find(el => el._id === id);

  if (!control) {
    return <div>Movie not found</div>;
  }

  return (
    <section id="detail">
      <div className="container detail">
        <div className="left">
          <div className="info">
            <Link to={`/buyticket/${id}`}>
              <FontAwesomeIcon className='ticket' icon={faTicket} />
            </Link>
            <div className="img">
              <img src={control.image} alt={control.name} />
            </div>
            <div className="infoinfo">
              <div className="name">
                <h2>Movie:</h2>
                <p>{control.name}</p>
              </div>
              <div className="genre">
                <h2>Genre:</h2>
                <p>{control.category.join(', ')}</p>
              </div>
              <div className="price">
                <h2>Price:</h2>
                <p>${control.price}</p>
              </div>
              <div className="date">
                <h2>Date:</h2>
                <p>{new Date(control.date).toLocaleDateString()}</p>
              </div>
              <div className="showtimes">
                <h2>Seans:</h2>
                <p>{control.seans.join(', ')}</p>
              </div>
            </div>
          </div>
          <div className="iframe">
            <iframe 
              src={control.iframe} 
              title={`${control.name} Trailer`} 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen>
            </iframe>
          </div>
        </div>
        <div className="right">
          {
            reklamdata && reklamdata.map((elem, i) => (
              <div onClick={handleExternalLink(elem.reklamLink)} key={i} className="img">
                <img src={elem.image} alt="Ad" />
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Detail;

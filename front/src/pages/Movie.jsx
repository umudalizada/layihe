import React, { useEffect, useState } from 'react';
import "./assets/scss/Table.scss";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllData } from '../service/requests';
import { addTickets } from '../redux/slice/ticketSlice';

const Movie = () => {
  const data = useSelector((state) => state.allTicket.tickets);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllData("tickets").then((res) => {
      dispatch(addTickets(res));
      setLoading(false);
    }).catch((error) => {
      console.error("Error fetching data:", error);
      setLoading(false);
    });
  }, [dispatch]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section id="table">
      <div className="container tableCon">
        {loading ? (
          <div className="loader"></div>
        ) : (
          <table className="movie-table">
            <thead>
              <tr>
                <th><h1>Poster</h1></th>
                <th><h1>Movies</h1></th>
                <th><h1>Date</h1></th>
                <th><h1>Session</h1></th>
                <th><h1>Action</h1></th>
              </tr>
            </thead>
            <tbody>
              {
                data && data.map((elem, i) => (
                  <tr key={i}>
                    <td><img src={elem.image} alt="poster" /></td>
                    <td>{elem.name}</td>
                    <td>{formatDate(elem.date)}</td>
                    <td>{Array.isArray(elem.seans) ? elem.seans.join(', ') : 'No sessions available'}</td>
                    <td>
                      <Link className='Link'>Buy</Link>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
}

export default Movie;

import React from 'react';
import "./assets/scss/Table.scss";
import { Link } from 'react-router-dom';

const Movie = () => {
  return (
    <section id="table">
      <div className="container">
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
            
          <tr>
              <td><img src="https://i.ebayimg.com/images/g/-8YAAOSwayZksBlL/s-l1200.jpg" alt="" /></td>
              <td>Avatar</td>
              <td>12.12.2012</td>
              <td>12:00</td>
              <td>
                <Link className='Link'>Buy</Link>
              </td>
            </tr>
               
            <tr>
              <td><img src="https://i.ebayimg.com/images/g/-8YAAOSwayZksBlL/s-l1200.jpg" alt="" /></td>
              <td>Avatar</td>
              <td>12.12.2012</td>
              <td>12:00</td>
              <td>
                <Link className='Link'>Buy</Link>
              </td>
            </tr>
            
            <tr>
              <td><img src="https://i.ebayimg.com/images/g/-8YAAOSwayZksBlL/s-l1200.jpg" alt="" /></td>
              <td>Avatar</td>
              <td>12.12.2012</td>
              <td>12:00</td>
              <td>
                <Link className='Link'>Buy</Link>
              </td>
            </tr>
            
              
            <tr>
              <td><img src="https://i.ebayimg.com/images/g/-8YAAOSwayZksBlL/s-l1200.jpg" alt="" /></td>
              <td>Avatar</td>
              <td>12.12.2012</td>
              <td>12:00</td>
              <td>
                <Link className='Link'>Buy</Link>
              </td>
            </tr>
            
            <tr>
              <td><img src="https://i.ebayimg.com/images/g/-8YAAOSwayZksBlL/s-l1200.jpg" alt="" /></td>
              <td>Avatar</td>
              <td>12.12.2012</td>
              <td>12:00</td>
              <td>
                <Link className='Link'>Buy</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Movie;

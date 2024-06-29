import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllData } from '../../service/requests'
import { addTickets } from '../../redux/slice/ticketSlice'
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const TriD = () => {
  const data = useSelector((state) => state.allTicket.tickets)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  

  useEffect(() => {
    getAllData("tickets")
      .then((res) => {
        dispatch(addTickets(res))
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [dispatch])

  if (loading) {
    return (
      <section id='triD'>
        <div className="container triDinfo">
          <h2>3D</h2>
        </div>
        <div className="container allCards triD">
          {[1, 2, 3, 4].map((item, index) => (
            <div key={index} className="card">
              <Skeleton  style={{backgroundColor:"whitesmoke"}} height={250} />
            </div>
          ))}
        </div>
      </section>
    )
  }

  if (error) {
    return <p>Error loading data...</p>
  }

  const twoDMovies = data ? data.filter(movie => movie.category && movie.category.includes("3D")) : []

  return (
    <section id='triD'>
      <div className="container triDinfo">
        <h2>3D</h2>
      </div>
      <div className="container allCards triD">
        {twoDMovies.length > 0 ? (
          twoDMovies.map((movie, i) => (
            <Link key={i} to={`/detail/${movie._id}`}>
              <div className="card">
                <FontAwesomeIcon className='infoIcon' icon={faCircleInfo} />
                <img src={movie.image} alt="" />
              </div>
            </Link>
          ))
        ) : (
          <p>No 3D movies available</p>
        )}
      </div>
    </section>
  )
}

export default TriD

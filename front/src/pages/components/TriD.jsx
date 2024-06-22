import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faTicket } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllData } from '../../service/requests'
import { addTickets } from '../../redux/slice/ticketSlice'

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
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error loading data: {error}</p>
  }

  const twoDMovies = data ? data.filter(movie => movie.category && movie.category.includes("3D")) : []

  return (
    <section id='triD'>
      <div className="container triDinfo">
        <h2>3D</h2>
      </div>
      <div className="container allCards triD">
        {twoDMovies.length > 0 ? (
          twoDMovies.map((movie,i) => (
            <Link to={`/detail/${movie._id}`}>
            <div key={i} className="card">
              <FontAwesomeIcon className='infoIcon' icon={faCircleInfo} />
              <img src={movie.image} alt="" />
            </div>
          </Link>
          ))
        ) : (
          <p>No 2D movies available</p>
        )}
      </div>
    </section>
  )
}

export default TriD

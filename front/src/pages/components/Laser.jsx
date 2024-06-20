import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllData } from '../../service/requests'
import { addReklams } from '../../redux/slice/ticketSlice'

const Laser = () => {
  const data = useSelector((state) => state.allTicket.tickets)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getAllData("tickets")
      .then((res) => {
        dispatch(addReklams(res))
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

  const imaxMovies = data ? data.filter(movie => movie.category && movie.category.includes("IMAX")) : []

  return (
    <section id="laser">
      <div className="container triDinfo">
        <h2>IMAX</h2>
      </div>
      <div className="container allCards triD">
        {imaxMovies.length > 0 ? (
          imaxMovies.map((movie,i) => (
            <Link to={`/detail/${movie._id}`}>
              <div key={i} className="card">
                <FontAwesomeIcon className='infoIcon' icon={faCircleInfo} />
                <img src={movie.image} alt="" />
              </div>
            </Link>
          ))
        ) : (
          <p>No IMAX movies available</p>
        )}
      </div>
    </section>
  )
}

export default Laser

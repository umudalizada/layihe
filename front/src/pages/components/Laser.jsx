import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllData } from '../../service/requests'
import { addReklams } from '../../redux/slice/reklamSlice'
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Smooth from '../../hook/Smooth'

const Laser = () => {
  const data = useSelector((state) => state.allTicket.tickets)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { ref } = Smooth();

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
    return (
      <section id="laser">
        <div className="container triDinfo" ref={ref}>
          <h2>IMAX</h2>
        </div>
        <div  style={{ margin: "6px" }} className="container allCards triD" ref={ref}>
          {[1, 2, 3, 4].map((item, index) => (
            <div  key={index} className="card">
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

  const imaxMovies = data ? data.filter(movie => movie.category && movie.category.includes("IMAX")) : []

  return (
    <section id="laser">
      <div className="container triDinfo" ref={ref}>
        <h2>IMAX</h2>
      </div>
      <div className="container allCards triD">
        {imaxMovies.length > 0 ? (
          imaxMovies.map((movie, i) => (
            <Link key={i} to={`/detail/${movie._id}`}>
              <div className="card" ref={ref}>
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

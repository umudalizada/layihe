import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faTicket } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllData } from '../../service/requests'
import { addTickets } from '../../redux/slice/ticketSlice'

const AllCards = () => {
    const data = useSelector((state) => state.allTicket.tickets)
    const dispatch = useDispatch()
    useEffect(() => {
        getAllData("tickets").then((res) => {
            dispatch(addTickets(res));
        });
    }, [data])
    return (
        <div className="allCards">
            {
                data && data.map((elem, i) => {
                    return (
                        <Link to={`/detail/${elem._id}`}>
                            <div key={i} className="card">
                                <FontAwesomeIcon className='infoIcon' icon={faCircleInfo} />
                                <img src={elem.image} alt="" />
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default AllCards

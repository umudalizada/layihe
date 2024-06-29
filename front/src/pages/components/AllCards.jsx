import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllData } from '../../service/requests';
import { addTickets } from '../../redux/slice/ticketSlice';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


const AllCards = ({ searchQuery }) => {
  const data = useSelector((state) => state.allTicket.tickets);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllData("tickets").then((res) => {
      dispatch(addTickets(res));
      setLoading(false);
    });
  }, [dispatch]);

  const filteredData = data.filter((ticket) =>
    ticket.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const skeletonCount = filteredData.length > 0 ? filteredData.length : 12;

  return (
    <div className="allCards">
      {loading ? (
        Array.from({ length: skeletonCount }).map((_, index) => (
          <div className="card" key={index} style={{ margin: "6px" }}>
            <Skeleton style={{backgroundColor:"whitesmoke"}} height={300} />
          </div>
        ))
      ) : (
        filteredData.length > 0 ? (
          filteredData.map((elem, i) => (
            <Link key={i} to={`/detail/${elem._id}`}>
              <div className="card">
                <FontAwesomeIcon className='infoIcon' icon={faCircleInfo} />
                <img src={elem.image} alt={elem.name} />
              </div>
            </Link>
          ))
        ) : (
          <p>No results found</p>
        )
      )}
    </div>
  );
}

export default AllCards;

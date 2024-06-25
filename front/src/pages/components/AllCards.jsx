import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllData } from '../../service/requests';
import { addTickets } from '../../redux/slice/ticketSlice';

const AllCards = ({ searchQuery }) => {
  const data = useSelector((state) => state.allTicket.tickets);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllData("tickets").then((res) => {
      dispatch(addTickets(res));
    });
  }, [dispatch]);

  const filteredData = data.filter((ticket) =>
    ticket.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="allCards">
      {filteredData.length > 0 ? (
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
      )}
    </div>
  );
}

export default AllCards;

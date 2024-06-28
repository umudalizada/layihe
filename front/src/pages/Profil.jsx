import React, { useState, useEffect } from 'react';
import "./assets/scss/Profil.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faSignOutAlt, faQrcode } from '@fortawesome/free-solid-svg-icons'; // QR code icon
import profil from '../assets/images/profil4.png';

// Component code here...


const formatIntoDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};

const TicketCard = ({ order }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <div className="ticketCard">
      <div className="ticketHeader">
        <h4>Movie: {order.name && order.name.slice(0, 10)}</h4> {/* Check if order.name exists */}
        <FontAwesomeIcon icon={faQrcode} className="qrIcon" onClick={toggleModal} />
      </div>
      <h4>Date: {formatIntoDate(order.date)}</h4> {/* Format date as day-month-year */}
      <h4>Seans: {order.seans}</h4>
      <h4>Price: ${order.price}</h4> {/* Assuming 'price' is included in order object */}
      {/* QR code modal */}
      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>&times;</span>
            <h2>QR Code</h2>
            <div className="qrCode">
              {/* QR code content */}
              <img src={`https://api.qrserver.com/v1/create-qr-code/?data=${JSON.stringify(order)}`} alt="QR Code" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Profil = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    number: '',
  });
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setFormData({
        username: user.username,
        email: user.email,
        number: user.number || '', 
      });
      setOrders(user.orders || []);
    }
  }, []); 

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle form submission logic here
    toggleModal();
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/'; 
  };

  return (
    <section id='profil'>
      <div className="container profile">
        <div className="info">
          <FontAwesomeIcon className='logout' icon={faSignOutAlt} onClick={handleLogout} />
          <div className="img">
            <img src={profil} alt="Profile" />
          </div>
          <div className="name">
            <h2>{formData.username}</h2>
            <h2>{formData.email}</h2>
          </div>

          <div className="ticketBox">
            <h3>Your Tickets</h3>
            {orders.length === 0 ? (
              <p className="empty" style={{color:"white"}}>No tickets yet.</p>
            ) : (
              <div className="tickets">
                {orders.map((order, index) => (
                  <TicketCard key={index} order={order} />
                ))}
                {orders.length > 3 && <p></p>}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profil;

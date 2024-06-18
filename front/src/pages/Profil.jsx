import React, { useState } from 'react';
import "./assets/scss/Profil.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import profil from '../assets/images/profil4.png';

const Profil = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    username: 'UserName',
    email: 'umud@gmail.com',
    password: '',
    number: '+99423326211',
  });

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    toggleModal();
  };

  return (
    <section id='profil'>
      <div className="container profile">
        <div className="info">
          <FontAwesomeIcon className='edit' icon={faPen} onClick={toggleModal} />
          <div className="img">
            <img src={profil} alt="Profile" />
          </div>
          <div className="name">
            <h2>{formData.username}</h2>
            <h2>{formData.email}</h2>
            <h2>{formData.number}</h2>
          </div>
          <div className="ticketBox">
            <h3>Your Ticket</h3>
            <div className="tickets">
              <div className="ticketCard">
                <h4>Movie</h4><h4>Date</h4><h4>Seans</h4>
              </div>
              <div className="ticketCard">
                <h4>Movie</h4><h4>Date</h4><h4>Seans</h4>
              </div>
              <div className="ticketCard">
                <h4>Movie</h4><h4>Date</h4><h4>Seans</h4>
              </div>
              <div className="ticketCard">
                <h4>Movie</h4><h4>Date</h4><h4>Seans</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>&times;</span>
            <h2>Edit Profile</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Username:
                <input type="text" name="username" value={formData.username} onChange={handleChange} />
              </label>
              <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
              </label>
              <label>
                Password:
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
              </label>
              <label>
                Number:
                <input type="tel" name="number" value={formData.number} onChange={handleChange} />
              </label>
              <button type="submit">Save</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Profil;

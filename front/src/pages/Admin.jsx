import React, { useState } from 'react';
import "./assets/scss/Admin.scss";
import Modal from './components/Modal';

const Admin = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState(null);

  const handleOpenModal = (type, row) => {
    setModalTitle(type === 'edit' ? 'Edit Data' : 'Post Data');
    setModalContent(
      <form>
        <div>
          <label>Name:</label>
          <input type="text" defaultValue={row.name} />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" defaultValue={row.date} />
        </div>
        <div>
          <label>Seans:</label>
          <input type="text" defaultValue={row.seans} />
        </div>
        <button type="submit">{type === 'edit' ? 'Save' : 'Post'}</button>
      </form>
    );
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const sampleData = [
    { name: 'John Doe', date: '2024-06-18', seans: 'Morning' },
    // Add more sample rows as needed
  ];
  return (
    <section id="admin">
      <div className="container tablee">
        <table className="responsive-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Seans</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sampleData.map((row, index) => (
              <tr key={index}>
                <td>{row.name}</td>
                <td>{row.date}</td>
                <td>{row.seans}</td>
                <td>
                  <button className="action-btn edit" onClick={() => handleOpenModal('edit', row)}>Edit</button>
                  <button className="action-btn delete">Delete</button>
                  <button className="action-btn post" onClick={() => handleOpenModal('post', row)}>Post</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title={modalTitle}>
        {modalContent}
      </Modal>
    </section>
  );
};

export default Admin;

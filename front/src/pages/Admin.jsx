import React, { useEffect, useState, useRef } from 'react';
import "./assets/scss/Admin.scss";
import Modal from './components/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { deleteDataById, getAllData, patchData, postData } from '../service/requests';
import { addTickets, delTicket, editTicket, postTicket } from '../redux/slice/ticketSlice';
import { Link } from 'react-router-dom';

const Admin = () => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isPostModalOpen, setPostModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState(null);
  const data = useSelector((state) => state.allTicket.tickets);
  const dispatch = useDispatch();
  const editFormRef = useRef(null); 
  const postFormRef = useRef(null); 

  useEffect(() => {
    getAllData("tickets")
      .then((res) => {
        dispatch(addTickets(res));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error while fetching data:", error);
        setLoading(false);
      });
  }, [dispatch]);

  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear().toString().slice(2);
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const day = d.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleOpenEditModal = (row) => {
    setFormData({
      _id: row._id,
      name: row.name,
      image: row.image,
      category: row.category.join(', '), 
      price: row.price.toString(), 
      iframe: row.iframe,
      date: formatDate(row.date), 
      seans: row.seans.join(', ') 
    });
    setEditModalOpen(true);
  };

  const handleOpenPostModal = () => {
    setPostModalOpen(true);
  };

  const handleCloseModal = () => {
    setEditModalOpen(false);
    setPostModalOpen(false);
    setFormData(null);
  };

  const handleEditSubmit = async e => {
    e.preventDefault();
    const form = editFormRef.current;
    const formData = new FormData(form);
    const obj = {
      _id: formData.get('_id'),
      name: formData.get('name'),
      image: formData.get('image'),
      category: formData.get('category').split(',').map(cat => cat.trim()),
      price: parseInt(formData.get('price')),
      iframe: formData.get('iframe'),
      date: new Date(formData.get('date')),
      seans: formData.get('seans').split(',').map(s => s.trim())
    };
  
    try {
      await patchData("tickets", obj._id, obj);
      dispatch(editTicket(obj));
      handleCloseModal(); 
    } catch (error) {
      console.error('Veri düzenlenirken hata oluştu:', error);
    }
  };
  
  const handlePostSubmit = async e => {
    e.preventDefault();
    const form = postFormRef.current;
    const formData = new FormData(form);
    const obj = {
      name: formData.get('name'),
      image: formData.get('image'),
      category: formData.get('category').split(',').map(cat => cat.trim()),
      price: parseInt(formData.get('price')),
      iframe: formData.get('iframe'),
      date: new Date(formData.get('date')),
      seans: formData.get('seans').split(',').map(s => s.trim())
    };
  
    try {
      await postData("tickets", obj);
      dispatch(postTicket(obj));
      handleCloseModal(); 
    } catch (error) {
      console.error('Veri gönderilirken hata oluştu:', error);
    }
  };
  
  const handleDelete = async (id) => {
    try {
      await deleteDataById("tickets", id);
      dispatch(delTicket(id))
    } catch (error) {
      console.error('Error while deleting data:', error);
    }
  };

  return (
    <section id="admin">
      <div className="container tablee">
        <div className="buttons">
        <Link to="/admin" className='adminFilter'>Products</Link>
                    <Link to="/userAdmin" className='adminFilter'>Users</Link>
                    <Link to="/reklamAdmin" className='adminFilter'>Adverts</Link>
                    <Link to="/advertAdmin" className='adminFilter'>Sliders</Link>
        </div>
        {loading ? (
          <p>Loading data...</p>
        ) : (
          <table className="responsive-table">
            <thead>
              <tr>
                <th>Poster</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Iframe</th>
                <th>Date</th>
                <th>Seans</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td><img style={{ width: "50px" }} src={row.image} alt="Poster" className="poster-image" /></td>
                  <td>{row.name}</td>
                  <td>{row.category.join(', ')}</td>
                  <td>{row.price}</td>
                  <td><a href={row.iframe} target="_blank" rel="noopener noreferrer">Watch</a></td>
                  <td>{formatDate(row.date)}</td>
                  <td>{row.seans.join(', ')}</td>
                  <td>
                    <button className="action-btn edit" onClick={() => handleOpenEditModal(row)}>Edit</button>
                    <button className="action-btn delete" onClick={() => handleDelete(row._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <button className="action-btn post add" onClick={handleOpenPostModal}>Add New Data</button>

      {/* Edit Modal */}
      <Modal isOpen={isEditModalOpen} onClose={handleCloseModal} title="Edit Data">
        <form ref={editFormRef} onSubmit={handleEditSubmit}>
          <div>
            <label>Name:</label>
            <input type="text" name="name" defaultValue={formData ? formData.name : ''} required />
          </div>
          <div>
            <label>Poster:</label>
            <input type="text" name="image" defaultValue={formData ? formData.image : ''} required />
          </div>
          <div>
            <label>Category:</label>
            <input type="text" name="category" defaultValue={formData ? formData.category : ''} required />
          </div>
          <div>
            <label>Price:</label>
            <input type="number" name="price" defaultValue={formData ? formData.price : ''} required />
          </div>
          <div>
            <label>Iframe:</label>
            <input type="text" name="iframe" defaultValue={formData ? formData.iframe : ''} required />
          </div>
          <div>
            <label>Date:</label>
            <input type="date" name="date" defaultValue={formData ? formData.date : ''} required />
          </div>
          <div>
            <label>Seans:</label>
            <input type="text" name="seans" defaultValue={formData ? formData.seans : ''} required />
          </div>
          <input type="hidden" name="_id" defaultValue={formData ? formData._id : ''} />
          <button type="submit">Save</button>
        </form>
      </Modal>

      {/* Post Modal */}
      <Modal isOpen={isPostModalOpen} onClose={handleCloseModal} title="Post Data">
        <form ref={postFormRef} onSubmit={handlePostSubmit}>
          <div>
            <label>Name:</label>
            <input type="text" name="name" defaultValue="" required />
          </div>
          <div>
            <label>Poster:</label>
            <input type="text" name="image" defaultValue="" required />
          </div>
          <div>
            <label>Category:</label>
            <input type="text" name="category" defaultValue="" required />
          </div>
          <div>
            <label>Price:</label>
            <input type="number" name="price" defaultValue="" required />
          </div>
          <div>
            <label>Iframe:</label>
            <input type="text" name="iframe" defaultValue="" required />
          </div>
          <div>
            <label>Date:</label>
            <input type="date" name="date" defaultValue="" required />
          </div>
          <div>
            <label>Seans:</label>
            <input type="text" name="seans" defaultValue="" required />
          </div>
          <button type="submit">Send</button>
        </form>
      </Modal>
    </section>
  );
};

export default Admin;
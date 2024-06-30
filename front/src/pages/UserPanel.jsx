import React, { useEffect, useState, useRef } from 'react';
import Modal from './components/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useDispatch, useSelector } from 'react-redux';
import { deleteDataById, getAllData, patchData, postData } from '../service/requests';
import { Link } from 'react-router-dom';
import { addUsers, delUsers, editUser, postUser } from '../redux/slice/userSlice';
import { faArrowLeft, faDatabase, faFilePen, faSquareMinus } from '@fortawesome/free-solid-svg-icons';

const UserPanel = () => {
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [isPostModalOpen, setPostModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState(null);
    const [selectedUserType, setSelectedUserType] = useState(true); 
    const data = useSelector((state) => state.allUser.users);
    const dispatch = useDispatch();
    const editFormRef = useRef(null);
    const postFormRef = useRef(null);

    useEffect(() => {
        getAllData("users")
            .then((res) => {
                dispatch(addUsers(res));
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error while fetching data:", error);
                setLoading(false);
            });
    }, [dispatch]);

    const handleOpenEditModal = (row) => {
        setFormData({
            _id: row._id,
            username: row.username,
            name: row.name,
            lastname: row.lastname,
            email: row.email,
            password: row.password,
            user: row.user 
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

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        const form = editFormRef.current;
        const formData = new FormData(form);
        const obj = {
            _id: formData.get('_id'),
            username: formData.get('username'),
            name: formData.get('name'),
            lastname: formData.get('lastname'),
            email: formData.get('email'),
            password: formData.get('password'),
            user: selectedUserType 
        };

        try {
            await patchData("users", obj._id, obj);
            dispatch(editUser(obj));
            handleCloseModal();
        } catch (error) {
            console.error('Error editing data:', error);
        }
    };

    const handlePostSubmit = async (e) => {
        e.preventDefault();
        const form = postFormRef.current;
        const formData = new FormData(form);
        const obj = {
            username: formData.get('username'),
            name: formData.get('name'),
            lastname: formData.get('lastname'),
            email: formData.get('email'),
            password: formData.get('password'),
            user: selectedUserType 
        };

        try {
            const response = await postData("users", obj);
            dispatch(postUser(response));
            handleCloseModal();
        } catch (error) {
            console.error('Error posting data:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteDataById("users", id);
            dispatch(delUsers(id));
        } catch (error) {
            console.error('Error deleting data:', error);
        }
    };

    return (
        <section id="admin">
            <div className="container tablee">
                <div className="buttons">
        <Link onClick={()=> window.scroll(0,0)} to="/admin" className='adminFilter'>Products</Link>
                    <Link onClick={()=> window.scroll(0,0)} to="/userAdmin" className='adminFilter'>Users</Link>
                    <Link onClick={()=> window.scroll(0,0)} to="/reklamAdmin" className='adminFilter'>Adverts</Link>
                    <Link onClick={()=> window.scroll(0,0)} to="/advertAdmin" className='adminFilter'>Sliders</Link>
                    <Link onClick={()=> window.scroll(0,0)}  to="/" className='adminFilter backtohome'>Home <FontAwesomeIcon icon={faArrowLeft} /></Link>

                </div>
                {loading ? (
                    <p>Loading data...</p>
                ) : (
                    <table className="responsive-table">
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Name</th>
                                <th>Lastname</th>
                                <th>Email</th>
                                <th>User Type</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, index) => (
                                <tr key={index}>
                                    <td>{row.username}</td>
                                    <td>{row.name}</td>
                                    <td>{row.lastname}</td>
                                    <td>{row.email}</td>
                                    <td>{row.user ? 'Admin' : 'User'}</td>
                                    <td>
                                    <button className="action-btn edit" onClick={() => handleOpenEditModal(row)}><FontAwesomeIcon icon={faFilePen} /></button>
                    <button className="action-btn delete" onClick={() => handleDelete(row._id)}><FontAwesomeIcon icon={faSquareMinus} /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
      <button className="action-btn post add" onClick={handleOpenPostModal}><FontAwesomeIcon icon={faDatabase} /></button>


            </div>

            <Modal isOpen={isEditModalOpen} onClose={handleCloseModal} title="Edit User">
                <form ref={editFormRef} onSubmit={handleEditSubmit}>
                    <div>
                        <label>Username:</label>
                        <input type="text" name="username" defaultValue={formData ? formData.username : ''} required />
                    </div>
                    <div>
                        <label>Name:</label>
                        <input type="text" name="name" defaultValue={formData ? formData.name : ''} required />
                    </div>
                    <div>
                        <label>Lastname:</label>
                        <input type="text" name="lastname" defaultValue={formData ? formData.lastname : ''} required />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" name="email" defaultValue={formData ? formData.email : ''} required />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" name="password" defaultValue={formData ? formData.password : ''} required />
                    </div>
                    <input type="hidden" name="_id" defaultValue={formData ? formData._id : ''} />
                    <div>
                        <label>User Type:</label>
                        <select onChange={e => setSelectedUserType(e.target.value === 'true')} defaultValue={formData && formData.user ? 'true' : 'false'}>
                            <option value="true">Admin</option>
                            <option value="false">User</option>
                        </select>
                    </div>
                    <button type="submit">Save</button>
                </form>
            </Modal>

            <Modal isOpen={isPostModalOpen} onClose={handleCloseModal} title="Add New User">
                <form ref={postFormRef} onSubmit={handlePostSubmit}>
                    <div>
                        <label>Username:</label>
                        <input type="text" name="username" defaultValue="" required />
                    </div>
                    <div>
                        <label>Name:</label>
                        <input type="text" name="name" defaultValue="" required />
                    </div>
                    <div>
                        <label>Lastname:</label>
                        <input type="text" name="lastname" defaultValue="" required />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" name="email" defaultValue="" required />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" name="password" defaultValue="" required />
                    </div>
                    <div>
                        <label>User Type:</label>
                        <select onChange={e => setSelectedUserType(e.target.value === 'true')} defaultValue="true">
                            <option value="true">Admin</option>
                            <option value="false">User</option>
                        </select>
                    </div>
                    <button type="submit">Add User</button>
                </form>
            </Modal>
        </section>
    );
}

export default UserPanel;

import React, { useEffect, useState, useRef } from 'react';
import Modal from './components/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { deleteDataById, getAllData, patchData, postData } from '../service/requests';
import { Link } from 'react-router-dom';
import { addReklams, delReklams, editReklam, postReklams } from '../redux/slice/reklamSlice';

const ReklamPanel = () => {
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [isPostModalOpen, setPostModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState(null);
    const data = useSelector((state) => state.allReklam.reklams);
    const dispatch = useDispatch();
    const editFormRef = useRef(null);
    const postFormRef = useRef(null);
    useEffect(() => {
        getAllData("reklams")
            .then((res) => {
                dispatch(addReklams(res));
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
            image: row.image,
            reklamLink: row.reklamLink,
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
            image: formData.get('image'),
            reklamLink: formData.get('reklamLink'),
        };

        try {
            await patchData("tickets", obj._id, obj);
            dispatch(editReklam(obj));
            handleCloseModal();
        } catch (error) {
            console.error('Error editing data:', error);
        }
    };

    const handlePostSubmit = async e => {
        e.preventDefault();
        const form = postFormRef.current;
        const formData = new FormData(form);
        const obj = {
            image: formData.get('image'),
            reklamLink: formData.get('reklamLink'),
        };

        try {
            const response = await postData("tickets", obj);
            dispatch(postReklams(response));
            handleCloseModal();
        } catch (error) {
            console.error('Error posting data:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteDataById("tickets", id);
            dispatch(delReklams(id))
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
                    <Link to="/reklamAdmin" className='adminFilter'>Reklams</Link>
                </div>
                {loading ? (
                    <p>Loading data...</p>
                ) : (
                    <table className="responsive-table">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Reklam Link</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, index) => (
                                <tr key={index}>
                                    <td><img style={{ width: "100px" }} src={row.image} alt="Reklam Poster" /></td>
                                    <td><a href={row.reklamLink} target="_blank" rel="noopener noreferrer">{row.reklamLink}</a></td>
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
                        <label>Image:</label>
                        <input type="text" name="image" defaultValue={formData ? formData.image : ''} required />
                    </div>
                    <div>
                        <label>Reklam Link:</label>
                        <input type="text" name="reklamLink" defaultValue={formData ? formData.reklamLink : ''} required />
                    </div>
                    <input type="hidden" name="_id" defaultValue={formData ? formData._id : ''} />
                    <button type="submit">Save</button>
                </form>
            </Modal>

            {/* Post Modal */}
            <Modal isOpen={isPostModalOpen} onClose={handleCloseModal} title="Post Data">
                <form ref={postFormRef} onSubmit={handlePostSubmit}>
                    <div>
                        <label>Image:</label>
                        <input type="text" name="image" defaultValue="" required />
                    </div>
                    <div>
                        <label>Reklam Link:</label>
                        <input type="text" name="reklamLink" defaultValue="" required />
                    </div>
                    <button type="submit">Send</button>
                </form>
            </Modal>
        </section>
    );
}

export default ReklamPanel

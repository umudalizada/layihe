import React, { useState, useEffect, useRef } from 'react';
import Modal from './components/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { deleteDataById, getAllData, patchData, postData } from '../service/requests';
import { Link } from 'react-router-dom';
import { addSliders, delSlider, editSlider, postSlider } from '../redux/slice/sliderSlice';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faDatabase, faFilePen, faSquareMinus } from '@fortawesome/free-solid-svg-icons';


const SliderSlice = () => {
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [isPostModalOpen, setPostModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState(null);
    const sliders = useSelector((state) => state.allSlider.sliders);
    const dispatch = useDispatch();
    const editFormRef = useRef(null);
    const postFormRef = useRef(null);

    useEffect(() => {
        getAllData("heros")
            .then((res) => {
                dispatch(addSliders(res));
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error while fetching data:", error);
                setLoading(false);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Failed to fetch slider data.',
                });
            });
    }, [dispatch]);

    const handleOpenEditModal = (row) => {
        setFormData({
            _id: row._id,
            image: row.image,
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
            image: formData.get('image'),
        };

        try {
            await patchData("heros", obj._id, obj);
            dispatch(editSlider(obj));
            handleCloseModal();
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Slider updated successfully.',
            });
        } catch (error) {
            console.error('Error editing slider:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to update slider.',
            });
        }
    };

    const handlePostSubmit = async (e) => {
        e.preventDefault();
        const form = postFormRef.current;
        const formData = new FormData(form);
        const obj = {
            image: formData.get('image'),
        };

        try {
            const response = await postData("heros", obj);
            dispatch(postSlider(response));
            handleCloseModal();
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'New slider added successfully.',
            });
        } catch (error) {
            console.error('Error posting slider:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to add new slider.',
            });
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteDataById("heros", id);
            dispatch(delSlider(id));
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Slider deleted successfully.',
            });
        } catch (error) {
            console.error('Error deleting slider:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to delete slider.',
            });
        }
    };

    return (
        <section id="slider">
            <div className="container tablee">
                <div className="buttons">
                    <Link onClick={() => window.scroll(0, 0)} to="/admin" className='adminFilter'>Products</Link>
                    <Link onClick={() => window.scroll(0, 0)} to="/userAdmin" className='adminFilter'>Users</Link>
                    <Link onClick={() => window.scroll(0, 0)} to="/reklamAdmin" className='adminFilter'>Adverts</Link>
                    <Link onClick={() => window.scroll(0, 0)} to="/advertAdmin" className='adminFilter'>Sliders</Link>
                    <Link  onClick={() => window.scroll(0, 0)}  to="/" className='adminFilter backtohome'>Home <FontAwesomeIcon icon={faArrowLeft} /></Link>

                </div>
                {loading ? (
                    <p>Loading data...</p>
                ) : (
                    <table className="responsive-table">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sliders.map((row, index) => (
                                <tr key={index}>
                                    <td><img style={{ width: "100px" }} src={row.image} alt="Slider Image" /></td>
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


            <Modal isOpen={isEditModalOpen} onClose={handleCloseModal} title="Edit Slider">
                <form ref={editFormRef} onSubmit={handleEditSubmit}>
                    <div>
                        <label>Image:</label>
                        <input type="text" name="image" defaultValue={formData ? formData.image : ''} required />
                    </div>
                    <input type="hidden" name="_id" defaultValue={formData ? formData._id : ''} />
                    <button type="submit">Save</button>
                </form>
            </Modal>

            <Modal isOpen={isPostModalOpen} onClose={handleCloseModal} title="Post Slider">
                <form ref={postFormRef} onSubmit={handlePostSubmit}>
                    <div>
                        <label>Image:</label>
                        <input type="text" name="image" defaultValue="" required />
                    </div>
                    <button type="submit">Send</button>
                </form>
            </Modal>
        </section>
    );
};

export default SliderSlice;

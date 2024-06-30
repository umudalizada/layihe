import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from "react-redux";
import * as Yup from 'yup';
import backgroundVideo from "../assets/videos/videoplaybackk.mp4";
import { getAllData } from '../service/requests';
import { addUsers } from '../redux/slice/userSlice';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faKey } from '@fortawesome/free-solid-svg-icons';
import './assets/scss/Login.scss';
import axios from 'axios';

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .required('Password is required'),
});

const SignUpSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    name: Yup.string().required('Name is required'),
    lastname: Yup.string().required('Lastname is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
});

const Login = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        getAllData("users").then((res) => {
            dispatch(addUsers(res));
        });
    }, [dispatch]);

    const users = useSelector(state => state.allUser.users);

    const handleSubmit = async (values) => {
        try {
            const res = await axios.post("http://localhost:3000/auth/login", {
                email: values.email,
                password: values.password
            });

            const token = res.data.token;
            const user = users.find(elem => elem.email === values.email);

            if (user) {
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                navigate("/");
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: 'Invalid email or password. Please try again.',
                });
            }
        } catch (error) {
            console.error("Login error:", error);
            Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: 'Login failed. Please try again.',
            });
        }
    };

    const handleSignUp = async (values) => {
        try {
            const response = await axios.post('http://localhost:3000/auth/register', values);
    
            const newUser = {
                username: values.username,
                name: values.name,
                lastname: values.lastname,
                email: values.email,
            };
    
            dispatch(addUsers(newUser));
    
            Swal.fire({
                icon: 'success',
                title: 'Sign Up Successful',
                text: 'Registration completed successfully! Redirecting to login.',
            }).then(() => {
                setIsFlipped(false); 
                window.location.reload();
            });
        } catch (error) {
            console.error("Sign up error:", error);
    
            if (error.response && error.response.status === 409) {
                Swal.fire({
                    icon: 'error',
                    title: 'Sign Up Failed',
                    text: 'User with this email already exists. Please use a different email.',
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Sign Up Failed',
                    text: 'Registration failed. Please try again.',
                });
            }
        }
    };
    

    const handleToggle = () => {
        setIsFlipped(!isFlipped);
    };

    const togglePasswordVisibility = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    };

    const handleForgotPassword = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleResetPassword = async (values) => {
        try {
            await axios.post('http://localhost:3000/auth/reset-password', {
                email: values.email
            });

            Swal.fire({
                icon: 'success',
                title: 'Email Sent',
                text: 'A password reset email has been sent. Please check your inbox.',
            });
            setIsModalOpen(false);
        } catch (error) {
            console.error("Reset password error:", error);
            Swal.fire({
                icon: 'error',
                title: 'Reset Password Failed',
                text: 'Failed to send reset email. Please try again.',
            });
        }
    };

    return (
        <section id='login'>
            <video autoPlay muted loop>
                <source src={backgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="wrapper">
                <div className="card-switch">
                    <label className="switch">
                        <input
                            className="toggle"
                            type="checkbox"
                            checked={isFlipped}
                            onChange={handleToggle}
                        />
                        <span className="slider"></span>
                        <span className="card-side"></span>
                        <div className={`flip-card__inner ${isFlipped ? 'flipped' : ''}`}>
                            <div className="flip-card__front">
                                <div className="title">Log in</div>
                                <Formik
                                    initialValues={{ email: '', password: '' }}
                                    validationSchema={LoginSchema}
                                    onSubmit={handleSubmit}
                                >
                                    {({ handleSubmit }) => (
                                        <Form onSubmit={handleSubmit} className="flip-card__form" style={{ color: 'white' }}>
                                            <Field type="email" name="email" placeholder="Email" className="flip-card__input" required />
                                            <ErrorMessage name="email" component="div" className="error" />
                                            <div className="password-field">
                                                <Field type={showPassword ? "text" : "password"} name="password" placeholder="Password" className="flip-card__input" required />
                                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} onClick={(e) => togglePasswordVisibility(e)} className="password-toggle-icon" />
                                            </div>
                                            <ErrorMessage name="password" component="div" className="error" />
                                            <button type="submit" className="flip-card__btn">Log in</button>
                                            <div className="forgot-password" onClick={(e)=>handleForgotPassword(e)}>
                                                <FontAwesomeIcon icon={faKey} /> Forgot Password?
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                            <div className="flip-card__back">
                                <div className="title">Sign up</div>
                                <Formik
                                    initialValues={{ username: '', name: '', lastname: '', email: '', password: '' }}
                                    validationSchema={SignUpSchema}
                                    onSubmit={handleSignUp}
                                >
                                    {({ handleSubmit }) => (
                                        <Form onSubmit={handleSubmit} className="flip-card__form" style={{ color: 'white' }}>
                                            <Field type="text" name="username" placeholder="Username" className="flip-card__input" required />
                                            <ErrorMessage name="username" component="div" className="error" />
                                            <Field type="text" name="name" placeholder="Name" className="flip-card__input" required />
                                            <ErrorMessage name="name" component="div" className="error" />
                                            <Field type="text" name="lastname" placeholder="Lastname" className="flip-card__input" required />
                                            <ErrorMessage name="lastname" component="div" className="error" />
                                            <Field type="email" name="email" placeholder="Email" className="flip-card__input" required />
                                            <ErrorMessage name="email" component="div" className="error" />
                                            <div className="password-field">
                                                <Field type={showPassword ? "text" : "password"} name="password" placeholder="Password" className="flip-card__input" required />
                                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} onClick={(e) => togglePasswordVisibility(e)} className="password-toggle-icon" />
                                            </div>
                                            <ErrorMessage name="password" component="div" className="error" />
                                            <button type="submit" className="flip-card__btn">Sign up</button>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </label>
                </div>
            </div>

            {isModalOpen && (
                <>
                    <div className="modal-overlay" onClick={handleCloseModal}></div>
                    <div className="modal">
                        <div className="modal-content">
                            <div className="modal-close" onClick={handleCloseModal}>✖</div>
                            <h2>Reset Password</h2>
                            <Formik
                                initialValues={{ email: '' }}
                                validationSchema={Yup.object({
                                    email: Yup.string()
                                        .email('Invalid email address')
                                        .required('Email is required')
                                })}
                                onSubmit={handleResetPassword}
                            >
                                {({ handleSubmit }) => (
                                    <Form onSubmit={handleSubmit}>
                                        <Field type="email" name="email" placeholder="Email" required />
                                        <ErrorMessage name="email" component="div" className="error" />
                                        <button type="submit">Send Reset Link</button>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </>
            )}
        </section>
    );
};

export default Login;

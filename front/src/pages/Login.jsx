import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from "react-redux";
import * as Yup from 'yup';
import backgroundVideo from "../assets/videos/videoplayback.mp4";
import { getAllData } from '../service/requests';
import { addUsers } from '../redux/slice/userSlice';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './assets/scss/Login.scss';

// Form validation schemas
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
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Fetch all users data on component mount
    useEffect(() => {
        getAllData("users").then((res) => {
            dispatch(addUsers(res));
        });
    }, [dispatch]);

    // Get users from Redux store
    const users = useSelector(state => state.allUser.users);

    const handleSubmit = async (values) => {
        try {
            // Find user by email and password from Redux state
            const user = users.find(elem => (elem.email === values.email) && (elem.password === values.password));

            if (user) {
                // Prepare user data to store in localStorage
                const userData = {
                    ...user,
                };

                // Store user data in localStorage
                localStorage.setItem("user", JSON.stringify(userData));

                // Redirect to home page
                navigate("/");
            } else {
                // Show error message if login fails
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: 'Invalid email or password. Please try again.',
                });
            }
        } catch (error) {
            console.error("Login error:", error);
            // Show generic error message if login fails unexpectedly
            Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: 'Login failed. Please try again.',
            });
        }
    };

    const handleSignUp = async (values) => {
        try {
            // Prepare new user object with default values
            const newUser = {
                username: values.username,
                name: values.name,
                lastname: values.lastname,
                email: values.email,
                password: values.password,
                user: false, // Default user value
                orders: []    // Default orders value
            };

            // Example: Assuming you have an API endpoint to add new users
            const response = await fetch('http://localhost:3000/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            });

            // Example code if you have an API response:
            const data = await response.json();
            console.log("New user:", data);

            // Update Redux store with the newly registered user
            dispatch(addUsers([data])); // Assuming addUsers expects an array of users

            // Show success message and flip back to login form
            Swal.fire({
                icon: 'success',
                title: 'Sign Up Successful',
                text: 'Registration completed successfully! Redirecting to login.',
            }).then(() => {
                setIsFlipped(false); // Flip back to login after successful signup
            });
        } catch (error) {
            console.error("Sign up error:", error);
            // Show error message if sign up fails
            Swal.fire({
                icon: 'error',
                title: 'Sign Up Failed',
                text: 'Registration failed. Please try again.',
            });
        }
    };

    // Toggle between login and sign up forms
    const handleToggle = () => {
        setIsFlipped(!isFlipped);
    };

    // Toggle password visibility
    const togglePasswordVisibility = (e) => {
        e.stopPropagation();
        setShowPassword(!showPassword);
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
                                            <Link className='forgot'>Forgot password?</Link>
                                            <button type="submit" className="flip-card__btn">Log in</button>
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
                                            <Field type="password" name="password" placeholder="Password" className="flip-card__input" required />
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
        </section>
    );
};

export default Login;

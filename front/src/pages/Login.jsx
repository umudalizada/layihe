import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from "react-redux";
import * as Yup from 'yup';
import backgroundVideo from "../assets/videos/videoplayback.mp4";
import './assets/scss/Login.scss';
import { getAllData } from '../service/requests';
import { addUsers } from '../redux/slice/userSlice';

// Yup validation schema for login form
const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .required('Password is required')
});

// Yup validation schema for sign-up form
const SignUpSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    name: Yup.string().required('Name is required'),
    lastname: Yup.string().required('Lastname is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required')
});

const Login = () => {
    const [isFlipped, setIsFlipped] = useState(false);
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
            const user = users.find(elem => (elem.email === values.email) && (elem.password === values.password));

            if (user) {
                const userData = {
                    ...user,
                    user: false,
                    orders: []
                };

                localStorage.setItem("user", JSON.stringify(userData));
                navigate("/");
            } else {
                alert("Error: Invalid email or password");
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("Login failed. Please try again.");
        }
    };

    const handleSignUp = async (values) => {
        try {
            // Simulate sign-up API call
            console.log("Sign up values:", values);

            const newUser = {
                ...values,
                user: false,
                orders: []
            };

            console.log("New user:", newUser);

            // Here you would typically make an API call to save the new user data

            alert("Sign up successful! Redirecting to login.");
            setIsFlipped(false); // Flip back to login side
        } catch (error) {
            console.error("Sign up error:", error);
            alert("Sign up failed. Please try again.");
        }
    };

    const handleToggle = () => {
        setIsFlipped(!isFlipped);
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
                                            <Field type="password" name="password" placeholder="Password" className="flip-card__input" required />
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

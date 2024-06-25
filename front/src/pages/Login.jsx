import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './assets/scss/Login.scss';
import backgroundVideo from "../assets/videos/videoplayback.mp4";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../service/requests';

const FlipCard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const users = useSelector(state => state.allUser.users);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            // Implement token validation if needed
            navigate("/");
        }
    }, [navigate]);

    const handleLoginSubmit = async (values) => {
        try {
            const response = await loginUser(values);

            if (response.ok) {
                const token = await response.json();
                localStorage.setItem('token', token);
                navigate("/");
            } else {
                throw new Error('Login failed: User not found or incorrect credentials');
            }
        } catch (error) {
            console.error('Login failed:', error.message);
        }
    };

    const errorStyle = {
        color: 'red',
        fontSize: '12px',
        margin: '5px 0'
    };

    const loginFormik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
        }),
        onSubmit: handleLoginSubmit,
    });

    return (
        <section id='login'>
            <video autoPlay muted loop>
                <source src={backgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="wrapper">
                <div className="card-switch">
                    <div className={`flip-card__inner`}>
                        <div className="flip-card__front">
                            <div className="title">Log in</div>
                            <form className="flip-card__form" onSubmit={loginFormik.handleSubmit}>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    className="flip-card__input"
                                    value={loginFormik.values.email}
                                    onChange={loginFormik.handleChange}
                                    onBlur={loginFormik.handleBlur}
                                />
                                {loginFormik.touched.email && loginFormik.errors.email ? (
                                    <div style={errorStyle}>{loginFormik.errors.email}</div>
                                ) : null}
                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    className="flip-card__input"
                                    value={loginFormik.values.password}
                                    onChange={loginFormik.handleChange}
                                    onBlur={loginFormik.handleBlur}
                                />
                                {loginFormik.touched.password && loginFormik.errors.password ? (
                                    <div style={errorStyle}>{loginFormik.errors.password}</div>
                                ) : null}
                                <button className="flip-card__btn" type="submit">Let's go!</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FlipCard;

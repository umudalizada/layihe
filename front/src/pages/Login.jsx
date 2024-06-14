import React, { useState } from 'react';
import './assets/scss/Login.scss';
import backgroundVideo from "../assets/videos/videoplayback.mp4"

const FlipCard = () => {
    const [isFlipped, setIsFlipped] = useState(false);

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
                                <form className="flip-card__form">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        className="flip-card__input"
                                    />
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        className="flip-card__input"
                                    />
                                    <button className="flip-card__btn">Let`s go!</button>
                                </form>
                            </div>
                            <div className="flip-card__back">
                                <div className="title">Sign up</div>
                                <form className="flip-card__form">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        className="flip-card__input"
                                    />
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        className="flip-card__input"
                                    />
                                    <button className="flip-card__btn">Confirm!</button>
                                </form>
                            </div>
                        </div>
                    </label>
                </div>
            </div>

        </section>
    );
};

export default FlipCard;

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicket } from '@fortawesome/free-solid-svg-icons';
import "./assets/scss/ShowTimes.scss";

const ShowTimes = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulating loading completion with a setTimeout
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000); // Replace with your actual loading logic

        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="showTime">
            {isLoading && (
                <div className="loader">
                    <div className="circle">
                        <div className="dot"></div>
                        <div className="outline"></div>
                    </div>
                    <div className="circle">
                        <div className="dot"></div>
                        <div className="outline"></div>
                    </div>
                    <div className="circle">
                        <div className="dot"></div>
                        <div className="outline"></div>
                    </div>
                    <div className="circle">
                        <div className="dot"></div>
                        <div className="outline"></div>
                    </div>
                </div>
            )}

            {!isLoading && (
                <>
                    <div className="container h2">
                        <h2>Show Times</h2>
                    </div>
                    <div className="container allcards">

                        <div className="cards">
                            <div className="card">
                                <b />
                                <img src="https://cdn.musebycl.io/2021-05/moonlight_0.jpg" alt="Film Poster" className="film-poster" />
                                <div className="content">
                                    <p className="title">
                                        Film Name
                                        <br />
                                        <p>Dram,3D,IMAX</p>
                                        <p>12:00</p>
                                        <span>

                                        </span>
                                        <button className="btn-cart">
                                            <FontAwesomeIcon className="icon-cart" icon={faTicket} />
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="reklams">
                            <div className="form-container">
                                <form className="form">
                                    <div className="form-group">
                                        <label htmlFor="email">Your Email</label>
                                        <input type="text" id="email" name="email" required="" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="textarea">How Can We Help You?</label>
                                        <textarea
                                            name="textarea"
                                            id="textarea"
                                            rows={10}
                                            cols={50}
                                            required=""
                                            defaultValue={"          "}
                                        />
                                    </div>
                                    <button className="form-submit-btn" type="submit">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </section>
    );
}

export default ShowTimes;


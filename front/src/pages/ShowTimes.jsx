import React, { useState, useEffect } from 'react';
import "./assets/scss/ShowTimes.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import ShowTimesReklam from './components/ShowTimesReklam';

const ShowTimes = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a loading delay
        const timer = setTimeout(() => setLoading(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="showTime">
            {loading ? (
                <div className="loader">
                    {[...Array(9)].map((_, i) => (
                        <div key={i} className={`cell d-${(i % 4) + 1}`}></div>
                    ))}
                </div>
            ) : (
                <div className="showTime container">
                        <div className="item">
                            <div className="card">
                                <div className="circle circle2" />
                                <div className="circle circle1" />
                                <img src="https://i.ibb.co/tCKLc3d/audience-band-club-2747446.jpg" />
                            </div>
                            <div className="content">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dolor
                                    mauris, eleifend ac fermentum at, pellentesque non sem. Vivamus lectus
                                    felis, porttitor eu est sit amet, aliquet laoreet ligula.
                                </p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="card">
                                <div className="circle circle2" />
                                <div className="circle circle1" />
                                <img src="https://i.ibb.co/tCKLc3d/audience-band-club-2747446.jpg" />
                            </div>
                            <div className="content">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dolor
                                    mauris, eleifend ac fermentum at, pellentesque non sem. Vivamus lectus
                                    felis, porttitor eu est sit amet, aliquet laoreet ligula.
                                </p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="card">
                                <div className="circle circle2" />
                                <div className="circle circle1" />
                                <img src="https://i.ibb.co/3hnXN31/4k-wallpaper-audience-band-2728557.jpg" />
                            </div>
                            <div className="content">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dolor
                                    mauris, eleifend ac fermentum at, pellentesque non sem. Vivamus lectus
                                    felis, porttitor eu est sit amet, aliquet laoreet ligula.
                                </p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="card">
                                <div className="circle circle2" />
                                <div className="circle circle1" />
                                <img src="https://i.ibb.co/vqsdkRt/cheerful-concert-crowd-849.jpg" />
                            </div>
                            <div className="content">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dolor
                                    mauris, eleifend ac fermentum at, pellentesque non sem. Vivamus lectus
                                    felis, porttitor eu est sit amet, aliquet laoreet ligula.
                                </p>
                            </div>
                        </div>

                </div>
            )}
        </section>
    );
};

export default ShowTimes;

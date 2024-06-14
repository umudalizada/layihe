import React from 'react'
import "./assets/scss/Contact.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faMapPin, faPhone } from '@fortawesome/free-solid-svg-icons'



const Contact = () => {
    return (
        <section id="contact">
            <div className="container contact">
                <div className="left">
                    <div className="boxes">
                        <div className="card">
                            <div className="first-content">
                            <FontAwesomeIcon className='span' icon={faPhone} />
                            </div>
                            <div className="second-content">
                                <span>+222 333 22</span>
                            </div>
                        </div>
                    </div>
                    <div className="boxes">
                        <div className="card">
                            <div className="first-content">
                            <FontAwesomeIcon icon={faTelegram} />
                            </div>
                            <div className="second-content">
                                <span>t.me/cine</span>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="conatctBox">
                    <div className="form-card1">
                        <div className="form-card2">
                            <form className="form">
                                <p className="form-heading">Get In Touch</p>
                                <div className="form-field">
                                    <input
                                        required=""
                                        placeholder="Name"
                                        className="input-field"
                                        type="text"
                                    />
                                </div>
                                <div className="form-field">
                                    <input
                                        required=""
                                        placeholder="Email"
                                        className="input-field"
                                        type="email"
                                    />
                                </div>
                                <div className="form-field">
                                    <input
                                        required=""
                                        placeholder="Subject"
                                        className="input-field"
                                        type="text"
                                    />
                                </div>
                                <div className="form-field">
                                    <textarea
                                        required=""
                                        placeholder="Message"
                                        cols={30}
                                        rows={3}
                                        className="input-field"
                                        defaultValue={""}
                                    />
                                </div>
                                <button className="sendMessage-btn">Send Message</button>
                            </form>
                        </div>
                    </div>

                </div>
                <div className="right">
                    <div className="boxes">
                        <div className="card">
                            <div className="first-content">
                            <FontAwesomeIcon icon={faInstagram} />
                            </div>
                            <div className="second-content">
                                <span>@cinepolos</span>
                            </div>
                        </div>
                    </div>
                    <div className="boxes">
                        <div className="card">
                            <div className="first-content">
                            <FontAwesomeIcon icon={faMapPin} />
                            </div>
                            <div className="second-content">
                                <span>M/s Khalglar</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contact

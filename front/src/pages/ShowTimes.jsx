import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicket } from '@fortawesome/free-solid-svg-icons';
import "./assets/scss/ShowTimes.scss";
import { useDispatch, useSelector } from 'react-redux';
import { getAllData } from '../service/requests';
import { addTickets } from '../redux/slice/ticketSlice';

const ShowTimes = () => {

    const data = useSelector((state) => state.allTicket.tickets)
    const dispatch = useDispatch()
    useEffect(() => {
        getAllData("tickets").then((res) => {
            dispatch(addTickets(res));
        });
    }, [data])

    return (
        <section id="showTime">
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
            </div>
        </section>
    );
}

export default ShowTimes;


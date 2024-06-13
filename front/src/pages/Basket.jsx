import React from 'react'
import "./assets/scss/Basket.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard, faDeleteLeft, faTicket } from '@fortawesome/free-solid-svg-icons'

const Basket = () => {
    return (
        <section id="basket">
            <div className="container basket">
                <div className="cards">
                    <div className="card">
                        <div className="card__wrapper">
                            <div className="card__menu">
                                <FontAwesomeIcon className='svg' icon={faDeleteLeft} />
                            </div>
                        </div>
                        <div className="card__img">
                            <FontAwesomeIcon className='svg' icon={faTicket} />
                        </div>
                        <div className="card__title">PINOT NOIR</div>
                        <div className="card__subtitle">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt.
                        </div>
                        <div className="card__wrapper">
                            <div className="card__price">$16.95</div>
                            <div className="card__counter">
                                <button className="card__btn">-</button>
                                <div className="card__counter-score">2</div>
                                <button className="card__btn card__btn-plus">+</button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__wrapper">
                            <div className="card__menu">
                                <FontAwesomeIcon className='svg' icon={faDeleteLeft} />
                            </div>
                        </div>
                        <div className="card__img">
                            <FontAwesomeIcon className='svg' icon={faTicket} />
                        </div>
                        <div className="card__title">PINOT NOIR</div>
                        <div className="card__subtitle">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt.
                        </div>
                        <div className="card__wrapper">
                            <div className="card__price">$16.95</div>
                            <div className="card__counter">
                                <button className="card__btn">-</button>
                                <div className="card__counter-score">2</div>
                                <button className="card__btn card__btn-plus">+</button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__wrapper">
                            <div className="card__menu">
                                <FontAwesomeIcon className='svg' icon={faDeleteLeft} />
                            </div>
                        </div>
                        <div className="card__img">
                            <FontAwesomeIcon className='svg' icon={faTicket} />
                        </div>
                        <div className="card__title">PINOT NOIR</div>
                        <div className="card__subtitle">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt.
                        </div>
                        <div className="card__wrapper">
                            <div className="card__price">$16.95</div>
                            <div className="card__counter">
                                <button className="card__btn">-</button>
                                <div className="card__counter-score">2</div>
                                <button className="card__btn card__btn-plus">+</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="total">
                    <div className="totalSum">
                        <div className="totalinfo">
                            <h2>Total Sum: <span>$23</span></h2>
                        </div>
                        <div data-tooltip="Order" className="button">
                            <div className="button-wrapper">
                                <div className="text">Buy Now</div>
                                <span className="icon">
                                    <FontAwesomeIcon  className="bi bi-cart2" icon={faCreditCard} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Basket

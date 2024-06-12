import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const Contact = () => {
  return (
    <section id="contact">
        <div className="container contact">
        <div className="contactRight">
                <img src="src/assets/images/pngwing.com (2).png" alt="" />
            </div>
            <div className="contactLeft">
                <h2>Contact the assistant</h2>
                <Link className='asistanLink'>Click: <FontAwesomeIcon icon={faRightLong} />Assistant</Link>
                <div className="conatctNumber">
                <h2>Our address</h2>
                <i>Azerbaijan,Nizami,Khalglar M/s, Bahruz Nuriyev</i>
                <h2>Order tickets</h2>
                <i>+994 55 555 55 55</i>
                <i>To place an ad :</i>
                <i>+994707800023, +994502552023, <span>umudalizadadev@gmail.com</span></i>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Contact

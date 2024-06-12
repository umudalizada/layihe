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
                <p>Azerbaijan,Nizami,Khalglar M/s, Bahruz Nuriyev</p>
                <h2>Order tickets</h2>
                <p>+994 55 555 55 55</p>
                <p>To place an ad :</p>
                <p>+994707800023, +994502552023, <span>umudalizadadev@gmail.com</span></p>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Contact

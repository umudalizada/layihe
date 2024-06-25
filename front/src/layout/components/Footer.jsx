import { faComments, faCopyright, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApplePay, faCcMastercard, faCcVisa, faFacebook, faGooglePay, faInstagram, faPaypal, faTelegram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate(); 

  const handleExternalLink = (url) => (event) => {
    event.preventDefault();
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  const openChat = () => {
    navigate('/chat'); 
  };
  
  return (
    <section id='footer'>
      <div className='container footer'>
        <div className="footerTop">
          <div className="fotCompany">
          <h2>Company</h2>
            <ul>
            <li>
              <button onClick={handleExternalLink("https://play.google.com/store/apps/details?id=az.parkcinema.app&hl=en_US&pli=1")} href="#" className="playstore-button">
                <svg
                  viewBox="0 0 512 512"
                  className="icon"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z" />
                </svg>
                <span className="texts">
                  <span className="text-1">GET IT ON</span>
                  <span className="text-2">Google Play</span>
                </span>
              </button>
            </li>
            <li>
              <button onClick={handleExternalLink("https://apps.apple.com/om/app/park-cinema/id1119977600")} href="#" className="playstore-button">
                <span className="icon">
                  <svg
                    fill="currentcolor"
                    viewBox="-52.01 0 560.035 560.035"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#ffffff"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                      <path d="M380.844 297.529c.787 84.752 74.349 112.955 75.164 113.314-.622 1.988-11.754 40.191-38.756 79.652-23.343 34.117-47.568 68.107-85.731 68.811-37.499.691-49.557-22.236-92.429-22.236-42.859 0-56.256 21.533-91.753 22.928-36.837 1.395-64.889-36.891-88.424-70.883-48.093-69.53-84.846-196.475-35.496-282.165 24.516-42.554 68.328-69.501 115.882-70.192 36.173-.69 70.315 24.336 92.429 24.336 22.1 0 63.59-30.096 107.208-25.676 18.26.76 69.517 7.376 102.429 55.552-2.652 1.644-61.159 35.704-60.523 106.559M310.369 89.418C329.926 65.745 343.089 32.79 339.498 0 311.308 1.133 277.22 18.785 257 42.445c-18.121 20.952-33.991 54.487-29.709 86.628 31.421 2.431 63.52-15.967 83.078-39.655" />
                    </g>
                  </svg>
                </span>
                <span className="texts">
                  <span className="text-1">Download form</span>
                  <span className="text-2">App store</span>
                </span>
              </button >
            </li>
          </ul>
          </div>
          <div className="fotName">
            <h2>Pay Methods</h2>
          <ul>
            <li><FontAwesomeIcon className='footicon' icon={faCcMastercard} /></li>
            <li><FontAwesomeIcon className='footicon' icon={faCcVisa} /></li>
            <li><FontAwesomeIcon className='footicon' icon={faApplePay} /></li>
            <li><FontAwesomeIcon className='footicon' icon={faGooglePay} /></li>
            <li><FontAwesomeIcon className='footicon' icon={faPaypal} /></li>
          </ul>
          </div>
          <div className="fotName">
          <h2>Social Media</h2>

          <ul>
            <li><FontAwesomeIcon onClick={handleExternalLink("https://chat.whatsapp.com/KAfqzGzvRET9KWBeP0kzbB")} className='footicon' icon={faWhatsapp} /></li>
            <li><FontAwesomeIcon onClick={handleExternalLink("https://www.instagram.com/umudlzde/?igsh=MWNsYzlpZTJ6MjV5Nw%3D%3D")} className='footicon' icon={faInstagram} /></li>
            <li><FontAwesomeIcon onClick={handleExternalLink("https://www.facebook.com/umid.elizade.750?mibextid=ZbWKwL")} className='footicon' icon={faFacebook} /></li>
            <li><FontAwesomeIcon onClick={handleExternalLink("https://https://t.me/+orkn-5NboT5hM2Yy")} className='footicon' icon={faTelegram} /></li>
          </ul>
          </div>
          <div className="fotName">
          <h2>Help</h2>
          <ul>
            <ul onClick={()=>openChat()}>
              <li><FontAwesomeIcon className='footicon' icon={faComments} /></li>
            </ul>
          </ul>
          </div>
        </div>
      </div>
      <div className="autor">
        <h2><FontAwesomeIcon icon={faCopyright} />2024 Umud Alizada</h2>
      </div>
    </section>
  )
}

export default Footer

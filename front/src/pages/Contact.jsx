import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './assets/scss/Contact.scss';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const defaultEmail = 'umudtrend1@gmail.com';

    const handleExternalLink = (url) => (event) => {
        event.preventDefault();
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    const handleSendMessage = (e) => {
        e.preventDefault();
    
        const templateParams = {
            from_name: name,
            reply_to: email,
            to_email: defaultEmail,
            subject: subject,
            message: message
        };
    
        emailjs.send('service_4xdex65', 'template_tyc49au', templateParams, '43oi_U7RtguYqureE')
            .then((response) => {
                console.log('E-posta gönderildi:', response.status, response.text);
    
                Swal.fire({
                    icon: 'success',
                    title: 'Başarılı!',
                    text: 'Mesaj başarıyla gönderildi.',
                    confirmButtonText: 'Tamam'
                });
    
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
            }, (error) => {
                console.error('E-posta gönderilirken hata oluştu:', error);
    
                Swal.fire({
                    icon: 'error',
                    title: 'Hata!',
                    text: 'Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.',
                    confirmButtonText: 'Tamam'
                });
            });
    };
    

    return (
        <section id="contact">
            <div className="container contact">
                <div className="left">
                    <div className="boxes" onClick={() => handleExternalLink('https://chat.whatsapp.com/KAfqzGzvRET9KWBeP0kzbB')}>
                        <div className="card">
                            <div className="first-content">
                                <FontAwesomeIcon icon={faWhatsapp} />
                            </div>
                            <div className="second-content">
                                <span>+9942823828</span>
                            </div>
                        </div>
                    </div>
                    <div className="boxes" onClick={() => handleExternalLink('https://t.me/+orkn-5NboT5hM2Yy')}>
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
                            <form className="form" onSubmit={handleSendMessage}>
                                <p className="form-heading">Get In Touch</p>
                                <div className="form-field">
                                    <input
                                        required
                                        placeholder="Name"
                                        className="input-field"
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="form-field">
                                    <input
                                        required
                                        placeholder="Email"
                                        className="input-field"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-field">
                                    <input
                                        required
                                        placeholder="Subject"
                                        className="input-field"
                                        type="text"
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                    />
                                </div>
                                <div className="form-field">
                                    <textarea
                                        required
                                        placeholder="Message"
                                        cols={30}
                                        rows={3}
                                        className="input-field"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                </div>
                                <button className="sendMessage-btn" type="submit">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="boxes" onClick={() => handleExternalLink('https://www.instagram.com/umudlzde/?igsh=MWNsYzlpZTJ6M2Yy')}>
                        <div className="card">
                            <div className="first-content">
                                <FontAwesomeIcon icon={faInstagram} />
                            </div>
                            <div className="second-content">
                                <span>@cinepolis</span>
                            </div>
                        </div>
                    </div>
                    <div className="boxes">
                        <div className="card">
                            <div className="first-content">
                                <FontAwesomeIcon icon={faMapPin} />
                            </div>
                            <div className="second-content">
                                <span>B.N street</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import './assets/scss/Asistan.scss';

const Asistan = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  useEffect(() => {
    const email = localStorage.getItem('contactEmail');
    const message = localStorage.getItem('contactMessage');
    if (email && message) {
      setContactEmail(email);
      setContactMessage(message);
      setChatHistory([
        { type: 'email', content: `E-posta: ${email}` },
        { type: 'email', content: `Mesaj: ${message}` }
      ]);
    }
  }, []);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = { type: 'message', content: message };
      setChatHistory([...chatHistory, newMessage]);

      emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        to_email: contactEmail,
        message: message
      }, 'YOUR_PUBLIC_KEY')
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Başarılı!',
            text: 'Mesaj başarıyla gönderildi.',
            confirmButtonText: 'Tamam'
          });
        })
        .catch((error) => {
          console.error('E-posta gönderme hatası:', error);
          Swal.fire({
            icon: 'error',
            title: 'Hata!',
            text: 'Mesaj gönderilirken bir hata oluştu.',
            confirmButtonText: 'Tamam'
          });
        });

      setMessage('');
    }
  };

  return (
    <div className="asistan-container">
      <div className="chatbox">
        <div className="chat-history">
          {chatHistory.map((entry, index) => (
            <div key={index} className={`chat-entry ${entry.type}`}>
              {entry.content}
            </div>
          ))}
        </div>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Mesajınızı yazın..."
        />
        <button className='buts' onClick={handleSendMessage}>Mesaj Gönder</button>
      </div>
    </div>
  );
};

export default Asistan;

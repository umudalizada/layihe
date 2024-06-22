import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './assets/scss/AsistanChat.scss';

const socket = io('http://localhost:3001');

const AsistanChat = ({ username }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('receiveMessage', (data) => {
      const { userId, message } = data;
      const sender = userId === socket.id ? 'You' : 'ASISTAN';
      const messageObject = { sender, message };
      setMessages((prevMessages) => [...prevMessages, messageObject]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit('sendMessage', { message, username });
      setMessage(''); // Mesajı temizle
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className='chatContainer'>
      <div className='messages'>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender === 'You' ? 'sent' : 'received'}`}
          >
            <div className='messageSender'>{msg.sender}</div>
            <div className='messageText'>{msg.message}</div>
            <div className='messageTime'>{new Date().toLocaleTimeString()}</div>
          </div>
        ))}
      </div>
      <div className='inputContainer'>
        <input
          type='text'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder='Type your message...'
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default AsistanChat;

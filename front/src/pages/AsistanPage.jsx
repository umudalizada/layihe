import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import AsistanChat from './AsistanChat'; 

const socket = io('http://localhost:3000');

const AsistanPage = ({ username }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('receiveMessage', (data) => {
      const { userId, message, username } = data;
      const sender = userId === socket.id ? 'You' : username;
      const messageObject = { sender, message };
      setMessages((prevMessages) => [...prevMessages, messageObject]);
    });

    return () => {
      socket.off('receiveMessage');
    };
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit('sendMessage', { message, username });
      setMessage(''); 
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div>
      <AsistanChat username={username} messages={messages} />
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

export default AsistanPage;

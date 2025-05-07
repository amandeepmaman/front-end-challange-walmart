import React from 'react';
import PropTypes from 'prop-types';
import ChatMessage from './ChatMessage';

const ChatMessages = ({ messages }) => {
  return (
    <div className="chat-messages">
      {messages.map(message => (
        <ChatMessage key={message.id} message={message} />
      ))}
    </div>
  );
};

ChatMessages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      sender: PropTypes.oneOf(['user', 'bot']).isRequired
    })
  ).isRequired
};

export default ChatMessages;
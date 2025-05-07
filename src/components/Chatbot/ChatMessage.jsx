import React from 'react';
import PropTypes from 'prop-types';

const ChatMessage = ({ message }) => {
  return (
    <div className={`chat-message ${message.sender}`}>
      <div className="message-content">
        {message.text}
      </div>
    </div>
  );
};

ChatMessage.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    sender: PropTypes.oneOf(['user', 'bot']).isRequired
  }).isRequired
};

export default ChatMessage;
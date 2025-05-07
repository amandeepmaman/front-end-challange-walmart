import React, { useContext } from 'react';
import { AppContext } from '../../../src/context/AppContext';
import useTimer from '../../../src/hooks/useTimer';

const ChatHeader = () => {
  const { resetChat, setIsChatOpen } = useContext(AppContext);
  const { seconds, reset } = useTimer();

  const handleReset = () => {
    reset(); // Reset timer
    resetChat(); // Reset chat messages
  };

  const handleClose = () => {
    setIsChatOpen(false); // Close chat window
  };

  return (
    <div className="chat-header" data-testid="chat-header">
      <div className="timer">Time: {seconds}s</div>
      <div className="chat-actions">
        <button onClick={handleReset} data-testid="reset-button">
          Reset
        </button>
        <button onClick={handleClose} data-testid="close-button">
          Close
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
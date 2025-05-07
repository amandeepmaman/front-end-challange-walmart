import React, { useContext, useRef, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import '../../styles/chatbot.css';

const Chatbot = () => {
  const { isChatOpen, messages, sendMessage } = useContext(AppContext);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isChatOpen) {
      scrollToBottom();
    }
  }, [messages, isChatOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isChatOpen) return null;

  return (
    <div className="chatbot-container" data-testid="chatbot">
      <ChatHeader data-testid="chat-header" />
      <ChatMessages messages={messages} data-testid="chat-messages" />
      <div ref={messagesEndRef} />
      <ChatInput onSend={sendMessage} data-testid="chat-input" />
    </div>
  );
};

export default Chatbot;
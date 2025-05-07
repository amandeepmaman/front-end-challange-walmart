import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [activePage, setActivePage] = useState('apps');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const resetChat = () => {
    setMessages([]);
  };

  const sendMessage = (message) => {
    const newMessage = {
      id: Date.now(),
      text: message,
      sender: 'user',
    };
    
    setMessages(prev => [...prev, newMessage]);
    
    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        "I'm a chatbot. How can I help you?",
        "That's interesting. Tell me more.",
        "I'm still learning. Can you rephrase that?",
        "Thanks for your message!",
        "I'll need to check on that for you."
      ];
      const botMessage = {
        id: Date.now() + 1,
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
        sender: 'bot',
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <AppContext.Provider
      value={{
        activePage,
        setActivePage,
        isChatOpen,
        messages,
        resetChat,
        setIsChatOpen,
        sendMessage,
        searchQuery,
        setSearchQuery
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
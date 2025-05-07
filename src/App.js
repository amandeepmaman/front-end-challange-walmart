import React, { useContext } from "react";
import { AppProvider, AppContext } from "./context/AppContext";
import Navbar from "./components/Layout/Navbar";
import SideMenu from "./components/Layout/SideMenu";
import Chatbot from "./components/Chatbot";
import Pages from "./components/Pages";

const AppContent = () => {
  const { isChatOpen, setIsChatOpen } = useContext(AppContext);

  return (
    <div className="app">
      <Navbar />
      <div className="main-content">
        <SideMenu />
        <Pages />
      </div>
      {!isChatOpen && (
        <button
          className="chatbot-toggle"
          data-testid="chat-toggle-button"
          onClick={() => setIsChatOpen(true)}
        >
          Chat
        </button>
      )}
      {isChatOpen && <Chatbot />}
    </div>
  );
};

const App = () => {
  return (
    <div data-testid="app-container">
      <AppProvider>
        <AppContent />
      </AppProvider>
    </div>
  );
};

export default App;

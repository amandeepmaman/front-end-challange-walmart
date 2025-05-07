import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ChatHeader from "../../../components/Chatbot/ChatHeader";
import { AppContext } from "../../../context/AppContext";

// Mock useTimer hook at module level
jest.mock("../../../hooks/useTimer", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    seconds: 0,
    reset: jest.fn(),
  })),
}));

describe("ChatHeader Component", () => {
  let mockResetTimer;
  let mockResetChat;
  let mockSetIsChatOpen;

  beforeEach(() => {
    mockResetTimer = jest.fn();
    mockResetChat = jest.fn();
    mockSetIsChatOpen = jest.fn();

    // Reset and remock useTimer for each test
    require("../../../hooks/useTimer").default.mockImplementation(() => ({
      seconds: 0,
      reset: mockResetTimer,
    }));
  });

  const renderChatHeader = (props = {}) => {
    return render(
      <AppContext.Provider
        value={{
          resetChat: mockResetChat,
          setIsChatOpen: mockSetIsChatOpen,
          ...props,
        }}
      >
        <ChatHeader />
      </AppContext.Provider>
    );
  };

  it("renders timer and action buttons", () => {
    renderChatHeader();
    expect(screen.getByText(/Time: 0s/)).toBeInTheDocument();
    expect(screen.getByText("Reset")).toBeInTheDocument();
    expect(screen.getByText("Close")).toBeInTheDocument();
  });

  it("calls reset functions when reset button is clicked", () => {
    renderChatHeader();

    fireEvent.click(screen.getByText("Reset"));

    expect(mockResetChat).toHaveBeenCalledTimes(1);
    expect(mockResetTimer).toHaveBeenCalledTimes(1);
  });

  it("calls close function when close button is clicked", () => {
    renderChatHeader();

    fireEvent.click(screen.getByText("Close"));

    expect(mockSetIsChatOpen).toHaveBeenCalledTimes(1);
    expect(mockSetIsChatOpen).toHaveBeenCalledWith(false);
  });
});

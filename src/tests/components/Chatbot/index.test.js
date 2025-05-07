import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Chatbot from "../../../components/Chatbot";
import App from "../../../App";
import { AppContext } from "../../../context";
// Mock child components
jest.mock("../../../components/Chatbot/ChatHeader", () => () => (
  <div data-testid="chat-header">Mock ChatHeader</div>
));
jest.mock("../../../components/Chatbot/ChatMessages", () => () => (
  <div data-testid="chat-messages">Mock ChatMessages</div>
));
jest.mock("../../../components/Chatbot/ChatInput", () => () => (
  <input data-testid="chat-input" placeholder="Type a message..." />
));

describe("Chatbot Component", () => {
  const mockMessages = [
    { id: 1, text: "Hello", sender: "user" },
    { id: 2, text: "Hi there!", sender: "bot" },
  ];
  let scrollIntoViewMock;
  beforeEach(() => {
    scrollIntoViewMock = jest.fn();
    window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;
  });

  it("opens when chat button is clicked", () => {
    render(<App></App>);
    fireEvent.click(screen.getByTestId("chat-toggle-button"));
    expect(screen.getByTestId("chatbot")).toBeInTheDocument();
  });

  it("renders all child components when open", () => {
    render(
      <AppContext.Provider
        value={{
          isChatOpen: true,
          messages: mockMessages,
          sendMessage: jest.fn(),
        }}
      >
        <Chatbot />
      </AppContext.Provider>
    );

    expect(screen.getByTestId("chat-header")).toBeInTheDocument();
    expect(screen.getByTestId("chat-messages")).toBeInTheDocument();
    expect(screen.getByTestId("chat-input")).toBeInTheDocument();
  });

  it("auto-scrolls when new messages arrive", () => {
    const { rerender } = render(
      <AppContext.Provider
        value={{
          isChatOpen: true,
          messages: [],
          sendMessage: jest.fn(),
        }}
      >
        <Chatbot />
      </AppContext.Provider>
    );

    // Update with new messages
    rerender(
      <AppContext.Provider
        value={{
          isChatOpen: true,
          messages: mockMessages,
          sendMessage: jest.fn(),
        }}
      >
        <Chatbot />
      </AppContext.Provider>
    );

    expect(scrollIntoViewMock).toHaveBeenCalled();
  });
});

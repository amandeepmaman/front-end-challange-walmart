import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ChatInput from "../../../components/Chatbot/ChatInput";

describe("ChatInput Component", () => {
  const mockSend = jest.fn();

  beforeEach(() => {
    mockSend.mockClear();
  });

  it("renders input and button", () => {
    render(<ChatInput onSend={mockSend} />);
    expect(
      screen.getByPlaceholderText("Type a message...")
    ).toBeInTheDocument();
    expect(screen.getByText("Send")).toBeInTheDocument();
  });

  it("updates input value when typing", () => {
    render(<ChatInput onSend={mockSend} />);
    const input = screen.getByPlaceholderText("Type a message...");
    fireEvent.change(input, { target: { value: "Hello" } });
    expect(input.value).toBe("Hello");
  });

  it("calls onSend when form is submitted", () => {
    render(<ChatInput onSend={mockSend} />);
    const input = screen.getByPlaceholderText("Type a message...");
    const button = screen.getByText("Send");

    fireEvent.change(input, { target: { value: "Test message" } });
    fireEvent.click(button);

    expect(mockSend).toHaveBeenCalledWith("Test message");
  });

  it("does not call onSend with empty message", () => {
    render(<ChatInput onSend={mockSend} />);
    const button = screen.getByText("Send");

    fireEvent.click(button);

    expect(mockSend).not.toHaveBeenCalled();
  });
});

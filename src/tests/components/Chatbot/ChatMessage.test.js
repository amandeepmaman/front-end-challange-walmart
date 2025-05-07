import React from "react";
import { render, screen } from "@testing-library/react";
import ChatMessage from "../../../components/Chatbot/ChatMessage";

describe("ChatMessage Component", () => {
  it("renders user message correctly", () => {
    const message = {
      id: 1,
      text: "Hello bot!",
      sender: "user",
    };

    render(<ChatMessage message={message} />);

    const messageElement = screen.getByText("Hello bot!");
    expect(messageElement).toBeInTheDocument();
    expect(messageElement.parentElement).toHaveClass("user");
  });
});

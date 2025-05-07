import React from "react";
import { render, screen } from "@testing-library/react";
import ChatMessages from "../../../components/Chatbot/ChatMessages";

describe("ChatMessages Component", () => {
  const messages = [
    { id: 1, text: "Hi there!", sender: "user" },
    { id: 2, text: "Hello!", sender: "bot" },
  ];

  it("renders all messages", () => {
    render(<ChatMessages messages={messages} />);
    expect(screen.getByText("Hi there!")).toBeInTheDocument();
    expect(screen.getByText("Hello!")).toBeInTheDocument();
  });

  it("renders correct classes for each message type", () => {
    render(<ChatMessages messages={messages} />);
    expect(screen.getByText("Hi there!").parentElement).toHaveClass("user");
    expect(screen.getByText("Hello!").parentElement).toHaveClass("bot");
  });

  it("renders empty state correctly", () => {
    render(<ChatMessages messages={[]} />);
    expect(screen.queryByText("Hi there!")).not.toBeInTheDocument();
  });
});

import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App Component", () => {
  it("renders without crashing", () => {
    render(<App />);
    expect(screen.getByTestId("app-container")).toBeInTheDocument();
  });

  it("renders the navbar", () => {
    render(<App />);
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });

  it("renders the side menu", () => {
    render(<App />);
    expect(screen.getByTestId("side-menu")).toBeInTheDocument();
  });

  it("initially hides the chatbot", () => {
    render(<App />);
    expect(screen.queryByTestId("chatbot")).not.toBeInTheDocument();
  });
});

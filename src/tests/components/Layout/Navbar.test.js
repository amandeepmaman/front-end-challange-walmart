// __tests__/components/Layout/Navbar.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../../../components/Layout/Navbar";
import { AppProvider } from "../../../context/AppContext";

describe("Navbar Component", () => {
  it("renders logo and search input", () => {
    render(
      <AppProvider>
        <Navbar />
      </AppProvider>
    );

    expect(screen.getByText("Logo")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
  });

  it("updates search query on input change", () => {
    render(
      <AppProvider>
        <Navbar />
      </AppProvider>
    );

    const searchInput = screen.getByPlaceholderText("Search...");
    fireEvent.change(searchInput, { target: { value: "test" } });

    expect(searchInput.value).toBe("test");
  });
});

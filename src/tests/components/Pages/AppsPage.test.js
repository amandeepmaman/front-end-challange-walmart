// __tests__/components/Pages/AppsPage.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import AppsPage from "../../../../src/components/Pages/AppsPage";
import { AppProvider } from "../../../context/AppContext";

describe("AppsPage Component", () => {
  it("renders page title and content", () => {
    render(
      <AppProvider>
        <AppsPage />
      </AppProvider>
    );

    expect(screen.getByText("Apps Page")).toBeInTheDocument();
    expect(screen.getAllByText(/test purpose/).length).toBeGreaterThan(0);
  });

  it("filters and highlights text based on search query", () => {
    render(
      <AppProvider value={{ searchQuery: "Lorem" }}>
        <AppsPage />
      </AppProvider>
    );

    const highlightedText = screen.getAllByText(/Lorem/);
    expect(highlightedText.length).toBeGreaterThan(0);
    expect(highlightedText[0].tagName).toBe("P");
  });
});

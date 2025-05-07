import React from "react";
import { render, screen } from "@testing-library/react";
import DocumentsPage from "../../../components/Pages/DocumentsPage";
import { AppProvider } from "../../../context/AppContext";

describe("DocumentsPage Component", () => {
  it("renders page title and document content", () => {
    render(
      <AppProvider>
        <DocumentsPage />
      </AppProvider>
    );

    expect(screen.getByText("Documents Page")).toBeInTheDocument();
    expect(screen.getByText(/Document 1/)).toBeInTheDocument();
    expect(
      screen.getByText(/React is a JavaScript library/)
    ).toBeInTheDocument();
  });

  it("filters and highlights text based on search query", () => {
    render(
      <AppProvider value={{ searchQuery: "document" }}>
        <DocumentsPage />
      </AppProvider>
    );

    const highlightedText = screen.getAllByText(/document/i);
    expect(highlightedText.length).toBeGreaterThan(0);
    expect(highlightedText[0].tagName).toBe("H2");

    // Should not show non-matching documents
    expect(screen.queryByText(/not matching/)).not.toBeInTheDocument();
  });
});

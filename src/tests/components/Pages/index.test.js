import React from "react";
import { render, screen } from "@testing-library/react";
import Pages from "../../../components/Pages";
import { AppProvider } from "../../../context/AppContext";

describe("Pages Component", () => {
  it("renders AppsPage by default", () => {
    render(
      <AppProvider>
        <Pages />
      </AppProvider>
    );
    expect(screen.getByText("Apps Page")).toBeInTheDocument();
    expect(screen.getByText(/test purpose/)).toBeInTheDocument();
  });

  it("renders AppsPage when activePage is apps", () => {
    render(
      <AppProvider value={{ activePage: "apps" }}>
        <Pages />
      </AppProvider>
    );
    expect(screen.getByText("Apps Page")).toBeInTheDocument();
  });
});

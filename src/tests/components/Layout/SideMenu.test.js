import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SideMenu from "../../../components/Layout/SideMenu";
import { AppProvider } from "../../../context/AppContext";

describe("SideMenu Component", () => {
  it("renders menu items", () => {
    render(
      <AppProvider>
        <SideMenu />
      </AppProvider>
    );

    expect(screen.getByText("Apps")).toBeInTheDocument();
    expect(screen.getByText("Documents")).toBeInTheDocument();
  });

  it("applies active class to selected menu item", () => {
    render(
      <AppProvider value={{ activePage: "documents" }}>
        <SideMenu />
      </AppProvider>
    );

    const documentsButton = screen.getByText("Documents");
    expect(documentsButton).toHaveClass("menu-item");
  });
});

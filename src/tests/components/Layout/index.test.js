// __tests__/components/Layout/index.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import Layout from "../../../components/Layout";
import { AppProvider } from "../../../context/AppContext";

describe("Layout Component", () => {
  it("renders Navbar and SideMenu with children", () => {
    render(
      <AppProvider>
        <Layout>
          <div data-testid="test-child">Test Content</div>
        </Layout>
      </AppProvider>
    );

    // Verify Navbar is rendered
    expect(screen.getByText("Logo")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();

    // Verify SideMenu is rendered
    expect(screen.getByText("Apps")).toBeInTheDocument();
    expect(screen.getByText("Documents")).toBeInTheDocument();

    // Verify children are rendered
    expect(screen.getByTestId("test-child")).toBeInTheDocument();
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it.skip("matches snapshot", () => {
    const { asFragment } = render(
      <AppProvider>
        <Layout>
          <div>Test Content</div>
        </Layout>
      </AppProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

import React from "react";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";

const Layout = ({ children }) => {
  return (
    <div className="app">
      <Navbar />
      <div className="main-content">
        <SideMenu />
        <div className="content-area">{children}</div>
      </div>
    </div>
  );
};

export default Layout;

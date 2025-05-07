import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import AppsPage from "./AppsPage";
import DocumentsPage from "./DocumentsPage";

const Pages = () => {
  const { activePage } = useContext(AppContext);

  switch (activePage) {
    case "apps":
      return <AppsPage />;
    case "documents":
      return <DocumentsPage />;
    default:
      return <AppsPage />;
  }
};

export default Pages;

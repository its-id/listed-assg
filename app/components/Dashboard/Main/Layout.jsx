import React from "react";
import Cards from "./Cards";
import Charts from "./Charts";
import Info from "./Info";

const Layout = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6">
      <Cards />
      <Charts />
      <Info />
    </div>
  );
};

export default Layout;

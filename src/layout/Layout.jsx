import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/layout.scss";
import "../styles/page.scss";

const Layout = ({ children }) => {
  return (
    <div className="main-page">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

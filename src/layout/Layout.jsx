import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/layout.scss";
import "../styles/page.scss";
import backgroundImage from "../assets/backgroundImage.avif";
const Layout = ({ children }) => {
  return (
    <div className="main-page">
      <Header />
      {children}
      <Footer />
      <img src={backgroundImage} alt="a" className="bckgrnd" />
      <div>
        <div className="overlay">
          <p>Psiholog Clinician Irina Manarca</p>
          <p className="bolded">Evidence Based Practitioner </p>
        </div>
      </div>
    </div>
  );
};

export default Layout;

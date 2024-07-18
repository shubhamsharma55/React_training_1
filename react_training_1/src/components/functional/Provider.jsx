import React from "react";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";

const Provider = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
            {children}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Provider;

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "../Sass/index.scss";

const Wrapper = ({ children }) => {
  return (
    <div className="App">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Wrapper;

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

import "../Sass/index.scss";

const Wrapper = ({ children }) => {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Advocates for Animals</title>
      </Helmet>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Wrapper;

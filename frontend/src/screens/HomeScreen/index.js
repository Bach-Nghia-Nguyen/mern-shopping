import React from "react";
import Product from "../../components/Product";
import "./style.css";

const HomeScreen = () => {
  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Latest Products</h2>

      <div className="homescreen__products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default HomeScreen;

import React from "react";
import "./style.css";

const Backdrop = ({ show, click }) => {
  return show && <div onClick={click} className="backdrop"></div>;
};

export default Backdrop;

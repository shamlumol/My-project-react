import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div style={{ height: "100px" }} className="mt-5 container w-100">
      <div className="d-flex justify-content-center">

        <div style={{ width: "400px" }}>
        <p className="fw-bold">Copyright &copy; 2024 <span className="fw-bolder" style={{color:'#083445'}}>Shamlu</span>. All Rights Reserved.</p>

        </div>
      </div>

    </div>
  );
};

export default Footer;

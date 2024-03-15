import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo-1a.jpeg" alt="" width={120} />
          <span className="secondaryText">
            Revolutionizing service connections,
            <br /> our platform offers easy technician booking,
            <br /> robust authentication, detailed analytics, and a reliable
            review system,
            <br /> enhancing user-technician interactions and service delivery.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">145 New York, FL 5467, USA</span>
          <div className="flexCenter f-menu">
            {/* <span>Property</span> */}
            <span>
              <a href="#services">Services</a>
            </span>
            {/* <span>Product</span> */}
            <span>
              <a href="#value">About us</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

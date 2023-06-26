import React from "react";
import AmazonLogo from "../../assets/amazon_logo.png";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footerMain">
        <img src={AmazonLogo} alt="footer logo" className="footerLogo" />

        <ul>
          <li>India</li>
        </ul>

        <ul>
          <li>Conditions of Use & sale</li>
          <li>Privacy Notice</li>
          <li>Amazon-clone</li>
        </ul>
      </div>
    </>
  );
}

export default Footer;

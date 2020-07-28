import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import "./Footer.scss";
function Footer() {
  return (
    <footer className="container">
      <div className="logo-row">
        <Link className="logo" to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <div className="f-info-row">
        <div>
          <p>BE THE FIRST TO KNOW</p>
          <div className="f-input-container">
            <input type="text" placeholder="Email address" />
            <button className="btn no-bg-btn">Join Now</button>
          </div>
        </div>
        <div className="f-contact">
          <div className="contact">
            <p>Email : info@stance.com</p>
            <p>Text : (949) 391-4272</p>
          </div>
          <div className="contact-week">
            <p>Mon-Th 9am-5pm PST</p>
            <p>Fri 9am-4pm PST</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

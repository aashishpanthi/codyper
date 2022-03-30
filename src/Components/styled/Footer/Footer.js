import React from "react";
import { StyledFooter } from "./Footer.styled";
import IconTelephone from "../../svgs/IconTelephone";
import IconEmail from "../../svgs/IconEmail";
import { ImGithub, ImInstagram, ImTwitter } from "react-icons/im";
import { VscLocation } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Footer = ({isabout}) => {
  return (
    <StyledFooter>
      <h2>Codyper</h2>
      <div>
        <div className="navItemWithIcon">
          <VscLocation className="icon icon-location" />
          <p>Butwal, Nepal</p>
        </div>
        <div className="navItemWithIcon">
          <IconTelephone />
          <a href="tel:++977 9867526912"> +977 9847526912</a>
        </div>
        <div className="navItemWithIcon">
          <IconEmail />
          <a href="mailto:info@aashishpanthi.me">info@aashishpanthi.me</a>
        </div>
      </div>
      <ul>
        <li>
          {
            isabout ? (<Link to="/">Home</Link>) : (<Link to="/about">About Us</Link>)
          }
        </li>
        <li>
          <Link to="/test">Test your speed</Link>
        </li>
        <li>
          <a href="https://blog.aashish-panthi.com.np/introducing-codyper-learn-to-code-and-increase-typing-speed-at-once">Guide</a>
        </li>
        <li>
          <a href="https://aashishpanthi.info.np">Developer</a>
        </li>
      </ul>
      <div className="social-icons">
        <a href="https://github.com/aashishpanthi" className="social-icon">
          <ImGithub />
        </a>
        <a href="https://twitter.com/aashishpanthi11" className="social-icon">
          <ImTwitter />
        </a>
        <a href="https://instagram.com/aashishpanthi11" className="social-icon">
          <ImInstagram />
        </a>
      </div>
    </StyledFooter>
  );
}

export default Footer;

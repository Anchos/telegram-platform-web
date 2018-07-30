import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Strong, FooterLink } from "./styles";

export const Footer = () => (
  <Wrapper className="container-fluid">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-auto">
          <Strong>Biplane</Strong>, 2018
        </div>
        <ul className="col-5">
          <div className="row no-gutters">
            <FooterLink>
              <Link to="/">Surprise</Link>
            </FooterLink>
            <FooterLink>
              <Link to="/">Contact us</Link>
            </FooterLink>
            <FooterLink>
              <Link to="/">Privacy policy</Link>
            </FooterLink>
            <FooterLink>
              <Link to="/">Terms and Conditions</Link>
            </FooterLink>
          </div>
        </ul>
      </div>
    </div>
  </Wrapper>
);

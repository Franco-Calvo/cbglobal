import React from "react";
import { Link as Anchor } from "react-router-dom";
import "./footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="container-footer">
      <div className="footer-title">
        <h2 className="footer-h">CB Global.</h2>
      </div>

      <div className="footer-about">
        <div className="box-about">
          <div className="box-soicons">
            <div className="about-social">
              <Anchor>
                <span className="icons">
                  <FaInstagram />
                </span>
              </Anchor>

              <Anchor>
                <span className="icons">
                  <FaTwitter />
                </span>
              </Anchor>

              <Anchor>
                <span className="icons">
                  <FaWhatsapp />
                </span>
              </Anchor>
            </div>

            <div className="about-links">
              <Anchor>About</Anchor>
              <Anchor>About</Anchor>
              <Anchor>About</Anchor>
            </div>
          </div>

          <div className="about-rights">
            <p className="p-rights">
              &copy; CB Global - 2022 - Todos los derechos reservados
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

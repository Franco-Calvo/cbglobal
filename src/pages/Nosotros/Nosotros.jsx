import React from "react";
import "./nosotros.css";
import image from "../../images/Image.png";

export default function Nosotros() {
  return (
    <div className="HomeNosotros">
      <div className="nosotros-title">
        <h2 className="title-one">Sobre</h2>
        <h2 className="title-two">Nosotros</h2>
      </div>

      <div className="nosotros-container">
        <div className="nosotros-contenid">
          <h2 className="title-container">Access to Enterprise</h2>
          <span>
            As a member of Cain-Surrey Capital you will have access to our team
            of experts who have extensive experience and knowledge in various
            industries and financial services. Our experts are always available
            to provide insights, guidance, and advice to help you make informed
            decisions that can drive your business forward.
          </span>
        </div>

        <div className="nosotros-contenid">
          <h2 className="title-container">Customized Solutions</h2>
          <span>
            As a member of Cain-Surrey Capital, you will have access to our team
            of experts who have extensive experience and knowledge in various
            industries and financial services. Our experts are always available
            to provide insights, guidance, and advice to help you make informed
            decisions that can drive your business forward.
          </span>
        </div>

        <div className="nosotros-contenid">
          <h2 className="title-container">Global Reach</h2>
          <span>
            Cain-Surrey Capital has a global presence and we have a deep
            understanding of the local market dynamics in various regions. As a
            member of Cain-Surrey Capital, you can benefit from our global reach
            and expertise, and tap into new markets and opportunities that can
            help you grow your business.
          </span>
        </div>

        <div className="nosotros-contenid">
          <h2 className="title-container">Trust and Integrity</h2>
          <span>
            We believe that trust and integrity are the foundation of our
            business, and we are committed to maintaining the highest ethical
            standards in everything we do. When you become a member of
            Cain-Surrey Capital, you can trust that we will always act in your
            best interest.
          </span>
        </div>
      </div>

      <div className="nosotros-cards">
        <div className="card">
          <h2>Innovative Approach</h2>
          <span>
            We combine our extensive experience and knowledge with cutting-edge
            technology to develop customized solutions that help our clients
            achieve their goals.
          </span>
        </div>
        <div className="card">
          <h2>Client-Centered Ethos</h2>
          <span>
            We believe that the success of our clients is our success, and we
            are committed to building long-term relationships based on trust,
            integrity, and transparency
          </span>
        </div>
        <div className="card">
          <h2>Local Expertise</h2>
          <span>
            We combine our global reach with local expertise to provide our
            clients with insights and advice that are tailored to the specific
            market dynamics in their region.
          </span>
        </div>
      </div>
    </div>
  );
}

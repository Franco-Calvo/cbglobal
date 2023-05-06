import React from "react";
import "./nosotros.css";
import imgOne from "../../images/us-one.png";
import imgTwo from "../../images/us-two.png";
import imgThree from "../../images/us-three.png";
import imgFour from "../../images/us-four.png";

export default function Nosotros() {
  return (
    <div className="HomeNosotros">
      <div className="us-title">
        <h2>Nosotros</h2>
      </div>
      <div className="us-p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut suscipit
        harum, nulla doloremque tempora architecto dolor minima at aspernatur
        officiis odio cumque perferendis necessitatibus ipsa voluptatibus quidem
        aliquid dolorum nemo. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Aut suscipit harum, nulla doloremque tempora architecto dolor
        minima at aspernatur officiis odio cumque perferendis necessitatibus
        ipsa voluptatibus quidem aliquid dolorum nemo. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Aut suscipit harum, nulla doloremque
        tempora architecto dolor minima at aspernatur officiis odio cumque
        perferendis necessitatibus ipsa voluptatibus quidem aliquid dolorum
        nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
        suscipit harum, nulla doloremque tempora architecto dolor minima at
        aspernatur officiis odio cumque perferendis necessitatibus ipsa
        voluptatibus quidem aliquid dolorum nemo. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Aut suscipit harum, nulla doloremque
        tempora architecto dolor minima at aspernatur officiis odio cumque
        perferendis necessitatibus ipsa voluptatibus quidem aliquid dolorum
        nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
        suscipit harum, nulla doloremque tempora architecto dolor minima at
        aspernatur officiis odio cumque perferendis necessitatibus ipsa
        voluptatibus quidem aliquid dolorum nemo. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Aut suscipit harum, nulla doloremque
        tempora architecto dolor minima at aspernatur officiis odio cumque
        perferendis necessitatibus ipsa voluptatibus quidem aliquid dolorum
        nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>

      <div className="container-img">
        <div className="box-img">
          <div className="img-one">
            <img src={imgOne} alt="asd" />
          </div>

          <div className="img-two">
            <img src={imgTwo} alt="asd" />
          </div>
        </div>

        <div className="box-img">
          <div className="img-one">
            <img src={imgThree} alt="asd" />
          </div>

          <div className="img-two">
            <img src={imgFour} alt="asd" />
          </div>
        </div>
      </div>
    </div>
  );
}

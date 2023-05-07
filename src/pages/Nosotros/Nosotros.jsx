import React from "react";
import "./nosotros.css";
import image from "../../images/Image.png";

export default function Nosotros() {
  return (
    <div className="HomeNosotros">
      <div className="container-page">
        <div className="box-father">
          <div className="box-childs">
            <h2 className="first-h">Sobre</h2>
          </div>
          <div className="box-childs">
            <h2 className="second-h">Nosotros</h2>
          </div>
        </div>

        <div className="container-frases">
          <div className="box-one">
            <div className="box-child child-one">
              <div className="box-title">
                <label>01</label>
                <h3 className="asd">Access to Enterprise</h3>
              </div>
              <span>
                Contamos con un equipo de expertos altamente calificados en
                finanzas, inversiones y seguros, con años de experiencia en el
                sector financiero. Nuestra capacidad para entender las
                necesidades de nuestros clientes y crear soluciones
                personalizadas nos distingue de la competencia.
              </span>
              •
            </div>
            <div className="box-child">
              <div className="box-title">
                <label>03</label>
                <h3 className="asd">Global Reach</h3>
              </div>

              <span>
                En nuestra empresa, valoramos la integridad y la transparencia
                en todo lo que hacemos. Trabajamos diligentemente para
                asegurarnos de que nuestros clientes comprendan completamente
                sus opciones financieras y las consecuencias de cada una de
                ellas.
              </span>
            </div>
          </div>

          <div className="box-two">
            <div className="box-child child-one">
              <div className="box-title">
                <label>02</label>
                <h3 className="asd">Customized Solutions</h3>
              </div>
              <span>
                Estamos comprometidos en construir relaciones a largo plazo con
                nuestros clientes, basadas en la confianza y el respeto mutuo.
                Nos enorgullece nuestra capacidad para ayudar a nuestros
                clientes a alcanzar sus objetivos financieros y estamos ansiosos
                de trabajar con usted para hacer lo mismo.
              </span>
            </div>
            <div className="box-child ">
              <div className="box-title">
                <label>04</label>
                <h3 className="asd">Trust and Integrity</h3>
              </div>
              <span>
                Gracias por considerar nuestra empresa para sus necesidades
                financieras. Esperamos tener la oportunidad de ayudarle a
                alcanzar sus objetivos financieros y alcanzar la estabilidad
                financiera que busca.
              </span>
            </div>
          </div>
        </div>

        <div className="container-cards">
          <div className="card">
            <div className="cards-contenid">
              <label>01</label>
              <h3>Innovative Approach</h3>
              <span className="span-card">
                We combine our extensive experience and knowledge with
                cutting-edge technology to develop customized solutions that
                help our clients achieve their goals.
              </span>
            </div>
          </div>
          <div className="card">
            <div className="cards-contenid">
              <label>02</label>
              <h3>Client-Centered Ethos</h3>
              <span className="span-card">
                We believe that the success of our clients is our success, and
                we are committed to building long-term relationships based on
                trust, integrity, and transparency
              </span>
            </div>
          </div>
          <div className="card">
            <div className="cards-contenid">
              <label>03</label>
              <h3>Local Expertise</h3>
              <span className="span-card">
                We combine our global reach with local expertise to provide our
                clients with insights and advice that are tailored to the
                specific market dynamics in their region.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

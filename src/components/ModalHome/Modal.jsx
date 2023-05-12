import React, { useEffect, useState } from "react";
import "./modal.css";
import { useTranslation } from "react-i18next";

export default function Modal(props) {
  const [titulo, setTitulo] = useState("CB");
  const [titulos, setTitulos] = useState("GLOBAL");
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    function animate() {
      const tituloOriginal = titulo && titulos;
      let indice = 0;

      const temporizador = setInterval(() => {
        const letras =
          tituloOriginal.slice(0, indice) + (indice % 2 ? "_" : " ");
        setTitulo && setTitulos(letras);
        indice++;

        if (indice > tituloOriginal.length) {
          clearInterval(temporizador);
          setTitulo && setTitulos(tituloOriginal);
          setTimeout(animate, 1000);
        }
      }, 100);
    }

    animate();
  }, []);

  function handleEnglish() {
    i18n.changeLanguage("en");
    localStorage.setItem("language", "en");
    props.onClose(false);
  }

  function handleSpanish() {
    i18n.changeLanguage("es");
    localStorage.setItem("language", "es");
    props.onClose(false);
  }

  const { t, changeLanguage, i18n } = useTranslation("globals");

  return (
    <div className="pantalla-entrada">
      <h1 className="titulo">
        {titulo} {titulos}
      </h1>
      <div className="containerButtons">
        <p className="descripcion">Select your language to continue</p>
        <div className="containerLanguages">
          <div className="svgContainer" onClick={handleEnglish}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="512"
              height="512"
              viewBox="0 0 512 512"
              fill="none"
            >
              <g clip-path="url(#clip0_61_19893)">
                <path
                  d="M256 512C397.385 512 512 397.385 512 256C512 114.615 397.385 0 256 0C114.615 0 0 114.615 0 256C0 397.385 114.615 512 256 512Z"
                  fill="#F0F0F0"
                />
                <path
                  d="M52.9194 100.141C32.8104 126.304 17.6474 156.459 8.81836 189.218H141.996L52.9194 100.141Z"
                  fill="#0052B4"
                />
                <path
                  d="M503.18 189.219C494.351 156.461 479.187 126.306 459.079 100.143L370.004 189.219H503.18Z"
                  fill="#0052B4"
                />
                <path
                  d="M8.81836 322.783C17.6484 355.541 32.8114 385.696 52.9194 411.858L141.993 322.783H8.81836Z"
                  fill="#0052B4"
                />
                <path
                  d="M411.857 52.9204C385.694 32.8114 355.54 17.6484 322.781 8.81836V141.995L411.857 52.9204Z"
                  fill="#0052B4"
                />
                <path
                  d="M100.141 459.078C126.304 479.187 156.459 494.35 189.217 503.18V370.004L100.141 459.078Z"
                  fill="#0052B4"
                />
                <path
                  d="M189.216 8.81836C156.458 17.6484 126.303 32.8114 100.141 52.9194L189.216 141.994V8.81836Z"
                  fill="#0052B4"
                />
                <path
                  d="M322.783 503.18C355.541 494.35 385.696 479.187 411.858 459.079L322.783 370.004V503.18Z"
                  fill="#0052B4"
                />
                <path
                  d="M370.004 322.783L459.079 411.859C479.187 385.697 494.351 355.541 503.18 322.783H370.004Z"
                  fill="#0052B4"
                />
                <path
                  d="M509.833 222.609H289.393H289.392V2.167C278.461 0.744 267.317 0 256 0C244.681 0 233.539 0.744 222.609 2.167V222.607V222.608H2.167C0.744 233.539 0 244.683 0 256C0 267.319 0.744 278.461 2.167 289.391H222.607H222.608V509.833C233.539 511.256 244.681 512 256 512C267.317 512 278.461 511.257 289.391 509.833V289.393V289.392H509.833C511.256 278.461 512 267.319 512 256C512 244.683 511.256 233.539 509.833 222.609Z"
                  fill="#D80027"
                />
                <path
                  d="M322.783 322.784L437.019 437.02C442.273 431.768 447.285 426.277 452.067 420.585L354.265 322.783H322.783V322.784Z"
                  fill="#D80027"
                />
                <path
                  d="M189.217 322.783H189.215L74.9805 437.018C80.2325 442.272 85.7235 447.284 91.4155 452.066L189.217 354.262V322.783Z"
                  fill="#D80027"
                />
                <path
                  d="M189.218 189.219V189.217L74.9816 74.9805C69.7276 80.2325 64.7156 85.7235 59.9336 91.4155L157.737 189.218H189.218V189.219Z"
                  fill="#D80027"
                />
                <path
                  d="M322.783 189.219L437.02 74.9806C431.768 69.7266 426.277 64.7146 420.585 59.9336L322.783 157.737V189.219Z"
                  fill="#D80027"
                />
              </g>
              <defs>
                <clipPath id="clip0_61_19893">
                  <rect width="512" height="512" fill="white" />
                </clipPath>
              </defs>
            </svg>
            English
          </div>
          <div className="svgContainer" onClick={handleSpanish}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="512"
              height="512"
              viewBox="0 0 512 512"
              fill="none"
            >
              <g clip-path="url(#clip0_61_19646)">
                <path
                  d="M0 255.999C0 287.313 5.633 317.309 15.923 345.042L256 367.303L496.077 345.042C506.367 317.309 512 287.313 512 255.999C512 224.685 506.367 194.689 496.077 166.956L256 144.695L15.923 166.956C5.633 194.689 0 224.685 0 255.999H0Z"
                  fill="#FFDA44"
                />
                <path
                  d="M496.078 166.957C459.907 69.473 366.072 0 256.001 0C145.93 0 52.0948 69.473 15.9238 166.957H496.078Z"
                  fill="#D80027"
                />
                <path
                  d="M15.9238 345.043C52.0948 442.527 145.93 512 256.001 512C366.072 512 459.907 442.527 496.078 345.043H15.9238Z"
                  fill="#D80027"
                />
              </g>
              <defs>
                <clipPath id="clip0_61_19646">
                  <rect width="512" height="512" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Spanish
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CarouselComponent = () => {
  return (
    <Carousel autoPlay infiniteLoop>
      <div>
        <img src={require("../../assets/img/AmigasHappyHour.png")} alt="" />
      </div>
      <div>
        <img src={require("../../assets/img/AmigosBrindando.png")} alt="" />
      </div>
      <div>
        <img src={require("../../assets/img/AmigosConversando.png")} alt="" />
      </div>
      <div>
        <img
          src={require("../../assets/img/AmigosBrindandoComGarrafa.png")}
          alt=""
        />
      </div>
      <div>
        <img
          src={require("../../assets/img/AmigosConfraternizando.png")}
          alt=""
        />
      </div>
      <div>
        <img
          src={require("../../assets/img/AmigosDepoisDoTrabalho.png")}
          alt=""
        />
      </div>
      <div>
        <img src={require("../../assets/img/AmigosNovasIdeias.png")} alt="" />
      </div>
      <div>
        <img src={require("../../assets/img/AmigosSelfie.png")} alt="" />
      </div>
      <div>
        <img src={require("../../assets/img/AssistindoJogo.png")} alt="" />
      </div>
      <div>
        <img src={require("../../assets/img/BebendoCerveja.png")} alt="" />
      </div>
      <div>
        <img
          src={require("../../assets/img/BrindeAmigosReunidos.png")}
          alt=""
        />
      </div>
      <div>
        <img src={require("../../assets/img/CasalConversando.png")} alt="" />
      </div>
      <div>
        <img src={require("../../assets/img/ConversaAmigas.png")} alt="" />
      </div>
      <div>
        <img src={require("../../assets/img/Namorados.png")} alt="" />
      </div>
      <div>
        <img src={require("../../assets/img/Sinuca.png")} alt="" />
      </div>
      <div>
        <img src={require("../../assets/img/Barman.png")} alt="" />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;

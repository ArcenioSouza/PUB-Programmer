import React from "react";
import Container from "./StyledSobre";

const Sobre = () => {
   return (
      <Container>
         <div className="containerInformacoes">
            <div className="paragrafo">
               <p>
                  O PUB Programmer nasceu em 2022, a idéia surgiu durante uma
                  reunião de grupo, onde o objetivo era criar uma aplicação web
                  de gerenciamento de PUBs. Como não existe empreendimentos
                  desse segmento voltado para programadores, decidimos investir
                  na idéia e criar um ambiente descontraído, com diversas opções
                  de entretenimento e wifi de alta velocidade gratuito para
                  nossos clientes.
               </p>
            </div>
            <div className="imagemAmigos">
               <img
                  src={require("../../assets/img/AmigosConversando.png")}
                  alt=""
               />
            </div>
         </div>
      </Container>
   );
};

export default Sobre;

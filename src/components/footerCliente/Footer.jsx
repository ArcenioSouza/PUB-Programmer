import React from "react";
import Container from "./StyledFooter";

const FooterCliente = () => {
   return (
      <Container>
         <div className="logoEmpresa">
            <img src={require("../../assets/img/Logotipo-dark.png")} alt="" />
         </div>
         <div className="redesSociais">
            <h1>Redes Sociais</h1>
            <div>
               <img src={require("../../assets/img/iconFacebook.png")} alt="" />
               <img
                  src={require("../../assets/img/iconInstagram.png")}
                  alt=""
               />
               <img src={require("../../assets/img/iconTwiter.png")} alt="" />
               <img src={require("../../assets/img/iconWhatsApp.png")} alt="" />
            </div>
         </div>
         <div className="contato">
            <h1>Contato</h1>
            <div>
               <img
                  id="iEmail"
                  src={require("../../assets/img/iconEmail.png")}
                  alt=""
               />
               <img src={require("../../assets/img/iconTelefone.png")} alt="" />
            </div>
         </div>
         <div className="localizacao">
            <h1>Endereço</h1>
            <div className="imagens-endereco">
               <img
                  id="iEmail"
                  src={require("../../assets/img/iconEndereco.png")}
                  alt=""
               />
               <div className="endereco">
                  <p>Avenida Paulista, 1264</p>
                  <p>São Paulo - SP</p>
               </div>
               <img src={require("../../assets/img/logoGoogleMaps.png")} alt="" />
            </div>
         </div>
      </Container>
   );
};

export default FooterCliente;

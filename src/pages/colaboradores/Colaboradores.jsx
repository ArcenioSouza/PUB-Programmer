import React from "react";
import Container from "./StyledColaboradores";
import Arcenio from "../../assets/img/arcenio.png";
import Hugo from "../../assets/img/hugo.png";
import Gicelle from "../../assets/img/gicelle.png";
import Camba from "../../assets/img/camba.png";
import Milena from "../../assets/img/milena.png";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import funcionarios from "../../services/bdDadosColaboradores";

const Colaboradores = () => {
   const { id } = useParams();
   return (
      <Container>
         <div className="imagensColaboradores">
            <NavLink to="/colaboradores/1">
               <img src={Arcenio} alt="" />
            </NavLink>
            <NavLink to="/colaboradores/2">
               <img src={Hugo} alt="" />
            </NavLink>
            <NavLink to="/colaboradores/3">
               <img src={Gicelle} alt="" />
            </NavLink>
            <NavLink to="/colaboradores/4">
               <img src={Camba} alt="" />
            </NavLink>
            <NavLink to="/colaboradores/5">
               <img src={Milena} alt="" />
            </NavLink>
            <NavLink to="/colaboradores/6">
               <img src="https://randomuser.me/api/portraits/women/62.jpg" alt="" />
            </NavLink>
            <NavLink to="/colaboradores/7">
               <img src="https://randomuser.me/api/portraits/women/64.jpg" alt="" />
            </NavLink>
            <NavLink to="/colaboradores/8">
               <img src="https://randomuser.me/api/portraits/men/6.jpg" alt="" />
            </NavLink>
            <NavLink to="/colaboradores/9">
               <img src="https://randomuser.me/api/portraits/men/4.jpg" alt="" />
            </NavLink>            
         </div>
         <div className="dadosColaboradores">
            <h1>Informações do colaborador</h1>
            <div className="containerDados">
               {id === undefined ? (
                  <p>
                     Clique na foto de um de nossos colaboradores para saber
                     mais sobre ele
                  </p>
               ) : (
                  funcionarios.map((funcionario, index) => {
                     if (funcionario.id === id) {
                        return (
                           <div key={index}>
                              <p>{funcionario.nome}</p>
                              <p>{funcionario.idade}</p>
                              <p>{funcionario.cargo}</p>
                              <p>{funcionario.nascimento}</p>
                              <p>{funcionario.anoAdmissao}</p>
                              <p>{funcionario.hobbie}</p>
                           </div>
                        );
                     } else{
                        return(<></>)
                     }
                  })
               )}
            </div>
         </div>
      </Container>
   );
};

export default Colaboradores;

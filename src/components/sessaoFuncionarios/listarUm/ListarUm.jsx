import React, { useState } from "react";
import {
   formataCPF,
   formataReais,
} from "../../../services/formatacaoDeDados.js";
import api from "../../../services/api";
import Button from "../../button/Button";
import Container from "./StyleListarUm.jsx";

const ListarUm = () => {
   const [idFuncionario, setIdFuncionario] = useState("");
   const [informacoesFuncionario, setInformacoesFuncionario] = useState([]);

   function buscarFuncionario(event) {
      event.preventDefault();
      api.get(`/employee/${idFuncionario}`).then((response) => {
         setInformacoesFuncionario(response.data);
      });
   }

   return (
      <Container>
         <form>
            <label htmlFor="id">Digite o id do funcionário</label>
            <div>
               <input
                  type="text"
                  name="id"
                  id="inputId"
                  value={idFuncionario}
                  onChange={(e) => setIdFuncionario(e.target.value)}
               />
               <Button text="Buscar" onClick={buscarFuncionario} />
            </div>
         </form>
         <div className="informacoesDoFuncionario">
            {informacoesFuncionario.length === 0 ? (
               <p>Digite o id de um funcionário e clique em buscar</p>
            ) : (
               <ul>
                  <li>
                     <b>Id:</b> {informacoesFuncionario._id}
                  </li>
                  <li>
                     <b>Nome:</b> {informacoesFuncionario.name}
                  </li>
                  <li>
                     <b>Cargo:</b> {informacoesFuncionario.job}
                  </li>
                  <li>
                     <b>Salário:</b> {formataReais(informacoesFuncionario.wage)}
                  </li>
                  <li>
                     <b>CPF:</b> {formataCPF(informacoesFuncionario.cpf)}
                  </li>
               </ul>
            )}
         </div>
      </Container>
   );
};

export default ListarUm;

import React, { useState } from "react";
import api from "../../../services/api";
import Button from "../../button/Button";
import Container from "./StyledListarUm.jsx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ListarUm = () => {
   const [idFornecedores, setIdFornecedores] = useState("");
   const [informacoesFornecedores, setInformacoesFornecedores] = useState([]);

   function buscarFornecedores(event) {
      event.preventDefault();
      api.get(`/suppliers/${idFornecedores}`)
         .then((response) => {
            if (response.data !== null) {
               setInformacoesFornecedores(response.data);
               toast.success("Dados obtidos com sucesso");
            } else {
               toast.error("Não existe fornecedores com esse Id");
            }
         })
         .catch((error) => {
            console.error("Error", error);
            toast.error("Não foi possível obter os dados do fornecedores");
         });
   }

   return (
      <Container>
         <form>
            <label htmlFor="id">Digite o id do fornecedores</label>
            <div>
               <input
                  type="text"
                  name="id"
                  id="inputId"
                  value={idFornecedores}
                  onChange={(e) => setIdFornecedores(e.target.value)}
               />
               <Button text="Buscar" onClick={buscarFornecedores} />
            </div>
         </form>
         <div className="informacoesDoFornecedores">
            {informacoesFornecedores.length === 0 ? (
               <p>Digite o id de um fornecedores e clique em buscar</p>
            ) : (
               <ul>
                  <li>
                     <b>Id:</b> {informacoesFornecedores._id}
                  </li>
                  <li>
                     <b>Nome:</b> {informacoesFornecedores.name}
                  </li>
                  <li>
                     <b>Cnpj:</b> {informacoesFornecedores.cnpj}
                  </li>
                  <li>
                     <b>Telefone:</b> {informacoesFornecedores.number}
                  </li>
                  <li>
                     <b>E-mail:</b> {informacoesFornecedores.email}
                  </li>
               </ul>
            )}
         </div>
         <ToastContainer position="top-right" autoClose={3000} />
      </Container>
   );
};

export default ListarUm;
import React from "react";
import Container from "./StyledSalvar";
import Button from "../../button/Button";
import { useForm } from "react-hook-form";
import api from "../../../services/api.js"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Salvar = () => {
  const {register, handleSubmit} = useForm();

  const onSubmit = (data) => {
     toast.promise(
      api.post("/suppliers", data),
      {
         pending: "Enviando informações de fornecedores",
         error: "Erro ao salvar os dados",
         success: "Dados salvos com sucesso",
      }
     )    
  }

   return (
      <Container>
         <h3>Digite as informações do fornecedores que deseja salvar</h3>
         <div className="inputs">
         <label htmlFor="name">Nome: </label>
            <input type="text" {...register("name")} />
            <div className="inputsCnpjTelefone">
               <div className="containerCnpj">
                  <label htmlFor="cnpj">Cnpj: </label>
                  <input type="text" {...register("cnpj")} />
               </div>
               <div className="containerTelefone">
                  <label htmlFor="number">Telefone: </label>
                  <input type="number" {...register("number")} />
               </div>
            </div>
            <label htmlFor="email">E-mail: </label>
            <input type="text" {...register("email")} />
         </div>
         <Button text="Salvar" onClick={handleSubmit(onSubmit)} />
         <ToastContainer position="top-right" autoClose={3000}/>
      </Container>
   );
};

export default Salvar;


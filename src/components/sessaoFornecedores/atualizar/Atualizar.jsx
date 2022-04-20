import React from "react";
import Container from "./StyledAtualizar";
import Button from "../../button/Button";
import { useForm } from "react-hook-form";
import api from "../../../services/api.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Atualizar = () => {
   const { register, handleSubmit } = useForm();

   const onSubmit = (data) => {
      toast.promise(
         api.put(`/suppliers/${data.id}`, data),
         {
            pending: "Enviando informações de fornecedores",
            error: "Erro ao atualizar os dados",
            success: "Dados atualizados com sucesso",
         }
      )          
   };

   return (
      <Container>
         <h3>Digite as informações do fornecedores que deseja atualizar</h3>
         <div className="inputs">
            <label htmlFor="id">Id: </label>
            <input type="text" {...register("id")} />
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
         <Button text="Atualizar" onClick={handleSubmit(onSubmit)} />
         <ToastContainer position="top-right" autoClose={3000}/>
      </Container>
   );
};

export default Atualizar;

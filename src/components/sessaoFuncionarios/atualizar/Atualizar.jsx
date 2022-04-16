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
         api.put(`/employee/${data.id}`, data),
         {
            pending: "Enviando informações de funcionários",
            error: "Erro ao atualizar os dados",
            success: "Dados atualizados com sucesso",
         }
        )    
      
   };

   return (
      <Container>
         <h3>Digite as informações do funcionário que deseja atualizar</h3>
         <div className="inputs">
            <label htmlFor="id">Id: </label>
            <input type="text" {...register("id")} />
            <label htmlFor="name">Nome: </label>
            <input type="text" {...register("name")} />
            <div className="inputsCargoSalario">
               <div className="containerCargo">
                  <label htmlFor="job">Cargo: </label>
                  <select {...register("job")}>
                     <option value="Gerente">Gerente</option>
                     <option value="Barman">Barman</option>
                     <option value="Auxiliar de Cozinha">
                        Auxiliar de Cozinha
                     </option>
                     <option value="Cozinheiro">Cozinheiro</option>
                     <option value="Garçon">Garçon</option>
                     <option value="Copeiro">Copeiro</option>
                  </select>
               </div>
               <div className="containerSalario">
                  <label htmlFor="wage">Salário: </label>
                  <input type="number" {...register("wage")} />
               </div>
            </div>
            <label htmlFor="cpf">CPF: </label>
            <input type="number" {...register("cpf")} />
         </div>
         <Button text="Atualizar" onClick={handleSubmit(onSubmit)} />
         <ToastContainer position="top-right" autoClose={3000}/>
      </Container>
   );
};

export default Atualizar;

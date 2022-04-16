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
      api.post("/employee", data),
      {
         pending: "Enviando informações de funcionários",
         error: "Erro ao salvar os dados",
         success: "Dados salvos com sucesso",
      }
     )    
  }

   return (
      <Container>
         <h3>Digite as informações do funcionário que deseja salvar</h3>
         <div className="inputs">
            <label htmlFor="name">Nome: </label>
            <input type="text" {...register("name")}/>
            <label htmlFor="job">Cargo: </label>
            <select {...register("job")}>
              <option value="Gerente">Gerente</option>
              <option value="Barman">Barman</option>
              <option value="Auxiliar de Cozinha">Auxiliar de Cozinha</option>
              <option value="Cozinheiro">Cozinheiro</option>
              <option value="Garçon">Garçon</option>
              <option value="Copeiro">Copeiro</option>
            </select>
            <label htmlFor="wage">Salário: </label>
            <input type="number" {...register("wage")} />
            <label htmlFor="cpf">CPF: </label>
            <input type="number" {...register("cpf")} />
         </div>
         <Button text="Salvar" onClick={handleSubmit(onSubmit)}/>
         <ToastContainer position="top-right" autoClose={3000}/>
      </Container>
   );
};

export default Salvar;

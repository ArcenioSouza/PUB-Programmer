import React from "react";
import Container from "./StyledSalvar";
import Button from "../../button/Button";
import { useForm } from "react-hook-form";
import api from "../../../services/api.js"

const Salvar = () => {
  const {register, handleSubmit} = useForm();

  const onSubmit = (data) => {
    api.post("/employee", data)
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
      </Container>
   );
};

export default Salvar;

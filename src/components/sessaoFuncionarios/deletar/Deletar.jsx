import React from "react";
import Button from "../../button/Button";
import Container from "./StyledDeletar.jsx";
import { useForm } from "react-hook-form";
import api from "../../../services/api";

const Deletar = () => {
   const {register, handleSubmit} = useForm();

   const onSubmit = (data) => {
      api.delete(`/employee/${data.id}`)
   }

   return (
      <Container>
         <form>
            <label htmlFor="id">Digite o id do funcionário</label>
            <div>
               <input
                  type="text"
                  {...register("id")}                
               />
               <Button text="Deletar" onClick={handleSubmit(onSubmit)}/>
            </div>
         </form>
      </Container>
   );
};

export default Deletar;

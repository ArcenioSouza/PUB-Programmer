import React from "react";
import { InputStyled } from "./StyledInput";

const Input = ({ type, placeholder, onChange, value }) => {
  return (
    <>
      <InputStyled
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </>
  );
};

export default Input;

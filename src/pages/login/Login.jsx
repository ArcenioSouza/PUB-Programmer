import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import {
  LoginContainer,
  MainContainer,
  LoginText,
  InputContainer,
} from "./StyledLogin";
import api from "../../services/api.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleOnClick() {
    api.get("/logins").then((response) => {
      const logins = response.data;

      logins.forEach((login) => {
        if (login.email === email && login.password === password) {
          navigate("/adm");
        } else {
          alert("Login ou senha incorretos !");
        }
      });
    });
  }

  return (
    <MainContainer>
      <LoginContainer>
        <LoginText>Login</LoginText>
        <InputContainer>
          <Input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </InputContainer>
        <Button
          id="buttonLogin"
          text="Iniciar Sessão"
          onClick={handleOnClick}
        />
      </LoginContainer>
    </MainContainer>
  );
};

export default Login;

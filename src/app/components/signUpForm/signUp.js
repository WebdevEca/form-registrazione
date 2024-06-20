"use client";

import InputForm from "../inputForm/inputForm";
import styles from "./signUp.module.css";
import { useState } from "react";

const SignUpForm = () => {
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confermaPassword, setConfermaPassword] = useState("");

  const handleNome = (event) => {
    setNome(event.target.value);
    console.log("il nome è: ", event.target.value);
  };

  const handleCognome = (event) => {
    setCognome(event.target.value);
    console.log("il cognome è: ", event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
    console.log("l'email è: ", event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
    console.log("la password è: ", event.target.value);
  };

  const handleConfermaPassword = (event) => {
    setConfermaPassword(event.target.value);
    console.log("la conferma della password è: ", event.target.value);
  };

  const array = [nome, cognome, email, password];

  return (
    <div className="flex flex-col items-center gap-4">
      <h3 className="text-2xl">Non hai un account?</h3>
      <p className="text-base">Crealo subito in pochi passi</p>
      <form
        className="flex flex-col gap-4"
        onSubmit={() => {
          console.log(array);
        }}
      >
        <InputForm
          type="text"
          value={nome}
          placeholder="Nome"
          onChange={handleNome}
        />
        <InputForm
          type="text"
          value={cognome}
          placeholder="cognome"
          onChange={handleCognome}
        />
        <InputForm
          type="email"
          value={email}
          placeholder="email"
          onChange={handleEmail}
        />
        <InputForm
          type="password"
          value={password}
          placeholder="password"
          onChange={handlePassword}
        />
        <InputForm
          type="password"
          value={confermaPassword}
          placeholder="conferma password"
          onChange={handleConfermaPassword}
        />
        <InputForm type="submit" value="Registrati" />
      </form>
      <img src="/standard.svg" alt="standard smile" />
    </div>
  );
};

export default SignUpForm;

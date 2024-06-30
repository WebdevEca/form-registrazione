"use client";

import InputForm from "../inputForm/inputForm";
import styles from "./signUp.module.css";
import { useState } from "react";
import { userAuth } from "@/app/firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUpForm = () => {
  const defaultInputVariables = {
    nome: "",
    cognome: "",
    email: "",
    password: "",
    confermaPassword: "",
  };

  const [inputVariables, setInputVariables] = useState(defaultInputVariables);
  const { nome, cognome, email, password, confermaPassword } = inputVariables;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputVariables({
      ...inputVariables,
      [name]: value,
    });
  };

  const testAuth = async (event) => {
    event.preventDefault();
    try {
      const { user } = await userAuth(email, password);
      console.log(user);
      setInputVariables(defaultInputVariables);
    } catch (error) {
      console.log("errore: ", error);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h3 className="text-2xl">Non hai un account?</h3>
      <p className="text-base">Crealo subito in pochi passi</p>
      <form className="flex flex-col gap-4" onSubmit={testAuth}>
        <InputForm
          type="text"
          name="nome"
          value={nome}
          placeholder="Nome"
          onChange={handleChange}
        />
        <InputForm
          type="text"
          name="cognome"
          value={cognome}
          placeholder="cognome"
          onChange={handleChange}
        />
        <InputForm
          type="email"
          name="email"
          value={email}
          placeholder="email"
          onChange={handleChange}
        />
        <InputForm
          type="password"
          name="password"
          value={password}
          placeholder="password"
          onChange={handleChange}
        />
        <InputForm
          type="password"
          name="confermaPassword"
          value={confermaPassword}
          placeholder="conferma password"
          onChange={handleChange}
        />
        <InputForm type="submit" value="Registrati" />
      </form>
      <img src="/standard.svg" alt="standard smile" />
    </div>
  );
};

export default SignUpForm;

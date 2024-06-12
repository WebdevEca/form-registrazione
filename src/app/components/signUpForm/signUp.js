import InputForm from "../inputForm/inputForm";
import styles from "./signUp.module.css";

const SignUpForm = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h3 className="text-2xl">Non hai un account?</h3>
      <p className="text-base">Crealo subito in pochi passi</p>
      <form className="flex flex-col gap-4">
        <InputForm type="text" placeholder="Nome" />
        <InputForm type="text" placeholder="Cognome" />
        <InputForm type="email" placeholder="Email per la registrazione" />
        <InputForm
          type="password"
          placeholder="Password per la registrazione"
        />
        <InputForm type="password" placeholder="Conferma la password" />
        <InputForm type="submit" value="Registrati" />
      </form>
      <img src="/standard.svg" alt="standard smile" />
    </div>
  );
};

export default SignUpForm;

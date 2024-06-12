import styles from "./signIn.module.css";
import InputForm from "../inputForm/inputForm";

const SignInForm = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h3 className="text-2xl">Accedi con Email e Password</h3>
      <p className="text-base">
        Inserisci i tuoi dati per effettuare il Log In
      </p>
      <form className="flex flex-col gap-4">
        <InputForm type="email" placeholder="Inserisci la tua Email" />
        <InputForm type="password" placeholder="Inserisci la tua password" />
        <InputForm type="submit" value="Accedi" className />
      </form>
      <img src="/standard.svg" alt="standard smile" />
    </div>
  );
};

export default SignInForm;

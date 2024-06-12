import Image from "next/image";
import SignInForm from "./components/signInForm/signInForm";

import styles from "./home.module.css";
import SignUpForm from "./components/signUpForm/signUp";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4">
      <SignInForm />
      <hr className="w-2/5" />
      <SignUpForm />
    </div>
  );
}

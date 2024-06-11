import Image from "next/image";
import SignInForm from "./components/signInForm/signInForm";

import styles from "./home.module.css";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center gap-4">
      <section className={styles.signInSection}>
        <SignInForm />
      </section>
      <hr />
      <section className={styles.signUpSection}>
        <h1>Sezione Sign Up</h1>
      </section>
    </div>
  );
}

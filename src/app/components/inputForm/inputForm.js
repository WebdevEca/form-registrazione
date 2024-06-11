import styles from "./inputForm.module.css";

const InputForm = ({ type, placeholder, value }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      className={`${
        type === "submit" ? styles.submitButton : styles.inputForm
      }`}
    />
  );
};

export default InputForm;

import styles from "./inputForm.module.css";

const InputForm = ({ type, placeholder, value, name, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      className={`${
        type === "submit" ? styles.submitButton : styles.inputForm
      }`}
      onChange={onChange}
    />
  );
};

export default InputForm;

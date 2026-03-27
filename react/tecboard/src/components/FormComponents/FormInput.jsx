import styles from "./FormInput.module.css";
export default function FormInput({ type, placeholder, name, id }) {
  return (
    <input
      type={type}
      className={styles.input}
      name={name}
      placeholder={placeholder}
      id={id}
    />
  );
}
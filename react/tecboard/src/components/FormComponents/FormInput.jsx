import styles from "./FormInput.module.css";
export default function FormInput({ ...props }) {
  return (
    <input
      className={styles.input}
      {...props}
    />
  );
}
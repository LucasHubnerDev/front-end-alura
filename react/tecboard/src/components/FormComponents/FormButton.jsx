import styles from "./FormButton.module.css";
export default function FormButton({ text, type }) {
  return (
    <button type={type} className={styles.button}>
      {text}
    </button>
  );
}
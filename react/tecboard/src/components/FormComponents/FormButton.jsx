import styles from "./FormButton.module.css";
export default function FormButton({ text, ...props }) {
  return (
    <button {...props} className={styles.button}>
      {text}
    </button>
  );
}
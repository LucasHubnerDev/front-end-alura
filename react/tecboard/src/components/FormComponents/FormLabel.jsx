import styles from "./FormLabel.module.css";
export default function FormLabel({ text, htmlForId }) {
  return (
    <label className={styles.label} htmlFor={htmlForId}>
      {text}
    </label>
  );
}
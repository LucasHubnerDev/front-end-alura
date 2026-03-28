import styles from "./FormLabel.module.css";
export default function FormLabel({text, ...props }) {
  return (
    <label className={styles.label} {...props}>
      {text}
    </label>
  );
}
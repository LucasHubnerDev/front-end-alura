import styles from "./FormTitle.module.css";

export default function FormTitle({ text, ...props }) {
  return <h2 className={styles.title} {...props}>{text}</h2>;
}

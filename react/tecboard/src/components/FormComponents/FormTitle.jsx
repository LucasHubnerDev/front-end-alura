import styles from "./FormTitle.module.css";

export default function FormTitle({ text }) {
  return <h2 className={styles.title}>{text}</h2>;
}

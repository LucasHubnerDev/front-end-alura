import styles from "./Form.module.css";

// Form
export default function Form({ children }) {
  return <form className={styles.form}>{children}</form>;
}